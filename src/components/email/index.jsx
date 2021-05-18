import { Box, Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(2, 0),
        '& > img':{
            maxWidth:'163px'
        }
        
    },
    desciption: {
        fontSize: '14px !important',
        [theme.breakpoints.up('md')]: {
            fontSize: '16px !important',
        },
    },
}));

function Email() {
    const classes = useStyles();
    return (
        <div>
            <Box>
                <Container>
                    <Grid container className={classes.root} >
                        <Grid item className={classes.root}>
                            <img
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/newsletter.png"
                                alt="img"
                            />
                            <Box>
                                <Typography className={classes.desciption} variant="body1">
                                    {' '}
                                    Đăng ký nhận bản tin Tiki
                                </Typography>
                                <Typography className={classes.desciption} variant="body1">
                                    Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item style={{display:'flex',alignItems:'center',}}>
                            <input style={{outline:'none',marginRight:'10px',fontSize:'16px',padding:'5px'}} type="text" placeholder="nhập email của bạn" />
                            <Button variant="contained" color="primary">
                                đăng ký
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}

export default Email;
