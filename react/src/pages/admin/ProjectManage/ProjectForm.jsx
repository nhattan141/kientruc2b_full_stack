import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axiosClient from '../../../axios.js';
import { useStateContext } from '../../../contexts/ContextProvider';

import project3 from '../../../assets/imgs/project3.jpg';

// const theme = createTheme();
const theme = createTheme({
    palette: {
        primary: {
            main: "#333",
        },
    },
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectForm = (props) => {
    const { setCurrentUser, setUserToken, currentUser, userToken } = useStateContext();

    //thông tin dự án (project information)
    const [prjInfor, setPrjInfor] = React.useState({
        name: "",
        address: "",
        frontImage: "",
        interiorImage: ""
    });
    const [error, setError] = React.useState({ __html: '' });

    const handleOnChangeInput = (event) => {
        setPrjInfor({ ...prjInfor, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        console.log('save');
        props.handleCloseForm();
        // event.preventDefault();
        // setError({ __html: '' });

        // axiosClient.post('/prjInfor', {
        //     email: prjInfor.email,
        //     password: prjInfor.password
        // })
        //     .then(({ data }) => {
        //         setCurrentUser(data.user);
        //         setUserToken(data.token);
        //     })
        //     .catch((error) => {
        //         if (error.response) {
        //             const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) =>
        //                 [...accum, ...next], []);
        //             console.log(finalErrors);
        //             setError({ __html: finalErrors });
        //         }
        //         console.error(error)
        //     })
    };

    return (
        <ThemeProvider theme={theme}>
            <Dialog
                fullScreen
                open={props.openDialog}
                onClose={props.handleCloseForm}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={props.handleCloseForm}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {props.active === 'create' ? 'Thêm mới dự án' : 'Sửa dự án'}
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleSubmit}>
                            Lưu
                        </Button>
                    </Toolbar>
                </AppBar>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid item xs={12} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            {error.__html && (
                                <Grid
                                    container
                                    spacing={2}
                                    sx={{
                                        background: "#f44336",
                                        color: "white",
                                        mt: 1,
                                        p: 1,
                                        borderRadius: 2,
                                        width: "100%",
                                        ml: 0
                                    }}
                                >
                                    {
                                        error.__html.map((item, index) =>
                                            <Grid item md={12} key={index}>
                                                {item}
                                            </Grid>
                                        )
                                    }
                                </Grid>
                            )}
                            <Box
                                component="form"
                                noValidate
                                onSubmit={handleSubmit}
                                sx={{
                                    mt: 1,
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: 'row' },
                                    width: '100%',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <Box>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Tên dự án"
                                        name="name"
                                        autoFocus
                                        value={prjInfor.name}
                                        onChange={handleOnChangeInput}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="address"
                                        label="Dịa chỉ"
                                        name="address"
                                        value={prjInfor.address}
                                        onChange={handleOnChangeInput}
                                    />
                                    <FormControlLabel
                                        control={
                                            <IconButton color="primary" aria-label="upload picture" component="label">
                                                <input hidden accept="image/*" type="file" />
                                                <PhotoCamera />
                                            </IconButton>
                                        }
                                        label="Thêm hình mặt tiền"
                                    />
                                    <Box sx={{ width: '35vw', height: '30vh' }}>
                                        <Avatar variant="rounded" sx={{ width: '100%', height: '100%' }} alt="LOGO" src='' />
                                    </Box>
                                </Box>
                                <Box>
                                    <FormControlLabel
                                        control={
                                            <IconButton color="primary" aria-label="upload picture" component="label">
                                                <input hidden accept="image/*" type="file" />
                                                <PhotoCamera />
                                            </IconButton>
                                        }
                                        label="Thêm hình nội thất"
                                    />
                                    <Box sx={{ width: '35vw', height: '30vh' }}>
                                        <Avatar variant="rounded" sx={{ width: '100%', height: '100%' }} alt="LOGO" src='' />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Dialog>
        </ThemeProvider>
    );
};

export default ProjectForm;