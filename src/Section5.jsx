// import { useState } from "react";

// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// import "./App.css";

// const Section5 = () => {
//   const [anticipated_type, setAnticipatedType] = useState("");
//   const [reimbursement_details, setReimbursementDetails] = useState("");
//   const [management_strategy, setManagementStrategy] = useState("");
//   const [participant_benefits, setParticipantBenefits] = useState("");
//   const [improvement_benefits, setImprovementBenefits] = useState("");
//   const [society_benefits, setSocietyBenefits] = useState("");

//   const navigate = useNavigate();
//   const Submit = async (e) => {
//     e.preventDefault();

//     try {
//       const userResponse = await axios.post(
//         "http://localhost:5001/benefits_and_risk",
//         {
//           improvement_benefits,
//           reimbursement_details,
//           management_strategy,
//           participant_benefits,
//           anticipated_type,
//           society_benefits,
//         }
//       );
//       const user_id = userResponse.data.user_id;
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
//     <div className="h">
//       <h1 className="h1">6.BENIFITS AND RISKS</h1>
//       <h1 className="h">
//         (a)(i).Are there any anticipated physical / social / psychological
//         discomforts / risk{" "}
//       </h1>
//       <form onSubmit={Submit}>
//         <label>
//           <input
//             type="radio"
//             name="enter anticipatedtype"
//             value="Yes"
//             checked={anticipated_type === "Yes"}
//             onChange={(e) => setAnticipatedType(e.target.value)}
//           />{" "}
//           {""}
//           Yes
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="enteranticipatedtype"
//             value="No"
//             checked={anticipated_type === "No"}
//             onChange={(e) => setAnticipatedType(e.target.value)}
//           />{" "}
//           {""}
//           No
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="anticipatedtype"
//             value="Na"
//             checked={anticipated_type === "Na"}
//             onChange={(e) => setAnticipatedType(e.target.value)}
//           />{" "}
//           {""}NA
//         </label>
//         <h5>if yes specify:</h5>
//         {/* Show input if "Yes" is selected */}
//         {anticipated_type === "Yes" && (
//           <>
//             <h3>Provide Reimbursement Details:</h3>
//             <input
//               type="text"
//               name="EnterreimbursementDetails"
//               placeholder="Enter details"
//               value={reimbursement_details}
//               onChange={(e) => setReimbursementDetails(e.target.value)}
//               className="custom-input"
//               required
//             />

//             <br />
//           </>
//         )}

//         <div className="formm-row">
//           <h3 className="h">i. Describe the risk management strategy: </h3>
//           <label>
//             <textarea
//               name="researchSummary"
//               placeholder="Enter research summary"
//               value={management_strategy}
//               onChange={(e) => setManagementStrategy(e.target.value)}
//               className="custom-textarea"
//               maxLength={600}
//               required
//             />
//             {""}
//           </label>
//         </div>

//         <h3>(b)Are there potential benefits from the study </h3>

//         <div className="formm-row">
//           <h4>For the participant</h4>
//           <div className="formm-row">
//             <label>
//               <input
//                 type="radio"
//                 name="EnterparticipantBenefit"
//                 value="Direct"
//                 checked={participant_benefits === "Direct"}
//                 onChange={(e) => setParticipantBenefits(e.target.value)}
//               />{" "}
//               Direct
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="participantBenefit"
//                 value="Indirect"
//                 checked={participant_benefits === "Indirect"}
//                 onChange={(e) => setParticipantBenefits(e.target.value)}
//               />{" "}
//               Indirect
//             </label>
//           </div>
//         </div>

//         <div className="formm-row">
//           <h4>For the society/ community</h4>
//           <div className="formm-row">
//             <label>
//               <input
//                 type="radio"
//                 name="societyBenefit"
//                 value="Direct"
//                 checked={society_benefits === "Direct"}
//                 onChange={(e) => setSocietyBenefits(e.target.value)}
//               />{" "}
//               Direct
//             </label>

//             <label>
//               <input
//                 type="radio"
//                 name="societyBenefit"
//                 value="Indirect"
//                 checked={society_benefits === "Indirect"}
//                 onChange={(e) => setSocietyBenefits(e.target.value)}
//               />{" "}
//               Indirect
//             </label>
//           </div>
//         </div>

//         <div className="formm-row">
//           <h4>For Improvement in science</h4>

//           <div className="formm-row">
//             <label>
//               <input
//                 type="radio"
//                 name="improvementBenefit"
//                 value="Direct"
//                 checked={improvement_benefits === "Direct"}
//                 onChange={(e) => setImprovementBenefits(e.target.value)}
//               />{" "}
//               Direct
//             </label>

//             <label>
//               <input
//                 type="radio"
//                 name="improvementBenefit"
//                 value="Indirect"
//                 checked={improvement_benefits === "Indirect"}
//                 onChange={(e) => setImprovementBenefits(e.target.value)}
//               />{" "}
//               Indirect
//             </label>
//           </div>
//         </div>

//         <button type="submit" className="custom-button">
//           Submit{" "}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Section5;









import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

const Section5 = (adminId) => {
  const [anticipated_type, setAnticipatedType] = useState("");
  const [reimbursement_details, setReimbursementDetails] = useState("");
  const [management_strategy, setManagementStrategy] = useState("");
  const [participant_benefits, setParticipantBenefits] = useState("");
  const [improvement_benefits, setImprovementBenefits] = useState("");
  const [society_benefits, setSocietyBenefits] = useState("");

  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();

  const handlePreview = (e) => {
    e.preventDefault();
    setShowPreview(true);
  };

  const handleEdit = () => {
    setShowPreview(false);
  };

  const handleSubmit = async () => {
    try {
      const userResponse = await axios.post(
        "http://localhost:5001/benefits_and_risk",
        {
          improvement_benefits,
          reimbursement_details,
          management_strategy,
          participant_benefits,
          anticipated_type,
          society_benefits,
          administrativeDetailId: adminId,
        }
      );
      console.log("User created:", userResponse.data);
      navigate("/Section6");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="form-container">
      <div className="h">
      <h3 className="h2">6.BENIFITS AND RISKS</h3>
      <p className="h">
        (a)(i).Are there any anticipated physical / social / psychological discomforts / risk{" "}
      </p>

      {!showPreview ? (
        <form onSubmit={handlePreview}>
          <label>
            <input
              type="radio"
              name="enter anticipatedtype"
              value="Yes"
              checked={anticipated_type === "Yes"}
              onChange={(e) => setAnticipatedType(e.target.value)}
              required
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="enteranticipatedtype"
              value="No"
              checked={anticipated_type === "No"}
              onChange={(e) => setAnticipatedType(e.target.value)}
            />{" "}
            No
          </label>
          <label>
            <input
              type="radio"
              name="anticipatedtype"
              value="Na"
              checked={anticipated_type === "Na"}
              onChange={(e) => setAnticipatedType(e.target.value)}
            />{" "}
            NA
          </label>

          <h5>if yes specify:</h5>
          {anticipated_type === "Yes" && (
            <>
              <h3>Provide Reimbursement Details:</h3>
              <input
                type="text"
                name="EnterreimbursementDetails"
                placeholder="Enter details"
                value={reimbursement_details}
                onChange={(e) => setReimbursementDetails(e.target.value)}
                className="custom-input"
                required
              />
              <br />
            </>
          )}

          <div className="formm-row">
            <h3 className="h">i. Describe the risk management strategy: </h3>
            <label>
              <textarea
                name="researchSummary"
                placeholder="Enter research summary"
                value={management_strategy}
                onChange={(e) => setManagementStrategy(e.target.value)}
                className="custom-textarea"
                maxLength={600}
                required
              />
              {""}
            </label>
          </div>

          <h3>(b)Are there potential benefits from the study</h3>

          <div className="formm-row">
            <h4>For the participant</h4>
            <div className="formm-row">
              <label>
                <input
                  type="radio"
                  name="EnterparticipantBenefit"
                  value="Direct"
                  checked={participant_benefits === "Direct"}
                  onChange={(e) => setParticipantBenefits(e.target.value)}
                />{" "}
                Direct
              </label>
              <label>
                <input
                  type="radio"
                  name="participantBenefit"
                  value="Indirect"
                  checked={participant_benefits === "Indirect"}
                  onChange={(e) => setParticipantBenefits(e.target.value)}
                />{" "}
                Indirect
              </label>
            </div>
          </div>

          <div className="formm-row">
            <h4>For the society/ community</h4>
            <div className="formm-row">
              <label>
                <input
                  type="radio"
                  name="societyBenefit"
                  value="Direct"
                  checked={society_benefits === "Direct"}
                  onChange={(e) => setSocietyBenefits(e.target.value)}
                />{" "}
                Direct
              </label>
              <label>
                <input
                  type="radio"
                  name="societyBenefit"
                  value="Indirect"
                  checked={society_benefits === "Indirect"}
                  onChange={(e) => setSocietyBenefits(e.target.value)}
                />{" "}
                Indirect
              </label>
            </div>
          </div>

          <div className="formm-row">
            <h4>For Improvement in science</h4>
            <div className="formm-row">
              <label>
                <input
                  type="radio"
                  name="improvementBenefit"
                  value="Direct"
                  checked={improvement_benefits === "Direct"}
                  onChange={(e) => setImprovementBenefits(e.target.value)}
                />{" "}
                Direct
              </label>
              <label>
                <input
                  type="radio"
                  name="improvementBenefit"
                  value="Indirect"
                  checked={improvement_benefits === "Indirect"}
                  onChange={(e) => setImprovementBenefits(e.target.value)}
                />{" "}
                Indirect
              </label>
            </div>
          </div>

          <button type="submit" className="custom-button">
            Preview
          </button>
        </form>
      ) : (
        <div className="preview-section">
          <h2 className="h">Preview Before Submit</h2>
          <p><strong>Anticipated Risk:</strong> {anticipated_type}</p>
          {anticipated_type === "Yes" && (
            <p><strong>Reimbursement Details:</strong> {reimbursement_details}</p>
          )}
          <p><strong>Risk Management Strategy:</strong> {management_strategy}</p>
          <p><strong>Participant Benefits:</strong> {participant_benefits}</p>
          <p><strong>Society Benefits:</strong> {society_benefits}</p>
          <p><strong>Scientific Benefits:</strong> {improvement_benefits}</p>

          <button onClick={handleEdit} className="custom-button">Edit</button>
          <button onClick={handleSubmit} className="custom-button">Submit</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Section5;
