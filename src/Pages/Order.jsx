import { useParams } from "react-router-dom";
import { useState } from "react";
const Order = () => {
	const Products = [
		{
			Name: "ASUS ROG STRIX G16",
			img: "https://i.pinimg.com/736x/fc/e2/2f/fce22f9dd9a637d84dac1ba4462e2aad.jpg",
			Price: 1249,
			Description:
				"A 16-inch gaming laptop with sleek ROG design, ideal for smooth gaming and multitasking.",
			Specs: {
				CPU: "Intel Core i7-13650HX",
				GPU: "NVIDIA GeForce RTX 4060",
				RAM: "16GB DDR5",
				Storage: "512GB PCIe SSD",
				Display: "16-inch FHD+ 165Hz",
			},
		},
		{
			Name: "ASUS ROG STRIX G18",
			img: "https://i.pinimg.com/1200x/a2/03/76/a20376c3db63faff150ac349a1c9686d.jpg",
			Price: 1379,
			Description:
				"A massive 18-inch gaming powerhouse built for immersive experiences and esports performance.",
			Specs: {
				CPU: "Intel Core i9-13980HX",
				GPU: "NVIDIA GeForce RTX 4070",
				RAM: "16GB DDR5",
				Storage: "1TB PCIe SSD",
				Display: "18-inch QHD+ 240Hz",
			},
		},
		{
			Name: "ASUS ROG STRIX SCAR 17",
			img: "https://i.pinimg.com/1200x/52/b4/12/52b41251a0bda732cfcbaef8b3e76f6b.jpg",
			Price: 2599,
			Description:
				"Premium 17-inch gaming laptop optimized for competitive esports with extreme performance and cooling.",
			Specs: {
				CPU: "AMD Ryzen 9 7945HX",
				GPU: "NVIDIA GeForce RTX 4090",
				RAM: "32GB DDR5",
				Storage: "2TB PCIe SSD",
				Display: "17.3-inch QHD 240Hz",
			},
		},
		{
			Name: "ASUS ROG STRIX SCAR 16",
			img: "https://i.pinimg.com/736x/5b/a8/8f/5ba88f91b76f355631cb134ca77feb43.jpg",
			Price: 2359,
			Description:
				"High-performance 16-inch Scar edition laptop designed for hardcore gamers with stunning visuals.",
			Specs: {
				CPU: "Intel Core i9-13980HX",
				GPU: "NVIDIA GeForce RTX 4080",
				RAM: "32GB DDR5",
				Storage: "1TB PCIe SSD",
				Display: "16-inch Mini LED QHD+ 240Hz",
			},
		},
		{
			Name: "ASUS ROG ZEPHYRUS G14",
			img: "https://i.pinimg.com/1200x/cc/b2/9a/ccb29a618f4f67b6c11c48ae9bc86820.jpg",
			Price: 1499,
			Description:
				"A compact and lightweight 14-inch laptop that balances portability and gaming performance.",
			Specs: {
				CPU: "AMD Ryzen 9 7940HS",
				GPU: "NVIDIA GeForce RTX 4060",
				RAM: "16GB DDR5",
				Storage: "1TB PCIe SSD",
				Display: "14-inch QHD+ 165Hz",
			},
		},
		{
			Name: "ASUS ROG ZEPHYRUS M16",
			img: "https://i.pinimg.com/1200x/5c/2b/58/5c2b58d19d0b78be069950eb28a9cee7.jpg",
			Price: 1799,
			Description:
				"Sleek 16-inch Zephyrus model offering slim design, powerful hardware, and creator-friendly features.",
			Specs: {
				CPU: "Intel Core i9-13900H",
				GPU: "NVIDIA GeForce RTX 4070",
				RAM: "16GB DDR5",
				Storage: "1TB PCIe SSD",
				Display: "16-inch QHD+ 240Hz",
			},
		},
		{
			Name: "ASUS TUF A16",
			img: "https://i.pinimg.com/736x/8e/d0/33/8ed033fd26b6409a1dec6db3620e00d7.jpg",
			Price: 1099,
			Description:
				"Durable 16-inch TUF series laptop with military-grade toughness and reliable gaming performance.",
			Specs: {
				CPU: "AMD Ryzen 7 7735HS",
				GPU: "NVIDIA GeForce RTX 4050",
				RAM: "16GB DDR5",
				Storage: "512GB PCIe SSD",
				Display: "16-inch FHD+ 144Hz",
			},
		},
		{
			Name: "ASUS TUF A15",
			img: "https://i.pinimg.com/736x/7c/57/97/7c5797658444e64af1dbfa6efb5b9255.jpg",
			Price: 999,
			Description:
				"Affordable 15-inch gaming laptop with strong performance, rugged design, and excellent value.",
			Specs: {
				CPU: "AMD Ryzen 7 7735HS",
				GPU: "NVIDIA GeForce RTX 4060",
				RAM: "16GB DDR5",
				Storage: "512GB PCIe SSD",
				Display: "15.6-inch FHD 144Hz",
			},
		},
	];

	const { productName } = useParams();
	const Product = Products.find((value) => value.Name === productName);
	const [showPopup, setShowPopup] = useState(false);
	return (
		<div className="w-full h-[100vh + 50px] overflow-y-hidden flex flex-col md:flex-row justify-between items-center bg-black text-white">
			<img src={Product.img} alt={Product.Name} className="w-[100%] md:w-[60%] h-[90vh]" />
			<div className="flex flex-col gap-5 w-[40%] p-5">
				<h1 className="text-4xl font-bold">{Product.Name}</h1>
				<h3 className="text-2xl">{Product.Description}</h3>
				<h3>Specs</h3>
				<ul className="list-disc ml-5 text-2xl">
					<li>CPU: {Product.Specs.CPU}</li>
					<li>GPU: {Product.Specs.GPU}</li>
					<li>RAM: {Product.Specs.RAM}</li>
					<li>Storage: {Product.Specs.Storage}</li>
					<li>Display: {Product.Specs.Display}</li>
				</ul>
				<p className="text-2xl">${Product.Price}</p>
				<button
					onClick={() => setShowPopup(true)}
					className="bg-blue-500 hover:bg-green-500 hover:cursor-pointer text-white p-2 rounded"
				>
					Buy Now
				</button>
				{showPopup && (
					<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
						<div className="bg-white flex flex-col gap-5 p-6 rounded shadow">
							<h2 className="text-2xl font-bold text-black">{Product.Name}</h2>
							<img src="/assets/QR.jpg" alt="" className="w-full h-full" />
							<button onClick={() => setShowPopup(false)} className="bg-blue-500 w-full hover:bg-green-500 hover:cursor-pointer text-white p-2 rounded">Close</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
export default Order;
