import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Avatar } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import TitlePage from '../../../layout/UserLayout/TitlePage/TitlePage';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
// import required modules
import { Autoplay, Navigation, Scrollbar, Mousewheel } from "swiper";

import './Project.scss';
import axiosClient from '../../../axios';

const Project = () => {
    let { project_id } = useParams();

    const [projectImages, setImages] = React.useState([]);
    const [isloading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        axiosClient.get(`/projects/${project_id}`)
            .then(({ data }) => {
                setLoading(false);
                let imageList = data.data.image_url;
                setImages(imageList.map(item => { return item.url }));
            })
    }, [project_id]);

    return (
        <div className="project">
            <TitlePage category={"category"} />
            <Box sx={{
                // flexGrow: 1,
                // padding: '20px',
                height: { xs: '200px', md: '550px' },
                width: '95%',
                mt: 3
            }}
            >
                <Swiper
                    centeredSlides={true}
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    direction={"horizontal"}
                    spaceBetween={30}
                    slidesPerView={"auto"}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    scrollbar={{
                        hide: true,
                    }}
                    navigation={true}
                    mousewheel={true}
                    modules={[Autoplay, Navigation, Mousewheel, Scrollbar]}
                    className="mySwiper"
                >
                    {
                        (isloading ? Array.from(new Array(3)) : projectImages).map((projectimg, index) => (
                            projectimg ? (
                                <SwiperSlide key={index}>
                                    <Avatar
                                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        variant="square"
                                        alt="Product"
                                        src={projectimg}
                                    />
                                </SwiperSlide>
                            ) : (
                                <SwiperSlide key={index}>
                                    <Skeleton variant="rectangular" animation="wave" sx={{ height: 1, width: 1 }} />
                                </SwiperSlide>
                            )
                        ))
                    }
                </Swiper>
            </Box>
        </div >
    );
};

export default Project;