import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Training from "@/pages/Training";
import Distribution from "@/pages/Distribution";
import Consulting from "@/pages/Consulting";
import About from "@/pages/About";
import Speaking from "@/pages/Speaking";
import Contact from "@/pages/Contact";
import { routes } from "@/lib/site";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={routes.training} element={<Training />} />
          <Route path={routes.speaking} element={<Speaking />} />
          {/* Partnerships aren't public yet: whole distribution page is dev only */}
          {import.meta.env.DEV && (
            <Route path={routes.distribution} element={<Distribution />} />
          )}
          <Route path={routes.consulting} element={<Consulting />} />
          <Route path={routes.about} element={<About />} />
          {/* Old URLs */}
          <Route path="/de-escalation" element={<Navigate to={routes.training} replace />} />
          <Route path="/speaking-engagements" element={<Navigate to={routes.speaking} replace />} />
          <Route path={routes.contact} element={<Contact />} />
          {/* Any unknown URL goes back to the home page */}
          <Route path="*" element={<Navigate to={routes.home} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
