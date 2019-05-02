import React, { Component } from 'react'
import '../App.css'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import FilmCard from './cards/FilmCard.js'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


const AllFilms = () => (
    <Query
        query={gql`
        query GetAllFilms {
  allFilms(first: 20) {
    title
  }
}

        `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error :(</p>

            return <Grid container justify='center' spacing={32}>
                {data.allFilms.map((film, index) => (
                        <Grid key={index} item style={{margin: 20, display: 'block', height: 300, width: 300}}>
                            <FilmCard film={film} />
                        </Grid>
                    )
                )}

            </Grid>
        }}
    </Query>
)
class FilmPage extends Component {

    render() {
        return (
            <div>
                <Typography variant="display3" align="center">Star Wars Films</Typography>
                <AllFilms/>
            </div>
        )
    }

}

export default FilmPage