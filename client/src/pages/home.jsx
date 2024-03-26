import { useState } from "react";
import {
    Typography,
    Button,
    Container,
    Grid,
    Card,
    CardContent,
    TextField,
} from "@mui/material";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";

const Home = () => {
    const [nickname, setNickname] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [astroSign, setAstroSign] = useState("");

    // Function to calculate astrological sign based on due date

    const calculateAstroSign = (dueDate) => {
        const month = dueDate.getMonth();
        const day = dueDate.getDate();

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

        const signs = [
            "Capricorn",
            "Aquarius",
            "Pisces",
            "Aries",
            "Taurus",
            "Gemini",
            "Cancer",
            "Leo",
            "Virgo",
            "Libra",
            "Scorpio",
            "Sagittarius",
        ];

        const astroSign = signs[adjustedMonth];
        setAstroSign(astroSign);
    };

    const history = useNavigate();
    const goToStorePage = () => {
        // Logic to navigate to the store page
        history("/shop");
    };

    return (
        <div>
            <Container
                maxWidth="md"
                style={{ marginTop: "20px", textAlign: "center" }}
            >
                <Typography variant="h2" gutterBottom>
                    Welcome to AstroBaby!
                </Typography>

                <Typography variant="h6" gutterBottom>
                    ** about astro baby **
                </Typography>
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
                                    onChange={(e) =>
                                        setNickname(e.target.value)
                                    }
                                    style={{ marginBottom: "10px" }}
                                />
                                {/* <TextField
                                    label="Due Date"
                                    type=""
                                    variant="outlined"
                                    fullWidth
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                    style={{ marginBottom: "10px" }}
                                /> */}
                                {/* <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DateCalendar />
                                </LocalizationProvider> */}

                                <input type="date" 
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                    style={{ marginBottom: "10px" }}
                                />

                                <br />
                                <br />
                                <Button
                                    variant="contained"
                                    onClick={() =>
                                        calculateAstroSign(new Date(dueDate))
                                    }
                                >
                                    Calculate Astro Sign
                                </Button>
                                {astroSign && (
                                    <Typography
                                        variant="body1"
                                        style={{ marginTop: "10px" }}
                                    >
                                        Astrological Sign: {astroSign}
                                    </Typography>
                                )}
                                {astroSign && (
                                    <Button
                                        variant="contained"
                                        onClick={goToStorePage}
                                        style={{ marginTop: "10px" }}
                                    >
                                        Go to Store
                                    </Button>
                                )}
                                <br />
                                <br />

                                <Typography variant="small" gutterBottom>
                                    ** notes on accuracy of astrological sign **
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
