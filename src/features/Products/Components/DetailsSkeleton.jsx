import { Container, Grid, Skeleton, Paper } from '@material-ui/core';
import React from 'react';

DetailsSkeleton.propTypes = {};

function DetailsSkeleton(props) {
    return (
        <Container>
            <Paper style={{ width: '1232px', height: '443px' }}>
                <Grid container>
                    <Grid item lg={4}>
                        <Skeleton style={{width:'80%', height: '440px' }} />
                    </Grid>
                    <Grid item lg={8}>
                        <Skeleton style={{ height: '440px' }} />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default DetailsSkeleton;
