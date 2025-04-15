// import { useState } from "react";
// import "./App.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Section2 = () => {
//   // Principal Investigator state
//   const [piName, setPiName] = useState("");
//   const [piDesignation, setPiDesignation] = useState("");
//   const [piQualification, setPiQualification] = useState("");
//   const [piDepartment, setPiDepartment] = useState("");
//   const [piInstitution, setPiInstitution] = useState("");
//   const [piAddress, setPiAddress] = useState("");
//   const [piInvestigatorType, setPiInvestigatorType] = useState(
//     "Principal_Investigator"
//   ); 

//   // Co-investigator state
//   const [coiName, setCoiName] = useState("");
//   const [coiDesignation, setCoiDesignation] = useState("");
//   const [coiQualification, setCoiQualification] = useState("");
//   const [coiDepartment, setCoiDepartment] = useState("");
//   const [coiInstitution, setCoiInstitution] = useState("");
//   const [coiAddress, setCoiAddress] = useState("");
//   const [coiInvestigatorType, setCoiInvestigatorType] =
//     useState("Co-investigator");
// const[showPreview,setShowPreview]=useState("false");

//   const navigate = useNavigate();

//   const Submit = async (e) => {
//     e.preventDefault();

//     try {
//       const investigatorss = [
//         {
//           name: piName,
//           designation: piDesignation,
//           qualification: piQualification,
//           department: piDepartment,
//           institution: piInstitution,
//           address: piAddress,
//           investigator_type: piInvestigatorType,
//         },
//         {
//           name: coiName,
//           designation: coiDesignation,
//           qualification: coiQualification,
//           department: coiDepartment,
//           institution: coiInstitution,
//           address: coiAddress,
//           investigator_type: coiInvestigatorType,
//         },
//       ];

//       await axios.post("http://localhost:5001/investigatorss", investigatorss);

//       console.log("Investigators created");
//       navigate("/");
//     } catch (error) {
//       console.error(
//         "Error:",
//         error.response ? error.response.data : error.message
//       );
//     }
//   };

//   const handlePreview = (e) => {
//     e.preventDefault();
//     setShowPreview(true);
//   };

//   const handleEdit=()=> {
//     setShowPreview(false);
//   }

//   if (showPreview) {

//     return (

//   )}
//   return (
//     <div className="form-container">
//       <h2 className="h">G.Details of Investigators / Researcher(s): </h2>
//       <form onSubmit={Submit}>
//         <div className="form-row">
//           {/* Principal Investigator */}
//           <div className="form-group">
//             <h3 className="h">Principal Investigator / Researcher:</h3>
//             <input
//               type="text"
//               placeholder="Enter Name"
//               value={piName}
//               onChange={(e) => setPiName(e.target.value)}
//               className="custom-input"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Enter Designation"
//               value={piDesignation}
//               onChange={(e) => setPiDesignation(e.target.value)}
//               className="custom-input"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Qualification"
//               value={piQualification}
//               onChange={(e) => setPiQualification(e.target.value)}
//               className="custom-input"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Department"
//               value={piDepartment}
//               onChange={(e) => setPiDepartment(e.target.value)}
//               className="custom-input"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Institution"
//               value={piInstitution}
//               onChange={(e) => setPiInstitution(e.target.value)}
//               className="custom-input"
//               required
//             />
//             <textarea
//               placeholder="Address"
//               value={piAddress}
//               onChange={(e) => setPiAddress(e.target.value)}
//               className="custom-textarea"
//               required
//             />
//           </div>
//           {/* Co-investigator */}
//           <div className="form-group">
//             <h3 className="h">Co-investigator(s) / Guide(s):</h3>
//             <input
//               type="text"
//               placeholder="Name"
//               value={coiName}
//               onChange={(e) => setCoiName(e.target.value)}
//               className="custom-input"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Designation"
//               value={coiDesignation}
//               onChange={(e) => setCoiDesignation(e.target.value)}
//               className="custom-input"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Qualification"
//               value={coiQualification}
//               onChange={(e) => setCoiQualification(e.target.value)}
//               className="custom-input"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Department"
//               value={coiDepartment}
//               onChange={(e) => setCoiDepartment(e.target.value)}
//               className="custom-input"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Institution"
//               value={coiInstitution}
//               onChange={(e) => setCoiInstitution(e.target.value)}
//               className="custom-input"
//               required
//             />
//             <textarea
//               placeholder="Address"
//               value={coiAddress}
//               onChange={(e) => setCoiAddress(e.target.value)}
//               className="custom-textarea"
//               required
//             />
//           </div>
//         </div>
//         <button type="submit" className="custom-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Section2;


import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Section2 = () => {

  const [piName, setPiName] = useState("");
  const [piDesignation, setPiDesignation] = useState("");
  const [piQualification, setPiQualification] = useState("");
  const [piDepartment, setPiDepartment] = useState("");
  const [piInstitution, setPiInstitution] = useState("");
  const [piAddress, setPiAddress] = useState("");
  const [piInvestigatorType] = useState("Principal_Investigator");


  const [coiName, setCoiName] = useState("");
  const [coiDesignation, setCoiDesignation] = useState("");
  const [coiQualification, setCoiQualification] = useState("");
  const [coiDepartment, setCoiDepartment] = useState("");
  const [coiInstitution, setCoiInstitution] = useState("");
  const [coiAddress, setCoiAddress] = useState("");
  const [coiInvestigatorType] = useState("Co-investigator");

  const [showPreview, setShowPreview] = useState(false);

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
        <h2 className="h">Preview </h2>

        <div className="h">
          <h3>Principal Investigator:</h3>
          <p><strong>Name:</strong> {piName}</p>
          <p><strong>Designation:</strong> {piDesignation}</p>
          <p><strong>Qualification:</strong> {piQualification}</p>
          <p><strong>Department:</strong> {piDepartment}</p>
          <p><strong>Institution:</strong> {piInstitution}</p>
          <p><strong>Address:</strong> {piAddress}</p>
        </div>

        <div className="h">
          <h3>Co-investigator:</h3>
          <p><strong>Name:</strong> {coiName}</p>
          <p><strong>Designation:</strong> {coiDesignation}</p>
          <p><strong>Qualification:</strong> {coiQualification}</p>
          <p><strong>Department:</strong> {coiDepartment}</p>
          <p><strong>Institution:</strong> {coiInstitution}</p>
          <p><strong>Address:</strong> {coiAddress}</p>
        </div>

        <button onClick={Submit} className="custom-button">Submit</button>
        <button onClick={handleEdit} className="custom-button">Edit</button>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h3 className="h2">G. Details of Investigators / Researcher(s): </h3>
      <form>
        <div className="form-row">
          <div className="h">
            <h3>Principal Investigator / Researcher:</h3>
            <input type="text" placeholder="Enter Name" value={piName} onChange={(e) => setPiName(e.target.value)} required className="custom-input" />
            <input type="text" placeholder="Enter Designation" value={piDesignation} onChange={(e) => setPiDesignation(e.target.value)} required className="custom-input" />
            <input type="text" placeholder="Qualification" value={piQualification} onChange={(e) => setPiQualification(e.target.value)} required className="custom-input" />
            <input type="text" placeholder="Department" value={piDepartment} onChange={(e) => setPiDepartment(e.target.value)} required className="custom-input" />
            <input type="text" placeholder="Institution" value={piInstitution} onChange={(e) => setPiInstitution(e.target.value)} required className="custom-input" />
            <textarea placeholder="Address" value={piAddress} onChange={(e) => setPiAddress(e.target.value)} required className="custom-textarea" />
          </div>

          <div className="h">
            <h3>Co-investigator(s) / Guide(s):</h3>
            <input type="text" placeholder="Name" value={coiName} onChange={(e) => setCoiName(e.target.value)} required className="custom-input" />
            <input type="text" placeholder="Designation" value={coiDesignation} onChange={(e) => setCoiDesignation(e.target.value)} required className="custom-input" />
            <input type="text" placeholder="Qualification" value={coiQualification} onChange={(e) => setCoiQualification(e.target.value)} required className="custom-input" />
            <input type="text" placeholder="Department" value={coiDepartment} onChange={(e) => setCoiDepartment(e.target.value)} required className="custom-input" />
            <input type="text" placeholder="Institution" value={coiInstitution} onChange={(e) => setCoiInstitution(e.target.value)} required className="custom-input" />
            <textarea placeholder="Address" value={coiAddress} onChange={(e) => setCoiAddress(e.target.value)} required className="custom-textarea" />
          </div>
        </div>

        <button onClick={handlePreview} className="custom-button">
          Preview
        </button>
      </form>
    </div>
  );
};

export default Section2;
