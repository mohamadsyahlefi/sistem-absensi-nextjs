// app/register/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register - Absensi Karyawan',
  description: 'Create new account for Absensi Karyawan',
}

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/plugins/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/theme4.css" id="stylesheet" />
      </head>
      <body className="font-opensans">
        {children}
        
        <script src="/assets/bundles/lib.vendor.bundle.js" async></script>
        <script src="/assets/js/core.js" async></script>
      </body>
    </html>
  )
}