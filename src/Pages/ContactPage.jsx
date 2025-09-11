const Contact = () =>{
    return(
        <div className="w-full h-[screen] bg-black flex md:flex-row flex-col">
            <img src="/assets/Monkey.jpg" alt="" className="md:w-1/2 w-full h-full rounded-[10%]" />
            <div className="md:w-1/2 w-full h-full flex flex-col gap-10 justify-center items-center text-white">
                <h1 className="text-[40px] font-bold">Contact Us</h1>
                <h3 className="text-center w-[80%] italic font-bold">
                    We would love to hear from you! Please reach out with any questions or feedback.
                </h3>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"/></svg>
                    <h3 className="ml-7">Hakmenglong83@gmail.com</h3>
                </div>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"/></svg>
                    <h3 className="ml-7">ksovichai08@gmail.com</h3>
                </div>
                <div className="flex gap-15">
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"/></svg>
                        <h2>So Vi Chai</h2>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"/></svg>
                        <h2>LO NG</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;