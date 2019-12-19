import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'

function LoginButton(props) {

  let history = useHistory()
  
  return (
    <Button
      onClick={ () => {
        history.push('/')
        props.handleSubmit()
      }} fullWidth contained>
      Sign In
    </Button>
  )
}

export default LoginButton