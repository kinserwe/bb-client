import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex h-full w-full flex-1 items-center justify-center p-[20%]">
      <ColorRing
        height={120}
        width={120}
        colors={["#84D187", "#00B207", "#2C742F", "#00B207", "#84D187"]}
      />
    </div>
  );
};

export default Loader;
