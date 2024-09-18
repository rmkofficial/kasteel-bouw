import { useForm, ValidationError } from "@formspree/react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("movazgow");

  // Form başarıyla gönderildiğinde Toastify ile bildirim göster
  if (state.succeeded) {
    toast.success("Message submitted successfully!");
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Toastify Container */}
        <ToastContainer />

        {/* İletişim Formu */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <input
              type="text"
              name="fullName"
              placeholder="Your Full Name"
              className="p-4 border border-gray-300 rounded-lg shadow-sm w-full focus:outline-none focus:border-red-600"
            />
            <ValidationError field="fullName" errors={state.errors} />

            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="p-4 border border-gray-300 rounded-lg shadow-sm w-full focus:outline-none focus:border-red-600"
            />
            <ValidationError field="email" errors={state.errors} />

            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              className="p-4 border border-gray-300 rounded-lg shadow-sm w-full focus:outline-none focus:border-red-600"
            />
            <ValidationError field="phone" errors={state.errors} />

            <input
              type="text"
              name="address"
              placeholder="Your Address"
              className="p-4 border border-gray-300 rounded-lg shadow-sm w-full focus:outline-none focus:border-red-600"
            />
            <ValidationError field="address" errors={state.errors} />

            <textarea
              name="message"
              rows="4"
              placeholder="Enter Your Message Here..."
              className="p-4 border border-gray-300 rounded-lg shadow-sm w-full col-span-2 focus:outline-none focus:border-red-600"
            ></textarea>
            <ValidationError field="message" errors={state.errors} />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-red-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
          >
            Submit Message →
          </button>
        </form>

        {/* Harita */}
        <div className="mt-10">
          <iframe
            className="w-full h-80 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.936396744174!2d4.825197116029235!3d52.373746679788534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e5f2d705556d%3A0x55e0c21220b42ff8!2sBierens%20de%20Haanstraat%2035%2C%201064%20NC%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2str!4v1633541054932!5m2!1sen!2str"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        {/* İletişim Bilgileri */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Adres Kartı */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
            <div className="p-4 bg-red-600 text-white rounded-full">
              <FaMapMarkerAlt size={24} />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Company Address</h4>
              <p>
                Kasteel Bouw <br />
                Bierens de Haanstraat 35 <br />
                1064 NC Amsterdam
              </p>
            </div>
          </div>

          {/* Telefon Kartı */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
            <div className="p-4 bg-red-600 text-white rounded-full">
              <FaPhoneAlt size={24} />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Company Phones</h4>
              <p>
                <a href="tel:+31201234567" className="hover:underline">
                  +31 20 123 4567
                </a>
              </p>
              <p>
                <a href="tel:+31612345678" className="hover:underline">
                  +31 6 1234 5678
                </a>
              </p>
            </div>
          </div>

          {/* E-posta Kartı */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
            <div className="p-4 bg-blue-600 text-white rounded-full">
              <FaEnvelope size={24} />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">
                Kasteel Bouw Emails
              </h4>
              <p>
                <a
                  href="mailto:Kasteelbouwnl@gmail.com"
                  className="hover:underline"
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
