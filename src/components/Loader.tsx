import { ColorRing } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <ColorRing
        height={80}
        width={80}
        colors={["#84D187", "#00B207", "#2C742F", "#00B207", "#84D187"]}
      />
    </div>
  );
};
