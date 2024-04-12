import React, { FC, useState } from "react";

export interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center border-b border-gray-200">
        <ul className="-mb-px flex text-center font-medium">
          {tabs.map((tab, index) => (
            <li key={tab.label}>
              <button
                className={`inline-block border-b-2 p-4 ${
                  activeTab === index
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 transition-colors duration-200 hover:border-gray-300 hover:text-gray-700"
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4">
        <div className="tab-content">
          <p>{tabs[activeTab].content}</p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
