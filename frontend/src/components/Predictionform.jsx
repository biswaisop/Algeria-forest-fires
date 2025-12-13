import { useState } from "react";
import axios from "axios";

export default function PredictionForm() {
  const [formData, setFormData] = useState({
    Temperature: "",
    RH: "",
    Ws: "",
    Rain: "",
    FFMC: "",
    DMC: "",
    ISI: "",
    Region: "Bejaia",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const inputFields = [
    { name: "Temperature", label: "Temperature (°C)", type: "number", step: "any", placeholder: "e.g. 25.4" },
    { name: "RH", label: "Relative Humidity (%)", type: "number", step: "any", placeholder: "e.g. 40" },
    { name: "Ws", label: "Wind Speed (km/h)", type: "number", step: "any", placeholder: "e.g. 8" },
    { name: "Rain", label: "Rain (mm)", type: "number", step: "any", placeholder: "e.g. 0.0" },
    { name: "FFMC", label: "Fine Fuel Moisture Code", type: "number", step: "any", placeholder: "e.g. 85.4" },
    { name: "DMC", label: "Duff Moisture Code", type: "number", step: "any", placeholder: "e.g. 22.1" },
    { name: "ISI", label: "Initial Spread Index", type: "number", step: "any", placeholder: "e.g. 4.3" },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await axios.post("http://127.0.0.1:8000/predict", formData);
      setResult(res.data);
    } catch (error) {
      setError(`Failed to connect to the backend. Please check your FastAPI server. ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-stone-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-900">
            Fire Weather Index Prediction
          </h1>
          <p className="mt-2 text-stone-600">
            Enter environmental parameters to estimate the Forest Fire Weather Index (FWI)
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-stone-200 p-6 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {inputFields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="block text-sm font-medium text-stone-700 mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  step={field.step}
                  required
                  className="w-full px-4 py-2.5 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-shadow"
                />
              </div>
            ))}

            {/* Region Dropdown */}
            <div>
              <label htmlFor="Region" className="block text-sm font-medium text-stone-700 mb-1">
                Region
              </label>
              <select
                id="Region"
                name="Region"
                value={formData.Region}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-stone-300 rounded-lg text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-shadow"
              >
                <option value="Bejaia">Bejaia</option>
                <option value="Sidi Bel-abbes">Sidi Bel-abbes</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-8 py-3 bg-green-700 text-white font-medium rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Predicting...
                </span>
              ) : (
                "Predict FWI"
              )}
            </button>
          </div>
        </form>

        {/* Error */}
        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-red-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Results Section */}
        {result && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">Prediction Result</h2>

            <div className="p-6 rounded-lg border-2 bg-green-50 border-green-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900">Prediction Successful</h3>
                  <p className="text-green-700 mt-1">
                    Predicted Fire Weather Index (FWI):{" "}
                    <span className="font-bold">{Number(result.predicted_FWI).toFixed(2)}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Input Summary */}
            <div className="mt-6 bg-white rounded-lg border border-stone-200 p-4">
              <h3 className="text-sm font-medium text-stone-700 mb-3">Input Summary</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                {Object.entries(formData).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-stone-500">{key}:</span>{" "}
                    <span className="text-stone-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
