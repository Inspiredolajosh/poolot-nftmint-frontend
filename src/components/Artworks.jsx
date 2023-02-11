import ethlogo from "../assets/ethlogo.png"
const Artworks = () => {
    const BASE_URI = "https://s3.cointelegraph.com/uploads/2022-07/d2b2ea2b-88eb-4f76-b711-36451e152252.jpg"
  
    return (

    <div className="bg-[#131835] p-10 ">
        <div className="w-4/5 mx-auto">
            <h4 className="text-gradient uppercase text-2xl"></h4>
            <div  className="flex flex-wrap justify-center items-center mt-4 ">
                {/* TO generate a dynamic array of nfts */}
                    {Array(5)
                        .fill()
                            .map((nft, i) =>(

                        <div key={i} className={`relative shadow-xl shadow-black p-3 bg-white rounded-lg items w-64 h-64 object-contain bg-no-repeat
                        bg-cover overflow-hidden mr-2 mb-2 cursor-pointer transition-all duration-75 delay-100 hover:shadow-[#ffffff]`}
                        style={{ backgroundImage: `url(${BASE_URI})` }}>
                        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center label-gradient p-2 text-white text-sm">
                        <p>Poolot NFT #{i+1} </p>
                            <div className="flex justify-center items-center space-x-2">
                                <img className="w-5 cursor-pointer" src={ethlogo} alt="Poolot Logo" />
                                3.4
                            </div>
                            
                    </div>
                </div>
                    
                    ))}
                </div>

                <div className="flex justify-center items-center mx-auto mt-4">
                    <button className="shadow-xl shadow-black text-white rounded-full bg-[#054A88] hover:bg-[#000000] p-2 cursor-pointer">Load More</button>
                </div>
        
        </div>
    </div>
  )
}

export default Artworks