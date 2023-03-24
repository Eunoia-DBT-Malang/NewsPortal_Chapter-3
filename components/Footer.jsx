import Link from "next/link";
import React from "react";
import FooterSosmed from "./FooterSosmed";

const Footer = () => {
  const member = [
    {
      name: "Aisya",
      link: "https://master--aisyakareninaa-portofolioweb.netlify.app/",
    },
    { name: "Alya", link: "https://alyarusydam.vercel.app/" },
    { name: "Celline", link: "https://web-portfolio-gilt-two.vercel.app/" },
    { name: "Gizella", link: "/Gizella" },
  ];
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
          Website ini dibuat dengan sepenuh hati oleh
        </p>

        <nav aria-label="Footer Nav" className="mt-8">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            {member.map((member, index) => (
              <li key={index}>
                <a
                  className="hover:underline decoration-orange-400 
                text-center decoration-2 underline-offset-8 rounded-full p-2 
                cursor-pointer hover:font-bold capitalize hover:scale-110 transition-transform duration-200 ease-out"
                  href={member.link}
                  target="_blank"
                >
                  {member.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <FooterSosmed/>
      </div>
    </footer>
  );
};

export default Footer;
