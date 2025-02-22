import Image from "next/image";
import Header from "../header/page";
import Footer from "../footer/page";
export default function Projects() {
    return (
        <div>
            <div className="sticky top-0">
                <Header />
            </div>
            <main>
                <section className="max-w-6xl mx-auto pt-10 lg:max-w-3xl md:max-w-2xl">
                    <h2 className="text-A2 text-3xl font-bold ">/ <span className="text-white font-medium tracking-wider">projects</span></h2>
                    <p className="text-gray font-thin tracking-wider pt-2">list of my projects</p>
                    <h2 className="text-A2 text-3xl font-bold pt-16"># <span className="text-white font-medium tracking-wider">complete-apps</span></h2>


                    <div className="flex justify-between">

                        <div className=" flex gap-12 mt-12 md:gap-2 ">
                            <div className="box-border border h-[155] w-[73] border-r-0 absolute right-0 text-gray top-[280] md:hidden"></div>
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
                                        <button className="box-border border px-5 pt-1 pb-1 hover:bg-slate-500 duration-1000 text-A2 md:px-4"><span className="text-white">Live --</span></button>
                                        <button className="box-border border pr-5 pl-5 pt-1 pb-1 hover:bg-slate-500 duration-1000 md:px-4">Cached ~~</button>
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

                        </div>
                    </div>

                    <div className="flex gap-12 mt-8">
                        <div>
                            <div className="box-border border ">
                                <Image className=" text-white" src="/kotik.svg" width={330} height={200} alt="pic" />
                            </div>
                            <div className="text-gray box-border border border-t-0">
                                <p className="pt-2 ml-2">HTML CSS JS</p>
                            </div>
                            <div className="box-border border text-gray border-t-0">
                                <h1 className="text-white ml-2 text-2xl pt-3">Kotik  Bots</h1>
                                <p className="text-gray text-lg ml-2 pt-4">Multi-functional discord bots</p>
                                <div className="flex ml-2 pt-2 pb-3">
                                    <button className="box-border border px-5 pt-1 pb-1 hover:bg-slate-500 duration-1000 text-A2"><span className="text-white">Live --</span></button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="box-border border ">
                                <Image className=" text-white" src="/elias.svg" width={330} height={200} alt="pic" />
                            </div>
                            <div className="text-gray box-border border border-t-0">
                                <p className="pt-2 ml-2">Vue TS Less</p>
                            </div>
                            <div className="box-border border text-gray border-t-0">
                                <h1 className="text-white ml-2 text-2xl pt-3">Portfolio</h1>
                                <p className="text-gray text-lg ml-2 pt-4">You`re using it rn</p>
                                <div className="flex ml-2 pt-2 pb-3">
                                    <button className="box-border border px-5 pt-1 pb-1 hover:bg-slate-500 duration-1000 text-A2"><span className="text-white">Live --</span></button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <h2 className="text-A2 text-3xl font-bold pt-20 ">/ <span className="text-white font-medium tracking-wider">small-projects</span></h2>
                    <div className="box-border border h-[155] w-[73] border-l-0 absolute left-0 text-gray md:hidden sm:hidden"></div>

                    <div className="flex gap-8 pt-12 ">
                        <Image className="absolute right-0 md:hidden" src="/Frame 31.svg" width={55} height={55} alt="pic" />
                        <div className="w-full">
                            <div className="box-border border   text-gray">
                                <p className="text-gray text-base font-thin">Discord.js TS JS</p>
                            </div>
                            <div className="box-border border text-gray border-t-0">
                                <h1 className="text-white ml-2 text-2xl pt-3">Bot boilerplates</h1>
                                <p className="text-gray text-base tracking-wider ml-2 pt-4">Start creating scalable <br /> discord.js bot with typescript <br /> in seconds</p>
                                <div className="flex ml-2 pt-2 pb-3">
                                    <button className="box-border border px-5 pt-1 pb-1 hover:bg-slate-500 duration-1000 text-A2"><span className="text-white">Github --</span></button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="box-border border text-gray">
                                <p className="text-gray text-base font-thin">Vue CSS JS</p>
                            </div>
                            <div className="box-border border text-gray border-t-0">
                                <h1 className="text-white ml-2 text-2xl pt-3">My Blogs</h1>
                                <p className="text-gray text-base tracking-wider ml-2 pt-4">Front-end of my future blog <br /> website written in vue</p>
                                <div className="flex ml-2 pt-2 pb-3">
                                    <button className="box-border border px-5 pt-1 pb-1 hover:bg-slate-500 duration-1000 text-A2"><span className="text-white">Github --</span></button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="box-border border text-gray">
                                <p className="text-gray text-base font-thin">Figma</p>
                            </div>
                            <div className="box-border border text-gray border-t-0">
                                <h1 className="text-white ml-2 text-2xl pt-3">Chess Pro</h1>
                                <p className="text-gray text-base tracking-wider ml-2 pt-4">Figma landing page  <br /> service for viewing chess <br /> tournaments</p>
                                <div className="flex ml-2 pt-2 pb-3">
                                    <button className="box-border border px-5 pt-1 pb-1 hover:bg-slate-500 duration-1000 text-A2"><span className="text-white">Figma --</span></button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex gap-8 pt-12">
                        <div className="w-full">
                            <div className="box-border border text-gray">
                                <p className="text-gray text-base font-thin">Figma</p>
                            </div>
                            <div className="box-border border text-gray border-t-0">
                                <h1 className="text-white ml-2 text-2xl pt-3">Crash Protect</h1>
                                <h1 className="text-white ml-2 text-2xl">website</h1>
                                <p className="text-gray text-base tracking-wider ml-2 pt-4">Figma template for website <br />about anti-raid, anti-crash <br /> discord bot</p>
                                <div className="flex ml-2 pt-2 pb-3">
                                    <button className="box-border border px-5 pt-1 pb-1 hover:bg-slate-500 duration-1000 text-A2"><span className="text-white">Figma --</span></button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="box-border border text-gray">
                                <p className="text-gray text-base font-thin">HTML CSS</p>
                            </div>
                            <div className="box-border border text-gray border-t-0">
                                <h1 className="text-white ml-2 text-2xl pt-3">CSS Expirement</h1>
                                <p className="text-gray text-base tracking-wider ml-2 pt-4">Collection of my different <br /> little projects in css</p>
                                <div className="flex ml-2 pt-2 pb-3">
                                    <button className="box-border border px-5 pt-1 pb-1 hover:bg-slate-500 duration-1000 text-A2"><span className="text-white">Live --</span></button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="box-border border text-gray">
                                <p className="text-gray text-base font-thin">Lua NeoVim</p>
                            </div>
                            <div className="box-border border text-gray border-t-0">
                                <h1 className="text-white ml-2 text-2xl pt-3">Web Dev nvim config</h1>
                                <p className="text-gray text-base tracking-wider ml-2 pt-4">Config for neovim perfect for <br /> web developer</p>
                                <div className="flex ml-2 pt-2 pb-3">
                                    <button className="box-border border px-5 pt-1 pb-1 hover:bg-slate-500 duration-1000 text-A2"><span className="text-white">Github --</span></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Image className="absolute left-0 md:hidden" src="/Frame 36.svg" width={55} height={55} alt="pic" />

                    <div className="flex gap-8 pt-12">
                        <div className="w-[31.5%]">
                            <div className="box-border border text-gray">
                                <p className="text-gray text-base font-thin">Python Quart HTML</p>
                            </div>
                            <div className="box-border border text-gray border-t-0">
                                <h1 className="text-white ml-2 text-2xl pt-3">Ooku</h1>
                                <p className="text-gray text-base tracking-wider ml-2 pt-4">Simple link shortener with auth</p>
                                <div className="flex ml-2 pt-2 pb-3">
                                    <button className="box-border border px-5 pt-1 pb-1 hover:bg-slate-500 duration-1000 text-A2"><span className="text-white">Live --</span></button>
                                </div>
                            </div>
                        </div>

                        <div className="w-[31.5%]">
                            <div className="box-border border text-gray">
                                <p className="text-gray text-base font-thin">Figma</p>
                            </div>
                            <div className="box-border border text-gray border-t-0">
                                <h1 className="text-white ml-2 text-2xl pt-3">School Website</h1>
                                <p className="text-gray text-base tracking-wider ml-2 pt-4">Figma template website for my <br /> school</p>
                                <div className="flex ml-2 pt-2 pb-3">
                                    <button className="box-border border px-5 pt-1 pb-1 hover:bg-slate-500 duration-1000 text-A2"><span className="text-white">Figma --</span></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
            <Footer />
        </div>
    )
}