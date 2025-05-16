import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="flex justify-between items-center border-b py-4">
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p>Qty: {item.quantity}</p>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-600 hover:underline"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}