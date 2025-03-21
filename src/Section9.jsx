import { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const Section9 = () => {
  const [support_type, setSupportType] = useState("");
  const [additional, setAdditional] = useState("");
  const navigate = useNavigate();
  const Submit = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await axios.post(
        "http://localhost:5001/additional_information",
        {
          support_type,
          additional,
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
      <form onSubmit={Submit}>
        <h5 className="h2">SECTION D: OTHER ISSUES </h5>
        <h4 className="h1">10.ADDITIONAL INFORMATION </h4>
        <div className="h">
          <h3 className="h">
            (a)Do you have any additional information to add in support of the
            application, which is not included elsewhere in the form? If yes,
            provide the details.{" "}
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
            <h3>specify:</h3>
            <input
              type="text"
              name="additionalInformation"
              placeholder="Enter details"
              checked={additional === "Yes"}
              onChange={(e) => setAdditional(e.target.value)}
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
export default Section9;
