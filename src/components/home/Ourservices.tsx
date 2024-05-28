

import React from "react";
import { services } from "@/src/utils/About";

const Services = () => {
  return (
    <div className="main-container mx-auto py-8">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {services.map(service => (
          <div key={service.id} className="p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

