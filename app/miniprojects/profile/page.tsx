import Image from "next/image";
import { ProfileCard } from "@/app/ui/profileCard/ProfileCard";
import { UserInfo } from "@/app/lib/definations";

export default function Home() {
  const userInfo: UserInfo = {
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/279.jpg",
    name: "Adam",
    role: "Software Engineer",
    github: "https://github.com/",
    twitter: "https://x.com",
    facebook: "https://facebook.com",
  };
  return (
    <div className="flex justify-center">
      <ProfileCard userInfo={userInfo} />
    </div>
  );
}
