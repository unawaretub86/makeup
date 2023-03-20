import React from "react";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import Link from "next/link";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import { red } from "@mui/material/colors";

// set cards
const CardCmp = (props) => {
    const card = props.data;
    const classes = useStyles();

    if (props.data) {
        return (
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
                    href={`/${props.type}/${card.id}`}
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
                                    // src={
                                    //     card.image_url
                                    //         ? card.image_url
                                    //         : `https://via.placeholder.com/400x400/dcdcdc/ffffff?text=${card.name.replace(
                                    //             /\s/g,
                                    //             "+"
                                    //         )}`
                                    // }
                                    src='/images/makeup-min.jpg'
                                    fill={true}
                                    sizes="40vw"
                                    objectFit="cover"
                                />
                            </div>
                        )}
                        title={card.name}
                    />
                    <CardContent>
                        {card.hot_price ? (
                            <>
                                <Typography variant="h5" component="h2">
                                    <NumberFormat
                                        value={card.hot_price}
                                        displayType={"text"}
                                        thousandSeparator={"."}
                                        decimalSeparator={","}
                                        prefix={"$"}
                                    />
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h3"
                                    className={classes.prevPrice}
                                >
                                    <del>
                                        <NumberFormat
                                            value={card.price}
                                            displayType={"text"}
                                            thousandSeparator={"."}
                                            decimalSeparator={","}
                                            prefix={"$"}
                                        />
                                    </del>
                                </Typography>
                            </>
                        ) : (
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="h3"
                                className={classes.prevPrice}
                            >
                                <NumberFormat
                                    value={card.price}
                                    displayType={"text"}
                                    thousandSeparator={"."}
                                    decimalSeparator={","}
                                    prefix={"$"}
                                />
                            </Typography>
                        )}
                        <Typography variant="body2" component="p">
                            {card.name}
                        </Typography>
                    </CardContent>
                </Link>
            </Card>
        );
    } else return null;
};

export default CardCmp;


// set styles
const useStyles = makeStyles((theme) => ({
    media: {
        height: 200,
        minWidth: 180,
        position: "relative",
    },
    cardHot: {
        backgroundColor: red[700],
        color: theme.palette.common.white,
    },
    links: {
        "&:hover": {
            textDecoration: "none",
        },
    },
    card: {
        "&:hover": {
            boxShadow:
                "0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)",
        },
        height: 400,
        minWidth: 180,
        minWidth: 120,
        maxWidth: 200,
    },
}));