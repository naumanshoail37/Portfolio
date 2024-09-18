import React, { useState } from 'react';

const PaymentComponent = ({ amount }) => {
  const [paymentProcessed, setPaymentProcessed] = useState(false);

  const handlePayment = () => {
    alert(`Processing payment of $${amount}`);
    setPaymentProcessed(true);
    setTimeout(() => setPaymentProcessed(false), 3000); 
  };

  return (
    <div className="mt-4">
      <button
        onClick={handlePayment}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
      >
        Pay Now
      </button>
      {paymentProcessed && (
        <p className="mt-2 text-green-700 font-semibold">
          Payment of ${amount} processed successfully!
        </p>
      )}
    </div>
  );
};

export default PaymentComponent;
