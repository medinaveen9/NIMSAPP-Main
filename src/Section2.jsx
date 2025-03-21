import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Section2 = () => {
  // Principal Investigator state
  const [piName, setPiName] = useState("");
  const [piDesignation, setPiDesignation] = useState("");
  const [piQualification, setPiQualification] = useState("");
  const [piDepartment, setPiDepartment] = useState("");
  const [piInstitution, setPiInstitution] = useState("");
  const [piAddress, setPiAddress] = useState("");
  const [piInvestigatorType, setPiInvestigatorType] = useState(
    "Principal_Investigator"
  ); 

  // Co-investigator state
  const [coiName, setCoiName] = useState("");
  const [coiDesignation, setCoiDesignation] = useState("");
  const [coiQualification, setCoiQualification] = useState("");
  const [coiDepartment, setCoiDepartment] = useState("");
  const [coiInstitution, setCoiInstitution] = useState("");
  const [coiAddress, setCoiAddress] = useState("");
  const [coiInvestigatorType, setCoiInvestigatorType] =
    useState("Co-investigator");

  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();

    try {
      const investigatorss = [
        {
          name: piName,
          designation: piDesignation,
          qualification: piQualification,
          department: piDepartment,
          institution: piInstitution,
          address: piAddress,
          investigator_type: piInvestigatorType,
        },
        {
          name: coiName,
          designation: coiDesignation,
          qualification: coiQualification,
          department: coiDepartment,
          institution: coiInstitution,
          address: coiAddress,
          investigator_type: coiInvestigatorType,
        },
      ];

      await axios.post("http://localhost:5001/investigatorss", investigatorss);

      console.log("Investigators created");
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
      <h2 className="h">G.Details of Investigators / Researcher(s): </h2>
      <form onSubmit={Submit}>
        <div className="form-row">
          {/* Principal Investigator */}
          <div className="form-group">
            <h3 className="h">Principal Investigator / Researcher:</h3>
            <input
              type="text"
              placeholder="Enter Name"
              value={piName}
              onChange={(e) => setPiName(e.target.value)}
              className="custom-input"
              required
            />
            <input
              type="text"
              placeholder="Enter Designation"
              value={piDesignation}
              onChange={(e) => setPiDesignation(e.target.value)}
              className="custom-input"
              required
            />
            <input
              type="text"
              placeholder="Qualification"
              value={piQualification}
              onChange={(e) => setPiQualification(e.target.value)}
              className="custom-input"
              required
            />
            <input
              type="text"
              placeholder="Department"
              value={piDepartment}
              onChange={(e) => setPiDepartment(e.target.value)}
              className="custom-input"
              required
            />
            <input
              type="text"
              placeholder="Institution"
              value={piInstitution}
              onChange={(e) => setPiInstitution(e.target.value)}
              className="custom-input"
              required
            />
            <textarea
              placeholder="Address"
              value={piAddress}
              onChange={(e) => setPiAddress(e.target.value)}
              className="custom-textarea"
              required
            />
          </div>
          {/* Co-investigator */}
          <div className="form-group">
            <h3 className="h">Co-investigator(s) / Guide(s):</h3>
            <input
              type="text"
              placeholder="Name"
              value={coiName}
              onChange={(e) => setCoiName(e.target.value)}
              className="custom-input"
              required
            />
            <input
              type="text"
              placeholder="Designation"
              value={coiDesignation}
              onChange={(e) => setCoiDesignation(e.target.value)}
              className="custom-input"
              required
            />
            <input
              type="text"
              placeholder="Qualification"
              value={coiQualification}
              onChange={(e) => setCoiQualification(e.target.value)}
              className="custom-input"
              required
            />
            <input
              type="text"
              placeholder="Department"
              value={coiDepartment}
              onChange={(e) => setCoiDepartment(e.target.value)}
              className="custom-input"
              required
            />
            <input
              type="text"
              placeholder="Institution"
              value={coiInstitution}
              onChange={(e) => setCoiInstitution(e.target.value)}
              className="custom-input"
              required
            />
            <textarea
              placeholder="Address"
              value={coiAddress}
              onChange={(e) => setCoiAddress(e.target.value)}
              className="custom-textarea"
              required
            />
          </div>
        </div>
        <button type="submit" className="custom-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Section2;
