
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
import { idbPromise } from "../utils/helpers";

import CartItem from "./CartItem";
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/GlobalState";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../utils/actions";
import { Button, Typography, Box } from "@mui/material";

// Stripe promise
const stripePromise = loadStripe("pk_test_51OyhZuHnEblJRsWWrCl2LkCz4LLV0KGNgliEjg4J8zjYWZ189TwVMqRAMEfJmvEO3SHckVga6pxiIMEiYtaZdpI000CIqOhK57");

const Cart = () => {
    const [state, dispatch] = useStoreContext();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session });
            });
        }
    }, [data]);

    useEffect(() => {
        async function getCart() {
            const cart = await idbPromise("cart", "get");
            dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
        }

        if (!state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);

    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
    }

    function calculateTotal() {
        let sum = 0;
        state.cart.forEach((item) => {
            sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    function submitCheckout() {
        const productIds = [];
    
        state.cart.forEach((item) => {
          for (let i = 0; i < item.purchaseQuantity; i++) {
            productIds.push(item._id);
          }
        });
    
        getCheckout({
          variables: { products: productIds },
        });
      }
    
    return (
        <>
            {!state.cartOpen ? (
                <div className="cart-closed" onClick={toggleCart}>
                    <span role="img" aria-label="trash">
                        🛒
                    </span>
                </div>
            ) : (
                <Box
                    className="cart"
                    sx={{
                        position: "fixed",
                        top: "64px", // Adjust this value according to your nav height
                        right: 0,
                        minWidth: "20%",
                        maxWidth: "30%",
                        maxHeight: "60%",
                        backgroundColor: "var(--light)",
                        overflow: "auto",
                        padding: ".5rem",
                        boxShadow: "0 0 1rem rgba(0, 0, 0, .5)",
                        borderBottomLeftRadius: ".5rem",
                    }}
                >
                    <div className="close" onClick={toggleCart}>
                        [close]
                    </div>
                    <Typography variant="h4">Shopping Cart</Typography>
                    {state.cart.length ? (
                        <div>
                            {state.cart.map((item) => (
                                <CartItem key={item._id} item={item} />
                            ))}

                            <Box
                                display="flex"
                                justifyContent="space-between"
                                mt={2}
                            >
                                <Typography variant="h6">
                                    <strong>Total: ${calculateTotal()}</strong>
                                </Typography>

                                {Auth.loggedIn() ? (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={submitCheckout}
                                    >
                                        Checkout
                                    </Button>
                                ) : (
                                    <Typography variant="body1">
                                        (log in to check out)
                                    </Typography>
                                )}
                            </Box>
                        </div>
                    ) : (
                        <Typography variant="h6">
                            <span role="img" aria-label="shocked">
                                😱
                            </span>
                            You haven't added anything to your cart yet!
                        </Typography>
                    )}
                </Box>
            )}
        </>
    );
};

export default Cart;