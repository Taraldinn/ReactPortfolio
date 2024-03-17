function Navbar() {

    return (

        <>
            <div className="mx-auto max-w-5xl">

                <div className="px-5 lg:px-0 flex gap-x-1  text-primary mt-3 h-12 items-center justify-between ">
                    <div>
                        <h1 className="text-4xl md:text-2xl font-mont  font-semibold">Aldinn</h1>
                    </div>
                    <div>
                        <ul className="flex text-lg items-center gap-x-4 justify-center font-body font-normal">
                            <li className="mx-3 hover:underline hover:underline-offset-8 decoration-primary  hover:decoration-4">About</li>
                            <li className="mx-3 hover:underline hover:underline-offset-8 decoration-primary hover:decoration-4">Projects</li>
                            <li className="mx-3 hover:underline hover:underline-offset-8 decoration-primary hover:decoration-4">Contact</li>
                        </ul>


                    </div>
                </div>

            </div>


        </>
    )
}

export default Navbar;