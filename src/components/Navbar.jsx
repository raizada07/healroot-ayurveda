import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Apna logo.png path sahi rakhna

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <Link to="/">
          <img src={logo} height={110} alt="HealRoot Logo" style={styles.logoImage} />
        </Link>
      </div>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/product" style={styles.link}>Product</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem 2rem", // Pehle jyada padding thi isliye hil raha tha
    backgroundColor: "#f0cd0bee",
    boxShadow: "0 4px 6px rgba(86, 196, 172, 0.1)",
    position: "fixed", // Ab sticky se fixed karo
    top: 0,
    width: "97%",
    zIndex: 100,
    height: "100px", // Fixed height rakh do navbar ka
  },
  logo: {
    display: "flex",
    alignItems: "center",
    height: "100px",
  },
  logoText: {
    textDecoration: "none",
    color: "#7D6E4F",
    fontWeight: "bold",
    fontSize: "2rem",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    margin: 2,
    padding: 2,
  },
  link: {
    textDecoration: "none",
    color: "#4B3B2A",
    fontWeight: "500",
    fontSize: "1rem",
  },
  
};

export default Navbar;
