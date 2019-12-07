import React from 'react';
import './App.css';
import {
  Grid,
  Paper,
  Hidden,
  TextField,
  Button
} from '@material-ui/core'

function App() {
  // let styles = {
  //   image: {
  //     backgroundImage: 'url(./images/intro_pair.jpg)',
  //     backgroundRepeat: 'no-repeat',
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center',
  //   }
  // }

  return (
      <div className="App">
        <Grid container component='main'>
          <Hidden xsDown>
            <Grid item xs={false} sm={5} md={7} className='intro-img'>
              <div id='logo'>
                <div>Codeck</div>
              </div>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={7} md={5} component={Paper}>
            <form id='login-form'>
              <TextField variant='outlined' label='Username' placeholder='Username' required autofocus fullWidth></TextField>
              <TextField variant='outlined' label='Password' placeholder='Password' required autofocus fullWidth></TextField>
              <Button fullWidth contained>Sign In</Button>
            </form>
          </Grid>
        </Grid>
      </div>
  );
}

export default App;
