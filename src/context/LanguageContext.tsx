// src/context/LanguageContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Lang = 'zh' | 'en';

interface LanguageContextType {
    lang: Lang;
    toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>('zh');

    const toggleLang = () => {
        setLang((prev) => (prev === 'zh' ? 'en' : 'zh'));
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

// 这是一个自定义 Hook，方便我们在组件里直接使用
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}