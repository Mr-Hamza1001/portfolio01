import Image from "next/image";
export default function Footer (){
    return (
        <div>
             {/* Footer */}
      <hr className="text-gray mt-40" />
      <footer className="max-w-6xl mx-auto lg:max-w-3xl md:max-w-2xl sm:max-w-xl">
        <div className="flex justify-between pt-10">
          <div className="flex gap-3">
            <Image src="/Logo.svg" width={16} height={16} alt="logo" />
            <h3 className="text-white text-lg tracking-widest">Elias <span className="text-gray text-sm tracking-widest ml-8">elias@elias-dev.ml</span></h3>
          </div>
          <div>
            <h1 className="text-white text-2xl font-thin pr-10">Media</h1>
          </div>
        </div>
        <div className="flex justify-between pt-5">
          <div>
            <p className="text-white text-sm tracking-widest">Web designer and front-end developer</p>
          </div>
          <div>
            <Image src="/Group 22.svg" width={112} height={32} alt="Frame22" />
          </div>
        </div>
        <p className="text-gray text-sm tracking-widest text-center pt-20 pb-8">© Copyright 2022. Made by Elias</p>

      </footer>
        </div>
    )
}