


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Section9 = (adminId) => {
  const [support_type, setSupportType] = useState("");
  const [additional, setAdditional] = useState("");
  const [preview, setPreview] = useState(false); 

  const navigate = useNavigate();

  const handlePreview = (e) => {
    e.preventDefault();
    setPreview(true);
  };

  const handleEdit = () => {
    setPreview(false);
  };

  const handleSubmit = async () => {
    try {
      const userResponse = await axios.post(
        "http://localhost:5001/additional_information",
        {
          support_type,
          additional,
          administrativeDetailId: adminId,
        }
      );
      console.log("User created:", userResponse.data);
      navigate("/Section10");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  if (preview) {
    return (
      <div className="h">
        <h5 className="h2">SECTION D: OTHER ISSUES </h5>
      
        <p><strong>Do you have any additional information to add?</strong> {support_type}</p>
        {support_type === "Yes" && (
          <p><strong>Details:</strong> {additional}</p>
        )}

        <button className="custom-button" onClick={handleSubmit}>
          Submit
        </button>
        <button className="custom-button" onClick={handleEdit}>
          Edit
        </button>
      </div>
    );
  }

  return (
    <div className="form-container">
      <form onSubmit={handlePreview}>
        <h5 className="h2">SECTION D: OTHER ISSUES </h5>
        <h1 className="h">10. ADDITIONAL INFORMATION</h1>
        <div className="h">
          <h3 className="h">
            (a) Do you have any additional information to add in support of the
            application, which is not included elsewhere in the form? If yes,
            provide the details.
          </h3>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="additional"
                value="Yes"
                checked={support_type === "Yes"}
                onChange={(e) => setSupportType(e.target.value)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="additional"
                value="No"
                checked={support_type === "No"}
                onChange={(e) => setSupportType(e.target.value)}
              />{" "}
              No
            </label>
          </div>
        </div>

        {support_type === "Yes" && (
          <div className="h">
            <h3>Specify:</h3>
            <input
              type="text"
              name="additionalInformation"
              placeholder="Enter details"
              value={additional}
              onChange={(e) => setAdditional(e.target.value)}
              className="custom-input"
              required
            />
          </div>
        )}
        <button type="submit" className="custom-button">
          Preview
        </button>
      </form>
    </div>
  );
};

export default Section9;
