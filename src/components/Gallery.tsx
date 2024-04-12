import tools from "../assets/images/tools.jpg";
import seeds from "../assets/images/seeds.jpg";
import besedka from "../assets/images/besedka.jpg";

const Gallery = () => {
  return (
    <div className="container my-6 grid grid-cols-3 grid-rows-2 gap-6">
      <img
        src={tools}
        alt="garden tools"
        className="col-span-2 row-span-2 h-full w-full cursor-pointer rounded-3xl object-cover transition-transform duration-150 hover:scale-[1.002]"
      />
      <img
        src={seeds}
        alt="seeds"
        className="col-span-1 row-span-1 h-full w-full cursor-pointer rounded-3xl object-cover transition-transform duration-150 hover:scale-[1.005]"
      />
      <img
        src={besedka}
        alt="besedka"
        className="col-span-1 row-span-1 h-full w-full cursor-pointer rounded-3xl object-cover transition-transform duration-150 hover:scale-[1.005]"
      />
    </div>
  );
};

export default Gallery;
