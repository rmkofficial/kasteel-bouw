import Slider from "react-slick";
import serviceImage1 from "../../assets/service.jpg";
import serviceImage2 from "../../assets/service2.jpg";
import serviceImage3 from "../../assets/service3.jpg";
import serviceImage4 from "../../assets/service4.jpg";
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
      <style>{`
        .slick-dots li button:before {
          font-size: 16px;
          color: red;
        }

        .slick-dots li.slick-active button:before {
          color: blue;
        }
      `}</style>
      <Slider {...settings}>
        
        <div className="relative">
          <div className="w-full h-64">
            <img
              src={serviceImage1}
              alt="Hizmet 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">
            <h3 className="text-2xl font-bold">Ervaring en Vertrouwen</h3>
            <p>
              Bij Kasteel Bouw zijn we al meer dan 15 jaar toonaangevend in
              bouw- en pleisterprojecten. Met ons betrouwbare en ervaren team
              leveren we uw projecten af volgens de hoogste normen.
            </p>
          </div>
        </div>

        
        <div className="relative">
          <div className="w-full h-64">
            <img
              src={serviceImage2}
              alt="Hizmet 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">
            <h3 className="text-2xl font-bold">Expertise en Kwaliteit</h3>
            <p>
              Ons team van pleisterexperts levert hoogwaardige resultaten door
              aandacht te besteden aan elk detail in elk project. We stellen
              klanttevredenheid altijd voorop.
            </p>
          </div>
        </div>

        
        <div className="relative">
          <div className="w-full h-64">
            <img
              src={serviceImage3}
              alt="Hizmet 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">
            <h3 className="text-2xl font-bold">Innovatieve Oplossingen</h3>
            <p>
              Kasteel Bouw biedt op maat gemaakte en innovatieve
              pleisteroplossingen die zijn afgestemd op de behoeften van onze
              klanten. We staan klaar met diensten die u een stap vooruit
              helpen.
            </p>
          </div>
        </div>

        
        <div className="relative">
          <div className="w-full h-64">
            <img
              src={serviceImage4}
              alt="Hizmet 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">
            <h3 className="text-2xl font-bold">Tijdige Levering</h3>
            <p>
              We streven ernaar om uw projecten op tijd en binnen budget te
              voltooien, terwijl we uw verwachtingen overtreffen. Kwaliteit en
              snelheid zijn onze prioriteit.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MobileCarousel;
