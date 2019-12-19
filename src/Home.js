import React, { Component } from 'react'
import {
  Grid,
  AppBar
} from '@material-ui/core'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Grid container>
        <Grid item>
          <AppBar></AppBar>
        </Grid>
        <Grid item>

        </Grid>
        <Grid item>

        </Grid>
      </Grid>
    )
  }
}
export default Home