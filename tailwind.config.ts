// tailwind.config.ts
import type { Config } from "tailwindcss";

const config = {
    // 修改这里：加入 ./components 和 ./pages 以防万一
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",   // 扫描 src 下所有文件
        "./components/**/*.{js,ts,jsx,tsx,mdx}", // 扫描根目录 components
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",      // 扫描根目录 pages
    ],
    theme: {
        extend: {
            colors: {
                pink: { 500: '#D6336C', 600: '#C2255C', 50: '#FFF0F6' },
                gray: { 900: '#1F1F1F', 800: '#343a40' }
            },
            animation: {
                'spin-slow': 'spin 12s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'fade-in-up': {
                    'from': { opacity: '0', transform: 'translateY(20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' }
                }
            }
        },
    },
    plugins: [],
}; // 如果这里报错，删掉 satisfies Config 及其前面的空格

export default config;