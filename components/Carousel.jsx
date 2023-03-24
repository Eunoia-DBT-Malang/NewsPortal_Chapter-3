import { useState, useEffect } from "react";

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
      <div className="relative w-full h-[450px] lg:h-[700px] scale-95 mb-24">
        {" "}
        <h1 className="text-orange-500 font-bold text-center md:text-left lg:text-left text-xl md:text-3xl lg:text-5xl my-5">
          Headline News
        </h1>
        <div className="flex flex-row">
          {images.map((image, index) => (
            <div
              key={index}
              alt=""
              className={`w-full h-full absolute opacity-0 transition-all ease-in duration-1000 ${
                currentIndex === index ? "opacity-100" : ""
              }`}
            >
              <div className="relative">
                {/* Overlay */}
                <a
                  href={image.url}
                  className="absolute w-full h-full text-gray-200 bg-black/40 flex flex-col justify-center"
                >
                  <div className="absolute bottom-8">
                    <p className="px-8 text-sm italic mb-4">
                      {image.author} - {image.publishedAt}
                    </p>
                    <h1 className="px-8 text-md md:text-3xl lg:text-4xl font-bold">
                      {image.title}
                    </h1>
                  </div>
                </a>
                <img
                  className="w-full object-cover"
                  key={index}
                  src={image.urlToImage}
                  alt="/"
                />
              </div>
            </div>
          ))}
        </div>
        {/* <div>
          <div className="relative">
            <a
              href="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/d89b0bc74cc33dda3d9dbd480864eaaa.jpg"
              className="absolute w-full h-full text-gray-200 bg-black/40 flex flex-col justify-center"
            >
              <div className="absolute bottom-8">
                <p className="px-4 text-sm italic mb-4">
                  Daniel Oropeza - 2023-02-28T22:00:00Z
                </p>
                <h1 className="px-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                  Get These Gift Card Deals While You Can
                </h1>
              </div>
            </a>
            <img
              className="w-full object-cover"
              src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/d89b0bc74cc33dda3d9dbd480864eaaa.jpg"
              alt="/"
            />
          </div>
        </div> */}
        {children}
      </div>
    </div>
  );
};

export default ImageCarousel;
