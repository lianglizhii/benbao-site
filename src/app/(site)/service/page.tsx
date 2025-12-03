// src/app/service/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { HelpCircle, FileText } from 'lucide-react';
// import { useLocation } from 'react-router-dom'; // 移除
import { faqData, policyData } from '@/constants';
import Pagination from '@/components/Pagination';
import { useLanguage } from '@/context/LanguageContext';

export default function ServicePage() {
    const { lang } = useLanguage();

    const [activeTab, setActiveTab] = useState<'faq' | 'policy'>('faq');
    const [currentFAQPage, setCurrentFAQPage] = useState(1);
    const faqItemsPerPage = 5;

    // Next.js: 手动监听 Hash 变化
    useEffect(() => {
        // 1. 初始化检查
        const checkHash = () => {
            if (typeof window !== 'undefined') {
                if (window.location.hash === '#policy') {
                    setActiveTab('policy');
                } else if (window.location.hash === '#faq') {
                    setActiveTab('faq');
                }
            }
        };
        checkHash();

        // 2. 监听 hashchange 事件 (当在页面内点击锚点链接时)
        window.addEventListener('hashchange', checkHash);
        return () => window.removeEventListener('hashchange', checkHash);
    }, []);

    const totalFAQPages = Math.ceil(faqData.length / faqItemsPerPage);
    const currentFAQ = faqData.slice(
        (currentFAQPage - 1) * faqItemsPerPage,
        currentFAQPage * faqItemsPerPage
    );

    return (
        <div>
            <div className="relative h-[350px] flex items-center justify-center bg-gray-900 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2669&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Service" />
                <div className="relative z-10 text-center text-white p-6">
                    <h1 className="text-4xl font-bold mb-4">服务支持</h1>
                    <p className="text-lg opacity-90">全程贴心守护，让您的出行无后顾之忧</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                <div className="flex justify-center mb-12">
                    <div className="bg-gray-100 p-1 rounded-full inline-flex">
                        <button onClick={() => setActiveTab('faq')} className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'faq' ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}>常见问题</button>
                        <button onClick={() => setActiveTab('policy')} className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'policy' ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}>服务政策</button>
                    </div>
                </div>

                {activeTab === 'faq' && (
                    <div id="faq" className="max-w-3xl mx-auto animate-fade-in-up">
                        <div className="space-y-4">
                            {currentFAQ.map((item, idx) => (
                                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start"><HelpCircle className="text-pink-500 mr-2 mt-1 flex-shrink-0" size={20} />{item.q}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed pl-7">{item.a}</p>
                                </div>
                            ))}
                        </div>
                        <Pagination currentPage={currentFAQPage} totalPages={totalFAQPages} onPageChange={setCurrentFAQPage} />
                    </div>
                )}

                {activeTab === 'policy' && (
                    <div id="policy" className="max-w-4xl mx-auto animate-fade-in-up">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="p-8 border-b border-gray-100 bg-gray-50">
                                <h3 className="text-2xl font-bold text-gray-900 flex items-center"><FileText className="text-pink-600 mr-3" />奔宝电动车三包服务标准</h3>
                                <p className="text-gray-500 text-sm mt-2">本政策适用于中国大陆地区正规渠道购买的奔宝电动车产品</p>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                    <tr className="bg-gray-50 text-gray-700 text-sm font-bold uppercase"><th className="p-4 border-b border-gray-200">部件名称</th><th className="p-4 border-b border-gray-200">保修期限</th><th className="p-4 border-b border-gray-200">保修范围说明</th></tr>
                                    </thead>
                                    <tbody className="text-gray-600 text-sm">
                                    {policyData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                                            <td className="p-4 font-medium text-gray-900">{row.part}</td>
                                            <td className="p-4 text-pink-600 font-bold">{row.term}</td>
                                            <td className="p-4">{row.desc}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-6 bg-yellow-50 text-yellow-800 text-xs leading-relaxed">
                                <strong>注意：</strong> <br/>1. 易损件正常磨损不属于保修范围。<br/>2. 因人为原因（如碰撞、摔倒、超载、私自改装、未按说明书使用等）造成的损坏不属于保修范围。<br/>3. 电池保修期内容量衰减至60%以下可申请免费更换。<br/>4. 最终解释权归浙江奔宝车业有限公司所有。
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};