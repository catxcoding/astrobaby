/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import {
    Typography,
    Button,
    Container,
    Grid,
    Card,
    CardContent,
    TextField,
    Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [nickname, setNickname] = useState("");
    const [dueDate, setDueDate] = useState('');
    const [astroSign, setAstroSign] = useState("");

    const navigate = useNavigate();

    const calculateAstroSign = () => {
        if (!dueDate) return;
        const date = new Date(dueDate);
        const month = date.getMonth();
        const day = date.getDate();

        const cutoffDates = [
            [19, 1], // Aquarius
            [19, 2], // Pisces
            [21, 3], // Aries
            [20, 4], // Taurus
            [21, 5], // Gemini
            [21, 6], // Cancer
            [23, 7], // Leo
            [23, 8], // Virgo
            [23, 9], // Libra
            [23, 10], // Scorpio
            [22, 11], // Sagittarius
            [21, 12], // Capricorn
        ];
        let adjustedMonth = month;
        if (day >= cutoffDates[month][0]) {
            adjustedMonth = (month + 1) % 12;
        }

        const signs = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
        const astroSign = signs[adjustedMonth];
        setAstroSign(astroSign);
    };

    return (
        <Container maxWidth="md" sx={{ marginTop: "20px", textAlign: "center" }}>
            {/* Title and Subtitle */}
            <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700, fontStyle: 'normal', letterSpacing: '0.3em' }}>
                ASTROBABY
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Quicksand, sans-serif', fontStyle: 'italic' }}>
                Celestial Gifts for Your Newest Star
            </Typography>
            
            {/* Introductory Text */}
            <Typography variant="body2" gutterBottom>
                To get started, enter the baby's expected due date, and follow the link to a list of personalized gift recommendations. Browse through our selection of clothing, toys, and nursery decorations, all chosen to harmonize with the stars.
            </Typography>

            <Card sx={{ maxWidth: 345, mx: "auto" }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Baby Information
                    </Typography>
                    <TextField label="Nickname" variant="outlined" fullWidth value={nickname} onChange={(e) => setNickname(e.target.value)} sx={{ mb: 2 }} />
                    <Typography variant="h6" gutterBottom>
                        Estimated Due Date
                    </Typography>
                    <TextField type="date" fullWidth value={dueDate} onChange={(e) => setDueDate(e.target.value)} sx={{ mb: 2 }} />
                    <Button variant="contained" onClick={calculateAstroSign} sx={{ mb: 2 }}>
                        Calculate Astro Sign
                    </Button>
                    {astroSign && (
                        <>
                            <Typography variant="body1" sx={{ mt: 2 }}>
                                Astrological Sign: {astroSign}
                            </Typography>
                            <Button variant="contained" onClick={() => navigate("/shop")} sx={{ mt: 2 }}>
                                Go to Store
                            </Button>
                        </>
                    )}
                </CardContent>
            </Card>

            {/* Additional Information Text */}
            <Typography variant="body2" gutterBottom sx={{ mt: 4 }}>
                At Astro Baby, we understand that the universe is constantly in motion, and so too are the celestial energies that shape our astrological signs. While traditional astrology assigns signs based on birthdates, the exact moment of birth can influence the alignment of the stars and potentially shift your child's astrological sign. This means that paying attention to the due date is crucial, as a baby born just before or after midnight could fall under a different zodiac sign. Our mission is to celebrate the dynamic nature of astrology and provide you with meaningful gifts that honor the unique cosmic blueprint of your little one, no matter when they decide to make their grand entrance into the world.
            </Typography>
        </Container>
    );
};

export default Home;
