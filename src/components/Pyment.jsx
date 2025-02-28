import React, { useState } from "react";

const Pyment = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    billingAddress: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 
  const validate = () => {
    let formErrors = {};
    
    if (!formData.cardNumber || formData.cardNumber.length !== 16) {
      formErrors.cardNumber = "Card number must be 16 digits.";
    }

    if (!formData.expiryDate || formData.expiryDate.length !== 5) {
      formErrors.expiryDate = "Expiry date must be in MM/YY format.";
    }

    if (!formData.cvv || formData.cvv.length !== 3) {
      formErrors.cvv = "CVV must be 3 digits.";
    }

    if (!formData.cardholderName) {
      formErrors.cardholderName = "Cardholder's name is required.";
    }

    if (!formData.billingAddress) {
      formErrors.billingAddress = "Billing address is required.";
    }

    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setLoading(true);

    try {
     
      console.log("Payment data submitted:", formData);
      

      
      setTimeout(() => {
        setLoading(false);
        alert("Payment Successful!");
        setFormData({
          cardNumber: "",
          expiryDate: "",
          cvv: "",
          cardholderName: "",
          billingAddress: "",
        });
      }, 2000);
    } catch (error) {
      setLoading(false);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Payment Information</h2>

        <form onSubmit={handleSubmit}>
         
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9876 5432"
              maxLength="16"
              className="w-full p-3 mt-1 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.cardNumber && <p className="text-red-500 text-sm mt-2">{errors.cardNumber}</p>}
          </div>

         
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700" htmlFor="expiryDate">
                Expiry Date (MM/YY)
              </label>
              <input
                type="text"
                name="expiryDate"
                id="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                maxLength="5"
                className="w-full p-3 mt-1 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.expiryDate && <p className="text-red-500 text-sm mt-2">{errors.expiryDate}</p>}
            </div>

          
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700" htmlFor="cvv">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
                maxLength="3"
                className="w-full p-3 mt-1 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.cvv && <p className="text-red-500 text-sm mt-2">{errors.cvv}</p>}
            </div>
          </div>

       
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="cardholderName">
              Cardholder's Name
            </label>
            <input
              type="text"
              name="cardholderName"
              id="cardholderName"
              value={formData.cardholderName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full p-3 mt-1 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.cardholderName && <p className="text-red-500 text-sm mt-2">{errors.cardholderName}</p>}
          </div>

        
         

        
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 disabled:bg-gray-400 transition-all duration-300"
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pyment;



