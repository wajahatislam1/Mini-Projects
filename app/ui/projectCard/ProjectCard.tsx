import Image from "next/image";

const ProjectCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center p-2 m-2 w-80 h-80 rounded-lg overflow-hidden bg-gradient-to-br from-pink-500 to-orange-400">
      <Image
        className="rounded-lg mb-3"
        src={image}
        alt="Image of the Project"
        width={320}
        height={80}
      />
      <h2 className="text-xl font-bold italic">{title}</h2>
      <p className="text-sm overflow-scroll">{description}</p>
    </div>
  );
};

export default ProjectCard;
