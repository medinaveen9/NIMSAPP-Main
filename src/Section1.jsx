// import "./App.css";
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Section1({ setAdminId }) {
//   const [name_of_research_principal, setNameOfResearchPrincipal] = useState("");
//   const [department, setDepartment] = useState("");
//   const [title, setTitle] = useState("");
//   const [review_requested, setReviewRequested] = useState("");
//   const [protocol_number, setProtocolNumber] = useState("");
//   const [version_number, setVersionNumber] = useState("");
//   const [date, setDate] = useState("");
//   const navigate = useNavigate();
//   const Submit = async (e) => {
//     e.preventDefault();

//     try {
//       const userResponse = await axios.post(
//         "http://localhost:5001/administrativee_details",
//         {
//           name_of_research_principal,
//           department,
//           title,
//           review_requested,
//           protocol_number,
//           version_number,
//           date,
//         }
//       );
//       const idd = userResponse.data.idd;
//       console.log("User created:", userResponse.data);
//       setAdminId(idd);
//       navigate("/Section12");
//     } catch (error) {
//       console.error(
//         "Error:",
//         error.response ? error.response.data : error.message
      
//       );


      
//     }
//   };
  

//   return (
//     <div className="form-container">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//         <h5 className="h2">SECTION A - BASIC INFORMATION</h5>

//         <h1 className="h">1.ADMINISTRATIVE DETAILS </h1>
//         <form onSubmit={Submit}>
//           <h2 className="h">A.Name of Researcher/principal</h2>
//           <input
//   type="text"
//   name="name"
//   placeholder="Enter Name"
//   value={name_of_research_principal}
//   onChange={(e) => {
//     let value = e.target.value.replace(/[^A-Za-z\s]/g, ''); // Allow only letters and spaces
//     value = value.slice(0, 40); // Limit to 40 characters
//     if (value.length > 0) {
//       value = value.charAt(0).toUpperCase() + value.slice(1); // Capitalize first letter
//     }
//     setNameOfResearchPrincipal(value);
//   }}
//   className="name"
//   required
// />
//           <br></br>

//           <div className="form-row">
//             <div className="form-group">
//               <h2 className="h">B.Department</h2>
//               <input
//                 type="text"
//                 name="department"
//                 placeholder="Enter Department"
//                 value={department}
//                 onChange={(e) =>{
//                    let value = e.target.value.replace(/[^A-Za-z\s]/g,'');
//                    value=value.slice(0, 28);
//                    if(value.length > 0) {
//                     value =value.charAt(0).toUpperCase() + value.slice(1);
//                   }
                
//                   setDepartment(value);
//                 }}
//                 className="custom-input"
//                 required
//               />
//             </div>
//             <br></br>
//             <div className="form-group">
//               <h2 className="h">C.Date</h2>
//               <input
//                 type="date"
//                 // name="studyDate"
//                 // id="studyDate"
//                 placeholder="YYYY/MM/DD"
//                 value={date}
//                 onChange={(e) => 
//                   setDate(e.target.value)}
//                 className="custom-title"
//                 required
//               />

//               <br></br>
//             </div>

//             <div className="form-group">
//               <h2 className="h">D.Title</h2>
//               <label>
//                 <input
//                   type="text"
//                   name="title"
                 
//                   placeholder="Enter Title"
//                   value={title}
//                   onChange={(e) =>{
//                     let value= e.target.value.replace(/[^A-Za-z\s]/g,'');
//                     value=value.slice(0,28);
//                     if(value.length > 0) {
//                       value=value.charAt(0).toUpperCase()+ value.slice(1);
//                     }
//                     setTitle(value)
//                   }
//                   } 
//                   className="custom-title"
//                   required
//                 />
//               </label>
//             </div>
//           </div>
//           <br></br>
//           <div className="h">
//             <h2 className="custom-text">E. Type of review requested: </h2>

//             <label>
//               <input
//                 type="radio"
//                 name="review_requested"
//                 value="Expedited Review"
//                 checked={review_requested === "Expedited Review"}
//                 onChange={(e) => setReviewRequested(e.target.value)}
//               />
//               Expedited Review
//             </label>

//             <label>
//               <input
//                 type="radio"
//                 name="review_requested"
//                 value="Full Committee Review"
//                 checked={review_requested === "Full Committee Review"}
//                 onChange={(e) => setReviewRequested(e.target.value)}
//               />
//               Full Committee Review
//             </label>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <h2 className="custom-text">F.Protocol number</h2>
//               <input
//   type="number"
//   name="protocolnumber"
//   placeholder="Enter Protocol Number"
//   value={protocol_number}
//   onChange={(e) => {
//     let value = e.target.value.replace(/\D/g, ''); // Ensure only numbers
//     value = value.slice(0, 10); // Limit to 10 digits
//     setProtocolNumber(value); // Convert to number and update state
//   }}
//   className="custom-title"
//   required
// />

//             </div>
//             <br></br>
//             <div className="form-group">
//               <h2 className="custom-text">Version number</h2>

//               <input
//                 type="number"
//                     maxLength={10}
//                    pattern="\g{10}"
//                 name="versionnumber"
//                 placeholder="versionnumber"
                 
//                 value={version_number}
//                 onChange={(e) => {
//                    let value= e.target.value.replace(/\D/g,'');
//                    value=value.slice(0,10);
//                   setVersionNumber(value);
//                 }}
//                 className="custom-input"
//                 required
//               />
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

// export default Section1;


import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Section1({ setAdminId }) {
  const [name_of_research_principal, setNameOfResearchPrincipal] = useState("");
  const [department, setDepartment] = useState("");
  const [title, setTitle] = useState("");
  const [review_requested, setReviewRequested] = useState("");
  const [protocol_number, setProtocolNumber] = useState("");
  const [version_number, setVersionNumber] = useState("");
  const [date, setDate] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const navigate = useNavigate();

  const handleFinalSubmit = async () => {
    try {
      const userResponse = await axios.post("http://localhost:5001/administrativee_details", {
        name_of_research_principal,
        department,
        title,
        review_requested,
        protocol_number,
        version_number,
        date,
      });
      const idd = userResponse.data.idd;
      console.log("User created:", userResponse.data);
      setAdminId(idd);
      navigate("/Section12");
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  const handlePreview = (e) => {
    e.preventDefault();
    setShowPreview(true);
  };

  const handleEdit = () => {
    setShowPreview(false);
  };

  if (showPreview) {
    return (
      <div className="form-container">
        <div className="h">
          <h2 className="h">Preview</h2>
          <p><strong>A.Name of Research principal:</strong> {name_of_research_principal}</p>
          <p><strong>B.Department:</strong> {department}</p>
          <p><strong>C.Date:</strong> {date}</p>
          <p><strong>D.Title:</strong> {title}</p>
          <p><strong>E.Review requested:</strong> {review_requested}</p>
          <p><strong>F.Protocol Number:</strong>  {protocol_number}</p>
          <p><strong>G.Version Number:</strong>  {version_number}</p>
<br></br>
          <button className="custom-button" onClick={handleFinalSubmit}>Submit</button>
          <br></br>
          <button className="custom-button ml-2" onClick={handleEdit}>Edit</button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <div className="h">
        <h5 className="h2">SECTION A - BASIC INFORMATION</h5>
        <h1 className="h">1.ADMINISTRATIVE DETAILS</h1>

        <form onSubmit={handlePreview}>
          <h2 className="h">A. Name of Researcher/Principal</h2>
          <input
            type="text"
            placeholder="Enter Name"
            value={name_of_research_principal}
            onChange={(e) => {
              let value = e.target.value.replace(/[^A-Za-z\s]/g, '');
              value = value.slice(0, 40);
              if (value.length > 0) value = value.charAt(0).toUpperCase() + value.slice(1);
              setNameOfResearchPrincipal(value);
            }}
            className="name"
            required
          />

          <div className="form-row">
            <div className="form-group">
              <h2 className="h">B. Department</h2>
              <input
                type="text"
                value={department}
                placeholder="Enter Department"
                onChange={(e) => {
                  let value = e.target.value.replace(/[^A-Za-z\s]/g, '');
                  value = value.slice(0, 28);
                  if (value.length > 0) value = value.charAt(0).toUpperCase() + value.slice(1);
                  setDepartment(value);
                }}
                className="custom-input"
                required
              />
            </div>

            <div className="form-group">
              <h2 className="h">C. Date</h2>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="custom-title"
                required
              />
            </div>

            <div className="form-group">
              <h2 className="h">D. Title</h2>
              <input
                type="text"
                value={title}
                placeholder="Enter title"
                onChange={(e) => {
                  let value = e.target.value.replace(/[^A-Za-z\s]/g, '');
                  value = value.slice(0, 28);
                  if (value.length > 0) value = value.charAt(0).toUpperCase() + value.slice(1);
                  setTitle(value);
                }}
                className="custom-title"
                required
              />
            </div>
          </div>

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
              <h2 className="custom-text">F. Protocol number</h2>
              <input
                type="number"
                value={protocol_number}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, '');
                  value = value.slice(0, 10);
                  setProtocolNumber(value);
                }}
                className="custom-title"
                 placeholder="Enter protocol"
                required
              />
            </div>

            <div className="form-group">
              <h2 className="custom-text">G. Version number</h2>
              <input
                type="number"
                value={version_number}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, '');
                  value = value.slice(0, 10);
                  setVersionNumber(value);
                }}
                className="custom-input"
                 placeholder="Enter versio "
                required
              />
            </div>
          </div>
<br></br>
          <button type="submit" className="custom-button">Preview</button>
        </form>
      </div>
    </div>
  );
}

export default Section1;
