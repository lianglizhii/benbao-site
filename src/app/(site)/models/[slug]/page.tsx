import { createReader } from '@keystatic/core/reader';
import { notFound } from 'next/navigation';
// 👇 路径回退5层到根目录，请根据实际情况调整 (如果报错找不到模块，尝试减少一个 ../)
import Config from '../../../../../keystatic.config';
import ModelDetailClient from './ModelDetailClient';
import { CarModel, MainCategory, SubCategory } from '@/types';

const reader = createReader(process.cwd(), Config);

// 1. 生成静态参数 (SSG)
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

    // 3. 数据转换
    const model: CarModel = {
        id: slug,
        name: modelData.name,
        tag: modelData.tag,
        description: modelData.description || '',
        category: modelData.category as MainCategory,
        subCategory: modelData.subCategory === 'none' ? null : (modelData.subCategory as SubCategory),
        images: {
            main: modelData.images.main || '',
            side: modelData.images.side || '',
            // 👇 关键修复：保留 intro，并解决类型报错
            // [... ] 展开只读数组 -> .filter 去除空值 -> 得到纯字符串数组
            intro: ([...(modelData.images.intro || [])]).filter((img): img is string => typeof img === 'string'),
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

    };

    return <ModelDetailClient model={model} />;
}