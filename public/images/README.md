# دليل صور الموقع ومجلدات المشروعات (Images & Media Guide)

هذا الدليل يوضح هيكلية المجلدات وكيفية إضافة أو استبدال صور الخدمات ومشروعات المعرض بسهولة:

---

## 1. صور الخدمات (Services Images)
المسار: `public/images/services/`

- `corporate.jpg` — صورة خدمة مواقع الشركات والأعمال
- `erp.jpg` — صورة خدمة أنظمة إدارة الأعمال (ERP & CRM)
- `ecommerce.jpg` — صورة خدمة المتاجر الإلكترونية
- `booking.jpg` — صورة خدمة أنظمة الحجز والمواعيد
- `mobile.jpg` — صورة خدمة تطبيقات الويب والموبايل
- `custom.jpg` — صورة خدمة الأنظمة والحلول المخصصة

> **ملاحظة:** يمكنك استبدال أي صورة بنفس الاسم وامتداد `.jpg` أو `.png` أو `.webp`.

---

## 2. صور ومعارض المشروعات (Projects Gallery Images)
المسار: `public/images/projects/{project-id}/`

لكل مشروع مجلد خاص يحتوي على صوره:
- `french-realestate/` (1.jpg, 2.jpg, 3.jpg) — منصة الفرنسية للتسويق العقاري
- `dr-amir/` (1.jpg, 2.jpg, 3.jpg) — منصة عيادة د. أمير جرجس
- `fatima-delta/` (1.jpg, 2.jpg, 3.jpg) — متجر Fatima Delta
- `law-firm/` (1.jpg, 2.jpg, 3.jpg) — موقع مكتب المحاماة
- `decor-company/` (1.jpg, 2.jpg, 3.jpg) — موقع شركة الديكور والتشطيبات
- `fashion-brand/` (1.jpg, 2.jpg, 3.jpg) — موقع علامة الأزياء
- `tourism-company/` (1.jpg, 2.jpg, 3.jpg) — موقع شركة السياحة والرحلات

> **ملاحظة:** يمكنك وضع أي عدد من الصور داخل كل مجلد وربطها أو تغييرها في ملف `src/data/translations.js`.
