// src/app/(site)/business/BusinessClient.tsx
"use client";

import React from 'react';
import { Target as TargetIcon, Users, FileText } from 'lucide-react';

// 定义 Props 接口
export interface Partner {
    name: string;
    logo: string;
}

export default function BusinessClient({ partners }: { partners: Partner[] }) {
    return (
        <div className="animate-fade-in-up">
            {/* <SEO title="商务合作" description="..." /> */}

            {/* Hero */}
            <div className="relative h-[400px] flex items-center justify-center bg-gray-900 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Business" />
                <div className="relative z-10 text-center text-white p-6">
                    <h1 className="text-5xl font-bold mb-4">商务合作</h1>
                    <p className="text-xl opacity-90">携手共赢，共创绿色出行未来</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">

                {/* Partners Grid (Dynamic Data) */}
                <div id="partners" className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">合作伙伴</h2>
                        <p className="text-gray-500">与全球顶尖供应商同行，打造卓越品质</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        {/* 👇 这里使用 props 传进来的 partners */}
                        {partners.map((partner, idx) => (
                            <div key={idx} className="flex justify-center p-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                                {/* 注意：img src 是 Keystatic 路径 */}
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-12 w-auto object-contain hover:scale-110 transition-transform"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Franchise Info (Static Content - Kept Exactly as Original) */}
                <div id="franchise" className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">经销商加盟</h2>
                        <p className="text-gray-500">加入奔宝全球销售网络，共享行业增长红利</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mb-6">
                                <TargetIcon size={28}/>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900">加盟优势</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start"><span className="mr-2 text-pink-500">•</span> 品牌优势：30年行业积淀，知名度高</li>
                                <li className="flex items-start"><span className="mr-2 text-pink-500">•</span> 产品优势：自主研发，品类齐全，覆盖全场景</li>
                                <li className="flex items-start"><span className="mr-2 text-pink-500">•</span> 营销支持：全网推广流量扶持，大额广告补贴</li>
                                <li className="flex items-start"><span className="mr-2 text-pink-500">•</span> 售后保障：全国联保，无忧售后服务体系</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mb-6">
                                <Users size={28}/>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900">加盟要求</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start"><span className="mr-2 text-pink-500">•</span> 认同奔宝品牌理念及经营模式</li>
                                <li className="flex items-start"><span className="mr-2 text-pink-500">•</span> 拥有当地良好的商业资源与人脉</li>
                                <li className="flex items-start"><span className="mr-2 text-pink-500">•</span> 店面面积不低于50平方米，位置良好</li>
                                <li className="flex items-start"><span className="mr-2 text-pink-500">•</span> 具备一定的资金实力和团队管理能力</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mb-6">
                                <FileText size={28}/>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900">加盟流程</h3>
                            <div className="text-sm text-gray-600 space-y-4">
                                <div className="flex items-center">
                                    <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-xs mr-3 font-bold shadow-sm text-pink-600">1</span>
                                    提交申请 / 商务咨询
                                </div>
                                <div className="flex items-center">
                                    <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-xs mr-3 font-bold shadow-sm text-pink-600">2</span>
                                    总部考察 / 细节洽谈
                                </div>
                                <div className="flex items-center">
                                    <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-xs mr-3 font-bold shadow-sm text-pink-600">3</span>
                                    签订合同 / 授权颁发
                                </div>
                                <div className="flex items-center">
                                    <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-xs mr-3 font-bold shadow-sm text-pink-600">4</span>
                                    装修开业 / 培训指导
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-16 p-8 bg-pink-50 rounded-2xl">
                        <h4 className="text-xl font-bold text-pink-900 mb-2">立即开启财富之路</h4>
                        <p className="text-pink-700 mb-6">专业的加盟顾问将为您提供一对一服务</p>
                        <button className="bg-pink-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-pink-700 hover:scale-105 transition-all">立即申请加盟</button>
                        <p className="mt-4 text-gray-500 text-sm">加盟热线：<span className="font-bold text-gray-900">400 180 3888</span> (转2)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};