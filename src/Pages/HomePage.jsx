import Card from "../Components/Card";
import EventsAndCampaign from "../Components/EventsAndCampaign";
import Slider from "react-slick";
import Footer from "../Components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = [
	"https://i.pinimg.com/736x/47/08/71/47087186d74fa53a8eba13f99f7a6bfc.jpg",
	"https://i.pinimg.com/736x/f8/54/8c/f8548ccddc6ed3aa0b562b23273d3630.jpg",
	"https://i.pinimg.com/1200x/04/a4/47/04a447da3be990975b0f94fca3a4abe3.jpg",
	"https://i.pinimg.com/736x/c4/de/6f/c4de6f892c10ebce890dc99e925ec50b.jpg",
];
function Carousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoPlaySpeed: 600,
	};
	return (
		<Slider {...settings}>
			{images.map((img, idx) => (
				<div key={idx}>
					<img src={img} className="w-full h-[500px]" alt={`slide-${idx}`} />
				</div>
			))}
		</Slider>
	);
}
const Home = ({ msg }) => {
	   return (
		   <div>
			   {msg !== "" && (
				   <div className="w-full bg-black text-[50px] font-bold italic text-gray-200 text-center p-2">
					   {msg}
				   </div>
			   )}
			   <div className="h-[500px] w-full bg-red-700">
				   <div className="w-full h-full">
					   <Carousel />
				   </div>
				   <Card />
				   <EventsAndCampaign />
				   <Footer />
			   </div>
		   </div>
	   );
};
export default Home;
