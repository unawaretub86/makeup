
import React from 'react';

import { makeStyles } from '@mui/styles';
import { grey } from "@mui/material/colors";
import { Button, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import Carousel from 'react-material-ui-carousel';

import Link from 'next/link';
import Image from 'next/image';

import Card from '../card';

const MoreProducts = (props) => {
    const [index, setIndex] = React.useState(0);

    const classes = useStyles();

    // const cards = () => {
    //     if (props.data.length === 0) {
    //         return (
    //             <Typography
    //                 component="p"
    //                 variant="h6"
    //                 align="center"
    //                 className={classes.noRows}
    //             >
    //                 <i>No hay promociones activas</i>
    //             </Typography>
    //         );
    //     }
    //     return props.data.map((card, index) => (
    //         <Grid item xs={6} sm={3} lg={2} key={index}>
    //             <Card data={card} type="hot" />
    //         </Grid>
    //     ));
    // };


    // render of carousel
    return (
        <>
            <Grid item md={8} xs={12}>
                <>
                    <Carousel
                        className={classes.slider}
                        indicators={true}
                        fullHeightHover={true}
                        index={index}
                    >
                        <div>
                            <Grid container spacing={3} className={classes.grid}>
                                <Card
                                    className={
                                        props.type === "hot"
                                            ? `${classes.cardHot} ${classes.card}`
                                            : classes.card
                                    }
                                    style={{ ...props.style }}
                                    variant={props.variant}
                                >
                                    <Link
                                        className={classes.links}
                                        color="inherit"
                                        // href={`/${props.type}/${card.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <CardMedia
                                            component={() => (
                                                <div className={classes.media}>
                                                    <Image
                                                        placeholder="blur"
                                                        blurDataURL={imgPlaceholder(
                                                            card.image_url
                                                                ? card.image_url
                                                                : `https://via.placeholder.com/400x400/dcdcdc/ffffff?text=${card.name.replace(
                                                                    /\s/g,
                                                                    "+"
                                                                )}`
                                                        )}
                                                        src={
                                                            card.image_url
                                                                ? card.image_url
                                                                : `https://via.placeholder.com/400x400/dcdcdc/ffffff?text=${card.name.replace(
                                                                    /\s/g,
                                                                    "+"
                                                                )}`
                                                        }
                                                        fill={true}
                                                        sizes="40vw"
                                                    />
                                                </div>
                                            )}
                                        // title={card.name}
                                        />
                                    </Link>
                                </Card>
                            </Grid>
                            {/* <Grid container spacing={3} className={classes.grid}>
                                {cards()}
                            </Grid> */}
                        </div>
                    </Carousel>
                </>
            </Grid>
        </>
    );
};


const useStyles = makeStyles((theme) => ({
    bg: {
        bottom: 0,
        height: "80%",
        left: 0,
        objectFit: "cover",
        position: "relative",
        top: 0,
        right: 0,
        width: "100%",
        zIndex: -1,
    },
    bannerText: {
        color: "white",
        textShadow: `-1px 0 ${grey[700]}, 0 1px ${grey[700]}, 1px 0 ${grey[700]}, 0 -1px ${grey[700]}`,
        [theme.breakpoints.up("md")]: {
            textShadow: "unset",
        },
    },
    slideImg: {
        // height: "80%",
        // objectFit: "contain",
        // width: "80%",
    },
    slider: {
        borderColor: grey[200],
        borderStyle: "solid",
        borderWidth: 1,
        height: 500,
        marginBottom: theme.spacing(1),
        [theme.breakpoints.down("md")]: {
            height: 300,
        },
        [theme.breakpoints.down("xs")]: {
            height: 200,
        },
    },
}));


export default MoreProducts;