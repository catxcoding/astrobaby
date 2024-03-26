// Import necessary modules from React, Material UI, Apollo Client, and your utilities
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
    Typography,
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";
import { QUERY_USER } from "../utils/queries";

// OrderHistory component definition
function OrderHistory() {
    // Fetch user data using Apollo Client's useQuery hook
    const { data } = useQuery(QUERY_USER);
    const user = data?.user; // Using optional chaining to handle undefined data

    return (
        <Container className="my-1">
            {/* Link back to the products page */}
            <Link to="/shop" style={{ marginBottom: "1rem", display: "block" }}>
                ← Back to Products
            </Link>

            {/* Check if user data is available */}
            {user && (
                <>
                    {/* Display the user's full name and order history */}
                    <Typography variant="h4" gutterBottom>
                        Order History for {user.firstName} {user.lastName}
                    </Typography>
                    {user.orders.map((order) => (
                        <div key={order._id} style={{ marginBottom: "1rem" }}>
                            {/* Display the purchase date */}
                            <Typography variant="h5" gutterBottom>
                                {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                            </Typography>
                            {/* Display a grid of purchased products */}
                            <Grid container spacing={2}>
                                {order.products.map(({ _id, image, name, price }) => (
                                    <Grid item xs={12} sm={6} md={4} key={_id}>
                                        <Card>
                                            {/* Link to individual product details */}
                                            <Link to={`/products/${_id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                                <CardMedia
                                                    component="img"
                                                    height="200"
                                                    image={`/images/${image}`}
                                                    alt={name}
                                                />
                                                <CardContent>
                                                    {/* Display product name and price */}
                                                    <Typography variant="h6" component="p" gutterBottom>
                                                        {name}
                                                    </Typography>
                                                    <Typography variant="body1">
                                                        ${price}
                                                    </Typography>
                                                </CardContent>
                                            </Link>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    ))}
                </>
            )}
        </Container>
    );
}

export default OrderHistory;
