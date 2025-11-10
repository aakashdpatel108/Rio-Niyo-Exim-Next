import React from "react";
import Head from "next/head";
import CONSTANTS from '@/constants'

const FloatingWhatsApp = () => {
  const phoneNumber = CONSTANTS.phone_number;
  const message = CONSTANTS.message;

  const whatsappURL = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    phoneNumber
  )}&text=${encodeURIComponent(message)}`;

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
      </Head>

      <a
        href={whatsappURL}
        className="float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>

      <style jsx>{`
        .float {
          position: fixed;
          width: 60px;
          height: 60px;
          bottom: 40px;
          right: 40px;
          background-color: #25d366;
          color: #fff;
          border-radius: 50%;
          text-align: center;
          font-size: 30px;
          box-shadow: 2px 2px 3px #999;
          z-index: 100;
          transition: transform 0.3s ease;
        }

        .float:hover {
          transform: scale(1.1);
        }

        .my-float {
          margin-top: 16px;
        }

        /* 🔹 Smaller size for mobile view */
        @media (max-width: 768px) {
          .float {
            width: 45px;
            height: 45px;
            bottom: 25px;
            right: 25px;
            font-size: 22px;
          }
          .my-float {
            margin-top: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingWhatsApp;
