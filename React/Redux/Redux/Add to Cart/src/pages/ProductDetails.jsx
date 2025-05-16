import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import p1 from "../assets/p1.webp"
import p2 from "../assets/p2.avif"

const products = [
  { id: 1, title: 'Shoe', price: 120, image: {p1} },
  { id: 2, title: 'Watch', price: 80, image: {p2} },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const dispatch = useDispatch();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <img src={product.image} alt={product.title} className="h-60 object-contain mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
      <p className="text-green-600 text-xl font-semibold mb-4">${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
