// import { useState } from "react";
// import "./App.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Section4 = (adminId) => {
//   const [type_of_participant, setTypeOfParticipant] = useState("");
//   const [justification, setJustification] = useState("");
//   const [specify, setSpecify] = useState("");
//   const [additional_safeguards, setAdditionalSafeguards] = useState("");
//   const [reimbursement_details, setReimbursementDetails] = useState("");
//   const [advertisement_type, setAdvertisementType] = useState("");
//   const [advertisement_details, setAdvertisementDetails] = useState("");
//   const [payment_type, setPaymentType] = useState("");

//   const navigate = useNavigate();
//   const Submit = async (e) => {
//     e.preventDefault();

//     try {
//       const userResponse = await axios.post(
//         "http://localhost:5001/participantt_related_information",
//         {
//           type_of_participant,
//           justification,
//           specify,
//           additional_safeguards,
//           reimbursement_details,
//           advertisement_details,

//           advertisement_type,
//           payment_type,
//           administrativeDetailId: adminId,
//         }
//       );
//       const idd = userResponse.data.idd;
//       console.log("User created:", userResponse.data);
//       navigate("/Section5");
//     } catch (error) {
//       console.error(
//         "Error:",
//         error.response ? error.response.data : error.message
//       );
//     }
//   };

//   return (
//     <div className="h">
//       <br></br>
//       <br></br>
//       <h3 className="h2">SECTION C - PARTICIPANT RELATED INFORMATION </h3>
//       <h3>5.Recruitment of Research Participants</h3>
//       <form onSubmit={Submit}>
//         <h3>(a)Type of Participants in the Study:</h3>
//         <select
//           name="participantType"
//           value={type_of_participant}
//           onChange={(e) => setTypeOfParticipant(e.target.value)}
//           className="custom-input"
//           required
//         >
//           <option value="">Select Participant Type</option>
//           <option value="healthy">Healthy Volunteer</option>
//           <option value="patient">Patient</option>
//           <option value="vulnerable">Vulnerable Person / Special Groups</option>
//           <option value="others">Others (Specify)</option>
//         </select>

//         <br />

//         {/* Show input if "Others" is selected */}
//         {type_of_participant === "others" && (
//           <>
//             <h3>Specify Other Participant Type:</h3>
//             <input
//               type="text"
//               name="otherParticipantDetails"
//               placeholder="Enter details"
//               value={specify}
//               onChange={(e) => setSpecify(e.target.value)}
//               className="custom-input"
//               required
//             />
//             <br />
//           </>
//         )}

//         <h3 className="h">
//           (b). If study includes Vulnerable population, then{" "}
//         </h3>
//         <div>
//           <h3 className="h">i. Provide justification for inclusion: </h3>
//           <textarea
//             name="researchSummary"
//             placeholder="Enter research summary"
//             value={justification}
//             onChange={(e) => setJustification(e.target.value)}
//             className="custom-textarea"
//             maxLength={600}
//             required
//           />
//         </div>

//         <div>
//           <h3 className="h">
//             ii. Are there any additional safeguards to protect research
//             participants?{" "}
//           </h3>

//           <textarea
//             name="participantSummary"
//             placeholder="Enterparticipantsummary"
//             value={additional_safeguards}
//             onChange={(e) => setAdditionalSafeguards(e.target.value)}
//             className="custom-textarea"
//             maxLength={600}
//             required
//           />
//         </div>

//         {/* (c) Reimbursement Selection */}
//         <h3>
//           (c).Is there any reimbursement/payment to the subject for
//           participation?
//         </h3>
//         <label>
//           <input
//             type="radio"
//             name=""
//             value="Yes"
//             checked={payment_type === "Yes"}
//             onChange={(e) => setPaymentType(e.target.value)} // ✅ FIXED
//           />{" "}
//           Yes
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="reimbursement"
//             value="No"
//             checked={payment_type === "No"}
//             onChange={(e) => setPaymentType(e.target.value)} // ✅ FIXED
//           />{" "}
//           No
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="paymentType"
//             value="Na"
//             checked={payment_type === "Na"}
//             onChange={(e) => setPaymentType(e.target.value)} // ✅ FIXED
//           />{" "}
//           NA
//         </label>
//         <br />

//         {/* Show input if "Yes" is selected */}
//         {payment_type === "Yes" && (
//           <>
//             <h3>Provide Reimbursement Details:</h3>
//             <input
//               type="text"
//               name="reimbursementDetails"
//               placeholder="Enter details"
//               value={reimbursement_details} // ✅ Use state instead of "no"
//               onChange={(e) => setReimbursementDetails(e.target.value)}
//               className="custom-input"
//               required
//             />

//             <br />
//           </>
//         )}
//         <h3>(d)Will advertisement will be used recruit subjects</h3>

//         <label>
//           <input
//             type="radio"
//             name="advertisement"
//             value="Yes"
//             checked={advertisement_type === "Yes"}
//             onChange={(e) => setAdvertisementType(e.target.value)}
//           />{" "}
//           Yes
//         </label>

//         <label>
//           <input
//             type="radio"
//             name="advertisement"
//             value="No"
//             checked={advertisement_type === "No"}
//             onChange={(e) => setAdvertisementType(e.target.value)}
//           />
//           {""}
//           No
//         </label>

//         {advertisement_type === "Yes" && (
//           <>
//             <h3>advertisementDetails</h3>
//             <input
//               type="text"
//               name="advertisementDetails"
//               placeholder="EnterDetails"
//               value={advertisement_details}
//               onChange={(e) => setAdvertisementDetails(e.target.value)}
//               className="custom-input"
//               required
//             />

//             <br />
//           </>
//         )}

//         <button type="submit" className="custom-button">
//           Submit{" "}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Section4;


import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Section4 = ({ adminId }) => {
  const [type_of_participant, setTypeOfParticipant] = useState("");
  const [justification, setJustification] = useState("");
  const [specify, setSpecify] = useState("");
  const [additional_safeguards, setAdditionalSafeguards] = useState("");
  const [reimbursement_details, setReimbursementDetails] = useState("");
  const [advertisement_type, setAdvertisementType] = useState("");
  const [advertisement_details, setAdvertisementDetails] = useState("");
  const [payment_type, setPaymentType] = useState("");
  const [isPreview, setIsPreview] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userResponse = await axios.post(
        "http://localhost:5001/participantt_related_information",
        {
          type_of_participant,
          justification,
          specify,
          additional_safeguards,
          reimbursement_details,
          advertisement_type,
          advertisement_details,
          payment_type,
          administrativeDetailId: adminId,
        }
      );
      console.log("User created:", userResponse.data);
      navigate("/Section5");
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  return (

    <div className="form-container">
    <div className="h">
     
      <h3 className="h2">SECTION C - PARTICIPANT RELATED INFORMATION</h3>
      <h3>5. Recruitment of Research Participants</h3>

      {!isPreview ? (
        <form onSubmit={(e) => { e.preventDefault(); setIsPreview(true); }}>
          <h3>(a) Type of Participants in the Study:</h3>
          <select
            value={type_of_participant}
            onChange={(e) => setTypeOfParticipant(e.target.value)}
            className="custom-input"
            required
          >
            <option value="">Select Participant Type</option>
            <option value="healthy">Healthy Volunteer</option>
            <option value="patient">Patient</option>
            <option value="vulnerable">Vulnerable Person / Special Groups</option>
            <option value="others">Others (Specify)</option>
          </select>

          {type_of_participant === "others" && (
            <>
              <h3>Specify Other Participant Type:</h3>
              <input
                type="text"
                value={specify}
                onChange={(e) => setSpecify(e.target.value)}
                className="custom-input"
                required
              />
            </>
          )}

          <h3>(b) Justification for inclusion (if vulnerable):</h3>
          <textarea
            value={justification}
            onChange={(e) => setJustification(e.target.value)}
            className="custom-textarea"
            required
          />

          <h3>Additional Safeguards:</h3>
          <textarea
            value={additional_safeguards}
            onChange={(e) => setAdditionalSafeguards(e.target.value)}
            className="custom-textarea"
            required
          />

          <h3>(c) Reimbursement/Payment to the Subject:</h3>
          <label>
            <input
              type="radio"
              value="Yes"
              checked={payment_type === "Yes"}
              onChange={(e) => setPaymentType(e.target.value)}
            /> Yes
          </label>
          <label>
            <input
              type="radio"
              value="No"
              checked={payment_type === "No"}
              onChange={(e) => setPaymentType(e.target.value)}
            /> No
          </label>
          <label>
            <input
              type="radio"
              value="Na"
              checked={payment_type === "Na"}
              onChange={(e) => setPaymentType(e.target.value)}
            /> NA
          </label>

          {payment_type === "Yes" && (
            <>
              <h3>Provide Reimbursement Details:</h3>
              <input
                type="text"
                value={reimbursement_details}
                onChange={(e) => setReimbursementDetails(e.target.value)}
                className="custom-input"
                required
              />
            </>
          )}

          <h3>(d) Will Advertisement be used to recruit subjects?</h3>
          <label>
            <input
              type="radio"
              value="Yes"
              checked={advertisement_type === "Yes"}
              onChange={(e) => setAdvertisementType(e.target.value)}
            /> Yes
          </label>
          <label>
            <input
              type="radio"
              value="No"
              checked={advertisement_type === "No"}
              onChange={(e) => setAdvertisementType(e.target.value)}
            /> No
          </label>

          {advertisement_type === "Yes" && (
            <>
              <h3>Advertisement Details:</h3>
              <input
                type="text"
                value={advertisement_details}
                onChange={(e) => setAdvertisementDetails(e.target.value)}
                className="custom-input"
                required
              />
            </>
          )}

          <button type="submit" className="custom-button">Preview</button>
        </form>
      ) : (
        <div className="preview-section">
          <h3>Preview of Your Submission</h3>
          <p><strong>Type of Participant:</strong> {type_of_participant}</p>
          {type_of_participant === "others" && (
            <p><strong>Specify:</strong> {specify}</p>
          )}
          <p><strong>Justification:</strong> {justification}</p>
          <p><strong>Additional Safeguards:</strong> {additional_safeguards}</p>
          <p><strong>Payment Type:</strong> {payment_type}</p>
          {payment_type === "Yes" && (
            <p><strong>Reimbursement Details:</strong> {reimbursement_details}</p>
          )}
          <p><strong>Advertisement Used:</strong> {advertisement_type}</p>
          {advertisement_type === "Yes" && (
            <p><strong>Advertisement Details:</strong> {advertisement_details}</p>
          )}

          <button onClick={() => setIsPreview(false)} className="custom-button">Edit</button>
          <button onClick={handleSubmit} className="custom-button">Submit</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Section4;
