// src/app/models/page.tsx
"use client";

import React, { useState } from 'react';
import { Info } from 'lucide-react';
import Link from 'next/link'; // 替换 Link
// import SEO from '@/components/SEO'; // 移除 SEO
import { allModels } from '@/constants';
import { CarModel, MainCategory, SubCategory } from '@/types';
import Pagination from '@/components/Pagination';
import ModelCard from '@/components/ModelCard';
import { useLanguage } from '@/context/LanguageContext'; // 引入 Context

export default function ModelsPage() {
    const { lang } = useLanguage(); // 获取语言

    const [activeCategory, setActiveCategory] = useState<MainCategory | 'all'>('all');
    const [activeSubCategory, setActiveSubCategory] = useState<SubCategory | 'all'>('all');

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const categories: {id: MainCategory, label: string}[] = [
        { id: 'new-national-standard', label: '新国标' },
        { id: 'electric-motorcycle', label: '电摩' },
        { id: 'tricycle', label: '三轮车' }
    ];

    const subCategories: {id: SubCategory, label: string}[] = [
        { id: 'powerful', label: '强劲动力' },
        { id: 'quality', label: '品质甄选' },
        { id: 'urban', label: '都市通勤' },
        { id: 'light', label: '轻便易用' }
    ];

    const getDisplayModels = (): CarModel[] => {
        return allModels.filter(model => {
            if (activeCategory !== 'all' && model.category !== activeCategory) return false;
            if (activeCategory === 'electric-motorcycle' && activeSubCategory !== 'all' && model.subCategory !== activeSubCategory) return false;
            return true;
        });
    };

    const filteredModels = getDisplayModels();
    const totalPages = Math.ceil(filteredModels.length / itemsPerPage);
    const currentModels = filteredModels.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleCategoryChange = (cat: MainCategory | 'all') => {
        setActiveCategory(cat);
        setActiveSubCategory('all'); // Reset sub filter
        setCurrentPage(1);
    }

    return (
        <div className="animate-fade-in-up bg-gray-50 min-h-screen">

            {/* Hero */}
            <div className="relative h-[400px] flex items-center justify-center bg-gray-900 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1593766779536-2246087b703e?q=80&w=2670&auto=format&fit=crop"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    alt="Models Hero"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="relative z-10 text-center text-white p-6 max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">探索未来骑行</h1>
                    <p className="text-xl opacity-90 font-light max-w-2xl mx-auto">
                        全系 {allModels.length} 款车型供您选择
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Left Sidebar Filter */}
                    <div className="md:w-1/4">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">车型分类</h3>

                            {/* Level 1: Main Category */}
                            <div className="space-y-2 mb-6">
                                <button
                                    onClick={() => handleCategoryChange('all')}
                                    className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium flex justify-between items-center
                                ${activeCategory === 'all' ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                    全部车型
                                </button>
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => handleCategoryChange(cat.id)}
                                        className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium flex justify-between items-center
                                    ${activeCategory === cat.id
                                            ? 'bg-pink-600 text-white shadow-md'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                                    >
                                        {cat.label}
                                        {activeCategory === cat.id && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                    </button>
                                ))}
                            </div>

                            {/* Level 2: Sub Category */}
                            {activeCategory === 'electric-motorcycle' && (
                                <div className="animate-fade-in-up border-t border-gray-100 pt-6">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">功能用途</h4>
                                    <div className="space-y-1">
                                        <button
                                            onClick={() => { setActiveSubCategory('all'); setCurrentPage(1); }}
                                            className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${activeSubCategory === 'all' ? 'text-pink-600 font-bold bg-pink-50' : 'text-gray-600 hover:bg-gray-50'}`}
                                        >
                                            全部
                                        </button>
                                        {subCategories.map(sub => (
                                            <button
                                                key={sub.id}
                                                onClick={() => { setActiveSubCategory(sub.id); setCurrentPage(1); }}
                                                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${activeSubCategory === sub.id ? 'text-pink-600 font-bold bg-pink-50' : 'text-gray-600 hover:bg-gray-50'}`}
                                            >
                                                {sub.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Grid */}
                    <div className="md:w-3/4">
                        {/* Info Card */}
                        {activeCategory === 'new-national-standard' && (
                            <div className="mb-8 bg-blue-50 border border-blue-100 rounded-xl p-6 flex items-start gap-4 animate-fade-in-up">
                                <Info className="text-blue-600 shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-blue-800 font-bold text-lg mb-2">什么是新国标电动自行车？</h4>
                                    <ul className="text-blue-700 text-sm space-y-1 list-disc list-inside">
                                        <li>最高设计时速不超过 25km/h</li>
                                        <li>整车重量（含电池）不超过 55kg</li>
                                        <li>必须具有脚踏骑行能力</li>
                                        <li>电机功率不超过 400W，蓄电池电压不超过 48V</li>
                                        <li><span className="font-bold">无需机动车驾驶证</span>，上牌便捷，允许载一名12周岁以下儿童</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        <div className="mb-6 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-900">
                                {activeCategory === 'all' ? '全系车型' : categories.find(c => c.id === activeCategory)?.label}
                                {activeSubCategory !== 'all' && ` - ${subCategories.find(s => s.id === activeSubCategory)?.label}`}
                            </h2>
                            <span className="text-gray-500 text-sm">共 {filteredModels.length} 款</span>
                        </div>

                        {currentModels.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                                {/* ⚠️ 请确保 ModelCard 组件内部的 Link 也被替换为 next/link */}
                                {currentModels.map((model, idx) => (
                                    <ModelCard key={idx} model={model} lang={lang} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 text-gray-400">
                                暂无该分类车型数据
                            </div>
                        )}

                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20 bg-gray-900 rounded-3xl p-10 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-white mb-4">还没找到心仪的车型？</h3>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">我们的产品专家随时待命，为您提供专业的购车建议和个性化定制服务。</p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <Link href="/contact" className="bg-pink-600 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-700 transition-colors">联系客服</Link>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600 rounded-full filter blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full filter blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>
                </div>
            </div>
        </div>
    );
};