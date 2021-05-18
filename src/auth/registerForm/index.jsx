import { Avatar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { Link } from 'react-router-dom';
import PassWordFiled from './passwordField';

RegisterForm.propTypes = {};
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: 'white',
        margin: theme.spacing(0, 2),
    },
    avatar: {
        margin: '15px auto',
        backgroundColor: theme.palette.secondary.main,
    },
    button: {
        backgroundColor: 'red',
    },
}));
function RegisterForm() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();
    return (
        <div>
            <Link className={classes.link} variant="outlined" color="primary" onClick={handleClickOpen}>
                Register
            </Link>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <Avatar className={classes.avatar}></Avatar>

                <DialogContent>
                    <form>
                        <Typography textAlign="center" className={classes.typography}>
                            Register
                        </Typography>
                        <TextField
                            autoFocus
                            variant="outlined"
                            margin="dense"
                            id="name"
                            label="Full Name"
                            type="text"
                            fullWidth
                        />
                        <TextField margin="dense" id="email" label="Email" type="text" fullWidth />
                        <PassWordFiled />
                        <PassWordFiled />
                        <TextField margin="dense" id="address" label=" Address" type="text" fullWidth />
                        <TextField margin="dense" id="phone" label="Phone Number" type="number" fullWidth />

                        <Button
                            className={classes.button}
                            type="submit"
                            color="primary"
                            fullWidth
                            backgroundColor="primary"
                        >
                            Register
                        </Button>
                    </form>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default RegisterForm;
