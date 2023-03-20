
import React from 'react';

import { makeStyles } from '@mui/styles';
import { grey } from "@mui/material/colors";
import { Grid } from '@mui/material';

import Carousel from 'react-material-ui-carousel';

import Link from 'next/link';
import Image from 'next/image';

const Banner = (props) => {
    const [index, setIndex] = React.useState(0);

    const classes = useStyles();


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
                        <Image
                            className={classes.slideImg}
                            // src={
                            //     image.image_url
                            //         ? image.image_url
                            //         : `https://via.placeholder.com/400x400/dcdcdc/ffffff?text=${props.data.name.replace(
                            //             /\s/g,
                            //             "+"
                            //         )}`
                            // }
                            // placeholder="blur"
                            // blurDataURL={imgPlaceholder(
                            //     image.image_url
                            //         ? image.image_url
                            //         : `https://via.placeholder.com/400x400/dcdcdc/ffffff?text=${props.data.name.replace(
                            //             /\s/g,
                            //             "+"
                            //         )}`
                            // )}
                            fill={true}
                            sizes="50vw"
                            src='/images/bannerMakeup.jpg'
                        />
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


export default Banner;