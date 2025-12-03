// src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'Benbao E-Scooter',
    description: 'Redefining Urban Mobility',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body suppressHydrationWarning={true}>
        {/* 这里不再使用 <ClientLayout> 包裹。
                    Keystatic 会直接渲染在这里，从而获得全屏体验。
                    普通页面会通过下级的 (site)/layout.tsx 重新获得 Layout。
                */}
        {children}

        {/* Script 放在这里是安全的，Keystatic 不会受影响 */}
        <Script
            type="module"
            src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"
            strategy="afterInteractive"
        />
        </body>
        </html>
    )
}