import { useEffect } from "react";
import ProductItem from"./ProductItem";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import { Container, Typography, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
// import spinner from "../../assets/spinner.gif";

function ProductList() {
    const [state, dispatch] = useStoreContext();

    const { currentCategory } = state;

    const { loading, data } = useQuery(QUERY_PRODUCTS);

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products,
            });
            data.products.forEach((product) => {
                idbPromise("products", "put", product);
            });
        } else if (!loading) {
            idbPromise("products", "get").then((products) => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: products,
                });
            });
        }
    }, [data, loading, dispatch]);

    function filterProducts() {
        if (!currentCategory) {
            return state.products;
        }

        return state.products.filter(
            (product) => product.category._id === currentCategory
        );
    }

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Our Products:
            </Typography>
            {state.products.length ? (
                <Grid container spacing={2}>
                    {filterProducts().map((product) => (
                        <Grid
                            item
                            key={product._id}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                        >
                            <ProductItem
                                key={product._id}
                                _id={product._id}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                                quantity={product.quantity}
                            />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography variant="h3">
                    You haven't added any products yet!
                </Typography>
            )}
            {loading && (
                <Container maxWidth="sm">
                    <CircularProgress />
                </Container>
            )}
        </Container>
    );
}

export default ProductList;
