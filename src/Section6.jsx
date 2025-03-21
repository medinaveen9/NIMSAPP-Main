import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Section6 = () => {
  const [seeking_waiver_of_consent_type, setSeekingWaiverOfConsentType] =
    useState("");
  const [languages, setLanguages] = useState("");
  const [version_number, setVersionNumber] = useState("");

  const [date, setDate] = useState("");
  const [certificates, setCertificates] = useState("");
  const [subject, setSubject] = useState("");
  const [specify, setSpecify] = useState("");

  const [selectedElements, setSelectedElements] = useState([]);
  const navigate = useNavigate();

  const elementsList = [
    "Statement that studyinvolves research &explain purpose ofresearch ",
    "Statement that consent &participation are voluntary ",
    "Expected Risks and benefits to the study subject",
    "Alternatives procedures / therapies available",
    "Contact information of PI and Member Secretary of EC ",
    "Financial compensation and medical management in SAE ",
    "Right to withdraw from study at any time ",
    "Expected duration of participation",
    "Maintenance of Confidentiality ",
    "Description of procedures to be followed, treatment schedule and probability of random assignment ",
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
        "http://localhost:5001/informed_consent",
        {
          seeking_waiver_of_consent_type,
          languages,
          version_number,
          date,
          certificates,
          subject,
          specify,
          selectedElements: selectedElements, // Send the selectedElements array
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
      <h1 className="h1">7.INFORMED CONSENT </h1>

      <form onSubmit={Submit}>
        <div className="h">
          (a)Are you seeking waiver of consent?
          <div className="h1">
            <label>
              <input
                type="radio"
                name="waiverofconsent"
                value="Yes"
                checked={seeking_waiver_of_consent_type === "Yes"}
                onChange={(e) => setSeekingWaiverOfConsentType(e.target.value)}
              />{" "}
              {""}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="waiverofconsent"
                value="No"
                checked={seeking_waiver_of_consent_type === "No"}
                onChange={(e) => setSeekingWaiverOfConsentType(e.target.value)}
              />{" "}
              {""}
              No
            </label>
          </div>
          <br></br>
        </div>

        <div className="h">
          <h5>
            (c)List the languages (apart from English) in which translations of
            Participant Information Sheet (PIS) and Informed Consent Form (ICF)
            were provided:{" "}
          </h5>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="languagess"
                value="Telugu"
                checked={languages === "Telugu"}
                onChange={(e) => setLanguages(e.target.value)}
              />{" "}
              Telugu
            </label>

            <label>
              <input
                type="radio"
                name="languagess"
                value="Hindi"
                checked={languages === "Hindi"}
                onChange={(e) => setLanguages(e.target.value)}
              />
              {""}
              Hindi
            </label>

            <label>
              <input
                type="radio"
                name="languagess"
                value="Urdu"
                checked={languages === "Urdu"}
                onChange={(e) => setLanguages(e.target.value)}
              />
              {""}
              Urdu
            </label>

            <label>
              <input
                type="radio"
                name="languagess"
                value="Anyotherspecify"
                checked={languages === "Anyotherspecify"}
                onChange={(e) => setLanguages(e.target.value)}
              />{" "}
              Anyotherspecify
            </label>
          </div>
        </div>

        {/* Show input if "Yes" is selected */}
        {languages === "Anyotherspecify" && (
          <>
            <h3 className="h1">Enter version number</h3>
            <input
              type="number"
              name="versionnumbe"
              placeholder="Enter version number"
              value={version_number}
              onChange={(e) => setVersionNumber(e.target.value)}
              className="custom-input"
              required
            />

            <h2 className="h">Date</h2>
            <input
              type="date"
              name="studyDate"
              id="studyDate"
              placeholder="DD/MM/YYYY"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="custom-title"
              required
            />
            <br />
            <br />
          </>
        )}

        <div className="h1">
          <h5>Are Are certificate(s) of translations provided: </h5>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="entercertificates"
                value="Yes"
                checked={certificates === "Yes"}
                onChange={(e) => setCertificates(e.target.value)}
              />{" "}
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="entercertificates"
                value="No"
                checked={certificates === "No"}
                onChange={(e) => setCertificates(e.target.value)}
              />{" "}
              No
            </label>
          </div>
        </div>

        <div className="h">
          (d)Will Any tools be used to determine whether the subject understood
          the study
          <div className="h">
            <label>
              <input
                type="radio"
                name="enter subject"
                value="Yes"
                checked={subject === "Yes"}
                onChange={(e) => setSubject(e.target.value)}
              />{" "}
              {""}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="entersubject"
                value="No"
                checked={subject === "No"}
                onChange={(e) => setSubject(e.target.value)}
              />{" "}
              {""}
              No
            </label>
          </div>
          <br></br>
        </div>

        <h5 className="h">if yes specify:</h5>
        {/* Show input if "Yes" is selected */}
        {subject === "Yes" && (
          <div className="h">
            <label>
              <input
                type="radio"
                name="subjectDetails"
                value="By Questionaire"
                checked={specify === "By Questionaire"}
                onChange={(e) => setSpecify(e.target.value)}
              />{" "}
              By Questionaire
            </label>

            <label>
              <input
                type="radio"
                name="specify"
                value="Feedback"
                checked={specify === "Feedback"}
                onChange={(e) => setSpecify(e.target.value)}
              />{" "}
              Feedback
            </label>

            <label>
              <input
                type="radio"
                name="subjectDetails"
                value="Others"
                checked={specify === "Others"}
                onChange={(e) => setSpecify(e.target.value)}
              />{" "}
              Others
            </label>
          </div>
        )}
        <div className="h">
          <h5 className="h">
            (e)Tick the elements contained in the Participant Information Sheet
            (PIS) and Informed Consent Form{" "}
          </h5>
          <div className="formm-r">
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
        </div>

        <button type="submit" className="custom-button">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Section6;
