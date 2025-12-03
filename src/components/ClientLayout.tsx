"use client";

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import { LanguageProvider } from '@/context/LanguageContext';
import { CarModel } from '@/types'; // 引入类型

function LayoutContent({ children, allModels }: { children: React.ReactNode; allModels: CarModel[] }) {
    const pathname = usePathname();
    const isStudio = pathname?.startsWith('/studio') || pathname?.startsWith('/keystatic'); // 确保后台也不显示

    useEffect(() => {
        if (isStudio) return;
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

    if (isStudio) {
        return <>{children}</>;
    }

    return (
        <div className="font-sans text-gray-800 antialiased overflow-x-hidden min-h-screen flex flex-col">
            {/* 👇 将数据传给 Navbar */}
            <Navbar allModels={allModels} />

            <main className="flex-grow">
                {children}
            </main>

            <BackToTop />
            <Footer />
        </div>
    );
}

// 👇 接收 allModels 并传给内部组件
export default function ClientLayout({
                                         children,
                                         allModels
                                     }: {
    children: React.ReactNode;
    allModels: CarModel[]
}) {
    return (
        <LanguageProvider>
            <LayoutContent allModels={allModels}>{children}</LayoutContent>
        </LanguageProvider>
    );
}