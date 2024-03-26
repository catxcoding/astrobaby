// Importing necessary components
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import CategoryMenu from "../components/CategoryMenu";

// Shop component definition
const Shop = () => {
    return (
        // Using a container div to wrap the layout of the shop page
        <div className="container">
            {/* Render the category menu, product list, and cart components */}
            <CategoryMenu />
            <ProductList />
            <Cart />
        </div>
    );
};

export default Shop;
