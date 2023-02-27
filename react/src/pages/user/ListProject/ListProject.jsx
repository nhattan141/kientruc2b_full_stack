import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import usePagination from '../../../HOC/usePagination';

import { Typography, Grid, Box, Stack, Pagination } from '@mui/material';

import './ListProject.scss';

import TitlePage from '../../../layout/UserLayout/TitlePage/TitlePage';
import ProjectCard from '../../../layout/UserLayout/ProjectCard/ProjectCard';

import project1 from '../../../assets/imgs/project1.jpg';
import project2 from '../../../assets/imgs/project2.jpg';
import project3 from '../../../assets/imgs/project3.jpg';
import project4 from '../../../assets/imgs/project4.jpg';
import project5 from '../../../assets/imgs/project5.jpg';
import project6 from '../../../assets/imgs/project6.jpg';
import project7 from '../../../assets/imgs/project7.jpg';
import project8 from '../../../assets/imgs/project8.jpg';
import project9 from '../../../assets/imgs/project9.jpg';

const ListProject = () => {
    let { cate_id } = useParams();

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
            proPic: project1,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 8,
            proPic: project2,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 9,
            proPic: project3,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 10,
            proPic: project4,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 11,
            proPic: project5,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 12,
            proPic: project6,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 13,
            proPic: project7,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 14,
            proPic: project8,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 15,
            proPic: project9,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 16,
            proPic: project7,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 17,
            proPic: project8,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 18,
            proPic: project9,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 19,
            proPic: project8,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 20,
            proPic: project9,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 21,
            proPic: project8,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 22,
            proPic: project9,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
        {
            id: 23,
            proPic: project8,
            title: 'Fioretty Villa',
            city: 'Phường 8, thành phố Đà Lạt',
        },
    ];

    // ==================== Pagination =================
    let [page, setPage] = React.useState(1);
    const itemsPerPage = 9;

    const data = usePagination(projects, itemsPerPage);

    let currentData = data.currentData();

    const handleChangePage = (e, p) => {
        setPage(p);
        data.jumpPage(p);
    };

    return (
        <div className="list-project">
            <TitlePage />
            <Box sx={{ flexGrow: 1, padding: '20px' }}>
                <Grid container spacing={2} sx={{
                    // marginLeft: '-16px',
                    marginTop: 0,
                }}>
                    {currentData.map((project, index) => {
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
            <Pagination count={data.maxPage} page={page} onChange={handleChangePage} boundaryCount={2} />
        </div >
    )
};

export default ListProject;