import logo from './assets/img/logo.jpg';
import './assets/css/App.css';
import { Fragment } from 'react';
import { Container, AppBar, Toolbar, IconButton, Typography, ButtonGroup, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));


function App () {
  const classes = useStyles();
    return (
      <Fragment>
        <Container maxWidth="md">
          <AppBar position="black" id="appbar">
            <Toolbar variant="dense">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="black"
                aria-label="menu"
              >
                <MenuIcon
                  onClick={
                    <ButtonGroup
                      disableElevation
                      variant="contained"
                      color="primary"
                    >
                      <Button>One</Button>
                      <Button>Two</Button>
                    </ButtonGroup>
                  }
                />
              </IconButton>
              <img src={logo} className="App-logo" alt="logo" />
              <Typography variant="h6" id="typography">
                Manager
              </Typography>
            </Toolbar>
          </AppBar>
        </Container>

        <body></body>
        <footer></footer>
      </Fragment>
    ); 
  }


export default App;
