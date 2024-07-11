import { UserInfo } from "@/app/lib/definations";
import Image from "next/image";
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";

const CardLink = ({
  link,
  text,
  icon,
}: {
  link: string;
  text: string;
  icon: React.ReactNode;
}): React.ReactNode => {
  return (
    <div className="container px-5 py-3 sm:w-full md:w-auto lg:w-auto rounded-full bg-gray-100 hover:scale-105 hover:bg-blue-100">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-between rounded-md"
      >
        <p className="text-xs italic">{text}</p>
        {icon}
      </a>
    </div>
  );
};

export const ProfileCard = ({ userInfo }: { userInfo: UserInfo }) => {
  return (
    <div className="flex flex-col h-auto items-center justify-center w-3/12 m-auto p-8 bg-white text-black rounded-lg">
      <Image
        className="rounded-full"
        src={userInfo.image}
        width={100}
        height={100}
        alt="Image of the developer"
      />
      <p className="font-bold text-3xl">{userInfo.name}</p>
      <p className="text-xs mb-7">{userInfo.role}</p>

      <div className="container flex flex-col gap-2">
        <CardLink link={userInfo.github} text="GitHub" icon={<FaGithub />} />
        <CardLink link={userInfo.twitter} text="Twitter" icon={<FaTwitter />} />
        <CardLink link={userInfo.facebook} text="Facebook" icon={<FaFacebook />} />
      </div>
    </div>
  );
};
