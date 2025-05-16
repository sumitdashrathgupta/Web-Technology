import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const cart = useSelector(state => state.cart);

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-blue-600">ShopNow</Link>
      <Link to="/cart" className="text-lg text-gray-800 hover:text-blue-500">Cart ({cart.length})</Link>
    </nav>
  );
}