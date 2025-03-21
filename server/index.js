const express = require("express");
const app = express();
const cors = require("cors");
const { pool } = require("./db");

app.use(cors());
app.use(express.json());

app.post("/administrative_details", async (req, res) => {
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
      "INSERT INTO administrative_details (name_of_research_principal,department,title,review_requested,protocol_number,version_number,date) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id", // Returning only the id
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

    res.json({ id: newUser.rows[0].id }); // Sending only the id in response
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/funding_budget_and_details", async (req, res) => {
  console.log("starting request");
  try {
    const { total_estimated_budget, funding_source } = req.body; // Extracting name, email, age from request body
    const newUser = await pool.query(
      "INSERT INTO funding_budget_and_details(total_estimated_budget,funding_source) VALUES ($1,$2) RETURNING id",
      [total_estimated_budget, funding_source] // ✅ Corrected
    );

    console.log("end request");

    res.json({ id: newUser.rows[0].id }); // Sending only the id in response
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/investigatorss", async (req, res) => {
  console.log("starting request");
  try {
    const investigatorss = req.body; // Receive array of investigators

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

app.post("/overview_research", async (req, res) => {
  console.log("starting request");
  try {
    const { summary, type_of_study, file_name, external_laboratory, specify } =
      req.body; // Extracting name, email, age from request body
    const newUser = await pool.query(
      "INSERT INTO overview_research (summary,type_of_study,file_name,external_laboratory,specify) VALUES ($1,$2,$3,$4,$5) RETURNING id", // Returning only the id
      [summary, type_of_study, file_name, external_laboratory, specify]
    );
    console.log("end request");

    res.json({ overview_research_id: newUser.rows[0].overview_research_id }); // Sending only the id in response
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/participant_related_information", async (req, res) => {
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
    } = req.body; // Extracting name, email, age from request body
    const newUser = await pool.query(
      "INSERT INTO participant_related_information (type_of_participants,specifiy,justification,additional_safeguards,reimbursement_details,advertisement_details,payment_type, advertisement_type) VALUES ($1, $2,$3,$4,$5,$6,$7,$8) RETURNING id", // Returning only the id
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

    res.json({ _id: newUser.rows[0]._id }); // Sending only the id in response
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
    } = req.body; // Extracting name, email, age from request body
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

    res.json({ _id: newUser.rows[0]._id }); // Sending only the id in response
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/informed_consent", async (req, res) => {
  const {
    seeking_waiver_of_consent_type,
    languages,
    version_number,
    date,
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
    client = await pool.connect(); // Get DB connection

    const query = `
      INSERT INTO informed_consent (
        seeking_waiver_of_consent_type,
        languages,
        version_number,
        date,
        certificates,
        subject,
        specify,
        selected_elements
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id;
    `;
    const validLanguages = ["Telugu", "Hindi", "Urdu", "Anyotherspecify"]; // Exact ENUM values

    const formattedLanguage = validLanguages.includes(languages)
      ? languages
      : "Anyotherspecify"; // Default to a valid ENUM value

    const values = [
      seeking_waiver_of_consent_type || null, // Handle empty values as NULL
      formattedLanguage,
      version_number || null,
      date || null,
      certificates || null,
      subject || null,
      specify,
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
    if (client) client.release(); // Ensure DB connection is released
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
    } = req.body; // Extracting name, email, age from request body
    const newUser = await pool.query(
      "INSERT INTO  payment_compensation( waiver_consent_type,specify,compensation_research_of_type,specific ) VALUES ($1,$2,$3,$4) RETURNING id", // Returning only the id
      [waiver_consent_type, specify, compensation_research_of_type, specific]
    );
    console.log("end request");

    res.json({ id: newUser.rows[0].id }); // Sending only the id in response
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
    } = req.body; // Extracting name, email, age from request body
    const newUser = await pool.query(
      "INSERT INTO  storage_and_confidentiality(document_access_type,access_details,drugs_access_type, control_details ) VALUES ($1,$2,$3,$4) RETURNING id", // Returning only the id
      [document_access_type, access_details, drugs_access_type, control_details]
    );
    console.log("end request");

    res.json({ id: newUser.rows[0].id }); // Sending only the id in response
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/additional_information", async (req, res) => {
  console.log("starting request");
  try {
    const { support_type, additional } = req.body; // Extracting name, email, age from request body
    const newUser = await pool.query(
      "INSERT INTO additional_information ( support_type,additional) VALUES ($1,$2) RETURNING id", // Returning only the id
      [support_type, additional]
    );
    console.log("end request");

    res.json({ id: newUser.rows[0].id }); // Sending only the id in response
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
    } = req.body; // Extracting name, email, age from request body
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

    res.json({ id: newUser.rows[0].id }); // Sending only the id in response
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/declaration", async (req, res) => {
  const {
    selectedElements, // Ensure this matches the request body

    name_of_pi_research,
    file_name_1,
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
    client = await pool.connect(); // Get DB connection

    const query = `
            INSERT INTO declaration (
                selected_elements,  name_of_pi_research, 
                file_name_1, date_pi, name_of_co_pi_guide, file_name_2, date_co_pi, 
                name_of_co_investigator_1, file_name_3, date_co_inv_1, 
                name_of_co_investigator_2, file_name_4, date_co_inv_2
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 
                $11,$12,$13
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
        .join(",")}}`, // Corrected placement

      name_of_pi_research || null,
      file_name_1 || null,
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
    if (client) client.release(); // Ensure DB connection is released
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
