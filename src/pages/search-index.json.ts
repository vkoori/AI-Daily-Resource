import type { APIRoute } from 'astro';
import { getAllItemsSorted, formatIsoDate, categoryLabel } from '../utils/content';

export const prerender = true;

export const GET: APIRoute = async () => {
  const items = await getAllItemsSorted();
  const data = items.map((item) => ({
    title: item.data.title,
    summary: item.data.summary,
    source: item.data.source,
    url: item.data.url,
    category: item.data.category,
    categoryLabel: categoryLabel(item.data.category).fa,
    tags: item.data.tags ?? [],
    kind: item.data.kind,
    date: formatIsoDate(item.data.date),
  }));

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
};
