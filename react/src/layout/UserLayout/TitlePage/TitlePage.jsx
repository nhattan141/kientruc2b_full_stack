import * as React from "react";
import { useParams, Link, Navigate } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import { Typography, Grid, Box, Stack } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './TitlePage.scss';
import axiosClient from "../../../axios";

const TitlePage = () => {
    let { project_id, cate_id } = useParams();

    const [projectInfor, setInfor] = React.useState({
        name: "",
        category_id: "",
        category_name: ""
    });
    const [category, setCategory] = React.useState();
    const [isloading, setIsLoading] = React.useState(false);

    const getInfor = (() => {
        setIsLoading(true);
        axiosClient.get(`/projects/${project_id}`)
            .then(({ data }) => {
                setInfor({
                    name: data.data.name,
                    category_id: data.data.category_id,
                    category_name: data.data.category_name
                });
                setIsLoading(false);
            })
    })

    React.useEffect(() => {
        if (project_id) {
            getInfor();
        }
        if (cate_id && cate_id != "all") {
            let categoryUrl = cate_id ? `/categories/${cate_id}` : `/categories/${projectInfor.category_id}`
            axiosClient.get(categoryUrl)
                .then(({ data }) => {
                    setCategory(data.data.cate_name);
                });
        } else {
            setCategory("Tất cả")
        }

    }, [project_id, cate_id]);

    return (
        <div className="title-page">
            <Box sx={{ width: 1, height: 1, background: 'rgba(25,25,25,.5)' }}>
                <Grid container
                    rowSpacing={{ xs: 1, sm: 2, md: 3 }}
                    flexDirection={{ xs: "column", md: "row" }}
                    sx={{
                        width: "auto",
                        height: 1,
                        padding: { md: '80px 80px', xs: "none" },
                        marginTop: "0 !important",
                        color: 'white',
                        justifyContent: { xs: "center" },
                        alignItems: { xs: "center" }
                    }}
                >
                    <Grid item md={12} >
                        <Typography component="div" variant="h2" sx={{
                            textTransform: 'uppercase',
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: '600',
                            fontSize: '36px',
                            textAlign: { xs: 'center', md: 'left' }
                        }}>
                            {isloading ?
                                <Skeleton sx={{ width: 300, height: 60 }} />
                                :
                                cate_id ? category : projectInfor.name}
                        </Typography>
                    </Grid>
                    <Grid item md={12}>
                        <Stack
                            sx={{ justifyContent: { xs: 'center', md: 'left' } }}
                            direction="row"
                            alignItems="center"
                            flexWrap="wrap"
                            spacing={2}
                        >
                            <Link to={`/`}>
                                Trang chủ
                            </Link>
                            <ArrowForwardIosIcon sx={{ fontSize: '12px' }} />
                            {
                                isloading ?
                                    <Skeleton animation="wave" sx={{ width: 100, height: 40 }} />
                                    :
                                    cate_id
                                        ?
                                        <Link to={`/category/${cate_id}`}>
                                            {category}
                                        </Link>
                                        :
                                        <>
                                            <Link to={`/category/${projectInfor.category_id}`} >
                                                {projectInfor.category_name}
                                            </Link>
                                            <ArrowForwardIosIcon sx={{ fontSize: '12px' }} />
                                            <Link to={`/project/${project_id}`}>
                                                {projectInfor.name}
                                            </Link>
                                        </>
                            }
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default TitlePage;