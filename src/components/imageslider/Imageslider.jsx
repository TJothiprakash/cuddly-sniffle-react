// import React, { useEffect, useState } from "react";
// import "./styles.css";
// import { BsArrowLeftCircleFill } from "react-icons/bs";
// import { BsArrowRightCircleFill } from "react-icons/bs";

// const Imageslider = ({ url, limit = 5, page = 1 }) => {
//   const [images, setImages] = useState([]);
//   const [currentImage, setCurrentImage] = useState(0);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   async function fetchImage(getUrl) {
//     try {
//       setLoading(true);
//       const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
//       const data = await response.json();
//       if (data) {
//         setImages(data);
//         setLoading(false);
//       }
//     } catch (error) {
//       setLoading(false);
//       setErrorMessage(error.message);
//     }
//   }

//   useEffect(() => {
//     if (url !== "") fetchImage(url);
//   }, [url]);
//   console.log(images);

//   if (loading) {
//     return <div>Loading data pls wait...</div>;
//   }
//   if (errorMessage !== null) {
//     return <div>Error Occurred ! .... {errorMessage}</div>;
//   }

//   return (
//     <div className="container">
//       <BsArrowLeftCircleFill className="arrow arrow-left" />
//       {images && images.length
//         ? images.map((imageItem) => (
//             <img
//               src={imageItem.downloa_url}
//               key={imageItem.id}
//               alt={imageItem.downloa_url}
//               className="current-image"
//             />
//           ))
//         : null}
//       <BsArrowRightCircleFill className="arrow arrow-right" />
//       <span className="circle-indicators">
//         {images && images.length
//           ? images.map((_, index) => (
//               <button key={index} className="current-indicator"></button>
//             ))
//           : null}
//       </span>
//     </div>
//   );
// };

// export default Imageslider;
import React, { useEffect, useState } from "react";
import "./styles.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Imageslider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImage(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url) fetchImage(url);
  }, [url]);

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  if (loading) return <div>Loading data, please wait...</div>;
  if (errorMessage) return <div>Error Occurred! {errorMessage}</div>;

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrevImage}
      />
      {images && images.length > 0 ? (
        <img
          src={images[currentImage].download_url} // Corrected the typo
          alt={`Slide ${currentImage + 1}`}
          className="current-image"
        />
      ) : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNextImage}
      />
      <span className="circle-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentImage === index ? "active" : ""}`}
            onClick={() => setCurrentImage(index)}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default Imageslider;
