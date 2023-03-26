<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Image;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
// use GuzzleHttp\Psr7\Request;
use Illuminate\Http\Request;
use IlLuminate\Support\Str;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return ProjectResource::collection(
            Project::orderBy('projects.created_at', 'desc')
                ->paginate(9)
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        $data = $request;

        Project::create([
            'name' => $data['name'],
            'address' => $data['address'],
            'category_id' => $data['category_id']
        ]);

        $prj_id = Project::latest()->first()->id;

        //check if image was given and save on local system
        if (isset($data['frontImage'])) {
            $frontImgPath = $this->saveImage($data['frontImage']);

            Image::create([
                'project_id' => $prj_id,
                'type' => 1,
                'url' => $frontImgPath
            ]);
        }
        if (isset($data['interiorImage'])) {
            foreach ($data['interiorImage'] as $image) {
                $interiorImgPath = $this->saveImage($image);

                Image::create([
                    'project_id' => $prj_id,
                    'type' => 0,
                    'url' => $interiorImgPath
                ]);
            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project, Request $request)
    {
        return new ProjectResource($project);
    }

    public function showProjectOfCategory(String $id)
    {
        if ($id == "all") {
            return ProjectResource::collection(
                Project::orderBy('projects.created_at', 'desc')
                    ->paginate(9)
            );
        }
        return ProjectResource::collection(
            Project::where('category_id', $id)
                ->orderBy('projects.created_at', 'desc')
                ->paginate(9)
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project, Request $request)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProjectRequest  $request
     * @param  \App\Models\Project  $survey
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $data = $request->validated();

        // Update project in the database
        $project->update($data);
        $prj_id = $project->latest()->first()->id;

        if (isset($data['frontImage'])) {
            $frontImagePath = $this->saveImage($data['frontImage']);
            $exitsFrontImagePath = Image::where('project_id', $prj_id)->where('type', 1)->pluck('url');
            Image::where('project_id', $prj_id)
                ->where('type', 1)
                ->update(['url' => $frontImagePath]);

            // If there is an old image, delete it
            if ($exitsFrontImagePath) {
                $absolutePath = public_path($exitsFrontImagePath);
                File::delete($absolutePath);
            }
        }
        if (isset($data['interiorImage'])) {
            $exitsInteriorImagePath = Image::where('project_id', $prj_id)
                ->where('type', 0)->pluck('url');
            foreach ($data['interiorImage'] as $image) {
                if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
                    $interiorImgPath = $this->saveImage($image);
                    Image::create([
                        'project_id' => $prj_id,
                        'type' => 0,
                        'url' => $interiorImgPath
                    ]);
                } else {
                    // If there is an old image, delete it
                    $exitsInteriorImagePath[] = substr($image, strpos($image, 'images'));
                }
            }

            //find the item is appear one time
            for ($i = 0; $i < count($exitsInteriorImagePath); $i++) {
                $count = 1;
                for ($j = 0; $j < count($exitsInteriorImagePath); $j++) {
                    if ($exitsInteriorImagePath[$i] == $exitsInteriorImagePath[$j] && $i !== $j) {
                        $count += 1;
                    }
                }
                if ($count == 1) {
                    //delete image in db
                    Image::where('project_id', $prj_id)
                        ->where('type', 0)
                        ->where('url', $exitsInteriorImagePath[$i])
                        ->delete();

                    //delete image in system
                    $absolutePath = public_path($exitsInteriorImagePath[$i]);
                    File::delete($absolutePath);
                }
            }
        }

        return new ProjectResource($project);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project, Request $request)
    {
        $project->delete();
        $prj_id = $project->id;
        $exitsInteriorImagePath = Image::where('project_id', $prj_id)->pluck('url');
        foreach ($exitsInteriorImagePath as $path) {
            //delete image in system
            $absolutePath = public_path($path);
            File::delete($absolutePath);
        }
        Image::where('project_id', $prj_id)->delete();
        return response('', 204);
    }

    /**
     * save image on local system and return saved image path
     *
     * @param $image
     * @throws Exception
     * @author Admin
     */

    public function saveImage($image)
    {
        // Check if image is valid base64 string
        if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
            // Take out the base64 encoded text without mime type
            $image = substr($image, strpos($image, ',') + 1);
            // Get file extension
            $type = strtolower($type[1]); // jpg, png, gif

            // Check if file is an image
            if (!in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) {
                throw new \Exception('invalid image type');
            }
            $image = str_replace(' ', '+', $image);
            $image = base64_decode($image);

            if ($image === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception('did not match data URI with image data');
        }

        $dir = 'images/';
        $file = Str::random() . '.' . $type;
        $absolutePath = public_path($dir);
        $relativePath = $dir . $file;
        if (!File::exists($absolutePath)) {
            File::makeDirectory($absolutePath, 0755, true);
        }
        file_put_contents($relativePath, $image);

        return $relativePath;
    }
}
