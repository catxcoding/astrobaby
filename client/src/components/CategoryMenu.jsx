import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../utils/GlobalState";
import {
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
} from "../utils/actions";
import { QUERY_CATEGORIES } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import { Typography, Button } from "@mui/material";

function CategoryMenu() {
    const [state, dispatch] = useStoreContext();

    const { categories } = state;

    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

    useEffect(() => {
        if (categoryData) {
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: categoryData.categories,
            });
            categoryData.categories.forEach((category) => {
                idbPromise("categories", "put", category);
            });
        } else if (!loading) {
            idbPromise("categories", "get").then((categories) => {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: categories,
                });
            });
        }
    }, [categoryData, loading, dispatch]);

    const handleClick = (id) => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id,
        });
    };

    return (
        <div>
            <Typography variant="h5">Choose a Category:</Typography>
            {categories.map((item) => (
                <Button
                    key={item._id}
                    variant="contained"
                    color="primary"
                    onClick={() => handleClick(item._id)}
                    style={{ marginRight: 10, marginBottom: 10 }}
                >
                    {item.name}
                </Button>
            ))}
            <Button
                variant="contained"
                color="primary"
                onClick={() => handleClick("")}
            >
                All
            </Button>
        </div>
    );
}

export default CategoryMenu;
