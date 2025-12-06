// src/app/(site)/service/ServiceClient.tsx
"use client";

import React, { useState, useEffect } from 'react';
import {
    HelpCircle, FileText, ChevronDown, ChevronUp,
    Download, FileCode, Headphones, PhoneCall,
    Wrench, AlertCircle // 新增图标
} from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import Pagination from '@/components/Pagination';
import { useLanguage } from '@/context/LanguageContext';
import FadeIn from '@/components/FadeIn';
// 👇 1. 引入新定义的常量
import { freeServicesData, freeServicesNote, nonWarrantyData } from '@/constants';

export interface ServiceDataProps {
    faqData: { q: string, a: string }[];
    policyData: { part: string, term: string, desc: string }[];
}

export default function ServiceClient({ faqData, policyData }: ServiceDataProps) {
    const { lang } = useLanguage();
    const searchParams = useSearchParams();
    const router = useRouter();

    const [activeTab, setActiveTab] = useState<'faq' | 'policy'>('faq');
    const [currentFAQPage, setCurrentFAQPage] = useState(1);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const faqItemsPerPage = 8;

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab === 'policy') {
            setActiveTab('policy');
        } else {
            setActiveTab('faq');
        }
    }, [searchParams]);

    const handleTabChange = (tab: 'faq' | 'policy') => {
        setActiveTab(tab);
        router.push(`/service?tab=${tab}`, { scroll: false });
    };

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const totalFAQPages = Math.ceil(faqData.length / faqItemsPerPage);
    const currentFAQ = faqData.slice(
        (currentFAQPage - 1) * faqItemsPerPage,
        currentFAQPage * faqItemsPerPage
    );

    return (
        <div className="animate-fade-in-up bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[350px] flex items-center justify-center bg-gray-900 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2669&auto=format&fit=crop"
                     className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Service"/>
                <div className="relative z-10 text-center text-white p-6">
                    <FadeIn direction="up">
                        <h1 className="text-4xl font-bold mb-4">服务支持</h1>
                        <p className="text-lg opacity-90">全程贴心守护，让您的出行无后顾之忧</p>
                    </FadeIn>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                {/* Tab Buttons */}
                <FadeIn delay={100} className="flex justify-center mb-12">
                    <div className="bg-white p-1.5 rounded-full inline-flex shadow-sm border border-gray-100">
                        <button onClick={() => handleTabChange('faq')}
                                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'faq' ? 'bg-pink-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-800'}`}>常见问题
                        </button>
                        <button onClick={() => handleTabChange('policy')}
                                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'policy' ? 'bg-pink-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-800'}`}>服务政策
                        </button>
                    </div>
                </FadeIn>

                {/* FAQ Content Area */}
                {activeTab === 'faq' && (
                    <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
                        {/* 左侧：FAQ 列表 */}
                        <div className="lg:col-span-8 space-y-6">
                            <div className="space-y-4">
                                {currentFAQ.map((item, idx) => {
                                    const isOpen = openFaqIndex === idx;
                                    return (
                                        <FadeIn key={idx} delay={idx * 50} direction="up">
                                            <div className={`bg-white border rounded-xl transition-all duration-300 overflow-hidden ${isOpen ? 'border-pink-200 shadow-md' : 'border-gray-200 hover:border-pink-100'}`}>
                                                <button onClick={() => toggleFaq(idx)} className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none">
                                                    <h3 className={`font-bold text-lg flex items-center gap-3 ${isOpen ? 'text-pink-600' : 'text-gray-800'}`}>
                                                        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs ${isOpen ? 'bg-pink-100 text-pink-600' : 'bg-gray-100 text-gray-500'}`}>Q</span>
                                                        {item.q}
                                                    </h3>
                                                    {isOpen ? <ChevronUp className="text-pink-500 flex-shrink-0" /> : <ChevronDown className="text-gray-400 flex-shrink-0" />}
                                                </button>
                                                <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    <div className="px-6 pb-6 pt-0 pl-[3.25rem]">
                                                        <p className="text-gray-600 text-sm leading-relaxed border-t border-dashed border-gray-100 pt-4">{item.a}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </FadeIn>
                                    );
                                })}
                            </div>
                            <FadeIn delay={400}>
                                <Pagination currentPage={currentFAQPage} totalPages={totalFAQPages} onPageChange={setCurrentFAQPage}/>
                            </FadeIn>

                            {/* CTA */}
                            <FadeIn delay={500}>
                                <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 mt-8 shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-pink-600"><Headphones size={24} /></div>
                                        <div><h4 className="font-bold text-gray-900">没有找到您的问题？</h4><p className="text-gray-500 text-sm">我们的客服团队随时为您提供帮助</p></div>
                                    </div>
                                    <div className="flex gap-3">
                                        <a href="/contact#contact" className="px-6 py-2.5 bg-gray-900 text-white rounded-lg font-bold text-sm hover:bg-gray-800 transition-colors">在线咨询</a>
                                        <a href="tel:4001803888" className="px-6 py-2.5 border border-gray-200 text-gray-700 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors flex items-center gap-2"><PhoneCall size={16} /> 400-180-3888</a>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* 右侧：下载中心 */}
                        <div className="lg:col-span-4 space-y-6">
                            <FadeIn delay={200} direction="left">
                                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm sticky top-24">
                                    <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2"><Download className="text-pink-600" size={20} /> 下载中心</h3>
                                    <div className="space-y-3">
                                        {[{ name: "2025 全系车型参数表.pdf", size: "2.4MB" }, { name: "用户使用手册 (通用版).pdf", size: "5.1MB" }, { name: "电池保养与维护指南.pdf", size: "1.2MB" }, { name: "保修政策详细条款.pdf", size: "0.8MB" }].map((file, i) => (
                                            <div key={i} className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all cursor-pointer">
                                                <div className="flex items-center gap-3 overflow-hidden">
                                                    <div className="w-8 h-8 bg-gray-100 text-gray-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-pink-100 group-hover:text-pink-600 transition-colors"><FileCode size={16} /></div>
                                                    <div className="truncate"><p className="text-sm font-medium text-gray-700 truncate group-hover:text-pink-600 transition-colors">{file.name}</p><p className="text-xs text-gray-400">{file.size}</p></div>
                                                </div>
                                                <Download size={16} className="text-gray-300 group-hover:text-pink-600 flex-shrink-0" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                        <a href="#" className="text-xs text-gray-400 hover:text-pink-600 flex items-center justify-center gap-1 transition-colors">查看所有下载资源 <ChevronDown size={12} /></a>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                )}

                {/* Policy Content */}
                {activeTab === 'policy' && (
                    <div className="max-w-5xl mx-auto space-y-12">

                        {/* 1. 三包标准 (原有内容) */}
                        <FadeIn delay={0}>
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                                <div className="p-8 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 flex items-center"><FileText className="text-pink-600 mr-3"/>奔宝电动车三包服务标准</h3>
                                        <p className="text-gray-500 text-sm mt-2 pl-9">本政策适用于中国大陆地区正规渠道购买的奔宝电动车产品</p>
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                        <tr className="bg-gray-50 text-gray-700 text-sm font-bold uppercase tracking-wider">
                                            <th className="p-5 border-b border-gray-200 w-1/4">部件名称</th>
                                            <th className="p-5 border-b border-gray-200 w-1/4">保修期限</th>
                                            <th className="p-5 border-b border-gray-200">保修范围说明</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-gray-600 text-sm">
                                        {policyData.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0 group">
                                                <td className="p-5 font-bold text-gray-900 group-hover:text-pink-600 transition-colors">{row.part}</td>
                                                <td className="p-5"><span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-bold">{row.term}</span></td>
                                                <td className="p-5 leading-relaxed">{row.desc}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="p-6 bg-yellow-50 text-yellow-800 text-xs leading-relaxed border-t border-yellow-100">
                                    <strong>特别说明：</strong> 1. 易损件正常磨损不属于保修范围。 2. 因人为原因造成的损坏不属于保修范围。 3. 电池保修期内容量衰减至60%以下可申请免费更换。 4. 最终解释权归浙江奔宝车业有限公司所有。
                                </div>
                            </div>
                        </FadeIn>

                        {/* 2. 新增：18项免费服务项目 */}
                        <FadeIn delay={200}>
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                                <div className="p-8 border-b border-gray-100 bg-gray-50/50">
                                    <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                                        <Wrench className="text-pink-600 mr-3"/> 18项免费服务项目
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-2 pl-9">{freeServicesNote}</p>
                                </div>
                                <div className="p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {freeServicesData.map((item, idx) => (
                                            <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors group">
                                                <span className="w-6 h-6 rounded-full bg-white text-pink-600 text-xs font-bold flex items-center justify-center border border-pink-100 mr-3 shadow-sm">{idx + 1}</span>
                                                <span className="text-gray-700 font-medium group-hover:text-pink-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 3. 新增：非三包类 */}
                        <FadeIn delay={400}>
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                                <div className="p-8 border-b border-gray-100 bg-gray-50/50">
                                    <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                                        <AlertCircle className="text-pink-600 mr-3"/> 非三包类说明
                                    </h3>
                                </div>
                                <div className="p-8">
                                    <ul className="space-y-4">
                                        {nonWarrantyData.map((item, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-gray-600 leading-relaxed">
                                                <span className="mr-3 font-bold text-pink-300 mt-0.5">{idx + 1}.</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>

                    </div>
                )}
            </div>
        </div>
    );
};