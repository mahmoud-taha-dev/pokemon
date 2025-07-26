import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { QueryProvider } from "@/utils/providers/query-provider.tsx";
import Router from "./routes.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <QueryProvider>
        <RouterProvider router={Router} />
      </QueryProvider>
    </StrictMode>,
  );
}
