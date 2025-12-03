import { config, fields, collection } from '@keystatic/core';


export default config({
    storage: {
        kind: 'local',
    },
    singletons: {
        faqAndPolicy: {
            label: '服务与政策管理',
            path: 'src/content/singletons/service-policy', // 存储位置
            schema: {
                // --- FAQ 常见问题 (Array of Objects) ---
                faqItems: fields.array(
                    fields.object({
                        q: fields.text({ label: '问题 (Question)' }),
                        a: fields.text({ label: '回答 (Answer)', multiline: true }),
                    }),
                    {
                        label: '常见问题列表 (FAQ)',
                        itemLabel: props => props.fields.q.value || '新问题'
                    }
                ),

                // --- 政策条款 (Array of Objects) ---
                policyItems: fields.array(
                    fields.object({
                        part: fields.text({ label: '部件名称 (Part)' }),
                        term: fields.text({ label: '保修期限 (Term)' }),
                        desc: fields.text({ label: '保修说明 (Description)' }),
                    }),
                    {
                        label: '保修政策列表 (Policy)',
                        itemLabel: props => props.fields.part.value || '新部件'
                    }
                ),
            },
        },
    },
    collections: {
        //新闻管理
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

        //车型管理
        models: collection({
            label: '车型管理',
            slugField: 'name',
            path: 'src/content/models/*',
            schema: {
                name: fields.slug({ name: { label: '车型名称 (Name)' } }),
                description: fields.text({
                    label: '简短描述 (Description)',
                    multiline: true, // 允许换行
                    validation: { length: { min: 1 } }
                }),
                tag: fields.text({ label: '标签 (Tag)', description: '例如: 长续航, 赛道级' }),
                category: fields.select({
                    label: '主分类',
                    options: [
                        { label: '新国标 (New National Standard)', value: 'new-national-standard' },
                        { label: '电摩 (Electric Motorcycle)', value: 'electric-motorcycle' },
                        { label: '三轮车 (Tricycle)', value: 'tricycle' },
                    ],
                    defaultValue: 'electric-motorcycle',
                }),
                subCategory: fields.select({
                    label: '子分类 (仅电摩有效)',
                    options: [
                        { label: '无 (None)', value: 'none' }, // Keystatic select 不支持 null，用 string 代替
                        { label: '强劲动力 (Powerful)', value: 'powerful' },
                        { label: '品质甄选 (Quality)', value: 'quality' },
                        { label: '都市通勤 (Urban)', value: 'urban' },
                        { label: '轻便易用 (Light)', value: 'light' },
                    ],
                    defaultValue: 'none',
                }),
                // 图片组
                images: fields.object({
                    main: fields.image({
                        label: '主图 (Main View)',
                        directory: 'public/images/models',
                        publicPath: '/images/models/',
                    }),
                    side: fields.image({
                        label: '侧视图 (Side View)',
                        directory: 'public/images/models',
                        publicPath: '/images/models/',
                    }),
                    // 营销图组
                    intro: fields.array(
                        fields.image({
                            label: '介绍图',
                            directory: 'public/images/models/intro',
                            publicPath: '/images/models/intro/',
                        }),
                        { label: '详情页营销图 (Marketing Images)' }
                    ),
                }),
                // 颜色配置
                colors: fields.array(
                    fields.object({
                        name: fields.text({ label: '颜色名称' }),
                        hex: fields.text({ label: '色值 (Hex)', description: '例如 #FF0000' }),
                        image: fields.image({
                            label: '该颜色的车身图 (可选)',
                            directory: 'public/images/models/colors',
                            publicPath: '/images/models/colors/',
                        }),
                    }),
                    { label: '车身颜色' }
                ),
                // 3D模型链接
                model3d: fields.text({ label: '3D模型 URL (.glb)', description: '可选' }),

                // 静态参数 (Static Specs)
                staticSpecs: fields.object({
                    dimensions: fields.text({ label: '长x宽x高 (Dimensions)' }),
                    display: fields.text({ label: '仪表 (Display)' }),
                    lights: fields.text({ label: '灯光 (Lights)' }),
                    ratedLoad: fields.text({ label: '载重 (Rated Load)' }),
                    brakes: fields.text({ label: '制动 (Brakes)' }),
                    tires: fields.text({ label: '轮胎 (Tires)' }),
                    ratedRpm: fields.text({ label: '额定转速 (RPM)' }),
                    otherFeatures: fields.text({ label: '其他特性 (Features)' }),
                }),

                // 动力配置 (Configurations - 因为可能有多个版本，如标准版/长续航版)
                configurations: fields.array(
                    fields.object({
                        name: fields.text({ label: '版本名称 (如: 长续航版)' }),
                        batteryType: fields.text({ label: '电池类型' }),
                        voltage: fields.text({ label: '电压 (Voltage)' }),
                        capacity: fields.text({ label: '容量 (Capacity)' }),
                        chargingTime: fields.text({ label: '充电时间' }),
                        range: fields.text({ label: '续航里程' }),
                        maxSpeed: fields.text({ label: '最高时速' }),
                        climbingAbility: fields.text({ label: '爬坡角度' }),
                        motor: fields.text({ label: '电机功率' }),
                        controller: fields.text({ label: '控制器' }),
                        curbWeight: fields.text({ label: '整车重量' }),
                        powerConsumption: fields.text({ label: '百公里耗电' }),
                    }),
                    { label: '动力版本配置', itemLabel: props => props.fields.name.value }
                ),
            },
        }),

        // 在 models 集合后面添加
        honors: collection({
            label: '荣誉认证',
            slugField: 'title', // 使用标题作为文件名
            path: 'src/content/honors/*',
            format: { contentField: 'content' }, // 这里的 content 其实用不到，为了兼容性保留
            schema: {
                title: fields.slug({ name: { label: '荣誉名称 (Title)' } }),
                year: fields.text({ label: '获奖年份 (Year)', validation: { length: { min: 4, max: 4 } } }),
                image: fields.image({
                    label: '证书图片',
                    directory: 'public/images/honors',
                    publicPath: '/images/honors/',
                    validation: { isRequired: true }
                }),
                // 必须有一个 content 字段，即使我们不怎么用它，用来存点备注也好
                content: fields.document({
                    label: '备注说明 (可选)',
                    formatting: true
                }),
            },
        }),
    },
});