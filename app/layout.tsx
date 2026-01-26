import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import PageLoaderController from "./components/PageLoaderController";

export const metadata: Metadata = {
  title: "Absensi Karyawan",
  description: "Crush it Able The most popular Admin Dashboard template and ui kit",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        
        {/* Bootstrap Core and vendor */}
        <link rel="stylesheet" href="/assets/plugins/bootstrap/css/bootstrap.min.css" />
        
        {/* Plugins css */}
        <link rel="stylesheet" href="/assets/plugins/charts-c3/c3.min.css" />
        <link rel="stylesheet" href="/assets/plugins/jvectormap/jvectormap-2.0.3.css" />
        
        {/* Core css */}
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/theme4.css" id="stylesheet" />
        
        {/* Bootstrap 5 */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
          crossOrigin="anonymous"
        />
        
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="font-opensans">
        <PageLoaderController />
        {children}
        
        {/* jQuery and bootstrap js */}
        <Script src="/assets/bundles/lib.vendor.bundle.js" strategy="beforeInteractive" />
        
        {/* Plugin js files */}
        <Script src="/assets/bundles/apexcharts.bundle.js" strategy="lazyOnload" />
        <Script src="/assets/bundles/counterup.bundle.js" strategy="lazyOnload" />
        <Script src="/assets/bundles/knobjs.bundle.js" strategy="lazyOnload" />
        <Script src="/assets/bundles/c3.bundle.js" strategy="lazyOnload" />
        <Script src="/assets/bundles/flot.bundle.js" strategy="lazyOnload" />
        <Script src="/assets/bundles/jvectormap1.bundle.js" strategy="lazyOnload" />
        
        {/* Core js and page js */}
        <Script src="/assets/js/core.js" strategy="afterInteractive" />
        
        {/* Theme switcher function */}
        <Script id="theme-switcher" strategy="lazyOnload">
          {`
            window.setStyleSheet = function(url) {
              var stylesheet = document.getElementById("stylesheet");
              if (stylesheet) {
                stylesheet.setAttribute('href', url);
              }
            }
          `}
        </Script>
      </body>
    </html>
  );
}
