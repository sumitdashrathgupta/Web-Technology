import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
      <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-green-600 font-bold">${product.price}</p>
      <Link to={`/product/${product.id}`} className="mt-2 inline-block text-blue-600 hover:underline">View</Link>
    </div>
  );
}