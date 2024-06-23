import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { BarLoader } from "react-spinners";
import LoginPage from "./containers/LoginPage";
import Home from "./containers/Home";
import NotFoundPage from "./containers/NotFoundPage";
import AccessDeniedPage from "./containers/AccessDeniedPage";// done with google translation

const PrivateRoute = ({ element: Element, isAuthenticated }) => {
  return isAuthenticated ? <Element /> : <Navigate to="/access-denied" />;

};

const App = () => {
  const { isAuthenticated, isLoading, error } = useAuth0();

  const googleTranslateElementInit = () => {
    if (window.google && window.google.translate) {
      const existingElement = document.getElementById("google_translate_element");
      if (existingElement) {
        existingElement.innerHTML = "";
      }

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    }
  };

  useEffect(() => {
    if (!document.getElementById("google-translate-script")) {
      const addScript = document.createElement("script");
      addScript.id = "google-translate-script";
      addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    } else {
      googleTranslateElementInit();
    }
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <BarLoader loading={isLoading} size={150} />
        <p style={{ marginTop: "20px" }}>Loading, please wait...</p>
      </div>
    );
  }

  if (error) {
    console.error("Authentication error:", error);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          color: "red",
        }}
      >
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="flex" style={{ position: "relative" }}>
      <div
        id="google_translate_element"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 1000,
          background: "white",
          padding: "5px",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      ></div>
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/dashboard/*"
            element={<PrivateRoute element={Home} isAuthenticated={isAuthenticated} />}
          />
          <Route path="/access-denied" element={<AccessDeniedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;