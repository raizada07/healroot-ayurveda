function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 HealRoot Ayurveda. All rights reserved.</p>
      <div style={styles.links}>
        <a href="/about">About</a> | 
        <a href="/product">Product</a> | 
        <a href="/contact">Contact</a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#F7F1E5",
    textAlign: "center",
    color: "#4B3B2A",
    fontSize: "0.9rem",
  },
  links: {
    marginTop: "8px",
  },
};

export default Footer;
