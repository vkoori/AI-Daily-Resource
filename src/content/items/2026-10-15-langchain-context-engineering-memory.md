---
title: "Context Engineering: Deep Agentها چگونه حافظه نگه می‌دارند"
date: 2026-10-15
originalDate: 2026-10-14
source: "LangChain"
url: "https://www.langchain.com/blog/context-engineering-deep-agents-remember"
category: "ai-engineering"
kind: "technique"
verified: true
tags: ["context-engineering", "memory", "compaction", "subagents", "skills"]
summary: >
  مقاله LangChain پنج تکنیک عملی برای مدیریت Context در Agentهای طولانی‌مدت
  را جمع‌بندی می‌کند، دقیقاً مسئله‌ای که با رشد Toolها و تاریخچه مکالمه باعث
  افت کیفیت استدلال می‌شود («Context Rot»). خلاصه تکنیک‌ها: (۱) Offloading —
  نتایج حجیم Tool (بیش از ~۲۰ هزار توکن) در فایل ذخیره و فقط پیش‌نمایش کوتاه
  در Context می‌ماند؛ (۲) Summarization/Compaction — وقتی مصرف Context به
  حدود ۸۵٪ برسد، پیام‌های قدیمی خلاصه می‌شوند و نسخه کامل در فایل قابل
  بازیابی باقی می‌ماند؛ (۳) Skills با افشای تدریجی — فقط نام و توضیح کوتاه هر
  Skill در Prompt سیستم است، جزئیات کامل فقط در صورت نیاز بارگذاری می‌شود؛
  (۴) Subagentها — کارهای پرنویز (جست‌وجوهای زیاد) در Context جداگانه اجرا و
  فقط نتیجه نهایی برمی‌گردد؛ (۵) حافظه بلندمدت — یک فایل Markdown که در
  ابتدای هر اجرا بارگذاری و با یادگیری‌های جدید به‌روزرسانی می‌شود. نکته
  کلیدی برای مهندسی Agent: RAG و جست‌وجو در فایل‌ها فقط بخشی از مسئله را حل
  می‌کنند؛ تجمع پیام‌ها و کارهای میانی هم باید مدیریت شود، و حافظه باید در
  ذخیره‌سازی تحت کنترل خود تیم بماند تا با تغییر مدل یا Provider از بین نرود.
---
