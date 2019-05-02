import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 345,
        background: '#404040',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};


function PlanetCard(props) {
    const { classes } = props;
    const name = props.planet.name;
    const imageName = name.replace(/\s+/g, '-').toLowerCase();
    let theImage
    try {
        (require('../../static/images/planets/' + imageName + '.jpg'))
        theImage = require('../../static/images/planets/' + imageName + '.jpg')
    } catch(e){
        theImage = require('../../static/images/planets/empty-planet.jpg')
    }

    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={theImage}
                    title="Planet"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.planet.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

PlanetCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlanetCard);
