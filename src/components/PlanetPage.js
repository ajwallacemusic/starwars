import React, { Component } from 'react'
import '../App.css'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import PlanetCard from './cards/PlanetCard.js'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const AllPlanets = () => (
    <Query
        query={gql`
        query GetAllPlanets {
  planets(first: 20) {
    name
  }
}
        `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error :(</p>

            return <Grid container justify='center' spacing={32}>
                {data.planets.map((planet, index) => (
                        <Grid key={index} item style={{margin: 20, display: 'block', height: 300, width: 300}}>
                            <PlanetCard planet={planet} />
                        </Grid>
                    )
                )}

            </Grid>
        }}
    </Query>
)
class PlanetPage extends Component {

    render() {
        return (
            <div>
                <Typography variant="display3" align="center">Star Wars Planets</Typography>
                <AllPlanets/>
            </div>
        )
    }

}

export default PlanetPage
