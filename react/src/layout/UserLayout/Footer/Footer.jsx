import * as React from "react";

import { Typography, Grid, Box, Stack } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Stack
                                direction="column"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                spacing={2}
                            // height='250px'
                            >
                                <Typography variant="h3" sx={{
                                    textTransform: 'uppercase',
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontWeight: '600',
                                    fontSize: '18px',
                                    marginBottom: '30px'
                                }}>
                                    Thông tin liên hệ
                                </Typography>
                                <div className="widget-content">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Địa chỉ:</td>
                                                <td>
                                                    <p>KDC 2, P.Nhơn Phú, Tp Quy Nhơn</p>
                                                    <p>SHOP HOUSE, K.B.T Đại Phú Gia</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Điện thoại:</td>
                                                <td>
                                                    <p>0908 235 246</p>
                                                    <p>0763 601 601</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="widget-icon">
                                    <div className="icon-contact">
                                        <FacebookOutlinedIcon sx={{ ['--clr']: "#0039a6" }} />
                                    </div>
                                    <div className="icon-contact">
                                        <InstagramIcon sx={{ ['--clr']: "#ff1867" }} />
                                    </div>
                                    <div className="icon-contact">
                                        <TwitterIcon sx={{ ['--clr']: "#1e9bff" }} />
                                    </div>
                                    <div className="icon-contact">
                                        <PinterestIcon sx={{ ['--clr']: "#EF0107" }} />
                                    </div>
                                </div>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Stack
                                direction="column"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                spacing={2}
                            // height='250px'
                            >
                                <Typography variant="h3" sx={{
                                    textTransform: 'uppercase',
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontWeight: '600',
                                    fontSize: '18px',
                                    marginBottom: '30px'
                                }}>
                                    Giới thiệu về chúng tôi
                                </Typography>
                                <div className="widget-content">
                                    <p>Chúng tôi với 08 năm kinh nghiệm trong lĩnh vực tư vấn - thiết kế - xây dựng.</p>
                                    <p>Dự án của Archi là sự kết hợp giữa NGHỆ THUẬT KIẾN TRÚC và CÔNG NĂNG SỬ DỤNG.</p>
                                    <p>Phong cách thiết kế hiện đại, đưa cây xanh mặt nước vào không gian sống.</p>
                                    <p>Thi công tinh xảo, tỉ mỉ, tuyệt đối không dùng vật tư giả, kém chất lượng.</p>
                                    <p>Đội ngũ kỹ sư được đào tạo bài bản, chuyên nghiệp, làm việc tận tâm.</p>
                                </div>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Stack
                                direction="column"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                spacing={2}
                            // height='250px'
                            >
                                <Typography variant="h3" sx={{
                                    textTransform: 'uppercase',
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontWeight: '600',
                                    fontSize: '18px',
                                    marginBottom: '30px'
                                }}>
                                    COPYRIGHT
                                </Typography>
                                <div className="widget-content">
                                    <p>© 2023 ARCHI</p>
                                </div>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </footer>
    );
};

export default Footer;