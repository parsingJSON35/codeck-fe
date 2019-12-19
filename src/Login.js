import React, { Component } from 'react'
import {
  Grid,
  Paper,
  Hidden,
  TextField,
  Avatar,
  Typography
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Link } from 'react-router-dom'
import LoginButton from './LoginButton'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})    
  }

  render() {    
    const {username, password} = this.state

    return (
      <Grid container component='main'>
          <Hidden xsDown>
            <Grid item xs={false} sm={5} md={7} className='intro-img'>
              <div id='logo'>
                <div>Codeck</div>
              </div>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={7} md={5} component={Paper}>
            <div className='login-form'>
              <Hidden smUp>
                <div id='logo'>
                  <div>Codeck</div>
                </div>
              </Hidden>
              <Avatar id='sign-in'>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form>
                <TextField value={username} onChange={this.handleChange} name='username' margin='normal' variant='outlined' label='Username' placeholder='Username' required autofocus fullWidth />
                <TextField value={password} type='password' onChange={this.handleChange} name='password' margin='normal' variant='outlined' label='Password' placeholder='Password' required fullWidth />
                <LoginButton handleSubmit={this.props.handleSubmit} />
              </form>
              <div>
                <Link to='/register' >New user? Sign up now!</Link>
              </div>
            </div>
          </Grid>
        </Grid>
    )
  }
}

export default Login