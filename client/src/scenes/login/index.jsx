import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, TextField, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    padding: theme.spacing(4),
    backgroundColor: '#fff',
    borderRadius: theme.spacing(1),
  },
  formTitle: {
    marginBottom: theme.spacing(2),
  },
  formField: {
    marginBottom: theme.spacing(2),
  },
  formButton: {
    marginTop: theme.spacing(2),
  },
}));

function LoginPage() {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className={classes.container}>
      <Container maxWidth="sm">
        <form className={classes.formContainer} onSubmit={handleSubmit}>
          <Typography variant="h5" component="h1" className={classes.formTitle}>
            Login
          </Typography>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            className={classes.formField}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            className={classes.formField}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.formButton}
          >
            Sign In
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default LoginPage;