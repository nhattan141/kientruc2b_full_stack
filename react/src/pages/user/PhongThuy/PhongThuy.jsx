import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import TitlePage from '../../../layout/UserLayout/TitlePage/TitlePage';
import Rules from "./Rules";

import phongthuynhao from '../../../assets/imgs/phongthuynhao.jpg';

const PhongThuy = () => {

    return (
        <Box sx={{
            p: "0 50px 10px ",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
            mb: "15px"
        }}>
            <TitlePage phongthuy={"Phong Thủy"} />
            <Box sx={{ width: 1, textAlign: 'justify', m: 1 }}>
                <Typography component="div" sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'Light',
                    fontSize: '18px',
                    color: '#000'
                }}>
                    Tác giả : nadudesign.com
                </Typography>
            </Box>
            <Box sx={{ width: 1, textAlign: 'left', m: 1 }}>
                <Typography component="div" sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'Light',
                    fontSize: '18px',
                    color: '#000',
                    fontStyle: 'italic'
                }}>
                    Phong thủy nhà ở là vấn đề rất được quan tâm tại các nước Đông Nam Á, đặc biệt là Việt Nam.
                    Một ngôi nhà được thiết kế đúng phong thủy không chỉ giúp gia chủ thêm may mắn, tài lộc mà con mang lại cảm giác thoải mái trong quá trình sinh sống. Vậy bố trí không gian, đặt đồ đạc trong nhà như thế nào cho đúng để đúng phong thủy?
                    Và nếu trót sai phạm thì phải hóa giải như thế nào?
                    Tất cả thông tin đã có trong bài viết dưới đây.
                </Typography>
            </Box>
            <Box sx={{ width: 1, textAlign: 'left', m: 1 }}>
                <Typography component="div" sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'Bold',
                    fontSize: '20px',
                    color: '#000',
                    mb: 2
                }}>
                    1. Phong thủy nhà ở là gì?
                </Typography>
                <Typography component="div" sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'Light',
                    fontSize: '18px',
                    color: '#000',
                    mb: 2
                }}>
                    Phong thủy vốn dĩ là một phạm trù của khoa học chứ không phải là mê tín như nhiều người vẫn nghĩ.
                    Theo Wikipedia "Phong thủy (chữ Hán:風水) là học thuyết chuyên nghiên cứu sự ảnh hưởng của hướng gió, hướng khí, mạch nước đến đời sống hoạ phúc của con người".
                </Typography>
                <Typography component="div" sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'Light',
                    fontSize: '18px',
                    color: '#000',
                    mb: 2
                }}>
                    Trong đó:
                </Typography>
                <List>
                    <ListItem >
                        <ListItemIcon>
                            <AutoAwesomeIcon />
                        </ListItemIcon>
                        <ListItemText
                            sx={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 'Light',
                                fontSize: `18px`
                            }}
                            primary="Phong là gió"
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemIcon>
                            <AutoAwesomeIcon />
                        </ListItemIcon>
                        <ListItemText
                            sx={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 'Light',
                            }}
                            primary="Thủy là nước"
                        />
                    </ListItem>
                </List>
                <Typography component="div" sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'Light',
                    fontSize: '18px',
                    color: '#000',
                    mb: 2
                }}>
                    Trên thực tế, ngay từ xa xưa con người đã chú trọng đến các yếu tố về phong thủy nhà ở.
                    Truyền thuyết từ thời Hùng Vương dựng nước đã quan tâm tới việc tìm đất đóng đô,
                    góp phần không nhỏ vào sự phát triển hưng thịnh của quốc gia Văn Lang.
                </Typography>
                <Avatar sx={{ height: "auto", width: 1 }} alt="Phong thủy về cửa chính" src={phongthuynhao} variant="rounded"></Avatar>
                <Typography component="div" sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'Light',
                    fontStyle: 'italic',
                    fontSize: '14px',
                    color: '#000',
                    mb: 2,
                }}>
                    Phong thuỷ nhà ở. (2B+Archi)
                </Typography>
                <Typography component="div" sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'Light',
                    fontSize: '18px',
                    color: '#000',
                    mb: 2
                }}>
                    Các thành ngữ dân gian như "chọn đất mà ở", "gần nước hướng về mặt trời", "nhà sạch thì mát, bát sạch ngon cơm"…
                    cho thấy từ lâu con người đã ý thức rất rõ về sự khác biệt giữa vị trí nhà ở và cách sắp xếp đồ đạc trong nhà.
                </Typography>
                <Typography component="div" sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'Light',
                    fontSize: '18px',
                    color: '#000',
                    mb: 2
                }}>
                    Hiểu một cách đầy đủ nhất, phong thủy là kết quả của tri thức nghiên cứu về các quy luật tương tác của thiên nhiên, môi trường, bố cục đồ đạc, mặt bằng không gian sống và phương pháp thay đổi những tác động đó tới cuộc sống con người.
                </Typography>
            </Box>
            <Rules />
        </Box >
    )
}

export default PhongThuy;