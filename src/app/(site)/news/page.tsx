import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, ChevronRight } from 'lucide-react';
import { createReader } from '@keystatic/core/reader';
import Config from '../../../../keystatic.config'; // 👈 指向根目录配置

// 1. 创建读取器
const reader = createReader(process.cwd(), Config);

export default async function NewsPage() {
    // 2. 读取所有新闻
    const newsList = await reader.collections.news.all();

    // 3. 格式化数据
    // 注意：Keystatic 返回的图片路径如果是本地上传的，会自动包含你在 config 里设置的 publicPath
    const formattedNews = newsList.map(item => ({
        id: item.slug, // 使用 slug 作为 ID (例如: 'my-first-news')
        title: item.entry.title,
        category: item.entry.category,
        date: item.entry.date,
        image: item.entry.image || '', // 如果没图就给空字符串
        snippet: item.entry.snippet,
    })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // 按时间倒序

    // 4. 分离头条 (第1条) 和其他新闻 (剩下所有)
    const featuredNews = formattedNews[0];
    const otherNews = formattedNews.slice(1);

    // (可选) 如果新闻太多，这里可以只取前 9 条显示，暂不处理复杂的翻页
    // const displayNews = otherNews.slice(0, 9);

    return (
        <div className="animate-fade-in-up">
            {/* Hero 区域 (保持不变) */}
            <div className="relative h-[300px] flex items-center justify-center bg-gray-900 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="News" />
                <div className="relative z-10 text-center text-white p-6">
                    <h1 className="text-4xl font-bold mb-4">新闻资讯</h1>
                    <p className="text-lg opacity-90">掌握奔宝最新动态，洞悉行业前沿趋势</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                {/* 渲染头条新闻 */}
                {featuredNews && (
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-pink-600 pl-4">头条新闻</h2>
                        <Link href={`/news/${featuredNews.id}`} className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow cursor-pointer group">
                            <div className="relative h-[300px] md:h-auto overflow-hidden">
                                {/* 如果你的 image 是完整 URL (Unsplash) 直接显示；如果是本地上传的，Keystatic 会处理路径 */}
                                <img src={featuredNews.image} alt={featuredNews.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">{featuredNews.category}</div>
                            </div>
                            <div className="p-8 flex flex-col justify-center">
                                <div className="flex items-center text-gray-400 text-sm mb-4"><Calendar size={14} className="mr-2" />{featuredNews.date}</div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">{featuredNews.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{featuredNews.snippet}</p>
                                <span className="text-pink-600 font-bold flex items-center text-sm group-hover:translate-x-2 transition-transform">阅读全文 <ArrowRight size={16} className="ml-2" /></span>
                            </div>
                        </Link>
                    </div>
                )}

                {/* 渲染其他新闻列表 */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-gray-900 pl-4">最新动态</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherNews.map((news) => (
                            <Link href={`/news/${news.id}`} key={news.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group cursor-pointer flex flex-col">
                                <div className="relative h-48 overflow-hidden">
                                    <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">{news.category}</div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center text-gray-400 text-xs mb-3"><Calendar size={12} className="mr-1" />{news.date}</div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors line-clamp-2">{news.title}</h3>
                                    <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">{news.snippet}</p>
                                    <div className="pt-4 border-t border-gray-100 mt-auto">
                                        <span className="text-gray-400 text-xs font-medium group-hover:text-pink-500 flex items-center justify-end transition-colors">查看详情 <ChevronRight size={12} className="ml-1" /></span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};