// src/app/contact/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Printer, Mail, MessageSquare, Share2, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
// 👇 引入动画组件
import FadeIn from '@/components/FadeIn';

export default function ContactPage() {
    const { lang } = useLanguage();

    // 滚动控制逻辑 (保留你之前的修复)
    useEffect(() => {
        const handleHashScroll = () => {
            const hash = window.location.hash;

            if (hash === '#contact') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            else if (hash === '#social') {
                const element = document.getElementById('social'); // 改回 social
                if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        };

        setTimeout(handleHashScroll, 100);
        window.addEventListener('hashchange', handleHashScroll);
        return () => window.removeEventListener('hashchange', handleHashScroll);
    }, []);

    const socialMediaData = [
        { name: "微信公众号", color: "bg-green-600", icon: <MessageSquare /> },
        { name: "抖音", color: "bg-black", icon: <span className="font-bold text-xl">♪</span> },
        { name: "快手", color: "bg-orange-500", icon: <span className="font-bold">K</span> },
        { name: "小红书", color: "bg-red-500", icon: <span className="font-bold">Red</span> },
        { name: "微信视频号", color: "bg-green-500", icon: <Share2 /> },
        { name: "哔哩哔哩", color: "bg-pink-400", icon: <span className="font-bold">Bili</span> }
    ];

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("感谢您的留言，我们会尽快联系您！");
        setFormData({ name: '', phone: '', email: '', message: '' });
    };

    return (
        <div className="animate-fade-in-up">
            {/* Hero */}
            <div id="contact" className="relative h-[400px] flex items-center justify-center bg-gray-900 overflow-hidden scroll-mt-32">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Contact" />
                <div className="relative z-10 text-center text-white p-6">
                    {/* 标题动画 */}
                    <FadeIn direction="up">
                        <h1 className="text-5xl font-bold mb-4">联系我们</h1>
                        <p className="text-xl opacity-90">随时随地，我们都在您身边</p>
                    </FadeIn>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-16 mb-24">

                    {/* Contact Info (Left Side) */}
                    <div id="info" className="space-y-8">
                        <FadeIn direction="left">
                            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-pink-600 pl-4">联系方式</h2>
                        </FadeIn>

                        <div className="space-y-6">
                            {/* 列表项依次滑入 */}
                            <FadeIn direction="left" delay={100}>
                                <div className="flex items-start"><div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-pink-600 mr-4 flex-shrink-0"><MapPin /></div><div><h4 className="font-bold text-gray-900 mb-1">公司地址</h4><p className="text-gray-600">浙江省台州市路桥区金清镇疏港大道5111号</p></div></div>
                            </FadeIn>

                            <FadeIn direction="left" delay={200}>
                                <div className="flex items-start"><div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-pink-600 mr-4 flex-shrink-0"><Phone /></div><div><h4 className="font-bold text-gray-900 mb-1">服务热线</h4><p className="text-gray-600 text-xl font-bold text-pink-600">400 180 3888</p><p className="text-gray-500 text-sm">周一至周日 8:00 - 22:00</p></div></div>
                            </FadeIn>

                            <FadeIn direction="left" delay={300}>
                                <div className="flex items-start"><div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-pink-600 mr-4 flex-shrink-0"><Printer /></div><div><h4 className="font-bold text-gray-900 mb-1">传真号码</h4><p className="text-gray-600">0576-82879488</p></div></div>
                            </FadeIn>

                            <FadeIn direction="left" delay={400}>
                                <div className="flex items-start"><div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-pink-600 mr-4 flex-shrink-0"><Mail /></div><div><h4 className="font-bold text-gray-900 mb-1">电子邮箱</h4><p className="text-gray-600">service@benbaoev.com</p></div></div>
                            </FadeIn>
                        </div>

                        {/* Map Placeholder */}
                        <FadeIn direction="up" delay={500}>
                            <div className="bg-gray-200 rounded-2xl overflow-hidden relative h-64 mt-8 shadow-inner hover:shadow-lg transition-shadow duration-500">
                                <img src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2662&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 transition-all duration-700" alt="Map" />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="bg-white p-4 rounded-lg shadow-lg text-center"><MapPin className="mx-auto text-pink-600 mb-2" size={32} /><p className="font-bold">浙江奔宝车业有限公司</p></div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Contact Form (Right Side) */}
                    <FadeIn direction="right" delay={200} className="h-full">
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">在线留言</h2>
                            <p className="text-gray-500 mb-8">如果您有任何问题或合作意向，请填写以下表单，我们将尽快与您联系。</p>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">姓名</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-pink-500 transition-colors" placeholder="请输入您的姓名" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">联系电话</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-pink-500 transition-colors" placeholder="请输入您的手机号码" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">电子邮箱 (选填)</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-pink-500 transition-colors" placeholder="请输入您的电子邮箱" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">留言内容</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-pink-500 transition-colors h-32 resize-none" placeholder="请输入您的留言内容..." required></textarea>
                                </div>
                                <button type="submit" className="w-full bg-pink-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-pink-700 transition-colors flex items-center justify-center transform hover:-translate-y-1 active:translate-y-0 duration-200">
                                    提交留言 <Send size={20} className="ml-2" />
                                </button>
                            </form>
                        </div>
                    </FadeIn>
                </div>

                {/* Social Media Section */}
                <div id="social" className="scroll-mt-32">
                    <FadeIn direction="up">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">关注我们</h2>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {socialMediaData.map((media, idx) => (
                            // 图标依次冒泡上浮
                            <FadeIn key={idx} delay={idx * 100} direction="up" className="h-full">
                                <div className="flex flex-col items-center group h-full">
                                    <div className="w-32 h-32 bg-white border-2 border-gray-100 rounded-xl p-2 mb-4 shadow-md group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300">
                                        <div className="w-full h-full bg-gray-50 flex items-center justify-center relative overflow-hidden rounded-lg">
                                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#333_30%,transparent_31%)] bg-[length:4px_4px]"></div>
                                            <div className={`absolute inset-0 bg-white opacity-90 flex items-center justify-center`}><div className={`text-white p-2 rounded-full shadow-sm ${media.color} transform group-hover:scale-110 transition-transform duration-300`}>{media.icon}</div></div>
                                        </div>
                                    </div>
                                    <span className="font-bold text-gray-700 group-hover:text-pink-600 transition-colors">{media.name}</span>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};