<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Image;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
use GuzzleHttp\Psr7\Request;
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
        $projects = ProjectResource::collection(
            DB::table('projects')
                ->join('images', 'projects.id', '=', 'images.project_id')
                ->join('categories', 'projects.category_id', '=', 'categories.id')
                ->select('projects.*', 'images.url', 'images.type', 'categories.cate_name')
                ->orderBy('projects.created_at', 'desc')
                ->paginate(10)
                ->get()
        );

        return $projects;
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
    public function show(Project $project)
    {
        return new ProjectResource($project);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $data = $request->validate();

        if (isset($data['frontImage'])) {
            $frontImgPath = $this->saveImage($data['frontImage']);
            $data['frontImage'] = $frontImgPath;
        }
        if (isset($data['interiorImage'])) {
            foreach ($data['interiorImage'] as $image) {
                $interiorImgPath = $this->saveImage($image);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        //
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
        //check if image is valid base64 string
        if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
            //take out the base 64 encoded test without text without mine type
            $image = substr($image, strpos($image, ',') + 1);
            //Get file extension
            $type = strtolower($type[1]); // jpg, png, gif

            //Check if file is an image
            if (!in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) {
                throw new \Exception('File không hợp lệ');
            }

            if ($image === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception('Did not match data URI with image data');
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
