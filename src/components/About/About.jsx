import AboutImages from "./AboutImages";

const AboutSection = () => {
  return (
    <section
      id="aboutSection"
      className="mt-8 md:mt-12 lg:py-16 lg:mt-28 lg:mb-28 bg-white"
    >
      <div className="container mx-auto lg:mb-10 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="lg:order-2 text-center lg:text-left text-[#00215B]">
          <h4 className="text-red-600 text-sm font-semibold uppercase mb-2">
            About Us
          </h4>
          <h2 className="text-4xl font-bold mb-4">
            Bilgimizle Başarıyı Garanti Ediyoruz
          </h2>
          <p className="text-lg mb-2">
            Kasteel Bouw olarak, 15 yılı aşkın tecrübemiz ve uzmanlığımızla
            inşaat ve sıva projelerinde en yüksek kaliteyi sunuyoruz. Ekibimiz,
            her projeyi zamanında ve mükemmel bir şekilde tamamlamayı taahhüt
            eder.
          </p>
          <p className="text-gray-600 mb-6">
            Projelerimizde her zaman müşteri memnuniyetini ön planda tutuyor,
            detaylara verdiğimiz önemle başarılı sonuçlar elde ediyoruz.
            Kaliteli işçilik ve titiz planlamayla, hayallerinizi gerçeğe
            dönüştürmek için buradayız.
          </p>
        </div>

        {/* AboutImages bileşeni sadece büyük ekranlarda (lg) görünür */}
        <div className="hidden lg:block">
          <AboutImages />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
