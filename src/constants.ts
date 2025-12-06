
import { CarModel, FAQItem, HistoryEvent, Honor, NewsItem, PolicyItem, ValueItem, Translation, Partner, MapLocation } from './types';

export const globalLocations: MapLocation[] = [
    { name: "河南工厂 (Henan)", top: "31%", left: "78%" },
    { name: "天津工厂 (Tianjing)", top: "28%", left: "79%" },
    { name: "浙江本部 (Zhejiang)", top: "35%", left: "81%" },
    { name: "伊朗 (Iran)", top: "35%", left: "62%" },
    { name: "巴西 (Brazil)", top: "63%", left: "34%" },
    { name: "越南 (Vietnam)", top: "45%", left: "79%" },
    { name: "乌克兰 (Ukraine)", top: "25%", left: "55%" },
    { name: "伊拉克 (Iraq)", top: "35%", left: "59%" },
    { name: "埃及 (Egypt)", top: "39%", left: "55%" },
    { name: "尼日利亚 (Nigeria)", top: "49%", left: "49%" },
    { name: "孟加拉 (Bangladesh)", top: "40%", left: "73%" },
    { name: "老挝 (Laos)", top: "42%", left: "77%" },
    { name: "菲律宾 (Philippines)", top: "46%", left: "83%" },
    { name: "印度尼西亚 (Indonesia)", top: "55%", left: "81%" },
];

export const historyData: HistoryEvent[] = [
    { year: "1997", event: "奔宝电动车品牌成立", desc: "创建于中国摩托车电动车制造之都——台州", image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2670&auto=format&fit=crop" },
    { year: "2000", event: "中国出口优秀企业", desc: "开启全球化视野，产品销往海外", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2670&auto=format&fit=crop" },
    { year: "2006", event: "国际质量认证", desc: "首次通过ISO9001国际质量管理体系认证", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop" },
    { year: "2008", event: "品牌新定位", desc: "确立《打造更安全的电动车》品牌战略", image: "https://images.unsplash.com/photo-1620600863777-a87796d1816e?q=80&w=2574&auto=format&fit=crop" },
    { year: "2013", event: "浙江奔宝车业成立", desc: "同年荣获台州市科技型企业", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" },
    { year: "2015", event: "产能扩张", desc: "河南奔宝车业有限公司成立", image: "https://images.unsplash.com/photo-1565514020125-69b5529f5287?q=80&w=2671&auto=format&fit=crop" },
    { year: "2018", event: "合资与双认证", desc: "在天津成立奔宝合资公司，获3C认证", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1512&auto=format&fit=crop" },
    { year: "2019", event: "一级目录企业", desc: "获评国家一级目录企业", image: "https://images.unsplash.com/photo-1635350644136-1e07b46d091e?q=80&w=1467&auto=format&fit=crop" },
    { year: "2020", event: "出海东南亚", desc: "正式进入东南亚市场", image: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2670&auto=format&fit=crop" },
    { year: "2022", event: "进军非洲", desc: "正式进入非洲市场", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2671&auto=format&fit=crop" },
    { year: "2024", event: "布局中东", desc: "全球版图再扩张", image: "https://images.unsplash.com/photo-1512453979798-5ea904ac6686?q=80&w=2670&auto=format&fit=crop" }
];


export const valuesData: ValueItem[] = [
    { title: "品质为本", items: ["每台车都是名片", "不做行业平均水平"] },
    { title: "设计为魂", items: ["好看是第一竞争力", "产品视觉统一"] },
    { title: "客户第一", items: ["1小时内响应", "不推诿，不扯皮"] },
    { title: "说到做到", items: ["决定的事当天推进", "执行不过夜"] },
    { title: "诚实守信", items: ["对客户守信", "对伙伴守信"] }
];



export const policyData: PolicyItem[] = [
    { part: "车架、前叉", term: "3年", desc: "断裂、脱焊（人为撞击除外）" },
    { part: "电机", term: "24个月", desc: "线圈烧毁、磁钢脱落、霍尔损坏" },
    { part: "控制器、充电器", term: "12个月", desc: "性能故障（非人为进水、私自改装）" },
    { part: "锂电池", term: "24个月/36个月", desc: "容量低于60%，具体视车型配置而定" },
    { part: "铅酸电池", term: "12个月", desc: "漏液、充不进电、容量低于60%" },
    { part: "仪表、转把、转换器", term: "12个月", desc: "性能故障" },
    { part: "易损件（刹车皮、灯泡、轮胎）", term: "3个月", desc: "制造质量问题（非正常磨损）" }
];

const mockConfigurations = [
    {
        name: "都市版",
        batteryType: "铅酸电池",
        voltage: "60V",
        capacity: "20Ah",
        chargingTime: "6-8h",
        range: "60-70km",
        maxSpeed: "45km/h",
        climbingAbility: "12°",
        motor: "800W",
        controller: "12管矢量控制器",
        curbWeight: "95kg",
        powerConsumption: "2.5Kw.h/100km"
    },
    {
        name: "长跑版",
        batteryType: "石墨烯电池",
        voltage: "72V",
        capacity: "32Ah",
        chargingTime: "8-10h",
        range: "100-120km",
        maxSpeed: "55km/h",
        climbingAbility: "15°",
        motor: "1200W",
        controller: "15管矢量控制器",
        curbWeight: "110kg",
        powerConsumption: "2.8Kw.h/100km"
    }
];

const mockStaticSpecs = {
    dimensions: "1820×710×1080mm",
    display: "全贴合LED炫彩仪表",
    lights: "LED透镜大灯/基因尾灯",
    ratedLoad: "150kg",
    brakes: "前碟后鼓",
    tires: "3.00-10 真空胎",
    ratedRpm: "600r/min",
    otherFeatures: "ACS智能补电, USB充电接口, 一键修复"
};

const newNationalStandardSpecs = {
    ...mockStaticSpecs,
    dimensions: "1600×650×1050mm",
    ratedLoad: "75kg (含驾驶人)",
    otherFeatures: "配备脚踏板, 超速报警"
};


export const translations: Record<'zh' | 'en', Translation> = {
    zh: {
        nav: { 
            models: '探索车型', 
            tech: '创新技术', 
            service: '服务支持', 
            about: '关于奔宝', 
            region: {
                china: '中国大陆',
                global: '全球 / Global'
            },
            aboutGroups: {
                overview: '企业概况',
                news: '新闻资讯',
                business: '商务合作'
            },
            items: { 
                contactSupport: '联系我们',
                afterSales: '服务政策',
                faq: '常见问题',
                intro: '走进奔宝', 
                global: '全球布局',
                history: '发展历程', 
                culture: '企业文化',
                honor: '荣誉认证', 
                newsList: '新闻列表',
                partners: '合作伙伴', 
                franchise: '经销商加盟', 
                join: '经销商加盟', 
                social: '社媒账号', 
                contactInfo: '联系方式' 
            } 
        },
        banner: { btn: '了解更多', explore: '探索性能', tech: '体验科技' },
        sections: { look: '好看', lookTitle: '设计美学，一眼心动', lookDesc: '奔宝电动车传承经典流线造型，时尚配色，拒绝平庸。每一处线条都经过精心雕琢。', durable: '耐用', durableTitle: '硬核实力，持久陪伴', durableDesc: '奔宝电动车采用高碳钢车架，机器人自动焊接。搭载黑金电池技术，让每一次出行都充满信心。', service: '服务', serviceDesc: '真实力的优质售后，为您保驾护航' },
        mega: { seriesTitle: '车型分类', hot: '热销中', viewAll: '查看全部' }
    },
    en: {
        nav: { 
            models: 'Models', 
            tech: 'Technology', 
            service: 'Service', 
            about: 'About Us', 
            region: {
                china: 'China',
                global: 'Global'
            },
            aboutGroups: {
                overview: 'Overview',
                news: 'News Center',
                business: 'Business'
            },
            items: { 
                contactSupport: 'Contact Us',
                afterSales: 'After Sales',
                faq: 'FAQ',
                intro: 'Introduction', 
                global: 'Global Layout',
                history: 'History', 
                culture: 'Culture',
                honor: 'Honors', 
                newsList: 'News List',
                partners: 'Partners', 
                franchise: 'Franchise', 
                join: 'Franchise',
                social: 'Social Media', 
                contactInfo: 'Contact Info' 
            } 
        },
        banner: { btn: 'Learn More', explore: 'Performance', tech: 'Tech Features' },
        sections: { look: 'Aesthetic', lookTitle: 'Design that Captivates', lookDesc: 'Inheriting classic streamlined shapes with trendy colors. Every line is meticulously crafted.', durable: 'Durable', durableTitle: 'Hardcore Quality', durableDesc: 'High-carbon steel frame with automated welding. Equipped with Black Gold battery technology.', service: 'Service', serviceDesc: 'High-quality after-sales service for your peace of mind' },
        mega: { seriesTitle: 'Categories', hot: 'Hot', viewAll: 'View All' }
    }
};

// 1. 新增：18项免费服务列表
export const freeServicesData = [
    "制动系统检查", "前后轮胎气压检查", "电池连接检查",
    "全车线路检查", "电池检查", "充电机检查",
    "制动液检查", "整车灯光检查", "五大开关检查",
    "前后轮轴螺母紧固", "转速把紧固", "方向把，把立紧固",
    "中置减震紧固", "儿童扶手紧固", "前后泥瓦紧固",
    "前后减震螺丝紧固", "连接处润滑", "驻车支架润滑"
];

// 2. 新增：18项免费服务说明
export const freeServicesNote = "为让顾客体验主动关怀式服务，消费者自购车之日90天可享有18项免费保养项目，用户可根据自己购买车辆的时间和使用情况，按保养周期表定期到奔宝服务站接受服务。";

// 3. 新增：非三包类列表
export const nonWarrantyData = [
    "以上表为基准，超过规定“三包”时限和范围的，视为超出“三包”服务",
    "灯泡，内胎，制动蹄块，电机毂盖，轴承，霍尔，后视镜，护杠，全车拉线，螺丝螺帽等标准挂件类，装饰件，支架类，黑件类，踏皮，保险丝（管）类，链条，五大开关，辐条类易损件和易消耗品以上表为基准，超过规定“三包”时限和范围的，视为超出“三包”服务",
    "广告促销类，赠送类物品，响声大小，软硬等认为感觉类项目",
    "因烟熏，药品，地震，台风，洪水，火灾，雷击，化学腐蚀等不可抗拒因素造成的损坏",
    "超出三包有效期限，非奔宝配套产品",
    "未在奔宝服务站或指定维网点维修，自行改装，分解，破坏零部件状态，使用非原厂件造成的其他零部件损坏，擅自私改电路和配置的不予三包，并由用户自己承担全部相关责任",
    "撞车，摔车，超载等人为因素而造成的故障",
    "无维修卡，发票，收据或票卡不相符"
];