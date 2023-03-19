import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

import { makeStyles } from '@mui/styles';

// styles in progress
const useStyles = makeStyles((theme) => ({
    container: {
        alignItems: "center",
        backgroundColor: theme.palette.common.white,
        bottom: 0,
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        left: 0,
        position: "fixed",
        right: 0,
        top: 0,
        width: "100%",
        zIndex: 1500,
    },
}));

// function to create a circle to show load progress
const Loader = (props) => {
    const classes = useStyles();

    return (
        <Backdrop className={classes.container} open={props.loading}>
            <CircularProgress color="secondary" size={100} />
        </Backdrop>
    );
};

export default Loader;
