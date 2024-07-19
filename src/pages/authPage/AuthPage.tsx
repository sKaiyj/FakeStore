import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";

export default function AuthPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth='xs' sx={{ mt: 4 }}>
      <Typography variant='h5' component='h2' gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label='Username'
              variant='outlined'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Password'
              variant='outlined'
              type='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' variant='contained' color='primary' fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
