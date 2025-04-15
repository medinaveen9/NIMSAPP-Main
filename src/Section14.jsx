// import "./App.css";
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Section14() {
//   const [principal_investigator_name, setPrincipalInvestigatorName] =
//     useState("");
//   const [department, setDepartment] = useState("");

//   const [title, setTitle] = useState("");
//   const [selectedElements, setSelectedElements] = useState([]);
//   const [summary, setSummary] = useState("");

//   const [name_of_co_investigator_1, setNameOfCoInvestigator1] = useState("");
//   const [image, setImage] = useState("null");
//   const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

//   const navigate = useNavigate();

//   const elementsList = [
//     "research cannot practically be carried out without the waiver and the waiver is scientifically justified",
//     "retrospective studies, where the participants are de-identified or cannot be contacted",

//     "research on anonymized biological samples/data",

//     "certain types of public health studies/surveillance programmes/programme evaluation studies",
//     " research on data available in the public domain",

//     " research during humanitarian emergencies and disasters, when the participant may not be in a position to give consent.",
//   ];

//   const handleCheckboxChange = (event) => {
//     const value = event.target.value;
//     if (event.target.checked) {
//       setSelectedElements([...selectedElements, value]);
//     } else {
//       setSelectedElements(selectedElements.filter((item) => item !== value));
//     }
//   };

//   const Submit = async (e) => {
//     e.preventDefault();
//     try {
//       const userResponse = await axios.post("http://localhost:5001/requesting_waiver", {
//         selectedElements: selectedElements,
//         principal_investigator_name ,
//      department,
//      title ,
//      summary ,

//     name_of_co_investigator_1 ,

//     date

//       });
//       const id = userResponse.data.id;
//       console.log("User created:", userResponse.data);

//       if (image) {

//         const formData = new FormData();
//         formData.append("image", image);
//         formData.append("id", id);

//         const uploadResponse = await axios.post(
//           "http://localhost:3001/requesting_waiver_upload",
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//           }
//         );

//         console.log("Image uploaded:", uploadResponse.data);
//       }

//       navigate("/");
//     } catch (error) {
//       console.error("Submission error:", error);
//     }
//   };

//   return (
//     <div className="form-container">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//         <h5 className="h2">
//           Application Form for Requesting Waiver of Consent
//         </h5>

//         <form onSubmit={Submit}>
//           <h2 className="h">1. Principal Investigator’s name: </h2>

//           <input
//             type="text"
//             name="name"
//             placeholder="Enter Name"
//             value={principal_investigator_name}
//             onChange={(e) => {
//               let value = e.target.value.replace(/[^A-Za-z\s]/g, "");
//               value = value.slice(0, 40);
//               if (value.length > 0) {
//                 value = value.charAt(0).toUpperCase() + value.slice(1);
//               }
//               setPrincipalInvestigatorName(value);
//             }}
//             className="name"
//             required
//           />

//           <br />

//           <div className="form-row">
//             <div className="form-group">
//               <h2 className="h">2. Department</h2>
//               <input
//                 type="text"
//                 name="department"
//                 placeholder="Enter Department"
//                 value={department}
//                 onChange={(e) => {
//                   let value = e.target.value.replace(/[^A-Za-z\s]/g, "");
//                   value = value.slice(0, 28);
//                   if (value.length > 0) {
//                     value = value.charAt(0).toUpperCase() + value.slice(1);
//                   }
//                   setDepartment(value);
//                 }}
//                 className="custom-input"
//                 required
//               />
//             </div>

//             <br />

//             <div className="form-group">
//               <h2 className="h">3. Title </h2>
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Enter Title"
//                 value={title}
//                 onChange={(e) => {
//                   let value = e.target.value.replace(/[^A-Za-z\s]/g, "");
//                   value = value.slice(0, 28);
//                   if (value.length > 0) {
//                     value = value.charAt(0).toUpperCase() + value.slice(1);
//                   }
//                   setTitle(value);
//                 }}
//                 className="custom-title"
//                 required
//               />
//             </div>
//           </div>
//           <br></br>

//           <h5 className="h1">
//             4. Reason for waiver of informed consent: (Please tick as
//             applicable){" "}
//           </h5>
//           <div className="h1">
//             <div className="formm-ro">
//               {elementsList.map((item, index) => (
//                 <label key={index} className="checkbox-label">
//                   <br></br>

//                   <input
//                     type="checkbox"
//                     value={item}
//                     checked={selectedElements.includes(item)}
//                     onChange={handleCheckboxChange}
//                   />
//                   {""}
//                   <br></br>
//                   {item}
//                 </label>
//               ))}
//             </div>
//           </div>

//           <h3 className="h">Any other reason (please specify)</h3>
//           <textarea
//             name="researchSummary"
//             placeholder="Enter research summary"
//             value={summary}
//             onChange={(e) => setSummary(e.target.value)}
//             className="custom-textarea"
//             maxLength={600}
//             required
//           />

//           <br />

//           <div className="form-group">
//             <h2 className="custom-text">Name of PI / Researcher</h2>
//             <label>
//               <input
//                 type="text"
//                 name="researcher"
//                 placeholder="Enter researcher"
//                 value={name_of_co_investigator_1}
//                 onChange={(e) => setNameOfCoInvestigator1(e.target.value)}
//                 className="custom-title"
//                 required
//               />
//             </label>
//           </div>
//           <br></br>

//           <div className="form-row">
//             <div className="form-group">
//               <h2 className="custom-text">signature</h2>
//               <label>
//                 <input
//                   type="file"
//                   name="image"
//                   onChange={(e) => setImage(e.target.files[0])}
//                   className="custom-title"
//                   required
//                 />
//               </label>
//             </div>
//             <div className="form-group">
//               <h2 className="custom-text">Date</h2>
//               <label>
//                 <input
//                   type="date"
//                   name="date"
//                   value={date}
//                   placeholder="YYYY/MM/DD"
//                   onChange={(e) => setDate(e.target.value)}
//                   className="custom-title"
//                   required
//                 />
//               </label>
//               <br />
//             </div>
//           </div>

//           <button type="submit" className="custom-button">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Section14;

import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Section14(adminId) {
  const [principal_investigator_name, setPrincipalInvestigatorName] =
    useState("");
  const [department, setDepartment] = useState("");
  const [title, setTitle] = useState("");
  const [selectedElements, setSelectedElements] = useState([]);
  const [summary, setSummary] = useState("");
  const [name_of_co_investigator_1, setNameOfCoInvestigator1] = useState("");
  const [image, setImage] = useState(null); // Changed to null for initial state
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();

  const elementsList = [
    "research cannot practically be carried out without the waiver and the waiver is scientifically justified",
    "retrospective studies, where the participants are de-identified or cannot be contacted",
    "research on anonymized biological samples/data",
    "certain types of public health studies/surveillance programmes/programme evaluation studies",
    "research on data available in the public domain",
    "research during humanitarian emergencies and disasters, when the participant may not be in a position to give consent.",
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
      const userResponse = await axios.post(
        "http://localhost:5001/requesting_waiver",
        {
          selectedElements: selectedElements,
          principal_investigator_name,
          department,
          title,
          summary,
          name_of_co_investigator_1,
          date,
          administrativeDetailId: adminId,
        }
      );
      const id = userResponse.data.id;
      console.log("User created:", userResponse.data);

      if (image) {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("id", id);

        const uploadResponse = await axios.post(
          "http://localhost:3001/requesting_waiver_upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Image uploaded:", uploadResponse.data);
      }

      navigate("/");
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const handleEdit = () => {
    setShowPreview(false);
  };

  if (showPreview) {
    return (
      <div className="form-container">
        <div className="h">
          <h5 className="h2">Preview</h5>
          <p>Principal Investigator Name: {principal_investigator_name}</p>
          <p>Department: {department}</p>
          <p>Title: {title}</p>
          <p>Selected Elements: {selectedElements.join(", ")}</p>
          <p>Summary: {summary}</p>
          <p>Name of PI/Researcher: {name_of_co_investigator_1}</p>
          <p>Date: {date}</p>
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
        <h5 className="h2">
          Application Form for Requesting Waiver of Consent
        </h5>

        <form onSubmit={handlePreview}>
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
              <h2 className="h">3. Title </h2>
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

          <h5 className="h1">
            4. Reason for waiver of informed consent: (Please tick as
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

          <h3 className="h">Any other reason (please specify)</h3>
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
                  value={date}
                  placeholder="YYYY/MM/DD"
                  onChange={(e) => setDate(e.target.value)}
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

export default Section14;
