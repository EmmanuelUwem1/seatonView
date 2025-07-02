import Image from "next/image";

type CollectionCardProps = {
  name: string;
  image: string;
  floor: string;
  total: string;
  change: string;
};

function CollectionCard({
  name,
  image,
  floor,
  total,
  change,
}: CollectionCardProps) {
  const isPositive = change.startsWith("+");

  return (
    <div className="bg-[#182a49] rounded-[9px] p-3.5 flex items-center justify-between w-full gap-4 text-white cursor-pointer">
      {/* Image Left */}
      <div className="relative min-w-14 w-full h-20 rounded-md overflow-hidden flex items-center justify-center">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-md"
        />
      </div>

      {/* Info Right */}
      <div className="flex flex-col justify-between w-full">
        <span className="flex justify-start items-center gap-2">
          <h3 className="font-bold text-lg truncate">{name}</h3>
          <span className="relative flex justify-center items-center h-6 w-6">
            <Image
              src={"/tick-circle.png"}
              alt="blue tick"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </span>
        </span>
        <div className="flex justify-between text-base text-[#9CA3AF] font-semibold ">
          <span>Floor: {floor} TON</span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-enter gap-1 w-full">
        <span className="font-bold">{total} Ton</span>
        <div
          className={`text-sm font-semibold ${
            isPositive ? "text-[#10B981]" : "text-red-400 opacity-95"
          }`}
        >
          {change}
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
