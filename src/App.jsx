
import Nav from "../src/Components/RouterNav";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "../src/Pages/HomePage";
import ContactPage from "../src/Pages/ContactPage";
import AboutPage from "../src/Pages/About";
import Login from "../src/Pages/Login";
import SignUp from "../src/Pages/SignUp";
import Order from "../src/Pages/Order";
import SupportUs from "../src/Pages/SupportUs";

import { use, useState } from "react";


const App = () => {
	const [users, setUsers] = useState([]);
	const [showLogin, setShowLogin] = useState(true);
	const [msg, setMsg] = useState("");


	// Functions to switch between login and signup
	const switchToLogin = () => setShowLogin(true);
	const switchToSignup = () => setShowLogin(false);

	return (
		<div className="overflow-x-hidden min-h-screen">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<HomePage msg={msg} />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/order/:productName" element={<Order />} />
					<Route path="/login" element={<Login users={users} setMsg={setMsg} switchPage={switchToSignup} />} />
					<Route path="/signup" element={<SignUp users={users} setMsg={setMsg} setUsers={setUsers} switchPage={switchToLogin} />} />
					<Route path="/supportus" element={<SupportUs />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};
export default App;
