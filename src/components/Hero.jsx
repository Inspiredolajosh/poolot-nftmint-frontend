import owner from "../assets/owner.png"
import github from '../assets/github_icon.png'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import linkedIn from '../assets/linkedIn_icon.png'
import medium from '../assets/medium_icon.png'


const Hero = () => {
  return (
    <div className="bg-[url('https://cdn.pixabay.com/photo/2020/05/17/17/57/night-5182902_960_720.png')] 
    bg-no-repeat bg-cover">
         <div className="flex flex-col justify-center items-center mx-auto py-10">
            <h1 className="text-white text-5xl font-bold text-center">
                A.I Arts <br />
                <span className="text-gradient">NFTs Collection</span>
            </h1>

            <p className="text-white font-semibold text-sm mt-3"> Mint and Collect the hottest NFt around</p>
        
            <button className="shadow-xl shadow-black text-white bg-[#054a88] hover:bg-[#17096d] p-2 rounded-full cursor-pointer my-4">
                
            Mint Now</button>
        
            <a className="flex justify-center items-center space-x-2 bg-[#000000ad] rounded-full my-4 pr-3 cursor-pointer" href="#" target="_blank">
                <img className="bg-white w-11 h-11 object-contain rounded-full" src={owner} alt="Avater" />
                <div className="flex flex-col font-semibold text-white text-sm">
                    <span>0x..f4844746</span>
                    <span className="text-[#054a88]">Poolot</span>
                </div>
            </a>

            <p className="text-white text-sm font-medium text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, cumque vero illum, corrupti saepe, <br />laborum qui tempore ipsam ad totam omnis ipsa officia suscipit obcaecati quam adipisci expedita ducimus odio.</p>

            <ul className="flex flex-row justify-center space-x-2 items-center my-4">
                <a className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2" href="#">
                    <img className="w-7 h-7" src={github} alt="Github" />
                </a>
                <a className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2" href="#">
                    <img className="w-7 h-7" src={facebook} alt="Github" />
                </a>
                <a className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2" href="#">
                    <img className="w-7 h-7" src={linkedIn} alt="Github" />
                </a>
                <a className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2" href="#">
                    <img className="w-7 h-7" src={twitter} alt="Github" />
                </a>
                <a className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2" href="#">
                    <img className="w-7 h-7" src={medium} alt="Github" />
                </a>
            </ul>

            <div className="shadow-xl shadow-black flex justify-center items-center w-10 h-10 rounded-full bg-white cursor-pointer 
            p-3 ml-4 text-black hover:bg-[#1c1066] hover:text-white transition-all duration-75 delay-100">
                <span className="text-sm font-bold">
                    99
                </span>
            </div>

        </div>  

    </div>
  )
}

export default Hero
