import { createReader } from '@keystatic/core/reader';
import Config from '../../../../keystatic.config';
import { CarModel, MainCategory, SubCategory } from '@/types';
import ModelsClient from './ModelsClient'; // 引入上面的客户端组件

const reader = createReader(process.cwd(), Config);

export default async function ModelsPage() {
    // 1. 从 Keystatic 读取所有车型
    const modelsRaw = await reader.collections.models.all();

    // 2. 将数据转换为前端组件需要的 CarModel 格式
    const allModels: CarModel[] = modelsRaw.map(item => {
        const entry = item.entry;

        // 处理 description (Keystatic 返回的是 Promise 形式的 document)
        // 注意：列表页通常不需要详细的 description 内容，或者只需要纯文本简介
        // 这里为了类型兼容，我们暂时给一个简单的字符串，或者你需要 await entry.description() 如果真的需要渲染
        const descriptionText = "详细配置请查看详情页";

        return {
            id: item.slug,
            name: entry.name,
            tag: entry.tag,
            // 强制类型转换：Keystatic 返回的是 string，但我们确信它是 MainCategory
            category: entry.category as MainCategory,
            subCategory: entry.subCategory === 'none' ? null : (entry.subCategory as SubCategory),
            images: {
                main: entry.images.main || '',
                side: entry.images.side || '',
                intro: entry.images.intro || [],
            },
            description: descriptionText,
            // 处理颜色图片可能为空的情况
            colors: entry.colors.map(c => ({
                name: c.name,
                hex: c.hex,
                image: c.image || undefined
            })),
            configurations: entry.configurations.map(c => ({
                ...c,
                // 确保所有字段都是 string，如果 Keystatic 允许空，给个默认值
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
                dimensions: entry.staticSpecs.dimensions || '',
                display: entry.staticSpecs.display || '',
                lights: entry.staticSpecs.lights || '',
                ratedLoad: entry.staticSpecs.ratedLoad || '',
                brakes: entry.staticSpecs.brakes || '',
                tires: entry.staticSpecs.tires || '',
                ratedRpm: entry.staticSpecs.ratedRpm || '',
                otherFeatures: entry.staticSpecs.otherFeatures || '',
            },
            model3d: entry.model3d || undefined,
        };
    });

    // 3. 将处理好的数据传给客户端组件
    return <ModelsClient allModels={allModels} />;
}