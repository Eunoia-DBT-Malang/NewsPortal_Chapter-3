import Link from "next/link";
import React from "react";
import FooterSosmed from "./FooterSosmed";

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-black-600 text-3xl font-bold">
          <Link href="/" prefetch={false}>
            <h1
              className="
          text-4xl text-center"
            >
              The{" "}
              <span
                className="underline 
            decoration-6 decoration-orange-400"
              >
                News
              </span>{" "}
              App
            </h1>
          </Link>
        </div>

        <p className="mx-auto mt-4 max-w-md text-center leading-relaxed text-gray-500">
          Made with all our ability and sincerity <br/>
          <a
            href="/Team"
            className="mt-8 hover:underline decoration-orange-400 
                decoration-2 underline-offset-8 rounded-full p-2 
                cursor-pointer font-bold capitalize hover:scale-110 transition-transform duration-200 ease-out"
          >
            Group 1 TEFA DBT Malang
          </a>
        </p>
        <FooterSosmed />
      </div>
    </footer>
  );
};

export default Footer;
