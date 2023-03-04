import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axiosClient from '../../../axios.js';
import { useStateContext } from '../../../contexts/ContextProvider';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © 2B+ARCHI 2023.'}
        </Typography>
    );
}

// const theme = createTheme();
const theme = createTheme({
    palette: {
        primary: {
            main: "#333",
        },
    },
});

export default function SignUpSide() {
    const { setCurrentUser, setUserToken } = useStateContext();

    const [signup, setSignup] = React.useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = React.useState({ __html: '' });

    const handleOnChangeInput = (event) => {
        setSignup({ ...signup, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setError({ __html: '' });

        axiosClient.post('/signup', {
            name: signup.name,
            email: signup.email,
            password: signup.password,
            password_confirmation: signup.confirmPassword
        })
            .then(({ data }) => {
                setCurrentUser(data.user);
                setUserToken(data.token);
            })
            .catch((error) => {
                if (error.response) {
                    const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) =>
                        [...accum, ...next], []);
                    console.log(finalErrors);
                    setError({ __html: finalErrors });
                }
                console.error(error)
            })
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, backgroundColor: "#333", }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Đăng ký
                        </Typography>
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
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Tên tài khoản"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                value={signup.name}
                                onChange={handleOnChangeInput}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                value={signup.email}
                                onChange={handleOnChangeInput}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Mật khẩu"
                                type="password"
                                id="password"
                                value={signup.password}
                                onChange={handleOnChangeInput}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Xác nhận mật khẩu"
                                type="password"
                                id="confirmPassword"
                                value={signup.confirmPassword}
                                onChange={handleOnChangeInput}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, }}
                            >
                                Đăng ký
                            </Button>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}