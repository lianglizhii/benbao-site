// src/components/Footer.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { MessageSquare, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext'; // 引入 Context

const Footer: React.FC = () => {
    // 1. 获取语言状态
    const { lang } = useLanguage();

    const socialMediaData = [
        { name: "WeChat", color: "hover:bg-green-600", icon: <MessageSquare size={18} /> },
        { name: "Douyin", color: "hover:bg-black", icon: <span className="font-bold text-lg">♪</span> },
        { name: "RedNote", color: "hover:bg-red-500", icon: <span className="font-bold text-sm">Red</span> },
        { name: "Bilibili", color: "hover:bg-pink-400", icon: <span className="font-bold text-sm">Bili</span> }
    ];

    return (
        <footer className="bg-gray-100 pt-20 pb-10 border-t border-gray-200 mt-auto">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">

                    {/* Brand Column: Identity & Contact */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-2 flex flex-col items-start space-y-8 pr-0 lg:pr-8">
                        <div>
                            {/* Link to 改为 href */}
                            <Link href="/" className="flex items-center gap-2 mb-4">
                                <Logo className="h-8 w-auto" theme='dark' />
                            </Link>
                            <p className="text-gray-500 font-medium max-w-sm leading-relaxed">
                                {lang === 'zh' ? '三十年匠心制造，重新定义城市出行美学。' : '30 years of craftsmanship, redefining urban mobility aesthetics.'}
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                <Phone size={18} className="text-pink-600" />
                                {lang === 'zh' ? '服务热线' : 'Hotline'}
                            </h4>
                            <p className="text-2xl font-bold text-gray-900 mb-1">400-888-9999</p>
                            <p className="text-gray-400 text-xs">{lang === 'zh' ? '周一至周日 8:00 - 22:00' : 'Mon-Sun 8:00 - 22:00'}</p>
                        </div>

                        <div className="flex gap-3">
                            {socialMediaData.map((social, idx) => (
                                <a key={idx} href="#" className={`w-10 h-10 rounded-full bg-white text-gray-600 shadow-sm flex items-center justify-center transition-all hover:text-white hover:-translate-y-1 ${social.color}`} title={social.name}>
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="col-span-1">
                        <h4 className="font-bold text-gray-900 mb-6">{lang === 'zh' ? '产品系列' : 'Products'}</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="/models" className="hover:text-pink-600 transition-colors">{lang === 'zh' ? '探索车型' : 'Models'}</Link></li>
                            <li><Link href="/tech" className="hover:text-pink-600 transition-colors">{lang === 'zh' ? '创新技术' : 'Technology'}</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-bold text-gray-900 mb-6">{lang === 'zh' ? '关于奔宝' : 'About Us'}</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="/about#intro" className="hover:text-pink-600 transition-colors">{lang === 'zh' ? '走进奔宝' : 'Intro'}</Link></li>
                            <li><Link href="/about#global" className="hover:text-pink-600 transition-colors">{lang === 'zh' ? '全球布局' : 'Global'}</Link></li>
                            <li><Link href="/about#history" className="hover:text-pink-600 transition-colors">{lang === 'zh' ? '发展历程' : 'History'}</Link></li>
                            <li><Link href="/about#culture" className="hover:text-pink-600 transition-colors">{lang === 'zh' ? '企业文化' : 'Culture'}</Link></li>
                            <li><Link href="/about#honor" className="hover:text-pink-600 transition-colors">{lang === 'zh' ? '荣誉认证' : 'Honors'}</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-bold text-gray-900 mb-6">{lang === 'zh' ? '商务合作' : 'Business'}</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="/business#partners" className="hover:text-pink-600 transition-colors">{lang === 'zh' ? '合作伙伴' : 'Partners'}</Link></li>
                            <li><Link href="/business#franchise" className="hover:text-pink-600 transition-colors">{lang === 'zh' ? '经销商加盟' : 'Franchise'}</Link></li>
                            <li><Link href="/news" className="hover:text-pink-600 transition-colors">{lang === 'zh' ? '新闻资讯' : 'News'}</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-bold text-gray-900 mb-6">{lang === 'zh' ? '服务支持' : 'Service'}</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="/contact#info" className="hover:text-pink-600 transition-colors">{lang === 'zh' ? '联系客服' : 'Contact Support'}</Link></li>
                            <li><Link href="/service#policy" className="hover:text-pink-600 transition-colors">{lang === 'zh' ? '售后服务' : 'After Sales'}</Link></li>
                            <li><Link href="/service#faq" className="hover:text-pink-600 transition-colors">{lang === 'zh' ? '常见问题' : 'FAQ'}</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>© 2024 Benbao Electric Scooter. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/models" className="hover:text-pink-600 transition-colors">{lang === 'zh' ? '探索车型' : 'Models'}</Link>
                        <Link href="/tech" className="hover:text-pink-600 transition-colors">{lang === 'zh' ? '创新技术' : 'Technology'}</Link>
                        <Link href="/contact" className="hover:text-pink-600 transition-colors">{lang === 'zh' ? '联系我们' : 'Contact'}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;