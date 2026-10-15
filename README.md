# AI Daily Resource

دیجست و آرشیو روزانه اخبار، مدل‌ها، تکنیک‌های مهندسی و ابزارهای توسعه مرتبط با هوش مصنوعی — تولید و به‌روزرسانی خودکار، هر روز.

## ساختار پروژه

- `src/content/items/*.md` — هر فایل یک مطلب است، با متادیتای ساختاریافته (frontmatter):
  `title`, `date` (تاریخ افزوده‌شدن به دیجست), `originalDate` (تاریخ انتشار اصلی، اختیاری), `source`, `url`, `category`, `summary`, `tags`, `kind`, `verified`.
- `src/data/categories.json` — رجیستری دسته‌بندی‌ها (slug ↔ برچسب فارسی/انگلیسی). دسته‌بندی جدید را فقط با افزودن یک کلید جدید اینجا اضافه کنید؛ نیازی به تغییر schema نیست.
- `src/styles/tokens.css` — Design Tokens (رنگ، تایپوگرافی، فاصله‌گذاری، شعاع گوشه‌ها). **یک‌بار طراحی شده؛ در اجراهای روزانه نباید تغییر کند.**
- `src/components/`, `src/layouts/` — کامپوننت‌های قابل استفاده مجدد (کارت مطلب، نشان دسته‌بندی، هدر/فوتر، چیدمان پایه).
- `src/pages/` — صفحه اصلی (آخرین گزارش)، آرشیو (`/archive/`, `/archive/[date]/`)، دسته‌بندی (`/category/[slug]/`)، جست‌وجو (`/search/`).
- `scripts/list-urls.mjs` — همه URLهای موجود در آرشیو را چاپ می‌کند؛ پیش از افزودن مطلب جدید برای جلوگیری از تکرار استفاده می‌شود (`npm run list-urls`).

## اجرای محلی

```bash
npm install
npm run dev       # سرور توسعه
npm run build     # خروجی استاتیک در dist/
```

## انتشار

هر push به شاخه `main` به‌صورت خودکار با GitHub Actions (`.github/workflows/deploy.yml`) build و در GitHub Pages منتشر می‌شود. فعال‌سازی GitHub Pages برای این Repository (Settings → Pages → Source: GitHub Actions) یک‌بار و به‌صورت دستی لازم است.

## فرایند روزانه

یک Scheduled Task روزانه (منطقه زمانی Asia/Tehran) فرایند مستندشده در
[`PIPELINE.md`](./PIPELINE.md) را اجرا می‌کند: بررسی وب برای مطالب جدید،
جلوگیری از تکرار URL، ساخت فایل Markdown برای هر مطلب معتبر، build سایت، و
commit/push نتیجه. برای تغییر فرایند، همان فایل را ویرایش کنید — نیازی به
تغییر تنظیمات Scheduled Task نیست.

## افزودن دستی یک مطلب

یک فایل جدید در `src/content/items/` با نام `YYYY-MM-DD-slug.md` بسازید:

```markdown
---
title: "Example Title"
date: 2026-10-15
source: "Anthropic"
url: "https://example.com/post"
category: "ai-engineering"
summary: "خلاصه‌ای روشن و دقیق به فارسی از محتوا، اهمیت و کاربرد عملی آن."
tags: ["example", "tag"]
kind: "technique"
verified: true
---
```
