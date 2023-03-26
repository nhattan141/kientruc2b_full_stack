import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Box, Stack, Button, Skeleton } from '@mui/material';
import TitlePage from '../../../layout/UserLayout/TitlePage/TitlePage';
import ProjectCard from '../../../layout/UserLayout/ProjectCard/ProjectCard';
import axiosClient from '../../../axios';
import './ListProject.scss';
import Pagination from '@mui/material/Pagination';

const ListProject = () => {
    let { cate_id } = useParams();

    //get list project
    const [projectList, setProjectList] = React.useState([]);
    const [meta, setMeta] = React.useState({});
    const [isloading, setLoading] = React.useState(false);

    const [page, setPage] = React.useState(1);

    const getProjectList = (url) => {
        setLoading(true);
        url = url || `/prjCategory/${cate_id}`;
        axiosClient.get(url)
            .then(({ data }) => {
                setLoading(false);
                setProjectList(data.data);
                setMeta(data.meta);
            })
    }

    React.useEffect(() => {
        getProjectList();
    }, [cate_id])

    // ==================== Pagination =================
    const handleChangePage = (event, value) => {
        if (!meta.links.at(value).url) {
            return;
        }

        setPage(value);
        onPageClick(meta.links.at(value));
    };

    const onPageClick = (link) => {
        getProjectList(link.url);
    }

    return (
        <div className="list-project">
            <TitlePage />
            <Box
                sx={{
                    my: 6,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box sx={{
                    width: 1, mt: 3
                }}>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {
                            (isloading ? Array.from(new Array(3)) : projectList).map((project, index) => (
                                <Grid key={index} item xs={12} sm={6} md={4}>
                                    {project ? (
                                        <ProjectCard
                                            id={project.id}
                                            title={project.name}
                                            image={project.image_url.at(0).url}
                                            address={project.address}
                                            category={project.category_id}
                                        />
                                    ) : (
                                        <Box>
                                            <Skeleton variant="rectangular" sx={{ height: 200, width: 1 }} />
                                            <Skeleton />
                                            <Skeleton width="60%" />
                                        </Box>
                                    )}
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
                <Box sx={{ mt: 5 }}>
                    <Pagination count={meta.last_page} page={page} onChange={handleChangePage} boundaryCount={2} />
                </Box>
            </Box>
        </div >
    )
};

export default ListProject;