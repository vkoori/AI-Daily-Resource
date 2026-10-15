---
title: "Redesigning source control at Anthropic: Scion"
date: 2026-10-15
originalDate: 2026-10-13
source: "Anthropic Engineering"
url: "https://www.anthropic.com/engineering/redesigning-source-control"
category: "ai-engineering"
kind: "case-study"
verified: true
tags: ["version-control", "monorepo", "agents-at-scale", "infrastructure"]
summary: >
  رشد Agentهای Claude Code باعث شد merge در مونوریپوی داخلی Anthropic از حدود
  ۲٬۵۰۰ به بیش از ۳۰٬۰۰۰ در روز برسد و Git که برای کار توزیع‌شده و آفلاین
  طراحی شده، به گلوگاه اصلی توسعه تبدیل شود. تیم مهندسی Anthropic سیستم
  داخلی جدیدی به‌نام Scion ساخت و مونوریپو را طی پنج ماه از Git مهاجرت داد.
  ایده کلیدی: چون اکثر کلاینت‌ها دیگر توسعه‌دهنده انسانی آفلاین نیستند بلکه
  Agent و Job هستند، Scion فرض می‌کند سرور همیشه در دسترس است؛ تاریخچه،
  blame و merge روی سرور پردازش می‌شود، کلاینت فقط یک کش محدود نگه می‌دارد و
  checkoutهای Sparse/Virtualized اجازه می‌دهند Jobها فقط فایل‌های لازم را
  بخوانند. نتیجه گزارش‌شده: ردپای زیرساخت حدود ۲۰۰ برابر کوچک‌تر از راه‌حل
  قبلیِ mirroring، و checkout از چند دقیقه به چند ثانیه. نکته کاربردی برای
  تیم‌های دیگر: وقتی مصرف‌کننده اصلی مخزن کد به‌جای انسان، Agent است، فرض‌های
  پایه‌ای ابزار کنترل نسخه هم باید بازبینی شود؛ Anthropic تأکید می‌کند Scion
  جایگزین عمومی Git نیست، بلکه این ایده‌ها را برای اکوسیستم Git به اشتراک
  می‌گذارد.
---
