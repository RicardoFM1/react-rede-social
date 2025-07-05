import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { MainContextProvider } from "./Context/MainContext.tsx";
import { Slide, ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer
      autoClose={3000}
      position="top-center" 
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick={false}
      rtl={false}
      draggable
      theme="light"
      transition={Slide}
      limit={1}
    />
    <BrowserRouter>
      <MainContextProvider>
        <App />
      </MainContextProvider>
    </BrowserRouter>
  </StrictMode>
);
