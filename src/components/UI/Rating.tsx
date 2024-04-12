import { Rating as MUIRating } from "@mui/material";
import { FC } from "react";

interface RatingProps {
  value: number;
  size?: "small" | "medium" | "large";
}

const Rating: FC<RatingProps> = ({ value, size }) => {
  return (
    <MUIRating
      value={value}
      precision={0.5}
      readOnly
      size={size ?? "medium"}
      className="z-[-100] -ml-[3px]"
    />
  );
};

export default Rating;
