import React from 'react';

const PaymentComponent = ({ amount }) => {
  const handlePayment = () => {
    alert(`Processing payment of $${amount}`);
  };

  return (
    <div className="mt-4">
      <button
        onClick={handlePayment}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentComponent;
