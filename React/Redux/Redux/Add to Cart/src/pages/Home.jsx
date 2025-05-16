import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, title: 'Shoe', price: 120, image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Watch', price: 80, image: 'https://via.placeholder.com/150' },
];

export default function Home() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}