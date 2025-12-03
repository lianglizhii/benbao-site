// src/app/models/[id]/page.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation'; // 1. 替换 import
import Link from 'next/link'; // 2. 替换 import
import { ChevronRight, RotateCw, CheckCircle2, Box, Loader2 } from 'lucide-react';
// import SEO from '@/components/SEO';
import { allModels } from '@/constants';
import { CarModel } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

// Add type definition for model-viewer custom element
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': any;
        }
    }
}

// 辅助组件：参数行
const SpecRow: React.FC<{ label: string; value: string; highlight?: boolean }> = ({ label, value, highlight }) => (
    <div className="border-b border-gray-100 p-4 flex justify-between items-center md:items-start hover:bg-gray-50 transition-colors">
        <span className="text-gray-500 text-sm flex-shrink-0 mr-4">{label}</span>
        <span className={`font-medium text-right break-words ${highlight ? 'text-pink-600 font-bold' : 'text-gray-900'}`}>{value}</span>
    </div>
);

export default function ProductDetailPage() {
    const { lang } = useLanguage(); // 使用 Context
    const params = useParams(); // 获取参数
    const id = params?.id as string; // 强制断言为 string

    const [model, setModel] = useState<CarModel | null>(null);
    const [selectedColor, setSelectedColor] = useState(0);
    const [viewType, setViewType] = useState<'main' | 'side' | '3d'>('main');
    const [activeConfigIndex, setActiveConfigIndex] = useState(0);

    // 3D Model Loading State
    const [isModelLoaded, setIsModelLoaded] = useState(false);
    const modelViewerRef = useRef<HTMLElement>(null);

    // Reset config index when ID changes
    useEffect(() => {
        setActiveConfigIndex(0);
        setSelectedColor(0);
        setViewType('main');
        setIsModelLoaded(false);
    }, [id]);

    useEffect(() => {
        const foundModel = allModels.find(m => m.id === id);
        setModel(foundModel || null);
    }, [id]);

    // Handle 3D Model Load Event
    useEffect(() => {
        const viewer = modelViewerRef.current;
        if (viewType === '3d' && viewer) {
            const handleLoad = () => {
                setIsModelLoaded(true);
            };

            // Reset loading state when switching to 3D view
            if (!isModelLoaded) {
                // Keep loading false
            }

            viewer.addEventListener('load', handleLoad);
            return () => {
                viewer.removeEventListener('load', handleLoad);
            };
        } else {
            // Reset if we switch away
            setIsModelLoaded(false);
        }
    }, [viewType, model, isModelLoaded]); // 添加了 isModelLoaded 到依赖项以消除警告

    if (!model) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
            </div>
        );
    }

    // Safe access to config
    const activeConfig = model.configurations[activeConfigIndex] || model.configurations[0];

    return (
        <div className="animate-fade-in-up bg-white min-h-screen pt-20">
            {/* Hero / Configurator Section */}
            <section className="container mx-auto px-6 py-10">
                <div className="text-sm text-gray-500 mb-8 flex items-center">
                    <Link href="/models" className="hover:text-pink-600 transition-colors">全系车型</Link>
                    <ChevronRight size={14} className="mx-2" />
                    <span className="text-gray-900 font-bold">{model.name}</span>
                </div>

                <div className="grid md:grid-cols-12 gap-12">
                    {/* Left: Visuals */}
                    <div className="md:col-span-8">
                        <div className="relative bg-gray-50 rounded-3xl aspect-[4/3] flex items-center justify-center overflow-hidden mb-6 group">
                            {viewType === '3d' && model.model3d ? (
                                <>
                                    {/* Loading Skeleton & Spinner */}
                                    <div
                                        className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-gray-100 transition-opacity duration-500 ${isModelLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                                    >
                                        <div className="relative w-48 h-32 mb-6">
                                            {/* Car Body Placeholder */}
                                            <div className="absolute bottom-0 w-full h-16 bg-gray-200 rounded-lg animate-pulse"></div>
                                            {/* Wheel Placeholders */}
                                            <div className="absolute -bottom-4 left-4 w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div>
                                            <div className="absolute -bottom-4 right-4 w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div>
                                        </div>
                                        <div className="flex items-center space-x-2 text-pink-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                                            <Loader2 size={18} className="animate-spin" />
                                            <span className="text-sm font-bold">3D 模型加载中...</span>
                                        </div>
                                    </div>

                                    <model-viewer
                                        ref={modelViewerRef}
                                        src={model.model3d}
                                        alt={`3D model of ${model.name}`}
                                        shadow-intensity="1"
                                        camera-controls
                                        auto-rotate
                                        touch-action="pan-y"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            opacity: isModelLoaded ? 1 : 0,
                                            transition: 'opacity 0.7s ease-in-out'
                                        }}
                                    >
                                    </model-viewer>
                                </>
                            ) : (
                                <>
                                    <img
                                        src={viewType === 'side' ? model.images.side : model.images.main}
                                        alt={model.name}
                                        className="w-[90%] h-auto object-contain transition-all duration-500"
                                    />
                                    <button
                                        onClick={() => setViewType(prev => prev === 'main' ? 'side' : 'main')}
                                        className="absolute bottom-6 right-6 bg-white/80 backdrop-blur p-3 rounded-full shadow-lg hover:bg-white text-gray-700 transition-all hover:scale-110"
                                        title="切换视角"
                                    >
                                        <RotateCw size={24} />
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="flex justify-center space-x-4">
                            <button
                                className={`w-24 h-16 rounded-xl border-2 cursor-pointer overflow-hidden transition-all ${viewType === 'main' ? 'border-pink-600 ring-2 ring-pink-100' : 'border-gray-200 hover:border-gray-300'}`}
                                onClick={() => setViewType('main')}
                            >
                                <img src={model.images.main} className="w-full h-full object-cover" alt="Main View" />
                            </button>
                            <button
                                className={`w-24 h-16 rounded-xl border-2 cursor-pointer overflow-hidden transition-all ${viewType === 'side' ? 'border-pink-600 ring-2 ring-pink-100' : 'border-gray-200 hover:border-gray-300'}`}
                                onClick={() => setViewType('side')}
                            >
                                <img src={model.images.side} className="w-full h-full object-cover" alt="Side View" />
                            </button>
                            {model.model3d && (
                                <button
                                    className={`w-24 h-16 rounded-xl border-2 cursor-pointer overflow-hidden transition-all flex flex-col items-center justify-center bg-gray-50 ${viewType === '3d' ? 'border-pink-600 ring-2 ring-pink-100 text-pink-600' : 'border-gray-200 hover:border-gray-300 text-gray-500'}`}
                                    onClick={() => setViewType('3d')}
                                >
                                    <Box size={24} className="mb-1" />
                                    <span className="text-[10px] font-bold">3D 视图</span>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Right: Info & Selection */}
                    <div className="md:col-span-4 space-y-8">
                        <div>
              <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block">
                {model.tag}
              </span>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">{model.name}</h1>
                            <p className="text-gray-500 leading-relaxed">{model.description}</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-gray-900 uppercase mb-4 tracking-wider">选择颜色</h3>
                            <div className="flex flex-wrap gap-3">
                                {model.colors.map((color, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => { setSelectedColor(idx); if(viewType === '3d') setViewType('main'); }}
                                        className={`w-10 h-10 rounded-full border-2 shadow-sm flex items-center justify-center transition-all ${selectedColor === idx ? 'border-pink-600 scale-110' : 'border-gray-200 hover:scale-105'}`}
                                        style={{ backgroundColor: color.hex }}
                                        title={color.name}
                                    >
                                        {selectedColor === idx && <CheckCircle2 size={16} className={`${['白', '米黄', '银'].includes(color.name) ? 'text-gray-800' : 'text-white'}`} />}
                                    </button>
                                ))}
                            </div>
                            <p className="mt-2 text-sm text-gray-500">已选: <span className="font-medium text-gray-900">{model.colors[selectedColor].name}</span></p>
                        </div>

                        <div className="pt-8 border-t border-gray-100">
                            <h3 className="text-sm font-bold text-gray-900 uppercase mb-4 tracking-wider">业务咨询</h3>
                            <div className="bg-gray-50 p-4 rounded-xl mb-4">
                                <p className="text-sm text-gray-600 mb-2">如果您对该车型感兴趣，欢迎联系我们获取详细报价单和招商政策。</p>
                            </div>
                            <Link href="/contact" className="block w-full bg-gray-900 text-white text-center py-4 rounded-xl font-bold hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl">
                                联系销售顾问
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Images */}
            {model.images.intro && model.images.intro.length > 0 && (
                <section className="py-10 bg-gray-50">
                    <div className="container mx-auto px-0 md:px-6 space-y-4">
                        {model.images.intro.map((img, idx) => (
                            <img key={idx} src={img} alt="Product Feature" className="w-full h-auto rounded-none md:rounded-2xl shadow-sm" />
                        ))}
                    </div>
                </section>
            )}

            {/* Specs Table */}
            <section className="py-20 container mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4">技术参数</h2>
                    <p className="text-gray-500">详细配置表与性能数据</p>
                </div>

                {/* Config Switcher */}
                <div className="flex justify-center mb-8">
                    <div className="bg-gray-100 p-1.5 rounded-xl inline-flex shadow-inner">
                        {model.configurations.map((conf, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveConfigIndex(idx)}
                                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${activeConfigIndex === idx ? 'bg-white text-pink-600 shadow-md' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'}`}
                            >
                                {conf.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <SpecRow label="车辆名称" value={model.name} />
                        <SpecRow label="配置版本" value={activeConfig.name} highlight />

                        <SpecRow label="电池类型" value={activeConfig.batteryType} />
                        <SpecRow label="电池规格" value={`${activeConfig.voltage} / ${activeConfig.capacity}`} />

                        <SpecRow label="电机功率" value={activeConfig.motor} />
                        <SpecRow label="控制器" value={activeConfig.controller} />

                        <SpecRow label="最高时速" value={activeConfig.maxSpeed} />
                        <SpecRow label="续航里程" value={activeConfig.range} highlight />

                        <SpecRow label="充电时间" value={activeConfig.chargingTime} />
                        <SpecRow label="百公里耗电" value={activeConfig.powerConsumption} />

                        <SpecRow label="整车尺寸" value={model.staticSpecs.dimensions} />
                        <SpecRow label="整备质量" value={activeConfig.curbWeight} />

                        <SpecRow label="制动方式 (前/后)" value={model.staticSpecs.brakes} />
                        <SpecRow label="轮胎规格" value={model.staticSpecs.tires} />

                        <SpecRow label="显示屏" value={model.staticSpecs.display} />
                        <SpecRow label="灯具系统" value={model.staticSpecs.lights} />

                        <SpecRow label="额定载重" value={model.staticSpecs.ratedLoad} />
                        <SpecRow label="爬坡能力" value={activeConfig.climbingAbility} />

                        <div className="md:col-span-2 border-b border-gray-100 last:border-0 p-5 flex flex-col md:flex-row bg-gray-50">
                            <span className="text-gray-500 text-sm font-medium w-32 mb-1 md:mb-0 flex-shrink-0">其他特征</span>
                            <span className="text-gray-900 font-medium">{model.staticSpecs.otherFeatures}</span>
                        </div>
                    </div>
                </div>
                <p className="text-center text-gray-400 text-xs mt-6">
                    * 实际续航里程受载重、温度、风速、路面情况及操作习惯等多种因素影响，以上数据仅供参考。
                </p>
            </section>

        </div>
    );
};