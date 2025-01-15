import { useState } from "react";
export function HairColorChanger({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = {
      image: selectedImage,
      color_description: selectedColor,
      hairstyle_description: selectedStyle,
      editing_type: "both",
    };
    setIsLoading(true);
    const successCallback = (image, responseErrorMessage) => {
      setIsLoading(false);
      setResultImage(image);
      setErrorMessage(responseErrorMessage);
    };
    onCreate(params, successCallback);
  };
  const [selectedColor, setSelectedColor] = useState("blonde");
  const [selectedStyle, setSelectedStyle] = useState("bob cut hairstyle");
  const [selectedImage, setSelectedImage] = useState(
    "https://content.latest-hairstyles.com/wp-content/uploads/soft-and-relaxed-curly-bob-hair.jpg"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [resultImage, setResultImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-start justify-center p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mt-12">
        <h1 className="text-3xl font-bold mb-6 text-center">Hair Color Changer</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-lg">Upload Your Photo:</label>
            <input
              value={selectedImage}
              onChange={(e) => setSelectedImage(e.target.value)}
              type="text"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-lg">Choose Hair Color:</label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
              required
            >
              <option value="blonde">Blonde</option>
              <option value="red">Red</option>
              <option value="purple">Purple</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-lg">Choose Hair Style:</label>
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
              required
            >
              <option value="bob cut hairstyle">bob cut hairstyle</option>
              <option value="afro hairstyle">afro hairstyle</option>
              <option value="braid hairstyle">braid hairstyle</option>
            </select>
          </div>
          {isLoading ? (
            <>
              <button
                disabled
                type="button"
                className="w-full p-2 rounded mt-4 transition-colors bg-gray-500 hover:bg-gray-400 text-black"
              >
                Loading
              </button>
            </>
          ) : (
            <>
              <button
                type="submit"
                className="w-full p-2 rounded mt-4 transition-colors bg-yellow-500 hover:bg-yellow-400 text-black"
              >
                Submit
              </button>
            </>
          )}
        </form>
        <img src={resultImage} />
        <p>{errorMessage}</p>
      </div>
    </div>
  );
}

export default HairColorChanger;
