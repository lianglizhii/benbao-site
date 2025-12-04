// src/app/HomeClient.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Zap, Battery, Shield, Award, CheckCircle, Phone, Calendar, ArrowRight } from 'lucide-react';
import { translations } from '@/constants';
import { SlideData, NewsItem } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import FadeIn from '@/components/FadeIn';

export default function HomeClient({ latestNews }: { latestNews: NewsItem[] }) {
    const { lang } = useLanguage();
    const [currentSlide, setCurrentSlide] = useState(0);
    const t = translations[lang];

    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const bannerSlides: SlideData[] = [
        { id: 1, image: '/banner/banner1.JPG', titleMain: lang === 'zh' ? "好看" : "Stylish", titleSub: lang === 'zh' ? "更耐用" : "& Durable", description: lang === 'zh' ? "奔宝电动车 - 时尚骑行新定义" : "Redefining Urban Riding Fashion", buttonText: lang === 'zh' ? "了解更多" : "Learn More" },
        { id: 2, image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2670&auto=format&fit=crop", titleMain: lang === 'zh' ? "强劲" : "Powerful", titleSub: lang === 'zh' ? "新动力" : "Dynamics", description: lang === 'zh' ? "全新一代矢量电机，征服城市坡道" : "New Vector Motor, Conquer the City Slopes", buttonText: lang === 'zh' ? "探索性能" : "Performance" },
        { id: 3, image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop", titleMain: lang === 'zh' ? "智能" : "Smart", titleSub: lang === 'zh' ? "新出行" : "Mobility", description: lang === 'zh' ? "APP智能互联，解锁更多玩法" : "App Connectivity, Unlock More Fun", buttonText: lang === 'zh' ? "体验科技" : "Technology" }
    ];

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);

    useEffect(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => { nextSlide(); }, 5500);
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [currentSlide]);

    return (
        <div className="animate-fade-in-up">

            {/* --- Banner 区域 --- */}
            <header className="relative w-full h-screen min-h-[600px] bg-gray-900 overflow-hidden group">
                {bannerSlides.map((slide, index) => {
                    const isActive = index === currentSlide;
                    return (
                        <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                            <div className="absolute inset-0 overflow-hidden">
                                <img src={slide.image} alt={slide.titleMain} className={`w-full h-full object-cover object-center transition-transform duration-[10000ms] ease-out ${isActive ? 'scale-110' : 'scale-100'}`} />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                            </div>
                            <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
                                <div className="max-w-2xl space-y-8 pt-20">
                                    <h1 className={`text-5xl md:text-7xl font-bold leading-tight text-white transition-all duration-1000 delay-300 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                        {slide.titleMain} <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">{slide.titleSub}</span>
                                    </h1>
                                    <p className={`text-xl md:text-2xl text-gray-200 font-light tracking-wide border-l-4 border-pink-500 pl-4 transition-all duration-1000 delay-500 transform ${isActive ? 'translate-x-0 opacity-90' : '-translate-x-10 opacity-0'}`}>{slide.description}</p>
                                    <div className={`pt-4 transition-all duration-1000 delay-700 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                        <Link href="/models" className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 flex items-center gap-3 w-fit">
                                            {slide.buttonText} <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="absolute top-0 left-0 h-full w-[15%] z-30 flex items-center justify-start pl-6 group/left pointer-events-none">
                    <button onClick={prevSlide} className="pointer-events-auto p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-pink-600 hover:border-pink-600 transition-all duration-500 opacity-0 -translate-x-4 group-hover/left:opacity-100 group-hover/left:translate-x-0"><ChevronLeft size={32} /></button>
                </div>
                <div className="absolute top-0 right-0 h-full w-[15%] z-30 flex items-center justify-end pr-6 group/right pointer-events-none">
                    <button onClick={nextSlide} className="pointer-events-auto p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-pink-600 hover:border-pink-600 transition-all duration-500 opacity-0 translate-x-4 group-hover/right:opacity-100 group-hover/right:translate-x-0"><ChevronRight size={32} /></button>
                </div>
                <div className="absolute bottom-12 left-6 md:left-20 flex space-x-2 z-20">
                    {bannerSlides.map((_, idx) => (
                        <button key={idx} onClick={() => setCurrentSlide(idx)} className="group relative h-1 w-12 bg-white/20 rounded-full overflow-hidden transition-all duration-300 hover:h-2">
                            <div className={`absolute top-0 left-0 h-full bg-pink-500 transition-all duration-500 ease-out ${currentSlide === idx ? 'w-full' : 'w-0'}`}></div>
                        </button>
                    ))}
                </div>
            </header>

            {/* --- Stylish Section (好看板块) - 修复重叠问题 --- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center mb-16">
                    <FadeIn>
                        <h2 className="text-pink-600 font-bold text-xl mb-2">{t.sections.look}</h2>
                        <h3 className="text-4xl font-bold text-gray-900 mb-4">{t.sections.lookTitle}</h3>
                        <p className="text-gray-500 max-w-2xl mx-auto">{t.sections.lookDesc}</p>
                    </FadeIn>
                </div>

                <div className="container mx-auto px-6">
                    {/* 👇 修复 1：移除了父容器的 h-auto md:h-[450px]，改为自适应 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* 卡片1 */}
                        {/* 👇 修复 2：将高度 md:h-[450px] 明确写在子元素上，确保撑开高度 */}
                        <FadeIn delay={0} className="h-[300px] md:h-[450px]">
                            <div className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative h-full cursor-pointer hover:-translate-y-2">
                                <img src="https://plus.unsplash.com/premium_photo-1675806652615-a773cb2056a2?q=80&w=2672&auto=format&fit=crop" alt="Headlight" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 transition-all duration-500 group-hover:from-black/90">
                                    <div><p className="text-white text-2xl font-bold mb-1">天使眼 LED</p><p className="text-gray-300 text-sm">璀璨夺目，夜间骑行更安全</p></div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 卡片2 */}
                        <FadeIn delay={200} className="h-[300px] md:h-[450px]">
                            <div className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative h-full cursor-pointer hover:-translate-y-2">
                                <img src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2670&auto=format&fit=crop" alt="Body" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 transition-all duration-500 group-hover:from-black/90">
                                    <div><p className="text-white text-2xl font-bold mb-1">流线型车身</p><p className="text-gray-300 text-sm">风阻更低，续航更久</p></div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 卡片3 */}
                        <FadeIn delay={400} className="h-[300px] md:h-[450px]">
                            <div className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative h-full hover:-translate-y-2">
                                <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2574&auto=format&fit=crop" alt="Texture" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-6 transition-colors duration-500 group-hover:bg-black/40">
                                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 w-full max-w-xs text-center shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">潮流配色</h4>
                                        <p className="text-gray-500 text-xs mb-6">定义您的专属风格</p>
                                        <div className="flex justify-center space-x-3">
                                            {[{ color: 'bg-purple-600', name: '炫紫' }, { color: 'bg-gray-900', name: '雅黑' }, { color: 'bg-white border border-gray-300', name: '极白' }, { color: 'bg-blue-500', name: '冰蓝' }].map((item, idx) => (
                                                <div key={idx} className="group/color relative cursor-pointer" title={item.name}>
                                                    <div className={`w-8 h-8 rounded-full ${item.color} shadow-sm ring-2 ring-transparent hover:ring-pink-400 transition-all transform hover:scale-110`}></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* --- Durable Section (耐用板块) --- */}
            <section className="py-24 bg-[#1F1F1F] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-800/30 to-transparent pointer-events-none"></div>
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-12">
                        <FadeIn direction="left">
                            <div>
                                <h2 className="text-pink-500 font-bold text-xl mb-2">{t.sections.durable}</h2>
                                <h3 className="text-4xl font-bold mb-4">{t.sections.durableTitle}</h3>
                                <p className="text-gray-400 leading-relaxed">{t.sections.durableDesc}</p>
                            </div>
                        </FadeIn>

                        <div className="space-y-8">
                            {[{ icon: <Zap className="text-pink-500" size={32} />, title: '电控技术', desc: '矢量FOC控制器，起步平稳丝滑' }, { icon: <Battery className="text-pink-500" size={32} />, title: '持久续航', desc: '石墨烯电池，比普通电池多跑30%' }, { icon: <Shield className="text-pink-500" size={32} />, title: '高效动能', desc: '高效能电机，爬坡有力不费电' }].map((feature, idx) => (
                                <FadeIn key={idx} delay={idx * 150} direction="left">
                                    <div className="flex items-start space-x-6 group">
                                        <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">{feature.icon}</div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-1">{feature.title}</h4>
                                            <p className="text-gray-400 text-sm">{feature.desc}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>

                    <FadeIn direction="right" delay={300}>
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1678788939626-d62111d4d142?q=80&w=2574&auto=format&fit=crop" alt="Structure" className="relative z-10 w-full rounded-xl shadow-2xl border border-gray-700 grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* --- Latest News Section (新闻板块) --- */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <FadeIn>
                            <div>
                                <h2 className="text-pink-600 font-bold text-xl mb-2">{t.nav.aboutGroups.news}</h2>
                                <h3 className="text-3xl font-bold text-gray-900">品牌动态</h3>
                            </div>
                        </FadeIn>
                        <Link href="/news" className="hidden md:flex items-center text-gray-500 hover:text-pink-600 transition-colors">
                            查看更多 <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {latestNews.map((item, idx) => (
                            <FadeIn key={item.id} delay={idx * 150} className="h-full">
                                <Link href={`/news/${item.id}`} className="block h-full group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="relative h-48 overflow-hidden">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-gray-900">
                                            {item.category}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center text-gray-400 text-xs mb-3">
                                            <Calendar size={14} className="mr-2" /> {item.date}
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                                            {item.snippet}
                                        </p>
                                        <span className="inline-flex items-center text-pink-600 font-bold text-sm">
                                            阅读全文 <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link href="/news" className="inline-flex items-center text-gray-500 hover:text-pink-600 transition-colors">
                            查看更多 <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- Service Section (服务板块) --- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center mb-16">
                    <FadeIn>
                        <h2 className="text-gray-900 font-bold text-3xl mb-4">{t.sections.service}</h2>
                        <p className="text-gray-500">{t.sections.serviceDesc}</p>
                    </FadeIn>
                </div>
                <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
                    {[{ icon: <Award size={40} />, title: '全国联保', desc: '全国联网联保，无忧售后' }, { icon: <CheckCircle size={40} />, title: '优质服务', desc: '24小时在线客服，贴心服务' }, { icon: <Phone size={40} />, title: '联系方式', desc: '点击查看详细地址与热线', link: '/contact' }].map((item, idx) => (
                        <FadeIn key={idx} delay={idx * 150}>
                            <Link href={item.link || '#'} className="flex flex-col items-center text-center p-8 rounded-xl hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-pink-100 group cursor-pointer h-full">
                                <div className="text-pink-500 mb-6 p-4 bg-pink-50 rounded-full group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </div>
    );
};