export default function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About HealRoot Ayurveda</h1>
      <p style={styles.paragraph}>
        HealRoot Ayurveda is dedicated to providing natural and traditional Ayurvedic treatments
        for a variety of health issues. With years of trusted expertise and ancient remedies,
        we ensure that every product we deliver comes with purity, authenticity, and a deep-rooted connection
        to India’s traditional healing methods.
      </p>
      <p style={styles.paragraph}>
        Our specialty is treating **Boils (Baabsir)** and other chronic skin issues with time-tested
        herbal solutions. HealRoot’s mission is to promote wellness naturally, without the side effects
        of modern chemicals.
      </p>
      <h2 style={styles.subheading}>Why Choose Us?</h2>
      <ul style={styles.list}>
        <li>100% Ayurvedic & Herbal Ingredients</li>
        <li>No Side Effects, Safe for All Ages</li>
        <li>Affordable Treatment at ₹1999 Only</li>
        <li>Available for PAN India & International Shipping</li>
        <li>Dedicated Customer Support on WhatsApp</li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    paddingTop: "150px",
    padding: "2rem",
    backgroundColor: "#9ba78693",
    minHeight: "100vh",
    color: "#4B3B2A",
    fontFamily: "sans-serif",
    lineHeight: "1.6",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#2e7d32",
    marginBottom: "1rem",
    textAlign: "center",
  },
  subheading: {
    fontSize: "1.8rem",
    color: "#4B3B2A",
    marginTop: "2rem",
    marginBottom: "1rem",
  },
  paragraph: {
    fontSize: "1.1rem",
    marginBottom: "1rem",
  },
  list: {
    fontSize: "1rem",
    paddingLeft: "1.2rem",
    listStyle: "disc",
  },
};
