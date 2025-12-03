// src/app/template.tsx
"use client";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        // 每次路由切换，这个 div 都会重新创建，从而触发 animate-fade-in-up 动画
        <div className="animate-fade-in-up">
            {children}
        </div>
    );
}