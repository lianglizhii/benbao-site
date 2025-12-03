// src/app/(site)/models/[slug]/page.tsx
import { createReader } from '@keystatic/core/reader';
import { notFound } from 'next/navigation';
import Config from '../../../../../keystatic.config'; // 请确保路径层级正确
import ModelDetailClient from './ModelDetailClient';
import { CarModel, MainCategory, SubCategory } from '@/types';

const reader = createReader(process.cwd(), Config);

// 1. 生成静态参数 (SSG)，这能让页面构建为静态 HTML
export async function generateStaticParams() {
    const slugs = await reader.collections.models.list();
    return slugs.map((slug) => ({ slug }));
}

// 2. 页面主组件
export default async function ModelDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    // Next.js 15: 必须先 await params
    const { slug } = await params;

    // 从 Keystatic 读取原始数据
    const modelData = await reader.collections.models.read(slug);

    if (!modelData) {
        notFound();
    }

    // 3. 数据转换：Keystatic 数据 -> CarModel 类型
    // 我们需要把可能为 null/undefined 的字段填充好，避免前端报错
    const model: CarModel = {
        id: slug,
        name: modelData.name,
        tag: modelData.tag,
        description: modelData.description || '', // 现在这里是纯文本了
        category: modelData.category as MainCategory,
        subCategory: modelData.subCategory === 'none' ? null : (modelData.subCategory as SubCategory),
        images: {
            main: modelData.images.main || '',
            side: modelData.images.side || '',
            intro: modelData.images.intro || [],
        },
        colors: modelData.colors.map(c => ({
            name: c.name,
            hex: c.hex,
            image: c.image || undefined
        })),
        configurations: modelData.configurations.map(c => ({
            name: c.name || '',
            batteryType: c.batteryType || '',
            voltage: c.voltage || '',
            capacity: c.capacity || '',
            chargingTime: c.chargingTime || '',
            range: c.range || '',
            maxSpeed: c.maxSpeed || '',
            climbingAbility: c.climbingAbility || '',
            motor: c.motor || '',
            controller: c.controller || '',
            curbWeight: c.curbWeight || '',
            powerConsumption: c.powerConsumption || '',
        })),
        staticSpecs: {
            dimensions: modelData.staticSpecs.dimensions || '',
            display: modelData.staticSpecs.display || '',
            lights: modelData.staticSpecs.lights || '',
            ratedLoad: modelData.staticSpecs.ratedLoad || '',
            brakes: modelData.staticSpecs.brakes || '',
            tires: modelData.staticSpecs.tires || '',
            ratedRpm: modelData.staticSpecs.ratedRpm || '',
            otherFeatures: modelData.staticSpecs.otherFeatures || '',
        },
        model3d: modelData.model3d || undefined,
    };

    // 4. 渲染客户端组件
    return <ModelDetailClient model={model} />;
}