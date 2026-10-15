import { getCollection, type CollectionEntry } from 'astro:content';
import categories from '../data/categories.json';

export type Item = CollectionEntry<'items'>;

export function dateKey(d: Date): string {
  // Stable YYYY-MM-DD key regardless of time-of-day, in UTC to avoid
  // build-machine timezone drift across runs.
  return d.toISOString().slice(0, 10);
}

export async function getAllItemsSorted(): Promise<Item[]> {
  const all = await getCollection('items');
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function groupByDay(): Promise<Map<string, Item[]>> {
  const items = await getAllItemsSorted();
  const map = new Map<string, Item[]>();
  for (const item of items) {
    const key = dateKey(item.data.date);
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(item);
  }
  return map;
}

export function categoryLabel(slug: string): { fa: string; en: string } {
  return (categories as Record<string, { fa: string; en: string }>)[slug] ?? { fa: slug, en: slug };
}

export const categoryList = Object.entries(
  categories as Record<string, { fa: string; en: string }>
).map(([slug, label]) => ({ slug, ...label }));

export function formatPersianDate(d: Date): string {
  return new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Tehran',
  }).format(d);
}

export function formatIsoDate(d: Date): string {
  return dateKey(d);
}
