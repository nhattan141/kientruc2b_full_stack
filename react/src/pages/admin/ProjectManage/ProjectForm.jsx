import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axiosClient from '../../../axios.js';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

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
    //thông tin dự án (project information)
    const [prjInfor, setPrjInfor] = React.useState({
        name: "",
        address: "",
        category_id: null,
        frontImage: "",
        interiorImage: [],
        frontImgPreview: "",
        interImgPreview: [],
    });
    const [error, setError] = React.useState({ __html: [] });
    const [listUrl, setListUrl] = React.useState([]);
    const [status, setStatus] = React.useState();
    const [openNotice, setOpenNotice] = React.useState(false);

    const handleOnChangeInput = (event) => {
        if (event.target.name == "frontImage") {
            const reader = new FileReader();
            let data = event.target.files;
            let file = data[0];
            reader.onload = () => {
                setPrjInfor({
                    ...prjInfor,
                    frontImgPreview: reader.result,
                    frontImage: file
                });

                event.target.value = "";
            }
            reader.readAsDataURL(file);
        } else if (event.target.name == "interImgPreview") {
            let data = event.target.files;
            let listURL = [], listFile = [];
            let file;
            for (let i = 0; i < data.length; i++) {
                let reader = new FileReader();
                file = data[i];
                reader.onload = () => {
                    let interImgURL = reader.result;
                    listURL.unshift(interImgURL);
                    listFile.unshift(file);
                    let interiorImageFile = prjInfor.interiorImage ? [...prjInfor.interiorImage] : [];
                    setPrjInfor({
                        ...prjInfor,
                        interImgPreview: [...listURL, ...prjInfor.interImgPreview],
                        interiorImage: [...listFile, ...interiorImageFile]
                    });

                }
                reader.readAsDataURL(file)
            }
        }
        else setPrjInfor({ ...prjInfor, [event.target.name]: event.target.value });
    };

    //chuc nang xoa hinh noi that
    const handleDeleteImg = (index) => {
        prjInfor.interImgPreview.splice(index, 1);
        prjInfor.interiorImage && prjInfor.interiorImage.splice(index, 1);
        let interiorImageFile = prjInfor.interiorImage ? [...prjInfor.interiorImage] : [];

        setPrjInfor({
            ...prjInfor,
            interImgPreview: [...prjInfor.interImgPreview],
            interiorImage: [...interiorImageFile]
        });
    }

    const setEmptyInput = () => {
        setPrjInfor({
            name: "",
            address: "",
            category_id: null,
            frontImage: "",
            interiorImage: [],
            frontImgPreview: "",
            interImgPreview: [],
        })
    }

    React.useEffect(() => {
        if (props.active == "create") {
            setEmptyInput();
        }
    }, [props.active]);

    React.useEffect(() => {
        if (props.projectId) {
            axiosClient.get(`/projects/${props.projectId}`)
                .then(({ data }) => {
                    let interUrlList = data.data.image_url.filter((item) => {
                        return item.type == "0"
                    })
                    setPrjInfor({
                        name: data.data.name,
                        address: data.data.address,
                        category_id: data.data.category_id,
                        frontImgPreview: data.data.image_url.at(0).url,
                        interImgPreview: interUrlList.map(item => { return item.url })
                    });
                })
        }
    }, [props.projectId])

    React.useEffect(() => {
        setListUrl(prjInfor.interImgPreview);
    }, [prjInfor.interImgPreview]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const payload = { ...prjInfor };
        if (payload.frontImage) {
            payload.frontImage = payload.frontImgPreview;
        }
        if (payload.interiorImage) {
            payload.interiorImage = payload.interImgPreview;
        }

        delete payload.frontImgPreview;
        delete payload.interImgPreview;

        let res = null;
        props.active === 'create' ?
            (res = axiosClient.post('/projects', payload)) :
            (res = axiosClient.put(`/projects/${props.projectId}`, payload))

        res.then((res) => {
            if (res.status == 200) {
                setStatus(1);//success
                setOpenNotice(true);
                props.setProjectId(null);
                props.setSuccess(!props.isSuccess)
                setEmptyInput();
            } else {
                setStatus(0);//fail
                setOpenNotice(true);
            }
        })
            .catch((error) => {
                setStatus(0);//fail
                setOpenNotice(true);
                if (error.response) {
                    const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) =>
                        [...accum, ...next], []);
                    console.log(finalErrors);
                    setError({ __html: finalErrors });
                }
                console.error(error)
            })

    };

    const handleCloseNotice = (index) => {
        error.__html.splice(index, 1);
        setError({ ...error, __html: [...error.__html] })
    }

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
                                <Box sx={{ width: { md: '45vw' } }}>
                                    <Box sx={{ width: '100%' }}>
                                        <Collapse in={openNotice}>
                                            {
                                                status === 0 ? error.__html &&
                                                    error.__html.map((item, index) =>
                                                        <Alert
                                                            key={index}
                                                            severity="error"
                                                            action={
                                                                <IconButton
                                                                    aria-label="close"
                                                                    color="inherit"
                                                                    size="small"
                                                                    onClick={() => {
                                                                        handleCloseNotice(index);
                                                                    }}
                                                                >
                                                                    <CloseIcon fontSize="inherit" />
                                                                </IconButton>
                                                            }
                                                            sx={{ mb: 2 }}
                                                        >
                                                            {item}
                                                        </Alert>
                                                    )
                                                    :
                                                    <Alert
                                                        severity="success"
                                                        action={
                                                            <IconButton
                                                                aria-label="close"
                                                                color="inherit"
                                                                size="small"
                                                                onClick={() => {
                                                                    setOpenNotice(!openNotice);
                                                                }}
                                                            >
                                                                <CloseIcon fontSize="inherit" />
                                                            </IconButton>
                                                        }
                                                        sx={{ mb: 2 }}
                                                    >
                                                        {props.active === 'create' ?
                                                            'Thêm dự án thành công' :
                                                            'Sửa dự án thành công'}

                                                    </Alert>
                                            }
                                        </Collapse>
                                    </Box>
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
                                    <Box>
                                        <FormControl>
                                            <FormLabel id="category_id">Loại dự án</FormLabel>
                                            <RadioGroup
                                                row
                                                aria-labelledby="category_id"
                                                name="category_id"
                                                value={prjInfor.category_id}
                                                onChange={handleOnChangeInput}
                                            >
                                                <FormControlLabel value={1} control={<Radio />} label="Nhà phố" />
                                                <FormControlLabel value={2} control={<Radio />} label="Biệt thự" />
                                                <FormControlLabel value={3} control={<Radio />} label="Văn phòng" />
                                                <FormControlLabel value={4} control={<Radio />} label="Khách sạn" />
                                                <FormControlLabel value={5} control={<Radio />} label="Xây dựng" />
                                                <FormControlLabel value={6} control={<Radio />} label="Chung cư" />
                                                <FormControlLabel value={7} control={<Radio />} label="Nhà hàng" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Box>
                                    <FormControlLabel
                                        control={
                                            <IconButton color="primary" aria-label="upload picture" component="label">
                                                <input
                                                    hidden
                                                    accept="image/*"
                                                    type="file"
                                                    id="frontImage"
                                                    name="frontImage"
                                                    onChange={handleOnChangeInput}
                                                />
                                                <PhotoCamera />
                                            </IconButton>
                                        }
                                        label="Thêm hình mặt tiền"
                                    />
                                    <Box sx={{ width: { xs: '100%' }, height: 450 }}>
                                        <Avatar variant="rounded" sx={{ width: '100%', height: '100%' }} alt="LOGO" src={prjInfor.frontImgPreview} />
                                    </Box>
                                </Box>
                                <Box sx={{ width: { md: '45vw' } }}>
                                    <FormControlLabel
                                        control={
                                            <IconButton color="primary" aria-label="upload picture" component="label">
                                                <input
                                                    hidden
                                                    accept="image/*"
                                                    type="file"
                                                    multiple={true}
                                                    id="interImgPreview"
                                                    name="interImgPreview"
                                                    onChange={handleOnChangeInput}
                                                />
                                                <PhotoCamera />
                                            </IconButton>
                                        }
                                        label="Thêm hình nội thất"
                                    />
                                    <Box
                                        sx={{
                                            width: { xs: '100%' },
                                            height: 720,
                                            overflowY: "scroll"
                                        }}
                                    >
                                        <ImageList cols={3} rowHeight={200} sx={{ overflowY: "none" }}>
                                            {listUrl
                                                && listUrl.map((item, index) => (
                                                    <ImageListItem key={index}>
                                                        <img
                                                            src={item}
                                                            srcSet={item}
                                                            alt="Hinh noi that"
                                                            loading="lazy"
                                                        />
                                                        <ImageListItemBar
                                                            sx={{
                                                                background:
                                                                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                                                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                                            }}
                                                            position="top"
                                                            actionIcon={
                                                                <Tooltip title="Xóa" placement='top-start' color='primary'>
                                                                    <IconButton
                                                                        sx={{ color: 'white' }}
                                                                        aria-label="delete"
                                                                        size="large"
                                                                        onClick={() => { handleDeleteImg(index) }}
                                                                    >
                                                                        <DeleteIcon />
                                                                    </IconButton>
                                                                </Tooltip>
                                                            }
                                                            actionPosition="right"
                                                        />
                                                    </ImageListItem>
                                                ))}
                                        </ImageList>
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