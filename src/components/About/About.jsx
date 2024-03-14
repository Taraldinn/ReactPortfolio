function About() {
    return (<>
            <div className="background-image bg-[url('https://www.rayhan.dev/images/blackgrit.png')]">
                <div className="max-w-5xl mx-auto pt-20">
                    <h3 className="mb-4 text-xl font-semibold font-body">~/Taraldinn/.about-me</h3>

                    <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-x-10">

                        <div>
                            <img
                                src="https://responsive-design-project-1-1.netlify.app/Project_1st_elements/about-pic.png"
                                className="max-h-[450px] rounded-2xl max-w-[450px]" alt=""/>
                        </div>
                        <div className="flex flex-col gap-y-5 text-primary">
                            <article className="rounded-lg border font-body border-gray-100 w-full bg-white p-6">
                                <div className="flex items-center justify-between gap-x-6">
                                    <div>
                                        <p className="text-sm text-gray-500">Experience</p>

                                        <p className="text-2xl font-medium text-gray-900">Frontend Development</p>
                                    </div>

                                    <span className="rounded-full bg-blue-100 p-3 text-blue-600">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="h-8 w-8"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                              strokeWidth="2"
                                          >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                    </span>
                                </div>

                                <div className="mt-1 flex gap-1 text-green-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                        />
                                    </svg>

                                    <p className="flex gap-2 text-xs">
                                        <span className="font-medium"> 2 </span>

                                        <span className="text-gray-500"> years Plus </span>
                                    </p>
                                </div>
                            </article>
                            <article className="rounded-lg border font-body border-gray-100 w-full bg-white p-6">
                                <div className="flex items-center justify-between gap-x-6">
                                    <div>
                                        <p className="text-sm text-gray-500">Education</p>

                                        <p className="text-2xl font-medium text-gray-900">B.Sc In Economics</p>
                                        <p className="text-2xl font-medium text-gray-900">M.Sc In Economics</p>
                                    </div>

                                    <span className="rounded-full bg-blue-100 p-3 text-blue-600">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="h-8 w-8"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                              strokeWidth="2"
                                          >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                          </svg>
                                    </span>
                                </div>

                            </article>

                            <div className="bg-white px-3 py-4">
                                <p className="font-body text-primary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis reprehenderit et
                                    laborum, rem, dolore eum quod voluptate exercitationem nobis, nihil esse debitis
                                    maxime facere minus sint delectus velit in eos quo officiis explicabo deleniti
                                    dignissimos. Eligendi illum libero dolorum cum laboriosam corrupti quidem,
                                    reiciendis ea magnam? Nulla, impedit fuga!


                                </p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
    </>)
}

export default About;
