import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Technology from "@/pages/Technology";
import About from "@/pages/About";
import Speaking from "@/pages/Speaking";
import DeEscalation from "@/pages/DeEscalation";
import Contact from "@/pages/Contact";
import { routes } from "@/lib/site";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          {import.meta.env.DEV && (
            <Route path={routes.technology} element={<Technology />} />
          )}
          <Route path={routes.about} element={<About />} />
          <Route path={routes.speaking} element={<Speaking />} />
          <Route path={routes.deEscalation} element={<DeEscalation />} />
          <Route path={routes.contact} element={<Contact />} />
          {/* Any unknown URL goes back to the home page */}
          <Route path="*" element={<Navigate to={routes.home} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
