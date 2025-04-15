


import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Section13(adminId) {
  const [protocol_number, setProtocolNumber] = useState("");
  const [version_number, setVersionNumber] = useState("");
  const [principal_investigator_name, setPrincipalInvestigatorName] =
    useState("");
  const [department, setDepartment] = useState("");
  const [title, setTitle] = useState("");
  const [selectedElements, setSelectedElements] = useState([]);
  const [summary, setSummary] = useState("");
  const [name_of_co_investigator_1, setNameOfCoInvestigator1] = useState("");
  const [image, setImage] = useState(null); 
  const [date_1, setDate1] = useState(new Date().toISOString().split("T")[0]);
  const [date_2, setDate2] = useState(new Date().toISOString().split("T")[0]);
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();

  const elementsList = [
    "No more than minimal risk to the trial participants",
    "Research involving clinical documentation materials that are nonidentifiable (data, documents, records);",
    "Research involving non-identifiable specimen and human tissue from sources like blood banks, tissue banks and left-over clinical samples;",
    "Any other reason, specify ",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await axios.post("http://localhost:5001/expedited_review", {
        selectedElements: selectedElements,
        protocol_number,
        version_number,
        principal_investigator_name,
        department,
        title,
        summary,
        name_of_co_investigator_1,
        date_1,
        date_2,
        administrativeDetailId: adminId,
      });
      const id = userResponse.data.id;
      console.log("User created:", userResponse.data);

      if (image) {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("id", id);

        const uploadResponse = await axios.post(
          "http://localhost:3001/expedited_review_upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Image uploaded:", uploadResponse.data);
      }

      navigate("/Section14");
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const handleEdit = () => {
    setShowPreview(false);
  };

  if (showPreview) {
    return (
      <div className="h">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <h5 className="h2">Preview</h5>
          <p>Protocol Number: {protocol_number}</p>
          <p>Version Number: {version_number}</p>
          <p>Date: {date_1}</p>
          <p>Principal Investigator Name: {principal_investigator_name}</p>
          <p>Department: {department}</p>
          <p>Title: {title}</p>
          <p>Summary: {summary}</p>
          <p>Selected Elements: {selectedElements.join(", ")}</p>
          <p>Name of PI/Researcher: {name_of_co_investigator_1}</p>
          <p>Date: {date_2}</p>
          {image && <p>Image: {image.name}</p>}
          <button onClick={handleSubmit} className="custom-button">
            Confirm Submit
          </button>
          <button onClick={handleEdit} className="custom-button">
            Edit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h5 className="h2">Application for Expedited Review</h5>

        <form onSubmit={handlePreview}>
          <div className="form-row">
            <div className="form-group">
              <h2 className="custom-text">Study Protocol No:</h2>
              <input
                type="number"
                name="protocolnumber"
                placeholder="Enter Protocol Number"
                value={protocol_number}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "");
                  value = value.slice(0, 10);
                  setProtocolNumber(value);
                }}
                className="custom-title"
                required
              />
            </div>

            <br></br>
            <div className="form-group">
              <h2 className="custom-text">Version number</h2>

              <input
                type="number"
                maxLength={10}
                pattern="\g{10}"
                name="versionnumber"
                placeholder="versionnumber"
                value={version_number}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "");
                  value = value.slice(0, 10);
                  setVersionNumber(value);
                }}
                className="custom-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <h2 className="custom-text">Date</h2>
            <label>
              <input
                type="date"
                name="date"
                value={date_1}
                placeholder="YYYY/MM/DD"
                onChange={(e) => setDate1(e.target.value)}
                className="custom-title"
                required
              />
            </label>
            <br />
          </div>

          <h2 className="h">1. Principal Investigator’s name: </h2>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={principal_investigator_name}
            onChange={(e) => {
              let value = e.target.value.replace(/[^A-Za-z\s]/g, "");
              value = value.slice(0, 40);
              if (value.length > 0) {
                value = value.charAt(0).toUpperCase() + value.slice(1);
              }
              setPrincipalInvestigatorName(value);
            }}
            className="name"
            required
          />

          <br />

          <div className="form-row">
            <div className="form-group">
              <h2 className="h">2. Department</h2>
              <input
                type="text"
                name="department"
                placeholder="Enter Department"
                value={department}
                onChange={(e) => {
                  let value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                  value = value.slice(0, 28);
                  if (value.length > 0) {
                    value = value.charAt(0).toUpperCase() + value.slice(1);
                  }
                  setDepartment(value);
                }}
                className="custom-input"
                required
              />
            </div>

            <br />

            <div className="form-group">
              <h2 className="h">3. Title Of Project</h2>
              <input
                type="text"
                name="title"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => {
                  let value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                  value = value.slice(0, 28);
                  if (value.length > 0) {
                    value = value.charAt(0).toUpperCase() + value.slice(1);
                  }
                  setTitle(value);
                }}
                className="custom-title"
                required
              />
            </div>
          </div>
          <br></br>

          <h3 className="h">4. Brief description of the project:</h3>
          <h3 className="h">
            Please give a brief summary (approx. 300 words) of the nature of the
            proposal, including the aims / objectives / hypotheses of the
            project, rationale, study population, and procedures / methods to be
            used in the project.{" "}
          </h3>
          <textarea
            name="researchSummary"
            placeholder="Enter research summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="custom-textarea"
            maxLength={600}
            required
          />

          <br />

          <h5 className="h1">
            5. State reasons why expedited review from NIEC is requested? (Tick
            applicable){" "}
          </h5>
          <div className="h1">
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
          </div>

          <div className="form-group">
            <h2 className="custom-text">Name of PI / Researcher</h2>
            <label>
              <input
                type="text"
                name="researcher"
                placeholder="Enter researcher"
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
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
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
                  value={date_2}
                  placeholder="YYYY/MM/DD"
                  onChange={(e) => setDate2(e.target.value)}
                  className="custom-title"
                  required
                />
              </label>
              <br />
            </div>
          </div>

          <button type="submit" className="custom-button">
            Preview
          </button>
        </form>
      </div>
    </div>
  );
}

export default Section13;