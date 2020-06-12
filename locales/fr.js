export default (context) => {
  return new Promise(function(resolve) {
    resolve({
      name: 'Univerweb',

      menu: [
        { name: 'Réalisations', slug: 'realisations' },
        { name: 'Prestations', slug: 'prestations' },
        { name: "L'agence", slug: 'agence' },
        { name: 'Contact', slug: 'contact' }
      ],

      links: {
        home: 'Accueil',
        ariaLabel: 'Ouvrir le menu',
        previous: 'Précédent',
        next: 'Suivant'
      },

      home: {
        title: 'Création de sites web',
        description: 'Contenu à venir…',
        create: {
          title: 'Nous créons des sites web.',
          text:
            'Nous concevons des sites web qui répondent précisément à vos attentes et qui respectent intégralement votre image de marque.'
        }
      },

      works: {
        title: 'Réalisations',
        description: 'Contenu à venir…'
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
        title: 'Prestations',
        description: 'Contenu à venir…'
      },

      agency: {
        title: "L'agence",
        description: 'Contenu à venir…',
        webAgency: {
          title:
            'Nous sommes une agence web spécialisée dans la création, l’hébergement et le référencement de sites web.',
          text_1:
            'Installée depuis 2011 à Alger, nous avons une équipe créative, dynamique et passionnée par son travail.',
          text_2:
            'Notre métier consiste à concevoir des sites web qui répondent à vos attentes et qui respectent votre image de marque.'
        },
        methode: {
          title: 'Notre méthode de travail',
          ecoute: {
            title: 'Écoute',
            text:
              'Afin de mieux vous connaitre, nous essaierons de comprendre des éléments essentiels tels que votre activité, votre philosophie, vos objectifs et vos contraintes.'
          },
          recherche: {
            title: 'Recherche',
            text:
              'Après avoir mieux fait connaissance et cerner votre projet, nous trouverons des solutions adaptées à vos besoins tout en respectant votre image de marque.'
          },
          creation: {
            title: 'Création',
            text:
              'En vous consultant et informant étape par étape, votre projet commence à avoir un visage, le votre tout simplement.'
          },
          suivi: {
            title: 'Suivi',
            text:
              "Après la publication du site web, nous vous accompagnerons dans la maintenance et mise à jour du site, dans la formation et le référencement et dans l'analyse du trafic."
          }
        },
        choisir: {
          title: 'Pourquoi nous choisir',
          prestation: {
            title: 'Une prestation complète',
            text:
              'Du choix de votre nom de domaine à la configuration de votre messagerie professionnelle, en passant par la création, l’hébergement et le référencement de votre site web, nous vous offrirons un service complet.'
          },
          pointe: {
            title: 'À la pointe de la technique',
            text:
              'Nous utilisons les dernières techniques et langages du web (HTML5, CSS3 et JavaScript), afin de vous offrir le meilleur service possible.'
          },
          projet: {
            title: 'Un projet qui vous ressemble',
            text:
              'Nous concevons des sites web qui vous ressemblent et qui sont adaptés à votre budget.'
          },
          design: {
            title: 'Un design innovant',
            text:
              'Nous concevons un design sur mesure afin de refléter au mieux l’identité de votre entreprise.'
          }
        }
      },

      contact: {
        title: 'Contact',
        description:
          'Parlez-nous de vos besoins, nous serions ravis de collaborer avec vous.',
        text:
          "Créer des sites web professionnels, c'est ce que nous faisons. Parlez-nous de vos besoins, nous serions ravis de collaborer avec vous.",
        form: {
          fullname: 'Votre nom',
          company: 'Votre entreprise',
          email: 'Votre e-mail',
          message: 'Décrivez-nous votre projet',
          submit: 'Soumettre'
        },
        other: {
          title: 'Autres moyens de nous contacter',
          direction: {
            title: 'Direction générale',
            email: 'h.nedjar@univerweb.dz'
          },
          technique: {
            title: 'Service technique',
            email: 'webmaster@univerweb.dz'
          }
        }
      },

      error: {
        title_1: 'Page non trouvée',
        title_2: "Une erreur s'est produite",
        description: 'Page non trouvée, pas de bol.',
        btn: "Retour à l'accueil"
      },

      footer: {
        address: {
          name: 'Univerweb Eurl',
          streetAddress: '62, coopérative El Mebniya',
          addressLocality: 'Birkhadem',
          postalCode: '16 330',
          addressCity: 'Alger'
        },
        maps: 'Obtenir un itinéraire',
        phone: {
          label: 'Téléphone / fax :',
          number: '021 44 08 11'
        },
        mobile: {
          label: 'Mobile :',
          number: '0551 90 46 22'
        },
        email: {
          label: 'E-mail :',
          mailto: 'contact@univerweb.dz'
        },
        social: {
          twitter: 'Rejoignez-nous sur Twitter',
          facebook: 'Rejoignez-nous sur Facebook',
          github: 'Rejoignez-nous sur GitHub'
        },
        copy: 'Copyright 2020 Univerweb. Tous droits réservés.'
      }
    })
  })
}
