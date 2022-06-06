import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCert, removeFromCart } from '../redux/cartSlice';

const CartScreen = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    if (id) dispatch(addToCert({ id, qty }));
  }, [dispatch, id, qty]);

  return (
    <div>
      {cartItems.length === 0 ? (
        <h3>
          Your cart is empty <Link to="/">Go Back</Link>
        </h3>
      ) : (
        cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <button onClick={() => removeFromCartHandler(item.product)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartScreen;
