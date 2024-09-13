import SectionNames from "../../../../../types/SectionNames";
import Back_P from "../AIformulas/staticEvaluation/Back_P";
import Front_P from "../AIformulas/staticEvaluation/Front_P";
import Side_P from "../AIformulas/staticEvaluation/Side_P";

const staticEvaluation = [
   {
      name: "side" as SectionNames,
      nameFA: 'نمای جانبی',
      questions: [
         {
            id: 1,
            title: 'سر به جلو',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 2,
            title: 'شانه گرد',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 3,
            title: 'پشت گرد',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 4,
            title: 'پشت صاف',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 5,
            title: 'گود کمر',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 6,
            title: 'صاف کمر',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 7,
            title: 'شکم برآمده',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 8,
            title: 'پشت تابدار',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 9,
            title: 'زانوی عقب رفته',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 10,
            title: 'زانوی خمیده',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
      ],
      AI: {
         sampleImageSrc: "/images/sampleImages/side.png",
         sampleImageLandmarks: [
            {
               "x": 0.6244511008262634,
               "y": 0.21849443018436432,
               "z": -0.7986832857131958,
               "visibility": 0.9998711347579956
            },
            {
               "x": 0.6411377191543579,
               "y": 0.16281674802303314,
               "z": -0.7080038785934448,
               "visibility": 0.9998553991317749
            },
            {
               "x": 0.6531654596328735,
               "y": 0.16606061160564423,
               "z": -0.7080038785934448,
               "visibility": 0.9998534321784973
            },
            {
               "x": 0.6638521552085876,
               "y": 0.16970762610435486,
               "z": -0.7080038785934448,
               "visibility": 0.9998273849487305
            },
            {
               "x": 0.5955861806869507,
               "y": 0.1588076949119568,
               "z": -0.7589696645736694,
               "visibility": 0.9998790621757507
            },
            {
               "x": 0.5721840858459473,
               "y": 0.15929977595806122,
               "z": -0.7596160173416138,
               "visibility": 0.9999021291732788
            },
            {
               "x": 0.5478276610374451,
               "y": 0.16139782965183258,
               "z": -0.7596307992935181,
               "visibility": 0.9998909831047058
            },
            {
               "x": 0.666483998298645,
               "y": 0.20831124484539032,
               "z": -0.2376711666584015,
               "visibility": 0.9998924136161804
            },
            {
               "x": 0.5014132261276245,
               "y": 0.1991199404001236,
               "z": -0.46474266052246094,
               "visibility": 0.9999306201934814
            },
            {
               "x": 0.641390860080719,
               "y": 0.2932429909706116,
               "z": -0.6250798106193542,
               "visibility": 0.9999116659164429
            },
            {
               "x": 0.5886093974113464,
               "y": 0.29107820987701416,
               "z": -0.6912422776222229,
               "visibility": 0.9999251961708069
            },
            {
               "x": 0.7503661513328552,
               "y": 0.5851404666900635,
               "z": 0.13127443194389343,
               "visibility": 0.998837411403656
            },
            {
               "x": 0.36439821124076843,
               "y": 0.5356652736663818,
               "z": -0.4832729399204254,
               "visibility": 0.9991223216056824
            },
            {
               "x": 0.9225807189941406,
               "y": 0.8366033434867859,
               "z": 0.27352437376976013,
               "visibility": 0.5346210598945618
            },
            {
               "x": 0.26961833238601685,
               "y": 0.8455110788345337,
               "z": -1.180479645729065,
               "visibility": 0.8238317370414734
            },
            {
               "x": 1.1037243604660034,
               "y": 0.9599202871322632,
               "z": 0.050906725227832794,
               "visibility": 0.6169449090957642
            },
            {
               "x": 0.3242283761501312,
               "y": 0.8710185289382935,
               "z": -2.133498191833496,
               "visibility": 0.8276746869087219
            },
            {
               "x": 1.179215908050537,
               "y": 1.0058271884918213,
               "z": 0.03804263100028038,
               "visibility": 0.5439659953117371
            },
            {
               "x": 0.32977521419525146,
               "y": 0.8981159925460815,
               "z": -2.317357063293457,
               "visibility": 0.7730820775032043
            },
            {
               "x": 1.1764652729034424,
               "y": 0.9827484488487244,
               "z": -0.06206563115119934,
               "visibility": 0.6028744578361511
            },
            {
               "x": 0.349201500415802,
               "y": 0.8442471623420715,
               "z": -2.3027961254119873,
               "visibility": 0.8126565217971802
            },
            {
               "x": 1.1354756355285645,
               "y": 0.980017364025116,
               "z": -0.005984165705740452,
               "visibility": 0.5766862630844116
            },
            {
               "x": 0.3538954257965088,
               "y": 0.8418272733688354,
               "z": -2.154653549194336,
               "visibility": 0.7880789637565613
            },
            {
               "x": 0.7207930088043213,
               "y": 1.3301531076431274,
               "z": 0.10714666545391083,
               "visibility": 0.01259590033441782
            },
            {
               "x": 0.44347095489501953,
               "y": 1.3344110250473022,
               "z": -0.10293488204479218,
               "visibility": 0.013944482430815697
            },
            {
               "x": 0.7164559960365295,
               "y": 1.9340248107910156,
               "z": -0.09856826812028885,
               "visibility": 0.006390281952917576
            },
            {
               "x": 0.4677324891090393,
               "y": 1.9457409381866455,
               "z": -0.47899025678634644,
               "visibility": 0.005398258566856384
            },
            {
               "x": 0.7186168432235718,
               "y": 2.5231776237487793,
               "z": 0.2935154438018799,
               "visibility": 0.0005002761026844382
            },
            {
               "x": 0.4567728638648987,
               "y": 2.549604654312134,
               "z": -0.32946428656578064,
               "visibility": 0.00025630908203311265
            },
            {
               "x": 0.7110608816146851,
               "y": 2.6089577674865723,
               "z": 0.29601842164993286,
               "visibility": 0.00032564374851062894
            },
            {
               "x": 0.43272680044174194,
               "y": 2.642742156982422,
               "z": -0.33772873878479004,
               "visibility": 0.0002773650921881199
            },
            {
               "x": 0.7465725541114807,
               "y": 2.700406551361084,
               "z": -0.21518465876579285,
               "visibility": 0.0009110136306844652
            },
            {
               "x": 0.5348407626152039,
               "y": 2.720599889755249,
               "z": -0.9700194597244263,
               "visibility": 0.0008558782865293324
            }
         ],
         photoFn: Side_P,
      },
      zipFile: undefined as string | null | undefined
   },
   {
      name: "front" as SectionNames,
      nameFA: 'نمای قدامی',
      questions: [
         {
            id: 11,
            title: 'گردن کج',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 12,
            title: 'شانه نابرابر',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 13,
            title: 'انحراف جانبی لگن',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 14,
            title: 'زانو پرانتزی',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 15,
            title: 'زانو ضربدری',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 16,
            title: 'چرخش خارجی پا',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 17,
            title: 'چرخش داخلی پا',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
      ],
      AI: {
         sampleImageSrc: "/images/sampleImages/front.png",
         sampleImageLandmarks: [
            {
               "x": 0.6244511008262634,
               "y": 0.21849443018436432,
               "z": -0.7986832857131958,
               "visibility": 0.9998711347579956
            },
            {
               "x": 0.6411377191543579,
               "y": 0.16281674802303314,
               "z": -0.7080038785934448,
               "visibility": 0.9998553991317749
            },
            {
               "x": 0.6531654596328735,
               "y": 0.16606061160564423,
               "z": -0.7080038785934448,
               "visibility": 0.9998534321784973
            },
            {
               "x": 0.6638521552085876,
               "y": 0.16970762610435486,
               "z": -0.7080038785934448,
               "visibility": 0.9998273849487305
            },
            {
               "x": 0.5955861806869507,
               "y": 0.1588076949119568,
               "z": -0.7589696645736694,
               "visibility": 0.9998790621757507
            },
            {
               "x": 0.5721840858459473,
               "y": 0.15929977595806122,
               "z": -0.7596160173416138,
               "visibility": 0.9999021291732788
            },
            {
               "x": 0.5478276610374451,
               "y": 0.16139782965183258,
               "z": -0.7596307992935181,
               "visibility": 0.9998909831047058
            },
            {
               "x": 0.666483998298645,
               "y": 0.20831124484539032,
               "z": -0.2376711666584015,
               "visibility": 0.9998924136161804
            },
            {
               "x": 0.5014132261276245,
               "y": 0.1991199404001236,
               "z": -0.46474266052246094,
               "visibility": 0.9999306201934814
            },
            {
               "x": 0.641390860080719,
               "y": 0.2932429909706116,
               "z": -0.6250798106193542,
               "visibility": 0.9999116659164429
            },
            {
               "x": 0.5886093974113464,
               "y": 0.29107820987701416,
               "z": -0.6912422776222229,
               "visibility": 0.9999251961708069
            },
            {
               "x": 0.7503661513328552,
               "y": 0.5851404666900635,
               "z": 0.13127443194389343,
               "visibility": 0.998837411403656
            },
            {
               "x": 0.36439821124076843,
               "y": 0.5356652736663818,
               "z": -0.4832729399204254,
               "visibility": 0.9991223216056824
            },
            {
               "x": 0.9225807189941406,
               "y": 0.8366033434867859,
               "z": 0.27352437376976013,
               "visibility": 0.5346210598945618
            },
            {
               "x": 0.26961833238601685,
               "y": 0.8455110788345337,
               "z": -1.180479645729065,
               "visibility": 0.8238317370414734
            },
            {
               "x": 1.1037243604660034,
               "y": 0.9599202871322632,
               "z": 0.050906725227832794,
               "visibility": 0.6169449090957642
            },
            {
               "x": 0.3242283761501312,
               "y": 0.8710185289382935,
               "z": -2.133498191833496,
               "visibility": 0.8276746869087219
            },
            {
               "x": 1.179215908050537,
               "y": 1.0058271884918213,
               "z": 0.03804263100028038,
               "visibility": 0.5439659953117371
            },
            {
               "x": 0.32977521419525146,
               "y": 0.8981159925460815,
               "z": -2.317357063293457,
               "visibility": 0.7730820775032043
            },
            {
               "x": 1.1764652729034424,
               "y": 0.9827484488487244,
               "z": -0.06206563115119934,
               "visibility": 0.6028744578361511
            },
            {
               "x": 0.349201500415802,
               "y": 0.8442471623420715,
               "z": -2.3027961254119873,
               "visibility": 0.8126565217971802
            },
            {
               "x": 1.1354756355285645,
               "y": 0.980017364025116,
               "z": -0.005984165705740452,
               "visibility": 0.5766862630844116
            },
            {
               "x": 0.3538954257965088,
               "y": 0.8418272733688354,
               "z": -2.154653549194336,
               "visibility": 0.7880789637565613
            },
            {
               "x": 0.7207930088043213,
               "y": 1.3301531076431274,
               "z": 0.10714666545391083,
               "visibility": 0.01259590033441782
            },
            {
               "x": 0.44347095489501953,
               "y": 1.3344110250473022,
               "z": -0.10293488204479218,
               "visibility": 0.013944482430815697
            },
            {
               "x": 0.7164559960365295,
               "y": 1.9340248107910156,
               "z": -0.09856826812028885,
               "visibility": 0.006390281952917576
            },
            {
               "x": 0.4677324891090393,
               "y": 1.9457409381866455,
               "z": -0.47899025678634644,
               "visibility": 0.005398258566856384
            },
            {
               "x": 0.7186168432235718,
               "y": 2.5231776237487793,
               "z": 0.2935154438018799,
               "visibility": 0.0005002761026844382
            },
            {
               "x": 0.4567728638648987,
               "y": 2.549604654312134,
               "z": -0.32946428656578064,
               "visibility": 0.00025630908203311265
            },
            {
               "x": 0.7110608816146851,
               "y": 2.6089577674865723,
               "z": 0.29601842164993286,
               "visibility": 0.00032564374851062894
            },
            {
               "x": 0.43272680044174194,
               "y": 2.642742156982422,
               "z": -0.33772873878479004,
               "visibility": 0.0002773650921881199
            },
            {
               "x": 0.7465725541114807,
               "y": 2.700406551361084,
               "z": -0.21518465876579285,
               "visibility": 0.0009110136306844652
            },
            {
               "x": 0.5348407626152039,
               "y": 2.720599889755249,
               "z": -0.9700194597244263,
               "visibility": 0.0008558782865293324
            }
         ],
         photoFn: Front_P,
      },
      zipFile: undefined as string | null | undefined
   },
   {
      name: "back" as SectionNames,
      nameFA: 'نمای خلفی',
      questions: [
         {
            id: 18,
            title: 'انحراف جانبی ستون فقرات',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 19,
            title: 'کتف بالدار',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 20,
            title: 'چرخش مچ پا به داخل',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 21,
            title: 'چرخش مچ پا به خارج',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
      ],
      AI: {
         sampleImageSrc: "/images/sampleImages/back.png",
         sampleImageLandmarks: [
            {
               "x": 0.6244511008262634,
               "y": 0.21849443018436432,
               "z": -0.7986832857131958,
               "visibility": 0.9998711347579956
            },
            {
               "x": 0.6411377191543579,
               "y": 0.16281674802303314,
               "z": -0.7080038785934448,
               "visibility": 0.9998553991317749
            },
            {
               "x": 0.6531654596328735,
               "y": 0.16606061160564423,
               "z": -0.7080038785934448,
               "visibility": 0.9998534321784973
            },
            {
               "x": 0.6638521552085876,
               "y": 0.16970762610435486,
               "z": -0.7080038785934448,
               "visibility": 0.9998273849487305
            },
            {
               "x": 0.5955861806869507,
               "y": 0.1588076949119568,
               "z": -0.7589696645736694,
               "visibility": 0.9998790621757507
            },
            {
               "x": 0.5721840858459473,
               "y": 0.15929977595806122,
               "z": -0.7596160173416138,
               "visibility": 0.9999021291732788
            },
            {
               "x": 0.5478276610374451,
               "y": 0.16139782965183258,
               "z": -0.7596307992935181,
               "visibility": 0.9998909831047058
            },
            {
               "x": 0.666483998298645,
               "y": 0.20831124484539032,
               "z": -0.2376711666584015,
               "visibility": 0.9998924136161804
            },
            {
               "x": 0.5014132261276245,
               "y": 0.1991199404001236,
               "z": -0.46474266052246094,
               "visibility": 0.9999306201934814
            },
            {
               "x": 0.641390860080719,
               "y": 0.2932429909706116,
               "z": -0.6250798106193542,
               "visibility": 0.9999116659164429
            },
            {
               "x": 0.5886093974113464,
               "y": 0.29107820987701416,
               "z": -0.6912422776222229,
               "visibility": 0.9999251961708069
            },
            {
               "x": 0.7503661513328552,
               "y": 0.5851404666900635,
               "z": 0.13127443194389343,
               "visibility": 0.998837411403656
            },
            {
               "x": 0.36439821124076843,
               "y": 0.5356652736663818,
               "z": -0.4832729399204254,
               "visibility": 0.9991223216056824
            },
            {
               "x": 0.9225807189941406,
               "y": 0.8366033434867859,
               "z": 0.27352437376976013,
               "visibility": 0.5346210598945618
            },
            {
               "x": 0.26961833238601685,
               "y": 0.8455110788345337,
               "z": -1.180479645729065,
               "visibility": 0.8238317370414734
            },
            {
               "x": 1.1037243604660034,
               "y": 0.9599202871322632,
               "z": 0.050906725227832794,
               "visibility": 0.6169449090957642
            },
            {
               "x": 0.3242283761501312,
               "y": 0.8710185289382935,
               "z": -2.133498191833496,
               "visibility": 0.8276746869087219
            },
            {
               "x": 1.179215908050537,
               "y": 1.0058271884918213,
               "z": 0.03804263100028038,
               "visibility": 0.5439659953117371
            },
            {
               "x": 0.32977521419525146,
               "y": 0.8981159925460815,
               "z": -2.317357063293457,
               "visibility": 0.7730820775032043
            },
            {
               "x": 1.1764652729034424,
               "y": 0.9827484488487244,
               "z": -0.06206563115119934,
               "visibility": 0.6028744578361511
            },
            {
               "x": 0.349201500415802,
               "y": 0.8442471623420715,
               "z": -2.3027961254119873,
               "visibility": 0.8126565217971802
            },
            {
               "x": 1.1354756355285645,
               "y": 0.980017364025116,
               "z": -0.005984165705740452,
               "visibility": 0.5766862630844116
            },
            {
               "x": 0.3538954257965088,
               "y": 0.8418272733688354,
               "z": -2.154653549194336,
               "visibility": 0.7880789637565613
            },
            {
               "x": 0.7207930088043213,
               "y": 1.3301531076431274,
               "z": 0.10714666545391083,
               "visibility": 0.01259590033441782
            },
            {
               "x": 0.44347095489501953,
               "y": 1.3344110250473022,
               "z": -0.10293488204479218,
               "visibility": 0.013944482430815697
            },
            {
               "x": 0.7164559960365295,
               "y": 1.9340248107910156,
               "z": -0.09856826812028885,
               "visibility": 0.006390281952917576
            },
            {
               "x": 0.4677324891090393,
               "y": 1.9457409381866455,
               "z": -0.47899025678634644,
               "visibility": 0.005398258566856384
            },
            {
               "x": 0.7186168432235718,
               "y": 2.5231776237487793,
               "z": 0.2935154438018799,
               "visibility": 0.0005002761026844382
            },
            {
               "x": 0.4567728638648987,
               "y": 2.549604654312134,
               "z": -0.32946428656578064,
               "visibility": 0.00025630908203311265
            },
            {
               "x": 0.7110608816146851,
               "y": 2.6089577674865723,
               "z": 0.29601842164993286,
               "visibility": 0.00032564374851062894
            },
            {
               "x": 0.43272680044174194,
               "y": 2.642742156982422,
               "z": -0.33772873878479004,
               "visibility": 0.0002773650921881199
            },
            {
               "x": 0.7465725541114807,
               "y": 2.700406551361084,
               "z": -0.21518465876579285,
               "visibility": 0.0009110136306844652
            },
            {
               "x": 0.5348407626152039,
               "y": 2.720599889755249,
               "z": -0.9700194597244263,
               "visibility": 0.0008558782865293324
            }
         ],
         photoFn: Back_P,
      },
      zipFile: undefined as string | null | undefined
   },
   // {
   //    name: "test" as SectionNames,
   //    nameFA: 'نا معلوم',
   //    questions: [
   //       {
   //          id: 22,
   //          title: 'سینه فرو رفته',
   //          keys: [5, 3, 1],
   //          values: ['طبیعی', 'خفیف', 'شدید'],
   //       },
   //       {
   //          id: 23,
   //          title: 'سینه کبوتری',
   //          keys: [5, 3, 1],
   //          values: ['طبیعی', 'خفیف', 'شدید'],
   //       },
   //       {
   //          id: 24,
   //          title: 'بدشکلی انگشتان دست',
   //          keys: [5, 3, 1],
   //          values: ['طبیعی', 'خفیف', 'شدید'],
   //       },
   //       {
   //          id: 25,
   //          title: 'بدشکلی انگشتان پا',
   //          keys: [5, 3, 1],
   //          values: ['طبیعی', 'خفیف', 'شدید'],
   //       },
   //       {
   //          id: 26,
   //          title: 'کف پای صاف',
   //          keys: [5, 3, 1],
   //          values: ['طبیعی', 'خفیف', 'شدید'],
   //       },
   //       {
   //          id: 27,
   //          title: 'کف پای گود',
   //          keys: [5, 3, 1],
   //          values: ['طبیعی', 'خفیف', 'شدید'],
   //       },
   //    ],
   //    AI: {
   //       sampleImageSrc: "/images/sampleImages/front.png",
   //       sampleImageLandmarks: [
   //          {
   //             "x": 0.6244511008262634,
   //             "y": 0.21849443018436432,
   //             "z": -0.7986832857131958,
   //             "visibility": 0.9998711347579956
   //          },
   //          {
   //             "x": 0.6411377191543579,
   //             "y": 0.16281674802303314,
   //             "z": -0.7080038785934448,
   //             "visibility": 0.9998553991317749
   //          },
   //          {
   //             "x": 0.6531654596328735,
   //             "y": 0.16606061160564423,
   //             "z": -0.7080038785934448,
   //             "visibility": 0.9998534321784973
   //          },
   //          {
   //             "x": 0.6638521552085876,
   //             "y": 0.16970762610435486,
   //             "z": -0.7080038785934448,
   //             "visibility": 0.9998273849487305
   //          },
   //          {
   //             "x": 0.5955861806869507,
   //             "y": 0.1588076949119568,
   //             "z": -0.7589696645736694,
   //             "visibility": 0.9998790621757507
   //          },
   //          {
   //             "x": 0.5721840858459473,
   //             "y": 0.15929977595806122,
   //             "z": -0.7596160173416138,
   //             "visibility": 0.9999021291732788
   //          },
   //          {
   //             "x": 0.5478276610374451,
   //             "y": 0.16139782965183258,
   //             "z": -0.7596307992935181,
   //             "visibility": 0.9998909831047058
   //          },
   //          {
   //             "x": 0.666483998298645,
   //             "y": 0.20831124484539032,
   //             "z": -0.2376711666584015,
   //             "visibility": 0.9998924136161804
   //          },
   //          {
   //             "x": 0.5014132261276245,
   //             "y": 0.1991199404001236,
   //             "z": -0.46474266052246094,
   //             "visibility": 0.9999306201934814
   //          },
   //          {
   //             "x": 0.641390860080719,
   //             "y": 0.2932429909706116,
   //             "z": -0.6250798106193542,
   //             "visibility": 0.9999116659164429
   //          },
   //          {
   //             "x": 0.5886093974113464,
   //             "y": 0.29107820987701416,
   //             "z": -0.6912422776222229,
   //             "visibility": 0.9999251961708069
   //          },
   //          {
   //             "x": 0.7503661513328552,
   //             "y": 0.5851404666900635,
   //             "z": 0.13127443194389343,
   //             "visibility": 0.998837411403656
   //          },
   //          {
   //             "x": 0.36439821124076843,
   //             "y": 0.5356652736663818,
   //             "z": -0.4832729399204254,
   //             "visibility": 0.9991223216056824
   //          },
   //          {
   //             "x": 0.9225807189941406,
   //             "y": 0.8366033434867859,
   //             "z": 0.27352437376976013,
   //             "visibility": 0.5346210598945618
   //          },
   //          {
   //             "x": 0.26961833238601685,
   //             "y": 0.8455110788345337,
   //             "z": -1.180479645729065,
   //             "visibility": 0.8238317370414734
   //          },
   //          {
   //             "x": 1.1037243604660034,
   //             "y": 0.9599202871322632,
   //             "z": 0.050906725227832794,
   //             "visibility": 0.6169449090957642
   //          },
   //          {
   //             "x": 0.3242283761501312,
   //             "y": 0.8710185289382935,
   //             "z": -2.133498191833496,
   //             "visibility": 0.8276746869087219
   //          },
   //          {
   //             "x": 1.179215908050537,
   //             "y": 1.0058271884918213,
   //             "z": 0.03804263100028038,
   //             "visibility": 0.5439659953117371
   //          },
   //          {
   //             "x": 0.32977521419525146,
   //             "y": 0.8981159925460815,
   //             "z": -2.317357063293457,
   //             "visibility": 0.7730820775032043
   //          },
   //          {
   //             "x": 1.1764652729034424,
   //             "y": 0.9827484488487244,
   //             "z": -0.06206563115119934,
   //             "visibility": 0.6028744578361511
   //          },
   //          {
   //             "x": 0.349201500415802,
   //             "y": 0.8442471623420715,
   //             "z": -2.3027961254119873,
   //             "visibility": 0.8126565217971802
   //          },
   //          {
   //             "x": 1.1354756355285645,
   //             "y": 0.980017364025116,
   //             "z": -0.005984165705740452,
   //             "visibility": 0.5766862630844116
   //          },
   //          {
   //             "x": 0.3538954257965088,
   //             "y": 0.8418272733688354,
   //             "z": -2.154653549194336,
   //             "visibility": 0.7880789637565613
   //          },
   //          {
   //             "x": 0.7207930088043213,
   //             "y": 1.3301531076431274,
   //             "z": 0.10714666545391083,
   //             "visibility": 0.01259590033441782
   //          },
   //          {
   //             "x": 0.44347095489501953,
   //             "y": 1.3344110250473022,
   //             "z": -0.10293488204479218,
   //             "visibility": 0.013944482430815697
   //          },
   //          {
   //             "x": 0.7164559960365295,
   //             "y": 1.9340248107910156,
   //             "z": -0.09856826812028885,
   //             "visibility": 0.006390281952917576
   //          },
   //          {
   //             "x": 0.4677324891090393,
   //             "y": 1.9457409381866455,
   //             "z": -0.47899025678634644,
   //             "visibility": 0.005398258566856384
   //          },
   //          {
   //             "x": 0.7186168432235718,
   //             "y": 2.5231776237487793,
   //             "z": 0.2935154438018799,
   //             "visibility": 0.0005002761026844382
   //          },
   //          {
   //             "x": 0.4567728638648987,
   //             "y": 2.549604654312134,
   //             "z": -0.32946428656578064,
   //             "visibility": 0.00025630908203311265
   //          },
   //          {
   //             "x": 0.7110608816146851,
   //             "y": 2.6089577674865723,
   //             "z": 0.29601842164993286,
   //             "visibility": 0.00032564374851062894
   //          },
   //          {
   //             "x": 0.43272680044174194,
   //             "y": 2.642742156982422,
   //             "z": -0.33772873878479004,
   //             "visibility": 0.0002773650921881199
   //          },
   //          {
   //             "x": 0.7465725541114807,
   //             "y": 2.700406551361084,
   //             "z": -0.21518465876579285,
   //             "visibility": 0.0009110136306844652
   //          },
   //          {
   //             "x": 0.5348407626152039,
   //             "y": 2.720599889755249,
   //             "z": -0.9700194597244263,
   //             "visibility": 0.0008558782865293324
   //          }
   //       ],
   //       photoFn: CFront,
   //    },
   //    zipFile: undefined as string | null | undefined
   // },
]

export type staticEvaluationType = typeof staticEvaluation;
export default staticEvaluation;