
import { CarModel, FAQItem, HistoryEvent, Honor, NewsItem, PolicyItem, ValueItem, Translation, Partner, MapLocation } from './types.ts';

export const globalLocations: MapLocation[] = [
    { name: "中国 (China HQ)", top: "38%", left: "78%" }, // Base location
    { name: "乌克兰 (Ukraine)", top: "32%", left: "58%" },
    { name: "伊拉克 (Iraq)", top: "42%", left: "62%" },
    { name: "埃及 (Egypt)", top: "45%", left: "56%" },
    { name: "尼日利亚 (Nigeria)", top: "55%", left: "52%" },
    { name: "孟加拉 (Bangladesh)", top: "48%", left: "72%" },
    { name: "老挝 (Laos)", top: "52%", left: "76%" },
    { name: "菲律宾 (Philippines)", top: "55%", left: "82%" },
    { name: "印度尼西亚 (Indonesia)", top: "65%", left: "80%" },
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

export const honorsData: Honor[] = [
    { title: "全国体育文化宣传推广活动特别爱心企业", year: "2025", image: "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=1470&auto=format&fit=crop" },
    { title: "浙江省优秀工业产品证书", year: "2021", image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=1470&auto=format&fit=crop" },
    { title: "获评国家一级目录企业", year: "2019", image: "https://images.unsplash.com/photo-1635350644136-1e07b46d091e?q=80&w=1467&auto=format&fit=crop" },
    { title: "获国家3C电摩双认证", year: "2018", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1512&auto=format&fit=crop" },
    { title: "荣获台州名牌产品", year: "2017", image: "https://images.unsplash.com/photo-1628149206236-40742d453b34?q=80&w=1470&auto=format&fit=crop" },
    { title: "台州市高新技术企业", year: "2015", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop" },
    { title: "重点推广中国著名品牌", year: "2006", image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=1470&auto=format&fit=crop" },
    { title: "全国电动车十佳品牌", year: "2005", image: "https://images.unsplash.com/photo-1533227297402-46edfed15826?q=80&w=1470&auto=format&fit=crop" }
];

export const partnersData: Partner[] = [
    { name: "Bosch", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-Logo.svg/2560px-Bosch-Logo.svg.png" },
    { name: "LG Chem", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/LG_Chem_logo.svg/2560px-LG_Chem_logo.svg.png" },
    { name: "Siemens", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/2560px-Siemens-logo.svg.png" },
    { name: "Panasonic", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Panasonic_logo_%28Blue%29.svg/2560px-Panasonic_logo_%28Blue%29.svg.png" },
    { name: "CATL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/CATL_logo.svg/1200px-CATL_logo.svg.png" },
    { name: "Michelin", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Michelin_Logo.svg/1024px-Michelin_Logo.svg.png" }
];

export const valuesData: ValueItem[] = [
    { title: "品质为本", items: ["每台车都是名片", "不做行业平均水平"] },
    { title: "设计为魂", items: ["好看是第一竞争力", "产品视觉统一"] },
    { title: "客户第一", items: ["1小时内响应", "不推诿，不扯皮"] },
    { title: "说到做到", items: ["决定的事当天推进", "执行不过夜"] },
    { title: "诚实守信", items: ["对客户守信", "对伙伴守信"] }
];

export const newsData: NewsItem[] = [
    { 
        id: 1, 
        title: "奔宝电动车惊艳亮相米兰车展，中国智造获全球赞誉", 
        category: "品牌动态", 
        date: "2025-03-15", 
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop", 
        snippet: "在本届米兰国际摩托车展上，奔宝携旗下最新高端系列X9 GT震撼登场...",
        content: `
            <p class="mb-4">2025年3月15日，一年一度的米兰国际摩托车展（EICMA）在意大利米兰盛大开幕。作为中国电动车行业的领军品牌，奔宝电动车携旗下多款重磅新品惊艳亮相，向全球消费者展示了“中国智造”的硬核实力与独特魅力。</p>
            <p class="mb-4">展会现场，奔宝展台人头攒动。此次发布的旗舰车型 <strong>X9 GT</strong> 成为了全场焦点。该车型搭载了奔宝最新研发的“矢量动力系统”，最高时速可达120km/h，0-50km/h加速仅需3秒，性能参数足以媲美400cc燃油摩托车。同时，其极具未来感的流线型设计和独特的“极光粉”配色，吸引了无数海外媒体和观众驻足拍照。</p>
            <p class="mb-4">奔宝车业CEO在现场接受采访时表示：“欧洲是全球两轮车文化的高地，奔宝选择在米兰发布新品，展示了我们进军高端市场的决心。我们不仅要卖产品，更要输出中国品牌的技术与文化。”</p>
            <p class="mb-4">据悉，展会首日，奔宝已与来自德国、法国、意大利等多个国家的经销商签署了意向合作协议，意向订单金额超过5000万美元。</p>
        `
    },
    { 
        id: 2, 
        title: "奔宝发布全新一代黑金电池技术，续航里程提升40%", 
        category: "技术创新", 
        date: "2025-02-28", 
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop", 
        snippet: "历时三年研发，奔宝实验室正式对外发布第三代石墨烯黑金电池...",
        content: `
            <p class="mb-4">2025年2月28日，奔宝车业在台州总部召开技术发布会，正式推出第三代石墨烯黑金电池。这项技术的问世，标志着电动车铅酸电池领域迎来了又一次重大突破。</p>
            <p class="mb-4">据奔宝技术总监介绍，第三代黑金电池采用了全新的“三维导电网络”技术，通过在铅膏中添加高纯度石墨烯材料，大幅降低了电池内阻。实测数据显示，在同等体积下，新电池的容量提升了30%，循环寿命延长了2倍，达到了1200次以上。更重要的是，该电池支持10A大电流快充，充电效率提升了50%。</p>
            <p class="mb-4">针对冬季续航衰减这一行业痛点，新技术也给出了完美的解决方案。得益于特殊的电解液配方，第三代黑金电池在-20℃的低温环境下，依然能保持90%以上的放电容量。</p>
            <p class="mb-4">目前，该技术已全面应用于奔宝最新上市的“长跑王”系列车型中。</p>
        `
    },
    { 
        id: 3, 
        title: "2024年度优秀经销商大会在杭州圆满落幕", 
        category: "企业新闻", 
        date: "2025-01-10", 
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2670&auto=format&fit=crop", 
        snippet: "来自全国各地的500余位优秀合作伙伴齐聚一堂，共商未来发展大计...",
        content: `
            <p class="mb-4">2025年1月10日，奔宝车业“聚力·共赢”2024年度优秀经销商大会在杭州国际博览中心隆重举行。来自全国各地的500余位优秀合作伙伴齐聚一堂，共商未来发展大计。</p>
            <p class="mb-4">会上，公司董事长发表了题为《拥抱变革，韧性生长》的主题演讲，全面回顾了过去一年奔宝在市场开拓、品牌建设、产品研发等方面取得的成绩，并对2025年的战略规划进行了详细部署。他强调，未来三年，奔宝将继续坚持“高端化、智能化、全球化”的发展战略，持续加大研发投入，提升产品核心竞争力。</p>
            <p class="mb-4">大会还对2024年度表现突出的经销商团队和个人进行了表彰，颁发了“金牌经销商”、“销售增长冠军”、“最佳服务奖”等多个奖项。</p>
        `
    },
    { 
        id: 4, 
        title: "奔宝公益行：向山区小学捐赠50辆爱心助学车", 
        category: "社会责任", 
        date: "2024-12-05", 
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop", 
        snippet: "用爱心点亮希望，奔宝车业持续关注乡村教育...",
        content: `
            <p class="mb-4">2024年12月5日，奔宝车业“爱心点亮希望”公益车队驶入了云南省昭通市大山深处的一所小学。此次，奔宝向该校及周边村落捐赠了50辆特制的“爱心助学电动车”，用于解决山区教师家访难、学生上学远的问题。</p>
            <p class="mb-4">捐赠仪式上，奔宝公益基金会负责人表示：“教育是国家的未来，关注乡村教育是企业应尽的社会责任。我们希望通过这些电动车，为山区的老师和孩子们提供更便捷的出行方式，让知识的传递不再受路途阻隔。”</p>
            <p class="mb-4">此外，奔宝还为学校送去了书包、文具、体育用品等爱心物资，并承诺将设立长期助学基金，资助品学兼优的贫困学生完成学业。</p>
        `
    },
    { 
        id: 5, 
        title: "台州市领导一行莅临奔宝智慧工厂考察指导", 
        category: "企业新闻", 
        date: "2024-11-20", 
        image: "https://images.unsplash.com/photo-1565514020125-69b5529f5287?q=80&w=2671&auto=format&fit=crop", 
        snippet: "深入了解企业数字化转型成果，对奔宝在智能制造领域的投入给予高度评价...",
        content: `
            <p class="mb-4">2024年11月20日，台州市相关领导一行莅临奔宝车业智慧工厂进行考察指导。奔宝公司高层全程陪同接待。</p>
            <p class="mb-4">考察团一行深入生产车间，实地参观了全自动冲压线、机器人焊接工作站、自动化涂装线以及智能总装线。奔宝生产负责人详细介绍了工厂在数字化转型、智能制造方面的投入与成果。据悉，奔宝智慧工厂已实现关键工序100%自动化，生产效率提升了50%，产品一次合格率达到99.9%。</p>
            <p class="mb-4">市领导对奔宝在智能制造领域取得的成绩给予了高度评价，勉励企业继续发挥行业龙头作用，以科技创新引领产业升级，为台州制造业高质量发展做出更大贡献。</p>
        `
    },
    { 
        id: 6, 
        title: "奔宝Lady E系列荣获国际CMF设计大奖", 
        category: "荣誉奖项", 
        date: "2024-10-15", 
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop", 
        snippet: "凭借独特的色彩美学和优雅造型，Lady E系列再次斩获国际殊荣...",
        content: `
            <p class="mb-4">2024年10月15日，备受瞩目的国际CMF设计奖颁奖典礼在深圳举行。奔宝旗下女性专属车型“Lady E”凭借独特的色彩美学和优雅造型，从全球数千件参赛作品中脱颖而出，荣获“最佳CMF设计奖”。</p>
            <p class="mb-4">Lady E系列是奔宝专为都市女性打造的出行单品。设计团队从自然界中汲取灵感，推出了“樱花粉”、“薄荷绿”、“奶油白”等多款清新治愈的配色，并采用了特殊的珠光漆工艺，使车身在阳光下呈现出细腻的质感。除了色彩，Lady E在造型上也打破了传统电动车的生硬线条，采用了更加圆润、柔和的曲面设计，完美契合女性用户的审美需求。</p>
            <p class="mb-4">评委会给出的获奖理由是：“Lady E不仅是一款交通工具，更是一件时尚单品。它通过色彩与材质的创新运用，成功赋予了工业产品以情感和温度。”</p>
        `
    }
];

export const faqData: FAQItem[] = [
    { q: "电动车电池如何保养才能延长寿命？", a: "建议在电量剩余20%-30%时及时充电，避免深度放电。长期不使用时，请每月充电一次。避免在高温或极寒环境下长时间存放。" },
    { q: "奔宝电动车的防水性能如何？", a: "整车采用IPX5级防水设计，核心部件如电机、控制器具备更高防水等级。可以应对正常雨天骑行，但请勿涉水过深（超过轮毂中心）或使用高压水枪直接冲洗电器件。" },
    { q: "新车续航里程为什么会达不到标称值？", a: "标称续航是在特定工况（如匀速25km/h、平路、无风、载重75kg、温度25℃）下测试得出的。实际骑行受载重、路况、气温、急加速急减速等因素影响，会有所浮动，冬季低温下续航会有明显衰减，属正常物理现象。" },
    { q: "车辆出现故障代码怎么办？", a: "请查阅用户手册中的故障代码对照表。如果是简单问题（如刹车断电开关未回位），可尝试自行解决。如无法解决，请前往最近的奔宝授权服务网点进行检修，请勿私自拆解电路。" },
    { q: "如何查询我的车辆是否在保修期内？", a: "您可以查看随车附带的保修卡上的购车日期，或登录奔宝官网/小程序，输入车架号进行查询。" }
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

// Flattened Model Data
export const allModels: CarModel[] = [
    // ... models kept as is
    { 
        id: "x9-gt",
        name: "奔宝 X9 GT", 
        tag: "赛道级",
        category: 'electric-motorcycle',
        subCategory: 'powerful',
        images: {
            main: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?q=80&w=2670&auto=format&fit=crop",
            side: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2670&auto=format&fit=crop",
            intro: ["https://images.unsplash.com/photo-1591635593878-18d53d2629b0?q=80&w=2574&auto=format&fit=crop"]
        },
        description: "专为速度而生，搭载1200W极速电机，体验风驰电掣的快感。",
        colors: [{name: "黑", hex: "#000"}, {name: "粉", hex: "#D6336C"}, {name: "白", hex: "#FFF"}],
        configurations: mockConfigurations,
        staticSpecs: mockStaticSpecs,
        model3d: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Buggy/glTF-Binary/Buggy.glb" // Using a generic vehicle sample for demo purposes
    },
    { 
        id: "t7-power",
        name: "奔宝 T7 Power", 
        tag: "长续航",
        category: 'electric-motorcycle',
        subCategory: 'powerful',
        images: {
            main: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2670&auto=format&fit=crop",
            side: "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2670&auto=format&fit=crop",
            intro: []
        },
        description: "超长续航里程，告别里程焦虑，城市通勤无压力。",
        colors: [{name: "深灰", hex: "#333"}, {name: "蓝", hex: "#0055FF"}],
        configurations: mockConfigurations,
        staticSpecs: mockStaticSpecs
    },
    { 
        id: "s-pro",
        name: "奔宝 S-Pro", 
        tag: "高性能",
        category: 'electric-motorcycle',
        subCategory: 'powerful',
        images: {
            main: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2670&auto=format&fit=crop",
            side: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2670&auto=format&fit=crop",
            intro: []
        },
        description: "性能与舒适的完美平衡，定义高端出行标准。",
        colors: [{name: "白", hex: "#FFF"}, {name: "红", hex: "#FF0000"}],
        configurations: mockConfigurations,
        staticSpecs: mockStaticSpecs
    },
    { 
        id: "classic-v3",
        name: "奔宝 Classic V3", 
        tag: "经典复古",
        category: 'electric-motorcycle',
        subCategory: 'quality',
        images: {
            main: "https://images.unsplash.com/photo-1591635593878-18d53d2629b0?q=80&w=2574&auto=format&fit=crop",
            side: "https://images.unsplash.com/photo-1591635593878-18d53d2629b0?q=80&w=2574&auto=format&fit=crop",
            intro: []
        },
        description: "经典龟王造型，永不过时的设计语言。",
        colors: [{name: "米黄", hex: "#F5F5DC"}, {name: "橄榄绿", hex: "#556B2F"}],
        configurations: mockConfigurations,
        staticSpecs: mockStaticSpecs
    },
    { 
        id: "lady-e",
        name: "奔宝 Lady E", 
        tag: "优雅设计",
        category: 'electric-motorcycle',
        subCategory: 'quality',
        images: {
            main: "https://images.unsplash.com/photo-1626543789968-3c2242337d45?q=80&w=2670&auto=format&fit=crop",
            side: "https://images.unsplash.com/photo-1626543789968-3c2242337d45?q=80&w=2670&auto=format&fit=crop",
            intro: []
        },
        description: "专为女性设计，轻盈车身，优雅配色。",
        colors: [{name: "粉", hex: "#FFC0CB"}, {name: "白", hex: "#FFF"}],
        configurations: mockConfigurations,
        staticSpecs: mockStaticSpecs
    },
    { 
        id: "m6",
        name: "奔宝 M6", 
        tag: "通勤首选",
        category: 'electric-motorcycle',
        subCategory: 'urban',
        images: {
            main: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=2552&auto=format&fit=crop",
            side: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=2552&auto=format&fit=crop",
            intro: []
        },
        description: "实用主义者的选择，大空间，舒适骑行。",
        colors: [{name: "白", hex: "#FFF"}, {name: "深灰", hex: "#333"}],
        configurations: mockConfigurations,
        staticSpecs: mockStaticSpecs
    },
    { 
        id: "city-go",
        name: "奔宝 City Go", 
        tag: "新国标",
        category: 'new-national-standard',
        images: {
            main: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop",
            side: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop",
            intro: []
        },
        description: "符合新国标，轻便灵巧，城市穿梭利器。",
        colors: [{name: "天蓝", hex: "#87CEEB"}, {name: "白", hex: "#FFF"}],
        configurations: [{...mockConfigurations[0], maxSpeed: '25km/h', curbWeight: '50kg'}],
        staticSpecs: newNationalStandardSpecs
    },
    { 
        id: "lite-air",
        name: "奔宝 Lite Air", 
        tag: "高性价比", 
        category: 'new-national-standard',
        images: {
            main: "https://images.unsplash.com/photo-1658428135894-39f1c7d6d528?q=80&w=2574&auto=format&fit=crop",
            side: "https://images.unsplash.com/photo-1658428135894-39f1c7d6d528?q=80&w=2574&auto=format&fit=crop",
            intro: []
        },
        description: "极简设计，超高性价比，入门首选。",
        colors: [{name: "银", hex: "#C0C0C0"}, {name: "黑", hex: "#000"}],
        configurations: [{...mockConfigurations[0], maxSpeed: '25km/h', curbWeight: '52kg'}],
        staticSpecs: newNationalStandardSpecs
    },
    { 
        id: "mini-z",
        name: "奔宝 Mini Z", 
        tag: "可进电梯",
        category: 'new-national-standard',
        images: {
            main: "https://images.unsplash.com/photo-1532187643605-4e7804d1fce8?q=80&w=2574&auto=format&fit=crop",
            side: "https://images.unsplash.com/photo-1532187643605-4e7804d1fce8?q=80&w=2574&auto=format&fit=crop",
            intro: []
        },
        description: "小巧玲珑，可轻松进入电梯，解决充电难题。",
        colors: [{name: "橙", hex: "#FFA500"}, {name: "白", hex: "#FFF"}],
        configurations: [{...mockConfigurations[0], maxSpeed: '25km/h', curbWeight: '48kg'}],
        staticSpecs: newNationalStandardSpecs
    },
    { 
        id: "foldable",
        name: "奔宝 Foldable", 
        tag: "折叠便携",
        category: 'new-national-standard',
        images: {
            main: "https://images.unsplash.com/photo-1517407137812-78d104595bd4?q=80&w=2574&auto=format&fit=crop",
            side: "https://images.unsplash.com/photo-1517407137812-78d104595bd4?q=80&w=2574&auto=format&fit=crop",
            intro: []
        },
        description: "一键折叠，轻松放入汽车后备箱。",
        colors: [{name: "黑", hex: "#000"}, {name: "白", hex: "#FFF"}],
        configurations: [{...mockConfigurations[0], maxSpeed: '25km/h', curbWeight: '45kg'}],
        staticSpecs: newNationalStandardSpecs
    },
    { 
        id: "trike-pro",
        name: "奔宝 Trike Pro", 
        tag: "载货王",
        category: 'tricycle',
        images: {
            main: "https://images.unsplash.com/photo-1622353381666-3d207f20257e?q=80&w=2670&auto=format&fit=crop",
            side: "https://images.unsplash.com/photo-1622353381666-3d207f20257e?q=80&w=2670&auto=format&fit=crop", // placeholder
            intro: []
        },
        description: "超强载重，坚固耐用，您的致富好帮手。",
        colors: [{name: "工程黄", hex: "#FFC107"}, {name: "红", hex: "#D32F2F"}],
        configurations: [{...mockConfigurations[0], motor: '1500W', range: '50km'}],
        staticSpecs: {...mockStaticSpecs, ratedLoad: '500kg', dimensions: '2500×1100×1300mm'}
    }
];

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
                contactSupport: '联系客服',
                afterSales: '售后服务',
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
                contactSupport: 'Contact Support',
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
