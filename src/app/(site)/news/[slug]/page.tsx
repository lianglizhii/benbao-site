// src/app/(site)/news/[slug]/page.tsx
import { createReader } from '@keystatic/core/reader';
import { DocumentRenderer } from '@keystatic/core/renderer';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';
import Config from '../../../../../keystatic.config';
// 👇 引入动画
import FadeIn from '@/components/FadeIn';

const reader = createReader(process.cwd(), Config);

export async function generateStaticParams() {
    const slugs = await reader.collections.news.list();
    return slugs.map((slug) => ({ slug }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await reader.collections.news.read(slug);

    if (!post) {
        notFound();
    }

    const content = await post.content();

    return (
        <div className="animate-fade-in-up bg-white min-h-screen pt-20">
            <div className="container mx-auto px-6 py-12 max-w-4xl">

                {/* 1. 返回链接：最先出现 */}
                <FadeIn delay={0}>
                    <Link
                        href="/news"
                        className="inline-flex items-center text-gray-500 hover:text-pink-600 mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} className="mr-2" /> 返回新闻列表
                    </Link>
                </FadeIn>

                {/* 2. 标题区：延迟 100ms */}
                <FadeIn delay={100}>
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
                </FadeIn>

                {/* 3. 图片区：延迟 200ms */}
                {post.image && (
                    <FadeIn delay={200}>
                        <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-auto object-cover max-h-[500px]"
                            />
                        </div>
                    </FadeIn>
                )}

                {/* 4. 正文内容：延迟 300ms */}
                <FadeIn delay={300}>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed prose-headings:font-bold prose-a:text-pink-600 prose-img:rounded-xl">
                        <DocumentRenderer document={content} />
                    </div>
                </FadeIn>

                {/* 5. 分享栏：延迟 400ms */}
                <FadeIn delay={400}>
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
                </FadeIn>
            </div>
        </div>
    );
}