import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Section1() {
  const [name_of_research_principal, setNameOfResearchPrincipal] = useState("");
  const [department, setDepartment] = useState("");
  const [title, setTitle] = useState("");
  const [review_requested, setReviewRequested] = useState("");
  const [protocol_number, setProtocolNumber] = useState("");
  const [version_number, setVersionNumber] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const Submit = async (e) => {
    e.preventDefault();

    try {
      const userResponse = await axios.post(
        "http://localhost:5001/administrative_details",
        {
          name_of_research_principal,
          department,
          title,
          review_requested,
          protocol_number,
          version_number,
          date,
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
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h5 className="h2">SECTION A - BASIC INFORMATION</h5>

        <h1 className="h">1.ADMINISTRATIVE DETAILS </h1>
        <form onSubmit={Submit}>
          <h2 className="h">A.Name of Researcher/principal</h2>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={name_of_research_principal}
            onChange={(e) => setNameOfResearchPrincipal(e.target.value)}
            className="name"
            required
          />
          <br></br>

          <div className="form-row">
            <div className="form-group">
              <h2 className="h">B.Department</h2>
              <input
                type="text"
                name="department"
                placeholder="Enter Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="custom-input"
                required
              />
            </div>
            <br></br>
            <div className="form-group">
              <h2 className="h">C.Date</h2>
              <input
                type="date"
                // name="studyDate"
                // id="studyDate"
                placeholder="YYYY/MM/DD"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="custom-title"
                required
              />

              <br></br>
            </div>

            <div className="form-group">
              <h2 className="h">D.Title</h2>
              <label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="custom-title"
                  required
                />
              </label>
            </div>
          </div>
          <br></br>
          <div className="h">
            <h2 className="custom-text">E. Type of review requested: </h2>

            <label>
              <input
                type="radio"
                name="review_requested"
                value="Expedited Review"
                checked={review_requested === "Expedited Review"}
                onChange={(e) => setReviewRequested(e.target.value)}
              />
              Expedited Review
            </label>

            <label>
              <input
                type="radio"
                name="review_requested"
                value="Full Committee Review"
                checked={review_requested === "Full Committee Review"}
                onChange={(e) => setReviewRequested(e.target.value)}
              />
              Full Committee Review
            </label>
          </div>
          <div className="form-row">
            <div className="form-group">
              <h2 className="custom-text">F.Protocol number</h2>
              <input
                type="number"
                name="protocolnumber"
                placeholder="Enter protocolnumber"
                value={protocol_number}
                onChange={(e) => setProtocolNumber(Number(e.target.value))}
                className="custom-title"
                required
              />
            </div>
            <br></br>
            <div className="form-group">
              <h2 className="custom-text">Version number</h2>

              <input
                type="number"
                name="versionnumber"
                placeholder="versionnumber"
                value={version_number}
                onChange={(e) => setVersionNumber(Number(e.target.value))}
                className="custom-input"
                required
              />
            </div>
          </div>
          <button type="submit" className="custom-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Section1;
