import Image from "next/image";
import Header from "../header/page";
import Footer from "../footer/page";

export default function page() {
    return (
        <div>
            <div className="sticky top-0">
                <Header />
            </div>

            <main className="max-w-6xl mx-auto lg:max-w-3xl">
                <section className="pt-10">
                    <h2 className="text-A2 text-3xl font-bold ">/ <span className="text-white font-medium tracking-wider">about-me</span></h2>
                    <p className="text-gray font-thin tracking-wider pt-2">who am i?</p>


                    <div className="flex justify-between items-center">
                        <div className="text-gray font-thin tracking-widest pt-2">
                            <p>Hello, i’m Elias!</p> <br />
                            <p>I’m a self-taught front-end developer based in Kyiv, <br /> Ukraine. I can develop responsive websites from <br /> scratch and raise them into modern user-friendly web <br /> experiences. </p> <br />
                            <p>Transforming my creativity and knowledge into a <br /> websites has been my passion for over a year. I have <br /> been helping various clients to establish their <br /> presence online. I always strive to learn about the <br /> newest technologies and frameworks.</p>
                        </div>
                        <Image className="absolute left-2" src="/Frame 28.svg" width={90} height={40} alt="pic" />
                        <div>
                            <Image src="/Group 50.svg" width={343} height={508} alt="pic" />
                        </div>
                        <div className="box-border border h-[155] w-[73] border-r-0 absolute right-0 text-gray top-[280]"></div>
                    </div>
                </section>

                <section className="pt-32">
                    <h2 className="text-A2 text-3xl font-bold "># <span className="text-white font-medium tracking-wider">skills</span></h2>

                    <div className="flex gap-8 tracking-wider">
                        <div className="w-full">
                            <div className="box-border border border-gray"> <h2>Languages</h2></div>
                            <div className="box-border border border-gray border-t-0">
                                <p className="text-gray text-sm">TypeScript SQL</p>
                                <p className="text-gray text-sm pt-2">Python JavaScript</p></div>
                        </div>

                        <div className="w-full">
                            <div className="box-border border border-gray"> <h2>Other</h2></div>
                            <div className="box-border border border-gray border-t-0">
                                <p className="text-gray text-sm">HTML CSS EJS SCSS</p>
                                <p className="text-gray text-sm pt-2">REST Jinja</p></div>
                        </div>

                        <div className="w-full">
                            <div className="box-border border border-gray"> <h2>Tools</h2></div>
                            <div className="box-border border border-gray border-t-0">
                                <p className="text-gray text-sm">VSCode Neovim Linux </p>
                                <p className="text-gray text-sm pt-2">Figma XFCE Arch</p>
                                <p className="text-gray text-sm pt-2">Git Font Awesome</p>
                                <p className="text-gray text-sm pt-2">KDE Fish</p>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="box-border border border-gray"> <h2>DataBase</h2></div>
                            <div className="box-border border border-gray border-t-0">
                                <p className="text-gray text-sm">SQLite Postgre SQL</p>
                                <p className="text-gray text-sm pt-2">Mongo</p>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="box-border border border-gray"> <h2>Frame Works</h2></div>
                            <div className="box-border border border-gray border-t-0">
                                <p className="text-gray text-sm">React Vue</p>
                                <p className="text-gray text-sm pt-2">Disnake Discord.js</p>
                                <p className="text-gray text-sm pt-2">Flask Express.js</p>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="pt-32">
                <h2 className="text-A2 text-3xl font-bold "># <span className="text-white font-medium tracking-wider">my-fun-facts</span></h2>
                    <div className="pt-12 flex justify-between">
                    <div className="box-border border h-[155] w-[73] border-l-0 absolute left-0 text-gray "></div>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4 tracking-wider">
                                <div className="box-border border border-gray">
                                    <p className="text-gray text-lg px-2">I like winter more than summer</p>
                                </div>
                                <div className="box-border border border-gray">
                                    <p className="text-gray text-lg px-2">I often bike with my friends</p>
                                </div>
                            </div>

                            <div className="flex gap-4 tracking-wider">
                                <div className="box-border border border-gray">
                                    <p className="text-gray text-lg px-2">I like <span className="text-white"> pizza </span> and <span className="text-white"> pasta </span></p>
                                </div>
                                <div className="box-border border border-gray">
                                    <p className="text-gray text-lg px-2">I was in <span className="text-white">Egypt</span>, <span className="text-white">Poland</span> and <span className="text-white">Turkey</span> </p>
                                </div>
                            </div>

                            <div className="flex gap-4 tracking-wider">
                                <div className="box-border border border-gray">
                                    <p className="text-gray text-lg px-2">My favorite movie is <span className="text-white">The Green Mile</span></p>
                                </div>
                                <div className="box-border border border-gray">
                                    <p className="text-gray text-lg px-2">I am still in school</p>
                                </div>
                            </div>

                            <div className="box-border border w-fit border-gray">
                                    <p className="text-gray text-lg px-2">I don’t have any siblings</p>
                                </div>
                        </div>
                        <div>
                            <Image src="/Group 53.svg" width={178} height={169} alt="pic"/>
                        </div>
                        <Image className="absolute right-0 bottom-[-500]" src="/Frame 31.svg" width={85} height={103} alt="pic"/>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}