---
title: "ReplaySSM: سریع‌تر کردن Decode در مدل‌های هیبریدی SSM"
date: 2026-10-15
originalDate: 2026-10-12
source: "NVIDIA Developer Blog (با Dao AI Lab)"
url: "https://developer.nvidia.com/blog/replayssm-rethinking-state-storage-for-faster-hybrid-model-decoding/"
category: "inference-infrastructure"
kind: "technique"
verified: true
tags: ["inference", "state-space-models", "speculative-decoding", "quantization"]
summary: >
  مدل‌های هیبریدی جدید (مثل Nemotron 3، Qwen3.5، Kimi-K3، GLM-5.3-Flash) لایه‌های
  State-Space Model را با چند لایه Attention ترکیب می‌کنند؛ اما در Batch Size
  بالا، همین لایه‌های SSM به‌خاطر ترافیک حافظه، گلوگاه اصلی تأخیر می‌شوند — نه
  Attention. تکنیک ReplaySSM به‌جای ذخیره کل State در هر گام، فقط یک Checkpoint
  به‌علاوه بافری از ورودی‌های اخیر نگه می‌دارد و State جدید را فقط وقتی بافر
  پر شود (در تست‌ها هر ۱۶ رکورد) «Flush» می‌کند. این طراحی به‌طور خاص مشکل
  معروف Decoding گمانه‌زنی‌شده (Speculative Decoding) در SSM را هم حل می‌کند:
  چون State برخلاف Attention معکوس‌پذیر نیست، بازگشت از یک حدس رد‌شده معمولاً
  گران است؛ ReplaySSM با جابه‌جایی یک Pointer در بافر، Rollback را ارزان
  می‌کند. نتایج گزارش‌شده روی GPU بلک‌ول: ۱٫۲ تا ۱٫۴۷ برابر سریع‌تر در هر گام
  Decode، و در حالت Speculative تا ۲٫۱ برابر توان عملیاتی بیشتر نسبت به
  vLLM. این تکنیک از قبل در TensorRT-LLM، vLLM، SGLang و FlashInfer ادغام شده
  و در Production مدل‌های GLM-5.3-Flash و Kimi-K3 استفاده می‌شود — نمونه خوبی
  از اینکه بهینه‌سازی Infra می‌تواند مستقیماً هزینه Serving مدل‌های هیبریدی
  را کاهش دهد.
---
