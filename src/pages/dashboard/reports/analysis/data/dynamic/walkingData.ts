const returnedData: { [k: string]: string } = {};

function walkingData(data: any) {
   returnedData['راه رفتن صاف شدن پاها و زانو به داخل'] = data['صاف شدن پاها و زانو به داخل'] ? 'احتمال بیش فعالی عضلات اداکتورها، دوسررانی(سرکوتاه)، کشنده پهن نیام، دوقلوی خارجی، چهارسر خارجی و احتمال کم فعالی عضلات همسترینگ میانی، دوقلو میانی، سرینی میانی/بزرگ، ساقی قدامی، ساقی خلفی' : 'طبیعی';
   returnedData['راه رفتن گود شدن کمر'] = data['گود شدن کمر'] ? 'احتمال بیش فعالی عضلات خم کننده های ران، راست کننده ی ستون فقرات و پشتی بزرگ و احتمال کم فعالی عضلات سرینی بزرگ و میانی، پایدار کننده های ناحیه مرکزی تنه و همسترینگ' : 'طبیعی';
   returnedData['راه رفتن شانه ها گرد می شود'] = data['شانه ها گرد می شود'] ? 'احتمال بیش فعالی عضلات سینه ای ها و پشتی بزرگ و احتمال کم فعالی عضلات ذوزنقه ی میانی و تحتانی و روتیتورکاف' : 'طبیعی';
   returnedData['راه رفتن سر به جلو'] = data['سر به جلو'] ? 'احتمال بیش فعالی عضلات ذوزنقه ای فوقانی، گوشه ای، جناغی-چنبری-پستانی و احتمال کم فعالی عضلات خم کننده های عمقی گردن' : 'طبیعی';
   returnedData['راه رفتن صاف شدن و چرخش به خارج پاها'] = data['صاف شدن و چرخش به خارج پاها'] ? 'احتمال بیش فعالی عضلات نازک نئی ها، دوقلوی خارجی، دوسررانی(سرکوتاه)، کشنده پهن نیام، نعلی و احتمال کم فعالی عضلات ساقی قدامی، ساقی خلفی، دوقلوی داخلی، سرینی میانی/بزرگ، راست داخلی، خیاطه، رکبی، همسترینگ داخلی' : 'طبیعی';
   returnedData['راه رفتن چرخش بیش از حد لگن'] = data['چرخش بیش از حد لگن'] ? 'احتمال بیش فعالی عضلات مایل خارجی، عضلات نزدیک کننده، همسترینگ و احتمال کم فعالی عضلات سرینی بزرگ و میانی، پایدار کننده های تاحیه مرکزی بدن' : 'طبیعی';
   returnedData['راه رفتن بالا آمدن ران'] = data['بالا آمدن ران'] ? 'احتمال بیش فعالی عضلات مایل خارجی، عضلات مربع کمری(سمت مقابل پای تکیه)، کشنده پهن نیام، سرینی کوچک(سمت موافق پای تکیه) و احتمال کم فعالی عضلات نزدیک کننده(سمت موافق) و سرینی میانی(سمت موافق)' : 'طبیعی';
   
   return returnedData;
}

export default walkingData