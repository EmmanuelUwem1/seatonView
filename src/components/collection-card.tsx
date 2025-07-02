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
    <div className="bg-[#0B1E3FAA] rounded-[9px] p-4 flex flex-col gap-3 text-white">
      <div className="w-full h-40 relative rounded-md overflow-hidden">
        <Image src={image} alt={name} layout="fill" objectFit="cover" objectPosition="center" className="w-full h-full object-cover" />
      </div>
      <h3 className="font-semibold text-lg truncate">{name}</h3>
      <div className="flex justify-between text-sm text-gray-300">
        <span>Floor: {floor}</span>
        <span>Total: {total}</span>
      </div>
      <div
        className={`text-sm font-semibold ${
          isPositive ? "text-green-400" : "text-red-400"
        }`}
      >
        {change}
      </div>
    </div>
  );
}

export default CollectionCard;
  