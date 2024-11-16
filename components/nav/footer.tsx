import React from "react";

export default function Footer() {

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
