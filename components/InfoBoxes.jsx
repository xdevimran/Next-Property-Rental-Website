import React from "react";
import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    // Renters and Owners
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            headeing="For Renters"
            backgroundColor="bg-gray-200"
            buttonInfo={{
              text: "Brows Properties",
              link: "/properties",
              backgroundColor: "bg-black",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
            tempora.
          </InfoBox>
          <InfoBox
            headeing="For Renters"
            backgroundColor="bg-blue-100"
            buttonInfo={{
              text: "Brows Properties",
              link: "/properties",
              backgroundColor: "bg-blue-500",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
            tempora.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
