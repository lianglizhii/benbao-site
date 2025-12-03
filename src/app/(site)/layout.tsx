import { createReader } from '@keystatic/core/reader';
import Config from '../../../keystatic.config';
import ClientLayout from '@/components/ClientLayout';
import { CarModel, MainCategory, SubCategory } from '@/types';

// 1. 初始化 Reader
const reader = createReader(process.cwd(), Config);

export default async function SiteLayout({
                                             children,
                                         }: {
    children: React.ReactNode
}) {
    // 2. 读取车型数据
    const modelsRaw = await reader.collections.models.all();

    // 3. 转换数据 (Navbar 只需要部分字段，但为了类型安全，我们填充完整结构)
    const allModels: CarModel[] = modelsRaw.map(item => ({
        id: item.slug,
        name: item.entry.name,
        tag: item.entry.tag,
        category: item.entry.category as MainCategory,
        subCategory: item.entry.subCategory === 'none' ? null : (item.entry.subCategory as SubCategory),
        images: {
            // Navbar 主要使用 main 图
            main: item.entry.images.main || '',
            side: '',
            intro: []
        },
        description: '',
        colors: [],
        configurations: [],
        staticSpecs: {} as any // Navbar 不用这些，留空即可
    }));

    return (
        // 4. 将数据注入 ClientLayout
        <ClientLayout allModels={allModels}>
            {children}
        </ClientLayout>
    );
}