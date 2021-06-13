import { Box, Button, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import format from '../../utils/comman';
import { DEFAULT_THUMBNAIL, STATIC_HOST } from '../Products/constants';
import { decrementQuantity, incrementQuantity, removeCart, setQuantity } from './cartSlice';
import { array, totalPrice } from './createSelector';
Cart.propTypes = {};

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2, 0),
        marginTop: '20px',
    },
    flex: { display: 'flex' },
    flexbetween: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(2, 0),
    },
    originalPric: {
        textDecoration: 'line-through',
        color: theme.palette.grey[600],
    },
    promotion: {
        marginLeft: theme.spacing(2),
    },
    padding: {
        padding: theme.spacing(2),
    },
    button: {
        cursor: 'pointer',
        margin: theme.spacing(0, 1),
    },
    input: {
        border: 'none',
        background: 'transparent',
        width: '35px',
        textAlign: 'center',
        fontSize: ' 13px',
        appearance: 'none',
        margin: '0px',
        height: '30px',
        borderTop: '1px solid rgb(200, 200, 200)',
        borderBottom: '1px solid rgb(200, 200, 200)',
        padding: ' 6px 12px',
    },
    img: {
        maxWidth: '130px',
    },
    spanbutton: {
        border: '1px solid rgb(200, 200, 200)',
        color: 'rgb(153, 153, 153)',
        padding: ' 6px 12px',
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
    },
    totalPricee: {
        color: 'rgb(254, 56, 52)',
        fontSize: '22px',
        fontWeight: '400',
        '& > nth:child(first-child)': {
            borderTop: '1px solid rgb(200, 200, 200)',
        },
    },
}));
function Cart(props) {
    const classes = useStyles();
    const totlaPrice = useSelector(totalPrice);
    const dispatch = useDispatch();
    const products = useSelector(array);
    console.log(products);
    const handleInputChange = () => {
        const action = setQuantity(products);
        dispatch(action);
        console.log(action);
    };
    const handleRemoveItem = (product) => {
        dispatch(removeCart(product.id));
    };

    return (
        <Box className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item width="70%">
                        <Paper className={classes.padding}>
                            <Box component="ul">
                                {products ? (
                                    products.map((product) => (
                                        <Box
                                            className={classes.flex}
                                            justifyContent="space-between"
                                            padding="9px 0"
                                            component="li"
                                            key={product.id}
                                            style={{ borderBottom: '1px solid #eee' }}
                                        >
                                            <img
                                                className={classes.img}
                                                src={`${
                                                    product.product.thumbnail
                                                        ? `${STATIC_HOST}${product.product.thumbnail?.url}`
                                                        : DEFAULT_THUMBNAIL
                                                }`}
                                                alt="anh product"
                                            />
                                            <Box>
                                                <Typography variant="body2">{product.product.name}</Typography>
                                                <Button
                                                    style={{ fontSize: '14px', marginLeft: '-15px' }}
                                                    onClick={() => handleRemoveItem(product)}
                                                    size="small"
                                                >
                                                    Xóa
                                                </Button>
                                                <Button style={{ fontSize: '14px' }} size="small">
                                                    Để dành mua sau
                                                </Button>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    <Typography variant="body2" fontWeight="bold">
                                                        {product.product.salePrice}
                                                    </Typography>
                                                    <Box className={classes.flex}>
                                                        <Typography variant="caption" className={classes.originalPric}>
                                                            {product.product.originalPrice}
                                                        </Typography>
                                                        {product.product.promotionPercent > 0 ? (
                                                            <Typography
                                                                className={classes.promotion}
                                                                variant="body2"
                                                            >{`| -${product.product.promotionPercent}%`}</Typography>
                                                        ) : (
                                                            ''
                                                        )}
                                                    </Box>
                                                </Box>
                                                <Box>
                                                    <form>
                                                        <Box className={classes.flex}>
                                                            <Typography
                                                                className={classes.spanbutton}
                                                                variant="span"
                                                                onClick={() => dispatch(decrementQuantity(product.id))}
                                                            >
                                                                -
                                                            </Typography>
                                                            <input
                                                                className={classes.input}
                                                                value={product.quantity > 0 ? product.quantity : 0}
                                                                onChange={handleInputChange}
                                                            />
                                                            <Typography
                                                                className={classes.spanbutton}
                                                                variant="span"
                                                                onClick={() => dispatch(incrementQuantity(product.id))}
                                                            >
                                                                +
                                                            </Typography>
                                                        </Box>
                                                    </form>
                                                </Box>
                                            </Box>
                                        </Box>
                                    ))
                                ) : (
                                    <Typography>Không có sản phẩm nào trong giỏ hàng</Typography>
                                )}
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item marginLeft="10px">
                        <Paper className={classes.padding}>
                            <Box>
                                <Box className={classes.flexbetween}>
                                    <Typography variant="body2">Tạm tính :</Typography>
                                    <Typography variant="body2">{totlaPrice > 0 ? format(totlaPrice) : 0}</Typography>
                                </Box>
                                <Box className={classes.flexbetween}>
                                    <Typography variant="body2">Thành Tiền :</Typography>
                                    <Typography className={classes.totalPricee} variant="body2">
                                        {totlaPrice > 0 ? format(totlaPrice) : 0}
                                    </Typography>
                                </Box>
                                <Typography textAlign="right" variant="caption" gutterBottom>
                                    (Đã bao gồm VAT nếu có)
                                </Typography>
                            </Box>
                            <Box></Box>
                        </Paper>
                        <Button style={{ marginTop: '10px' }} variant="contained" color="secondary">
                            Tiến hành đặt hàng
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Cart;
