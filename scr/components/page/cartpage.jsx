// zaikaa/src/pages/CartPage.jsx
export default function CartPage({ cart, onAdd, onRemove }) {
  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
      </div>
    );
  }

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Order</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {cart.map(item => (
          <div key={item.id} className="flex justify-between items-center py-3 border-b">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600">₹{item.price} x {item.quantity}</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => onRemove(item)} className="bg-red-500 text-white font-bold w-8 h-8 rounded-full">-</button>
              <span className="font-bold text-lg">{item.quantity}</span>
              <button onClick={() => onAdd(item)} className="bg-green-500 text-white font-bold w-8 h-8 rounded-full">+</button>
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center mt-4 pt-4 border-t">
          <span className="text-xl font-bold">Total</span>
          <span className="text-xl font-bold">₹{totalPrice}</span>
        </div>
        <button className="w-full mt-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}