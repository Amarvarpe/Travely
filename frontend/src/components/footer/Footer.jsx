import React from "react";
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black py-16 px-10 grid md:grid-cols-2 gap-8 text-gray-300 bottom-0"
      style={{
        width: "100%",
        backgroundColor: "black",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        paddingLeft: "2.5rem",
        paddingRight: "2.5rem",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "2rem",
        color: "#D1D5DB",
        position: "relative",
        bottom: 0,
      }}>
      <div className="">
        <h3 className="text-2xl font-bold text-[#41A4FF]"
          style={{
            fontSize: "1.5rem", // text-2xl corresponds to 1.5rem (24px)
            fontWeight: "700", // font-bold corresponds to font weight 700
            color: "#41A4FF", // text-[#41A4FF] sets the text color
          }}>Travely</h3>
        <p className="py-4">
        Experience travel like never before with Travely. From seamless ticket bookings to personalized travel solutions, we bring convenience to your fingertips. Your journey starts here, with comfort and reliability guaranteed.
        </p>
        <div className="flex justify-start gap-10 md:w-[75%] my-6"
          style={{
            display: "flex", // flex
            justifyContent: "flex-start", // justify-start
            gap: "2.5rem", // gap-10 corresponds to 2.5rem (40px)
            width: "100%", // default width
            marginTop: "1.5rem", // my-6 (applies 1.5rem to top and bottom)
            marginBottom: "1.5rem",
            "@media (min-width: 768px)": {
              width: "75%", // md:w-[75%] sets width to 75% at 768px and above
            },
          }}>
          <FaWhatsappSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="flex md:justify-around justify-start mt-8"
        style={{
          display: "flex", // flex
          justifyContent: "flex-start", // justify-start
          marginTop: "2rem", // mt-8 corresponds to 2rem (32px)
          "@media (min-width: 768px)": {
            justifyContent: "space-around", // md:justify-around sets justifyContent to space-around for medium screens and above
          },
        }}>
        <div>
          <h6 className="font-bold text-[#41a3ff]"
            style={{
              fontWeight: "bold", // font-bold
              color: "#41a3ff", // text-[#41a3ff]
            }}>Reservations</h6>
          <ul className="mt-2 font-light"
            style={{
              marginTop: "0.5rem", // mt-2 (2 * 0.25rem = 0.5rem)
              fontWeight: "300", // font-light
            }}>


            <li className="py-2 text-sm" style={{
              paddingTop: "0.5rem", // py-2 (2 * 0.25rem = 0.5rem)
              paddingBottom: "0.5rem", // py-2
              fontSize: "0.875rem", // text-sm (14px)
            }}>Hotels</li>


            <li className="py-2 text-sm" style={{
              paddingTop: "0.5rem", // py-2 (2 * 0.25rem = 0.5rem)
              paddingBottom: "0.5rem", // py-2
              fontSize: "0.875rem", // text-sm (14px)
            }}>Tour Packages</li>


            <li className="py-2 text-sm" style={{
              paddingTop: "0.5rem", // py-2 (2 * 0.25rem = 0.5rem)
              paddingBottom: "0.5rem", // py-2
              fontSize: "0.875rem", // text-sm (14px)
            }}>Vehicles</li>


            <li className="py-2 text-sm" style={{
              paddingTop: "0.5rem", // py-2 (2 * 0.25rem = 0.5rem)
              paddingBottom: "0.5rem", // py-2
              fontSize: "0.875rem", // text-sm (14px)
            }}>Restaurants</li>


            <li className="py-2 text-sm">Events</li>


          </ul>
        </div>
        <div className="ml-[8rem]"
        style={{ marginLeft: '8rem' }}>
          <h6 className="font-bold text-[#41A4FF]"
          style={{ fontWeight: 'bold', color: '#41A4FF' }}>Support</h6>

          
          <ul className="mt-2 font-light">
            <li className="py-2 text-sm" style={{
              paddingTop: "0.5rem", // py-2 (2 * 0.25rem = 0.5rem)
              paddingBottom: "0.5rem", // py-2
              fontSize: "0.875rem", // text-sm (14px)
            }}>Contact us</li>
            
            <li className="py-2 text-sm" style={{
              paddingTop: "0.5rem", // py-2 (2 * 0.25rem = 0.5rem)
              paddingBottom: "0.5rem", // py-2
              fontSize: "0.875rem", // text-sm (14px)
            }}>About us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
