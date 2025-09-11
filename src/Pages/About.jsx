const About = () => {
	return (
		<div className="relative w-full h-[100vh] bg-black">
			<img
				src="https://i.pinimg.com/736x/1b/bd/e5/1bbde5bb2c98f501e4c00d6502e8f385.jpg"
				className="w-full h-full object-cover opacity-75"
				alt=""
			/>
			<div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center">
				<h1 className="text-center text-[50px] text-white font-bold">About Us</h1>
				<h3 className="text-center w-[80%] italic font-bold text-white">
					ASUS is passionate about technology and driven by innovation. We
					dream, we dare and we strive to create an effortless and joyful
					digital life for everyone. We're always in search of incredible ideas
					and experiences, and we aspire to deliver the incredible in everything
					we do.
				</h3>
			</div>
		</div>
	);
};
export default About;
