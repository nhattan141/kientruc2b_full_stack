import * as React from 'react';

import { Typography, Grid, Box } from '@mui/material';

import ProjectCard from '../../../../layout/UserLayout/ProjectCard/ProjectCard';

import './FeaturedProjects.scss';

import project1 from '../../../../assets/imgs/project1.jpg';
import project2 from '../../../../assets/imgs/project2.jpg';
import project3 from '../../../../assets/imgs/project3.jpg';
import project4 from '../../../../assets/imgs/project4.jpg';
import project5 from '../../../../assets/imgs/project5.jpg';
import project6 from '../../../../assets/imgs/project6.jpg';
import project7 from '../../../../assets/imgs/project7.jpg';
import project8 from '../../../../assets/imgs/project8.jpg';
import project9 from '../../../../assets/imgs/project9.jpg';

const FeaturedProjects = () => {
    const projects = [
        {
            id: 1,
            proPic: project1,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 2,
            proPic: project2,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 3,
            proPic: project3,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 4,
            proPic: project4,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 5,
            proPic: project5,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 6,
            proPic: project6,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 7,
            proPic: project7,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 8,
            proPic: project8,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 9,
            proPic: project9,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
    ];

    return (
        <div className="featured-projects">
            <Typography variant="h2" sx={{
                textTransform: 'uppercase',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '200',
                fontSize: '38px'
            }}>
                Dự án nổi bật
            </Typography>
            <Box sx={{ flexGrow: 1, padding: '20px' }}>
                <Grid container spacing={2} sx={{
                    // marginLeft: '-16px',
                    marginTop: 0,
                }}>
                    {projects.map((project, index) => {
                        return (
                            <Grid item xs={12} md={4} key={index} >
                                <ProjectCard
                                    id={project.id}
                                    title={project.title}
                                    image={project.proPic}
                                    address={project.city}
                                />
                            </Grid>
                        )
                    })
                    }
                </Grid>
            </Box>
            <a className="all_btn" href="/projects">Xem tất cả dự án</a>
        </div >
    )
};

export default FeaturedProjects;