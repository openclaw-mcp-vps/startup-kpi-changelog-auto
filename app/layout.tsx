import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KPI Changelog Auto — Auto-generate changelogs from KPI changes",
  description: "Monitors startup metrics dashboards and automatically creates customer-facing changelogs when key features impact KPIs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f9f1b3a9-2b7c-48e5-bea2-41c89f92dcfb"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
