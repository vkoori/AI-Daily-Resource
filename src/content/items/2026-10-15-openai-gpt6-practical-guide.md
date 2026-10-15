---
title: "A practical guide to building with GPT-6"
date: 2026-10-15
originalDate: 2026-10-02
source: "OpenAI"
url: "https://openai.com/index/practical-guide-building-gpt-6/"
category: "vibe-coding-practices"
kind: "reference"
verified: true
tags: ["gpt-6", "prompt-caching", "agents", "context-management", "AGENTS.md"]
summary: >
  راهنمای رسمی OpenAI برای ساخت محصول روی خانواده مدل‌های GPT-6، با توصیه‌های
  عملی که برای هر تیم مهندسی AI کاربرد دارد، نه فقط کاربران GPT-6. نکات اصلی:
  Reasoning Effort را به‌عنوان یک کنترل هزینه/کیفیت ببینید (پایین برای کارهای
  روتین، بالا برای دیباگ سخت) و می‌توان آن را وسط مکالمه بدون شکستن کش تغییر
  داد؛ Context را به حداقل لازم برای وظیفه محدود کنید و گام‌های مستقل را
  موازی اجرا کنید؛ از Prompt Caching با قرار دادن دستورالعمل‌های ثابت در ابتدای
  Prompt استفاده کنید؛ برای مکالمات طولانی از Compaction برای کوچک کردن Context
  بدون از دست دادن وضعیت استفاده کنید. در بخش طراحی Agent، توصیه می‌شود در
  فایل AGENTS.md مشخص شود چه زمانی تست‌ها اجرا شوند، کدام گردش‌کارهای روتین
  بدون تأیید انسانی مجاز هستند، و «اتمام کار» شامل اجرا و بررسی نتیجه باشد نه
  فقط نوشتن کد. این یک چک‌لیست عملی برای تیم‌هایی است که می‌خواهند از
  استفاده سطحی از AI به توسعه مهندسی‌شده و قابل‌اتکا با Agent برسند.
---
