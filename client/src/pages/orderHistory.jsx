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

function OrderHistory() {
    const { data } = useQuery(QUERY_USER);
    let user;
console.log(data)
    if (data) {
        user = data.user;
    }

    return (
        <Container className="my-1">
            <Link to="/" style={{ marginBottom: "1rem", display: "block" }}>
                ← Back to Products
            </Link>

            {user && (
                <>
                    <Typography variant="h4" gutterBottom>
                        Order History for {user.firstName} {user.lastName}
                    </Typography>
                    {user.orders.map((order) => (
                        <div key={order._id} style={{ marginBottom: "1rem" }}>
                            <Typography variant="h5" gutterBottom>
                                {new Date(
                                    parseInt(order.purchaseDate)
                                ).toLocaleDateString()}
                            </Typography>
                            <Grid container spacing={2}>
                                {order.products.map(
                                    ({ _id, image, name, price }, index) => (
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={4}
                                            key={index}
                                        >
                                            <Card>
                                                <Link
                                                    to={`/products/${_id}`}
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "inherit",
                                                    }}
                                                >
                                                    <CardMedia
                                                        component="img"
                                                        height="200"
                                                        image={`/images/${image}`}
                                                        alt={name}
                                                    />
                                                    <CardContent>
                                                        <Typography
                                                            variant="h6"
                                                            component="p"
                                                            gutterBottom
                                                        >
                                                            {name}
                                                        </Typography>
                                                        <Typography variant="body1">
                                                            ${price}
                                                        </Typography>
                                                    </CardContent>
                                                </Link>
                                            </Card>
                                        </Grid>
                                    )
                                )}
                            </Grid>
                        </div>
                    ))}
                </>
            )}
        </Container>
    );
}

export default OrderHistory;
