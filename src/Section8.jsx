import { useState } from "react";
import "./App.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const Section8 = () => {
  const [control_details, setControlDetails] = useState("");
  const [access_details, setAccessDetails] = useState("");
  const [drugs_access_type, setDrugsAccessType] = useState("");
  const [document_access_type, setDocumentAccessType] = useState("");

  const navigate = useNavigate();
  const Submit = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await axios.post(
        "http://localhost:5001/storage_and_confidentiality",
        {
          document_access_type,
          access_details,
          drugs_access_type,
          control_details,
        }
      );
      const id = userResponse.data.id;
      console.log("User created:", userResponse.data);
      navigate("/");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="form-container">
      <h1 className="h1">9. Study Document Access Control</h1>

      <form onSubmit={Submit}>
        <div className="h">
          <h3 className="h">
            Will the study documents be under access control?
          </h3>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="accessControl"
                value="Yes"
                checked={document_access_type === "Yes"}
                onChange={(e) => setDocumentAccessType(e.target.value)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="accessControl"
                value="No"
                checked={document_access_type === "No"}
                onChange={(e) => setDocumentAccessType(e.target.value)}
              />{" "}
              No
            </label>
            <label>
              <input
                type="radio"
                name="accessControl"
                value="NA"
                checked={document_access_type === "NA"}
                onChange={(e) => setDocumentAccessType(e.target.value)}
              />{" "}
              NA
            </label>
          </div>
        </div>

        {/* Show input if "Yes" is selected */}
        {document_access_type === "Yes" && (
          <div className="h">
            <h3>Specify Access Control Details:</h3>
            <input
              type="text"
              name="accessDetails"
              placeholder="Enter details"
              value={control_details}
              onChange={(e) => setControlDetails(e.target.value)}
              className="custom-input"
              required
            />
            <br />
          </div>
        )}

        <div className="h">
          <h3 className="h">
            Will the study drugs / devices be under access control?
          </h3>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="drugsControl"
                value="Yes"
                checked={drugs_access_type === "Yes"}
                onChange={(e) => setDrugsAccessType(e.target.value)} //
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="drugsControl"
                value="No"
                checked={drugs_access_type === "No"}
                onChange={(e) => setDrugsAccessType(e.target.value)} //
              />{" "}
              No
            </label>
            <label>
              <input
                type="radio"
                name="drugsControl"
                value="NA"
                checked={drugs_access_type === "NA"}
                onChange={(e) => setDrugsAccessType(e.target.value)} //
              />{" "}
              NA
            </label>
          </div>
        </div>

        {drugs_access_type === "Yes" && (
          <div className="h1">
            <h3>Specify Access Control Details:</h3>
            <input
              type="text"
              name="drugsDetails"
              placeholder="Enter details"
              value={access_details}
              onChange={(e) => setAccessDetails(e.target.value)} //
              className="custom-input"
              required
            />
            <br />
          </div>
        )}

        <button type="submit" className="custom-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Section8;
