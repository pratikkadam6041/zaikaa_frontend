// zaikaa/src/pages/MenuPage.jsx
import { useState, useEffect } from 'react';
import MenuItem from '../components/MenuItem';

export default function MenuPage({ onAddToCart }) {
  const [menuData, setMenuData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/menu');
        const data = await response.json();
        setMenuData(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchMenu();
  }, []);
  
  const categories = ['All', ...new Set(menuData.map(item => item.category))];
  const filteredMenu = selectedCategory === 'All'
    ? menuData
    : menuData.filter(item => item.category === selectedCategory);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
              selectedCategory === category
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {filteredMenu.map(item => (
          <MenuItem 
            key={item.id} 
            item={item} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
    </div>
  );
}