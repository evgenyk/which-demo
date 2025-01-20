"use server";

import {
  getKindeWidget,
  getLogoUrl,
  type KindePageEvent,
} from "@kinde/infrastructure";
import React from "react";
// @ts-ignore
import { renderToString } from "react-dom/server.browser";
import Layout from "../../layout";

const styles: {
  container: React.CSSProperties;
  header: React.CSSProperties;
  loginForm: React.CSSProperties;
  heading: React.CSSProperties;
  description: React.CSSProperties;
  logo: React.CSSProperties;
  logoWrapper: React.CSSProperties;
} = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  header: {
    borderBottom: "1px solid #ccc",
    padding: "2rem",
  },
  loginForm: {
    maxWidth: "630px",
    marginInline: "auto",
    width: "100%",
    padding: "2rem",
  },
  heading: {
    fontWeight: "700",
    fontSize: "2.5rem",
    letterSpacing: "-0.5px",
  },
  description: {
    marginBottom: "1.5rem",
  },
  logo: {
    backgroundColor: "#fff",
    borderRadius: "50%",
    padding: "9px",
  },
  logoWrapper: {
    position: "absolute",
    top: "12px",
    left: "12px",
  },
};

const DefaultPage: React.FC<KindePageEvent> = ({ context, request }) => {
  return (
    <Layout context={context} request={request}>
      <div style={styles.container}>
        <div style={styles.header}>
          <img src={getLogoUrl()} alt="Which logo" width={110} height={25} />
        </div>
        <main style={styles.loginForm}>
          <div style={{ padding: "2rem" }}>
            <h2 style={styles.heading}>{context.widget.content.heading}</h2>
            <p style={styles.description}>
              {context.widget.content.description}
            </p>
            {getKindeWidget()}
          </div>
        </main>
      </div>
    </Layout>
  );
};

// Page Component
export default async function Page(event: KindePageEvent): Promise<string> {
  const page = await DefaultPage(event);
  return renderToString(page);
}
