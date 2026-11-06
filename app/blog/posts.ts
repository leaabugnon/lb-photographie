// Articles du blog. Pour en ajouter un : copie un bloc et remplis-le.
// `body` = liste de paragraphes ; ajoute `h` à un bloc pour un sous-titre.

export type Block = { h?: string; text: string; links?: { href: string; label: string }[] };
export type Post = {
  slug: string;
  title: string;
  date: string;
  dateISO: string;
  cat: string;
  cover: string;
  excerpt: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "journee-photo-ecurie-societe-de-cavalerie",
    title: "Une journée photo dans votre écurie ou société de cavalerie",
    date: "6 novembre 2026",
    dateISO: "2026-11-06",
    cat: "Conseils",
    cover: "/photos/cours-cross-1.webp",
    excerpt: "Photographe et vidéaste équestre : comment se passe une journée de photos et de vidéos dans votre écurie ou votre société de cavalerie, de l'arrivée à la livraison.",
    body: [
      { text: "Vous gérez une écurie, un club ou une société de cavalerie, ou vous organisez une journée entre cavaliers, et vous aimeriez des photos et des vidéos de vos cavaliers sur une journée, sans que ça complique votre organisation ? Voici comment ça se passe concrètement avec moi." },
      { h: "Avant la journée", text: "On se parle d'abord : date, lieu, ce que vous souhaitez, photo, vidéo ou les deux. Les cavaliers qui veulent des images me l'indiquent à l'avance, c'est ce qui me permet de savoir qui je dois suivre.", links: [{ href: "/contact?type=cours", label: "Demander un devis" }] },
      { h: "Pendant la journée", text: "J'arrive et je reste toute la journée. Je photographie ou je filme les cavaliers selon ce qu'ils m'ont demandé : certains veulent des photos, d'autres une vidéo, d'autres les deux. Je m'adapte à votre programme, sans perturber les chevaux ni les cavaliers." },
      { h: "Les cavaliers qui n'ont rien commandé", text: "Si vous le souhaitez, on peut aussi en discuter : je peux photographier les cavaliers qui n'ont rien commandé, et mettre leurs photos en vente à l'unité dans une galerie en ligne. Chacun y retrouve ses images, mais la galerie reste ouverte seulement un temps limité. C'est une option, pas une obligation, à décider ensemble avant la journée." },
      { h: "Après la journée", text: "Je ne vous fais pas attendre : les photos et les vidéos montées sont envoyées dans les quelques jours qui suivent. Chaque cavalier reçoit ce qu'il a demandé. Et si vous en avez besoin pour vos réseaux sociaux, je peux aussi vous fournir une sélection de photos, voire une vidéo récapitulative de la journée, pour la société ou l'organisateur." },
      { h: "Et pour les cours et entraînements ?", text: "Le principe est le même, à plus petite échelle. Je propose trois formules : photos, vidéo, ou les deux ensemble.", links: [{ href: "/services#cours", label: "Voir les formules cours et entraînements" }, { href: "/blog/photo-ou-video-en-concours", label: "Photo ou vidéo : que choisir ?" }] },
    ],
  },
  {
    slug: "photo-ou-video-en-concours",
    title: "Photo ou vidéo en concours : que choisir ?",
    date: "5 novembre 2026",
    dateISO: "2026-11-05",
    cat: "Conseils",
    cover: "/photos/evenement-concours.webp",
    excerpt: "Photo, vidéo ou les deux ? Mon avis de photographe équestre pour choisir selon l'épreuve, en concours, en cours, en entraînement ou en shooting.",
    body: [
      { text: "Cavaliers, c'est la question qu'on me pose le plus : « Je prends la photo ou la vidéo ? » Je travaille en concours, en cours, en entraînements et en shootings, dans le Jura et ailleurs, et voici comment je vous conseille de choisir." },
      { h: "En concours, il faut généralement choisir", text: "Sur une épreuve, vous n'avez qu'un seul tour. Pour la photo, je me place et j'anticipe l'instant fort, par exemple le saut ou la réception. Pour la vidéo, je dois suivre le tour en entier. Ce sont deux placements et deux attentions différentes : on ne peut pas tout faire en même temps sur un même passage. Si vous faites deux parcours, je peux photographier l'un et filmer l'autre, mais la vidéo reste alors assez courte." },
      { h: "La photo, quand la choisir ?", text: "Si vous voulez un souvenir à encadrer, une belle image pour vos réseaux ou pour un sponsor, la photo est le bon choix. Un seul instant, bien choisi, dit beaucoup de la complicité avec votre cheval." },
      { h: "La vidéo, quand la choisir ?", text: "Si vous voulez revivre le tour dans son ensemble, analyser votre parcours ou partager un petit film, la vidéo est idéale. Mon Nikon Z9 filme en 4K et permet de beaux ralentis, ce qui met bien en valeur les phases de saut.", links: [{ href: "/blog/nikon-z9-equestre", label: "Pourquoi je travaille avec le Nikon Z9" }] },
      { h: "Les deux, c'est possible en cours, entraînement ou shooting", text: "Lors d'un cours, d'un entraînement ou d'un shooting, les exercices se répètent : je peux photographier à un passage et filmer à un autre. Je propose donc trois formules : photos, vidéo, ou photos et vidéo ensemble. Lors d'un récent cours de cross, le pack combiné a été le plus apprécié : une vidéo montée d'environ 50 secondes, accompagnée de 10 à 15 photos.", links: [{ href: "/services#cours", label: "Voir les formules cours et entraînements" }] },
      { h: "Et pour les concours ?", text: "Je suis régulièrement présente sur des concours, pas seulement dans ma région. Selon le concours, un photographe officiel est déjà en place, et je ne viens pas faire de photos en concurrence avec un collègue. En revanche, si personne ne propose de vidéo, je peux venir filmer votre passage. Le plus simple : me demander directement, je vous dis ce qui est possible." },
      { h: "Comment décider ?", text: "Posez-vous une question : voulez-vous un instant ou toute l'histoire du tour ? Si vous hésitez, écrivez-moi avec le nom du concours, du cours ou du shooting, et je vous conseillerai la formule la plus adaptée.", links: [{ href: "/contact?type=concours", label: "Me contacter pour un concours" }] },
    ],
  },
  {
    slug: "nikon-z9-equestre",
    title: "Mon matériel : pourquoi le Nikon Z9",
    date: "8 septembre 2026",
    dateISO: "2026-09-08",
    cat: "Technique",
    cover: "/photos/equestre-saut.webp",
    excerpt: "Qualité d'image, vidéo 4K à 120 i/s, déclenchement silencieux… le boîtier qui porte la quasi-totalité de mon travail.",
    body: [
      { text: "Depuis que je l'ai en main, le Nikon Z9 ne me quitte plus. C'est le boîtier sur lequel repose la quasi-totalité de mon travail, photo comme vidéo — et il y a de bonnes raisons à ça." },
      { h: "Une qualité d'image qui laisse de la marge", text: "Le Z9 est un hybride plein format de 45,7 mégapixels. Concrètement, mes fichiers sont énormes et incroyablement détaillés : je peux recadrer largement dans une image et garder une qualité impeccable. Pour de la photo équestre, où l'action ne se déroule pas toujours là où on l'attend, c'est un confort précieux." },
      { h: "La vidéo, la vraie révolution", text: "C'est surtout côté vidéo que la différence m'a sauté aux yeux. Le Z9 filme en 4K jusqu'à 120 images par seconde — de quoi sortir des ralentis superbes — et monte même jusqu'à la 8K. Avant, je travaillais avec un Nikon D4S, un reflex limité à la Full HD. Entre les deux, c'est le jour et la nuit : passer à un hybride de cette trempe a complètement changé ma façon de filmer." },
      { h: "Fait pour l'action", text: "En rafale, il déclenche jusqu'à 20 images par seconde en pleine résolution (et jusqu'à 120 en format réduit). Sa détection de sujets accroche aussi bien le cavalier que l'animal, même en plein mouvement — l'autofocus ne lâche pas l'action. Et détail que j'adore : il n'a pas d'obturateur mécanique, il déclenche donc en silence total. Sur un concours, c'est un vrai atout : je ne perturbe ni le cheval ni le cavalier en pleine épreuve." },
      { h: "Solide en main, par tous les temps", text: "Oui, il est lourd — environ 1,3 kg — mais son grip intégré l'équilibre parfaitement, et il reste agréable à tenir même sur de longues journées de terrain. Il est aussi entièrement tropicalisé : les jours où la météo se gâte — pluie, boue, froid — je continue de déclencher sans stresser pour mon matériel, et ça arrive plus souvent qu'on ne le croit sur un concours en extérieur. L'autonomie, elle aussi, tient bien la route, ce qui n'est pas toujours évident sur un hybride." },
      { text: "Bref, un outil qui suit le rythme, aussi à l'aise sur un paddock qu'en plein reportage. C'est le genre de matériel qu'on oublie une fois l'œil dans le viseur — et c'est exactement ce que je lui demande." },
    ],
  },
  {
    slug: "une-journee-sur-un-concours",
    title: "Une journée sur un concours, côté objectif",
    date: "1er septembre 2026",
    dateISO: "2026-09-01",
    cat: "Coulisses",
    cover: "/photos/evenement-csio-3.webp",
    excerpt: "Arriver tôt, étudier les parcours, guetter l'instant : comment se prépare vraiment une journée de photo en concours.",
    body: [
      { text: "On imagine souvent le photographe qui débarque, mitraille, et repart. En vrai, une bonne journée de concours se joue surtout dans la préparation. Voici à quoi ressemble la mienne." },
      { h: "Arriver tôt, prendre ses repères", text: "J'arrive toujours en avance. Le temps de trouver un coin pour poser mon matériel, de sentir l'ambiance du lieu, et de repérer les zones où je pourrai me placer selon la lumière." },
      { h: "Étudier le parcours", text: "Avant chaque épreuve, je vais observer le parcours. C'est un réflexe essentiel : ça me dit où me positionner et quels obstacles donneront les plus belles images — celui qui prend bien la lumière, l'angle où le cheval sera le plus expressif, le moment de suspension au-dessus de la barre." },
      { h: "Guetter l'instant", text: "Pendant l'épreuve, tout se joue à l'anticipation. Je me poste, je suis le couple des yeux, et j'attends : l'élan avant l'obstacle, la concentration du cavalier, cette fraction de seconde où tout est suspendu. C'est là que se cachent les images qui racontent vraiment quelque chose." },
      { h: "Trier, encore et encore", text: "Dès que j'ai un moment de calme entre deux épreuves, je commence déjà à trier. Repérer les meilleures prises à chaud me fait gagner un temps fou au retour, et me permet de livrer vite — ce que les cavaliers apprécient toujours." },
      { text: "Au fond, le plus beau cliché se prépare bien avant de déclencher. Un concours, pour moi, c'est autant une histoire de patience et d'observation que de rapidité." },
    ],
  },
];
