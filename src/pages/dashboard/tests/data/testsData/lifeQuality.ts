const lifeQuality = [
   {
      sectionTitle: 'سوالات زیر به منظور بررسی نظر شما در مورد وضعیت سلامتی خودتان طراحی شده است',
      sectionQuestions: [
         {
            id: 1,
            title: 'به طور کلی وضعیت سلامت خود را چگونه می بینید؟',
            keys: [100, 75, 50, 25, 0],
            values: ['عالی', 'خیلی خوب', 'خوب', 'متوسط', 'ضعیف'],
         },
         {
            id: 2,
            title: 'میزان سلامتی خود را در حال حاضر با مقایسه با سال قبل چگونه ارزیابی می کنید؟',
            keys: [100, 75, 50, 25, 0],
            values: ['از سال قبل بسیار بهتر', 'تا حدی بهتر از سال قبل', 'مثل سال قبل', 'تا حدی بدتر از سال قبل', 'از سال قبل بسیار بدتر'],
         }
      ]
   },
   {
      sectionTitle: 'سوالاتی که در زیر می آید درباره ی فعالیتهایی است که شما به طور عادی در طول روز انجام می دهید آیا در انجام این فعالیتها محدودیت یا مشکلی دارید؟',
      sectionQuestions: [
         {
            id: 3,
            title: 'در فعالیت های شدید مثل دویدن، بلند کردن اجسام سنگین، شرکت کردن در ورزشهای سنگین',
            keys: [100, 50, 0],
            values: ['اصلا مشکل ندارم', 'کمی مشکل دارم', 'مشکل دارم'],
         },
         {
            id: 4,
            title: 'در فعالیتهای متوسط مثل جابه جا کردن میز، کشیدن جاروبرقی و...',
            keys: [100, 50, 0],
            values: ['اصلا مشکل ندارم', 'کمی مشکل دارم', 'مشکل دارم'],
         },
         {
            id: 5,
            title: 'در حمل کردن خرید روزانه',
            keys: [100, 50, 0],
            values: ['اصلا مشکل ندارم', 'کمی مشکل دارم', 'مشکل دارم'],
         },
         {
            id: 6,
            title: 'در بالا رفتن از چند طبقه',
            keys: [100, 50, 0],
            values: ['اصلا مشکل ندارم', 'کمی مشکل دارم', 'مشکل دارم'],
         },
         {
            id: 7,
            title: 'در بالا رفتن از یک طبقه',
            keys: [100, 50, 0],
            values: ['اصلا مشکل ندارم', 'کمی مشکل دارم', 'مشکل دارم'],
         },
         {
            id: 8,
            title: 'خم شدن، دولا شدن، زانو زدن',
            keys: [100, 50, 0],
            values: ['اصلا مشکل ندارم', 'کمی مشکل دارم', 'مشکل دارم'],
         },
         {
            id: 9,
            title: 'پیاده روی بیش از یک کیلومتر',
            keys: [100, 50, 0],
            values: ['اصلا مشکل ندارم', 'کمی مشکل دارم', 'مشکل دارم'],
         },
         {
            id: 10,
            title: 'پیاده روی به فاصله چند صد متر',
            keys: [100, 50, 0],
            values: ['اصلا مشکل ندارم', 'کمی مشکل دارم', 'مشکل دارم'],
         },
         {
            id: 11,
            title: 'پیاده روی به فاصله یک صد متر',
            keys: [100, 50, 0],
            values: ['اصلا مشکل ندارم', 'کمی مشکل دارم', 'مشکل دارم'],
         },
         {
            id: 12,
            title: 'در استحمام یا پوشیدن لباسهای خود',
            keys: [100, 50, 0],
            values: ['اصلا مشکل ندارم', 'کمی مشکل دارم', 'مشکل دارم'],
         },
      ]
   },
   {
      sectionTitle: 'در طی چهار هفته گذشته آیا در کار یا تنظیم فعالیت روزانه خود مشکلات زیر را به خاطر مشکل جسمی داشته اید؟',
      sectionQuestions: [
         {
            id: 13,
            title: 'مجبور شده اید که از زمان لازم برای انجام کار یا فعالیتهای دیگر کم کنید؟',
            keys: [100, 0],
            values: ['خیر', 'بله'],
         },
         {
            id: 14,
            title: 'کمتر از آنچه که میخواستید وقت گذاشته اید؟',
            keys: [100, 0],
            values: ['خیر', 'بله'],
         },
         {
            id: 15,
            title: 'در انجام یک نوع کار یا فعالیت خاص مشکل داشته اید؟',
            keys: [100, 0],
            values: ['خیر', 'بله'],
         },
         {
            id: 16,
            title: 'کار عادی خود را با سختی و مشکل بیشتری انجام داده اید؟',
            keys: [100, 0],
            values: ['خیر', 'بله'],
         },
      ]
   },
   {
      sectionTitle: 'در طی چهار هفته گذشته به علت مسائل روانی مثل اضطراب و یا افسردگی در انجام امور معمولی روزانه و انجام کارها با مشکلات زیر روبه رو بوده اید؟',
      sectionQuestions: [
         {
            id: 17,
            title: 'مجبور شده اید که از زمان لازم برای انجام کار یا فعالیت های دیگر کم کنید؟',
            keys: [100, 0],
            values: ['خیر', 'بله'],
         },
         {
            id: 18,
            title: 'کمتر از آنچه که میخواسه اید وقت گذاشته اید؟',
            keys: [100, 0],
            values: ['خیر', 'بله'],
         },
         {
            id: 19,
            title: 'در انجام کارهای روزمره از دقت معمول برخوردار نبوده اید؟ ',
            keys: [100, 0],
            values: ['خیر', 'بله'],
         },
         {
            id: 20,
            title: 'در طی چهار هفته گذشته وضعیت سلامت جسمی و روانی شما تا چه اندازه در روابط اجتماعی معمول شما در رابطه با خانواده، دوستان، همسایگان و یا سایر افراد اختلال ایجاد کرده است؟',
            keys: [100, 75, 50, 20, 0],
            values: ['هیچ', 'به طور جزئی', 'نسبتاً متوسط', 'مقداری', 'فوق العاده زیاد'],
         },
         {
            id: 21,
            title: 'در طی چهار هفته گذشته چه مقدار درد بدنی داشته اید؟',
            keys: [100, 80, 60, 40, 20, 0],
            values: ['هیچ', 'خیلی خفیف', 'خفیف', 'متوسط', 'شدید', 'خیلی شدید'],
         },
         {
            id: 22,
            title: 'در طی چهار هفته گذشته درد بدنی تا چه اندازه مانع از انجام کارهای عادی شما شده است؟',
            keys: [100, 75, 50, 25, 0],
            values: ['اصلا مانع نشده', 'کمی', 'به طور متوسط', 'تقریبا تا حدی', 'فوق العاده زیاد'],
         },
      ]
   },
   {
      sectionTitle: 'این سوالها در مورد احساس شما و اینکه در طی چهار هفته گذشته چطور بودید است، لطفا موردی را انتخاب کنید که به احساس شما نزیکتر باشد',
      sectionQuestions: [
         {
            id: 23,
            title: 'آیا روحیه خوبی داشته اید؟',
            keys: [100, 80, 60, 40, 20, 0],
            values: ['همه اوقات', 'بیشتر اوقات', 'مقدار زیادی از اوقات', 'گاهی اوقات', 'مقدار کمی از اوقات', 'هیچ وقت'],
         },
         {
            id: 24,
            title: 'آیا خیلی عصبانی بوده اید؟',
            keys: [100, 80, 60, 40, 20, 0],
            values: ['هیچ وقت', 'مقدار کمی از اوقات', 'گاهی اوقات', 'مقدار زیادی از اوقات', 'بیشتر اوقات', 'همه اوقات'],
         },
         {
            id: 25,
            title: 'آیا آنقدر عصبانی بوده اید که هیچ چیز شما را خوشحال نمی کرد؟',
            keys: [100, 80, 60, 40, 20, 0],
            values: ['هیچ وقت', 'مقدار کمی از اوقات', 'گاهی اوقات', 'مقدار زیادی از اوقات', 'بیشتر اوقات', 'همه اوقات'],
         },
         {
            id: 26,
            title: 'آیا احساس آرامش میکردید؟',
            keys: [100, 80, 60, 40, 20, 0],
            values: ['همه اوقات', 'بیشتر اوقات', 'مقدار زیادی از اوقات', 'گاهی اوقات', 'مقدار کمی از اوقات', 'هیچ وقت'],
         },
         {
            id: 27,
            title: 'آیا خود را با انرژی احساس می کردید؟',
            keys: [100, 80, 60, 40, 20, 0],
            values: ['همه اوقات', 'بیشتر اوقات', 'مقدار زیادی از اوقات', 'گاهی اوقات', 'مقدار کمی از اوقات', 'هیچ وقت'],
         },
         {
            id: 28,
            title: 'آیا احساس فرسودگی داشته اید؟',
            keys: [100, 80, 60, 40, 20, 0],
            values: ['هیچ وقت', 'مقدار کمی از اوقات', 'گاهی اوقات', 'مقدار زیادی از اوقات', 'بیشتر اوقات', 'همه اوقات'],
         },
         {
            id: 29,
            title: 'آیا احساس غمگینی یا ناامیدی داشته اید؟',
            keys: [100, 80, 60, 40, 20, 0],
            values: ['هیچ وقت', 'مقدار کمی از اوقات', 'گاهی اوقات', 'مقدار زیادی از اوقات', 'بیشتر اوقات', 'همه اوقات'],
         },
         {
            id: 30,
            title: 'آیا شخص خوشحالی بوده اید؟',
            keys: [100, 80, 60, 40, 20, 0],
            values: ['همه اوقات', 'بیشتر اوقات', 'مقدار زیادی از اوقات', 'گاهی اوقات', 'مقدار کمی از اوقات', 'هیچ وقت'],
         },
         {
            id: 31,
            title: 'آیا احساس خستگی داشتید؟',
            keys: [100, 80, 60, 40, 20, 0],
            values: ['هیچ وقت', 'مقدار کمی از اوقات', 'گاهی اوقات', 'مقدار زیادی از اوقات', 'بیشتر اوقات', 'همه اوقات'],
         },
         {
            id: 32,
            title: 'در طی چهار هفته گذشته تا چه میزان مشکلات و مسائل جسمی و عاطفی بر فعالیتهای اجتماعی شما تاثیرگذار بوده است؟',
            keys: [100, 75, 50, 25, 0],
            values: ['هیچ وقت', 'مقدار کمی از اوقات', 'گاهی اوقات', 'بیشتر اوقات', 'همه اوقات'],
         },
      ]
   },
   {
      sectionTitle: 'موارد زیر تا چه اندازه در مورد شما صادق یا نادرست است؟',
      sectionQuestions: [
         {
            id: 33,
            title: 'من از دیگران زودتر بیمار می شوم',
            keys: [100, 75, 50, 25, 0],
            values: ['کاملاً نادرست', 'بیشتر نادرست', 'نمیدانم', 'بیشتر درست', 'کاملاً درست'],
         },
         {
            id: 34,
            title: 'سلامت من در حد سلامت دیگران است',
            keys: [100, 75, 50, 25, 0],
            values: ['کاملاً درست', 'بیشتر درست', 'نمیدانم', 'بیشتر نادرست', 'کاملاً نادرست'],
         },
         {
            id: 35,
            title: 'انتظار دارم وضعیت سلامتی ام بدتر شود',
            keys: [100, 75, 50, 25, 0],
            values: ['کاملاً نادرست', 'بیشتر نادرست', 'نمیدانم', 'بیشتر درست', 'کاملاً درست'],
         },
         {
            id: 36,
            title: 'وضعیت سلامتی من در حد عالی است',
            keys: [100, 75, 50, 25, 0],
            values: ['کاملاً درست', 'بیشتر درست', 'نمیدانم', 'بیشتر نادرست', 'کاملاً نادرست'],
         },
      ]
   }
]

export default lifeQuality;