import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Typography, Avatar } from '@mui/material';

import './ProjectCard.scss';

const ProjectCard = (props) => {
    return (
        <div className='project-card'>
            <div className='project-img'>
                <Link to={`/project/${props.id}`}>
                    <Avatar sx={{ width: '100%', height: '100%' }} variant="square" alt="Product" src={props.image} />
                </Link>
            </div>
            <div className='project-body'>
                <Typography variant="h6" sx={{
                    textTransform: 'uppercase',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '400',
                    fontSize: '18px'
                }}>
                    {props.title}
                </Typography>
                <Typography variant="h6" sx={{
                    textTransform: 'uppercase',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '200',
                    fontSize: '14px'
                }}>
                    {props.address}
                </Typography>
            </div>
        </div>
    );
};

export default ProjectCard;