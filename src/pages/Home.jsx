export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to HealRoot Ayurveda</h1>
      <p style={styles.subheading}>
        Trusted Solution for Boils (Baabsir), Piles & Skin Problems through Ancient Ayurvedic Formulas.
      </p>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Choose HealRoot?</h2>
        <ul style={styles.bullets}>
          <li>✅ 100% Ayurvedic, Herbal Ingredients</li>
          <li>✅ No Side Effects, Trusted Results</li>
          <li>✅ Prachin Vaidya’s Formula (200+ Years Old)</li>
          <li>✅ Cure Without Operation, Pain-Free</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.text}>
          Bringing Ancient Ayurvedic Wisdom to Modern Life.  
          HealRoot is committed to curing the root, not symptoms.  
          Thousands of happy patients are our proof.
        </p>
      </div>

      <div style={styles.ctaContainer}>
        <button style={styles.ctaButton}>See Our Products</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#9ba78693",
    minHeight: "100vh",
    paddingTop: "150px",
    paddingBottom: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "sans-serif",
    color: "#4B3B2A",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#2e7d32",
    marginBottom: "0.5rem",
    textAlign: "center",
  },
  subheading: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "2rem",
    textAlign: "center",
    maxWidth: "600px",
  },
  section: {
    margin: "2rem 0",
    maxWidth: "700px",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2rem",
    color: "#2e7d32",
    marginBottom: "1rem",
  },
  bullets: {
    listStyle: "none",
    padding: 0,
    lineHeight: "2rem",
    fontSize: "1rem",
    color: "#333",
    textAlign: "left",
  },
  text: {
    fontSize: "1rem",
    color: "#333",
    lineHeight: "1.8rem",
  },
  ctaContainer: {
    marginTop: "3rem",
  },
  ctaButton: {
    backgroundColor: "#2e7d32",
    color: "white",
    padding: "1rem 2.5rem",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
  },
};
