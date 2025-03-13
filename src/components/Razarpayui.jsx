import React from "react";
import axios from "axios";

const Razorpayui = () => {
  const handlePayment = async () => {
    try {
      // Step 1: Create an order via backend API
      const { data } = await axios.post("http://localhost:5000/api/payment/create-order", {
        amount: 500, // Amount in INR (paise, so 500 = ₹5)
      });

      const options = {
        key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
        amount: data.amount,
        currency: "INR",
        name: "Your Company Name",
        description: "Test Transaction",
        order_id: data.orderId, // Order ID from your .NET backend
        handler: async function (response) {
          // Step 3: Verify payment
          const verifyRes = await axios.post("http://localhost:5000/api/payment/verify", {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verifyRes.data.success) {
            alert("Payment successful!");
          } else {
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return <button onClick={handlePayment}>Pay ₹5</button>;
};

export default Razorpayui;
