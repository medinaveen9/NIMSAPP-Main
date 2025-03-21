import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Section7 = () => {
  const [waiver_consent_type, setWaiverConsentType] = useState("");
  const [specify, setSpecify] = useState("");
  const [specific, setSpecific] = useState("");
  const [compensation_research_of_type, setCompensationResearchOfType] =
    useState("");

  const navigate = useNavigate();
  const Submit = async (e) => {
    e.preventDefault();

    try {
      const userResponse = await axios.post(
        "http://localhost:5001/payment_compensation",
        {
          waiver_consent_type,
          specify,
          compensation_research_of_type,
          specific,
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
      <h1 className="h1">8.PAYMENT / COMPENSATION</h1>

      <h1 className="h">
        (a)Is there a provision for treatment free of cost for research related
        injuries?{" "}
      </h1>

      <form onSubmit={Submit}>
        <div className="h">
          (a)Are you seeking waiver of consent?
          <div className="h">
            <label>
              <input
                type="radio"
                name="waiver"
                value="Yes"
                checked={waiver_consent_type === "Yes"}
                onChange={(e) => setWaiverConsentType(e.target.value)} // ✅
              />{" "}
              {""}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="waiver"
                value="No"
                checked={waiver_consent_type === "No"}
                onChange={(e) => setWaiverConsentType(e.target.value)} //
              />{" "}
              {""}
              No
            </label>
            <h3 className="custom">Kindly specify:</h3>
            <textarea
              type="text"
              name="specifydata"
              placeholder="Enter research summary"
              value={specify}
              onChange={(e) => setSpecify(e.target.value)}
              className="custom-textarea"
              maxLength={600}
              required
            />
          </div>
        </div>

        <div className="h">
          <h5>
            (b)Is there a provision for compensation of research related SAE?{" "}
          </h5>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="compensation"
                value="Yes"
                checked={compensation_research_of_type === "Yes"}
                onChange={(e) => setCompensationResearchOfType(e.target.value)}
              />{" "}
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="compensation"
                value="No"
                checked={compensation_research_of_type === "No"}
                onChange={(e) => setCompensationResearchOfType(e.target.value)}
              />{" "}
              No
            </label>
          </div>
          <h3 className="custom">Kindly specify:</h3>
          <textarea
            name="specific"
            placeholder="Enter research summary"
            value={specific}
            onChange={(e) => setSpecific(e.target.value)}
            className="custom-textarea"
            maxLength={600}
            required
          />
        </div>

        <button type="submit" className="custom-button">
          Submit{" "}
        </button>
      </form>
    </div>
  );
};
export default Section7;
