import Image from "next/image";
export default function Main() {
    return (
        <div>
            <main className="lg:max-w-3xl mx-auto md:max-w-2xl sm:max-w-xl xs:max-w-xs">
                    <section className="max-w-6xl mx-auto flex justify-between items-center mt-[76] xs:flex-wrap">
                      <div>
                        <div className="text-4xl font-serif">
                          <span>I m a </span> <span className="text-A2">full stack programmer</span>
                          <div>
                            <span>and</span> <span className="text-A2">software developer</span>
                          </div>
                        </div>
                        <p className="tracking-widest text-gray pt-8">I craft innovative softwares where programming <br /> meets creatively</p>
                        <div className="pt-24 xs:pt-12">
                          <button className="text-white box-border border px-3 py-1 border-A2 hover:bg-neutral-600 font-serif duration-1000">Download CV !!</button>
                        </div>
                      </div>
                      <div >
                        <Image src="/Group 46.svg" alt="pic" />
                        <div className="flex items-center gap-4 box-border border ">
                          <div className="w-[16] h-[16] bg-primary ml-4 "></div>
                          <div>
                            <p className="text-gray font-serif tracking-[2] text-lg ">Current working on <span className="text-white">Portfolio</span></p>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="max-w-7xl mx-auto mt-[128] ">
                      <div className=" flex items-center xs:justify-center">
                        <div className="flex flex-col justify-center mx-auto">
                          <div className="box-border border w-[658] h-[85] text-gray relative sm:w-[550] xs:w-[350] xs:h-[65]">
                            <Image className="absolute bottom-[70] left-2 xs:bottom-[50] " src="/Frame 49.svg" width={41} height={29} alt="comas" />
                            <p className="font-medium text-2xl  text-center pt-6 text-white tracking-widest xs:text-sm">with great power comes great electricity bill</p>
                            <div>
                              <Image className="absolute bottom-[-14] right-2" src="/Frame 49.svg" width={41} height={29} alt="comas" />
                            </div>
                          </div>
                          <div className="box-border border border-t-0 text-gray w-[162] h-[63] -translate-x-[-496px] sm:-translate-x-[-388px] xs:-translate-x-[-230px] xs:w-[120] xs:h-[43] ">
                            <p className="text-center font-medium text-2xl text-white tracking-widest pt-4 xs:text-sm">- Dr  Who</p>
                          </div>
                        </div>
            
                        <div className="box-border border text-gray w-[91] h-[91] border-r-0 absolute right-0 hidden lg:block xl:block 2xl:block "></div>
                      </div>
                    </section>
            
            
                    {/* Projects Section */}
                    <section className="mx-auto max-w-6xl mt-10">
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-8">
                          <div>
                            <p className="text-A2 font-xl text-3xl"># <span className="text-white">projects</span></p>
                          </div>
                          <div>
                            <div className="box-border border w-[511] md:w-[250] sm:w-[200] text-A2"></div>
                          </div>
                        </div>
                        <div>
                          <a className="" href="">View all ~~</a>
                        </div>
                      </div>
            
            
                      <div className="flex justify-between  ">
                        <div className=" flex gap-8 mt-12 md:flex-wrap md:justify-center sm:flex-wrap sm:justify-center">
                          <div className="flex flex-col">
                            <div className="box-border border ">
                              <div>
                                <Image className=" text-white" src="/Rectangle 22.svg" width={330} height={200} alt="pic" />
                              </div>
                            </div>
                            <div className="text-gray box-border border border-t-0">
                              <p className="ml-2">HTML CSS Python Flask</p>
                            </div>
                            <div className="text-gray box-border border border-t-0">
                              <h1 className="text-white ml-2 text-2xl pt-3">Chert Nodes</h1>
                              <p className="text-gray ml-2 text-lg pt-4">Minecraft servers hosting</p>
                              <div className="flex ml-2 gap-4 pt-2 pb-3">
                                <button className="box-border border px-5 pt-1 pb-1 hover:bg-slate-500 duration-1000 text-A2"><span className="text-white">Live --</span></button>
                                <button className="box-border border pr-5 pl-5 pt-1 pb-1 hover:bg-slate-500 duration-1000">Cached ~~</button>
                              </div>
                            </div>
                          </div>
            
                          <div>
                            <div className="box-border border ">
                              <Image className=" text-white" src="/protectx.svg" width={330} height={200} alt="pic" />
                            </div>
                            <div className="text-gray box-border border border-t-0">
                              <p className="ml-2">React Express Discord.js Node.js</p>
                              <p className="pt-2 ml-2">HTML CSS Python Flask</p>
                            </div>
                            <div className="box-border border text-gray border-t-0">
                              <h1 className="text-white ml-2 text-2xl pt-3">ProtectX</h1>
                              <p className="text-gray text-lg ml-2 pt-4">Discord anti-crash bot</p>
                              <div className="flex ml-2 pt-2 pb-3">
                                <button className="box-border border px-5 pt-1 pb-1 hover:bg-slate-500 duration-1000 text-A2"><span className="text-white">Live --</span></button>
                              </div>
                            </div>
                          </div>
            
                          <div>
                            <div className="box-border border ">
                              <Image className=" text-white" src="/kahoot.svg" width={330} height={200} alt="pic" />
                            </div>
                            <div className="text-gray box-border border">
                              <p className="ml-2">CSS Express Node.js</p>
                            </div>
                            <div className="box-border border text-gray border-t-0">
                              <h1 className="text-white ml-2 text-2xl pt-3">Kahoot  Answer</h1>
                              <h1 className="text-white ml-2 text-2xl">Viewer</h1>
                              <p className="text-gray ml-2 text-lg pt-3">Get answer to your kahoot quiz</p>
                              <div className="flex ml-2  pt-2 pb-3">
                                <button className="box-border border px-5 pt-1 pb-1 hover:bg-slate-500 duration-1000 text-A2"> <span className="text-white">Live --</span></button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="box-border border h-[155] w-[73] border-r-0 absolute right-0 text-gray bottom-[-400] hidden lg:block xl:block 2xl:block"></div>
                      </div>
                    </section>
            
            
                    {/* Skills Section */}
                    <section className="max-w-6xl mx-auto">
                      <div className="flex items-center gap-4 mx-auto max-w-7xl mt-52">
                        <div>
                          <h2 className="text-A2 font-xl text-3xl"># <span className="text-white">skills</span></h2>
                        </div>
                        <div className="box-border border w-[250] text-A2"></div>
                      </div>
            
                      <div className="flex justify-between pt-8 md:flex-wrap md:justify-center sm:flex-wrap sm:justify-center">
                        <div>
                          <Image src="/Group 36.svg" width={350} height={280} alt="" />
                        </div>
            
                        <div className="flex gap-5 md:pt-8 sm:pt-8">
                          <div>
                            <div>
                              <div className="box-border border  text-gray">
                                <h2 className="text-white ml-2 text-xl pt-[2]">Languages</h2>
                              </div>
                              <div className="box-border border border-t-0 text-gray ">
                                <p className="text-gray ml-2 text-lg font-thin pt-2">Typescript SQL</p>
                                <p className="text-gray ml-2 text-lg font-thin">Python JavaScript</p>
                              </div>
                            </div>
                          </div>
            
                          <div>
                            <div>
                              <div className="box-border border  text-gray">
                                <h2 className="text-white ml-2 text-xl pt-[2]">Databases</h2>
                              </div>
                              <div className="box-border border border-t-0 text-gray ">
                                <p className="text-gray ml-2 text-lg font-thin pt-2">SQlite PostgreSQL</p>
                                <p className="text-gray ml-2 text-lg font-thin">Mongo Supabase</p>
                              </div>
                            </div>
                            <div className="pt-3">
                              <div className="box-border border  text-gray">
                                <h2 className="text-white ml-2 text-xl pt-[2]">Others</h2>
                              </div>
                              <div className="box-border border border-t-0 text-gray ">
                                <p className="text-gray ml-2 text-lg font-thin pt-2">HTML CSS EJS SCSS</p>
                                <p className="text-gray ml-2 text-lg font-thin">REST Jinja</p>
                              </div>
                            </div>
                          </div>
            
                          <div>
                            <div>
                              <div className="box-border border  text-gray">
                                <h2 className="text-white ml-2 text-xl pt-[2]">Tools</h2>
                              </div>
                              <div className="box-border border border-t-0 text-gray ">
                                <p className="text-gray ml-2 text-lg font-thin pt-2">VSCode Neovim Linux </p>
                                <p className="text-gray ml-2 text-lg font-thin">Figma XFCE Arch</p>
                                <p className="text-gray ml-2 text-lg font-thin">Git Font Awesome</p>
                              </div>
                            </div>
                            <div className="pt-3">
                              <div className="box-border border  text-gray">
                                <h2 className="text-white ml-2 text-xl pt-[2]">Framework</h2>
                              </div>
                              <div className="box-border border border-t-0 text-gray ">
                                <p className="text-gray ml-2 text-lg font-thin pt-2">React VUE</p>
                                <p className="text-gray ml-2 text-lg font-thin">Disnake Discorde.js</p>
                                <p className="text-gray ml-2 text-lg font-thin">Flask Express.js</p>
                              </div>
                            </div>
                          </div>
                        </div>
            
                      </div>
                    </section>
            
            
                    {/* About */}
                    <section className="max-w-6xl mx-auto mt-40">
                      <div className="flex items-center gap-4">
                        <div>
                          <h2 className="text-A2 font-xl text-3xl"># <span className="text-white">about-me</span></h2>
                        </div>
                        <div>
                          <div className="box-border border w-[250] text-A2"></div>
                        </div>
                      </div>
            
                      <div className="flex justify-between pt-10 sm:items-center">
                        <div className="text-gray tracking-widest leading-7 sm:leading-5">
                          <p>Hello, i m Mosab!</p> <br />
                          <p>I m a full-stack developer and instructor based in <br /> Multan, Pakistan. I craft scalable software solutions <br /> from scratch and enhance them into efficient, user- <br />friendly applications.</p> <br />
                          <p>Transforming ideas into impactful software has been <br /> my passion for years. I have been helping businesses <br /> innovate and grow with tailored digital solutions. I <br /> constantly strive to explore the latest technologies <br /> and best practices.</p>
            
                          <button className="box-border border mt-10 px-5 pt-1 pb-1 hover:bg-slate-500 duration-1000 text-A2"> <span className="text-white">Read more --</span></button>
                        </div>
                        <div className="relative">
                          <Image src="/Group 50.svg" width={343} height={476} alt="pic" />
                        </div>
                        <div className="absolute right-0 bottom-[-1600] hidden lg:block xl:block 2xl:block">
                          <Image src="/Frame 31.svg" width={103} height={103} alt="dot" />
                        </div>
                      </div>
                    </section>
            
            
                    {/* Contacts Section */}
                    <section className="max-w-6xl mx-auto mt-40">
                      <div className="flex items-center gap-4">
                        <div>
                          <h2 className="text-A2 font-xl text-3xl"># <span className="text-white">contacts</span></h2>
                        </div>
                        <div className="box-border border w-[250] text-A2"></div>
                      </div>
                      <p className="text-gray tracking-widest leading-7 pt-10">I m interested in freelance/job opportunities. <br /> However, if you have other request or question, <br /> don’t hesitate to contact me</p>
            
                      <div className="flex justify-between pt-10 relative md:flex-wrap sm:flex-wrap">
                        <div>
                          <div className="flex gap-4">
                            <div className="text-gray box-border border">
                              <input className="text-gray text-sm bg-[#282C33] w-[244] h-[34]" type="text" placeholder="Name" />
                            </div>
                            <div className="text-gray box-border border">
                              <input className="text-gray text-sm bg-[#282C33] w-[244] h-[34]" type="text" placeholder="Email" />
                            </div>
                          </div>
                          <div className="text-gray box-border border mt-4">
                            <input className="text-gray text-sm bg-[#282C33] w-[505] h-[34]" type="text" placeholder="Title" />
                          </div>
                          <div className="text-gray box-border border mt-4">
                            <input className="text-gray text-sm bg-[#282c33] w-[505] pb-14 " type="text" placeholder="Message" />
                          </div>
                          <button className="box-border border mt-4 px-5 pt-1 pb-1 hover:bg-slate-500 duration-1000 text-A2"><span className="text-white">Send</span></button>
                        </div>
                        <div className="md:pt-8 sm:pt-8">
                          <div className="text-gray box-border border">
                            <h2 className="text-white ml-2 mt-2 text-lg">Message me here</h2>
                            <Image className="ml-4 mr-4 mt-3" src="/Group 32.svg" width={170} height={32} alt="frame" />
                            <Image className="ml-4 mb-2 mt-2" src="/Group 34.svg" width={170} height={32} alt="frame" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute left-0 bottom-[-2100] hidden lg:block xl:block 2xl:block">
                        <Image src="/Frame 36.svg" width={60} height={18} alt="dot" />
                      </div>
                    </section>
                  </main>
            
        </div>
    )
}