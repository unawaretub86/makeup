import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

const Footer = () => {
    const classes = useStyles();

    const data = [
        {
            title: "Nuestra Marca",
            items: [
                {
                    name: "Quienes somos",
                    url: "/#",
                },
                {
                    name: "Marcas",
                    url: "/#",
                },
                {
                    name: "Blog",
                    url: "/#",
                },
            ],
        },
        {
            title: "Ayuda",
            items: [
                {
                    name: "Politicas de privacidad",
                    url: "/terms",
                },
                {
                    name: "Terminos y Condiciones",
                    url: "/returnpolicy",
                },
                {
                    name: "¿Tienes alguna duda o sugerencia?",
                    url: "/suggestions",
                },
            ],
        },
        {
            title: "Redes",
            items: [
                {
                    nameNet: "Facebook",
                    urlNet: "/#",
                },
                {
                    nameNet: "Twitter",
                    urlNet: "/#",
                },
                {
                    nameNet: "Instagram",
                    urlNet: "/#",
                },
            ],
        },
    ];

    return (
        <footer className={classes.container}>
            <Container maxWidth="lg">
                <Grid container spacing={3} className={classes.grid}>
                    {data.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Typography variant="h6" component="p" gutterBottom>
                                <b>{item.title}</b>
                            </Typography>
                            {item.items.map((link, index) => (
                                <Typography key={index} variant="body2" component="p">
                                    <a
                                        href={link.url}
                                        className={classes.link}
                                    >
                                        {link.name}
                                    </a>
                                </Typography>
                            ))}
                            {item.items.map((link, index) => (
                                <Typography key={index} variant="body2" component="p">
                                    <a
                                        href={link.urlNet}
                                        className={classes.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {link.nameNet}
                                    </a>
                                </Typography>
                            ))}
                        </Grid>
                    ))}
                </Grid>
                <Divider />
                <Box py={3}>
                    <Typography variant="body1" component="p" align="center">
                        Copyright giomakeup.com © 2023
                    </Typography>
                </Box>
            </Container>
        </footer>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "black",
        width: "100%",
        color: "#85C1E9",
    },
    link: {
        color: "white",
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
        },
    },
    grid: {
        padding: theme.spacing(2, 0),
    },
}));

export default Footer;