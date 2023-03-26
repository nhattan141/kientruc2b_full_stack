import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { green } from '@mui/material/colors';
import axiosClient from '../../../axios.js';
import Pagination from '@mui/material/Pagination';
import Skeleton from '@mui/material/Skeleton';

import ProjectForm from './ProjectForm';
import Card from '../../../layout/ProjectCard/Card';
import ConfirmDeleteDialog from './ConfirmDeleteDialog';

import './ProjectManage.scss';

const btnTheme = createTheme({
    palette: {
        primary: {
            main: green[500],
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#333',
        },
    },
});

const ProjectManage = () => {
    //get list project
    const [projectList, setProjectList] = React.useState([]);
    const [meta, setMeta] = React.useState({});
    const [isloading, setLoading] = React.useState(false);
    const [projectId, setProjectId] = React.useState();
    const [page, setPage] = React.useState(1);
    //check update or delete if success
    const [isSuccess, setSuccess] = React.useState(false);

    const onPageClick = (link) => {
        getProjectList(link.url);
    }

    const getProjectList = (url) => {
        setLoading(true);
        url = url || '/projects';
        axiosClient.get(url)
            .then(({ data }) => {
                setLoading(false);
                setProjectList(data.data);
                setMeta(data.meta);
            })
    }

    React.useEffect(() => {
        getProjectList();
    }, [isSuccess])

    // ==================== Pagination =================
    const handleChangePage = (event, value) => {
        if (!meta.links.at(value).url) {
            return;
        }

        setPage(value);
        onPageClick(meta.links.at(value));
    };

    //Đóng/mở form thêm mới/cập nhật (close/open creation/updation form)
    const [openDialog, setOpenDialog] = React.useState(false);
    // //Thay đổi active truyền vòa form thêm hoặc sửa (set active create/update for form)
    const [active, setActive] = React.useState();

    const handleCloseForm = () => {
        setOpenDialog(false);
    }

    const handleOpenCreateForm = () => {
        setOpenDialog(true);
        setActive('create');
    }

    const handleOpenUpdateForm = (projectId) => {
        setProjectId(projectId);
        setOpenDialog(true);
        setActive('update');
    }

    //set open for dialog confirm delete project
    const [openConfirmDelete, setOpenConfirm] = React.useState(false);
    const handleOpenConfirmDelete = (projectId) => {
        setProjectId(projectId);
        setOpenConfirm(true);
    }
    const handleCloseConfirmDelete = () => {
        setProjectId(null);
        setOpenConfirm(false);
    }

    return (
        <>
            <Box
                sx={{
                    my: 6,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        fontFamily: 'Montserrat, sans-serif',
                    }}
                >
                    Quản lý dự án
                </Typography>
                <Box sx={{ width: 1, mt: 3, }}>
                    <ThemeProvider theme={btnTheme}>
                        <Button
                            variant="contained"
                            endIcon={<AddIcon />}
                            sx={{
                                display: { md: 'flex' },
                                color: 'white',
                                transition: 'all 0.5s ease-in-out',
                                "&:hover": {
                                    WebkitBoxReflect: 'below 5px linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.5))',
                                    // boxShadow: `0 0 50px ${green[500]}`,
                                }
                            }}
                            onClick={handleOpenCreateForm}
                        >
                            Thêm dự án mới
                        </Button>
                    </ThemeProvider>
                </Box>
                <Box sx={{ width: 1, mt: 3, }}>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {
                            (isloading ? Array.from(new Array(3)) : projectList).map((project, index) => (
                                <Grid key={index} item xs={12} sm={6} md={4}>
                                    {project ? (
                                        <Card
                                            id={project.id}
                                            name={project.name}
                                            address={project.address}
                                            image_url={project.image_url.at(0).url}
                                            category={project.category_name}
                                            handleOpenUpdateForm={handleOpenUpdateForm}
                                            handleOpenConfirmDelete={handleOpenConfirmDelete}
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
            <ProjectForm
                projectId={projectId}
                openDialog={openDialog}
                handleCloseForm={handleCloseForm}
                active={active}
                setProjectId={setProjectId}
                setSuccess={setSuccess}
                isSuccess={isSuccess}
            />
            <ConfirmDeleteDialog
                projectId={projectId}
                openConfirmDelete={openConfirmDelete}
                handleCloseConfirmDelete={handleCloseConfirmDelete}
                setSuccess={setSuccess}
                isSuccess={isSuccess}
            />
        </>
    );
};

export default ProjectManage;