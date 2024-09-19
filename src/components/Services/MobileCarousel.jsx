import Slider from "react-slick";
import serviceImage1 from "../../assets/service.png";
import serviceImage2 from "../../assets/workers-6762542_1280.jpg";
import serviceImage3 from "../../assets/electrician-installer-with-tool-his-hands-working-with-cable-construction-site.jpg";
import serviceImage4 from "../../assets/bricklayer-worker-installing-brick-masonry-exterior-wall-with-trowel-putty-knife.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MobileCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="block md:hidden mt-16 px-4">
      {/* Sadece mobilde gösterilecek carousel */}
      <style>{`
        .slick-dots li button:before {
          font-size: 16px; /* Nokta boyutu */
          color: red; /* Nokta rengi */
        }

        .slick-dots li.slick-active button:before {
          color: blue; /* Aktif nokta rengi */
        }
      `}</style>
      <Slider {...settings}>
        {/* Service 1 */}
        <div className="relative">
          <div className="w-full h-64">
            <img
              src={serviceImage1}
              alt="Service 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">
            <h3 className="text-2xl font-bold">Tecrübe ve Güven</h3>
            <p>
              Kasteel Bouw olarak 15 yılı aşkın süredir inşaat ve sıva
              projelerinde lideriz. Güvenilir ve deneyimli ekibimizle
              projelerinizi en yüksek standartlarda tamamlıyoruz.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="relative">
          <div className="w-full h-64">
            <img
              src={serviceImage2}
              alt="Service 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">
            <h3 className="text-2xl font-bold">Uzmanlık ve Kalite</h3>
            <p>
              Sıva ustalığında uzmanlaşmış ekibimiz, her projede detaylara önem
              vererek kaliteli sonuçlar sunar. Her zaman müşteri memnuniyetini
              önceliklendiriyoruz.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="relative">
          <div className="w-full h-64">
            <img
              src={serviceImage3}
              alt="Service 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">
            <h3 className="text-2xl font-bold">Yenilikçi Çözümler</h3>
            <p>
              Kasteel Bouw, müşterilerinin ihtiyaçlarına göre özelleştirilmiş ve
              yenilikçi sıva çözümleri sunar. Sizi bir adım öne çıkaracak
              hizmetlerle yanınızdayız.
            </p>
          </div>
        </div>

        {/* Service 4 */}
        <div className="relative">
          <div className="w-full h-64">
            <img
              src={serviceImage4}
              alt="Service 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">
            <h3 className="text-2xl font-bold">Zamanında Teslimat</h3>
            <p>
              Projelerinizi zamanında ve bütçe dahilinde tamamlayarak
              beklentilerinizi aşmayı hedefliyoruz. Kalite ve hız bizim
              önceliğimizdir.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MobileCarousel;
