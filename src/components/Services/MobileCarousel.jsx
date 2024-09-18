import Slider from "react-slick";
import serviceImage1 from "../../assets/service.png";
import serviceImage2 from "../../assets/service.png";
import serviceImage3 from "../../assets/service.png";
import serviceImage4 from "../../assets/service.png";
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
      {" "}
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
          <img src={serviceImage1} alt="Service 1" className="w-full h-auto" />
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">
            <h3 className="text-2xl font-bold">Research & Analysis</h3>
            <p>
              Araştırma ve analiz hizmetlerimizle pazarın nabzını tutun ve
              stratejilerinizi buna göre geliştirin. Doğru bilgiyle doğru
              kararlar alın.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="relative">
          <img src={serviceImage2} alt="Service 2" className="w-full h-auto" />
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">
            <h3 className="text-2xl font-bold">Industry Development</h3>
            <p>
              Sektör gelişimi konusunda sunduğumuz hizmetlerle işinizin
              gelecekteki yönünü belirleyin. Sizi bir adım öne çıkaracak
              stratejileri keşfedin.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="relative">
          <img src={serviceImage3} alt="Service 3" className="w-full h-auto" />
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">
            <h3 className="text-2xl font-bold">Production Launch</h3>
            <p>
              Üretim süreçlerini başlatmadan önce her detayı planlayın. Ürün
              lansmanınızı başarıya taşımak için profesyonel destek alın.
            </p>
          </div>
        </div>

        {/* Service 4 */}
        <div className="relative">
          <img src={serviceImage4} alt="Service 4" className="w-full h-auto" />
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">
            <h3 className="text-2xl font-bold">Quality Assurance</h3>
            <p>
              Kalite güvencesi hizmetlerimizle, ürün ve süreçlerin kalitesini
              artırın. Müşterilerinize en iyiyi sunmak için mükemmelliği
              hedefleyin.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MobileCarousel;
