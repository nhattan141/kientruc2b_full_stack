import * as React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';
import useTablePagination from '../../../HOC/useTablePagination';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import { green, grey, teal, red } from '@mui/material/colors';

import ProjectForm from './ProjectForm';

import project3 from '../../../assets/imgs/project3.jpg';

function createData(name, address, img, action) {
    return { name, address, img, action };
}

const rows = [
    createData('1', '1', project3, '1'),
    createData('2', '2', project3, '2'),
    createData('3', '3', project3, '3'),
    createData('4', '4', project3, '4'),
    createData('5', '5', project3, '5'),
    createData('6', '6', project3, '6'),
    createData('7', '7', project3, '7'),
    createData('8', '8', project3, '8'),
    createData('9', '9', project3, '9'),
    createData('10', '10', project3, '10'),
    createData('11', '11', project3, '11'),
    createData('12', '12', project3, '12'),
    createData('13', '13', project3, '13'),
    createData('14', '14', project3, '14'),
    createData('15', '15', project3, '15')
];

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

const actionTheme = createTheme({
    palette: {
        primary: {
            main: teal[500],
        },
        secondary: {
            main: red[500]
        }
    }
})

const ProjectManage = () => {
    // ==================== Pagination =================
    let [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const data = useTablePagination(rows, rowsPerPage);

    let currentData = data.currentTableData();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        data.jumpPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    //Đóng/mở form thêm mới/cập nhật (close/open creation/updation form)
    const [openDialog, setOpenDialog] = React.useState(false);

    // const handleToggleDialog = () => {
    //     setOpenDialog(!openDialog);
    // };

    const handleCloseForm = () => {
        setOpenDialog(false);
    }

    const handleOpenCreateForm = () => {
        setOpenDialog(true);
        setActive('create');
    }

    const handleOpenUpdateForm = () => {
        setOpenDialog(true);
        setActive('update');
    }

    // //Thay đổi active truyền vòa form thêm hoặc sửa (set active create/update for form)
    const [active, setActive] = React.useState('create');

    // let active = 'create';

    // const handleOpenCreateForm = (activeType) => {
    //     handleToggleDialog();
    //     // setActive(activeType);
    //     active = activeType;
    // };

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
                <TableContainer component={Paper} sx={{ mt: 3 }}>
                    <Table sx={{ minWidth: 650, textTransform: "uppercase" }} aria-label="simple table">
                        <ThemeProvider theme={darkTheme}>
                            <TableHead>
                                <TableRow sx={{ background: grey[900] }}>
                                    <TableCell align="center">STT</TableCell>
                                    <TableCell align="center">Tên dự án</TableCell>
                                    <TableCell align="center">Địa chỉ</TableCell>
                                    <TableCell align="center">Hình mặt tiền</TableCell>
                                    <TableCell align="center">Tùy chỉnh</TableCell>
                                </TableRow>
                            </TableHead>
                        </ThemeProvider>
                        <TableBody>
                            {currentData.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{index + 1}</TableCell>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.address}</TableCell>
                                    <TableCell sx={{ display: "flex", justifyContent: "center" }}>
                                        <Box sx={{ width: '35vw', height: '30vh' }}>
                                            <Avatar variant="rounded" sx={{ width: '100%', height: '100%', background: 'white' }} alt="LOGO" src={row.img} />
                                        </Box>
                                    </TableCell>
                                    <TableCell align="center">
                                        <ThemeProvider theme={actionTheme}>
                                            <Tooltip title="Sửa" placement='top-start'>
                                                <IconButton
                                                    aria-label="update"
                                                    size="large"
                                                    color='primary'
                                                    onClick={handleOpenUpdateForm}
                                                >
                                                    <CreateIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Xóa" placement='top-start' color='secondary'>
                                                <IconButton aria-label="delete" size="large">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </ThemeProvider>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box sx={{ width: 1, mt: 3, }}>
                    <TablePagination
                        sx={{ p: 0 }}
                        component="div"
                        count={rows.length}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    />
                </Box>
            </Box>
            <ProjectForm openDialog={openDialog} handleCloseForm={handleCloseForm} active={active} />
        </>
    );
};

export default ProjectManage;