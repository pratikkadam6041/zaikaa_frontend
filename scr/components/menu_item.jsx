// zaikaa/src/components/MenuItem.jsx
export default function MenuItem({ item, onAddToCart }) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white rounded-lg shadow-sm mb-4">
      <div className="flex-grow mr-4">
        <h4 className="font-bold text-lg text-gray-800">{item.name}</h4>
        <p className="text-md font-semibold text-gray-900 mt-1">₹{item.price}</p>
      </div>
      <div className="flex-shrink-0">
        <button 
          onClick={() => onAddToCart(item)}
          className="px-5 py-2 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition-colors active:scale-95"
        >
          Add
        </button>
      </div>
    </div>
  );
}