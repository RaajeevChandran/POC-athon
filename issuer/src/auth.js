import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from "react-router-dom"
import Container from '@material-ui/core/Container';
import axios from "axios"


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory()
  const [inputs, setInputs] = useState({});
  const [signingIn,setSigningIn]=useState(false)

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`User Created!Email: ${inputs.username},password : ${inputs.password}`);
  }

  const handleLogin = () =>{
    setSigningIn(true)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "username": inputs.username.trim(),
      "password": inputs.password
      });

    var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
};


  fetch("https://votefromhome.herokuapp.com/api/signin", requestOptions)
  .then(response => response.text())
  .then(result => {
    console.log("at is "+JSON.parse(result).accessToken)
    // setaccessToken(JSON.parse(result).accessToken)
    // console.log("accesstoken in setresponse "+response[0])
    history.push({pathname:"/home",state:{detail:JSON.parse(result).accessToken}})
  })
  .catch(error => console.log('error', error));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={inputs.username}
            autoComplete="username"
            onChange={handleInputChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            value={inputs.password}
            type="password"
            id="password"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {
            signingIn ? <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
          >
            Sign In
          </Button> : <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
          >
            Sign In
          </Button>
          }
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            
          </Grid>
        </form>
      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
}

export default SignIn;