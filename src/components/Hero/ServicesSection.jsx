const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-8 max-w-md mx-auto ">
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
                  Sıva Hizmetleri
                </h3>
                <p className="text-gray-600">
                  Duvarlarınız ve tavanlarınız için pürüzsüz, modern bir bitiş
                  sunuyoruz. Kasteel Bouw, profesyonel sıva çözümleriyle
                  hayalinizdeki alanları gerçeğe dönüştürüyor.
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
                  Dekoratif Sıva
                </h3>
                <p className="text-gray-600">
                  Alanlarınızı kişiselleştirmenin en iyi yolu! Dekoratif sıva
                  hizmetlerimizle duvarlarınıza benzersiz dokular ve tasarımlar
                  kazandırıyoruz.
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
                  Restorasyon ve Yenileme
                </h3>
                <p className="text-gray-600">
                  Eski binalarınızı yeni gibi yapmak bizim işimiz! Tarihi
                  sıvanın korunması ve onarılması konusunda uzman ekibimizle
                  binalarınızı yeniden canlandırıyoruz.
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
