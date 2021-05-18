import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Link, makeStyles, Paper, Typography } from '@material-ui/core';

Footer.propTypes = {
    data: PropTypes.array,
};
const data = [
    {
        id: 1,
        title: 'HỖ TRỢ KHÁCH HÀNG',
        datachild: [
            'Hotline chăm sóc khách hàng: 1900-6035',
            '(1000đ/phút , 8-21h kể cả T7, CN)',
            'Các câu hỏi thường gặp',
            'Gửi yêu cầu hỗ trợ',
            'Hướng dẫn đặt hàng',
            'Phương thức vận chuyển',
            'Chính sách đổi trả',
            'Hướng dẫn trả góp',
            'Chính sách hàng nhập khẩu',
        ],
    },
    {
        id: 2,
        title: ' VỀ TIKI',
        datachild: [
            'Giới thiệu Tiki',
            'Tuyển Dụng',
            'Chính sách bảo mật thanh toán',
            'Chính sách bảo mật thông tin cá nhân',
            'Chính sách giải quyết khiếu nại',
            'Điều khoản sử dụng',
        ],
    },
    {
        id: 3,
        title: 'HỢP TÁC VÀ LIÊN KẾT',
        datachild: ['Quy chế hoạt động Sàn GDTMĐT', 'Bán hàng cùng Tiki'],
    },
    {
        id: 4,
        title: 'PHƯƠNG THỨC THANH TOÁN',
        datachild: ['Quy chế hoạt động Sàn GDTMĐT', 'Bán hàng cùng Tiki'],
    },
];
const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        flexFlow:'row wrap',
        justifyContent:'space-around',
        '& > div':{
            margin:'20px',
        }
    },

    ulist:{
        padding:'0',
    },
    list:{
        listStyle:'none',
        '& > a':{
            color:'black',
            fontSize:'14px',
        }
    }
}));
function Footer() {
    const classes = useStyles();
    return (
        <Paper>
            <Container>
                <Grid container>
                    <Box className={classes.root}>
                        {data.map((child) => (
                            <Grid item>
                                <Typography variant="subtitle2" key={child.id}>
                                    {child.title}
                                    <Box className={classes.ulist} component="ul">
                                        {child.datachild.map((datachild) => (
                                            <Box className={classes.list} component="li">
                                                <Link>{datachild}</Link>
                                            </Box>
                                        ))}
                                    </Box>
                                </Typography>
                            </Grid>
                        ))}
                    </Box>
                </Grid>
            </Container>
        </Paper>
    );
}

export default Footer;
