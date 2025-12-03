// src/components/Navbar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe, ChevronDown, MapPin } from 'lucide-react';
import { translations, allModels } from '../constants'; // 确保路径正确，可能需要调整为 '@/constants'
import Logo from './Logo';
import { MainCategory } from '../types'; // 确保路径正确，可能需要调整为 '@/types'
import { useLanguage } from '@/context/LanguageContext';

const Navbar: React.FC = () => {
    // 1. 使用 Context 获取语言状态
    const { lang, toggleLang } = useLanguage();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredNav, setHoveredNav] = useState<string | null>(null);
    const [isNavHovered, setIsNavHovered] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<MainCategory>("electric-motorcycle");
    const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
    const [regionOpen, setRegionOpen] = useState(false);

    const t = translations[lang];
    // 2. 替换 useLocation
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    // 注意：pathname 变化时关闭菜单
    useEffect(() => {
        setIsMenuOpen(false);
        setMobileExpandedItem(null);
        setRegionOpen(false);
    }, [pathname]);

    const handleNavClick = () => {
        setIsMenuOpen(false);
        setHoveredNav(null);
        setMobileExpandedItem(null);
        setRegionOpen(false);
    };

    // NAV STRUCTURE
    const navStructure = [
        {
            id: 'models',
            title: t.nav.models,
            path: '/models',
            type: 'mega'
        },
        {
            id: 'tech',
            title: t.nav.tech,
            path: '/tech',
            type: 'link'
        },
        {
            id: 'service',
            title: t.nav.service,
            path: '/service',
            type: 'dropdown',
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2669&auto=format&fit=crop",
            items: [
                { name: t.nav.items.contactSupport, path: '/contact#info' },
                { name: t.nav.items.afterSales, path: '/service#policy' },
                { name: t.nav.items.faq, path: '/service#faq' }
            ]
        },
        {
            id: 'about',
            title: t.nav.about,
            path: '/about',
            type: 'complex-dropdown',
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop",
            groups: [
                {
                    title: t.nav.aboutGroups.overview,
                    items: [
                        { name: t.nav.items.intro, path: '/about#intro' },
                        { name: t.nav.items.global, path: '/about#global' },
                        { name: t.nav.items.history, path: '/about#history' },
                        { name: t.nav.items.culture, path: '/about#culture' },
                        { name: t.nav.items.honor, path: '/about#honor' }
                    ]
                },
                {
                    title: t.nav.aboutGroups.news,
                    items: [
                        { name: t.nav.items.newsList, path: '/news' }
                    ]
                },
                {
                    title: t.nav.aboutGroups.business,
                    items: [
                        { name: t.nav.items.partners, path: '/business#partners' },
                        { name: t.nav.items.franchise, path: '/business#franchise' }
                    ]
                }
            ]
        }
    ];

    const categories: {id: MainCategory, label: string}[] = [
        { id: 'new-national-standard', label: '新国标' },
        { id: 'electric-motorcycle', label: '电摩' },
        { id: 'tricycle', label: '三轮车' }
    ];

    // Helper to filter models for mega menu preview
    const getPreviewModels = (cat: MainCategory) => {
        return allModels.filter(m => m.category === cat).slice(0, 5);
    };

    const isDetailPage =
        (pathname?.startsWith('/models/') && pathname !== '/models') ||
        (pathname?.startsWith('/news/') && pathname !== '/news');

    const isDarkText = scrolled || isNavHovered || isMenuOpen || isDetailPage;

    return (
        <>
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${isDarkText ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}
                onMouseEnter={() => setIsNavHovered(true)}
                onMouseLeave={() => { setIsNavHovered(false); setHoveredNav(null); }}
            >
                <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
                    {/* Link 使用 href */}
                    <Link href="/" className="flex items-center" onClick={handleNavClick}>
                        <Logo className="h-8 md:h-10 w-auto" theme={isDarkText ? 'dark' : 'light'} />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8 font-medium h-full">
                        {navStructure.map((item) => (
                            <div key={item.id} className="h-full flex items-center" onMouseEnter={() => setHoveredNav(item.id)}>
                                <Link
                                    href={item.path}
                                    onClick={handleNavClick}
                                    className={`py-4 px-2 transition-all flex items-center text-sm lg:text-base cursor-pointer hover:text-pink-600 focus:outline-none ${isDarkText ? 'text-gray-800' : 'text-white/90 hover:text-white'} ${hoveredNav === item.id ? 'text-pink-600' : ''}`}
                                >
                                    {item.title}
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Region Selector */}
                        <div className="relative">
                            <button
                                onClick={() => setRegionOpen(!regionOpen)}
                                className={`flex items-center gap-1 text-sm font-medium transition-colors px-3 py-1.5 rounded-full hover:text-pink-600 ${isDarkText ? 'text-gray-700 hover:bg-gray-100' : 'text-white/90 hover:bg-white/20'}`}
                            >
                                <MapPin size={16} /><span>{t.nav.region.china}</span> <ChevronDown size={12} />
                            </button>
                            {regionOpen && (
                                <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-1 z-50 animate-fade-in-up">
                                    <button onClick={() => setRegionOpen(false)} className="w-full text-left px-4 py-2 text-sm text-pink-600 bg-pink-50 font-bold">{t.nav.region.china}</button>
                                    <a href="https://google.com" target="_blank" rel="noreferrer" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">{t.nav.region.global}</a>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={toggleLang}
                            className={`flex items-center gap-1 text-sm font-medium transition-colors px-3 py-1.5 rounded-full hover:text-pink-600 ${isDarkText ? 'text-gray-700 hover:bg-gray-100' : 'text-white/90 hover:bg-white/20'}`}
                        >
                            <Globe size={16} /><span>{lang === 'zh' ? 'EN' : '中文'}</span>
                        </button>
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${isDarkText ? 'text-gray-800' : 'text-white'}`}>
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* DESKTOP PANELS */}
                <div className="hidden md:block">
                    {navStructure.map(item => {
                        if (item.type === 'dropdown') {
                            return (
                                <div
                                    key={item.id}
                                    className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl transition-all duration-300 origin-top z-40 ${hoveredNav === item.id ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}
                                    onMouseEnter={() => setHoveredNav(item.id)}
                                    onMouseLeave={() => setHoveredNav(null)}
                                >
                                    <div className="container mx-auto px-6 py-8">
                                        <div className="flex max-w-4xl mx-auto">
                                            <div className="w-1/2 pr-8 border-r border-gray-100 flex flex-col justify-center">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6">{item.title}</h3>
                                                <div className="flex flex-col gap-2">
                                                    {item.items?.map((subItem, idx) => (
                                                        <Link key={idx} href={subItem.path} onClick={handleNavClick} className="text-gray-600 hover:text-pink-600 hover:bg-pink-50 py-3 px-4 rounded-lg transition-all text-base flex items-center justify-between group">
                                                            <span>{subItem.name}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="w-1/2 pl-8">
                                                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-lg group">
                                                    <img src={item.image} alt="Menu Feature" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                                        <span className="text-white font-bold text-lg">Always by your side</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        if (item.type === 'complex-dropdown') {
                            return (
                                <div
                                    key={item.id}
                                    className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl transition-all duration-300 origin-top z-40 ${hoveredNav === item.id ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}
                                    onMouseEnter={() => setHoveredNav(item.id)}
                                    onMouseLeave={() => setHoveredNav(null)}
                                >
                                    <div className="container mx-auto px-6 py-10">
                                        <div className="flex max-w-6xl mx-auto">
                                            <div className="w-2/3 pr-10 grid grid-cols-3 gap-8 border-r border-gray-100">
                                                {item.groups?.map((group, gIdx) => (
                                                    <div key={gIdx}>
                                                        <h4 className="font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 text-lg">{group.title}</h4>
                                                        <div className="flex flex-col gap-2">
                                                            {group.items.map((sub, sIdx) => (
                                                                <Link key={sIdx} href={sub.path} onClick={handleNavClick} className="text-gray-600 hover:text-pink-600 py-1 transition-colors text-sm block">
                                                                    {sub.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="w-1/3 pl-10">
                                                <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-lg group">
                                                    <img src={item.image} alt="About Feature" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                                        <span className="text-white font-bold text-lg">Since 1997</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        if (item.type === 'mega') {
                            return (
                                <div
                                    key={item.id}
                                    className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl transition-all duration-300 origin-top z-40 ${hoveredNav === 'models' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}
                                    onMouseEnter={() => setHoveredNav('models')}
                                    onMouseLeave={() => setHoveredNav(null)}
                                >
                                    <div className="container mx-auto px-6 py-8 h-[450px] flex">
                                        <div className="w-1/4 border-r border-gray-100/50 pr-6 flex flex-col space-y-2">
                                            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 px-4 cursor-pointer hover:text-pink-600">
                                                {t.mega.seriesTitle}
                                            </h3>
                                            {categories.map((cat) => (
                                                <button key={cat.id} onMouseEnter={() => setSelectedCategory(cat.id)} className={`text-left px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-200 ${selectedCategory === cat.id ? 'bg-pink-50 text-pink-600 font-bold shadow-sm' : 'text-gray-600 hover:bg-gray-50/80'}`}>
                                                    {cat.label}{selectedCategory === cat.id && <ChevronDown className="-rotate-90" size={16} />}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="w-3/4 pl-8 overflow-y-auto no-scrollbar">
                                            <h3 className="text-gray-900 font-bold text-xl mb-6 flex items-center">
                                                {categories.find(c => c.id === selectedCategory)?.label}<span className="ml-3 text-xs font-normal text-white bg-pink-500 px-2 py-0.5 rounded-full">{t.mega.hot}</span>
                                            </h3>
                                            <div className="grid grid-cols-3 gap-6">
                                                {getPreviewModels(selectedCategory).map((car, idx) => (
                                                    <Link key={idx} href={`/models/${car.id}`} onClick={handleNavClick} className="group cursor-pointer">
                                                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-50 mb-3 border border-gray-100 group-hover:border-pink-200 transition-all shadow-sm group-hover:shadow-md">
                                                            <img src={car.images.main} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                            <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-md text-[10px] px-2 py-1 rounded shadow-sm text-gray-700 font-medium">{car.tag}</div>
                                                        </div>
                                                        <div className="flex justify-between items-end">
                                                            <div>
                                                                <h4 className="font-bold text-gray-800 group-hover:text-pink-600 transition-colors">{car.name}</h4>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                                <Link href="/models" onClick={handleNavClick} className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 hover:border-pink-300 hover:bg-pink-50/30 transition-all cursor-pointer group aspect-[4/3] mb-8">
                                                    <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center mb-2 text-gray-400 group-hover:text-pink-500 transition-colors">
                                                        <MapPin size={20} />
                                                    </div>
                                                    <span className="text-sm text-gray-500 group-hover:text-pink-600 font-medium">{t.mega.viewAll}</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return null;
                    })}
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-24 px-6 overflow-y-auto`}>
                <div className="flex flex-col space-y-6 pb-20">
                    <div className="flex gap-4 border-b border-gray-100 pb-4">
                        <button className="bg-pink-50 text-pink-600 px-4 py-2 rounded-lg font-bold text-sm">中国大陆</button>
                        <a href="https://google.com" className="text-gray-500 px-4 py-2 rounded-lg font-medium text-sm">Global</a>
                    </div>

                    {navStructure.map((item) => (
                        <div key={item.id} className="border-b border-gray-100 pb-4">
                            {item.type === 'link' ? (
                                <Link href={item.path} onClick={handleNavClick} className="text-2xl font-bold text-gray-900 block">{item.title}</Link>
                            ) : (
                                <div className="flex flex-col">
                                    <button
                                        onClick={() => setMobileExpandedItem(mobileExpandedItem === item.id ? null : item.id)}
                                        className="flex justify-between items-center text-2xl font-bold text-gray-900 w-full"
                                    >
                                        {item.title}
                                    </button>

                                    {mobileExpandedItem === item.id && (
                                        <div className="mt-4 pl-4 space-y-3 animate-fade-in-up">
                                            {item.id === 'models' && (
                                                <div className="space-y-4">
                                                    <Link href="/models" onClick={handleNavClick} className="text-pink-600 font-bold block mb-2">查看全系车型</Link>
                                                    {categories.map(cat => (
                                                        <div key={cat.id}>
                                                            <p className="text-xs font-bold text-gray-400 uppercase mb-1">{cat.label}</p>
                                                            {getPreviewModels(cat.id).slice(0,3).map(model => (
                                                                <Link key={model.id} href={`/models/${model.id}`} onClick={handleNavClick} className="block py-1 text-gray-700">{model.name}</Link>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {item.type === 'dropdown' && item.items?.map((subItem, idx) => (
                                                <Link key={idx} href={subItem.path} onClick={handleNavClick} className="block text-gray-600 py-1 text-lg">
                                                    {subItem.name}
                                                </Link>
                                            ))}

                                            {item.type === 'complex-dropdown' && item.groups?.map((group, gIdx) => (
                                                <div key={gIdx} className="mb-4">
                                                    <p className="text-xs font-bold text-gray-400 uppercase mb-2">{group.title}</p>
                                                    {group.items.map((sub, sIdx) => (
                                                        <Link key={sIdx} href={sub.path} onClick={handleNavClick} className="block text-gray-600 py-1 text-lg">
                                                            {sub.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;