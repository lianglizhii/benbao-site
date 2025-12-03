import { createReader } from '@keystatic/core/reader';
import { DocumentRenderer } from '@keystatic/core/renderer';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';
import Config from '../../../../../keystatic.config';

const reader = createReader(process.cwd(), Config);

// 生成静态路径 (SSG)
export async function generateStaticParams() {
    const slugs = await reader.collections.news.list();
    return slugs.map((slug) => ({ slug }));
}

// 页面组件
export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    // 1. 解包 params
    const { slug } = await params;

    // 2. 读取 Keystatic 数据
    const post = await reader.collections.news.read(slug);

    if (!post) {
        notFound();
    }

    const content = await post.content();

    return (
        // 样式还原：外层容器带 pt-20
        <div className="animate-fade-in-up bg-white min-h-screen pt-20">
            {/* 样式还原：最大宽度 max-w-4xl */}
            <div className="container mx-auto px-6 py-12 max-w-4xl">

                {/* 样式还原：返回链接 */}
                <Link
                    href="/news"
                    className="inline-flex items-center text-gray-500 hover:text-pink-600 mb-8 transition-colors"
                >
                    <ArrowLeft size={20} className="mr-2" /> 返回新闻列表
                </Link>

                {/* 样式还原：头部区域 */}
                <div className="mb-8">
                    <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                        {post.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={16} className="mr-2" /> {post.date}
                    </div>
                </div>

                {/* 样式还原：图片区域 (带 shadow-lg 和 max-h-[500px]) */}
                {post.image && (
                    <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-auto object-cover max-h-[500px]"
                        />
                    </div>
                )}

                {/* 样式还原：正文区域 (text-gray-700 leading-relaxed) */}
                {/* 注意：dangerouslySetInnerHTML 替换为 Keystatic 的 DocumentRenderer */}
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed prose-headings:font-bold prose-a:text-pink-600 prose-img:rounded-xl">
                    <DocumentRenderer document={content} />
                </div>

                {/* 样式还原：底部分享栏 */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-gray-400 text-sm">分享到：</span>
                    <div className="flex space-x-2">
                        <button className="bg-gray-100 hover:bg-green-500 hover:text-white p-2 rounded-full transition-colors text-xs px-4">
                            微信
                        </button>
                        <button className="bg-gray-100 hover:bg-black hover:text-white p-2 rounded-full transition-colors text-xs px-4">
                            微博
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}