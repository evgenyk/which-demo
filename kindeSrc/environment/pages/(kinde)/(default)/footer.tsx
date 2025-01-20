import React from "react";

const Footer = () => {
  const styles: {
    footer: React.CSSProperties;
    container: React.CSSProperties;
    topSection: React.CSSProperties;
    appSection: React.CSSProperties;
    problemSection: React.CSSProperties;
    heading: React.CSSProperties;
    subHeading: React.CSSProperties;
    description: React.CSSProperties;
    qrCode: React.CSSProperties;
    storeButtons: React.CSSProperties;
    storeButton: React.CSSProperties;
    contactButton: React.CSSProperties;
    linksSection: React.CSSProperties;
    linkColumn: React.CSSProperties;
    columnTitle: React.CSSProperties;
    link: React.CSSProperties;
    copyright: React.CSSProperties;
  } = {
    footer: {
      padding: "40px 20px",
      backgroundColor: "#fff",
      borderTop: "1px solid #e5e5e5",
      fontFamily: "Arial, sans-serif",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    topSection: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "40px",
      gap: "40px",
      flexWrap: "wrap",
    },
    appSection: {
      flex: "1",
      minWidth: "300px",
    },
    problemSection: {
      flex: "1",
      minWidth: "300px",
    },
    heading: {
      fontSize: "24px",
      marginBottom: "16px",
      color: "#333",
      fontWeight: "bold",
    },
    subHeading: {
      fontSize: "18px",
      marginBottom: "24px",
      color: "#333",
      fontWeight: "bold",
    },
    description: {
      fontSize: "16px",
      marginBottom: "20px",
      color: "#666",
      lineHeight: "1.5",
    },
    qrCode: {
      width: "150px",
      height: "150px",
      marginBottom: "20px",
    },
    storeButtons: {
      display: "flex",
      gap: "10px",
    },
    storeButton: {
      height: "40px",
    },
    contactButton: {
      backgroundColor: "#1E4597",
      color: "#fff",
      padding: "12px 24px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
    },
    linksSection: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "40px",
      marginBottom: "40px",
    },
    linkColumn: {
      display: "flex",
      flexDirection: "column",
    },
    columnTitle: {
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "16px",
      color: "#333",
    },
    link: {
      color: "#1E4597",
      textDecoration: "none",
      marginBottom: "12px",
      fontSize: "14px",
    },
    copyright: {
      textAlign: "right",
      fontSize: "14px",
      color: "#666",
      marginTop: "20px",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.topSection}>
          <div style={styles.appSection}>
            <h2 style={styles.heading}>Get the Which? app</h2>
            <p style={styles.description}>
              Get the power of Which? in your pocket by downloading our app,
              giving you on-the-go access to our reviews
            </p>
            <img
              src="/api/placeholder/150/150"
              alt="QR Code"
              style={styles.qrCode}
            />
            <div style={styles.storeButtons}>
              <img
                src="/api/placeholder/135/40"
                alt="Get it on Google Play"
                style={styles.storeButton}
              />
              <img
                src="/api/placeholder/135/40"
                alt="Download on the App Store"
                style={styles.storeButton}
              />
            </div>
          </div>
          <div style={styles.problemSection}>
            <h2 style={styles.heading}>Got a problem?</h2>
            <p style={styles.description}>
              Chat to a live agent or send us a message
            </p>
            <button style={styles.contactButton}>Contact us</button>
          </div>
        </div>

        <div style={styles.linksSection}>
          <div style={styles.linkColumn}>
            <h3 style={styles.columnTitle}>More from Which?</h3>
            <a href="/about" style={styles.link}>
              About
            </a>
            <a href="/how-we-run" style={styles.link}>
              How we are run
            </a>
            <a href="/podcasts" style={styles.link}>
              Podcasts
            </a>
            <a href="/newsletters" style={styles.link}>
              Newsletters
            </a>
            <a href="/careers" style={styles.link}>
              Careers
            </a>
            <a href="/sitemap" style={styles.link}>
              Sitemap
            </a>
            <a href="/communities" style={styles.link}>
              Which? Communities
            </a>
          </div>

          <div style={styles.linkColumn}>
            <h3 style={styles.columnTitle}>My account</h3>
            <a href="/manage-subscriptions" style={styles.link}>
              Manage subscriptions
            </a>
            <a href="/ask-which" style={styles.link}>
              Ask Which?
            </a>
          </div>

          <div style={styles.linkColumn}>
            <h3 style={styles.columnTitle}>For experts</h3>
            <a href="/consumer-insight" style={styles.link}>
              Consumer insight
            </a>
            <a href="/press-office" style={styles.link}>
              Press office
            </a>
            <a href="/policy" style={styles.link}>
              Policy
            </a>
          </div>

          <div style={styles.linkColumn}>
            <h3 style={styles.columnTitle}>For businesses</h3>
            <a href="/use-our-logo" style={styles.link}>
              Use our logo
            </a>
            <a href="/work-with-us" style={styles.link}>
              Work with us
            </a>
            <a href="/tradespeople" style={styles.link}>
              Tradespeople
            </a>
          </div>

          <div style={styles.linkColumn}>
            <h3 style={styles.columnTitle}>Our legal policies</h3>
            <a href="/accessibility" style={styles.link}>
              Accessibility
            </a>
            <a href="/terms-conditions" style={styles.link}>
              Terms & conditions
            </a>
            <a href="/privacy-policy" style={styles.link}>
              Privacy policy
            </a>
            <a href="/cookies" style={styles.link}>
              Cookies
            </a>
            <a href="/msa-statement" style={styles.link}>
              MSA statement
            </a>
          </div>

          <div style={styles.linkColumn}>
            <h3 style={styles.columnTitle}>Help</h3>
            <a href="/help-centre" style={styles.link}>
              Help centre
            </a>
            <a href="/faqs" style={styles.link}>
              FAQs
            </a>
            <a href="/subscriptions" style={styles.link}>
              Subscriptions
            </a>
          </div>
        </div>

        <div style={styles.copyright}>© Which? {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
};

export default Footer;
