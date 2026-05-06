import React from 'react';
import { Factory, PackageOpen, Truck, ShieldCheck } from 'lucide-react';

const capabilities = [
  {
    title: 'Processing Units',
    icon: <Factory className="w-9 h-9 stroke-[1.2]" />,
    description: 'State-of-the-art milling and sorting facilities ensuring pristine quality and high volume output for global demands.'
  },
  {
    title: 'Packaging Types',
    icon: <PackageOpen className="w-9 h-9 stroke-[1.2]" />,
    description: 'Diverse packaging solutions from bulk to retail-ready, designed to preserve freshness and meet international standards.'
  },
  {
    title: 'Logistics & Shipping',
    icon: <Truck className="w-9 h-9 stroke-[1.2]" />,
    description: 'End-to-end supply chain management with robust port connections for timely and secure global distribution.'
  },
  {
    title: 'Quality Control System',
    icon: <ShieldCheck className="w-9 h-9 stroke-[1.2]" />,
    description: 'Rigorous multi-stage inspections and certifications ensuring uncompromising safety and premium grades.'
  }
];

const ExportCapabilities = () => {
  return (
    <section className="xl:py-20 bg-white overflow-hidden outfit">
      <div className="container mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <span className="text-md font-bold tracking-wide">
              Infrastructure
            </span>
            
            <h2 className="text-5xl sm:text-6xl lg:text-[3rem] xl:text-[5.5rem]  font-bold tracking-tight mb-4 leading-[1.1] text-neutral-900">
              Export <br />
              <span className="flex items-center gap-6 mt-2">
                <span className="inline-block w-8 lg:w-12 h-1 lg:h-1.5 bg-neutral-900"></span> Capabilities
              </span>
            </h2>

          </div>
          <p className="text-gray-500 text-sm lg:text-[17px] max-w-lg leading-relaxed mb-2">
            Delivering excellence across borders. Our integrated facilities and stringent quality protocols ensure every grain meets the highest global standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="group p-8 lg:p-6 xl:p-10 border border-gray-200 hover:border-gray-200 transition-all duration-300 flex flex-col items-start"
            >
              <div className="w-16 h-16 bg-white rounded-md border border-gray-50 flex items-center justify-center text-gray-700 mb-4 xl:mb-22 group-hover:scale-110 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-[22px] font-medium text-gray-900 mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-[1.7] font-light text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExportCapabilities;
