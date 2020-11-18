import React, { Component } from 'react'
import '../App.css'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import PersonCard1 from './cards/PersonCard.js'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

class PeoplePage extends Component {
 constructor(props) {
     super(props)
     this.state = {}


 }



    render() {
        return (
            <div>
                <Typography variant="display3" align="center">Star Wars Characters</Typography>
                <Query
                    query={gql`
        query GetAllPersons {
  persons(first: 20) {
    name
    homeworld {
      name
    }
  }
}

        `}
                >
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error :(</p>

                        //return data.allPersons.map((person, index) => {
                        return <Grid container justify='center' spacing={32}>
                            {data.persons.map((person, index) => (
                                    <Grid key={index} item style={{margin: 20, display: 'block', height: 300, width: 300}}>
                                        <PersonCard1 person={person} homeworld={person.homeworld ? person.homeworld.name : 'homeworld unknown'}
                                                     />
                                    </Grid>
                                )
                            )}

                        </Grid>



                        //    })
                    }}
                </Query>
            </div>
        )
    }

}

export default PeoplePage
