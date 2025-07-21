export default function Contact() {
  const styles = {
    container: {
      backgroundColor: "#9ba78693",
      minHeight: "100vh",
      paddingTop: "100px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    heading: {
      fontSize: "3rem",
      color: "#4b3b2a",
      marginBottom: "10px",
      fontWeight: "600",
    },
    subheading: {
      fontSize: "1.2rem",
      color: "#7d6e4f",
      marginBottom: "30px",
    },
    info: {
      fontSize: "1.1rem",
      color: "#4b3b2a",
      lineHeight: "2.2",
    },
    button: {
      marginTop: "40px",
      padding: "15px 40px",
      backgroundColor: "#2e7d32",
      color: "#fff",
      borderRadius: "50px",
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: "500",
      transition: "all 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#1b5e20",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Get in Touch</h1>
      <p style={styles.subheading}>We are here to help you.</p>

      <div style={styles.info}>
        <p>📞 WhatsApp: +91 98765 43210</p>
        <p>📧 Email: info@healroot.com</p>
        <p>🏢 Address: Bhopal, Madhya Pradesh, India</p>
      </div>

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
        onMouseOver={(e) => {
          Object.assign(e.target.style, styles.buttonHover);
        }}
        onMouseOut={(e) => {
          Object.assign(e.target.style, styles.button);
        }}
      >
        Chat on WhatsApp
      </a>
    </div>
  );
}
