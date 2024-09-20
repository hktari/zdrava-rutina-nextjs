"use client";
import React from "react";
import { useLayout } from "../layout/layout-context";

export default function Footer() {
  const { theme, globalSettings, pageData } = useLayout();
  const footer = globalSettings?.footer;

  return (
    <footer className={""}>
    
    </footer>
  );
}
