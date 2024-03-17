
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import {
    Container,
    Typography,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";

function OrderHistory() {
    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
        user = data.user;
    }

    return (
        <Container>
            <Link to="/">← Back to Products</Link>

            {user ? (
                <>
                    <Typography variant="h4" gutterBottom>
                        Order History for {user.firstName} {user.lastName}
                    </Typography>
                    {user.orders.map((order) => (
                        <div key={order._id} style={{ marginBottom: "20px" }}>
                            <Typography variant="h5" gutterBottom>
                                {new Date(
                                    parseInt(order.purchaseDate)
                                ).toLocaleDateString()}
                            </Typography>
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                                {order.products.map(
                                    ({ _id, image, name, price }, index) => (
                                        <Card
                                            key={index}
                                            style={{
                                                width: "250px",
                                                margin: "10px",
                                            }}
                                        >
                                            <Link
                                                to={`/products/${_id}`}
                                                style={{
                                                    textDecoration: "none",
                                                    color: "inherit",
                                                }}
                                            >
                                                <CardMedia
                                                    component="img"
                                                    height="250"
                                                    image={`/images/${image}`}
                                                    alt={name}
                                                />
                                                <CardContent>
                                                    <Typography variant="h6">
                                                        {name}
                                                    </Typography>
                                                    <Typography variant="body1">
                                                        ${price}
                                                    </Typography>
                                                </CardContent>
                                            </Link>
                                        </Card>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </>
            ) : null}
        </Container>
    );
}

export default OrderHistory;
