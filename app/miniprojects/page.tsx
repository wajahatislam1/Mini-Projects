import Link from "next/link";
import ProjectCard from "@/app/ui/projectCard/ProjectCard";

export const MiniProjectsPage = () => {
  const projects = [
    {
      link: "profile",
      image: "/project/profile-card.png",
      title: "Profile Card",
      description:
        "A simple card component that has a Person's info and links to his social media profiles.",
    },
  ];

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h2 className="bold text-xl">Mini Projects Page</h2>
      <p>Here's a list of mini projects</p>
      <div className="flex flex-col flex-wrap md:flex-row max-w-screen-lg p-2">
        {projects.map((project, index) => (
          <Link className="h-82" href={`/miniprojects/${project.link}`} key={index}>
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MiniProjectsPage;
