import { Link } from "react-router-dom";
const Nav = () => {
	return (
		<nav className="w-full h-[50px] flex-col max-md:h-[250px] md:flex-row items-center md:justify-between p-2 md:sticky top-0 z-50 bg-black flex">
			<Link to={"/"}>
				<img
				src="assets/AsusLogoWhite.jpg"
				alt=""
				className="hover:scale-110 w-[70px] h-[50px] "
				/>
			</Link>
			<ul className="text-black md:gap-5 h-[50px] pl-4 md:flex-row flex mb-15 flex-col items-center">
				<li className="hover:border-b-3 transition-all transition-delay-2000 hover:border-b-blue-600 hover:text-blue-200 text-white flex flex-col justify-center items-center h-[50px]">
					<Link to="/">Home</Link>
				</li>
				<li className="hover:border-b-3 transition-all transition-delay-2000 hover:border-b-blue-600 hover:text-blue-200 text-white flex flex-col justify-center items-center h-[50px]">
					<Link to="/contact">Contact</Link>
				</li>
				<li className="hover:border-b-3 transition-all transition-delay-2000 hover:border-b-blue-600 hover:text-blue-200 text-white flex flex-col justify-center items-center h-[50px]">
					<Link to="/about">About</Link>
				</li>
				<li className="hover:border-b-3 transition-all transition-delay-2000 hover:border-b-blue-600 hover:text-blue-200 text-white flex flex-col justify-center items-center h-[50px]">
					<Link to="/supportus">Support Us</Link>
				</li>
			</ul>
			<button
				type="button"
				className="bg-white rounded-[50%] p-2 hover:bg-gray-300"
			>
				<Link to={"/login"}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							fill-rule="evenodd"
							d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z"
							clip-rule="evenodd"
						/>
					</svg>
				</Link>
			</button>
		</nav>
	);
};
export default Nav;
