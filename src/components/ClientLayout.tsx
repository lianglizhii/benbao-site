// src/components/ClientLayout.tsx
"use client";

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation'; // 引入路径钩子
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import { LanguageProvider } from '@/context/LanguageContext';

function LayoutContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // 🔥 关键判断：当前路径是不是以 /studio 开头？
    const isStudio = pathname?.startsWith('/studio');

    // 滚动逻辑 (仅在非 Studio 页面生效)
    useEffect(() => {
        if (isStudio) return; // 如果是后台，不处理滚动

        const hash = typeof window !== 'undefined' ? window.location.hash : '';
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, isStudio]);

    // 🔥 如果是 Studio 页面，直接返回内容，不加 Navbar/Footer/样式容器
    if (isStudio) {
        return <>{children}</>;
    }

    // 普通页面：显示完整的网站布局
    return (
        <div className="font-sans text-gray-800 antialiased overflow-x-hidden min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {children}
            </main>

            <BackToTop />
            <Footer />
        </div>
    );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            <LayoutContent>{children}</LayoutContent>
        </LanguageProvider>
    );
}