import React from "react";
import properties from "@/properties.json";
import PropartyCard from "@/components/PropartyCard";

const PropartiesPage = () => {
  return (
    <section class="px-4 py-6">
      <div class="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No Properties Found</p>
        ) : (
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropartyCard proparty={property} key={property._id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropartiesPage;
