import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import phongthuyphongkhach from '../../../assets/imgs/phongthuyphongkhach.jpg';
import phongthuyphongkhach2 from '../../../assets/imgs/phongthuyphongkhach2.jpg';
import phongthuyphongan from '../../../assets/imgs/phongthuyphongan.jpg';
import phongthuyphongngu from '../../../assets/imgs/phongthuyphongngu.jpg';

const Rules = () => {
    const phongkhachrules = [
        "Phải thông thoáng, tầm nhìn không bị che chắn. Sắp xếp đồ đạc hợp lý, đón được ánh sáng tự nhiên.",
        "Không nên dùng các loại đèn hình ống, như đèn tuýp.",
        "Trần phòng khách có thể trang trí để không gian có điểm nhấn và thêm sinh động",
        "Chỉ nên có 1 bộ sofa trong phòng khách.",
        "Ghế dài sofa phòng khách nên nằm hướng ra lối vào nhà để đón khách thì mới có quý nhân giúp đỡ cho gia chủ khi cần.",
        "Tránh bày biện quá sơ sài, cũng không nên bề bộn, nhồi nhét đồ đạc quá mức.",
    ]

    const phonganrules = [
        "Nhà bếp và phòng ăn liền nhau.",
        "Vị trí bàn ăn nên đặt ở giữa nhà, có đường đi lối lại thuận tiện.",
        "Bàn ghế có thể sử dụng hình dạng tròn, bầu dục hoặc vuông đều được.",
        "Bếp ga không nên đối diện với đầu vòi nước.",
        "Không đặt bếp ngược cửa ra vào.",
        "Không đặt bếp gần tủ lạnh, không đặt gần phòng ngủ do quá trình nấu nướng sinh ra những khí không tốt cho sức khỏe.",
    ]

    const phongngurules = [
        "Giường ngủ phải đặt sát tường, theo hướng tốt.",
        "Không đặt giường ngủ sát cửa sổ để tránh khí quá mạnh.",
        "Giường ngủ tuyệt đối không quay chân ra hướng cửa phòng.",
        "Phòng ngủ tránh dùng màu nóng như màu đỏ, cũng không nên dùng màu đen.",
        "Đồ nội thất lấy hình vuông làm chủ đạo, không nên có cửa sổ tròn, bàn tròn, tủ tường hình bán nguyệt hoặc bất kỳ đồ vật nào có hình dạng trụ, tròn.",
        "Gương trên bàn trang điểm không nên đối diện với giường nằm.",
        "Trần phòng ngủ không nên trang trí thêm đồ vật gì, bởi có thể tạo cảm giác bất nguphongthuyphongngu, áp lực khi ngủ, khiến giấc ngủ không được trọn vẹn.",
        "Không sử dụng đồ nội thất có chất liệu từ kim loại như: tủ sắt, giá sắt… sẽ tạo ra cảm giác lạnh lẽo, khó ngủ.",
    ]

    const phongtamrules = [
        "Phòng tắm và nhà vệ sinh không nên đối diện với phòng bếp.",
        "Nên dùng màu sắc trắng sáng, tạo cảm giác sạch sẽ, thoáng mát.",
        "Chỉ sử dụng những đồ vật cần thiết, tránh nhồi nhét quá nhiều đồ đạc.",
        "Khi không sử dụng, nắp bồn cầu phải luôn được đóng lại.",
        "Cửa nhà vệ cũng luôn luôn phải được đóng kín.",
    ]

    return (
        <Box sx={{ width: 1, textAlign: 'left', m: 1 }}>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Bold',
                fontSize: '20px',
                color: '#000',
                mb: 2
            }}>
                2. Phong thủy nhà ở và điều cần phải biết
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Bold',
                fontSize: '18px',
                color: '#000',
                display: 'flex',
                align: 'center',
                mb: 2
            }}>
                <AutoAwesomeIcon /> Thế nào là nhà ở hợp phong thủy?
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Light',
                fontSize: '18px',
                color: '#000',
                mb: 2,
            }}>
                Ngôi nhà có phong thủy tốt sẽ đem lại sự tốt lành, hưng vượng cho gia chủ sinh sống trong đó. Để được coi là hợp phong thủy,
                ngôi nhà cần hội tụ đầy đủ các yếu tố thuận lợi từ : địa hình đất, phương vị, có sự thông thoáng và sự tác động vừa phải của cả nắng, gió tới ngôi nhà.
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Bold',
                fontSize: '18px',
                color: '#000',
                display: 'flex',
                align: 'center',
                mb: 2
            }}>
                <AutoAwesomeIcon /> Phong thủy nhà ở hợp mệnh gia chủ
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Light',
                fontSize: '18px',
                color: '#000',
                mb: 2,
            }}>
                Phong thủy tốt cũng có nghĩa là phương hướng nhà, đồ đạc trong nhà phải phù hợp với tuổi và bản mệnh của gia chủ. Nếu chủ nhân ngôi nhà mệnh Thổ, nên chọn tông màu vàng, nâu, đỏ… làm màu chủ đạo khi bài trí nội thất cho căn nhà.
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Light',
                fontSize: '18px',
                color: '#000',
                mb: 2,
            }}>
                Ngoài ra, phong thủy nhà ở cũng nên tránh đồ nặng nề, như trụ đá hoặc bàn ghế hình vuông. Tốt nhất, nên trang trí nhẹ nhàng, có cây xanh để tạo ra sự thư giãn cho người ở.
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Light',
                fontSize: '18px',
                color: '#000',
                mb: 2,
            }}>
                Sử dụng thước lỗ ban để đo kích thước nhà phong thủy theo hướng trong nhà giúp chúng biết được hướng tốt xấu có hợp mệnh gia chủ không sẽ chính xác hơn
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Bold',
                fontSize: '18px',
                color: '#000',
                display: 'flex',
                align: 'center',
                mb: 2
            }}>
                <AutoAwesomeIcon /> Tàng phong tụ khí là gì?
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Light',
                fontSize: '18px',
                color: '#000',
                mb: 2,
            }}>
                Theo các chuyên gia phong thủy, khi chọn đất xây nhà cần chọn nơi thoáng khí. Chọn nơi thoáng khí không có nghĩa là chọn nơi gió thổi mạnh. Bởi trong phong thủy, gió thổi quá mạnh sẽ khiến tài lộc không thể tụ lại trong ngôi nhà.
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Light',
                fontSize: '18px',
                color: '#000',
                mb: 2,
            }}>
                Trong sắp xếp đồ đạc, cũng cần hướng tới sự gọn gàng, tạo cảm giác thông thoáng cho không gian sinh sống. Nên bài trí cho các luồng khí tập trung tại chính trung tâm của căn nhà.
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Light',
                fontSize: '18px',
                color: '#000',
                mb: 2,
            }}>
                Nếu căn nhà có diện tích rộng, cần quan tâm sắp xếp sao cho gió không thổi một mạch từ trước ra sau. Ngược lại, nhà có diện tích hạn chế cần kiêng kỵ sự lộn xộn, để ngôi nhà luôn được thông thoáng.
            </Typography>
            <Avatar sx={{ height: "auto", width: 1, }} alt="Phong thủy về cửa chính" src={phongthuyphongkhach2} variant="rounded"></Avatar>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Light',
                fontStyle: 'italic',
                fontSize: '14px',
                color: '#000',
                mb: 2,
            }}>
                Phong thuỷ phòng khách. (2B+Archi)
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Bold',
                fontSize: '18px',
                color: '#000',
                display: 'flex',
                align: 'center',
                mb: 2
            }}>
                <AutoAwesomeIcon /> Đủ ánh sáng tự nhiên
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Light',
                fontSize: '18px',
                color: '#000',
                mb: 2,
            }}>
                Ánh sáng mặt trời là yếu tố rất được chú trọng trong phong thủy nhà ở. Căn nhà có nhiều ánh sáng tự nhiên, thông gió, thoáng khí sẽ tốt cho cả sức khỏe và tài lộc của gia chủ. Do đó, hãy chú ý tới việc sắp xếp nội thất để không món đồ nào chặn nguồn ánh sáng và nguồn khí lưu thông vào căn nhà của bạn.
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Bold',
                fontSize: '18px',
                color: '#000',
                display: 'flex',
                align: 'center',
                mb: 2
            }}>
                <AutoAwesomeIcon /> Thêm màu sắc tương sinh cho căn nhà
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Light',
                fontSize: '18px',
                color: '#000',
                mb: 2,
            }}>
                Màu xanh lá cây được xem là màu sắc lành mạnh, tốt cho trạng thái tinh thần và góp phần nâng cao sức khỏe. Do đó, nếu được nên bố trí nhiều cây xanh trong nhà. Màu trắng cũng giúp trung hòa cảm xúc, do vậy cũng có thể dùng màu này để trang trí nhà cửa.
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Light',
                fontSize: '18px',
                color: '#000',
                mb: 2,
            }}>
                Phòng ngủ không nên sử dụng màu đỏ. Màu cam sẽ hợp với phòng của trẻ nhỏ và phòng làm việc nên sử dụng gam màu gợi sự vui vẻ, lạc quan như màu xanh, màu trắng sữa.
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Bold',
                fontSize: '18px',
                color: '#000',
                display: 'flex',
                align: 'center',
                mb: 2
            }}>
                <AutoAwesomeIcon /> Nguyên tắc phong thủy nhà ở
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Light',
                fontSize: '18px',
                color: '#000',
                mb: 2,
            }}>
                Đáp ứng các nguyên tắc trong phong thủy nhà ở ngay từ khi xây dựng ngôi nhà và lên ý tưởng sắp xếp đồ đạc sẽ giúp giữ lại chân khí, xua tan ám khí. Qua đó, đem lại vượng phúc cho gia đình, tránh bệnh tật và đẩy lùi những điều không may mắn.
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Bold',
                fontSize: '18px',
                color: '#000',
                display: 'flex',
                align: 'center',
                mb: 2
            }}>
                <AutoAwesomeIcon /> Nhà phải tọa hướng vượng
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Light',
                fontSize: '18px',
                color: '#000',
                mb: 2,
            }}>
                Chọn được hướng tốt, hợp với tuổi tác và cung mệnh của gia chủ là việc quan trọng hàng đầu trong phong thủy nhà ở. Chọn đúng hướng vượng, gia đạo sẽ bình an, vô sự, cung tài lộc vì thế cũng dồi dào. Ngược lại, nếu hướng nhà xấu sẽ gây ảnh hưởng không tốt tới sức khỏe, công việc làm ăn, tiền tài cũng vì thế mà không được thuận lợi.
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Bold',
                fontSize: '18px',
                color: '#000',
                display: 'flex',
                align: 'center',
                mb: 2
            }}>
                <AutoAwesomeIcon /> Cửa chính không bị phạm
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Light',
                fontSize: '18px',
                color: '#000',
                mb: 2,
            }}>
                Cửa chính không chỉ có tác dụng ra vào mà còn đóng vai trò quan trọng trong việc đón sinh khí và tài lộc. Do đó, cửa chính phải có kích thước, tỷ lệ, kiểu dáng hợp lý. Phải đặt ở cung sinh khí, diên niên mới có thể đón vượng khí.
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Light',
                fontSize: '18px',
                color: '#000',
                mb: 2,
            }}>
                Không nên thiết kế cửa trước và cửa hậu đối diện nhau. Mở cửa nhìn thấy bếp đầu tiên cũng không có lợi về mặt tiền bạc. Nhà vệ sinh gần cửa ra vào cũng không đem lại dòng năng lượng tốt lành cho ngôi nhà. Một điều cũng cần lưu ý là không nên đặt gương trước cửa, bởi nó sẽ cản trở các nguồn năng lượng tốt đi vào nhà.
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Bold',
                fontSize: '18px',
                color: '#000',
                display: 'flex',
                align: 'center',
                mb: 2
            }}>
                <AutoAwesomeIcon /> Sắp xếp đồ đạc từng phòng đúng phong thủy
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Light',
                fontSize: '18px',
                color: '#000',
                mb: 2,
            }}>
                Sắp xếp đồ đạc trong nhà không những phải đảm bảo yếu tố thẩm mỹ, đáp ứng được nhu cầu sử dụng mà còn phải sắp xếp phù hợp về mặt phong thủy. Cụ thể:
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Bold',
                fontSize: '18px',
                color: '#000',
                display: 'flex',
                align: 'center',
                mb: 2
            }}>
                Phòng khách:
            </Typography>
            <List dense="true">
                {
                    phongkhachrules.map((rule, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <AutoAwesomeIcon />
                            </ListItemIcon>
                            <ListItemText
                                sx={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontWeight: 'Light',
                                    fontSize: `18px`
                                }}
                                primary={rule}
                            />
                        </ListItem>
                    ))
                }
            </List>
            <Avatar sx={{ height: "auto", width: 1, }} alt="Phong thủy về cửa chính" src={phongthuyphongkhach} variant="rounded"></Avatar>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Light',
                fontStyle: 'italic',
                fontSize: '14px',
                color: '#000',
                mb: 2,
            }}>
                Phong thuỷ phòng khách. (2B+Archi)
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Bold',
                fontSize: '18px',
                color: '#000',
                display: 'flex',
                align: 'center',
                mb: 2
            }}>
                Nhà bếp và phòng ăn:
            </Typography>
            <List dense="true">
                {
                    phonganrules.map((rule, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <AutoAwesomeIcon />
                            </ListItemIcon>
                            <ListItemText
                                sx={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontWeight: 'Light',
                                    fontSize: `18px`
                                }}
                                primary={rule}
                            />
                        </ListItem>
                    ))
                }
            </List>
            <Avatar sx={{ height: "auto", width: 1, }} alt="Phong thủy về cửa chính" src={phongthuyphongan} variant="rounded"></Avatar>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Light',
                fontStyle: 'italic',
                fontSize: '14px',
                color: '#000',
                mb: 2,
            }}>
                Phong thuỷ phòng ăn. (2B+Archi)
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Bold',
                fontSize: '18px',
                color: '#000',
                display: 'flex',
                align: 'center',
                mb: 2
            }}>
                Phòng ngủ:
            </Typography>
            <List dense="true">
                {
                    phongngurules.map((rule, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <AutoAwesomeIcon />
                            </ListItemIcon>
                            <ListItemText
                                sx={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontWeight: 'Light',
                                    fontSize: `18px`
                                }}
                                primary={rule}
                            />
                        </ListItem>
                    ))
                }
            </List>
            <Avatar sx={{ height: "auto", width: 1, }} alt="Phong thủy về cửa chính" src={phongthuyphongngu} variant="rounded"></Avatar>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Light',
                fontStyle: 'italic',
                fontSize: '14px',
                color: '#000',
                mb: 2,
            }}>
                Phong thuỷ phòng ngủ. (2B+Archi)
            </Typography>
            <Typography component="div" sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'Bold',
                fontSize: '18px',
                color: '#000',
                display: 'flex',
                align: 'center',
                mb: 2
            }}>
                Phòng tắm và nhà vệ sinh:
            </Typography>
            <List dense="true">
                {
                    phongtamrules.map((rule, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <AutoAwesomeIcon />
                            </ListItemIcon>
                            <ListItemText
                                sx={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontWeight: 'Light',
                                    fontSize: `18px`
                                }}
                                primary={rule}
                            />
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    )
}

export default Rules;