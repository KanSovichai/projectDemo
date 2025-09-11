const EventsAndCampaign = () => {
	const Links = [
		{
			title: "Graphics Card CHEERS TO 30 YEARS Campaign",
			link: "https://www.asus.com/event/ASUSVGA30years/?utm_source=asus&utm_medium=banner",
			img: "https://www.asus.com/media/Odin/Websites/global/SiteSetting/20250708020318.jpg?webp",
		},
		{
			title: "How to Unlock New Possibilities with AI on Your Copilot+ PC",
			link: "https://www.asus.com/content/how-to-unlock-new-possibilities-with-ai-on-your-copilot-plus-pc/",
			img: "https://www.asus.com/media/Odin/Websites/global/SiteSetting/20250721085723.jpg?webp",
		},
		{
			title: "Best Laptops for College Students: Why ASUS Laptop Wins",
			link: "https://www.asus.com/content/best-laptops-for-college-students-why-asus-laptop-wins/",
			img: "https://dlcdnwebimgs.asus.com/files/media/202506/6aece56f-8737-4754-ab36-32d136beb1ba/v1/assets/image/proart/article_cover.jpg",
		},
	];
	return (
		<div className="bg-black text-white p-5">
			<h1 className="text-[25px] text-center font-bold">Campaigns And Events</h1>
			<div className="grid grid-cols-3 gap-5 mt-15">
				{Links.map((link, index) => (
					<div key={index} className="rounded-[15px] col-span-3 md:col-span-1">
                        <img src={link.img} alt="" className="w-[100%] h-[250px] rounded-t-[15px]" />
						<h2 className="text-[18px] font-semibold">{link.title}</h2>
						<a href={link.link} target="_blank" className="text-blue-500 hover:underline">Learn More</a>
					</div>
				))}
			</div>
		</div>
	);
};
export default EventsAndCampaign;
