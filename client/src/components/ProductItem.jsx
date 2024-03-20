import { Link } from "react-router-dom";
import { pluralize } from "../utils/helpers";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
} from "@mui/material";

function ProductItem({ item }) {
    const [state, dispatch] = useStoreContext();

    const { image, name, _id, price, quantity } = item;

    const { cart } = state;

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id);
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: _id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
            });
            idbPromise("cart", "put", {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...item, purchaseQuantity: 1 },
            });
            idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
        }
    };

    return (
        <Card sx={{ maxWidth: 300, margin: "auto", marginBottom: 2 }}>
            <Link
                to={`/products/${_id}`}
                style={{ textDecoration: "none", color: "inherit" }}
            >
                <CardMedia
                    component="img"
                    alt={name}
                    height="250"
                    image={`/images/${image}`}
                />
                <CardContent>
                    <Typography variant="h6">{name}</Typography>
                </CardContent>
            </Link>
            <CardContent>
                <Typography variant="body1">
                    {quantity} {pluralize("item", quantity)} in stock
                </Typography>
                <Typography variant="h6">${price}</Typography>
            </CardContent>
            <Button
                variant="contained"
                color="primary"
                onClick={addToCart}
                fullWidth
            >
                Add to cart
            </Button>
        </Card>
    );
}

export default ProductItem;
