import React from 'react';
import './App.css';
import {
  Grid,
  Hidden,
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
          <Hidden mdDown>
            <Grid item lg={6} className='intro-img' />
          </Hidden>
          <Grid item lg={6}>
          </Grid>
        </Grid>
      </div>
  );
}

export default App;
