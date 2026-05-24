import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "GDPR Unsubscribe Compliance Checker",
  description: "Verify email unsubscribe links meet GDPR requirements. Scan email campaigns to ensure one-click unsubscribe compliance."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5c14d609-8e39-48b5-aed7-8d770dcdddb3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
