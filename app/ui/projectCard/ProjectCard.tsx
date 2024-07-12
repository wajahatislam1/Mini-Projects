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
    <div className="flex flex-col items-center p-2 m-2 w-80 h-80 rounded-lg overflow-hidden bg-gradient-to-br from-pink-500 to-orange-400 hover:scale-105 hover:bg-gradient-to-tl duration-500">
      <div className="w-full h-[22vh] mb-6">
        <img
          className="w-full h-full object-cover rounded-md"
          src={image}
          alt="Image of the Project"
        />
      </div>

      <h2 className="text-xl font-bold italic">{title}</h2>
      <p className="text-sm overflow-scroll text-center">{description}</p>
    </div>
  );
};

export default ProjectCard;
