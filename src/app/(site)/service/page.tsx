// src/app/(site)/service/page.tsx
import { createReader } from '@keystatic/core/reader';
import Config from '../../../../keystatic.config';
import ServiceClient, { ServiceDataProps } from './ServiceClient';
// 👇 引入 Suspense
import { Suspense } from 'react';

const reader = createReader(process.cwd(), Config);

export default async function ServicePage() {
    const serviceData = await reader.singletons.faqAndPolicy.read();

    const props: ServiceDataProps = {
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

    return (
        // 👇 包裹 Suspense
        <Suspense fallback={<div className="h-screen"></div>}>
            <ServiceClient {...props} />
        </Suspense>
    );
};