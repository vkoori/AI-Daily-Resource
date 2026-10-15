---
title: "زیرساخت Git برای توسعه در مقیاس Agent؛ روایت GitHub"
date: 2026-10-15
originalDate: 2026-10-06
source: "GitHub Blog"
url: "https://github.blog/engineering/architecture-optimization/building-git-infrastructure-for-agent-scale-development/"
category: "ai-engineering"
kind: "case-study"
verified: true
tags: ["git", "infrastructure", "agents-at-scale", "scalability"]
summary: >
  هم‌زمان با مقاله Scion از Anthropic، GitHub هم از بازسازی زیرساخت Git خود
  برای تحمل بار توسعه Agentic نوشته — زاویه دیگری از همان مسئله. طبق گزارش
  GitHub، تعداد Pushها سالانه ۴٫۹ برابر شده، چون Agentها خیلی بیشتر و
  مکررتر از توسعه‌دهنده انسانی Commit می‌کنند و سرعت هر Agent به سرعت تکمیل
  Push او وابسته است. راهکار GitHub دو اصل دارد: «حداقل‌سازی هماهنگی» (فقط
  به‌روزرسانی Reference نیاز به توافق سخت‌گیرانه دارد؛ ذخیره Object و
  بررسی اتصال می‌توانند موازی اجرا شوند) و «جداسازی ذخیره‌سازی از پردازش»
  (داده اصلی مخزن در Azure Blob Storage نگه داشته می‌شود و Workerهای
  بی‌حالت فقط برای پاسخ به درخواست‌ها Cache می‌کنند، پس افزودن/حذف ظرفیت
  خواندن دیگر روی سرعت نوشتن اثر نمی‌گذارد). نتیجه گزارش‌شده: تا ۳۵ برابر
  توان نوشتن بیشتر در تست‌های داخلی. برای تیم‌های زیرساخت که Agentهای زیادی
  به‌طور هم‌زمان به یک مخزن می‌نویسند، نکته مشترک با مقاله Scion روشن است:
  فرض‌های کلاسیک Git (کلاینت آفلاین، نرخ نوشتن انسانی) دیگر برقرار نیست و
  معماری باید صریحاً برای این مقیاس جدید طراحی شود.
---
