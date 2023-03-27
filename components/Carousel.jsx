import { useState, useEffect } from "react";

const ImageCarousel = ({ images, children }) => {
  // Use the state hook to keep track of the current image index
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
                currentIndex === index ? "opacity-100 z-[999]" : ""
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
                    <h1
                      className="inline-block text-2xl font-semibold sm:text-3xl"
                    >
                      {image.title}
                    </h1>
                    <p className="text-xs text-gray-600">
                      {image.author} - {image.publishedAt}
                    </p>
                    <button>
                      <a 
                      href={`/${image.title}`} className=" inline-flex items-center md:mb-2 lg:mb-0">
                        Read More{" "}
                        <svg
                          className="w-4 h-4 ml-2 transition-transform duration-500 hover:translate-x-4"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container grid grid-cols-12 mx-auto md:mt-96 mt-40">
        {children}
      </div>
    </div>
  );
};

export default ImageCarousel;
