import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from './Components/header';
import Footer from './Components/footer';
import Gallery from './Components/gallery';
import Contact from './Components/contact';
import Directions from './Components/directions';
import About from './Components/about';
import Home from './Components/home';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import logo from './Assets/logo.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: `rgb(21,111,169)`
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    display: "inline-block",
    background: "white",
    borderRadius: "15px",
    minWidth: "50%"
  },
  logo: {
    margin: "10px",
    border: "2px solid #ddd",
    width: "max-content",
    margin: "0.5% 5% 0 10%",
    display: "inline-block"
  },
}));

function App(props) {
  
  const classes = useStyles();  

  return (
    <div className="App" className={classes.root}>
      <Header />
      <div>
        <img src={logo} className={classes.logo} />
        <Container component="main" className={classes.main} maxWidth="sm">

          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/directions" component={Directions} />
            </Switch>
          </BrowserRouter>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
