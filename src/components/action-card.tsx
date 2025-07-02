import Image from "next/image";

type ActionCardProps = {
  image: string;
  title: string;
  subtitle: string;
  emailTo: string;
  subject: string;
  body: string;
};

function ActionCard({
  image,
  title,
  subtitle,
  emailTo,
  subject,
  body,
}: ActionCardProps) {
  const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <a
      href={mailtoLink}
      className="hover:shadow-xl transition-shadow text-white flex w-full max-w-2xl flex-col"
    >
      {/* NFT Image */}
      <div className="relative w-full h-96 overflow-hidden rounded-[12px]">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className=" space-y-2">
        <h3 className="md:text-5xl text-3xl font-extrabold">{title}</h3>
        <p className="md:text-xl text-lg font-normal opacity-90">{subtitle}</p>
      </div>
    </a>
  );
}

export default ActionCard;
