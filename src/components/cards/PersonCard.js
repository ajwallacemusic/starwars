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
        transition: '0.2s',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    hover: {
        maxWidth: 345,
        background: '#404040',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        transition: '0.2s',
        transform: 'scale(1.005)'
    }
};

const linkStyle = {
    textDecoration: 'none'
}




class PersonCard1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseOut = this.handleMouseOut.bind(this)
    };
    handleMouseOver() {
        this.setState({hover: true})
    }

    handleMouseOut() {
        this.setState({hover: false})
    }

    render() {

        const { classes } = this.props;
        const name = this.props.person.name;
        const imageName = name.replace(/\s+/g, '-').toLowerCase();
        const nameLink = "/" + imageName
        let theImage
        try {
            (require('../../static/images/people/' + imageName + '.jpg'))
            theImage = require('../../static/images/people/' + imageName + '.jpg')
        } catch(e){
            theImage = require('../../static/images/people/empty-avatar.jpg')
        }

        return (
            <div>
                <div>
                    <Card className={this.state.hover === true ? classes.hover : classes.card}
                          onMouseOver={this.handleMouseOver}
                          onMouseOut={this.handleMouseOut}>
                        <a style={linkStyle} href={nameLink}>
                        <CardMedia
                            className={classes.media}
                            image={theImage}
                            title="Luke Skywalker"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                {this.props.person.name}
                            </Typography>
                            <Typography component="p">
                                Homeworld: {this.props.homeworld}
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
                        </a>
                    </Card>
                </div>

            </div>
        );
    }

}

PersonCard1.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(PersonCard1)

/*

function PersonCard(props) {
    const { classes } = props;
    const name = props.person.name;
    const imageName = name.replace(/\s+/g, '-').toLowerCase();
    const nameLink = "/" + imageName
    let theImage
    try {
        (require('../../static/images/people/' + imageName + '.jpg'))
        theImage = require('../../static/images/people/' + imageName + '.jpg')
    } catch(e){
        theImage = require('../../static/images/people/empty-avatar.jpg')
    }

    return (
        <div>
            <a style={linkStyle} href={nameLink}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={theImage}
                    title="Luke Skywalker"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.person.name}
                    </Typography>
                    <Typography component="p">
                        Homeworld: {props.homeworld}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary" href={nameLink}>
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            </a>
        </div>
    );
}

PersonCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

//export default withStyles(styles)(PersonCard);
 */
