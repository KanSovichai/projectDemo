import { useNavigate } from "react-router-dom";
const Card = () => {
	const navigate = useNavigate();
	const Products = [
		{
			Name: "ASUS ROG STRIX G16",
			img: "https://i.pinimg.com/736x/fc/e2/2f/fce22f9dd9a637d84dac1ba4462e2aad.jpg",
			Price: 1249,
		},
		{
			Name: "ASUS ROG STRIX G18",
			img: "https://i.pinimg.com/1200x/a2/03/76/a20376c3db63faff150ac349a1c9686d.jpg",
			Price: 1379,
		},
		{
			Name: "ASUS ROG STRIX SCAR 17",
			img: "https://i.pinimg.com/1200x/52/b4/12/52b41251a0bda732cfcbaef8b3e76f6b.jpg",
			Price: 2599,
		},
		{
			Name: "ASUS ROG STRIX SCAR 16",
			img: "https://i.pinimg.com/736x/5b/a8/8f/5ba88f91b76f355631cb134ca77feb43.jpg",
			Price: 2359,
		},
		{
			Name: "ASUS ROG ZEPHYRUS G14",
			img: "https://i.pinimg.com/1200x/cc/b2/9a/ccb29a618f4f67b6c11c48ae9bc86820.jpg",
			Price: 1499,
		},
		{
			Name: "ASUS ROG ZEPHYRUS M16",
			img: "https://i.pinimg.com/1200x/5c/2b/58/5c2b58d19d0b78be069950eb28a9cee7.jpg",
			Price: 1799,
		},
		{
			Name: "ASUS TUF A16",
			img: "https://i.pinimg.com/736x/8e/d0/33/8ed033fd26b6409a1dec6db3620e00d7.jpg",
			Price: 1099,
		},
		{
			Name: "ASUS TUF A15",
			img: "https://i.pinimg.com/736x/7c/57/97/7c5797658444e64af1dbfa6efb5b9255.jpg",
			Price: 999,
		},
	];
	return (
		<div className="grid grid-cols-4 bg-black py-15">
			{Products.map((value) => (
				<div className="col-span-4 md:col-span-1 h-[350px] w-[80%] mb-15 ml-[10%] hover:scale-105 transition-all transition-delay-700 py-[0 5px] rounded-[10px] flex flex-col gap-4 border border-gray-900">
					<img
						src={value.img}
						alt=""
						className="w-full h-[200px] rounded-t-[10px]"
					/>
					<h2 className="text-gray-400 hover:text-white ml-[15px]">
						{value.Name}
					</h2>
					<h1 className="text-white hover:text-green-500 font-bold ml-[15px]">
						{" "}
						${value.Price}
					</h1>
					<button
						type="button"
						className="hover:bg-white hover:text-black w-full p-3 mt-4 mb-2 rounded-[8px] bg-[#4e54c8] font-bold text-[16px] cursor-pointer"
						onClick={() => navigate(`/order/${value.Name}`)}
					>
						Order Now
					</button>
				</div>
			))}
		</div>
	);
};
export default Card;
