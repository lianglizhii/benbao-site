
export interface HistoryEvent {
    year: string;
    event: string;
    desc: string;
    image: string;
}

export interface Honor {
    title: string;
    year: string;
    image: string;
}

export interface Partner {
    name: string;
    logo: string;
}

export interface MapLocation {
    name: string;
    top: string;
    left: string;
}

export interface ValueItem {
    title: string;
    items: string[];
}

export interface NewsItem {
    id: number;
    title: string;
    category: string;
    date: string;
    image: string;
    snippet: string;
    content: string; // HTML content
}

export interface FAQItem {
    q: string;
    a: string;
}

export interface PolicyItem {
    part: string;
    term: string;
    desc: string;
}

// Configuration specific specs that change based on battery selection
export interface ModelConfiguration {
    name: string; // e.g. "Standard", "Long Range"
    batteryType: string;
    voltage: string;
    capacity: string;
    chargingTime: string;
    range: string;
    maxSpeed: string;
    climbingAbility: string;
    motor: string;
    controller: string;
    curbWeight: string;
    powerConsumption: string;
}

// Static specs common to the model
export interface ModelStaticSpecs {
    dimensions: string; // L*W*H
    display: string;
    lights: string;
    ratedLoad: string;
    brakes: string; // Front/Rear
    tires: string;
    ratedRpm: string;
    otherFeatures: string;
}

export type MainCategory = 'new-national-standard' | 'electric-motorcycle' | 'tricycle';
export type SubCategory = 'powerful' | 'quality' | 'urban' | 'light' | null;

export interface CarModel {
    id: string;
    name: string;
    tag: string;
    category: MainCategory;
    subCategory?: SubCategory;
    images: {
        main: string; // Front/Angle view
        side: string; // Side view
        intro: string[]; // Marketing images
    };
    description: string;
    colors: Array<{name: string, hex: string, image?: string}>;
    configurations: ModelConfiguration[];
    staticSpecs: ModelStaticSpecs;
    model3d?: string; // URL to .glb file
}

export interface SlideData {
    id: number;
    image: string;
    titleMain: string;
    titleSub: string;
    description: string;
    buttonText: string;
}

export interface TechItem {
    id: string;
    title: string;
    desc: string;
    icon: any; // React component
    image: string;
}

export interface Translation {
    nav: {
        models: string;
        tech: string;
        service: string;
        about: string;
        
        region: {
            china: string;
            global: string;
        };

        // Group Headers
        aboutGroups: {
            overview: string;
            news: string;
            business: string;
        };

        // Individual Items
        items: {
            // Service
            contactSupport: string;
            afterSales: string;
            faq: string;

            // About - Overview
            intro: string;
            global: string; // Added Global Layout
            history: string;
            culture: string;
            honor: string;
            
            // About - News
            newsList: string;

            // About - Business
            partners: string;
            franchise: string;
            
            // Other
            join: string;
            social: string;
            contactInfo: string;
        }
    };
    banner: {
        btn: string;
        explore: string;
        tech: string;
    };
    sections: {
        look: string;
        lookTitle: string;
        lookDesc: string;
        durable: string;
        durableTitle: string;
        durableDesc: string;
        service: string;
        serviceDesc: string;
    };
    mega: {
        seriesTitle: string;
        hot: string;
        viewAll: string;
    };
}
