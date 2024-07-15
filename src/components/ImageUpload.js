// ImageUpload.js
import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [progress, setProgress] = useState(74);  // Add a state for progress

  useEffect(() => {
    if (isImageUploaded) {
      // Load initial images from the public folder after an image is uploaded
      const initialImages = [];
      for (let i = 1; i <= 5; i++) {
        initialImages.push(
          `${process.env.PUBLIC_URL}/images/accessories/image${i}.jpg`
        );
      }
      setImages(initialImages);
    }
  }, [isImageUploaded]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result);
      setIsImageUploaded(true);
      setProgress(100);  // Set progress to 100% after image upload
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col">
          <div className="img flex flex-row w-[100vw] md:h-[90vh] justify-center md:w-[50vw]">
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="Uploaded Preview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              "No image uploaded"
            )}
          </div>
          <input 
            className="mt-5"
            type="file"
            onChange={handleFileChange}
            style={{ marginBottom: "20px" }}
          />
        </div>

        <div className="accessories flex flex-col ml-8 mt-6">
          
          <h1>Rating</h1>
          {isImageUploaded && <ProgressBar percentage={74} />}  {/* Conditionally render ProgressBar */}
          <h1 className="font-bold text-xl">ReCommendations</h1>
          <div className="md:flex-wrap flex-nowrap"
            style={{
              display: "flex",
              gap: "10px",
              overflowX: "auto",
              width: "100%",
              padding: "10px 0",
            }}
          >
            {images.map((src, index) => (
              <div
                className="w-[200px] h-[200px]"
                key={index}
                style={{
                  border: "1px solid #ccc",
                  flexShrink: 0,
                }}
              >
                <img
                  src={src}
                  alt={`Preview ${index}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
