import { createReader } from '@keystatic/core/reader';
import Config from '../../../../keystatic.config'; // 确保路径正确
import AboutClient from './AboutClient';

const reader = createReader(process.cwd(), Config);

export default async function AboutPage() {
    // 1. 读取荣誉数据
    const honorsRaw = await reader.collections.honors.all();

    // 2. 格式化
    const honors = honorsRaw.map(item => ({
        id: item.slug,
        title: item.entry.title,
        year: item.entry.year,
        image: item.entry.image || '',
    })).sort((a, b) => Number(b.year) - Number(a.year)); // 按年份倒序

    // 3. 传给客户端组件
    return <AboutClient honors={honors} />;
}