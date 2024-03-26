import { useState } from "react";
// import ProductList from "../components/ProductList";
// import Cart from "../components/Cart";
// import CategoryMenu from "../components/CategoryMenu";
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
    const [showStore, setShowStore] = useState(false);

    // Function to calculate astrological sign based on due date
    const calculateAstroSign = () => {
        // Your logic to calculate the astrological sign based on the due date
        // For simplicity, let's assume astro sign is based on the month of the due date
        const month = new Date(dueDate).getMonth();
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
        const astroSign = signs[month];
        setAstroSign(astroSign);
    };

    // const goToStorePage = () => {
    //   setShowStore(true);

    // Logic to navigate to the store page
    // You can use react-router-dom or any other method for navigation

    // };

    const history = useNavigate();
    const goToStorePage = () => {
        // Logic to navigate to the store page
        history("/shop");
    };
    // const goNavigate = () => {
    //     const history = useNavigate();

    //     const navigate = (path) => {
    //         history(path);
    //     };

    //     return navigate;
    // };

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
                                    onClick={calculateAstroSign}
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
                                At Astro Baby, we understand that the universe is constantly in motion, and so too are the celestial energies that shape our astrological signs. While traditional astrology assigns signs based on birthdates, the exact moment of birth can influence the alignment of the stars and potentially shift your child's astrological sign. This means that paying attention to the due date is crucial, as a baby born just before or after midnight could fall under a different zodiac sign. Our mission is to celebrate the dynamic nature of astrology and provide you with meaningful gifts that honor the unique cosmic blueprint of your little one, no matter when they decide to make their grand entrance into the world.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            {/* {showStore && ( // Render store components if showStore is true
    //     <div className="container">
    //       <CategoryMenu />
    //       <ProductList />
    //       <Cart />
    // </div> */}
            {/* )} */}
        </div>
    );
};

export default Home;
