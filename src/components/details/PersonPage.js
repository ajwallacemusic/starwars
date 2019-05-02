import React, { Component } from 'react'
import '../../App.css'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from "@material-ui/core/styles/index";
import PropTypes from "prop-types";


const planetDefaultImage = require('../../static/images/planets/empty-planet.jpg')

const hoverClass = {
    hover: {
        boxShadow: '0 10px 12px 0 rgba(0, 0, 0, 0.2), 0 16px 25px 0 rgba(0, 0, 0, 0.19)',
        cursor: 'pointer',
        maxWidth: '25rem',
        maxHeight: '25rem',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '0.5rem',
        marginBottom: '2rem',
        transform: 'scale(1.005)',
        transition: '0.2s'
    }
}

const styles = {
    height: 0,
    paddingTop: '100%',
    //paddingTop: '56.25%', // 16:9
    maxWidth: '100%',
    display: 'block',
};
const divStyle = {
    maxWidth: '25rem',
    maxHeight: '25rem',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '0.5rem',
    marginBottom: '2rem',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    transition: '0.2s'
}
const divContainer = {
    margin: '1rem'
}


class PersonPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hover: false}

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


        var personParam = this.props.match.params.name
        var searchTerm
        if (personParam == 'r2-d2' || personParam == 'c-3po' || personParam == 'r5-d4') {
            searchTerm = personParam
        } else if (personParam == 'obi-wan-kenobi') {
            searchTerm = 'obi-wan kenobi'
        } else {
            searchTerm = personParam.replace(/-/g, " ")
            console.log(searchTerm)
        }

        const GET_ONE_PERSON = gql`
            query GetOnePerson($searchTerm: String!) {
                Person(name: $searchTerm) {
                    id
                    name
                    species {
                        name
                    }
                    birthYear
                    gender
                    hairColor
                    eyeColor
                    height
                    mass
                    homeworld {
                        name
                    }
                    films(orderBy: releaseDate_ASC) {
                        title
                    }
                    vehicles {
                        name
                    }
                    starships {
                        name
                    }
                }
            }`

        return(

            <div>
                <Query
                    query={GET_ONE_PERSON} variables={{ searchTerm: searchTerm }}
                >


                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error :(</p>

                        //return data.allPersons.map((person, index) => {
                        const character = data.Person
                        return <div>
                            <Typography variant="display3" align="center">{character.name}</Typography>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>BirthYear</TableCell>
                                        <TableCell>{character.birthYear}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Species</TableCell>
                                        <TableCell>{character.species.map((species, index) => (species.name))}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <div>
                                {/* home planet */}
                                <div style={divContainer}>
                                    <Typography variant="display1" align="center">Homeworld</Typography>
                                    <Typography variant="headline" align="center">{character.homeworld.name}</Typography>
                                    <div
                                         style={this.state.hover == true ? hoverClass.hover : divStyle}
                                         onMouseOver={this.handleMouseOver}
                                         onMouseOut={this.handleMouseOut}>
                                        <CardMedia
                                            style={styles}
                                            image={planetDefaultImage}
                                            title={character.homeworld.name}
                                        />
                                    </div>
                                </div>



                                {/*images div close */}</div>

                            {/* closing div */}</div>

                    }}
                </Query>
            </div>


        )
    }

}

export default PersonPage;