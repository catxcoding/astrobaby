import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import { Typography, IconButton, TextField, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ item }) => {
    const [, dispatch] = useStoreContext();

    const removeFromCart = (item) => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id,
        });
        idbPromise("cart", "delete", { ...item });
    };

    const onChange = (e) => {
        const value = e.target.value;
        if (value === "0") {
            dispatch({
                type: REMOVE_FROM_CART,
                _id: item._id,
            });
            idbPromise("cart", "delete", { ...item });
        } else {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: item._id,
                purchaseQuantity: parseInt(value),
            });
            idbPromise("cart", "put", {
                ...item,
                purchaseQuantity: parseInt(value),
            });
        }
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="space-between">
            <div>
                <img
                    src={`/images/${item.image}`}
                    alt=""
                    style={{ width: 100, height: 100, marginRight: 10 }}
                />
            </div>
            <div>
                <Typography variant="subtitle1">
                    {item.name}, ${item.price}
                </Typography>
                <Box display="flex" alignItems="center">
                    <Typography variant="body2">Qty:</Typography>
                    <TextField
                        type="number"
                        placeholder="1"
                        value={item.purchaseQuantity}
                        onChange={onChange}
                        inputProps={{ min: 1 }}
                        style={{ margin: "0 10px" }}
                    />
                    <IconButton
                        aria-label="delete"
                        onClick={() => removeFromCart(item)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </div>
        </Box>
    );
};

export default CartItem;
