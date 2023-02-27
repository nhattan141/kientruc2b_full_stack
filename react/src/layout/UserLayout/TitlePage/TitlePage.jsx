import * as React from "react";
import { useParams, Link } from 'react-router-dom';

import { Typography, Grid, Box, Stack } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './TitlePage.scss';

const TitlePage = (props) => {
    let { project_id, cate_id } = useParams();
    return (
        <div className="title-page">
            <Box sx={{ flexGrow: 1, background: 'rgba(25,25,25,.5)' }}>
                <Grid container spacing={2} sx={{
                    width: '100vw',
                    height: '260px',
                    padding: '80px',
                    marginTop: 0,
                    color: 'white'
                }}>
                    <Grid item md={12} sx={{ width: '100%', }}>
                        <Typography variant="h2" sx={{
                            textTransform: 'uppercase',
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: '600',
                            fontSize: '36px',
                            textAlign: 'center'
                        }}>
                            {cate_id ? cate_id : project_id}
                        </Typography>
                    </Grid>
                    <Grid item md={12}>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            flexWrap="wrap"
                            spacing={2}
                        >
                            <Link to={`/`}>
                                Trang chu
                            </Link>
                            <ArrowForwardIosIcon sx={{ fontSize: '12px' }} />
                            {
                                cate_id
                                    ?
                                    <Link to={`category/${cate_id}`}>
                                        {cate_id}
                                    </Link>
                                    :
                                    <>
                                        <Link to={`category/${props.category}`}>
                                            {props.category}
                                        </Link>
                                        <ArrowForwardIosIcon sx={{ fontSize: '12px' }} />
                                        <Link to={`project/${project_id}`}>
                                            {project_id}
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