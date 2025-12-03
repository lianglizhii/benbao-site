// src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'
import Script from 'next/script' // 1. 引入 Script 组件

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
        <ClientLayout>
            {children}
        </ClientLayout>

        {/* 2. 添加 model-viewer 脚本 */}
        <Script
            type="module"
            src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"
            strategy="afterInteractive"
        />
        </body>
        </html>
    )
}