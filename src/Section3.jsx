import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Section3 = () => {
  const [summary, setSummary] = useState("");
  const [type_of_study, setTypeOfStudy] = useState("");
  const [file_name, setFileName] = useState("");
  const [external_laboratory, setExternalLaboratory] = useState("");
  const [specify, setSpecify] = useState("");

  const navigate = useNavigate();
  const Submit = async (e) => {
    e.preventDefault();

    try {
      const userResponse = await axios.post(
        "http://localhost:5001/overview_research",
        {
          summary,
          type_of_study,
          file_name,
          external_laboratory,
          specify,
        }
      );
      const user_id = userResponse.data.user_id;
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
      <h3 className="h2">SECTION B-RESEARCH RELATED INFORMATION </h3>
      <h3 className="h">3.OVERVIEW OF RESEARCH</h3>
      <form onSubmit={Submit}>
        <h3 className="h">(a).Summary of Study(within 300 words)</h3>
        <textarea
          name="researchSummary"
          placeholder="Enter research summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="custom-textarea"
          maxLength={600}
          required
        />
        <div>
          <h3 className="h">(b).Type of study</h3>
          <select
            name="studyType"
            value={type_of_study}
            onChange={(e) => setTypeOfStudy(e.target.value)}
            className="custom-input"
            required
          >
            <option value="">selectstudytype</option>
            <option value="interventional">interventional</option>
            <option value="case-control">casecontrol/cohert</option>
            <option value="retrospective">restrospective</option>
            <option value="epidomological">epidomological</option>
            <option value="cross-section">cross-section</option>
            <option value="sociobehaviour">sociobehaviour</option>
          </select>
          <br></br>
        </div>
        <h1 className="h">4.METHODOLOGY</h1>
        <div className="form-row">
          <div className="form-group">
            <h2 className="custom-text">Sample size:</h2>
            <h2 className="h">Justification for the sample size chosen;</h2>
            <label>
              <input
                type="file"
                value={file_name}
                onChange={(e) => setFileName(e.target.value)}
                className="custom-title"
                required
              />
            </label>
          </div>
        </div>

        <div className="h">
          <h3 className="h">
            Is there an external laboratory / outsourcing involved for
            investigations?
          </h3>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="laboratory"
                value="Yes"
                checked={external_laboratory === "Yes"}
                onChange={(e) => setExternalLaboratory(e.target.value)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="laboratory"
                value="No"
                checked={external_laboratory === "No"}
                onChange={(e) => setExternalLaboratory(e.target.value)}
              />{" "}
              No
            </label>
          </div>
        </div>

        {external_laboratory === "Yes" && (
          <div className="h1">
            <h3>If yes, specify:</h3>
            <input
              type="text"
              name="laboratoryDetails"
              placeholder="Enter details"
              value={specify}
              onChange={(e) => setSpecify(e.target.value)}
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
export default Section3;
