import { useForm, ValidationError } from "@formspree/react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("movazgow");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Bericht is succesvol verzonden!");
    }
  }, [state.succeeded]);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <ToastContainer />

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-red-600">Neem Contact Op</h2>
          <p className="text-xl font-semibold text-blue-900 mt-4">
            Klaar om uw droomproject te starten?
          </p>
          <p className="text-lg text-blue-800 mt-4">
            Neem vandaag nog contact met ons op voor een gratis offerte of
            advies.
          </p>
          <p className="text-lg text-gray-800 mt-4">
            Ons team staat klaar om al uw vragen te beantwoorden en u te helpen
            de juiste keuzes te maken.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <input
              type="text"
              name="fullName"
              placeholder="Naam"
              aria-label="Naam" 
              className="p-3 text-sm border border-gray-300 rounded-lg shadow-sm w-full focus:outline-none focus:border-red-600"
            />
            <ValidationError field="fullName" errors={state.errors} />

            <input
              type="email"
              name="email"
              placeholder="E-mailadres"
              aria-label="E-mailadres"
              className="p-3 text-sm border border-gray-300 rounded-lg shadow-sm w-full focus:outline-none focus:border-red-600"
            />
            <ValidationError field="email" errors={state.errors} />

            <input
              type="text"
              name="phone"
              placeholder="Telefoonnummer"
              aria-label="Telefoonnummer"
              className="p-3 text-sm border border-gray-300 rounded-lg shadow-sm w-full focus:outline-none focus:border-red-600"
            />
            <ValidationError field="phone" errors={state.errors} />

            <input
              type="text"
              name="address"
              placeholder="Adres"
              aria-label="Adres"
              className="p-3 text-sm border border-gray-300 rounded-lg shadow-sm w-full focus:outline-none focus:border-red-600"
            />
            <ValidationError field="address" errors={state.errors} />

            <textarea
              name="message"
              rows="4"
              placeholder="Bericht..."
              aria-label="Bericht"
              className="p-3 text-sm border border-gray-300 rounded-lg shadow-sm w-full col-span-2 focus:outline-none focus:border-red-600"
            ></textarea>
            <ValidationError field="message" errors={state.errors} />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-red-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition duration-300 w-full md:w-auto"
            aria-label="Bericht Versturen"
          >
            Bericht Versturen →
          </button>
        </form>

        {/* Google Map */}
        <div className="mt-10">
          <iframe
            className="w-full h-80 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.936396744174!2d4.825197116029235!3d52.373746679788534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e5f2d705556d%3A0x55e0c21220b42ff8!2sBierens%20de%20Haanstraat%2035%2C%201064%20NC%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2str!4v1633541054932!5m2!1sen!2str"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Address Card */}
          <div className="flex items-center">
            <div className="p-3 bg-red-600 text-white rounded-md flex-shrink-0">
              <FaMapMarkerAlt size={30} />
            </div>
            <div className="ml-4">
              <h4 className="text-xs font-semibold uppercase text-gray-500">
                Bedrijfsadres
              </h4>
              <p className="text-base font-bold text-gray-800">
                Kasteel Bouw
                <br />
                Bierens de Haanstraat 35
                <br />
                1064 NC Amsterdam, Nederland
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="flex items-center">
            <div className="p-3 bg-blue-600 text-white rounded-md flex-shrink-0">
              <FaPhoneAlt size={30} />
            </div>
            <div className="ml-4">
              <h4 className="text-xs font-semibold uppercase text-gray-500">
                Onze Telefoonnummers
              </h4>
              <p className="text-base font-bold text-gray-800">
                <a href="tel:+31624962109" className="hover:text-red-600">
                  0624962109
                </a>
              </p>
              <p className="text-base font-bold text-gray-800">
                <a href="tel:+31687629686" className="hover:text-red-600">
                  0687629686
                </a>
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex items-center">
            <div className="p-3 bg-red-600 text-white rounded-md flex-shrink-0">
              <FaEnvelope size={30} />
            </div>
            <div className="ml-4">
              <h4 className="text-xs font-semibold uppercase text-gray-500">
                Onze E-mailadressen
              </h4>
              <p className="text-base font-bold text-gray-800">
                <a
                  href="mailto:Kasteelbouwnl@gmail.com"
                  className="hover:text-red-600"
                >
                  Kasteelbouwnl@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
