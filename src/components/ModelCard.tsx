// src/components/ModelCard.tsx
"use client"; // 1. 必须添加：因为它使用了 useState

import React, { useState } from 'react';
import Link from 'next/link'; // 2. 替换：react-router-dom -> next/link
import { Battery, Zap, Gauge } from 'lucide-react';
import { CarModel } from '@/types'; // 建议使用 @/types

interface ModelCardProps {
    model: CarModel;
    lang: 'zh' | 'en';
}

const ModelCard: React.FC<ModelCardProps> = ({ model, lang }) => {
    const [activeColorIdx, setActiveColorIdx] = useState(0);

    const colors = model.colors || [];
    const activeColor = colors[activeColorIdx];
    const displayImage = activeColor?.image || model.images.main;

    const labels = {
        range: lang === 'zh' ? '续航' : 'Range',
        speed: lang === 'zh' ? '极速' : 'Speed',
        power: lang === 'zh' ? '动力' : 'Power',
    };

    return (
        // 3. 替换：to -> href
        <Link
            href={`/models/${model.id}`}
            className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full hover:-translate-y-1"
        >
            <div className="relative h-64 overflow-hidden bg-gray-100">
                {/* 如果想进一步优化，以后可以将 img 换成 Next.js 的 Image 组件 */}
                <img
                    src={displayImage}
                    alt={model.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[10px] px-2 py-1 rounded shadow-sm text-gray-700 font-bold uppercase tracking-wider">
                    {model.tag}
                </div>
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">{model.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 min-h-[1.75rem] items-center" onClick={(e) => e.preventDefault()}>
                    {colors.map((color, idx) => (
                        <div
                            key={idx}
                            onMouseEnter={() => setActiveColorIdx(idx)}
                            className={`w-6 h-6 rounded-full cursor-pointer border-2 shadow-sm transition-all duration-300 ${activeColorIdx === idx ? 'border-pink-600 scale-110' : 'border-gray-200 hover:scale-110 hover:border-pink-300'}`}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                        >
                        </div>
                    ))}
                    {colors.length > 0 && (
                        <span className="text-xs text-gray-500 ml-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-[-10px] group-hover:translate-x-0">
                      {activeColor?.name}
                  </span>
                    )}
                </div>

                <div className="mt-auto grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
                    <div className="text-center">
                        <div className="flex justify-center text-gray-400 mb-1"><Battery size={16} /></div>
                        <p className="text-[10px] text-gray-500 uppercase">{labels.range}</p>
                        <p className="font-bold text-gray-800 text-sm">{model.configurations[0]?.range || "N/A"}</p>
                    </div>
                    <div className="text-center border-l border-gray-100">
                        <div className="flex justify-center text-gray-400 mb-1"><Gauge size={16} /></div>
                        <p className="text-[10px] text-gray-500 uppercase">{labels.speed}</p>
                        <p className="font-bold text-gray-800 text-sm">{model.configurations[0]?.maxSpeed || "N/A"}</p>
                    </div>
                    <div className="text-center border-l border-gray-100">
                        <div className="flex justify-center text-gray-400 mb-1"><Zap size={16} /></div>
                        <p className="text-[10px] text-gray-500 uppercase">{labels.power}</p>
                        <p className="font-bold text-gray-800 text-sm">{model.configurations[0]?.motor || "N/A"}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ModelCard;