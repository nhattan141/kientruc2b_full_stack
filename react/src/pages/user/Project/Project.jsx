import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Box, Avatar } from '@mui/material';

import TitlePage from '../../../layout/UserLayout/TitlePage/TitlePage';

import './Project.scss';

import project1 from '../../../assets/imgs/project1.jpg';
import project2 from '../../../assets/imgs/project2.jpg';
import project3 from '../../../assets/imgs/project3.jpg';
import project4 from '../../../assets/imgs/project4.jpg';
import project5 from '../../../assets/imgs/project5.jpg';
import project6 from '../../../assets/imgs/project6.jpg';
import project7 from '../../../assets/imgs/project7.jpg';
import project8 from '../../../assets/imgs/project8.jpg';

const Project = () => {
    let { project_id } = useParams();

    const projectImages = [
        {
            proPic: project1,
        },
        {
            proPic: project2,
        },
        {
            proPic: project3,
        },
        {
            proPic: project4,
        },
        {
            proPic: project5,
        },
        {
            proPic: project6,
        },
        {
            proPic: project7,
        },
        {
            proPic: project8,
        },
    ];

    const imgs = projectImages.length;

    //customize prev btn, next btn slick slider
    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div className='slide-btn-left' onClick={onClick}>❮</div>
        );
    }

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <div className='slide-btn-right' onClick={onClick}>❯</div>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="project">
            <TitlePage category={"category"} />
            <Box sx={{
                flexGrow: 1,
                padding: '20px',
                height: '400px',
                width: '95%'
            }}
            >
                <Slider {...settings}>
                    {projectImages.map((projectimg, index) => {
                        return (
                            <div className='img-box' key={index} >
                                <Avatar
                                    sx={{ width: '100%', height: '100%' }}
                                    variant="square"
                                    alt="Product"
                                    src={projectimg.proPic}
                                />
                            </div>
                        )
                    })
                    }
                </Slider>
            </Box>
        </div >
    );
};

export default Project;