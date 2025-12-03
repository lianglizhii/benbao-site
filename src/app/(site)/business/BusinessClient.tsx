// src/app/(site)/business/BusinessClient.tsx
"use client";

import React from 'react';
import { ChevronRight, Zap, Target } from 'lucide-react';
import Link from 'next/link';
// import { partnersData } from '@/constants'; // 移除旧导入
import { valuesData } from '@/constants'; // 保留其他静态数据

// 定义 Props 接口
export interface Partner {
    name: string;
    logo: string; // Logo 图片路径
}

export default function BusinessClient({ partners }: { partners: Partner[] }) {

    return (
        <div className="animate-fade-in-up">
            {/* Hero Section */}
            <div className="relative h-[350px] flex items-center justify-center bg-gray-900 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2670&auto=format&fit=crop"
                     className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Business"/>
                <div className="relative z-10 text-center text-white p-6">
                    <h1 className="text-4xl font-bold mb-4">商务合作</h1>
                    <p className="text-lg opacity-90">全球视野，共创未来，诚邀您加入奔宝大家庭</p>
                </div>
            </div>

            {/* Partners Section (Dynamic Data) */}
            <section id="partners" className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center mb-16">
                    <h2 className="text-pink-600 font-bold text-xl mb-2">全球协作</h2>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">我们的合作伙伴</h3>
                    <p className="text-gray-500 max-w-3xl mx-auto">
                        奔宝与全球顶尖的供应商、技术公司和经销商建立了长期稳定的合作关系，共同推动电动车行业发展。
                    </p>
                </div>

                {/* Logo Grid */}
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                        {partners.map((partner, idx) => (
                            <div key={idx} className="flex items-center justify-center p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all h-24">
                                {/* 渲染 Logo (从 Keystatic 获取的图片路径) */}
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-w-full max-h-12 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Franchise Section (假设静态内容不变) */}
            <section id="franchise" className="py-20 bg-gray-50">
                {/* ... 加盟政策内容保持不变 ... */}
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-pink-600 font-bold text-xl mb-2">经销商招募</h2>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">成为奔宝全球合作伙伴</h3>
                    </div>
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            {[{ icon: <Target size={40} />, title: '品牌优势', desc: '民族品牌，产品竞争力强' }, { icon: <Zap size={40} />, title: '技术支持', desc: '提供全方位技术培训指导' }, { icon: <ChevronRight size={40} />, title: '市场保障', desc: '严格区域保护，确保利润' }].map((item, idx) => (
                                <div key={idx} className="p-4">
                                    <div className="text-pink-500 mb-4 p-3 bg-pink-50 rounded-full w-fit mx-auto">{item.icon}</div>
                                    <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 pt-8 border-t border-gray-100 text-center">
                            <h4 className="text-xl font-bold mb-4">期待与您携手</h4>
                            <Link href="/contact" className="bg-pink-600 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-700 transition-colors shadow-lg">
                                立即申请加盟
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}