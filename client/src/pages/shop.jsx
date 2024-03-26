import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import CategoryMenu from "../components/CategoryMenu";



const Shop=()=>{
    
return(<div className="container">
    <CategoryMenu />
    <ProductList />
    <Cart />
</div>)
}

export default Shop;  
