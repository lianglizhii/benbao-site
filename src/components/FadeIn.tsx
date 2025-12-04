// src/components/FadeIn.tsx
"use client";

import React, { useRef, useEffect, useState } from 'react';

interface FadeInProps {
    children: React.ReactNode;
    delay?: number; // 延迟时间，用于实现错峰效果
    className?: string; // 允许传入额外的样式
    direction?: 'up' | 'left' | 'right'; // 动画方向，默认向上
}

export default function FadeIn({ children, delay = 0, className = "", direction = 'up' }: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // 当元素进入屏幕 10% 时触发动画，并且只触发一次
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    // 根据方向定义初始位置
    const getTransform = () => {
        if (!isVisible) {
            switch (direction) {
                case 'up': return 'translate-y-12'; // 向下偏移，准备上浮
                case 'left': return '-translate-x-12'; // 向左偏移，准备右滑
                case 'right': return 'translate-x-12'; // 向右偏移，准备左滑
                default: return 'translate-y-12';
            }
        }
        return 'translate-0'; // 归位
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${className} ${getTransform()} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: `${delay}ms` }} // 动态设置延迟
        >
            {children}
        </div>
    );
}