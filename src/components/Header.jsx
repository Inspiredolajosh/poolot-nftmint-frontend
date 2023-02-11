import ethlogo from "../assets/ethlogo.png"

const Header = () => {
  return (
    <div className="header">
    <nav className="w-4/5 flex justify-between md:justify-center items-center py-4 mx-aut ">
        <div className="flex flex-row justify-start items-center md:flex-[0.5] flex-innitial">
            <img className="w-8 cursor-pointer" src={ethlogo} alt="logo" />
            <span className="text-white text-2xl ml-2">Poolot</span>
        </div>

        <ul className="md:flex-[0.5] text-white list-none flex-row justify-between items-center flex initial">
            <li className="mx-4 cursor-pointer">
                Explore
            </li>
            <li className="mx-4 cursor-pointer">
                Features
            </li>
            <li className="mx-4 cursor-pointer">
                Community
            </li>
        </ul>

        <button className="shadow-xl shadow-black text-white bg-[#054a88] hover:bg-[#000000] md:text-xs p-2 rounded-full cursor-pointer">Connect Wallet</button>
    </nav>
    </div>
  );
}

export default Header;
