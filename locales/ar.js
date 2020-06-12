export default (context) => {
  return new Promise(function(resolve) {
    resolve({
      name: 'يونيفارواب',

      menu: [
        { name: 'اخر الاعمال', slug: 'realisations' },
        { name: 'الخدمات', slug: 'prestations' },
        { name: 'الوكالة', slug: 'agence' },
        { name: 'اتصل', slug: 'contact' }
      ],

      links: {
        home: 'الصفحة الرئيسية',
        ariaLabel: 'افتح القائمة',
        previous: 'السابق',
        next: 'التالي'
      },

      home: {
        title: 'تصميم مواقع الويب',
        description: 'محتوى قادم ...',
        create: {
          title: 'نقوم بإنشاء مواقع الويب.',
          text:
            'نقوم بتصميم مواقع الويب التي تلبي توقعاتك بدقة وتحترم تمامًا صورة علامتك التجارية.'
        }
      },

      works: {
        title: 'اخر الاعمال',
        description: 'محتوى قادم ...'
      },

      workitem: [
        {
          title: 'Acodim',
          slug: 'acodim',
          thumbnail:
            'https://api.univerweb.dz/sites/default/files/images/works/acodim.jpg'
        },
        {
          title: 'ETS Ouar',
          slug: 'ets-ouar',
          thumbnail:
            'https://api.univerweb.dz/sites/default/files/images/works/ets-ouar.jpg'
        },
        {
          title: 'TPBL',
          slug: 'tpbl',
          thumbnail:
            'https://api.univerweb.dz/sites/default/files/images/works/tpbl.jpg'
        },
        {
          title: 'Botanique Algérie',
          slug: 'botanique-algerie',
          thumbnail:
            'https://api.univerweb.dz/sites/default/files/images/works/botanique-algerie.jpg'
        },
        {
          title: 'Corim',
          slug: 'corim',
          thumbnail:
            'https://api.univerweb.dz/sites/default/files/images/works/corim.jpg'
        },
        {
          title: 'We Service',
          slug: 'we-service',
          thumbnail:
            'https://api.univerweb.dz/sites/default/files/images/works/weservice.jpg'
        },
        {
          title: 'infoElec',
          slug: 'infoelec',
          thumbnail:
            'https://api.univerweb.dz/sites/default/files/images/works/infoelec.jpg'
        },
        {
          title: 'Optimum Transmission',
          slug: 'optimum-transmission',
          thumbnail:
            'https://api.univerweb.dz/sites/default/files/images/works/optimum-transmission.jpg'
        },
        {
          title: 'Soprofort',
          slug: 'soprofort',
          thumbnail:
            'https://api.univerweb.dz/sites/default/files/images/works/soprofort.jpg'
        },
        {
          title: 'Microtel Training Institute',
          slug: 'microtel-training-institute',
          thumbnail:
            'https://api.univerweb.dz/sites/default/files/images/works/microtel-training-institute.jpg'
        },
        {
          title: 'Integral',
          slug: 'integral',
          thumbnail:
            'https://api.univerweb.dz/sites/default/files/images/works/integral.jpg'
        },
        {
          title: 'Epiza',
          slug: 'epiza',
          thumbnail:
            'https://api.univerweb.dz/sites/default/files/images/works/epiza.jpg'
        },
        {
          title: 'Pibo',
          slug: 'pibo',
          thumbnail:
            'https://api.univerweb.dz/sites/default/files/images/works/pibo.jpg'
        },
        {
          title: 'Intermat',
          slug: 'intermat',
          thumbnail:
            'https://api.univerweb.dz/sites/default/files/images/works/intermat.jpg'
        },
        {
          title: 'BN Electric Company',
          slug: 'bn-electric-company',
          thumbnail:
            'https://api.univerweb.dz/sites/default/files/images/works/bn-electric-company.jpg'
        },
        {
          title: 'Cinquelec',
          slug: 'cinquelec',
          thumbnail:
            'https://api.univerweb.dz/sites/default/files/images/works/cinquelec.jpg'
        },
        {
          title: 'Spheretec',
          slug: 'spheretec',
          thumbnail:
            'https://api.univerweb.dz/sites/default/files/images/works/spheretec.jpg'
        },
        {
          title: 'Clinique Sonya',
          slug: 'clinique-sonya',
          thumbnail:
            'https://api.univerweb.dz/sites/default/files/images/works/clinique-sonya.jpg'
        },
        {
          title: 'Clinique Aya',
          slug: 'clinique-aya',
          thumbnail:
            'https://api.univerweb.dz/sites/default/files/images/works/clinique-aya.jpg'
        },
        {
          title: 'RCelec',
          slug: 'rcelec',
          thumbnail:
            'https://api.univerweb.dz/sites/default/files/images/works/rcelec.jpg'
        }
      ],

      prestations: {
        title: 'الخدمات',
        description: 'محتوى قادم ...'
      },

      agency: {
        title: 'الوكالة',
        description: 'محتوى قادم ...',
        webAgency: {
          title: 'نحن وكالة ويب متخصصة في إنشاء واستضافة ومراجع مواقع الويب.',
          text_1:
            'تأسست منذ 2011 في الجزائر العاصمة ، لدينا فريق مبدع وديناميكي وعاطفي لعملهم.',
          text_2:
            'مهمتنا هي تصميم مواقع الويب التي تلبي توقعاتك وتحترم صورة علامتك التجارية.'
        },
        methode: {
          title: 'طريقة عملنا',
          ecoute: {
            title: 'استمع',
            text:
              'للتعرف عليك بشكل أفضل ، سنحاول فهم العناصر الأساسية مثل نشاطك وفلسفتك وأهدافك وقيودك.'
          },
          recherche: {
            title: 'البحث',
            text:
              'بعد التعرف على بعضهم البعض بشكل أفضل وفهم مشروعك ، سنجد حلولًا تتناسب مع احتياجاتك مع احترام صورة علامتك التجارية.'
          },
          creation: {
            title: 'تأسيس',
            text:
              'من خلال التشاور وإعلامك خطوة بخطوة ، يبدأ مشروعك في أن يكون له وجه ، ببساطة هو وجهك.'
          },
          suivi: {
            title: 'مراقبة',
            text:
              'بعد نشر الموقع ، سنرافقك في صيانة وتحديث الموقع ، في التدريب والمراجع وتحليل حركة المرور.'
          }
        },
        choisir: {
          title: 'لماذا تختارنا',
          prestation: {
            title: 'خدمة كاملة',
            text:
              'من اختيار اسم النطاق الخاص بك إلى تكوين الرسائل المهنية الخاصة بك ، بما في ذلك إنشاء موقعك واستضافته والإشارة إليه ، سنقدم لك خدمة كاملة.'
          },
          pointe: {
            title: 'في طليعة التكنولوجيا',
            text:
              'نحن نستخدم أحدث تقنيات ولغات الويب (إتش تي إم إل 5 و سي إس إس 3 وجافا سكريبت) ، لنقدم لك أفضل خدمة ممكنة.'
          },
          projet: {
            title: 'مشروع يشبهك',
            text: 'نحن نصمم مواقع ويب تشبهك ومصممة خصيصًا لميزانيتك.'
          },
          design: {
            title: 'تصميم مبتكر',
            text: 'ننشئ تصميمًا مخصصًا ليعكس هوية عملك بشكل أفضل.'
          }
        }
      },

      contact: {
        title: 'اتصل',
        description: 'أخبرنا عن احتياجاتك ، ونود العمل معك.',
        text:
          'إنشاء مواقع احترافية هو ما نقوم به. أخبرنا عن احتياجاتك ، ونود العمل معك.',
        form: {
          fullname: 'اسمك',
          company: 'اسم الشركة',
          email: 'البريد الإلكتروني',
          message: 'صف المشروع',
          submit: 'إرسال'
        },
        other: {
          title: 'طرق أخرى للاتصال بنا',
          direction: {
            title: 'إدارة عامة',
            email: 'h.nedjar@univerweb.dz'
          },
          technique: {
            title: 'خدمة تقنية',
            email: 'webmaster@univerweb.dz'
          }
        }
      },

      error: {
        title_1: 'الصفحة غير موجودة',
        title_2: 'وقع خطأ ما',
        description: 'لم يتم العثور على الصفحة ، بدون وعاء.',
        btn: 'عودة إلى الإستقبال'
      },

      footer: {
        address: {
          name: 'يونيفارواب',
          streetAddress: '62 ، تعاونية المبنية',
          addressLocality: 'بئر خادم',
          postalCode: '330 16',
          addressCity: 'الجزائر العاصمة '
        },
        maps: 'احصل على الاتجاهات',
        phone: {
          label: 'الهاتف / الفاكس:',
          number: '021 44 08 11'
        },
        mobile: {
          label: 'جوال:',
          number: '0551 90 46 22'
        },
        email: {
          label: 'البريد الإلكتروني:',
          mailto: 'contact@univerweb.dz'
        },
        social: {
          twitter: 'انضم إلينا على تويتر',
          facebook: 'انضم إلينا على فيسبوك',
          github: 'انضم إلينا على جيث هوب'
        },
        copy: 'حقوق النشر 2020 يونيفارواب. جميع الحقوق محفوظة. '
      }
    })
  })
}
