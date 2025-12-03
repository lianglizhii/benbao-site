// src/app/(site)/service/page.tsx
import { createReader } from '@keystatic/core/reader';
import Config from '../../../../keystatic.config';
import ServiceClient, { ServiceDataProps } from './ServiceClient';

const reader = createReader(process.cwd(), Config);

export default async function ServicePage() {
    // 1. 读取单例数据
    // Keystatic 的单例返回 Promise<entry | null>
    const serviceData = await reader.singletons.faqAndPolicy.read();

    // 2. 准备传给前端的数据结构
    const props: ServiceDataProps = {
        // 如果数据不存在，则给空数组，防止客户端崩溃
        faqData: serviceData?.faqItems.map(item => ({
            q: item.q || '',
            a: item.a || '',
        })) || [],

        policyData: serviceData?.policyItems.map(item => ({
            part: item.part || '',
            term: item.term || '',
            desc: item.desc || '',
        })) || [],
    };

    // 3. 渲染客户端组件
    return <ServiceClient {...props} />;
};