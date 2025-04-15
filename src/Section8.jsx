// import { useState } from "react";
// import "./App.css";

// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Section8 = () => {
//   const[sample_access_type,setSampleAccessType]=useState("");
//   const[sample_details,setSampleDetails]=useState("");

//   const [control_details, setControlDetails] = useState("");
//   const [access_details, setAccessDetails] = useState("");
//   const [drugs_access_type, setDrugsAccessType] = useState("");
//   const [document_access_type, setDocumentAccessType] = useState("");

//   const navigate = useNavigate();
//   const Submit = async (e) => {
//     e.preventDefault();
//     try {
//       const userResponse = await axios.post(
//         "http://localhost:5001/storage_and_confidentiality",
//         {
//           document_access_type,
//           access_details,
//           drugs_access_type,
//           control_details,
//           sample_access_type,
//           sample_details
//         }
//       );
//       const id = userResponse.data.id;
//       console.log("User created:", userResponse.data);
//       navigate("/");
//     } catch (error) {
//       console.error(
//         "Error:",
//         error.response ? error.response.data : error.message
//       );
//     }
//   };

//   return (
//     <div className="form-container">




// <h1 className="h1">9. STORAGE AND CONFIDENTIALITY </h1>

//       <h1 className="h">(a)Identifying Information: Study Involves samples / data.</h1>
      

//       <form onSubmit={Submit}>

//       <div className="h">
//           <h3 className="h">
          
//           </h3>
//           <div className="radio-group">
//             <label>
//               <input
//                 type="radio"
//                 name="sampleaccesstype"
//                 value="Yes"
//                 checked={sample_access_type === "Yes"}
//                 onChange={(e) => setSampleAccessType(e.target.value)}
//               />{" "}
//               Yes
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="sampleaccesstype"
//                 value="No"
//                 checked={sample_access_type === "No"}
//                 onChange={(e) => setSampleAccessType(e.target.value)}
//               />{" "}
//               No
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="sampleaccesstype"
//                 value="NA"
//                 checked={sample_access_type === "NA"}
//                 onChange={(e) => setSampleAccessType(e.target.value)}
//               />{" "}
//               NA
//             </label>
//           </div>
//         </div>
// <br></br>

//         {/* Show input if "Yes" is selected */}
//         {sample_access_type === "Yes" && (
//           <div className="h">
           
//             <label>
//             <input
//               type="radio"
//               name="sampledetails"
//               value="Unidentified"
//               checked={sample_details === "Unidentified"}
//               onChange={(e) => setSampleDetails(e.target.value)}
//             />{""}
//             Unidentified
//             </label>
        
//           <label>
//               <input
//                 type="radio"
//                 name="sampledetails"
//                 value="Identifiable"
//                 checked={sample_details === "Identifiable"}
//                 onChange={(e) => setSampleDetails(e.target.value)}
//               />{" "}
//          Identifiable
//             </label><br></br>
//             <br></br>
//             If identifiers must be retained, what additional precautions will be taken to ensure that
// access is limited / confidentiality is maintained? (e.g. data stored in a cabinet, password
// protected computer etc.) Kindly specify? 
//             </div>



//         )}
      
//         <div className="h">
//           <h3 className="h">
//             (b)Will the study documents be under access control?
//           </h3>
//           <div className="radio-group">
//             <label>
//               <input
//                 type="radio"
//                 name="accessControl"
//                 value="Yes"
//                 checked={document_access_type === "Yes"}
//                 onChange={(e) => setDocumentAccessType(e.target.value)}
//               />{" "}
//               Yes
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="accessControl"
//                 value="No"
//                 checked={document_access_type === "No"}
//                 onChange={(e) => setDocumentAccessType(e.target.value)}
//               />{" "}
//               No
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="accessControl"
//                 value="NA"
//                 checked={document_access_type === "NA"}
//                 onChange={(e) => setDocumentAccessType(e.target.value)}
//               />{" "}
//               NA
//             </label>
//           </div>
//         </div>

//         {/* Show input if "Yes" is selected */}
//         {document_access_type === "Yes" && (
//           <div className="h">
//             <h5>Specify Access Control Details:</h5>
//             <input
//               type="text"
//               name="accessDetails"
//               placeholder="Enter details"
//               value={control_details}
//               onChange={(e) => setControlDetails(e.target.value)}
//               className="custom-input"
//               required
//             />
//             <br />
//           </div>
//         )}

//         <div className="h">
//           <h3 className="h">
//             (c)Will the study drugs / devices be under access control?
//           </h3>
//           <div className="radio-group">
//             <label>
//               <input
//                 type="radio"
//                 name="drugsControl"
//                 value="Yes"
//                 checked={drugs_access_type === "Yes"}
//                 onChange={(e) => setDrugsAccessType(e.target.value)} //
//               />{" "}
//               Yes
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="drugsControl"
//                 value="No"
//                 checked={drugs_access_type === "No"}
//                 onChange={(e) => setDrugsAccessType(e.target.value)} //
//               />{" "}
//               No
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="drugsControl"
//                 value="NA"
//                 checked={drugs_access_type === "NA"}
//                 onChange={(e) => setDrugsAccessType(e.target.value)} //
//               />{" "}
//               NA
//             </label>
//           </div>
//         </div>

//         {drugs_access_type === "Yes" && (
//           <div className="h1">
//             <h5>Specify Access Control Details:</h5>
//             <input
//               type="text"
//               name="drugsDetails"
//               placeholder="Enter details"
//               value={access_details}
//               onChange={(e) => setAccessDetails(e.target.value)} //
//               className="custom-input"
//               required
//             />
//             <br />
//           </div>
//         )}

//         <button type="submit" className="custom-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Section8;



import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Section8 = (adminId) => {
  const [sample_access_type, setSampleAccessType] = useState("");
  const [sample_details, setSampleDetails] = useState("");
  const [control_details, setControlDetails] = useState("");
  const [access_details, setAccessDetails] = useState("");
  const [drugs_access_type, setDrugsAccessType] = useState("");
  const [document_access_type, setDocumentAccessType] = useState("");
  const [preview, setPreview] = useState(false); // Preview mode toggle

  const navigate = useNavigate();

  const handlePreview = (e) => {
    e.preventDefault();
    setPreview(true);
  };

  const handleEdit = () => {
    setPreview(false);
  };

  const handleSubmit = async () => {
    try {
      const userResponse = await axios.post(
        "http://localhost:5001/storage_and_confidentiality",
        {
          document_access_type,
          access_details,
          drugs_access_type,
          control_details,
          sample_access_type,
          sample_details,
          administrativeDetailId: adminId,
        }
      );
      const id = userResponse.data.id;
      console.log("User created:", userResponse.data);
      navigate("/Section9");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  if (preview) {
    return (
      <div className="h">
        <h1 className="h1">Preview Form - Section 8</h1>
        <p><strong>Sample Access Type:</strong> {sample_access_type}</p>
        {sample_access_type === "Yes" && (
          <>
            <p><strong>Sample Details:</strong> {sample_details}</p>
          </>
        )}
        <p><strong>Document Access Type:</strong> {document_access_type}</p>
        {document_access_type === "Yes" && (
          <p><strong>Control Details:</strong> {control_details}</p>
        )}
        <p><strong>Drugs Access Type:</strong> {drugs_access_type}</p>
        {drugs_access_type === "Yes" && (
          <p><strong>Access Details:</strong> {access_details}</p>
        )}

        <button className="custom-button" onClick={handleSubmit}>
          Submit
        </button>
        <button className="custom-button" onClick={handleEdit}>
          Edit
        </button>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h3 className="h2">9. STORAGE AND CONFIDENTIALITY</h3>
      <form onSubmit={handlePreview}>
        <div className="h">
          <h3 className="h">(a) Study Involves Samples / Data:</h3>
          <div className="radio-group">
            {["Yes", "No", "NA"].map((val) => (
              <label key={val}>
                <input
                  type="radio"
                  name="sampleaccesstype"
                  value={val}
                  checked={sample_access_type === val}
                  onChange={(e) => setSampleAccessType(e.target.value)}
                />{" "}
                {val}
              </label>
            ))}
          </div>
        </div>

        {sample_access_type === "Yes" && (
          <div className="h">
            <label>
              <input
                type="radio"
                name="sampledetails"
                value="Unidentified"
                checked={sample_details === "Unidentified"}
                onChange={(e) => setSampleDetails(e.target.value)}
              />
              Unidentified
            </label>
            <label>
              <input
                type="radio"
                name="sampledetails"
                value="Identifiable"
                checked={sample_details === "Identifiable"}
                onChange={(e) => setSampleDetails(e.target.value)}
              />
              Identifiable
            </label>
          </div>
        )}

        <div className="h">
          <h3 className="h">(b) Documents under access control?</h3>
          <div className="radio-group">
            {["Yes", "No", "NA"].map((val) => (
              <label key={val}>
                <input
                  type="radio"
                  name="accessControl"
                  value={val}
                  checked={document_access_type === val}
                  onChange={(e) => setDocumentAccessType(e.target.value)}
                />
                {val}
              </label>
            ))}
          </div>
        </div>

        {document_access_type === "Yes" && (
          <div className="h">
            <h5>Specify Access Control Details:</h5>
            <input
              type="text"
              name="accessDetails"
              value={control_details}
              onChange={(e) => setControlDetails(e.target.value)}
              className="custom-input"
              required
            />
          </div>
        )}

        <div className="h">
          <h3 className="h">(c) Study drugs/devices under access control?</h3>
          <div className="radio-group">
            {["Yes", "No", "NA"].map((val) => (
              <label key={val}>
                <input
                  type="radio"
                  name="drugsControl"
                  value={val}
                  checked={drugs_access_type === val}
                  onChange={(e) => setDrugsAccessType(e.target.value)}
                />
                {val}
              </label>
            ))}
          </div>
        </div>

        {drugs_access_type === "Yes" && (
          <div className="h1">
            <h5>Specify Access Control Details:</h5>
            <input
              type="text"
              name="drugsDetails"
              value={access_details}
              onChange={(e) => setAccessDetails(e.target.value)}
              className="custom-input"
              required
            />
          </div>
        )}

        <button type="submit" className="custom-button">
          Preview
        </button>
      </form>
    </div>
  );
};

export default Section8;
