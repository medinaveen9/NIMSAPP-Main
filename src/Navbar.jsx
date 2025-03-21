import { Link } from "react-router-dom";

function Navbar({ show }) {
  return (
    <nav className={`sidenav ${show ? "block" : "hidden"}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/section1">Basic Information</Link>
        </li>
        <li>
          <Link to="/section2">Details of Investigators/Researcher(s)</Link>
        </li>
        <li>
          <Link to="/section12">Funding Details And Budget</Link>
        </li>
        <li>
          <Link to="/section3">Research Related Information</Link>
        </li>
        <li>
          <Link to="/section4">Participant Related Information</Link>
        </li>
        <li>
          <Link to="/section5">Benifits And Risk</Link>
        </li>
        <li>
          <Link to="/section6">Informed Consent</Link>
        </li>
        <li>
          <Link to="/section7">Payment/Compensation</Link>
        </li>
        <li>
          <Link to="/section8">Study Document Access Control</Link>
        </li>
        <li>
          <Link to="/section9">Other Issues</Link>
        </li>
        <li>
          <Link to="/section10">Declaration And Checklist</Link>
        </li>
        <li>
          <Link to="/section11">Administartive Requirements</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
