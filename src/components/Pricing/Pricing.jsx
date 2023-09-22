
const Pricing = () => {
    return (
        <div className="xl:w-[85%] w-full px-2 mx-auto">
            <div className="grid grid-cols-5 justify-center items-center gap-5 text-center mt-5">
                <div className="flex flex-col gap-5 justify-center items-center">
                    <span className="xl:text-3xl text-sm text-[#3Dc6c1]">0.94%</span>
                    <span>5 Mins</span>
                </div>
                <div className="flex flex-col gap-5  justify-center items-center">
                    <span className="xl:text-3xl text-sm text-[#3Dc6c1]">0.27%</span>
                    <span>1 Hour</span>
                </div>
                <div className="flex flex-col gap-5  justify-center items-center">
                    <span className="text-[#ffffff66] text-sm xl:text-3xl">Best Price to Trade</span>
                    <span className="xl:text-6xl text-3xl text-white font-bold">₹ 24,10,513</span>
                    <span className="text-[#ffffff66] text-xs">Average BTC/INR net price including commission</span>
                </div>

                <div className="flex flex-col gap-5  justify-center items-center">
                    <span className="xl:text-3xl text-sm text-[#3Dc6c1]">7.36%</span>
                    <span>1 Day</span>
                </div>
                <div className="flex flex-col gap-5  justify-center items-center">
                    <span className="xl:text-3xl text-sm text-[#3Dc6c1]">13.27%</span>
                    <span>7 Day</span>
                </div>
                
            </div>
        </div>
    );
};

export default Pricing;