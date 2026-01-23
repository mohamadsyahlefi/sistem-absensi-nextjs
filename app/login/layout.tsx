// app/login/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Login - Absensi Karyawan',
    description: 'Login to Absensi Karyawan Dashboard',
}

export default function LoginLayout({
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