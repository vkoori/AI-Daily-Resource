---
title: "ThinkingBox-Bench: وقتی Agent می‌گوید کار تمام شد، اما دیتابیس خلاف آن را می‌گوید"
date: 2026-10-15
originalDate: 2026-10-03
source: "Microsoft (via Hugging Face)"
url: "https://huggingface.co/blog/microsoft/thinkingbox"
category: "evaluation-production"
kind: "paper"
verified: true
tags: ["agent-evaluation", "benchmark", "mcp", "production-reliability"]
summary: >
  مایکروسافت بنچمارک ThinkingBox-Bench را معرفی کرده: ۵۰۷ گردش‌کار واقعی و
  Stateful (خرده‌فروشی، بیمه خودرو، سفر، بانکداری، مشاوره) که هرکدام ۲۰ بار
  در یک Session ایزوله MCP با دیتابیس تازه اجرا می‌شوند و داوران Deterministic
  وضعیت نهایی دیتابیس را بررسی می‌کنند، نه فقط پاسخ یا Tool Call نهایی Agent.
  ایده محوری مقاله: «مسیر اجرای Agent یک ادعاست؛ وضعیت دیتابیس مدرک است.»
  یافته هشداردهنده: در مواردی که Agent بدون خطا و با یک Tool Call نهایی کار
  را «تمام‌شده» گزارش کرده، بررسی دقیق دیتابیس در ۷۷٫۶٪ موارد مقدار نادرست
  پیدا کرده است. Claude Opus 5.5 در تک‌اجرا با ۶۷٫۱۶٪ بالاترین pass@1 را
  دارد، اما فقط در ۱۳٫۴۱٪ از وظایف هر ۲۰ اجرا را به‌طور کامل پاس می‌کند. حدود
  ۸۰٪ شکست‌ها ناشی از ضعف در مدیریت خطای Tool هستند، نه ضعف استدلال. برای
  تیم‌هایی که Agent را در Production می‌برند، درس عملی روشن است: نرخ موفقیت
  تک‌اجرا معیار کافی نیست؛ پایداری روی اجراهای تکراری و بررسی وضعیت نهایی
  سیستم باید بخشی از ارزیابی باشد.
---
