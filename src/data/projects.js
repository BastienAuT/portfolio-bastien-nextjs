export const projects = [
  {
    slug: "cyclone",
    title: "Cyclone",
    kind: "personal",
    kindLabel: "Projet personnel",
    category: "Communication · Temps réel",
    cover: "/projects/cyclone-featured-v2.webp",
    demoUrl: "https://cyclone-smoky.vercel.app/",
    repositoryUrl: "https://github.com/BastienAuT/cyclone",
    summary:
      "Une plateforme communautaire full-stack qui réunit salons, messages privés, appels audio et vidéo, présence et partage d’écran dans une expérience responsive.",
    scope:
      "Projet personnel indépendant, conçu comme une démonstration full-stack publique. Le dépôt et l’application sont consultables en ligne.",
    role: "Conception produit, interface et développement full-stack",
    contribution:
      "J’ai cadré le produit, modélisé les rôles et permissions, réalisé l’interface responsive et intégré les API, la donnée temps réel et les communications audio-vidéo.",
    context:
      "Cyclone part d’un problème simple à formuler mais difficile à exécuter : réunir la conversation textuelle et les échanges audio-vidéo dans un même produit, sans perdre la cohérence des permissions ni de la navigation. Il ne s’agit pas d’une commande client ni d’un produit affilié à Discord.",
    challenge:
      "Synchroniser messages, présence et médias en temps réel tout en séparant clairement l’identité, les données applicatives et le transport audio-vidéo.",
    approach:
      "J’ai confié chaque responsabilité au service le plus adapté : Clerk pour l’identité, Next.js pour les API et les contrôles d’accès, Supabase pour les données et les événements privés, puis LiveKit pour les médias avec des jetons courts générés côté serveur.",
    tradeoffs:
      "Ce découpage évite de faire transiter les médias par Next.js et garde les responsabilités lisibles. En contrepartie, il faut coordonner plusieurs services, leurs secrets, leurs permissions et leurs états de connexion.",
    result:
      "La version déployée permet de parcourir le produit et couvre salons textuels et vocaux, conversations privées, webcam, partage d’écran, rôles, modération et navigation responsive. Je ne lui attribue pas de métrique d’usage qui n’a pas été mesurée.",
    limitations:
      "Cyclone reste une démonstration : la couverture de tests automatisés doit encore être complétée, la limitation de débit est conservée en mémoire et certains états de présence sont rafraîchis périodiquement.",
    nextStep:
      "Ajouter des parcours automatisés avec plusieurs comptes et déplacer la limitation de débit vers un stockage partagé avant d’envisager une charge distribuée.",
    technologies: ["Next.js", "TypeScript", "Clerk", "Supabase", "LiveKit"],
    highlights: [
      {
        label: "Temps réel",
        title: "Un état partagé",
        description:
          "Messages, présence et conversations évoluent sans rechargement, avec des canaux privés alignés sur les droits de chaque membre.",
      },
      {
        label: "Architecture",
        title: "Des frontières nettes",
        description:
          "L’authentification, la donnée et le transport média restent découplés afin de limiter les responsabilités de chaque couche.",
      },
      {
        label: "Produit",
        title: "Une expérience complète",
        description:
          "Le parcours couvre la création d’un espace, la discussion, la modération et le passage naturel du texte à l’audio ou à la vidéo.",
      },
    ],
  },
  {
    slug: "surgyah",
    title: "Surgyah",
    kind: "personal",
    kindLabel: "Projet personnel",
    category: "Résilience · Simulation distribuée",
    cover: "/projects/surgyah-cover.webp",
    demoUrl: "https://surgyah.vercel.app/",
    repositoryUrl: "https://github.com/BastienAuT/Surgyah",
    summary:
      "Un laboratoire visuel pour construire une infrastructure, provoquer des pannes et comprendre leur propagation grâce à un moteur de simulation déterministe.",
    scope:
      "Projet personnel open source conçu comme une démonstration d’architecture et de pédagogie technique. La démo publique s’exécute dans le navigateur, tandis que le dépôt fournit un mode distribué complet avec Docker.",
    role: "Conception produit, architecture et développement full-stack",
    contribution:
      "J’ai conçu le parcours guidé, le canvas d’infrastructure, le moteur de simulation, les diagnostics et la comparaison des essais, ainsi que l’architecture distribuée optionnelle et sa documentation.",
    context:
      "Les pannes d’une architecture distribuée sont difficiles à expliquer avec un schéma statique : une saturation locale peut remplir une file, ralentir une dépendance puis dégrader tout le parcours utilisateur. Surgyah transforme ces relations invisibles en une expérience interactive et progressive.",
    challenge:
      "Modéliser assez fidèlement la capacité, les files d’attente, les dépendances et les incidents pour produire des résultats utiles, tout en gardant chaque conséquence compréhensible par une personne qui découvre la résilience.",
    approach:
      "J’ai isolé un moteur TypeScript pur qui compile le graphe et calcule chaque état sans dépendre de l’heure ni d’un service externe. Trois missions guidées appliquent un pic de trafic, la perte d’une API et une panne PostgreSQL ; l’interface visualise leur propagation, les métriques et la chaîne causale en direct.",
    tradeoffs:
      "La démo publique exécute le moteur dans le navigateur pour rester immédiate, gratuite et autonome, mais elle ne persiste pas les essais. Le même moteur peut aussi tourner dans une architecture Docker où Next.js enregistre les runs, Redis Streams alimente un worker Bun et SSE diffuse les résultats.",
    result:
      "La version en ligne permet de modifier une infrastructure, lancer 18 étapes déterministes, suivre CPU, files, latence et taux de succès, puis comparer deux essais avant et après amélioration. Le dépôt documente et teste aussi le parcours distribué PostgreSQL, Redis et worker.",
    limitations:
      "La démo navigateur ne conserve ni les positions du canvas ni l’historique après fermeture. Dans le mode distribué, la reprise après le crash d’un worker et les commandes de pause ou d’arrêt ne font pas encore partie du MVP.",
    nextStep:
      "Persister la disposition du canvas et l’historique des comparaisons, puis ajouter la récupération des runs interrompus et des checkpoints au mode distribué.",
    technologies: ["Next.js", "TypeScript", "React Flow", "PostgreSQL", "Redis", "Bun", "Docker"],
    highlights: [
      {
        label: "Simulation",
        title: "Un moteur déterministe",
        description:
          "Chaque tick part du même état et des mêmes événements pour produire un résultat reproductible, testable sans API externe ni IA.",
      },
      {
        label: "Pédagogie",
        title: "De la panne à l’impact",
        description:
          "Le graphe, les métriques et la chaîne causale relient l’incident technique à ses conséquences concrètes pour l’utilisateur.",
      },
      {
        label: "Architecture",
        title: "Deux modes, un moteur",
        description:
          "La démo autonome partage son cœur de calcul avec un parcours distribué associant PostgreSQL, Redis Streams, worker Bun et SSE.",
      },
    ],
  },
  {
    slug: "jetscanner",
    title: "JetScanner",
    kind: "professional",
    kindLabel: "Projet professionnel",
    category: "Recherche de vols",
    cover: "/projects/jetscanner-cover.webp",
    demoUrl: "https://www.jetscanner.io",
    repositoryUrl: null,
    summary:
      "Une expérience de recherche aérienne qui combine résultats en direct, filtres et géolocalisation pour rapprocher rapidement l’utilisateur du bon départ.",
    scope:
      "Réalisation menée dans un cadre professionnel sur un produit existant. Le site appartient à son éditeur et son code source n’est pas public.",
    role: "Développement web et intégration de fonctionnalités produit",
    contribution:
      "Ma contribution porte sur la recherche en direct, le filtrage des résultats et l’utilisation de la géolocalisation pour faire remonter les départs proches. Je ne m’attribue pas la conception ni le développement de l’ensemble du service.",
    context:
      "JetScanner devait rendre lisible une recherche contenant de nombreux départs et critères, tout en réduisant le temps nécessaire pour trouver une option pertinente. Mon intervention s’inscrivait dans les contraintes et les parcours déjà définis du produit.",
    challenge:
      "Faire remonter rapidement les vols utiles sans imposer une succession d’écrans ou de réglages avant d’obtenir un premier résultat exploitable.",
    approach:
      "J’ai travaillé sur la recherche en direct, le filtrage des résultats et la géolocalisation afin de proposer en priorité les départs les plus proches de l’utilisateur.",
    tradeoffs:
      "La proximité géographique aide à ordonner les options, mais elle ne suffit pas à définir un bon résultat. Les filtres conservent donc une place centrale et la recherche reste compréhensible pendant l’affinage.",
    result:
      "Les fonctionnalités livrées rassemblent saisie, proximité et affinage dans une même interface. Faute de données publiques auxquelles je puisse attribuer ma seule contribution, je ne présente pas de chiffre d’impact.",
    limitations:
      "Le dépôt, les données internes et les indicateurs métier ne sont pas publics. Cette étude de cas se limite volontairement aux fonctionnalités auxquelles j’ai participé.",
    nextStep:
      "Compléter cette étude avec des captures de parcours et des résultats validés par l’entreprise si ces éléments peuvent être rendus publics.",
    technologies: ["JavaScript", "API de vols", "Géolocalisation", "Filtres"],
    highlights: [
      {
        label: "Contribution",
        title: "Recherche en direct",
        description:
          "Les propositions évoluent avec les critères saisis afin de raccourcir le chemin vers un résultat pertinent.",
      },
      {
        label: "Contexte réel",
        title: "Proximité géographique",
        description:
          "La position de l’utilisateur permet de faire remonter les points de départ les plus proches.",
      },
      {
        label: "Interface",
        title: "Affiner sans repartir",
        description:
          "Les filtres structurent les résultats sans casser le rythme de recherche ni masquer les options déjà trouvées.",
      },
    ],
  },
  {
    slug: "newsalist",
    title: "Newsalist",
    kind: "professional",
    kindLabel: "Projet professionnel",
    category: "Média · Actualité",
    cover: "/projects/newsalist-cover.webp",
    demoUrl: "https://www.newsalist.net",
    repositoryUrl: null,
    summary:
      "Une plateforme éditoriale alimentée par Contentful, pensée pour publier un flux d’actualités continu et intégrer une monétisation publicitaire responsive.",
    scope:
      "Réalisation menée dans un cadre professionnel sur une plateforme éditoriale existante. Le site et son code restent la propriété de leur éditeur.",
    role: "Développement web et intégrations éditoriales",
    contribution:
      "Ma contribution porte sur l’alimentation du flux depuis Contentful et l’intégration d’emplacements Google AdSense responsives. Je ne m’attribue pas la ligne éditoriale ni l’ensemble de la plateforme.",
    context:
      "Newsalist devait répondre à deux contraintes complémentaires : permettre à l’équipe éditoriale d’alimenter le média en continu et intégrer la monétisation sans dégrader la lecture.",
    challenge:
      "Faire cohabiter un contenu fréquemment mis à jour et des emplacements publicitaires qui doivent rester cohérents sur ordinateur comme sur mobile.",
    approach:
      "J’ai relié le fil d’actualités à Contentful et intégré des emplacements Google AdSense responsives en tenant compte du rythme de la page et des différents formats d’écran.",
    tradeoffs:
      "Le CMS dissocie la publication du déploiement, au prix d’un contrat de données à maintenir entre Contentful et l’interface. Les publicités doivent, elles, rester visibles sans prendre le pas sur le contenu.",
    result:
      "Les fonctionnalités livrées permettent de piloter les contenus depuis le CMS et de distribuer articles et publicité dans un parcours adaptable. Je n’avance pas de résultat d’audience ou de revenu sans donnée publiable.",
    limitations:
      "Le code source, les données d’audience et les indicateurs de monétisation ne sont pas publics. La page documente uniquement le périmètre de mon intervention.",
    nextStep:
      "Ajouter des captures validées et des indicateurs partageables si l’éditeur autorise leur publication.",
    technologies: ["JavaScript", "Contentful", "Google AdSense", "Responsive"],
    highlights: [
      {
        label: "Contribution",
        title: "Contenu piloté par CMS",
        description:
          "Le flux éditorial est alimenté depuis Contentful afin de dissocier la publication du cycle de déploiement.",
      },
      {
        label: "Monétisation",
        title: "Publicité responsive",
        description:
          "Les emplacements AdSense s’adaptent aux formats disponibles sans rompre la continuité de lecture.",
      },
      {
        label: "Produit",
        title: "Un média actualisable",
        description:
          "L’architecture permet de faire évoluer fréquemment les contenus tout en conservant une présentation homogène.",
      },
    ],
  },
  {
    slug: "vortx",
    title: "VortX",
    kind: "personal",
    kindLabel: "Projet personnel",
    category: "Réseau social · Microblogging",
    cover: "/projects/vortx-portfolio-site-v2.webp",
    demoUrl: "https://vortx-five.vercel.app/",
    repositoryUrl: "https://github.com/BastienAuT/VortX",
    summary:
      "Un réseau social de microblogging complet avec publications, commentaires, likes, repartages, abonnements, tendances, notifications et messagerie.",
    scope:
      "Projet personnel indépendant de portfolio, sans affiliation avec X Corp. Le code source et une démonstration sont publics.",
    role: "Conception produit et développement full-stack",
    contribution:
      "J’ai conçu le modèle social, les parcours de publication et d’interaction, les routes API, l’authentification ainsi que la synchronisation du cache côté interface.",
    context:
      "VortX explore les mécanismes qui rendent un réseau social vivant : un fil pertinent, des interactions immédiates, des profils reliés et plusieurs formes de conversation autour d’un même contenu.",
    challenge:
      "Maintenir une interface fluide alors que publications, compteurs, commentaires, tendances, notifications et conversations modifient en permanence l’état affiché.",
    approach:
      "L’application s’appuie sur Next.js et TypeScript, des routes API contrôlées par NextAuth, Prisma pour les relations et SWR pour synchroniser le cache. Les interactions utilisent des mises à jour optimistes avec retour à l’état précédent en cas d’échec.",
    tradeoffs:
      "Les mises à jour optimistes rendent les interactions immédiates, mais imposent de prévoir un retour arrière et de revalider toutes les vues concernées. Le modèle relationnel facilite la cohérence du graphe social au prix de requêtes plus structurées.",
    result:
      "La démonstration couvre le cycle social complet, de la publication enrichie jusqu’aux échanges privés, avec pagination du fil, recherche, profils, contrôles d’accès et gestion des médias. Aucun volume d’audience n’est revendiqué.",
    limitations:
      "VortX reste un produit personnel de démonstration. Les interactions concurrentes, les parcours authentifiés de bout en bout et l’observabilité demandent davantage de validation avant un usage à grande échelle.",
    nextStep:
      "Renforcer les tests de parcours sur les publications, abonnements et messages, puis documenter plus visiblement l’architecture et les limites dans le dépôt public.",
    technologies: ["Next.js", "TypeScript", "Prisma", "NextAuth", "SWR"],
    highlights: [
      {
        label: "Interactions",
        title: "Réponse immédiate",
        description:
          "Likes et repartages sont reflétés instantanément dans l’interface puis confirmés par l’API, avec restauration automatique en cas d’erreur.",
      },
      {
        label: "Données",
        title: "Un graphe social cohérent",
        description:
          "Prisma structure utilisateurs, abonnements, publications, commentaires, réactions, notifications et messages.",
      },
      {
        label: "Flux",
        title: "Pagination et cache",
        description:
          "Le fil charge progressivement les publications et revalide les vues concernées après chaque interaction.",
      },
    ],
  },
  {
    slug: "lyreah",
    title: "Lyreah",
    kind: "personal",
    kindLabel: "Projet personnel",
    category: "Lecture immersive · EPUB",
    cover: "/projects/lyreah-cover.webp",
    demoUrl: "https://lyreah.vercel.app/",
    repositoryUrl: "https://github.com/BastienAuT/Lyreah",
    summary:
      "Une bibliothèque de classiques francophones où une liseuse EPUB responsive rencontre des ambiances sonores et visuelles entièrement optionnelles.",
    scope:
      "Projet personnel indépendant, du catalogue au back-office. Les sources et licences des textes, couvertures et ambiances sont documentées dans le produit et le dépôt public.",
    role: "Conception produit, architecture et développement full-stack",
    contribution:
      "J’ai conçu l’expérience de lecture, l’architecture des données et du stockage, la progression synchronisée, le back-office d’import et les contrôles de sécurité des EPUB.",
    context:
      "Lyreah traite la lecture numérique comme un produit complet : catalogue éditorialisé, bibliothèque personnelle, liseuse accessible, progression synchronisée et back-office de publication.",
    challenge:
      "Offrir une lecture immersive sans compromettre l’accessibilité, la reprise exacte, la sécurité des fichiers EPUB ni la provenance des textes, couvertures et pistes audio.",
    approach:
      "La liseuse repose sur epub.js et des positions CFI synchronisées. Neon et Drizzle structurent les données, Neon Auth protège les comptes, et Supabase Storage conserve les EPUB et les ambiances dans un stockage privé accessible par URL signée.",
    tradeoffs:
      "Les URL signées gardent les fichiers privés mais nécessitent une médiation serveur et un renouvellement des accès. Les ambiances restent optionnelles afin que l’immersion n’impose ni son, ni animation, ni surcharge visuelle.",
    result:
      "La version en ligne propose 13 classiques en français, jusqu’à 11 ambiances par lecture, des thèmes et réglages typographiques, une chaîne d’import contrôlée et des scénarios de test sur ordinateur, mobile et tablette.",
    limitations:
      "La démonstration est accessible, mais une ouverture publique durable demande encore de finaliser les informations d’identité légale et de rejouer les parcours authentifiés sur un environnement de staging dédié.",
    nextStep:
      "Stabiliser la validation automatisée, terminer les informations légales puis valider le parcours complet d’import, de connexion et de reprise de lecture sur le staging.",
    technologies: ["Next.js", "TypeScript", "epub.js", "Drizzle", "Neon", "Supabase"],
    highlights: [
      {
        label: "Lecture",
        title: "Une reprise exacte",
        description:
          "La progression CFI permet de retrouver précisément sa position, quel que soit le format d’écran utilisé.",
      },
      {
        label: "Immersion",
        title: "Des ambiances facultatives",
        description:
          "Paysages sonores multicouches et effets visuels peuvent accompagner le texte sans jamais être imposés au lecteur.",
      },
      {
        label: "Sécurité",
        title: "Des EPUB contrôlés",
        description:
          "L’import vérifie format, structure, chemins, volumes et langue avant publication dans un stockage privé.",
      },
    ],
  },
];

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
);

export const professionalProjects = projects.filter(
  (project) => project.kind === "professional",
);

export const personalProjects = projects.filter(
  (project) => project.kind === "personal" && project.slug !== "cyclone",
);
