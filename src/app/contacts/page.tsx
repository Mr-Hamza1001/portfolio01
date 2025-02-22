import Image from "next/image";
import Header from "../header/page";
import Footer from "../footer/page";

export default function Contacts() {
    return (
        <div>
            <Header />
            <main className="max-w-6xl mx-auto lg:max-w-3xl">
                <section className="pt-10">
                    <h2 className="text-A2 text-3xl font-bold ">/ <span className="text-white font-medium tracking-wider">contacts</span></h2>
                    <p className="text-gray font-thin tracking-wider pt-2">who am i?</p>

                    <div className="flex justify-between pt-20">
                        <div className="text-gray font-thin tracking-widest pt-2">
                            <p>I’m interested in freelance opportunities. However, <br /> if you have other request or question, don’t <br /> hesitate to contact me</p>
                        </div>
                        <div className="flex gap-8">
                            <div className="box-border border border-gray h-[82] px-2 py-2">
                                <h3>Support me here</h3>
                                <p className="text-gray pt-1">4149500120690030</p>
                            </div>
                            <div>
                                <div className="text-gray box-border border">
                                    <h2 className="text-white ml-2 mt-2 text-lg">Message me here</h2>
                                    <Image className="ml-4 mr-4 mt-3" src="/Group 32.svg" width={170} height={32} alt="frame" />
                                    <Image className="ml-4 mb-2 mt-2" src="/Group 34.svg" width={170} height={32} alt="frame" />
                                </div>
                                <div className="box-border border h-[155] w-[73] border-r-0 absolute right-0 text-gray bottom-[500]"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                <h2 className="text-A2 text-3xl font-bold pt-8 "># <span className="text-white font-medium tracking-wider">all-media</span></h2>
                <Image className=" left-4 absolute" src="Frame 28.svg" width={60} height={50} alt="pic"/>
                <div className="flex gap-8 pt-4">
                    <Image src="/Media.svg" width={95} height={32} alt="media" />
                    <Image src="/Media.svg" width={95} height={32} alt="media" />
                </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}