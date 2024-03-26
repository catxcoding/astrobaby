import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Button, TextField, Typography, Box, Container } from '@mui/material';

function Signup() {
  // Initialize form state with empty strings for each input
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  // Apollo Client's useMutation hook for sending the ADD_USER mutation to the GraphQL server
  const [addUser] = useMutation(ADD_USER);

  // Function to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token); // Log in the user with the received token
    } catch (e) {
      console.error(e);
    }
  };

  // Function to update formState with the input values
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Signup
      </Typography>
      <Link to="/login">← Go to Login</Link>

      <Box component="form" onSubmit={handleFormSubmit} noValidate sx={{ mt: 1 }}>
        {/* TextField from MUI for material design input fields */}
        <TextField
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          autoComplete="fname"
          autoFocus
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="lname"
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
}

export default Signup;
