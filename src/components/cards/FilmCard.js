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
    }
};


function FilmCard(props) {
    const { classes } = props;
    const title = props.film.title;
    const imageName = title.replace(/\s+/g, '-').toLowerCase();
    let theImage
    try {
        (require('../../static/images/films/' + imageName + '.jpg'))
        theImage = require('../../static/images/films/' + imageName + '.jpg')
    } catch(e){
        theImage = require('../../static/images/people/empty-avatar.jpg')
    }

    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={theImage}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.film.title}
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

FilmCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilmCard);
