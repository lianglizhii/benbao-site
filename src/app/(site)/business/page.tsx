// src/app/(site)/business/page.tsx
import { createReader } from '@keystatic/core/reader';
import Config from '../../../../keystatic.config';
import BusinessClient, { Partner } from './BusinessClient';

const reader = createReader(process.cwd(), Config);

export default async function BusinessPage() {
    // 1. 读取单例数据
    const partnersData = await reader.singletons.partners.read();

    // 2. 准备传给前端的 props
    const partners: Partner[] = partnersData?.partnerList.map(p => ({
        name: p.name || 'N/A',
        // Logo 路径从 Keystatic 获取
        logo: p.logo || '',
    })) || [];

    // 3. 渲染客户端组件
    return <BusinessClient partners={partners} />;
};