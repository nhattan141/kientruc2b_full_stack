import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import axiosClient from '../../axios';

export default function MediaCard(props) {
    const { id, name, address, image_url, category, handleOpenUpdateForm, handleOpenConfirmDelete } = props;
    const [cateName, setCateName] = React.useState();

    React.useEffect(() => {
        axiosClient.get(`/categories/${category}`)
            .then(({ data }) => {
                setCateName(data.data.cate_name);
            })
    }, []);

    return (
        <Card sx={{ maxWidth: 1 }}>
            <CardMedia
                sx={{ height: 200 }}
                image={image_url}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {address}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {cateName}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between" }}>
                <Button
                    startIcon={<CreateIcon />}
                    variant="contained"
                    size="small"
                    onClick={() => { handleOpenUpdateForm(id) }}
                >
                    Sửa
                </Button>
                <Button
                    startIcon={<DeleteIcon />}
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => { handleOpenConfirmDelete(id) }}
                >
                    Xóa
                </Button>
            </CardActions>
        </Card>
    );
}