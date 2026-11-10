import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { BUSINESS, PRIVACY_POLICY, contactLinks, routes } from "@/lib/site";
import logoDark from "@/assets/Logo-Plain-Dark.svg";
import DevOnly from "./DevOnly";
import React from "react";

const columns = [
  {
    title: "Training",
    links: [
      { to: routes.deEscalation, label: "De-Escalation Training" },
      { to: routes.speaking, label: "Speaking Engagements" },
      { to: "/#approach", label: "Policing Consulting", devOnly: true },
    ],
  },
  {
    title: "Technology",
    links: [
      { to: routes.technology, label: "Police Technology" },
      { to: contactLinks.quote, label: "Request a Quote" },
      {
        to: contactLinks.manufacturer,
        label: "For Manufacturers",
        devOnly: false,
      },
    ],
    devOnly: true,
  },
  {
    title: "Company",
    links: [
      { to: routes.about, label: "About" },
      { to: routes.contact, label: "Contact", devOnly: false },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link to={routes.home}>
            <img src={logoDark} alt="EVS Solutions" className="h-14 w-auto" />
          </Link>
          <div className="mt-6 space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <MapPin className="size-4" /> {BUSINESS.city}, {BUSINESS.province}
              , Canada
            </p>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="flex items-center gap-2 hover:text-white"
            >
              <Mail className="size-4" /> {BUSINESS.email}
            </a>
            {BUSINESS.phone && (
              <a
                href={`tel:${BUSINESS.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone className="size-4" /> {BUSINESS.phone}
              </a>
            )}
          </div>
        </div>
        {columns.map((c) => {
          const Wrapper = c.devOnly ? DevOnly : React.Fragment;
          return (
            <Wrapper key={c.title}>
              <nav>
                <p className="text-sm font-semibold text-white">{c.title}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {c.links.map((l) => {
                    const Wrapper2 = l.devOnly ? DevOnly : React.Fragment;
                    return (
                      <Wrapper2 key={l.label}>
                        <li>
                          <Link to={l.to} className="hover:text-white">
                            {l.label}
                          </Link>
                        </li>
                      </Wrapper2>
                    );
                  })}
                </ul>
              </nav>
            </Wrapper>
          );
        })}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs md:flex-row">
          <p>
            © {new Date().getFullYear()} EVS Solutions. {BUSINESS.legalNote}.
          </p>
          <a href={PRIVACY_POLICY} target="_blank" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
