import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import logoA from '../../../assets/imgs/logoA.png';
import { useNavigate } from "react-router-dom";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#333',
        },
    },
});

const pages = [
    {
        link: '/admin/projects',
        name: 'Dự án'
    },
];
const settings = ['Đăng xuất'];

const HeaderAdmin = (props) => {
    let navigateTo = useNavigate();

    const { currentUser, handleLogout } = props;

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ display: { xs: 'none', md: 'flex', width: '35px', height: '35px' }, mr: 1 }}>
                            <Avatar sx={{ width: '100%', height: '100%', background: 'white' }} alt="LOGO" src={logoA} />
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            2B+ARCHI
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page, index) => (
                                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                                        <Link
                                            sx={{ color: 'white' }}
                                            underline="none"
                                            href={page.link}>
                                            <Typography textAlign="center">{page.name}</Typography>
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none', width: '35px', height: '35px' }, mr: 1 }}>
                            <Avatar sx={{ width: '100%', height: '100%', background: 'white' }} alt="LOGO" src={logoA} />
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                fontFamily: 'Montserrat, sans-serif',
                                flexGrow: 1,
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            2B+ARCHI
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page, index) => (
                                <Button
                                    key={index}
                                    onClick={() => handleCloseNavMenu(page.link)}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <Link
                                        sx={{ color: 'white' }}
                                        underline="none"
                                        href={page.link}>
                                        {page.name}
                                    </Link>
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                            <Typography
                                variant="p"
                                noWrap
                                component="a"
                                href=""
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'Montserrat, sans-serif',
                                    flexGrow: 1,
                                    fontWeight: 200,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                {currentUser.name}
                            </Typography>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, background: 'white' }}>
                                    <Avatar alt="Remy Sharp" src={currentUser.avatar} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <Typography
                                    variant="p"
                                    noWrap
                                    component="a"
                                    href=""
                                    sx={{
                                        display: {
                                            xs: 'flex',
                                            md: 'none',
                                            color: 'white',
                                            justifyContent: 'center'
                                        },
                                        fontFamily: 'Montserrat, sans-serif',
                                        flexGrow: 1,
                                        fontWeight: 200,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {currentUser.name}
                                </Typography>
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleLogout}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default HeaderAdmin;