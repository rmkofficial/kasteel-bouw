const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white bg-opacity-85 shadow-lg rounded-lg p-8 max-w-md mx-auto ">
          {/* Başlık */}
          <h2 className="text-3xl font-bold text-[#00215B] mb-6">
            We Construct and Manage Places and Infrastructures
          </h2>

          {/* İçerik*/}
          <div className="space-y-4">
            {/* General Contract */}
            <div className="flex">
              <div className="text-red-600 text-5xl mr-4">
                {/* Icon */}
                <i className="fas fa-tools"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00215B]">
                  General Contract
                </h3>
                <p className="text-gray-600">
                  Quisque condimentum erat ac orci blandit, in sollicitudin
                  tellus vestibulum.
                </p>
              </div>
            </div>

            {/* Project Planning */}
            <div className="flex">
              <div className="text-red-600 text-5xl mr-4">
                {/* Icon */}
                <i className="fas fa-drafting-compass"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00215B]">
                  Project Planning
                </h3>
                <p className="text-gray-600">
                  Nullam commodo tincidunt nisl, nec vehicula dui interdum nec.
                </p>
              </div>
            </div>

            {/* Refurbishment */}
            <div className="flex">
              <div className="text-red-600 text-5xl mr-4">
                {/* Icon */}
                <i className="fas fa-hammer"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00215B]">
                  Refurbishment
                </h3>
                <p className="text-gray-600">
                  Sed vitae aliquet ipsum, ut ornare lectus. Proin sed sem
                  risus. Sed nunc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
