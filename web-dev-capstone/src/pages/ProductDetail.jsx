import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/productApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { formatPrice } from '../utils/formatters';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <div className="p-10">Loading...</div>;

  return (
    <div className="flex flex-col md:flex-row gap-10">
      <img src={product.thumbnail} className="w-full md:w-1/2 rounded-lg shadow-lg" alt={product.title} />
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{product.title}</h1>
        <p className="text-gray-600 dark:text-gray-400">{product.description}</p>
        <p className="text-3xl font-bold text-blue-600">{formatPrice(product.price)}</p>
        <button 
          onClick={() => dispatch(addToCart(product))}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 w-full md:w-auto"
        >
          Add to Shopping Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;