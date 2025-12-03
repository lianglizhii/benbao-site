// src/app/news/[id]/page.tsx
"use client";

import React from 'react';
import { useParams } from 'next/navigation'; // 1. 替换 react-router-dom
import Link from 'next/link'; // 2. 替换 Link
import { Calendar, ArrowLeft } from 'lucide-react';
// import SEO from '@/components/SEO';
import { newsData } from '@/constants';
import { useLanguage } from '@/context/LanguageContext';

export default function NewsDetailPage() {
    const { lang } = useLanguage();

    // 3. 获取动态参数
    const params = useParams();
    const id = params?.id; // Next.js 的 id 可能是 string 或 string[]

    const newsItem = newsData.find(n => n.id === Number(id));

    if (!newsItem) {
        return (
            <div className="min-h-screen flex items-center justify-center flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">文章未找到</h2>
                <Link href="/news" className="text-pink-600 hover:underline">返回新闻列表</Link>
            </div>
        );
    }

    return (
        <div className="animate-fade-in-up bg-white min-h-screen pt-20">
            {/* SEO 暂时移除，后续可用 generateMetadata 优化 */}

            <div className="container mx-auto px-6 py-12 max-w-4xl">
                <Link href="/news" className="inline-flex items-center text-gray-500 hover:text-pink-600 mb-8 transition-colors">
                    <ArrowLeft size={20} className="mr-2" /> 返回新闻列表
                </Link>

                <div className="mb-8">
                    <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">{newsItem.category}</span>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{newsItem.title}</h1>
                    <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={16} className="mr-2" /> {newsItem.date}
                    </div>
                </div>

                <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
                    <img src={newsItem.image} alt={newsItem.title} className="w-full h-auto object-cover max-h-[500px]" />
                </div>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: newsItem.content || '' }}>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-gray-400 text-sm">分享到：</span>
                    <div className="flex space-x-2">
                        <button className="bg-gray-100 hover:bg-green-500 hover:text-white p-2 rounded-full transition-colors text-xs">微信</button>
                        <button className="bg-gray-100 hover:bg-black hover:text-white p-2 rounded-full transition-colors text-xs">微博</button>
                    </div>
                </div>
            </div>
        </div>
    );
};