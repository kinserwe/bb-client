import tools from "../assets/images/tools.jpg";
import seeds from "../assets/images/seeds.jpg";
import besedka from "../assets/images/besedka.jpg";

export const Gallery = () => {
  return (
    <div className="container grid grid-cols-3 grid-rows-2 gap-6 my-6">
      <img
        src={tools}
        alt="garden tools"
        className="col-span-2 row-span-2 w-full h-full object-cover rounded-3xl hover:scale-[1.002] transition-transform duration-150 cursor-pointer"
      />
      <img
        src={seeds}
        alt="seeds"
        className="col-span-1 row-span-1 w-full h-full object-cover rounded-3xl hover:scale-[1.005] transition-transform duration-150 cursor-pointer"
      />
      <img
        src={besedka}
        alt="besedka"
        className="col-span-1 row-span-1 w-full h-full object-cover rounded-3xl hover:scale-[1.005] transition-transform duration-150 cursor-pointer"
      />
    </div>
  );
};
