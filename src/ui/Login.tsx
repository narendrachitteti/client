// import { useState } from "react";
// import axios from "axios";
// import { Eye, EyeOff, Mail, Lock, User, Phone, UserCircle } from "lucide-react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const Login = ({ setLogin }) => {
//   const [loading, setLoading] = useState(false);
//   const [errMsg, setErrMsg] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLogin, setIsLogin] = useState(setLogin);
//   const navigate = useNavigate(); // Initialize navigate

// const handleLogin = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   setErrMsg("");

//   try {
//     const formData = new FormData(e.target);
//     const { email, password } = Object.fromEntries(formData);

//     const response = await axios.post(
//       "https://farm-e-store-backend.vercel.app/api/user/login",
//       { email, password }
//     );

//     const { token, user } = response.data;
//     localStorage.setItem("authToken", token);
//     localStorage.setItem("user", JSON.stringify(user)); // Store user data

//     // Redirect to homepage after successful login
//     navigate("/");
//   } catch (error) {
//     setErrMsg(error.response?.data?.message || "An error occurred. Please try again.");
//   } finally {
//     setLoading(false);
//   }
// };

// const handleRegister = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   setErrMsg("");

//   try {
//     const formData = new FormData(e.target);
//     const { name, email, mobile, user_type, password } = Object.fromEntries(formData);

//     await axios.post("https://farm-e-store-backend.vercel.app/api/user/add-user", {
//       name,
//       email,
//       mobile,
//       user_type,
//       password,
//     });

//     setIsLogin(true);
//   } catch (error) {
//     setErrMsg(error.response?.data?.message || "Registration failed. Please try again.");
//   } finally {
//     setLoading(false);
//   }
// };

//   const inputClasses = "relative block w-full pl-10 pr-3 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm";
//   const iconClasses = "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400";

//   // Get user data from localStorage if logged in
//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   return (
//     <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-teal-50">
//       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl">
//         <div className="text-center">
//           <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center mb-4">
//             <UserCircle className="w-10 h-10 text-white" />
//           </div>
//           <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
//             {isLogin ? "Welcome Back!" : "Join Farm-E-Store"}
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             {isLogin
//               ? "Sign in to access your account"
//               : "Create your account and start selling/buying"}
//           </p>
//         </div>

//         <form onSubmit={isLogin ? handleLogin : handleRegister} className="mt-8 space-y-6">
//           <div className="space-y-4">
//             {!isLogin && (
//               <>
//                 <div className="relative">
//                   <User className={iconClasses} size={20} />
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     className={inputClasses}
//                     placeholder="Full Name"
//                   />
//                 </div>

//                 <div className="relative">
//                   <Phone className={iconClasses} size={20} />
//                   <input
//                     type="tel"
//                     name="mobile"
//                     required
//                     className={inputClasses}
//                     placeholder="Mobile Number"
//                   />
//                 </div>

//                 <div className="relative">
//                   <select
//                     name="user_type"
//                     required
//                     className={`${inputClasses} pl-3`}
//                   >
//                     <option value="">Select User Type</option>
//                     <option value="Farmer">Farmer</option>
//                     <option value="Buyer">Agri-retailer</option>
//                     <option value="Agent">Agent</option>
//                   </select>
//                 </div>
//               </>
//             )}

//             <div className="relative">
//               <Mail className={iconClasses} size={20} />
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 className={inputClasses}
//                 placeholder="Email Address"
//               />
//             </div>

//             <div className="relative">
//               <Lock className={iconClasses} size={20} />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 required
//                 className={`${inputClasses} pr-10`}
//                 placeholder="Password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>
//           </div>

//           {errMsg && (
//             <div className="rounded-md bg-red-50 p-4 mt-4">
//               <p className="text-sm text-red-700 text-center font-medium">
//                 {errMsg}
//               </p>
//             </div>
//           )}

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:-translate-y-0.5"
//           >
//             {loading ? (
//               <>
//                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Processing...
//               </>
//             ) : (
//               isLogin ? "Sign In" : "Create Account"
//             )}
//           </button>

//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-200"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">
//                 {isLogin ? "New to Farm-E-Store?" : "Already have an account?"}
//               </span>
//             </div>
//           </div>

//           <button
//             type="button"
//             onClick={() => setIsLogin(!isLogin)}
//             className="w-full text-center py-2 px-4 border border-green-500 text-green-600 text-sm font-medium rounded-lg hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
//           >
//             {isLogin ? "Create an account" : "Sign in to existing account"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import { useState } from "react";
// import axios from "axios";
// import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import backgroundImage from "../assets/e-store3.webp"; // Import your background image
// import logo from "../assets/farmLogo.png"; // Import your logo image

// const Login = ({ setLogin }) => {
//   const [loading, setLoading] = useState(false);
//   const [errMsg, setErrMsg] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLogin, setIsLogin] = useState(setLogin);
//   const navigate = useNavigate(); // Initialize navigate

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrMsg("");

//     try {
//       const formData = new FormData(e.target);
//       const { email, password } = Object.fromEntries(formData);

//       const response = await axios.post(
//         "https://farm-e-store-backend.vercel.app/api/user/login",
//         { email, password }
//       );

//       const { token, user } = response.data;
//       localStorage.setItem("authToken", token);
//       localStorage.setItem("user", JSON.stringify(user)); // Store user data

//       // Redirect to homepage after successful login
//       navigate("/");
//     } catch (error) {
//       setErrMsg(error.response?.data?.message || "An error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrMsg("");

//     try {
//       const formData = new FormData(e.target);
//       const { name, email, mobile, user_type, password } = Object.fromEntries(formData);

//       await axios.post("https://farm-e-store-backend.vercel.app/api/user/add-user", {
//         name,
//         email,
//         mobile,
//         user_type,
//         password,
//       });

//       setIsLogin(true);
//     } catch (error) {
//       setErrMsg(error.response?.data?.message || "Registration failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const inputClasses = "relative block w-full pl-10 pr-3 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm";
//   const iconClasses = "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400";

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="w-full max-w-sm space-y-8 bg-white bg-opacity-90 p-6 rounded-xl shadow-xl backdrop-blur-sm">
//         <div className="text-center">
//           <div className="mx-auto w-20 h-20 mb-4">
//             <img src={logo} alt="Farm-E-Store Logo" className="w-full h-full object-contain" />
//           </div>
//           <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
//             {isLogin ? "Welcome Back!" : "Join Farm-E-Store"}
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             {isLogin
//               ? "Sign in to access your account"
//               : "Create your account and start selling/buying"}
//           </p>
//         </div>

//         <form onSubmit={isLogin ? handleLogin : handleRegister} className="mt-6 space-y-5">
//           <div className="space-y-4">
//             {!isLogin && (
//               <>
//                 <div className="relative">
//                   <User className={iconClasses} size={20} />
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     className={inputClasses}
//                     placeholder="Full Name"
//                   />
//                 </div>

//                 <div className="relative">
//                   <Phone className={iconClasses} size={20} />
//                   <input
//                     type="tel"
//                     name="mobile"
//                     required
//                     className={inputClasses}
//                     placeholder="Mobile Number"
//                   />
//                 </div>

//                 <div className="relative">
//                   <select
//                     name="user_type"
//                     required
//                     className={`${inputClasses} pl-3`}
//                   >
//                     <option value="">Select User Type</option>
//                     <option value="Farmer">Farmer</option>
//                     <option value="Buyer">Agri-retailer</option>
//                     <option value="Agent">Agent</option>
//                   </select>
//                 </div>
//               </>
//             )}

//             <div className="relative">
//               <Mail className={iconClasses} size={20} />
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 className={inputClasses}
//                 placeholder="Email Address"
//               />
//             </div>

//             <div className="relative">
//               <Lock className={iconClasses} size={20} />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 required
//                 className={`${inputClasses} pr-10`}
//                 placeholder="Password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>
//           </div>

//           {errMsg && (
//             <div className="rounded-md bg-red-50 p-4 mt-2">
//               <p className="text-sm text-red-700 text-center font-medium">
//                 {errMsg}
//               </p>
//             </div>
//           )}

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:-translate-y-0.5"
//           >
//             {loading ? (
//               <>
//                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Processing...
//               </>
//             ) : (
//               isLogin ? "Sign In" : "Create Account"
//             )}
//           </button>

//           <div className="relative mt-2">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-200"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">
//                 {isLogin ? "New to Farm-E-Store?" : "Already have an account?"}
//               </span>
//             </div>
//           </div>

//           <button
//             type="button"
//             onClick={() => setIsLogin(!isLogin)}
//             className="w-full text-center py-2 px-4 border border-green-500 text-green-600 text-sm font-medium rounded-lg hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
//           >
//             {isLogin ? "Create an account" : "Sign in to existing account"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import { useState } from "react";
// import axios from "axios";
// import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import backgroundImage from "../assets/e-store3.webp";
// import logo from "../assets/farmLogo.png";
// import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
// import "react-toastify/dist/ReactToastify.css"; // Import toast styles

// const Login = ({ setLogin }) => {
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLogin, setIsLogin] = useState(setLogin);
//   const navigate = useNavigate();

//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   const mobileRegex = /^[0-9]{10}$/;
//   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
  
//     const formData = new FormData(e.target);
//     const { email, password } = Object.fromEntries(formData);
  
//     if (!emailRegex.test(email)) {
//       toast.error("Please enter a valid email address.");
//       setLoading(false);
//       return;
//     }
  
//     if (!passwordRegex.test(password)) {
//       toast.error("Please check the password.");
//       setLoading(false);
//       return;
//     }
  
//     try {
//       const response = await axios.post(
//         "https://farm-e-store-backend.vercel.app/api/user/login",
//         { email, password }
//       );
  
//       const { token, user } = response.data;
//       localStorage.setItem("authToken", token);
//       localStorage.setItem("user", JSON.stringify(user));
  
//       console.log("Login success response:", response);
  
//       toast.success("Login Successful!");
  
//       navigate("/");
//       // Refresh the page to ensure the navbar reflects the new login state
//       window.location.reload();
//     } catch (error) {
//       console.error("Login error:", error);
//       if (error.response?.data?.message === "Invalid credentials") {
//         toast.error("Please check the password.");
//       } else {
//         toast.error(
//           error.response?.data?.message || "An error occurred. Please try again."
//         );
//       }
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData(e.target);
//     const { name, email, mobile, user_type, password } =
//       Object.fromEntries(formData);

//     if (!emailRegex.test(email)) {
//       toast.error("Please enter a valid email address.");
//       setLoading(false);
//       return;
//     }

//     if (!mobileRegex.test(mobile)) {
//       toast.error("Mobile number must be 10 digits.");
//       setLoading(false);
//       return;
//     }

//     if (!passwordRegex.test(password)) {
//       toast.error(
//         "Password must be at least 8 characters long and contain letters, numbers, and at least one special character."
//       );
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://farm-e-store-backend.vercel.app/api/user/add-user",
//         {
//           name,
//           email,
//           mobile,
//           user_type,
//           password,
//         }
//       );

//       console.log("Registration success response:", response); // Debugging log

//       toast.success("User Registration Successful!"); // Show success message for registration

//       setIsLogin(true);
//     } catch (error) {
//       console.error("Registration error:", error); // Debugging log for error
//       toast.error(
//         error.response?.data?.message || "Registration failed. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const inputClasses =
//     "relative block w-full pl-10 pr-3 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm";
//   const iconClasses = "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400";

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="w-full max-w-sm space-y-8 bg-white bg-opacity-90 p-6 rounded-xl shadow-xl backdrop-blur-sm">
//         <div className="text-center">
//           <div className="mx-auto w-20 h-20 mb-4">
//             <img
//               src={logo}
//               alt="Farm-E-Store Logo"
//               className="w-full h-full object-contain"
//             />
//           </div>
//           <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
//             {isLogin ? "Welcome Back!" : "Join Farm-E-Store"}
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             {isLogin
//               ? "Sign in to access your account"
//               : "Create your account and start selling/buying"}
//           </p>
//         </div>

//         <form
//           onSubmit={isLogin ? handleLogin : handleRegister}
//           className="mt-6 space-y-5"
//         >
//           <div className="space-y-4">
//             {!isLogin && (
//               <>
//                 <div className="relative">
//                   <User className={iconClasses} size={20} />
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     className={inputClasses}
//                     placeholder="Full Name"
//                   />
//                 </div>

//                 <div className="relative">
//                   <Phone className={iconClasses} size={20} />
//                   <input
//                     type="tel"
//                     name="mobile"
//                     required
//                     className={inputClasses}
//                     placeholder="Mobile Number"
//                     pattern="[0-9]{10}"
//                     maxLength="10"
//                     onKeyPress={(e) => {
//                       if (!/[0-9]/.test(e.key)) {
//                         e.preventDefault();
//                       }
//                     }}
//                   />
//                 </div>

//                 <div className="relative">
//                   <select
//                     name="user_type"
//                     required
//                     className={`${inputClasses} pl-3`}
//                   >
//                     <option value="">Select User Type</option>
//                     <option value="Farmer">Farmer</option>
//                     <option value="Buyer">Agri-retailer</option>
//                     <option value="Agent">Agent</option>
//                   </select>
//                 </div>
//               </>
//             )}

//             <div className="relative">
//               <Mail className={iconClasses} size={20} />
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 className={inputClasses}
//                 placeholder="Email Address"
//               />
//             </div>

//             <div className="relative">
//               <Lock className={iconClasses} size={20} />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 required
//                 className={`${inputClasses} pr-10`}
//                 placeholder="Password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-green-500 to-teal-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
//           >
//             {loading ? (
//               <svg
//                 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path
//                   d="M12 2v4M12 18v4M4 12H2M18 12h2M5.292 5.292l2.828 2.828M16.97 16.97l2.828 2.828M5.292 18.708l2.828-2.828M16.97 7.03l2.828-2.828"
//                 ></path>
//               </svg>
//             ) : isLogin ? (
//               "Sign In"
//             ) : (
//               "Create Account"
//             )}
//           </button>

//           <div className="relative mt-2">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-200"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">
//                 {isLogin ? "New to Farm-E-Store?" : "Already have an account?"}
//               </span>
//             </div>
//           </div>

//           <button
//             type="button"
//             onClick={() => setIsLogin(!isLogin)}
//             className="w-full text-center py-2 px-4 border border-green-500 text-green-600 text-sm font-medium rounded-lg hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
//           >
//             {isLogin ? "Create an account" : "Sign in"}
//           </button>
//         </form>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import axios from "axios";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/farmLogo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Agriculture from "../assets/Agriculture.mp4"

const Login = ({ setLogin }) => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(setLogin);
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const mobileRegex = /^[0-9]{10}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (!passwordRegex.test(password)) {
      toast.error("Please check the password.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://farm-e-store-backend.vercel.app/api/user/login",
        { email, password }
      );

      const { token, user } = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Login Successful!");
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const { name, email, mobile, user_type, password } =
      Object.fromEntries(formData);

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (!mobileRegex.test(mobile)) {
      toast.error("Mobile number must be 10 digits.");
      setLoading(false);
      return;
    }

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters long and contain letters, numbers, and at least one special character."
      );
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://farm-e-store-backend.vercel.app/api/user/add-user",
        { name, email, mobile, user_type, password }
      );

      toast.success("User Registration Successful!");
      setIsLogin(true);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(
        error.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "relative block w-full pl-10 pr-3 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm";
  const iconClasses = "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400";

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Video Section - Responsive */}
      <div className="w-full md:w-3/4 h-[50vh] md:h-screen">
        <video
          width="100%"
          height="100%"
          controls
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src={Agriculture} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Login Form Section - Responsive */}
      <div className="w-full md:w-1/4 flex items-center justify-center p-4 bg-white bg-opacity-90 backdrop-blur-sm">
        <div className="w-full max-w-sm space-y-8 bg-white p-6 rounded-xl shadow-xl">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 md:w-20 md:h-20 mb-4">
              <img
                src={logo}
                alt="Farm-E-Store Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              {isLogin ? "Welcome Back!" : "Join Farm-E-Store"}
            </h2>
            <p className="mt-2 text-xs md:text-sm text-gray-600">
              {isLogin
                ? "Sign in to access your account"
                : "Create your account and start selling/buying"}
            </p>
          </div>

          <form
            onSubmit={isLogin ? handleLogin : handleRegister}
            className="mt-6 space-y-5"
          >
            <div className="space-y-4">
              {!isLogin && (
                <>
                  <div className="relative">
                    <User className={iconClasses} size={20} />
                    <input
                      type="text"
                      name="name"
                      required
                      className={inputClasses}
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="relative">
                    <Phone className={iconClasses} size={20} />
                    <input
                      type="tel"
                      name="mobile"
                      required
                      className={inputClasses}
                      placeholder="Mobile Number"
                      pattern="[0-9]{10}"
                      maxLength="10"
                      onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </div>

                  <div className="relative">
                    <select
                      name="user_type"
                      required
                      className={`${inputClasses} pl-3`}
                    >
                      <option value="">Select User Type</option>
                      <option value="Farmer">Farmer</option>
                      <option value="Buyer">Agri-retailer</option>
                      <option value="Agent">Agent</option>
                    </select>
                  </div>
                </>
              )}

              <div className="relative">
                <Mail className={iconClasses} size={20} />
                <input
                  type="email"
                  name="email"
                  required
                  className={inputClasses}
                  placeholder="Email Address"
                />
              </div>

              <div className="relative">
                <Lock className={iconClasses} size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  className={`${inputClasses} pr-10`}
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200"
                disabled={loading}
              >
                {loading ? "Processing..." : isLogin ? "Login" : "Register"}
              </button>
            </div>

            <div className="text-center text-xs md:text-sm text-gray-600">
              {isLogin ? (
                <p>
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className="text-green-600 hover:underline"
                  >
                    Register now
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className="text-green-600 hover:underline"
                  >
                    Login here
                  </button>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;