// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// import { useState} from "react";
// import "./App.css";

// const Section12 = ({adminId}) => {
//   const [total_estimated_budget, setTotalEstimatedBudeget] = useState("");
//   const [funding_source, setFundingSource] = useState("");

//   // const [administrativeDetailId, setAdministrativeDetailId] = useState(""); // State for the foreign key
//   // const [adminDetailsOptions, setAdminDetailsOptions] = useState(" "); // State to hold options for the dropdown
//   const navigate = useNavigate();




//   const Submit = async (e) => {
//     e.preventDefault();


//     try {
//       const userResponse = await axios.post(
//         "http://localhost:5001/funding_budgett_and_details",
//         {
//           total_estimated_budget,
//           funding_source,
//           administrativeDetailId: adminId,
//         }
//       );
//       const ids = userResponse.data.ids;
//       console.log("User created:", userResponse.data);
 
//       navigate("/Section3");
//     } catch (error) {
//       console.error(
//         "Error:",
//         error.response ? error.response.data : error.message
//       );
//     }
//   };

//   return (
//     <div className="form-container">
//       <h1 className="h2">2. FUNDING DETAILS AND BUDGET</h1>
//       <form onSubmit={Submit}>
//         <label className="h">a. Total Estimated Study Budget:</label>
//         <input
//           type="number"
//           name="budget"
//           value={total_estimated_budget}
//           onChange={(e) => setTotalEstimatedBudeget(e.target.value)}
//           placeholder="Enter Budget Amount"
//           className="custom-input"
//           required
//         />

//         <br />

//         <label className="h">b. Funding Source:</label>
//         <select
//           name="fundingSource"
//           value={funding_source}
//           onChange={(e) => setFundingSource(e.target.value)}
//           className="custom-input"
//           required
//         >
//           <option value="">Select Funding Type</option>
//           <option value="self-funding">Self-funding</option>
//           <option value="institutional">Institutional funding</option>
//           <option value="agency">Funding agency</option>
//         </select>

//         <br />




        


//         <button type="submit" className="custom-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Section12;





import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./App.css";

const Section12 = ({ adminId }) => {
  const [total_estimated_budget, setTotalEstimatedBudget] = useState("");
  const [funding_source, setFundingSource] = useState("");
  const [showPreview, setShowPreview] = useState(false); 

  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();

    try {
      const userResponse = await axios.post(
        "http://localhost:5001/funding_budgett_and_details",
        {
          total_estimated_budget,
          funding_source,
          administrativeDetailId: adminId,
        }
      );
      console.log("User created:", userResponse.data);
      navigate("/Section3");
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
        <h1 className="h2">Preview - Funding Details and Budget</h1>

        <div className="h">
          <p><strong>Total Estimated Study Budget:</strong> ₹{total_estimated_budget}</p>
          <p><strong>Funding Source:</strong> {funding_source}</p>
        </div>

        <button onClick={Submit} className="custom-button">Confirm & Submit</button>
        <button onClick={handleEdit} className="custom-button">Edit</button>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h1 className="h2">2. FUNDING DETAILS AND BUDGET</h1>
      <form>
        <label className="h">a. Total Estimated Study Budget:</label>
        <input
          type="number"
          name="budget"
          value={total_estimated_budget}
          onChange={(e) => setTotalEstimatedBudget(e.target.value)}
          placeholder="Enter Budget Amount"
          className="custom-input"
          required
        />
        <br />

        <label className="h">b. Funding Source:</label>
        <select
          name="fundingSource"
          value={funding_source}
          onChange={(e) => setFundingSource(e.target.value)}
          className="custom-input"
          required
        >
          <option value="">Select Funding Type</option>
          <option value="self-funding">Self-funding</option>
          <option value="institutional">Institutional funding</option>
          <option value="agency">Funding agency</option>
        </select>
        <br />

        <button onClick={handlePreview} className="custom-button">
          Preview
        </button>
      </form>
    </div>
  );
};

export default Section12;
