"use client";
import React from "react";
import { useLayout } from "../layout/layout-context";
import Impresum from "../terms/impresum";

export default function Footer() {
  const { theme, globalSettings, pageData } = useLayout();
  const footer = globalSettings?.footer;

  return (
    <footer className="bg-secondary text-primary px-4 py-3 text-center">
      <ul className="list-unstyled">
        <li><a className="text-primary opacity-50" href="/impressum">Impressum</a></li>
        <li><a className="text-primary opacity-50" href="/terms">Splošni pogoji uporabe ter pravilnik o zasebnosti</a></li>
      </ul>
      <div className="opacity-50 fs-6 text-center">Zdrava.Rutina 2024</div>
    </footer>
  );
}
