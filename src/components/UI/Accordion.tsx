import React, { FC, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

interface AccordionProps {
  label: string;
  content: React.ReactNode;
}

const Accordion: FC<AccordionProps> = ({ label, content }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="border-b-1 border-gray-200 px-2 py-4">
      <button
        className="flex w-full items-center justify-between p-1 text-xl font-medium"
        onClick={() => setOpen(!open)}
      >
        <span>{label}</span>
        {open ? <FaAngleUp /> : <FaAngleDown />}
      </button>

      <div
        className={`grid  overflow-hidden text-slate-600 transition-all duration-200 ease-in-out ${open ? "grid-rows-[1fr] px-1 py-2 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
