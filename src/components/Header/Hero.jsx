import Aldinn  from '../../assets/aldinn.jpg'

function Hero() {
    return (
        <>
            <div className="max-w-5xl mx-auto">

                <div className="my-auto px-5 lg:px-0 py-5 md:py-0 min-h-[90vh] flex-col flex align-middle items-center justify-center">
                    <div className="flex items-center flex-col md:flex-row gap-x-12 mt-10 md:mt-0 ">
                        <div className='pb-10 md:pb-0 flex justify-center md:justify-start mx-auto'>
                            <img src={Aldinn}
                                 className="max-h-[200] max-w-[200] md:max-h-[400px] lg:max-w-[400px]  rounded-full"
                                 alt=""/>
                        </div>
                        <div className="h-[400] flex flex-col justify-start  gap-y-5">
                            <p className="text-4xl font-semibold font-body text-primary">Hello, I'm</p>
                            <p className="text-6xl w-96 font-body font-extrabold text-primary">Quazi Mohammad Aldin
                                Fardin</p>
                            <p className="text-4xl font-medium font-body text-primary ">Frontend And Backend
                                Developer</p>

                            <div className="flex gap-x-8">
                                <button
                                    className="  w-[150px] h-[40px]  border-secondary font-medium text-base border-2 font-body">Download
                                    Resume
                                </button>
                                <button
                                    className=" w-[150px] h-[40px]  border-secondary bg-primary text-white font-medium border-2 font-body">Contact
                                    Info
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Hero;