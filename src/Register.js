import React, { Component } from 'react'
import {
  TextField,
  Grid,
  Button,
  Container,
  CssBaseline,
  Avatar,
  Typography
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      zipcode: ''
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})    
  }

  handleSubmit = e => {
    e.preventDefault()
    const API = process.env.REACT_APP_API_URL
    let newUser = this.state
    console.log(API);
    
    // fetch(`${process.env.API_URL}`)
  }

  render() {
    let { username, password, zipcode } = this.state

    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className='login-form'>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                value={username}
                onChange={this.handleChange} 
                name='username'
                margin='normal'
                variant='outlined'
                label='Username' 
                placeholder='Username'
                required
                autofocus
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  value={password}
                  type='password'
                  onChange={this.handleChange}
                  name='password'
                  margin='normal'
                  variant='outlined'
                  label='Password'
                  placeholder='Password'
                  required
                  fullWidth 
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  value={zipcode}
                  onChange={this.handleChange}
                  name='zipcode'
                  margin='normal'
                  variant='outlined'
                  label='Zipcode'
                  placeholder='Zipcode'
                  required
                  fullWidth 
                />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to='/login'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    )
  }
}

export default Register