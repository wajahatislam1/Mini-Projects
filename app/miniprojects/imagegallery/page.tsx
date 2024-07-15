import ImageGallery from "@/app/ui/imageGallery/ImageGallery";
import MenuBar from "@/app/ui/menuBar/MenuBar";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      {/* Card Div*/}
      <div className="p-6 m-3 space-y-10 text-black bg-white shadow-2xl rounded-3xl md:p-24">
        <MenuBar />
        <ImageGallery />
      </div>
    </div>
  );
};

export default Page;
