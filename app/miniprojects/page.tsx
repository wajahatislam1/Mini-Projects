import Link from "next/link";
import ProjectCard from "@/app/ui/projectCard/ProjectCard";

export const MiniProjectsPage = () => {
  const projects = [
    {
      link: "/miniprojects/profile",
      image: "/project/profile-card.png",
      title: "Profile Card",
      description:
        "A simple card component that has a Person's info and links to his social media profiles.",
    },
    {
      link: "/miniprojects/emailsubscribe",
      image: "/project/email-subscribe.png",
      title: "Newsletter Subscription",
      description: "A component designed for newsletter subscriptions.",
    },
    {
      link: "/miniprojects/pricingcards",
      image: "/project/pricing-cards.png",
      title: "Pricing Cards",
      description: "A page that contains different pricing plans, each with different package.",
    },
    {
      link: "/miniprojects/productmodal",
      image: "/project/product-modal.png",
      title: "Product Modal",
      description: "A modal that displays product details.",
    },
    {
        link: "/miniprojects/imagegallery",
        image: "/project/image-gallery.png",
        title: "Image Gallery",
        description: "A responsive component that displays Images and has a menu.",
      },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h2 className="text-xl bold">Mini Projects Page</h2>
      <p>Here's a list of mini projects</p>
      <div className="flex flex-col flex-wrap max-w-screen-lg p-2 md:flex-row">
        {projects.map((project, index) => (
          <Link className="h-82" href={`${project.link}`} key={index}>
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
