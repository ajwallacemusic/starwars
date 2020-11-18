import React, { Component } from 'react'
import '../App.css'
import PeoplePage from './PeoplePage';
import PlanetPage from './PlanetPage'
import { Switch, Route, } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import FilmsPage from './FilmsPage'
import StarshipsPage from './StarshipsPage'
import PersonPage from './details/PersonPage'



const Header = () => (
    <AppBar style={{ marginBottom: '7em' }}>
<div>
        <Button color="secondary" variant="outlined" href="/people">People</Button>
        <Button color="secondary" variant="outlined" href="/planets">Planets</Button>
        <Button color="secondary" variant="outlined" href="/films">Films</Button>
        <Button color="secondary" variant="outlined" href="/starships">Starships</Button>
</div>

    </AppBar>
)




class App extends Component {

    render() {
    return (

        <div>
            <Header />
            <div style={{ marginTop: '7em' }}>
                <Switch>

                    <Route path="/people" component={PeoplePage} />
                    <Route path="/planets" component={PlanetPage} />
                    <Route path="/films" component={FilmsPage} />
                    <Route path="/starships" component={StarshipsPage} />
                    <Route path="/:name" component={PersonPage} />

                </Switch>
            </div>
        </div>
    )
    }
}

export default App
