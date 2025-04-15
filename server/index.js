const express = require("express");
const app = express();
const cors = require("cors");

const { pool } = require("./db");


app.use(cors());
app.use(express.json());

// app.post("/administrative_details", async (req, res) => {
//   console.log("starting request");
//   try {
//     const {
//       name_of_research_principal,
//       department,
//       title,
//       review_requested,
//       protocol_number,
//       version_number,
//       date,
//     } = req.body;

//     const newUser = await pool.query(
//       "INSERT INTO administrative_details (name_of_research_principal,department,title,review_requested,protocol_number,version_number,date) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id", // Returning only the id
//       [
//         name_of_research_principal,
//         department,
//         title,
//         review_requested,
//         protocol_number,
//         version_number,
//         date,
//       ]
//     );
//     console.log("end request");

//     res.json({ id: newUser.rows[0].id }); 
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });




app.post("/administrativee_details", async (req, res) => {
  console.log("starting request");
  try {
    const {
      name_of_research_principal,
      department,
      title,
      review_requested,
      protocol_number,
      version_number,
      date,
    } = req.body;

    const newUser = await pool.query(
      "INSERT INTO administrativee_details (name_of_research_principal,department,title,review_requested,protocol_number,version_number,date) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING idd", // Returning only the id
      [
        name_of_research_principal,
        department,
        title,
        review_requested,
        protocol_number,
        version_number,
        date,
      ]
    );
    console.log("end request");

    res.json({ idd: newUser.rows[0].idd }); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});



app.post("/funding_budgett_and_details", async (req, res) => {
  console.log("starting request");
  try {
    const { total_estimated_budget, funding_source } = req.body; 
    const newUser = await pool.query(
      "INSERT INTO funding_budgett_and_details(total_estimated_budget,funding_source) VALUES ($1,$2) RETURNING ids",
      [total_estimated_budget, funding_source] 
    );

    console.log("end request");

    res.json({ ids: newUser.rows[0].ids }); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


app.get("/get_administrative_details", async (req, res) => {

});
app.get("/funding_budget_and_details/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM funding_budget_and_details WHERE foreign_key =$1", [
      id,
    ]);

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/investigatorss", async (req, res) => {
  console.log("starting request");
  try {
    const investigatorss = req.body; 

    for (const investigator of investigatorss) {
      const {
        name,
        designation,
        qualification,
        department,
        investigator_type,
        institution,
        address,
      } = investigator;
      await pool.query(
        "INSERT INTO investigatorss(name, designation, qualification, department, investigator_type, institution, address) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        [
          name,
          designation,
          qualification,
          department,
          investigator_type,
          institution,
          address,
        ]
      );
    }

    console.log("end request");
    res.json({ message: "Investigatorss created" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/overvieww_research", async (req, res) => {
  console.log("starting request");
  try {
    const { summary, type_of_study,  external_laboratory, specify ,administrativeDetailId,} =
      req.body; 
    const newUser = await pool.query(
      "INSERT INTO overvieww_research (summary,type_of_study,external_laboratory,specify,administrativee_details_idd) VALUES ($1,$2,$3,$4,$5) RETURNING id", // Returning only the id
      [summary, type_of_study, external_laboratory, specify,administrativeDetailId]
    );
    console.log("end request");

    res.json({ overvieww_research_id: newUser.rows[0].overview_research_id }); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/participantt_related_information", async (req, res) => {
  console.log("starting request");
  try {
    const {
      type_of_participants,
      specifiy,
      justification,
      additional_safeguards,
      reimbursement_details,
      advertisement_details,
      payment_type,
      advertisement_type,
    } = req.body; 
    const newUser = await pool.query(
      "INSERT INTO participantt_related_information (type_of_participants,specifiy,justification,additional_safeguards,reimbursement_details,advertisement_details,payment_type, advertisement_type) VALUES ($1, $2,$3,$4,$5,$6,$7,$8) RETURNING idd", // Returning only the id
      [
        type_of_participants,
        specifiy,
        justification,
        additional_safeguards,
        reimbursement_details,
        advertisement_details,
        payment_type,
        advertisement_type,
      ]
    );
    console.log("end request");

    res.json({ _id: newUser.rows[0]._id }); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/benefits_and_risk", async (req, res) => {
  console.log("starting request");
  try {
    const {
      reimbursement_details,
      management_strategy,
      anticipated_type,
      participant_benefits,
      society_benefits,
      improvement_benefits,
    } = req.body; 
    const newUser = await pool.query(
      "INSERT INTO benefits_and_risk  (  reimbursement_details ,management_strategy,anticipated_type, participant_benefits,society_benefits,improvement_benefits ) VALUES ($1, $2,$3,$4,$5,$6) RETURNING id", // Returning only the id
      [
        reimbursement_details,
        management_strategy,
        anticipated_type,
        participant_benefits,
        society_benefits,
        improvement_benefits,
      ]
    );
    console.log("end request");

    res.json({ _id: newUser.rows[0]._id }); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
app.post("/informedd_consent", async (req, res) => {
  const {
    seeking_waiver_of_consent_type,
    version_number,
    date,
    version_1, // Corrected from version_1 to version1
    date_1,    // Corrected from date_1 to date1
    version_2, // Corrected from version_2 to version2
    date_2,    // Corrected from date_2 to date2
    version_3, // Corrected from version_3 to version3
    date_3,    // Corrected from date_3 to date3
    languages,
    certificates,
    subject,
    specify,
    selectedElements,
  } = req.body;

  if (!selectedElements || selectedElements.length === 0) {
    return res.status(400).json({ error: "selectedElements is required" });
  }

  let client;

  try {
    client = await pool.connect();
    const query = `
      INSERT INTO informedd_consent (
        seeking_waiver_of_consent_type,
        languages,
        specify,
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
        selected_elements
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING id;
    `;
    const validLanguages = ["Telugu", "Hindi", "Urdu", "AnyOtherSpecify"];

    const formattedLanguage = validLanguages.includes(languages)
      ? languages
      : "AnyOtherSpecify";

    const values = [
      seeking_waiver_of_consent_type || null,
      formattedLanguage,
      specify || null,
      version_number || null,
      date || null,
      version_1 || null,
      date_1 || null,
      version_2 || null,
      date_2 || null,
      version_3 || null,
      date_3 || null,
      certificates || null,
      subject || null,
      `{${selectedElements
        .map((s) => `"${s.replace(/"/g, '\\"')}"`)
        .join(",")}}`,
    ];

    const result = await client.query(query, values);
    const insertedId = result.rows[0].id;

    res.status(200).json({
      message: "Informed consent data saved successfully",
      id: insertedId,
    });
  } catch (error) {
    console.error("Error saving informed consent data:", error);
    res.status(500).json({ error: "Database error" });
  } finally {
    if (client) client.release();
  }
});

app.post("/payment_compensation", async (req, res) => {
  console.log("starting request");
  try {
    const {
      waiver_consent_type,
      specify,
      compensation_research_of_type,
      specific,
    } = req.body; 
    const newUser = await pool.query(
      "INSERT INTO  payment_compensation( waiver_consent_type,specify,compensation_research_of_type,specific ) VALUES ($1,$2,$3,$4) RETURNING id", // Returning only the id
      [waiver_consent_type, specify, compensation_research_of_type, specific]
    );
    console.log("end request");

    res.json({ id: newUser.rows[0].id });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/storage_and_confidentiality", async (req, res) => {
  console.log("starting request");
  try {
    const {
      document_access_type,
      access_details,
      drugs_access_type,
      control_details,
      sample_access_type,
      sample_details
    } = req.body; 
    const newUser = await pool.query(
      "INSERT INTO  storage_and_confidentiality(document_access_type,access_details,drugs_access_type, control_details,  sample_access_type,sample_details ) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id", // Returning only the id
      [document_access_type, access_details, drugs_access_type, control_details,  sample_access_type, sample_details]
    );
    console.log("end request");

    res.json({ id: newUser.rows[0].id }); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/additional_information", async (req, res) => {
  console.log("starting request");
  try {
    const { support_type, additional } = req.body; 
    const newUser = await pool.query(
      "INSERT INTO additional_information ( support_type,additional) VALUES ($1,$2) RETURNING id", 
      [support_type, additional]
    );
    console.log("end request");

    res.json({ id: newUser.rows[0].id }); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/administrative_requirements", async (req, res) => {
  console.log("starting request");
  try {
    const {
      documents,
      enclosure1,
      remarks1,
      investigator,
      enclosure2,
      remarks2,
      clinic,
      enclosure3,
      remarks3,
      clearance,
      enclosure4,
      remarks4,
      partners,
      enclosure5,
      remarks5,
      protocol,
      enclosure6,
      remarks6,
      translate,
      enclosure7,
      remarks7,
      minors,
      enclosure8,
      remarks8,
      proforma,
      enclosure10,
      remarks10,
      advertise,
      enclosure11,
      remarks11,
      insurance,
      enclosure12,
      remarks12,
    } = req.body;
    const newUser = await pool.query(
      "INSERT INTO administrative_requirements(documents,enclosure1,remarks1,investigator,enclosure2,remarks2,clinic,enclosure3,remarks3,clearance,enclosure4, remarks4,partners,enclosure5,remarks5,protocol,enclosure6,remarks6,translate,enclosure7,remarks7,minors,enclosure8,remarks8,proforma,enclosure10,remarks10,advertise,enclosure11,remarks11,insurance,enclosure12,remarks12) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33) RETURNING id", // Returning only the id
      [
        documents,
        enclosure1,
        remarks1,
        investigator,
        enclosure2,
        remarks2,
        clinic,
        enclosure3,
        remarks3,
        clearance,
        enclosure4,
        remarks4,
        partners,
        enclosure5,
        remarks5,
        protocol,
        enclosure6,
        remarks6,
        translate,
        enclosure7,
        remarks7,
        minors,
        enclosure8,
        remarks8,
        proforma,
        enclosure10,
        remarks10,
        advertise,
        enclosure11,
        remarks11,
        insurance,
        enclosure12,
        remarks12,
      ]
    );
    console.log("end request");

    res.json({ id: newUser.rows[0].id }); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/declaration", async (req, res) => {
  const {
    selectedElements, 

    name_of_pi_research,
 
    date_pi,
    name_of_co_pi_guide,
    file_name_2,
    date_co_pi,
    name_of_co_investigator_1,
    file_name_3,
    date_co_inv_1,
    name_of_co_investigator_2,
    file_name_4,
    date_co_inv_2,
  } = req.body;

  if (!selectedElements || selectedElements.length === 0) {
    return res.status(400).json({ error: "selectedElements is required" });
  }

  let client;

  try {
    client = await pool.connect(); 
    const query = `
            INSERT INTO declaration (
                selected_elements,  name_of_pi_research, 
                 date_pi, name_of_co_pi_guide, file_name_2, date_co_pi, 
                name_of_co_investigator_1, file_name_3, date_co_inv_1, 
                name_of_co_investigator_2, file_name_4, date_co_inv_2
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 
                $11,$12
            ) RETURNING id;
        `;

    const formatDate = (date) => {
      if (!date || date.trim() === "") return null;
      const parsedDate = new Date(date);
      return !isNaN(parsedDate) ? parsedDate.toISOString().split("T")[0] : null;
    };

    const values = [
      `{${selectedElements
        .map((s) => `"${s.replace(/"/g, '\\"')}"`)
        .join(",")}}`, 

      name_of_pi_research || null,
      
      formatDate(date_pi),
      name_of_co_pi_guide || null,
      file_name_2 || null,
      formatDate(date_co_pi),
      name_of_co_investigator_1 || null,
      file_name_3 || null,
      formatDate(date_co_inv_1),
      name_of_co_investigator_2 || null,
      file_name_4 || null,
      formatDate(date_co_inv_2),
    ];

    const result = await client.query(query, values);
    const insertedId = result.rows[0].id;

    res.status(200).json({
      message: "Declaration data saved successfully",
      id: insertedId,
    });
  } catch (error) {
    console.error("Error saving declaration data:", error);
    res.status(500).json({ error: "Database error" });
  } finally {
    if (client) client.release(); 
  }
});





app.post("/expedited_review", async (req, res) => {
  const {
    selectedElements, 

    protocol_number,
    version_number,
principal_investigator_name,
department,
title,

summary, 
name_of_co_investigator_1,
file_name,
date_1, 
date_2,

  } = req.body;

  if (!selectedElements || selectedElements.length === 0) {
    return res.status(400).json({ error: "selectedElements is required" });
  }

  let client;

  try {
    client = await pool.connect(); 
    const query = `
            INSERT INTO expedited_review (
                  selected_elements, protocol_number,
       version_number,
  principal_investigator_name,
  department,
  title,

  summary, 
  name_of_co_investigator_1,
  file_name,
  date_1, 
  date_2

            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 
                $11
            ) RETURNING id;
        `;

    const formatDate = (date) => {
      if (!date || date.trim() === "") return null;
      const parsedDate = new Date(date);
      return !isNaN(parsedDate) ? parsedDate.toISOString().split("T")[0] : null;
    };

    const values = [
      `{${selectedElements
        .map((s) => `"${s.replace(/"/g, '\\"')}"`)
        .join(",")}}`, 

      
      protocol_number || null,
       version_number || null,
  principal_investigator_name || null,
  department || null,
  title || null,

  summary ||null, 
  name_of_co_investigator_1 || null,
  file_name ||null,
  formatDate(date_1 ), 
  formatDate( date_2)
    ];

    const result = await client.query(query, values);
    const insertedId = result.rows[0].id;

    res.status(200).json({
      message: "Declaration data saved successfully",
      id: insertedId,
    });
  } catch (error) {
    console.error("Error saving declaration data:", error);
    res.status(500).json({ error: "Database error" });
  } finally {
    if (client) client.release(); 
  }
});




app.post("/requesting_waiver", async (req, res) => {
  const {
    selectedElements,  
    principal_investigator_name ,
 department,
 title ,
 summary ,

name_of_co_investigator_1 ,
file_name ,
date 


  } = req.body;

  if (!selectedElements || selectedElements.length === 0) {
    return res.status(400).json({ error: "selectedElements is required" });
  }

  let client;

  try {
    client = await pool.connect(); 
    const query = `
            INSERT INTO requesting_waiver(
                selected_elements ,  principal_investigator_name ,
 department,
 title ,
 summary,

name_of_co_investigator_1 ,
file_name ,
date 


            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8
            ) RETURNING id;
        `;

    const formatDate = (date) => {
      if (!date || date.trim() === "") return null;
      const parsedDate = new Date(date);
      return !isNaN(parsedDate) ? parsedDate.toISOString().split("T")[0] : null;
    };

    const values = [
      `{${selectedElements
        .map((s) => `"${s.replace(/"/g, '\\"')}"`)
        .join(",")}}`, 

      
        principal_investigator_name||null ,
        department||null,
        title ||null,
        summary ||null,
     
       name_of_co_investigator_1 ||null ,
       file_name ||null,
       formatDate (date) 
       
    ];

    const result = await client.query(query, values);
    const insertedId = result.rows[0].id;

    res.status(200).json({
      message: "Declaration data saved successfully",
      id: insertedId,
    });
  } catch (error) {
    console.error("Error saving declaration data:", error);
    res.status(500).json({ error: "Database error" });
  } finally {
    if (client) client.release(); 
  }
});



const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

















const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
require("dotenv").config(); 
const UserModel = require("./models/User");
const DeclarationModel = require("./models/DeclarationModel");
const ReviewModel = require("./models/ReviewModel");
const RequestingModel = require("./models/RequestingModel");

const app_mangoose = express();
app_mangoose.use(cors());
app_mangoose.use(express.json());
app_mangoose.use("/images", express.static("public"));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

console.log("MongoDB URI:", process.env.MONGO_URI);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
// /section single image*/

app_mangoose.post("/upload", upload.single("image"), async (req, res) => {
  try {
    let { id } = req.body;
    id = parseInt( id, 10);
   
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    
    const newUser = await UserModel.create({
      image: req.file.filename,
    id,

    });
    res.json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});



app_mangoose.post("/expedited_review_upload", upload.single("image"), async (req, res) => {
  try {
    let { id } = req.body;
    id = parseInt( id, 10);
   
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    
    const newUser = await ReviewModel.create({
      image: req.file.filename,
    id,

    });
    res.json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});




app_mangoose.post("/requesting_waiver_upload", upload.single("image"), async (req, res) => {
  try {
    let { id } = req.body;
    id = parseInt( id, 10);
   
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    
    const newUser = await RequestingModel.create({
      image: req.file.filename,
    id,

    });
    res.json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});






app_mangoose.post("/declaration_upload", upload.fields([
  {name: "image1", maxCount: 1},
  {name: "image2", maxCount: 1},
  {name: "image3", maxCount: 1},
  {name: "image4", maxCount: 1},
]), async (req, res) => {
  try {
 
    const newImages = await DeclarationModel.create({
      image1: req.files.image1 ? req.files.image1[0].filename : null,
      image2: req.files.image2 ? req.files.image2[0].filename : null,
      image3: req.files.image3 ? req.files.image3[0].filename : null,
      image4: req.files.image4 ? req.files.image4[0].filename : null,
    });
    res.json(newImages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


app_mangoose.listen(3001, () => {
  console.log("server is running 3001");
});

