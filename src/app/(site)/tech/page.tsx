// src/app/tech/page.tsx
"use client";

import React from 'react';
import { Battery, Zap, Smartphone, Layers, ShieldCheck, Wind, ArrowRight } from 'lucide-react';
import Link from 'next/link'; // 替换
import { useLanguage } from '@/context/LanguageContext'; // 引入 Context

export default function TechPage() {
    const { lang } = useLanguage();

    return (
        <div className="animate-fade-in-up">
            {/* Hero */}
            <div className="relative h-[500px] flex items-center justify-center bg-black overflow-hidden">
                <div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
                <div className="relative z-10 text-center text-white p-6 max-w-4xl">
                    <span
                        className="text-pink-500 font-bold tracking-widest uppercase mb-4 block">Core Technology</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">科技，驱动未来</h1>
                    <p className="text-xl opacity-80 font-light max-w-2xl mx-auto">
                        三十年技术积淀，只为每一次出发都更有底气。
                    </p>
                </div>
            </div>

            {/* Tech Grid - 内容保持不变，仅省略了中间部分以节省篇幅，请保留你原始的 JSX 内容 */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    {/* Feature 1 - 3 */}
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
                        <div className="order-2 md:order-1">
                            <div
                                className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-pink-500/20">
                                <Battery size={32}/>
                            </div>
                            <h2 className="text-4xl font-bold mb-6">石墨烯黑金电池技术</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                奔宝第三代石墨烯电池，采用全新铅膏配方，比普通电池容量提升30%，寿命延长2倍。支持快充技术，低温环境性能依然强劲，彻底解决冬季续航缩水的痛点。
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-300 font-medium">
                                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-4"></div>
                                    续航里程提升 30%
                                </li>
                                <li className="flex items-center text-gray-300 font-medium">
                                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-4"></div>
                                    支持 10A 大电流快充
                                </li>
                                <li className="flex items-center text-gray-300 font-medium">
                                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-4"></div>
                                    -20℃ 低温正常放电
                                </li>
                            </ul>
                        </div>
                        <div
                            className="order-1 md:order-2 relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden border border-gray-700 shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                alt="Battery Tech"/>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                        </div>
                    </div>

                    {/* Feature 2 & 3 代码保持你原有的即可 */}
                    {/* ...为了节省空间我没全部复制，你直接用原来的 JSX 即可... */}
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
                        <div
                            className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden border border-gray-700 shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                alt="Motor Tech"/>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                        </div>
                        <div>
                            <div
                                className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-500/20">
                                <Zap size={32}/>
                            </div>
                            <h2 className="text-4xl font-bold mb-6">FOC 矢量动力系统</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                搭载高性能电机与FOC矢量控制器，实时精确控制每一分能量输出。起步丝般顺滑，加速强劲有力，爬坡如履平地，为您带来跑车级的驾控体验。
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-300 font-medium">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                                    能量回收率高达 12%
                                </li>
                                <li className="flex items-center text-gray-300 font-medium">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                                    静音运行，告别噪音
                                </li>
                                <li className="flex items-center text-gray-300 font-medium">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                                    IPX7 级防水电机
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 md:order-1">
                            <div
                                className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-purple-500/20">
                                <Smartphone size={32}/>
                            </div>
                            <h2 className="text-4xl font-bold mb-6">智能互联生态</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                手机即是钥匙。通过Benbao APP，您可以实时查看车辆状态、定位车辆位置、远程解锁、检测故障。NFC刷卡启动，让骑行更简单、更安全。
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-300 font-medium">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                                    GPS/北斗 双模定位
                                </li>
                                <li className="flex items-center text-gray-300 font-medium">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                                    OTA 远程升级
                                </li>
                                <li className="flex items-center text-gray-300 font-medium">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                                    异动报警推送
                                </li>
                            </ul>
                        </div>
                        <div
                            className="order-1 md:order-2 relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden border border-gray-700 shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                alt="Smart Tech"/>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Craftsmanship Section - 保持原样 */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">精工制造</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">每一个细节，都经得起时间的考验。我们坚持使用高于行业标准的原材料和工艺。</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div
                            className="p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:border-pink-200 transition-colors group hover:shadow-xl duration-300">
                            <Layers size={48}
                                    className="text-gray-400 group-hover:text-pink-600 mb-6 transition-colors"/>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">7层烤漆工艺</h3>
                            <p className="text-gray-600 leading-relaxed">采用汽车级PU烤漆，历经3次喷涂4次烘烤，色彩饱满，历久弥新，防腐防锈能力极强。</p>
                        </div>
                        <div
                            className="p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:border-pink-200 transition-colors group hover:shadow-xl duration-300">
                            <ShieldCheck size={48}
                                         className="text-gray-400 group-hover:text-pink-600 mb-6 transition-colors"/>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">高碳钢车架</h3>
                            <p className="text-gray-600 leading-relaxed">精选高品质冷轧碳素钢，机器人自动焊接，通过100万次震动测试，承重力强，终身质保。</p>
                        </div>
                        <div
                            className="p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:border-pink-200 transition-colors group hover:shadow-xl duration-300">
                            <Wind size={48} className="text-gray-400 group-hover:text-pink-600 mb-6 transition-colors"/>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">流体雕塑设计</h3>
                            <p className="text-gray-600 leading-relaxed">结合空气动力学原理，优化车身线条，降低风阻系数，提升续航的同时，带来极致视觉美感。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-pink-600 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">亲身体验科技魅力</h2>
                    <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">了解了这么多，不如亲自试驾体验奔宝电动车的卓越性能。</p>
                    <Link href="/models"
                          className="inline-flex items-center bg-white text-pink-600 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 hover:scale-105 transition-all">
                        浏览全系车型 <ArrowRight size={20} className="ml-2"/>
                    </Link>
                </div>
            </section>
        </div>
    );
};