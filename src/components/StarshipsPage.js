import React, { Component } from 'react'
import '../App.css'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import StarshipCard from './cards/StarshipCard'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const AllStarships = () => (
    <Query
        query={gql`
        query GetAllStarships {
  allStarships(first: 20) {
    name
  }
}

        `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error :(</p>

            //return data.allPersons.map((person, index) => {
            return <Grid container justify='center' spacing={32}>
                {data.allStarships.map((ship, index) => (
                        <Grid key={index} item style={{margin: 20, display: 'block', height: 300, width: 300}}>
                            <StarshipCard ship={ship}/>
                        </Grid>
                    )
                )}

            </Grid>



            //    })
        }}
    </Query>
)
class StarshipsPage extends Component {

    render() {
        return (
            <div>
                <Typography variant="display3" align="center">Star Wars Starships</Typography>
                <AllStarships/>
            </div>
        )
    }

}

export default StarshipsPage