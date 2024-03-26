/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
/* import spinner from '../assets/spinner.gif'; */

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const { products, cart } = state;

  useEffect(() => {
    // Check if current product is in the global store
    if (products.length) {
      setCurrentProduct(products.find(product => product._id === id));
    } 
    // If not, check if products were fetched from server
    else if (data) {
      dispatch({ type: UPDATE_PRODUCTS, products: data.products });
      data.products.forEach(product => idbPromise('products', 'put', product));
    } 
    // If not in store and not loading, get cache from IndexedDB
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({ type: UPDATE_PRODUCTS, products: indexedProducts });
      });
    }
  }, [products, data, loading, dispatch, id]);

  // Handle adding product to cart
  const addToCart = () => {
    const itemInCart = cart.find(cartItem => cartItem._id === id);
    if (itemInCart) {
      // Update item quantity in cart
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      // Add new item to cart
      dispatch({ type: ADD_TO_CART, product: { ...currentProduct, purchaseQuantity: 1 } });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  // Handle removing product from cart
  const removeFromCart = () => {
    dispatch({ type: REMOVE_FROM_CART, _id: currentProduct._id });
    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <>
      {currentProduct && cart ? (
        <div className="container my-1">
          <Link to="/">← Back to Products</Link>
          <h2>{currentProduct.name}</h2>
          <p>{currentProduct.description}</p>
          <p>
            <strong>Price:</strong>${currentProduct.price}{' '}
            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find(p => p._id === currentProduct._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>
          <img src={`/images/${currentProduct.image}`} alt={currentProduct.name} />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
