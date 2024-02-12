import React, { useState } from "react";

const Home = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);

    // Preview the selected image
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById("image-preview").src = reader.result;
    };
    reader.readAsDataURL(selectedImage);
  };

 // Update handleUpload function
const handleUpload = async () => {
  if (!image) return;

  const formData = new FormData();
  formData.append("image", image);

  try {
    const response = await fetch("http://localhost:8000/api/uploads", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setImage(null);
      setTimeout(()=>{
        alert("Image uploaded successfully")
      },500)
     
      
      console.log("Image uploaded successfully!");
    } else {
      console.error("Failed to upload image");
    }
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

  

  return (
    
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Please Upload an Image</h1>
      <div className="flex flex-col items-center mt-8">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        id="image-upload-input"
      />
      <label
        htmlFor="image-upload-input"
        className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
      >
        {image ? "Change Image" : "Select Image"}
      </label>
      {image && (
        <div className="mt-4">
          <img
            id="image-preview"
            alt="Preview"
            className="max-w-96 max-h-96"
          />
        </div>
      )}
      <button
        onClick={handleUpload}
        disabled={!image}
        className={`mt-4 px-4 py-2 ${
          !image ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
        } text-white rounded`}
      >
        Upload Image
      </button>
    </div>
    </div>
  );
};

export default Home;
