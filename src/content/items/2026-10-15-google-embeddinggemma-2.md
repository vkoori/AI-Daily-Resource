---
title: "EmbeddingGemma 2: مدل Embedding چندوجهی سبک و متن‌باز"
date: 2026-10-15
originalDate: 2026-10-06
source: "Google DeepMind"
url: "https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/"
category: "rag-knowledge-systems"
kind: "tool"
verified: true
tags: ["embedding", "rag", "on-device", "open-weight", "matryoshka"]
summary: >
  Google DeepMind نسخه دوم EmbeddingGemma را منتشر کرد: مدل Embedding
  چندوجهی متن‌باز (مجوز Apache 2.0) مبتنی بر معماری Gemma 4 که متن، تصویر،
  صدا و ویدئو را در یک فضای Embedding مشترک قرار می‌دهد. کل مدل ۷۴۰ میلیون
  پارامتر دارد اما برای کار صرفاً متنی تنها به ۲۷۰ میلیون پارامتر نیاز است
  (رمزگذار تصویر ۱۷۰ میلیونی و صوت ۳۰۰ میلیونی اختیاری‌اند). با استفاده از
  Matryoshka Representation Learning، بردارهای ۷۶۸بعدی را می‌توان بدون
  بازآموزی به ۵۱۲، ۲۵۶ یا ۱۲۸ بعد کوتاه کرد (تا ۶ برابر کاهش فضای ذخیره‌سازی).
  پنجره Context آن به ۸ هزار توکن رسیده (۴ برابر نسخه اول) و با Quantization
  روی Pixel 11 Pro تنها حدود ۱۹۱ مگابایت RAM برای حالت متنی مصرف می‌کند. در
  بنچمارک MTEB Code از ۶۸٫۷۶ به ۷۸٫۶۸ رسیده (نزدیک به ۱۰ امتیاز بهبود).
  کاربرد کلیدی برای معماری RAG: اجرای کاملاً محلی و آفلاین جست‌وجوی معنایی
  (متن، تصویر، صدا) در کنار Gemma 4 — چون هر دو مدل Tokenizer متنی و رمزگذار
  صوتی مشترک دارند، حافظه ترکیبی کمتر می‌شود؛ هم‌چنین برای ایندکس‌کردن محلی
  کدبیس و جست‌وجوی معنایی کد مناسب است. وزن‌ها روی Hugging Face و Kaggle در
  دسترس‌اند و با MediaPipe، LiteRT، transformers.js، WebGPU، Ollama، llama.cpp،
  vLLM و Qdrant سازگاری دارند — گزینه‌ای جدی برای تیم‌هایی که RAG محلی/
  حریم‌خصوصی‌محور می‌سازند و نمی‌خواهند به API ابری Embedding وابسته باشند.
---
