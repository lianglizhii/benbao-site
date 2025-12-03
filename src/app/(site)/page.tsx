// src/app/page.tsx
import { createReader } from '@keystatic/core/reader';
import Config from '../../../keystatic.config'; // 假设 keystatic.config.ts 在项目根目录
import HomeClient from './HomeClient';
import { NewsItem } from '@/types'; // 确保 NewsItem 类型已定义

const reader = createReader(process.cwd(), Config);

// 这是一个异步服务端组件，负责读取 Keystatic 数据
export default async function HomePageServer() {

  // 从 Keystatic 读取所有新闻
  const newsRaw = await reader.collections.news.all();

  // 1. 转换数据并排序
  const latestNews: NewsItem[] = newsRaw
      .map(item => ({
        id: item.slug,
        title: item.entry.title,
        category: item.entry.category,
        date: item.entry.date,
        image: item.entry.image || '',
        snippet: item.entry.snippet,
        // 列表页只加载部分字段以提升性能
        content: '',
      }))
      // 2. 按日期降序排列
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      // 3. 只取前 3 条 (用于首页展示)
      .slice(0, 3);

  // 4. 将数据传递给客户端组件
  return <HomeClient latestNews={latestNews} />;
}