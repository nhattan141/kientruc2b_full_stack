import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Skeleton from '@mui/material/Skeleton';
import axiosClient from '../../../axios';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmDeleteDialog = (props) => {
    const { projectId, openConfirmDelete, handleCloseConfirmDelete, setSuccess, isSuccess } = props;
    const [proName, setProName] = React.useState();
    const [isloading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if (projectId) {
            setLoading(true);
            axiosClient.get(`/projects/${projectId}`)
                .then(({ data }) => {
                    setProName(data.data.name);
                    setLoading(false);
                })
        }
    }, [projectId]);

    const handleDeleteProject = (id) => {
        axiosClient.delete(`/projects/${id}`)
            .then((res) => {
                setSuccess(!isSuccess);
                handleCloseConfirmDelete();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <Dialog
            open={openConfirmDelete}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseConfirmDelete}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Bạn có chắc chắn muốn xóa dự án này?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description" sx={{ textAlign: "center" }}>
                    {isloading ?
                        (<Skeleton animation="wave" />) :
                        proName
                    }
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ justifyContent: "space-between" }}>
                <Button variant="contained" onClick={() => handleDeleteProject(projectId)}>Xác nhận</Button>
                <Button variant="outlined" color="error" onClick={handleCloseConfirmDelete}>Hủy bỏ</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmDeleteDialog;