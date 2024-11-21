"use client";

import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleLogin = () => {
    alert('Logged in with Google');
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Please fill in all fields');
    } else {
      alert(`Logged in with email: ${email}`);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 10 }}>
        <Typography variant="h4" color="primary" align="center" gutterBottom>
          Login
        </Typography>

        {error && (
          <Typography color="error" align="center" gutterBottom>
            {error}
          </Typography>
        )}

        <form onSubmit={handleLoginSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Log In
          </Button>
        </form>

        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <Typography variant="body2" color="textSecondary">
            or
          </Typography>
        </Box>

        <Button
          variant="outlined"
          fullWidth
          sx={{
            marginTop: 2,
            padding: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={handleGoogleLogin}
        >
           <GoogleIcon sx={{ marginRight: 1 }} />
           Login with Google
        </Button>
      </Paper>
    </Container>
  );
};

export default LoginPage;