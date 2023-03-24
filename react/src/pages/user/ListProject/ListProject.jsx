import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Box, Stack, Button, Skeleton } from '@mui/material';
import TitlePage from '../../../layout/UserLayout/TitlePage/TitlePage';
import ProjectCard from '../../../layout/UserLayout/ProjectCard/ProjectCard';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axiosClient from '../../../axios';
import './ListProject.scss';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#333',
        },
    },
});

const ListProject = () => {
    let { cate_id } = useParams();

    //get list project
    const [projectList, setProjectList] = React.useState([]);
    const [meta, setMeta] = React.useState({});
    const [isloading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        axiosClient.get(`/prjCategory/${cate_id}`)
            .then(({ data }) => {
                setProjectList(data.data);
                setMeta(data.meta);
                setLoading(false);
            })
    }, [cate_id])

    // ==================== Pagination =================
    const handleChangePage = (event, link) => {
        event.preventDefault();
        if (!link.url) {
            return;
        }

        onPageClick(link)
    };

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
                <Box sx={{ width: 1, mt: 3, }}>
                    <ThemeProvider theme={darkTheme}>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            {meta.links && meta.links.map((link, index) => (
                                <Button
                                    key={index}
                                    variant={link.active ? "contained" : "text"}
                                    onClick={event => handleChangePage(event, link)}
                                >
                                    <span dangerouslySetInnerHTML={{ __html: link.label }} />
                                </Button>
                            ))}
                        </Stack>
                    </ThemeProvider>
                </Box>
            </Box>
        </div >
    )
};

export default ListProject;