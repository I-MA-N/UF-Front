const returnedData: { [k: string]: string } = {};

function squatData(data: any) {
   returnedData['اسکات قدامی صاف شدن پاها'] = data['صاف شدن پاها'] ? 'آسیب های احتمالی: التهاب نیام کف پایی، آسیب تاندون آشیل، سندرم فشار بر درشت نی میانی، اسپرین مچ پا، آسیب تاندون کشکک(زانوی پرندگان)' : 'طبیعی';
   returnedData['اسکات قدامی چرخش به خارج پاها'] = data['چرخش به خارج پاها'] ? 'آسیب های احتمالی: التهاب نیام کف پایی، آسیب تاندون آشیل، سندرم فشار بر درشت نی میانی، اسپرین مچ پا، آسیب تاندون کشکک(زانوی پرندگان)' : 'طبیعی';
   returnedData['اسکات قدامی حرکت زانوها به داخل'] = data['حرکت زانوها به داخل'] ? "آسیب های احتمالی: آسیب تاندون کشکک(زانوی پرندگان)، سندرم درد کشککی رانی، آسیب ACL، التهاب تاندون و نوار ایلیوتیبیال" : 'طبیعی';
   returnedData['اسکات قدامی حرکت زانوها به خارج'] = data['حرکت زانوها به خارج'] ? "آسیب های احتمالی: آسیب تاندون کشکک(زانوی پرندگان)، سندرم درد کشککی رانی، آسیب ACL، التهاب تاندون و نوار ایلیوتیبیال" : 'طبیعی';
   
   returnedData['اسکات جانبی گود شدن کمر'] = data['گود شدن کمر'] ? "احتمال بیش فعالی عضلات، خم کننده ران، راست کننده ستون فقرات، پشتی بزرگ و کم فعالیتی در عضلاتی سرینی بزرگ، همسترینگ، پایدار کننده های مرکزی تنه" : 'طبیعی';
   returnedData['اسکات جانبی کمر صاف'] = data['کمر صاف'] ? "احتمال بیش فعالی عضلات، خم کننده ران، راست کننده ستون فقرات، پشتی بزرگ و کم فعالیتی در عضلاتی سرینی بزرگ، همسترینگ، پایدار کننده های مرکزی تنه" : 'طبیعی';
   returnedData['اسکات جانبی خمیدگی به جلو'] = data['خمیدگی به جلو'] ? "آسیب های احتمالی: استرین همسترینگ، چهارسر و کشاله، کمردرد" : 'طبیعی';
   returnedData['اسکات جانبی دست ها در جلو'] = data['دست ها در جلو'] ? "آسیب های احتمالی: سردرد، التهاب تاندون دوسربازویی، آسیب های شانه" : 'طبیعی';
   
   returnedData['اسکات خلفی صاف شدن پا'] = data['صاف شدن پا'] ? "آسیب های احتمالی: التهاب نیام کف پایی، آسیب تاندون آشیل، سندرم فشار بر درشت نی میانی، اسپرین مچ پا، آسیب تاندون کشکک(زانوی پرندگان)" : 'طبیعی';
   returnedData['اسکات خلفی بلند شدن پاشنه'] = data['بلند شدن پاشنه'] ? "احتمال بیش فعالی عضله نعلی و کم فعالی عضله ساقی قدامی" : 'طبیعی';
   returnedData['اسکات خلفی انتقال نامتقارن'] = data['انتقال نامتقارن'] ? "آسیب های احتمالی: استرین همسترینگ، چهارسر و کشاله، کمردرد، درد مفصل خاجی خاصره ای" : 'طبیعی';
   
   return returnedData;
}

export default squatData