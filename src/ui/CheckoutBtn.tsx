// import React from "react";
// import { ProductProps } from "../../type";
// import { store } from "../lib/store";
// import { config } from "../../config";

// const CheckoutBtn = ({ products }: { products: ProductProps[] }) => {
//   const { currentUser } = store();

//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handleCheckout = async () => {
//     const isScriptLoaded = await loadRazorpayScript();

//     if (!isScriptLoaded) {
//       window.alert("Failed to load Razorpay SDK. Please check your connection.");
//       return;
//     }

//     try {
//       // Call your backend to create a Razorpay order
//       const response = await fetch(`${config?.baseUrl}/create-razorpay-order`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           items: products,
//           email: currentUser?.email,
//         }),
//       });

//       const orderData = await response.json();

//       const options = {
//         key: "YOUR_RAZORPAY_KEY_ID", // Replace with your actual key ID from Razorpay Dashboard
//         amount: orderData.amount, // Amount in smallest currency unit (e.g., paise)
//         currency: orderData.currency,
//         name: "Your Store Name",
//         description: "Order Payment",
//         order_id: orderData.id, // The order ID created on the server
//         handler: function (response) {
//           window.alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
//         },
//         prefill: {
//           name: currentUser?.name || "",
//           email: currentUser?.email || "",
//           contact: currentUser?.contact || "", // Add contact number if available
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       const paymentObject = new window.Razorpay(options);
//       paymentObject.open();
//     } catch (error) {
//       console.error("Error initiating payment: ", error);
//       window.alert("Something went wrong while initiating the payment.");
//     }
//   };

//   return (
//     <div className="mt-6">
//       {currentUser ? (
//         <button
//           onClick={handleCheckout}
//           type="submit"
//           className="w-full rounded-md border border-transparent bg-gray-800 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-skyText focus:ring-offset-2 focus:ring-offset-gray-50 duration-200"
//         >
//           Checkout
//         </button>
//       ) : (
//         <button className="w-full text-base text-white text-center rounded-md border border-transparent bg-gray-500 px-4 py-3 cursor-not-allowed">
//           Checkout
//         </button>
//       )}
//       {!currentUser && (
//         <p className="mt-2 text-sm font-medium text-red-500 text-center">
//           Need to sign in to make checkout
//         </p>
//       )}
//     </div>
//   );
// };

// export default CheckoutBtn;
// import React from "react";
// import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";

// const CheckoutBtn = () => {
//   const { error, isLoading, Razorpay } = useRazorpay();

//   const handlePayment = () => {
//     const options: RazorpayOrderOptions = {
//       key: "YOUR_RAZORPAY_KEY",
//       amount: 50000, // Amount in paise
//       currency: "INR",
//       name: "Test Company",
//       description: "Test Transaction",
//       order_id: "order_9A33XWu170gUtm", // Generate order_id on server
//       handler: (response) => {
//         console.log(response);
//         alert("Payment Successful!");
//       },
//       prefill: {
//         name: "John Doe",
//         email: "john.doe@example.com",
//         contact: "9999999999",
//       },
//       theme: {
//         color: "#F37254",
//       },
//     };

//     const razorpayInstance = new Razorpay(options);
//     razorpayInstance.open();
//   };

//   return (
//     <div>
//       <h1>Payment Page</h1>
//       {isLoading && <p>Loading Razorpay...</p>}
//       {error && <p>Error loading Razorpay: {error}</p>}
//       <button onClick={handlePayment} disabled={isLoading}>
//         Pay Now
//       </button>
//     </div>
//   );
// };

// export default CheckoutBtn;

// import './App.css';
import React,{useState} from 'react';

function CheckoutBtn() {
  const [amount, setamount] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_ffSb2yIkIflJH9",
        key_secret:"iExGzM7nCvTIo41Rk4iV9kye",
        amount: amount *100,
        currency:"INR",
        name:"STARTUP_PROJECTS",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Velmurugan",
          email:"mvel1620r@gmail.com",
          contact:"7904425033"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div className="App">
     <h2>Razorpay Payment Integration Using React</h2>
     <br/>
     <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default CheckoutBtn;