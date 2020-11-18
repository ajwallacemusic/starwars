import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/";
// import Paper from '@material-ui/core/Paper'

const client = new ApolloClient({
    uri: 'https://api-euwest.graphcms.com/v1/ck5wca13qc9ux01fgaidt12m4/master'
})

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            light: '#fff924', // same as '#FFCC80',
            main: '#fbf84f', // same as orange[600]
            dark: '#efe41f',
            contrastText: 'rgb(0,0,0)',
        },
        background: {
            paper: '#252624',
            default: '#252624'
        },

    },
});


ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
            <React.Fragment>
                <CssBaseline />
                    <App />
            </React.Fragment>
        </MuiThemeProvider>
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root'));
registerServiceWorker();
