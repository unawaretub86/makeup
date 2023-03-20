import { makeStyles } from "@mui/styles";
import { Container, Fab, Paper, Typography } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (props) => {
    const classes = useStyles();

    return (
        <>
            <Navbar />
            {!props.notContainer ? (
                <Container maxWidth="lg">{props.children}</Container>
            ) : (
                <>{props.children}</>
            )}
            <Paper className={classes.popover} elevation={10}>
                <Typography variant="caption">
                    ¿Buscas algo en especial? ¡Nosotros te ayudamos!
                </Typography>
            </Paper>
            <Fab color="primary" aria-label="whatsapp" className={classes.whatsapp}>
                <WhatsAppIcon
                    style={{ color: "#fff", fontSize: 40 }}
                    onClick={() =>
                        window.open(
                            `https://wa.me/+573057772044?text=¡Hola,%20necesito%20ayuda%20con%20un%20producto!`,
                            "_blank"
                        )
                    }
                />
            </Fab>
            <Footer />
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    whatsapp: {
        "&:hover": {
            backgroundColor: "#20d060",
        },
        backgroundColor: "#128c7e",
        bottom: 30,
        height: 70,
        position: "fixed",
        right: 30,
        width: 70,
    },
    popover: {
        bottom: 120,
        padding: theme.spacing(1),
        position: "fixed",
        right: 30,
        "&:hover": {
            backgroundColor: "#fff",
            color: "#3c52b2",
        },
    },
}));

export default Layout;