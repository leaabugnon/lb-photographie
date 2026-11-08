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
    slug: "photographe-animalier-chiens-animaux",
    title: "Photographe animalier : chiens, chats et autres animaux, en séance ou en action",
    date: "8 novembre 2026",
    dateISO: "2026-11-08",
    cat: "Conseils",
    cover: "/photos/animalier-complicite.webp",
    excerpt: "Séance photo avec votre chien, votre chat ou un autre animal, concours, éducation canine, jeux de meute : comment je photographie les animaux, et comment bien préparer la séance.",
    body: [
      { text: "Chiens, chats, perroquets, animaux de ferme ou de travail : photographier un animal demande de la patience et de l'observation. Je cherche des images qui lui ressemblent vraiment, et qui montrent aussi le lien avec vous. Voici comment ça se passe." },
      { h: "Une séance à son rythme", text: "Un animal ne pose pas sur commande. Je m'adapte à son caractère et à son énergie : on laisse du temps pour qu'il se sente à l'aise, on joue, on se promène, et je photographie les moments qui comptent. Les images sont souvent les plus belles quand il oublie l'appareil.", links: [{ href: "/portfolio?cat=Animalier", label: "Voir les photos animalières" }] },
      { h: "Portraits et complicité", text: "Un portrait de votre animal seul, ou avec vous, pour garder une image de votre complicité : le regard, la posture, un geste habituel. Je travaille dans un décor qu'il connaît, chez vous, en balade ou dans un endroit qui lui plaît." },
      { h: "Animaux en action", text: "Chien de travail, jeux de meute, balade à toute vitesse : je photographie aussi l'action, pour montrer l'énergie de votre animal en mouvement. Je suis aussi à l'aise en extérieur qu'en séance plus calme." },
      { h: "Éducation canine et concours", text: "Je photographie des séances d'éducation canine et des concours, par exemple d'IGP. Si vous êtes un club, une école canine ou un organisateur, on peut discuter de photos ou de vidéos de votre journée, pour vos membres ou vos réseaux." },
      { h: "Comment bien préparer la séance", text: "Choisissez un moment où votre animal est en forme, après une balade plutôt qu'au retour d'une longue journée. Prévoyez des friandises ou un jouet qu'il aime, et son collier ou son harnais habituel. Si vous le souhaitez, brossez-le avant, et c'est tout : pas besoin de plus." },
      { h: "Photo, vidéo ou les deux", text: "Une séance peut donner des photos, une courte vidéo, ou les deux. Une vidéo montre souvent mieux le caractère d'un animal, et fonctionne très bien pour partager avec vos proches." },
      { h: "Comment réserver", text: "Écrivez-moi avec votre animal, le lieu qui vous plaît et ce que vous imaginez : je vous réponds avec une proposition adaptée. Après la séance, je vous envoie les images retouchées avec un rendu naturel, et je vous indique le délai dès le début.", links: [{ href: "/contact?type=particulier", label: "Me contacter" }, { href: "/portfolio?cat=Animalier", label: "Voir le portfolio animalier" }] },
    ],
  },
  {
    slug: "photographe-sport-photos-action",
    title: "Photographe de sport : des photos d'action pour votre club, votre événement ou vous-même",
    date: "8 novembre 2026",
    dateISO: "2026-11-08",
    cat: "Conseils",
    cover: "/photos/sport-vtt-2.webp",
    excerpt: "Football, hockey sur glace, patinage artistique, volley, VTT : comment je photographie le sport, ce qui fait une bonne photo d'action, et comment me contacter pour votre club, votre événement ou un shooting sportif.",
    body: [
      { text: "Le sport, c'est de l'énergie, de la vitesse et des émotions qui durent une fraction de seconde. Je photographie plusieurs disciplines : football, hockey sur glace, patinage artistique, volleyball, VTT et sports équestres. Voici comment je travaille, et ce que je peux faire pour vous." },
      { h: "Saisir le bon moment", text: "Une bonne photo de sport, c'est le bon geste au bon moment : le saut, le contact, la réception, l'émotion après l'effort. Je me place pour voir l'action de près, et je cherche aussi les moments qui ne se voient pas à l'œil nu : un regard, une concentration, une joie.", links: [{ href: "/portfolio?cat=Sport", label: "Voir les photos de sport" }] },
      { h: "Chaque sport a ses contraintes", text: "Une salle sombre, une glace qui reflète, un terrain en plein soleil, un sentier de VTT : la lumière et la vitesse changent d'un sport à l'autre. Je prépare mon matériel et mon placement selon la discipline, pour que les images restent nettes et lisibles, même quand ça va vite." },
      { h: "Pour un club ou une association", text: "Si vous gérez un club ou une association, je peux photographier un match, un entraînement, un gala ou une journée spéciale, pour alimenter vos réseaux sociaux, votre site ou vos affiches. On discute de ce dont vous avez besoin : photos d'action, portraits d'équipe, ambiance du public, ou les trois." },
      { h: "Pour un événement sportif", text: "Tournoi, compétition, course : je peux couvrir votre événement en photo et en vidéo, avec un récapitulatif à publier après la journée. Dites-moi le programme et ce que vous voulez en faire, et je vous propose une façon de faire adaptée." },
      { h: "Pour un sportif ou une sportive", text: "Un shooting individuel, c'est aussi possible : photos d'action pour votre dossier, vos réseaux ou simplement pour le souvenir, sur votre terrain, votre piste ou votre parcours habituel." },
      { h: "Photo, vidéo ou les deux", text: "Selon votre projet, je réalise des photos, une vidéo, ou les deux ensemble. Une courte vidéo d'action ou un récapitulatif fonctionne très bien sur les réseaux sociaux, en complément des photos." },
      { h: "Comment me contacter", text: "Écrivez-moi avec le sport, la date, le lieu et ce que vous imaginez : je vous réponds avec une proposition adaptée. Après la séance ou l'événement, je vous envoie les images retouchées, et je vous indique le délai dès le début.", links: [{ href: "/contact?type=autre", label: "Me contacter" }, { href: "/portfolio?cat=Sport", label: "Voir le portfolio sport" }] },
    ],
  },
  {
    slug: "photo-video-entreprise-contenu-reseaux",
    title: "Photo et vidéo pour votre entreprise : contenu, interviews et réseaux sociaux",
    date: "8 novembre 2026",
    dateISO: "2026-11-08",
    cat: "Conseils",
    cover: "/photos/amazonia-marque.webp",
    excerpt: "Photos de vos produits ou de vos locaux, vidéos pour les réseaux sociaux, interviews filmées, portraits d'équipe : voici ce que je peux réaliser pour votre entreprise ou votre marque, et comment ça se passe.",
    body: [
      { text: "Une entreprise ou une marque a besoin d'images régulièrement : pour les réseaux sociaux, le site web, une newsletter ou un événement. Plutôt que de tout improviser, on peut préparer un tournage qui vous donne du contenu pour plusieurs semaines. Voici ce que je réalise et comment on travaille ensemble." },
      { h: "Photos de vos produits, de vos lieux, de votre quotidien", text: "Je photographie vos produits, vos locaux, votre atelier ou votre lieu de vie, avec une ambiance qui vous ressemble. L'idée est d'avoir des photos qui accompagnent vos publications et votre site, et pas seulement des images isolées." },
      { h: "Des vidéos pour vos réseaux sociaux", text: "Reels, formats courts, vidéos de présentation : je filme et je monte des vidéos pensées pour les réseaux sociaux. On définit ensemble le format et le ton avant le tournage, pour que le résultat soit utilisable tel quel." },
      { h: "Des interviews filmées", text: "Interview d'un membre de l'équipe, d'un partenaire, d'un client ou de la direction : je filme et j'enregistre le son avec un micro adapté, puis je monte l'ensemble. C'est une bonne façon de donner un visage à votre entreprise ou de présenter un partenaire." },
      { h: "Vos événements et votre stand", text: "Salon, inauguration, journée portes ouvertes : je peux photographier et filmer l'événement ou votre stand, pour que vous puissiez ensuite publier des images pendant et après la journée." },
      { h: "Portraits d'équipe et photos corporate", text: "Des portraits individuels ou d'équipe, pour votre site, LinkedIn ou la presse, dans un style naturel plutôt que figé. Je m'adapte à votre lieu et à votre équipe.", links: [{ href: "/portfolio?cat=Portrait", label: "Voir les portraits" }] },
      { h: "Comment ça se passe", text: "Vous me contactez avec votre projet et vos canaux de diffusion : réseaux sociaux, site web, communication. On discute de ce dont vous avez besoin, puis je vous fais une proposition adaptée. Après le tournage, vous recevez des photos retouchées et/ou des vidéos montées, prêtes à publier. Le délai dépend du projet, et je vous l'indique dès le départ.", links: [{ href: "/contact?type=entreprise", label: "Me contacter" }] },
      { h: "Une seule fois ou sur la durée ?", text: "Un tournage ponctuel suffit parfois, par exemple pour un lancement ou un événement. Mais beaucoup d'entreprises ont besoin de contenu régulier : on peut alors prévoir plusieurs séances dans l'année, avec une ligne visuelle cohérente.", links: [{ href: "/services#entreprises", label: "Voir les prestations entreprises" }, { href: "/portfolio", label: "Voir le portfolio" }] },
    ],
  },
  {
    slug: "shooting-photo-cheval-particulier",
    title: "Shooting photo avec son cheval : comment ça se passe et comment se préparer",
    date: "8 novembre 2026",
    dateISO: "2026-11-08",
    cat: "Conseils",
    cover: "/photos/equestre-crepuscule.webp",
    excerpt: "Vous aimeriez de belles photos de vous et de votre cheval ? Voici comment se déroule un shooting avec moi : lieu, lumière, préparation, photo et/ou vidéo, et ce que vous recevez ensuite.",
    body: [
      { text: "Un shooting avec son cheval, c'est une façon de garder des images de votre complicité, pour vous, pour offrir ou simplement pour le plaisir. Voici comment se passe une séance avec moi, et comment bien vous y préparer." },
      { h: "On en discute d'abord", text: "Tout commence par un message : ce que vous imaginez, le style qui vous plaît, l'endroit où vous montez, l'ambiance que vous cherchez. Des images naturelles et lumineuses, quelque chose de plus posé, ou plus dynamique à l'obstacle : on construit la séance ensemble, selon vous et votre cheval.", links: [{ href: "/contact?type=particulier", label: "Me contacter" }] },
      { h: "Le lieu et la lumière", text: "Le décor compte beaucoup : un champ, une forêt, un chemin, votre manège ou votre écurie. Je regarde aussi la lumière, qui change tout : on choisit une heure de la journée qui met votre cheval en valeur, et on garde un plan B si la météo ne suit pas." },
      { h: "Avec ou sans votre cheval", text: "La séance peut se faire avec votre cheval, avec vous deux ensemble, monté ou à pied, ou seulement avec lui, pour un portrait. Vous pouvez aussi venir sans cheval, pour un portrait de vous. Dites-moi ce qui vous fait envie, on adapte." },
      { h: "Se préparer", text: "Pas besoin de grand-chose. Brossez votre cheval le jour même, nettoyez le matériel qui sera visible, et choisissez une tenue dans laquelle vous vous sentez bien. Prévoyez un peu de temps : un cheval qui se détend donne de bien meilleures images que s'il est pressé." },
      { h: "Pendant la séance", text: "Je vous guide un peu, mais sans vous faire poser pendant des heures. On alterne des moments posés et des moments plus naturels, et je m'adapte au rythme de votre cheval. Je respecte aussi ses pauses : un cheval à l'aise, c'est la base d'une belle séance." },
      { h: "Photo, vidéo ou les deux", text: "Selon votre envie, la séance peut donner des photos, une vidéo, ou les deux. Je peux faire les deux pendant la même séance, sans que vous ayez à choisir à l'avance.", links: [{ href: "/services#particuliers", label: "Voir les prestations pour particuliers" }] },
      { h: "Après la séance", text: "Je trie les images et je retouche légèrement, avec un rendu naturel : on garde les couleurs et la lumière de la journée. Vous recevez ensuite vos images en ligne, et je vous indique le délai dès le début." },
      { h: "Et pour réserver ?", text: "Écrivez-moi avec la date qui vous convient, le lieu et ce que vous imaginez : je vous réponds avec une proposition adaptée.", links: [{ href: "/contact?type=particulier", label: "Me contacter" }, { href: "/portfolio", label: "Voir le portfolio" }] },
    ],
  },
  {
    slug: "journee-photo-ecurie-societe-de-cavalerie",
    title: "Une journée photo dans votre écurie ou société de cavalerie",
    date: "6 novembre 2026",
    dateISO: "2026-11-06",
    cat: "Conseils",
    cover: "/photos/cours-cross-1.webp",
    excerpt: "Photographe et vidéaste équestre : comment se passe une journée de photos et de vidéos dans votre écurie, votre société de cavalerie ou lors d'un cours, de l'arrivée à la livraison.",
    body: [
      { text: "Vous gérez une écurie, un club ou une société de cavalerie, ou vous organisez un cours, un entraînement ou une journée entre cavaliers, et vous aimeriez des photos et des vidéos de vos cavaliers, sans que ça complique votre organisation ? Voici comment ça se passe concrètement avec moi." },
      { h: "Avant la journée", text: "Prenez contact avec moi pour qu'on en discute : date, lieu, journée complète ou demi-journée, ce que vous imaginez. Selon l'événement, on choisit ensemble la façon de faire la plus simple pour vous.", links: [{ href: "/contact?type=cours", label: "Me contacter" }] },
      { h: "En principe : mes trois packs", text: "Pour les cours et les entraînements, je propose en principe mes trois formules aux cavaliers : photos, vidéo, ou photos et vidéo ensemble. Les cavaliers qui souhaitent des images me l'indiquent à l'avance, et chacun règle ensuite ce qu'il a commandé.", links: [{ href: "/services#cours", label: "Voir les formules" }] },
      { h: "Aussi possible : photographier tout le monde", text: "Je peux aussi photographier l'ensemble des participants, comme lors d'un concours, et mettre ensuite les photos en vente à l'unité dans une galerie en ligne. J'en fais la promotion sur mon Instagram, et chacun y retrouve ses images pendant une durée limitée. On choisit ensemble la formule qui convient le mieux à votre événement, et les deux approches peuvent aussi être combinées." },
      { h: "Pendant la journée", text: "J'arrive et je reste la journée ou la demi-journée prévue. Je photographie ou je filme selon ce qui a été demandé. Je m'adapte à votre programme, sans perturber les chevaux ni les cavaliers." },
      { h: "Des images pour la société aussi ?", text: "Si votre écurie ou votre société souhaite elle aussi des photos ou des vidéos pour elle-même, par exemple pour ses réseaux sociaux, on peut en discuter. Je peux fournir une sélection de photos, voire une vidéo récapitulative de la journée, selon vos besoins." },
      { h: "Après la journée", text: "Je ne vous fais pas attendre : pour les packs, les photos et les vidéos montées sont envoyées dans les quelques jours qui suivent, et chaque cavalier reçoit ce qu'il a demandé. Pour une galerie en vente à l'unité, elle est mise en ligne rapidement après l'événement." },
      { h: "Qui doit me contacter ?", text: "En général, c'est la personne qui organise : l'écurie, la société de cavalerie ou l'organisateur du cours. Si vous êtes simple participant, vous ne savez pas toujours si quelqu'un est déjà prévu pour les photos : le plus simple est d'en parler à l'organisateur, ou de m'écrire directement.", links: [{ href: "/services#cours", label: "Voir les formules cours et entraînements" }, { href: "/blog/photo-ou-video-en-concours", label: "Photo ou vidéo : que choisir ?" }] },
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
