// src/app/(site)/about/AboutClient.tsx
"use client";

import React, { useState } from 'react';
import { Target, Flag, Users, Award, Globe } from 'lucide-react';
// 👇 注意：这里移除了 honorsData，其他数据保留
import { historyData, valuesData, globalLocations } from '@/constants';
import Pagination from '@/components/Pagination';
import { useLanguage } from '@/context/LanguageContext';

// 定义荣誉数据的接口
export interface HonorItem {
    id: string;
    title: string;
    year: string;
    image: string;
}

// 接收服务端传来的 honors
export default function AboutClient({ honors }: { honors: HonorItem[] }) {
    const { lang } = useLanguage();

    // 分页逻辑 (针对 Keystatic 数据)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(honors.length / itemsPerPage);

    const currentHonors = honors.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="animate-fade-in-up">
            {/* Hero */}
            <div className="relative h-[400px] flex items-center justify-center bg-gray-900 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop"
                     className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Company"/>
                <div className="relative z-10 text-center text-white p-6">
                    <h1 className="text-5xl font-bold mb-4">关于奔宝</h1>
                    <p className="text-xl opacity-90">三十年匠心制造，重新定义城市出行美学</p>
                </div>
            </div>

            {/* Intro */}
            <section id="intro" className="py-20 container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3"><span
                            className="w-2 h-8 bg-pink-600 rounded"></span>走进奔宝</h2>
                        <div className="text-gray-600 leading-relaxed space-y-4 text-justify">
                            <p><span className="font-bold text-gray-900">奔宝车业</span>创建于1997年，座落于中国摩托车电动车制造之都——台州。公司集电动车的研发、生产和销售于一体，厂区建筑面积<span
                                className="text-pink-600 font-bold">15000平方米</span>。</p>
                            <p>公司拥有配置精良的整车生产装配流水线、整车塑件涂装烤漆生产线；设有应用三座标检测
                                CAD/CAM计算机辅助设计室，整车技术开发中心等。</p>
                            <p>本着“高起点、高质量、重服务”的原则，汇聚了一批精干的高科技人才。通过 <span
                                className="font-bold">ISO9001:2000</span> 质量管理体系认证。</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            <div className="bg-gray-50 p-4 rounded-xl text-center">
                                <div className="text-2xl font-bold text-pink-600">1997</div>
                                <div className="text-xs text-gray-500">成立年份</div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl text-center">
                                <div className="text-2xl font-bold text-pink-600">1.5万㎡</div>
                                <div className="text-xs text-gray-500">厂区面积</div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl text-center">
                                <div className="text-2xl font-bold text-pink-600">ISO</div>
                                <div className="text-xs text-gray-500">9001认证</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1565514020125-69b5529f5287?q=80&w=2671&auto=format&fit=crop"
                            className="w-full h-full object-cover" alt="Factory"/>
                        <div
                            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
                            <p className="text-white font-medium">先进的整车生产装配流水线</p></div>
                    </div>
                </div>
            </section>

            {/* Global Layout */}
            <section id="global" className="py-24 bg-[#0a0f1c] text-white overflow-hidden relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <div className="flex justify-center mb-4"><Globe
                            className="text-pink-600 w-10 h-10 animate-pulse"/></div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">全球化布局</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">从中国台州出发，奔宝的足迹已遍布全球多个国家和地区，让世界爱上中国智造。</p>
                    </div>

                    {/* Interactive Map Container */}
                    <div
                        className="relative w-full max-w-5xl mx-auto aspect-[16/9] bg-[#111827] rounded-3xl border border-gray-800 shadow-2xl overflow-hidden group">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                            alt="World Map"
                            className="absolute inset-0 w-full h-full object-cover opacity-30 invert grayscale"
                        />

                        <div
                            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                        {/* Locations */}
                        {globalLocations.map((loc, idx) => (
                            <div
                                key={idx}
                                className="absolute group/pin cursor-pointer"
                                style={{top: loc.top, left: loc.left}}
                            >
                                <div className="absolute -inset-2 bg-pink-500/30 rounded-full animate-ping"></div>
                                <div
                                    className="relative w-3 h-3 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(214,51,108,0.8)] border border-white/50"></div>

                                <div
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover/pin:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/pin:translate-y-0 pointer-events-none z-20">
                                    <div
                                        className="bg-white text-gray-900 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shadow-lg flex flex-col items-center">
                                        <span>{loc.name}</span>
                                        <div className="w-2 h-2 bg-white transform rotate-45 absolute -bottom-1"></div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                            <path d="M 78% 38% Q 70% 30% 63% 32%" stroke="#D6336C" strokeWidth="1" fill="none"
                                  className="path-anim"/>
                            <path d="M 78% 38% Q 75% 50% 72% 55%" stroke="#D6336C" strokeWidth="1" fill="none"
                                  className="path-anim delay-100"/>
                            <path d="M 78% 38% Q 60% 60% 52% 52%" stroke="#D6336C" strokeWidth="1" fill="none"
                                  className="path-anim delay-200"/>
                        </svg>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-4 md:hidden">
                        {globalLocations.map((loc, idx) => (
                            <span key={idx}
                                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-700">
                        {loc.name}
                    </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* History */}
            <section id="history" className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12"><h2
                        className="text-3xl font-bold text-gray-900 mb-4">发展历程</h2><p
                        className="text-gray-500">一步一个脚印，见证奔宝成长</p></div>

                    <div
                        className="relative max-w-4xl mx-auto h-[400px] overflow-y-auto custom-scrollbar p-4 bg-white rounded-2xl shadow-inner border border-gray-100">
                        <div className="relative">
                            <div
                                className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 transform md:-translate-x-1/2 min-h-full"></div>
                            <div className="space-y-8 pb-12 pt-4">
                                {historyData.map((item, idx) => (
                                    <div key={idx}
                                         className={`relative flex items-center md:justify-between ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                        <div
                                            className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-pink-600 border-4 border-pink-200 transform -translate-x-1/2 z-10 shrink-0"></div>
                                        <div
                                            className={`ml-12 md:ml-0 md:w-[45%] bg-gray-50 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            <span
                                                className="text-xl font-bold text-pink-600 block mb-1">{item.year}</span>
                                            <h4 className="text-lg font-bold text-gray-800 mb-1">{item.event}</h4>
                                            <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                                        </div>
                                        <div className="hidden md:block md:w-[45%]"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Culture */}
            <section id="culture" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16"><h2
                        className="text-3xl font-bold text-gray-900 mb-4">企业文化</h2><p
                        className="text-gray-500">打造电动车民族品牌，让世界首选奔宝</p></div>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div
                            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-pink-500 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div
                                className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-600">
                                <Target size={32}/></div>
                            <h3 className="text-xl font-bold mb-2">愿景</h3><p className="text-gray-600">打造电动车民族品牌<br/>让世界首选奔宝
                        </p>
                        </div>
                        <div
                            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-pink-500 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div
                                className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-600">
                                <Flag size={32}/></div>
                            <h3 className="text-xl font-bold mb-2">使命</h3><p
                            className="text-gray-600">为全球用户提供<br/>更便捷的交通工具</p>
                        </div>
                        <div
                            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-pink-500 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div
                                className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-600">
                                <Users size={32}/></div>
                            <h3 className="text-xl font-bold mb-2">协会职务</h3><p className="text-gray-600">台州市企业文化协会<br/>理事单位
                        </p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-5 gap-4">
                        {valuesData.map((val, idx) => (
                            <div key={idx}
                                 className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:bg-pink-50 group">
                                <h4 className="text-lg font-bold text-pink-600 mb-3 group-hover:text-pink-700">{idx + 1}. {val.title}</h4>
                                <ul className="space-y-2">
                                    {val.items.map((item, i) => (
                                        <li key={i}
                                            className="text-sm text-gray-600 flex items-start gap-2 group-hover:text-gray-800">
                                            <span
                                                className="w-1.5 h-1.5 bg-gray-300 group-hover:bg-pink-400 rounded-full mt-1.5 flex-shrink-0 transition-colors"></span>{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Honors (Dynamic Data) */}
            <section id="honor" className="py-24 bg-gray-900 text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">荣誉认证</h2><p
                    className="text-gray-400 text-center mb-16">权威认可，品质见证</p>

                    {/* 👇 这里使用 props 传进来的 honors 数据，而不是 constants 里的 */}
                    {honors.length > 0 ? (
                        <>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                                {currentHonors.map((honor, idx) => (
                                    <div key={idx}
                                         className="bg-gray-800 rounded-xl border border-gray-700 hover:border-pink-500 transition-all group overflow-hidden hover:-translate-y-1 shadow-lg">
                                        <div className="h-48 overflow-hidden relative">
                                            <img src={honor.image} alt={honor.title}
                                                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"/>
                                            <div
                                                className="absolute top-2 right-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">{honor.year}</div>
                                        </div>
                                        <div className="p-4">
                                            <Award className="text-pink-500 mb-2" size={24}/>
                                            <p className="text-sm font-medium text-gray-200 group-hover:text-white leading-relaxed line-clamp-2"
                                               title={honor.title}>{honor.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Pagination currentPage={currentPage} totalPages={totalPages}
                                        onPageChange={setCurrentPage}/>
                        </>
                    ) : (
                        <div className="text-center text-gray-500 py-10">暂无荣誉数据，请在后台添加</div>
                    )}
                </div>
            </section>
        </div>
    );
};