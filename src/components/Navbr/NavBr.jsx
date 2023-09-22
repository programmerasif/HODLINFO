import logo from '../../assets/logo.png'
import { FaRegPaperPlane} from 'react-icons/fa';
const NavBr = () => {
    return (
        <div className='mt-5 mx-10 '>
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 justify-center items-center xl:justify-between xl:items-center ">
            <div className="xl:w-96 w-52 mx-auto"> 
            <img src={logo} alt="" />
            </div>
            <div>
                
            <div className='flex justify-center items-center gap-5'>
                    <div className='px-2 py-1 bg-[#2e3241] rounded-md'>INR</div>
                    <div className='px-2 py-1 bg-[#2e3241] rounded-md'>BTC</div>
                    <div className='px-2 py-1 bg-[#2e3241] rounded-md'> <a href='https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn'> BYE BTC</a></div>
                </div>
            </div>
            <div className='flex items-center justify-center xl:justify-end gap-8'>
                <div className='ring-4 ring-[#3Dc6c1] rounded-full px-3 py-2 text-sm'>10</div>
                <div className='bg-[#3Dc6c1] px-4 xl:px-8 xl:py-3 py-2 rounded-md flex justify-center items-center xl:gap-4 gap-2 text-sm xl:text-xl'> <FaRegPaperPlane /> Connect Telegram</div>
                <div>Togol</div>
            </div>
            </div>
        </div>
    );
};

export default NavBr;