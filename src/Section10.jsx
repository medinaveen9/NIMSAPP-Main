import { useState } from "react";
import "./App.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";
const Section10 = () => {
  const [name_of_pi_research, setNameOfPiResearch] = useState("");
  const [file_name_1, setFileName1] = useState("");
  const [date_pi, setDatePi] = useState(new Date().toISOString().split("T")[0]);
  const [selectedElements, setSelectedElements] = useState([]);
  const [name_of_co_pi_guide, setNameOfCoPiGuide] = useState("");
  const [file_name_2, setFileName2] = useState("");
  const [date_co_pi, setDateCoPi] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [name_of_co_investigator_1, setNameOfCoInvestigator1] = useState("");
  const [file_name_3, setFileName3] = useState("");
  const [date_co_inv_1, setDateCoInv1] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [name_of_co_investigator_2, setNameOfCoInvestigator2] = useState("");
  const [file_name_4, setFileName4] = useState("");
  const [date_co_inv_2, setDateCoInv2] = useState(
    new Date().toISOString().split("T")[0]
  );

  const navigate = useNavigate();

  const elementsList = [
    "I/We certify that the information provided in this application is complete and correct.",
    "I/We confirm that all investigators have approved the submitted version of proposal /related documents",

    "I/We confirm that this study will be conducted in accordance with the latest ICMR National Ethical Guidelines for Biomedical and Health Research involving HumanParticipants and other applicable regulations and guidelines including responsible",

    "I/We will comply with all policies and guidelines of the institute and affiliated / collaborating institutions wherever applicable",
    "I/We confirm that we shall submit any protocol amendments, adverse events report,significant deviations from protocols, regular progress reports and a final report and also participate in any audit of the study if needed",

    "I/We confirm that we will maintain accurate and complete records of all aspects of the study.",
    " I/We will protect the privacy of participants and assure safety and confidentiality of study data and biological samples.",
  ];

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedElements([...selectedElements, value]);
    } else {
      setSelectedElements(selectedElements.filter((item) => item !== value));
    }
  };

  const Submit = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await axios.post(
        "http://localhost:5001/declaration",
        {
          selectedElements: selectedElements,
          name_of_pi_research,
          file_name_1,
          date_pi,
          name_of_co_pi_guide,
          file_name_2,
          date_co_pi,
          name_of_co_investigator_1,
          file_name_3,
          date_co_inv_1,
          name_of_co_investigator_2,
          file_name_4,
          date_co_inv_2,
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
        <div className="h">
          <h5 className="h2">SECTION E: DECLARATION AND CHECKLIST</h5>
          <div>
            <h5 className="h1">11. DECLARATION (Please tick as applicable) </h5>
            <div className="formm-ro">
              {elementsList.map((item, index) => (
                <label key={index} className="checkbox-label">
                  <br></br>

                  <input
                    type="checkbox"
                    value={item}
                    checked={selectedElements.includes(item)}
                    onChange={handleCheckboxChange}
                  />
                  {""}
                  <br></br>
                  {item}
                </label>
              ))}
            </div>
            <div className="form-group">
              <h2 className="custom-text">Name of PI / Researcher</h2>
              <label>
                <input
                  type="text"
                  name="researcher"
                  placeholder="Enter researcher"
                  value={name_of_pi_research}
                  onChange={(e) => setNameOfPiResearch(e.target.value)}
                  className="custom-title"
                  required
                />
              </label>
            </div>
            <br></br>

            <div className="form-row">
              <div className="form-group">
                <h2 className="custom-text">signature</h2>
                <label>
                  <input
                    type="file"
                    name="file"
                    value={file_name_1}
                    onChange={(e) => setFileName1(e.target.value)}
                    className="custom-title"
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <h2 className="custom-text">Date</h2>
                <label>
                  <input
                    type="date"
                    name="date"
                    value={date_pi}
                    placeholder="YYYY/MM/DD"
                    onChange={(e) => setDatePi(e.target.value)}
                    className="custom-title"
                    required
                  />
                </label>
                <br />
              </div>
            </div>

            <div className="form-group">
              <h2 className="custom-text">Name of Co-PI / Guide: </h2>
              <label>
                <input
                  type="text"
                  name="text"
                  placeholder="Enter guide"
                  value={name_of_co_pi_guide}
                  onChange={(e) => setNameOfCoPiGuide(e.target.value)}
                  className="custom-title"
                  required
                />
              </label>
            </div>
            <br></br>

            <div className="form-row">
              <div className="form-group">
                <h2 className="custom-text">signature</h2>
                <label>
                  <input
                    type="file"
                    value={file_name_2}
                    onChange={(e) => setFileName2(e.target.value)}
                    className="custom-title"
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <h2 className="custom-text">Date</h2>
                <label>
                  <input
                    type="date"
                    name="date_co_pi"
                    value={date_co_pi}
                    onChange={(e) => setDateCoPi(e.target.value)}
                    className="custom-title"
                    required
                  />
                </label>
                <br />
              </div>
            </div>

            <div className="form-group">
              <h2 className="custom-text">
                Name of Co- investigator / Co-Guide:{" "}
              </h2>
              <label>
                <input
                  type="text"
                  name="coguide"
                  placeholder="Enter guide"
                  value={name_of_co_investigator_1}
                  onChange={(e) => setNameOfCoInvestigator1(e.target.value)}
                  className="custom-title"
                  required
                />
              </label>
            </div>
            <br></br>

            <div className="form-row">
              <div className="form-group">
                <h2 className="custom-text">signature</h2>
                <label>
                  <input
                    type="file"
                    value={file_name_3}
                    onChange={(e) => setFileName3(e.target.value)}
                    className="custom-title"
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <h2 className="custom-text">Date</h2>
                <label>
                  <input
                    type="date"
                    name="date"
                    value={date_co_inv_1}
                    onChange={(e) => setDateCoInv1(e.target.value)}
                    className="custom-title"
                    required
                  />
                </label>
                <br />
              </div>
            </div>

            <div className="form-group">
              <h2 className="custom-text">
                Name of Co- investigator / Co-Guide:{" "}
              </h2>
              <label>
                <input
                  type="text"
                  name="guidde"
                  placeholder="Enter guidde"
                  value={name_of_co_investigator_2}
                  onChange={(e) => setNameOfCoInvestigator2(e.target.value)}
                  className="custom-title"
                  required
                />
              </label>
            </div>
            <br></br>

            <div className="form-row">
              <div className="form-group">
                <h2 className="custom-text">signature</h2>
                <label>
                  <input
                    type="file"
                    value={file_name_4}
                    onChange={(e) => setFileName4(e.target.value)}
                    className="custom-title"
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <h2 className="custom-text">Date</h2>
                <label>
                  <input
                    type="date"
                    placeholder="YYYY/MM/DD"
                    name="date"
                    value={date_co_inv_2 || ""}
                    onChange={(e) => setDateCoInv2(e.target.value)}
                    className="custom-title"
                    required
                  />
                </label>
                <br />
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="custom-button">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Section10;
