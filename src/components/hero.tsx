// components/Hero.tsx
import Image from "next/image";


export default function Hero() {
    return (
     
        <section className="flex flex-col w-full md:flex-row gap-6 items-center justify-between px-4 md:px-16 max-md:py-16 md:py-8 text-white">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6 relative lg:-top-[3rem]">
            <h1 className="text-5xl md:text-6xl font-semibold">
              Explore NFTs on <span className="text-[#0098EA]">Ton</span> like
              never before.
            </h1>
            <p className="text-xl font-normal opacity-90">
              Enter a wallet or collection address and instantly view a
              beautiful, fast-rendered gallery of live NFTs.
            </p>
            <input
              type="text"
              placeholder="Enter wallet or collection address"
              className="mt-4 w-full sm:w-[70%] md:w-3/4 px-4 py-3 rounded-[13px] bg-[#0B1E3FAA] text-white placeholder-gray-400 focus:outline-none ring ring-[#0098EA]"
            />
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 sm:w-[80%] w-full mt-10 md:mt-0 relative">
            <span className="relative max-sm:-left-16 flex items-center justify-center w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
              <Image
                src="/Pirate-1 1.png"
                alt="NFT showcase"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="w-full h-auto object-contain"
                priority
              />
              <span className="flex flex-col justify-center items-center gap bg-[#FFFFFF] px-4 pb-4 pt-10 rounded-[10px] absolute max-sm:-right-16 right-0">
                <span className="absolute -top-[2rem] rounded-full border-2 border-white flex items-center justify-center w-16 h-16 overflow-hidden">
                  <Image
                    alt="creator"
                    src={"/monalisa.png"}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </span>
                <div className="flex justify-center items-center gap-2">
                  <span className="relative h-6 w-6 flex items-center justify-center">
                    <Image
                      src={"/Vector-ton.png"}
                      alt="ton"
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </span>
                  <span className="text-[#000000] font-semibold text-2xl">
                    3000 Ton
                  </span>
                </div>
                <div className="flex flex-col justify-center gap text-center text-base font-semibold">
                  <span className="text-[#B9B9B9] ">created by</span>
                  <span className="text-[#000000]">EQBG-g…UDFS</span>
                </div>
              </span>
            </span>
          </div>
        </section>
    
    );
}
