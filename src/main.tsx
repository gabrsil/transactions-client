import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "./RelayEnvironment";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Routes } from "./routes";
import { Toaster } from "./components/ui/toaster";

createRoot(document.getElementById("root")!).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <StrictMode>
      <Routes/>
      <Toaster />
    </StrictMode>
  </RelayEnvironmentProvider>
);
