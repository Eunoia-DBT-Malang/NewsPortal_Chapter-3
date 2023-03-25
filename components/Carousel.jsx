import { useState, useEffect } from "react";
import { data } from "./data";

const ImageCarousel = ({ images, children }) => {
  // Use the state hook to keep track of the current image index
  console.log(images);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use the effect hook to update the current index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  // Render the current image
  return (
    <div>
      <div className="relative w-full h-[450px] lg:h-[700px] scale-95">
        {" "}
        <h1 className="text-orange-500 font-bold text-center md:text-left lg:text-left text-xl md:text-3xl lg:text-5xl md:my-5 my-0">
          Headline News
        </h1>
        <div className="container grid grid-cols-15 mx-auto md:mt-96 mt-60">
          <div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover bg-gray-700 lg:col-span-6 lg:h-auto">
            {images.map((image, index) => (
              <div
                key={index}
                alt=""
                className={`w-full h-full absolute opacity-0 transition-all ease-in duration-1000 ${
                  currentIndex === index ? "opacity-100" : ""
                }`}
              >
                <div className="flex flex-col mx-auto overflow-hidden rounded">
                  <img
                    src={image.urlToImage}
                    alt=""
                    className="w-full max-h-[550px] bg-gray-500 rounded-lg"
                  />
                  <div className="p-6 pb-8 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
                    <div className="space-y-2">
                      <a
                        rel="noopener noreferrer"
                        href={image.url}
                        className="inline-block text-2xl font-semibold sm:text-3xl"
                      >
                        {image.title}
                      </a>
                      <p className="text-xs text-gray-600">
                        {image.author} - {image.publishedAt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container grid grid-cols-12 mx-auto mt-96"></div>
        {children}
      </div>
      <div className="container w-11/12 mx-auto my-10 lg:my-0">
        <div className="flex flex-wrap">
          <div className="md:w-6/12 w-full py-10">
            <span>12 June</span>
            <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!
            </p>
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-flex items-center py-2 space-x-2 text-sm text-orange-500"
            >
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="md:w-6/12 w-full py-10">
            <span>12 June</span>
            <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!
            </p>
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-flex items-center py-2 space-x-2 text-sm text-orange-500"
            >
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="md:w-6/12 w-full py-10">
            <span>12 June</span>
            <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!
            </p>
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-flex items-center py-2 space-x-2 text-sm text-orange-500"
            >
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="md:w-6/12 w-full py-10">
            <span>12 June</span>
            <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!
            </p>
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-flex items-center py-2 space-x-2 text-sm text-orange-500"
            >
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;