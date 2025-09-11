const Description = () => {
	return (
        <div className="w-full h-[screen] flex flex-col md:flex-row justify-between items-center bg-black text-white p-5">
            <div className="w-[60%] h-[100vh] flex flex-col justify-center items-center">
                <h1 className="text-center text-[50px] font-bold">Your Help Matters</h1>
                <h3 className="text-center w-[80%] italic font-bold">
                    Supporting us help us to make our products better and more
                    reliable. We're always in search of new ideas and experiences,
                    and it's also motivate us to push ourselves further and create
                    new things for our society.
                </h3>
                <img src="/assets/QR.jpg" alt="" className="w-[30%] h-[30%]" />
            </div>
            <img src="https://i.pinimg.com/736x/80/25/b8/8025b8a7096479cc23c87a82e4df735b.jpg" className="rounded-tl-[40%] rounded-bl-[40%]" alt="" />
            
        </div>
    )
}
export default Description;