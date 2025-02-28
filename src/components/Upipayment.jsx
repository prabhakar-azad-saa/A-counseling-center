import React, { useState } from "react";


const validateUPI = (upiId) => {
  const upiRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/; 
  return upiRegex.test(upiId);
};


const validateAmount = (amount) => {
  return amount > 0;
};

const UpiPayment = () => {
  const [upiId, setUpiId] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

 
  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!validateUPI(upiId)) {
      setError("Please enter a valid UPI ID.");
      return;
    }

    
    if (!validateAmount(amount)) {
      setError("Amount should be greater than 0.");
      return;
    }

    
    setError("");
    alert("Payment initiated successfully!");

  
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">UPI Payment</h2>
      
      {error && <div className="text-red-600 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
     
        <div>
          <label htmlFor="upiId" className="block text-lg font-semibold">UPI ID</label>
          <input
            type="text"
            id="upiId"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            placeholder="example@upi"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
          />
        </div>

    
        <div>
          <label htmlFor="amount" className="block text-lg font-semibold">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
          />
        </div>

        
        <div>
          <label htmlFor="note" className="block text-lg font-semibold">Note (Optional)</label>
          <textarea
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Add a note"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpiPayment;
