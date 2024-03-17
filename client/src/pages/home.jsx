import { useState } from 'react';
import { Typography, Button, Container, Grid, Card, CardContent, TextField } from '@mui/material';

const Home =()=> {
  const [nickname, setNickname] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [astroSign, setAstroSign] = useState('');

  // Function to calculate astrological sign based on due date
  const calculateAstroSign = () => {
    // Your logic to calculate the astrological sign based on the due date
    // For simplicity, let's assume astro sign is based on the month of the due date
    const month = new Date(dueDate).getMonth();
    const signs = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'];
    const astroSign = signs[month];
    setAstroSign(astroSign);
  };

  const goToStorePage = () => {
    // Logic to navigate to the store page
    // You can use react-router-dom or any other method for navigation
    console.log('Navigating to the store page');
  };

  return (
    <div>
      <Container maxWidth="md" style={{ marginTop: '20px' }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Baby Information
                </Typography>
                <TextField
                  label="Nickname"
                  variant="outlined"
                  fullWidth
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  label="Due Date"
                  type="date"
                  variant="outlined"
                  fullWidth
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  style={{ marginBottom: '10px' }}
                />
                <Button variant="contained" onClick={calculateAstroSign}>
                  Calculate Astro Sign
                </Button>
                {astroSign && (
                  <Typography variant="body1" style={{ marginTop: '10px' }}>
                    Astrological Sign: {astroSign}
                  </Typography>
                )}
                {astroSign && (
                  <Button variant="contained" onClick={goToStorePage} style={{ marginTop: '10px' }}>
                    Go to Store
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;

