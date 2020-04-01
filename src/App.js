import React from 'react';
import clsx from 'clsx';
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
    borderRadius: "15px",
    minWidth: "50%",
    paddingBottom: "15px",
    [theme.breakpoints.down('sm')]: {
      marginTop: '230px',
      //maxWidth: "90%",
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '250px',
      maxWidth: "90%",
    },
  },
  logo: {
    border: "2px solid #ddd",
    width: "max-content",
    margin: "1% 5% 0 10%",
    position: "absolute"
  },
  mutedwhitebg: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[800]
  }
}));

function App(props) {
  const classes = useStyles();
  
  return (
    <div className="App" className={classes.root}>
      <Header className={classes.mutedwhitebg} />
      <div>
        <img src={logo} className={classes.logo} />
        <Container component="main" className={clsx(classes.mutedwhitebg, classes.main)} maxWidth="sm">

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
      <Footer className={classes.mutedwhitebg} />
    </div>
  );
}

export default App;
