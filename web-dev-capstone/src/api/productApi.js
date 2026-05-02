import axios from 'axios';

// 1. Mandatory Tech Stack: API Integration using Axios
// Base URL from the chosen Public API (DummyJSON)
const BASE_URL = 'https://dummyjson.com';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * FETCH PRODUCTS WITH PAGINATION
 * Satisfies Requirement: "Performance: Lazy loading, pagination / infinite scroll"
 */
export const fetchProducts = async (limit = 10, skip = 0) => {
  try {
    const response = await api.get(`/products?limit=${limit}&skip=${skip}`);
    return response.data; // Returns { products: [], total, skip, limit }
  } catch (error) {
    throw error;
  }
};

/**
 * SEARCH PRODUCTS
 * Satisfies Advanced Feature: "Search + filter + sort"
 */
export const searchProducts = async (query) => {
  try {
    const response = await api.get(`/products/search?q=${query}`);
    return response.data.products;
  } catch (error) {
    throw error;
  }
};

/**
 * FETCH SINGLE PRODUCT DETAILS
 * Used for the Product Detail page (React Router)
 */
export const fetchProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * FETCH CATEGORIES
 * Satisfies Advanced Feature: "Filter" (Category-based filtering)
 */
export const fetchCategories = async () => {
  try {
    const response = await api.get('/products/categories');
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * FETCH PRODUCTS BY CATEGORY
 */
export const fetchProductsByCategory = async (category) => {
  try {
    const response = await api.get(`/products/category/${category}`);
    return response.data.products;
  } catch (error) {
    throw error;
  }
};

export default api;
