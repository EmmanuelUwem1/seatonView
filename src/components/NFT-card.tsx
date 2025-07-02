import Image from "next/image";
type NFTCardProps = {
  name: string;
  image: string;
  price: string;
};

function NFTCard({ name, image, price }: NFTCardProps) {
  return (
    <div className="bg-[#0B1E3FAA] px-3 pt-3 h-fit pb-5 rounded-[18px] relative max-w-56 flex flex-col items-center text-white space-y-3">
      <div className="w-full flex items-center justify-center h-34 relative rounded-[12px] overflow-hidden">
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src={image}
          alt={name}
          className="rounded-[12px]"
        />
      </div>
      <div className="flex-col flex justify-start items-start text-start w-full">
        <h3 className="font-smedium text-xl truncate">{name}</h3>
        <span className="flex w-full justify-start items-center gap-2 relative">
          <span className="relative flex justify-center items-center h-4 w-4">
            <Image src={"/ton_symbol copy 1.png"} layout="fill" objectFit="contain" objectPosition="center" alt="ton" />
          </span>
          <p className="text-sm font-extrabold"> {price}</p>
        </span>
      </div>
    </div>
  );
}

export default NFTCard;
