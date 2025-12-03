import { config, fields, collection } from '@keystatic/core';

// 👇 重点改了这里：不要用 default，改成 export const keystaticConfig
export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        news: collection({
            label: '新闻资讯',
            slugField: 'title',
            path: 'src/content/news/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: '标题' } }),
                date: fields.date({ label: '发布日期', validation: { isRequired: true } }),
                category: fields.select({
                    label: '分类',
                    options: [
                        { label: '品牌动态', value: '品牌动态' },
                        { label: '技术创新', value: '技术创新' },
                        { label: '企业新闻', value: '企业新闻' },
                        { label: '社会责任', value: '社会责任' },
                        { label: '荣誉奖项', value: '荣誉奖项' },
                    ],
                    defaultValue: '品牌动态',
                }),
                image: fields.image({
                    label: '封面图',
                    directory: 'public/images/news',
                    publicPath: '/images/news/',
                }),
                snippet: fields.text({
                    label: '摘要',
                    multiline: true,
                }),
                content: fields.document({
                    label: '正文内容',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: true,
                }),
            },
        }),
    },
});