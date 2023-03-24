import * as React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, Box } from '@mui/material';
import ProjectCard from '../../../../layout/UserLayout/ProjectCard/ProjectCard';
import Skeleton from '@mui/material/Skeleton';
import axiosClient from '../../../../axios';
import './FeaturedProjects.scss';

const FeaturedProjects = () => {
    const [projects, setProjects] = React.useState([]);
    const [isloading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        axiosClient.get('/projects')
            .then(({ data }) => {
                setProjects(data.data)
                setLoading(false);
            })
    }, []);

    return (
        <div className="featured-projects">
            <Box
                sx={{
                    my: 6,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h2" sx={{
                    textTransform: 'uppercase',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '200',
                    fontSize: '38px'
                }}>
                    Dự án nổi bật
                </Typography>
                <Box sx={{ width: 1, mt: 3, }}>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {
                            (isloading ? Array.from(new Array(3)) : projects).map((project, index) => (
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
                <Link className="all_btn" to={"/category/1"}>Xem dự án khác</Link>
            </Box>
        </div >
    )
};

export default FeaturedProjects;