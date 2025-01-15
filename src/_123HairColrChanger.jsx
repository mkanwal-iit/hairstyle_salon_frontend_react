import { useState } from "react";

const HairColorChanger = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [selectedColor, setSelectedColor] = useState("blonde");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      let resultImage;
      switch (selectedColor) {
        case "blonde":
          resultImage = "https://via.placeholder.com/150/FFD700"; // Replace with actual blonde result
          break;
        case "red":
          resultImage = "https://via.placeholder.com/150/FF0000"; // Replace with actual red result
          break;
        case "purple":
          resultImage = "https://via.placeholder.com/150/800080"; // Replace with actual purple result
          break;
        default:
          resultImage = "https://via.placeholder.com/150"; // Default result
      }
      setResult(resultImage);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-start justify-center p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mt-12">
        <h1 className="text-3xl font-bold mb-6 text-center">Hair Color Changer</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-lg">Upload Your Photo:</label>
            <input type="file" className="w-full p-2 rounded bg-gray-700 border border-gray-600" required />
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
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-2 rounded mt-4 transition-colors ${
              loading ? "bg-gray-500" : "bg-yellow-500 hover:bg-yellow-400"
            } text-black`}
          >
            {loading ? "Processing..." : "Submit"}
          </button>
        </form>
        {result && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Result</h2>
            <img src={result} alt="Hairstyle Result" className="rounded-lg shadow-lg" />
          </div>
        )}
        {error && <div className="mt-4 text-red-500">{error}</div>}
      </div>
    </div>
  );
};

export default HairColorChanger;
