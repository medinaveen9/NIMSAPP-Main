

import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Section6 = (adminId) => {
  const [seeking_waiver_of_consent_type, setSeekingWaiverOfConsentType] =
    useState("");
  const [languages, setLanguages] = useState("");
  const [version_number, setVersionNumber] = useState("");
  const [date, setDate] = useState("");
  const [date_1, setDate1] = useState("");
  const [version_1, setVersion1] = useState("");
  const [version_2, setVersion2] = useState("");
  const [version_3, setVersion3] = useState("");
  const [date_2, setDate2] = useState("");
  const [date_3, setDate3] = useState("");
  const [certificates, setCertificates] = useState("");
  const [subject, setSubject] = useState("");
  const [specify, setSpecify] = useState("");
  const [showPreview, setShowPreview] = useState(false);
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

  const handlePreview = (e) => {
    e.preventDefault();
    setShowPreview(true);
  };

  const handleBack = () => {
    setShowPreview(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await axios.post(
        "http://localhost:5001/informedd_consent",
        {
          seeking_waiver_of_consent_type,
          languages,
          version_number,
          date,
          version_1,
          date_1,
          version_2,
          date_2,
          version_3,
          date_3,
          certificates,
          subject,
          specify,
          selectedElements: selectedElements,
          administrativeDetailId: adminId,
        }
      );
      const id = userResponse.data.id;
      console.log("User created:", userResponse.data);
      navigate("/Section7");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  if (showPreview) {
    return (
     
      <div className="h">
        <h1>Preview Form</h1>
        <ul className="preview-list">
          <li>Waiver of Consent: {seeking_waiver_of_consent_type}</li>
          <li>Languages: {languages}</li>
          {languages === "Anyotherspecify" && (
            <>
              <li>Other Language Version: {version_number}</li>
              <li>Other Language Date: {date}</li>
            </>
          )}
          <li>Participant Info - Version: {version_1}, Date: {date_1}</li>
          <li>ICF - Version: {version_2}, Date: {date_2}</li>
          <li>English Consent - Version: {version_3}, Date: {date_3}</li>
          <li>Certificates: {certificates}</li>
          <li>Tools Used to Understand: {subject}</li>
          {subject === "Yes" && <li>Tool Specify: {specify}</li>}
          <li>Selected Elements:</li>
          <ul>
            {selectedElements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </ul>
        <button className="custom-button" onClick={handleBack}>
          Back
        </button>
        <button className="custom-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    );
  }

  return (
    <div className="form-container">
      <div className="h">
      <h3 className="h2">7.INFORMED CONSENT </h3>

      <form onSubmit={handlePreview}>
        <div className="h">
         <h3> (a)Are you seeking waiver of consent?</h3>
          <div className="h1">
            <label>
              <input
                type="radio"
                name="waiverofconsent"
                value="Yes"
                checked={seeking_waiver_of_consent_type === "Yes"}
                onChange={(e) => setSeekingWaiverOfConsentType(e.target.value)}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="waiverofconsent"
                value="No"
                checked={seeking_waiver_of_consent_type === "No"}
                onChange={(e) => setSeekingWaiverOfConsentType(e.target.value)}
              />
              No
            </label>
          </div>
          <br />
        </div>

        <div className="h">
          <div className="m">
            <h3>(b)Documents</h3></div>

          <div className="form-group">
            <h5 className="h1">English consent</h5>
            <label>
              <h3 className="h">Enter version number</h3>
              <input
                type="number"
                name="versionnumber"
                placeholder="Enter version number"
                value={version_3}
                onChange={(e) => setVersion3(e.target.value)}
                className="custom-title"
                required
              />
            </label>
          </div>

          <div className="form-group">
            <h2 className="h">Date</h2>
            <input
              type="date"
              placeholder="YYYY/MM/DD"
              value={date_3}
              onChange={(e) => setDate3(e.target.value)}
              className="custom-title"
              required
            />
            <br />
          </div>

          <div className="h1">
            <h5 className="h1">partcipantInformation</h5>
            <label>
              <h3 className="h">Enter version number</h3>
              <input
                type="number"
                name="versionnumber"
                placeholder="Enter version number"
                value={version_1}
                onChange={(e) => setVersion1(e.target.value)}
                className="custom-input"
                required
              />
            </label>
          </div>

          <div className="form-group">
            <h2 className="h">Date</h2>
            <input
              type="date"
              placeholder="YYYY/MM/DD"
              value={date_1}
              onChange={(e) => setDate1(e.target.value)}
              className="custom-title"
              required
            />
            <br />
          </div>
        </div>

        <div className="h">
          <div className="form-group">
            <h5 className="h1">Version number of Informed Consent Form (ICF)</h5>
            <label>
              <h3 className="h">Enter version number</h3>
              <input
                type="number"
                name="versionnumber"
                placeholder="Enter version number"
                value={version_2}
                onChange={(e) => setVersion2(e.target.value)}
                className="custom-title"
                required
              />
            </label>
          </div>

          <div className="form-group">
            <h2 className="h">Date</h2>
            <input
              type="date"
              placeholder="YYYY/MM/DD"
              value={date_2}
              onChange={(e) => setDate2(e.target.value)}
              className="custom-title"
              required
            />
            <br />
          </div>
        </div>

        <div className="h">
          <h5>
            (c)List the languages (apart from English) in which translations of
            Participant Information Sheet (PIS) and Informed Consent Form (ICF)
            were provided:
          </h5>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="languages"
                value="Telugu"
                checked={languages === "Telugu"}
                onChange={(e) => setLanguages(e.target.value)}
              />
              Telugu
            </label>
            <label>
              <input
                type="radio"
                name="languages"
                value="Hindi"
                checked={languages === "Hindi"}
                onChange={(e) => setLanguages(e.target.value)}
              />
              Hindi
            </label>
            <label>
              <input
                type="radio"
                name="languages"
                value="Urdu"
                checked={languages === "Urdu"}
                onChange={(e) => setLanguages(e.target.value)}
              />
              Urdu
            </label>
            <label>
              <input
                type="radio"
                name="languages"
                value="Anyotherspecify"
                checked={languages === "Anyotherspecify"}
                onChange={(e) => setLanguages(e.target.value)}
              />
              Anyotherspecify
            </label>
          </div>
        </div>

        {languages === "Anyotherspecify" && (
          <>
            <h3 className="h1">Enter version number</h3>
            <input
              type="number"
              name="versionnumber"
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
                name="certificates"
                value="Yes"
                checked={certificates === "Yes"}
                onChange={(e) => setCertificates(e.target.value)}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="certificates"
                value="No"
                checked={certificates === "No"}
                onChange={(e) => setCertificates(e.target.value)}
              />
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
                name="subject"
                value="Yes"
                checked={subject === "Yes"}
                onChange={(e) => setSubject(e.target.value)}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="subject"
                value="No"
                checked={subject === "No"}
                onChange={(e) => setSubject(e.target.value)}
              />
              No
            </label>
          </div>
          <br />
        </div>

        <h5 className="h">if yes specify:</h5>
        {subject === "Yes" && (
          <div className="h">
            <label>
              <input
                type="radio"
                name="specify"
                value="Byquestionaire"
                checked={specify === "Byquestionaire"}
                onChange={(e) => setSpecify(e.target.value)}
              />
              By Questionaire
            </label>
            <label>
              <input
                type="radio"
                name="specify"
                value="Feedback"
                checked={specify === "Feedback"}
                onChange={(e) => setSpecify(e.target.value)}
              />
              Feedback
            </label>
            <label>
              <input
                type="radio"
                name="specify"
                value="Others"
                checked={specify === "Others"}
                onChange={(e) => setSpecify(e.target.value)}
              />
              Others
            </label>
          </div>
        )}

        <div className="h">
          <h5 className="h">
            (e)Tick the elements contained in the Participant Information Sheet
            (PIS) and Informed Consent Form
          </h5>
          <div className="formm-r">
            {elementsList.map((item, index) => (
              <label key={index} className="checkbox-label">
                <br />
                <input
                  type="checkbox"
                  value={item}
                  checked={selectedElements.includes(item)}
                  onChange={handleCheckboxChange}
                />
                <br />
                {item}
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="custom-button">
          Preview
        </button>
      </form>
    </div>
    </div>
  );
};

export default Section6;