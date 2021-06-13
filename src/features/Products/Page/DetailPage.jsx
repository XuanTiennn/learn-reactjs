import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { addtoCart, showCartItem } from '../../cart/cartSlice';
import Abc from '../Components/Abc';
import DetailsSkeleton from '../Components/DetailsSkeleton';
import Infor from '../Components/Infor';
import InforDetailsPr from '../Components/InforDetailsPr';
import Quantity from '../Components/Quantity';
import Reviews from '../Components/Reviews';
import Thumbnails from '../DetailsProduct/components/Thumbnails';
import useCustomHook from '../DetailsProduct/customHook';
import ProductMenu from './ProductRate';
const useStyles = makeStyles((theme) => ({
    root: { backgroundColor: 'rgb(244, 244, 244)' },
    left: {
        width: '444px',
    },
    right: {
        flex: '1 1 0',
    },
}));
function DetailPage() {
    const classes = useStyles();
    const { url } = useRouteMatch();
    const dispatch = useDispatch();

    const handleSubmit = ({ quantity }) => {
        const value = dispatch(
            addtoCart({
                id: product.data.id,
                product: product.data,
                quantity,
            })
        );
        dispatch(showCartItem(true));
    };

    const {
        params: { productId },
    } = useRouteMatch();
    const { loading, product } = useCustomHook(productId);
    if (loading) {
        return <DetailsSkeleton/>;
    }

    return (
        <Box className={classes.root}>
            <Container>
                <Paper elevation={2}>
                    <Grid display="flex" justifyContent="center" alignItems="center" container>
                        <Grid className={classes.left} item>
                            <Thumbnails product={product.data} />
                        </Grid>
                        <Grid className={classes.right} item>
                            <InforDetailsPr product={product.data} />
                            <Quantity onSubmit={handleSubmit} />
                        </Grid>
                    </Grid>
                </Paper>
                <ProductMenu />
                <Switch>
                    <Route path={url}>
                        <Infor product={product.data} />
                    </Route>

                    <Route exact path={`${url}/reviews`} component={Reviews} />
                    <Route exact component={Abc} path={`${url}/abc`} />
                </Switch>
            </Container>
        </Box>
    );
}

export default DetailPage;
