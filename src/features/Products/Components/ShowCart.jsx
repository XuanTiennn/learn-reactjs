import { Box, Button, Card, CardContent, Typography } from '@material-ui/core';
import { CheckCircleOutlineRounded } from '@material-ui/icons';
import React from 'react';
function ShowCart() {
    return (
        <Card style={{ padding: '15px', position: 'absolute', top: '43px', right: '0', transition: '.5s' }}>
            <CardContent>
                <Box>
                    <Box style={{ display: 'flex', justifyContent: 'center' }}>
                        <CheckCircleOutlineRounded fontSize="14px" color="primary" />
                        <Typography variant="body2">Thêm vào giỏ hàng thành công!</Typography>
                    </Box>

                    <Button style={{ fontSize: '14px' }} variant="contained" color="secondary">
                        Xem giỏ hàng và thanh toán
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default ShowCart;
