---
title: "Revamping Skills in Deep Agents"
date: 2026-10-15
originalDate: 2026-10-07
source: "LangChain"
url: "https://www.langchain.com/blog/revamping-skills-in-deep-agents"
category: "ai-engineering"
kind: "technique"
verified: true
tags: ["skills", "deep-agents", "tool-calling", "prompt-caching", "context-engineering"]
summary: >
  با رشد رجیستری Skillها در سازمان‌ها تا چند هزار مورد، LangChain سه مشکل را
  در فریم‌ورک Deep Agents حل کرده: اول، Toolها به Skill توضیح‌دهنده‌شان متصل
  نبودند و Agent می‌توانست بدون خواندن دستورالعمل، مستقیم Tool را صدا بزند؛
  دوم، Pin کردن یک Skill همچنان نیاز به یک رفت‌وبرگشت اضافه داشت تا Agent آن
  را بخواند؛ سوم، نشست‌های طولانی نمی‌توانستند Skillهای اضافه/ویرایش‌شده پس از
  شروع را تشخیص دهند. راه‌حل‌ها: (۱) Tool Binding — با قرار دادن نام ابزارها
  در `metadata.include_tools` در Frontmatter هر Skill، Schema آن ابزارها تا
  وقتی Agent همان Skill را نخوانده در Context ظاهر نمی‌شود؛ روی مدل‌هایی که
  افزودن Tool میانِ مکالمه را می‌پذیرند، این کار بدون باطل‌کردن Prompt Cache
  انجام می‌شود؛ (۲) Pinned Skills — وقتی اپلیکیشن یک درخواست Skill (مثل
  Slash Command) را تشخیص دهد و نام آن را در `pinned_skills` بفرستد،
  دستورالعمل Skill پیش از اولین فراخوانی مدل به مکالمه اضافه می‌شود و یک
  رفت‌وبرگشت حذف می‌شود؛ (۳) Reload میان‌نشست — با تنظیم `skills_metadata`
  روی `None`، اجرای بعدی منابع Skill را دوباره اسکن می‌کند. توصیه عملی: برای
  افشای یک گروه کامل Tool (مثلاً همه ابزارهای یک سرور MCP)، به‌جای نام تک‌تک
  Toolها از برچسب (Label) استفاده کنید و یک تابع Resolver مجوز کاربر را
  بررسی کرده و فقط Toolهای مجاز را برگرداند. این قابلیت‌ها در آخرین نسخه
  کتابخانه `deepagents` موجودند.
---
