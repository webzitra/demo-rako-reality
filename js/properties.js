/* ============================================================
   RAKO Reality — Property Data + Listing/Detail Rendering
   ============================================================ */

const PROPERTIES = [
  {
    id: "01BV2601",
    title: "Prodej bytu 4+1 se\u00a0zahradou na\u00a0Kryblici",
    type: "byt",
    transaction: "prodej",
    price: 6950000,
    priceNote: null,
    location: "Trutnovsko",
    city: "Trutnov",
    district: "Kryblice",
    rooms: "4+1",
    area: 105.7,
    landArea: 253,
    status: "novinka",
    photos: [
      "https://www.rako-reality.cz/files/galleries/g793-01BV2601.jpg",
      "https://www.rako-reality.cz/files/galleries/g793-01BV2601a.jpg",
      "https://www.rako-reality.cz/files/galleries/g793-01BV2601b.jpg",
      "https://www.rako-reality.cz/files/galleries/g793-01BV2601c.jpg",
      "https://www.rako-reality.cz/files/galleries/g793-01BV2601d.jpg",
      "https://www.rako-reality.cz/files/galleries/g793-01BV2601e.jpg",
      "https://www.rako-reality.cz/files/galleries/g793-01BV2601f.jpg",
      "https://www.rako-reality.cz/files/galleries/g793-01BV2601g.jpg",
      "https://www.rako-reality.cz/files/galleries/g793-01BV2601h.jpg",
      "https://www.rako-reality.cz/files/galleries/g793-01BV2601ch.jpg",
      "https://www.rako-reality.cz/files/galleries/g793-01BV2601i.jpg",
      "https://www.rako-reality.cz/files/galleries/g793-01BV2601j.jpg",
      "https://www.rako-reality.cz/files/galleries/g793-01BV2601k.jpg",
      "https://www.rako-reality.cz/files/galleries/g793-01BV2601l.jpg",
      "https://www.rako-reality.cz/files/galleries/g793-01BV2601m.jpg",
      "https://www.rako-reality.cz/files/galleries/g793-01BV2601n.jpg",
      "https://www.rako-reality.cz/files/galleries/g793-Snimek-obrazovky-2026-01-21-112201.jpg"
    ],
    description: "Zajímavý byt vhodný pro rodinné bydlení s\u00a0dispozicí 4+1 a\u00a0plochou 105,7\u00a0m². Umístěný ve\u00a02.\u00a0NP rodinného domu v\u00a0Trutnově na\u00a0Kryblici — jedné z\u00a0nejatraktivnějších lokalit poblíž centra města, škol a\u00a0sportovišť. Součástí je zahrada s\u00a0pergolou přímo za\u00a0domem. Byt po\u00a0rekonstrukci z\u00a0roku 2017 — nová okna, rozvody, elektřina v\u00a0mědi, koupelna. Vytápění kondenzačním plynovým kotlem. Nastěhovat se můžete ihned.",
    params: {
      "Dispozice": "4+1",
      "Podlahová plocha": "105,7 m²",
      "Pozemek": "253 m²",
      "Vlastnictví": "osobní",
      "Konstrukce": "zděná",
      "Stav": "po rekonstrukci",
      "Podlaží": "2. NP",
      "Elektřina": "220/380V",
      "Voda": "veřejná",
      "Plyn": "ano",
      "Kanalizace": "veřejná",
      "Internet": "ano",
      "Vytápění": "plynový kotel",
      "Rok rekonstrukce": "2017",
      "PENB": "G"
    },
    agent: {
      name: "Mgr. Martina Hendrychová",
      phone: "608 883 011",
      email: "hendrychova@rako-reality.cz"
    }
  },
  {
    id: "01BV2533",
    title: "Prodej apartmánu s\u00a0parkovacím místem v\u00a0Janských Lázních",
    type: "byt",
    transaction: "prodej",
    price: 8450000,
    priceNote: null,
    location: "Trutnovsko",
    city: "Janské Lázně",
    district: "Ski & Bike",
    rooms: "2+kk",
    area: 43.2,
    landArea: null,
    status: "novinka",
    photos: [
      "https://www.rako-reality.cz/files/galleries/g786-01BV2533.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-01BV2533a.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-01BV2533b.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-01BV2533c.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-01BV2533d.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-01BV2533e.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-01BV2533f.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-01BV2533g.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-01BV2533h.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-01BV2533ch.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-01BV2533i.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-01BV2533j.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-01BV2533k.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-01BV2533l.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-01BV2533m.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-01BV2533n.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-01BV2533o.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-01BV2533p.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-01BV2533q.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-IMG-3793-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-PLANEK.jpg",
      "https://www.rako-reality.cz/files/galleries/g786-IMG-3805-HDR.jpg"
    ],
    description: "Jedinečná nabídka — atraktivní apartmán 2+kk v\u00a05.\u00a0NP novostavby apartmánového domu Ski\u00a0&\u00a0Bike v\u00a0Janských Lázních. Přímý vstup na\u00a0sjezdovku, vlastní parkovací místo, lyžárna s\u00a0vyhřívanými držáky bot. Moderní design, vestavěná skříň, kuchyň se\u00a0spotřebiči. Ideální pro vlastní užívání i\u00a0jako investice s\u00a0možností krátkodobých pronájmů. Novostavba z\u00a0roku 2023.",
    params: {
      "Dispozice": "2+kk",
      "Podlahová plocha": "43,2 m²",
      "Vlastnictví": "osobní",
      "Konstrukce": "zděná",
      "Stav": "novostavba",
      "Podlaží": "5. NP",
      "Elektřina": "220V",
      "Voda": "veřejná",
      "Kanalizace": "veřejná",
      "Internet": "ano",
      "Vytápění": "dálkové",
      "Rok výstavby": "2023",
      "Výtah": "ano",
      "PENB": "B"
    },
    agent: {
      name: "Mgr. Martina Hendrychová",
      phone: "608 883 011",
      email: "hendrychova@rako-reality.cz"
    }
  },
  {
    id: "01BV2534",
    title: "Prodej bytu 4+1 po\u00a0kompletní rekonstrukci v\u00a0Trutnově",
    type: "byt",
    transaction: "prodej",
    price: 4490000,
    priceNote: null,
    location: "Trutnovsko",
    city: "Trutnov",
    district: "Sněženková",
    rooms: "4+1",
    area: 82,
    landArea: null,
    status: "rezervace",
    photos: [
      "https://www.rako-reality.cz/files/galleries/g785-01BV2534.jpg",
      "https://www.rako-reality.cz/files/galleries/g785-01BV2534a.jpg",
      "https://www.rako-reality.cz/files/galleries/g785-01BV2534b.jpg",
      "https://www.rako-reality.cz/files/galleries/g785-01BV2534c.jpg",
      "https://www.rako-reality.cz/files/galleries/g785-01BV2534d.jpg",
      "https://www.rako-reality.cz/files/galleries/g785-01BV2534e.jpg",
      "https://www.rako-reality.cz/files/galleries/g785-01BV2534f.jpg",
      "https://www.rako-reality.cz/files/galleries/g785-01BV2534g.jpg",
      "https://www.rako-reality.cz/files/galleries/g785-01BV2534h.jpg",
      "https://www.rako-reality.cz/files/galleries/g785-01BV2534ch.jpg",
      "https://www.rako-reality.cz/files/galleries/g785-01BV2534i.jpg",
      "https://www.rako-reality.cz/files/galleries/g785-01BV2534j.jpg",
      "https://www.rako-reality.cz/files/galleries/g785-PLANEK.jpg"
    ],
    description: "Prostorný byt 4+1 po\u00a0kompletní rekonstrukci v\u00a0klidné části Trutnova — ulice Sněženková. Moderní dispozice, nová koupelna, kvalitní podlahové krytiny. Výborná dostupnost do\u00a0centra města i\u00a0do\u00a0přírody. Ideální pro rodinu.",
    params: {
      "Dispozice": "4+1",
      "Podlahová plocha": "82 m²",
      "Vlastnictví": "osobní",
      "Konstrukce": "panelová",
      "Stav": "po rekonstrukci",
      "Elektřina": "220V",
      "Voda": "veřejná",
      "Kanalizace": "veřejná",
      "Vytápění": "dálkové",
      "PENB": "C"
    },
    agent: {
      name: "Mgr. Martina Hendrychová",
      phone: "608 883 011",
      email: "hendrychova@rako-reality.cz"
    }
  },
  {
    id: "01BD2404",
    title: "Prodej bytu 3+kk s\u00a0terasou a\u00a0parkovacím místem",
    type: "byt",
    transaction: "prodej",
    price: 7396200,
    priceNote: null,
    location: "Trutnovsko",
    city: "Trutnov",
    district: "centrum",
    rooms: "3+kk",
    area: 78,
    landArea: null,
    status: "k-dispozici",
    photos: [
      "https://www.rako-reality.cz/files/galleries/g728-DSC0178-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g728-DSC0186-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g728-PUDORYS.jpg",
      "https://www.rako-reality.cz/files/galleries/g728-DSC1879-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g728-DSC1893-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g728-DSC1898-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g728-DSC1902-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g728-DSC1906-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g728-DSC1910-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g728-DSC1916-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g728-DSC1922-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g728-DSC1925-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g728-DSC1937-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g728-DSC1941-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g728-DSC1929-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g728-DSC1933-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g728-DSC0970-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g728-DSC1018-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g728-DSC1036-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g728-DSC1056-HDR.jpg"
    ],
    description: "Moderní byt 3+kk s\u00a0prostornou terasou a\u00a0vlastním parkovacím místem v\u00a0novostavbě v\u00a0Trutnově. Vysoký standard provedení, nadčasový design. Terasa nabízí krásný výhled do\u00a0okolí. Součástí je sklepní kóje.",
    params: {
      "Dispozice": "3+kk",
      "Podlahová plocha": "78 m²",
      "Vlastnictví": "osobní",
      "Konstrukce": "zděná",
      "Stav": "novostavba",
      "Elektřina": "220V",
      "Voda": "veřejná",
      "Kanalizace": "veřejná",
      "Vytápění": "dálkové",
      "Výtah": "ano",
      "PENB": "B"
    },
    agent: {
      name: "Ing. Petr Kotek",
      phone: "777 043 010",
      email: "kotek.petr@rako-reality.cz"
    }
  },
  {
    id: "01DB2407",
    title: "Prodej bytu 4+kk s\u00a0lodžií a\u00a0parkovacím místem",
    type: "byt",
    transaction: "prodej",
    price: 10482600,
    priceNote: null,
    location: "Trutnovsko",
    city: "Trutnov",
    district: "centrum",
    rooms: "4+kk",
    area: 110,
    landArea: null,
    status: "novinka",
    photos: [
      "https://www.rako-reality.cz/files/galleries/g726-DSC0194-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g726-DSC0178-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g726-PUDORYS.jpg",
      "https://www.rako-reality.cz/files/galleries/g726-DSC0001-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g726-DSC0004-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g726-DSC0018-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g726-DSC0022-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g726-DSC0031-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g726-DSC0072-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g726-DSC0059-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g726-DSC0045-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g726-DSC0077-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g726-DSC0050-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g726-DSC0086-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g726-DSC0950-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g726-DSC0970-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g726-DSC1008-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g726-DSC1036-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g726-DSC1040-HDR.jpg",
      "https://www.rako-reality.cz/files/galleries/g726-DSC1056-HDR.jpg"
    ],
    description: "Velkorysý byt 4+kk s\u00a0lodžií a\u00a0parkovacím místem v\u00a0žádané novostavbě v\u00a0centru Trutnova. Prostorné pokoje, moderní kuchyňská linka, nadstandardní vybavení. Ideální pro náročné klienty hledající komfort a\u00a0kvalitu bydlení ve\u00a0městě.",
    params: {
      "Dispozice": "4+kk",
      "Podlahová plocha": "110 m²",
      "Vlastnictví": "osobní",
      "Konstrukce": "zděná",
      "Stav": "novostavba",
      "Elektřina": "220V",
      "Voda": "veřejná",
      "Kanalizace": "veřejná",
      "Vytápění": "dálkové",
      "Výtah": "ano",
      "PENB": "B"
    },
    agent: {
      name: "Ing. Petr Kotek",
      phone: "777 043 010",
      email: "kotek.petr@rako-reality.cz"
    }
  },
  {
    id: "01RD2606",
    title: "Prodej rodinného domu v\u00a0atraktivní části Trutnova",
    type: "dum",
    transaction: "prodej",
    price: 5490000,
    priceNote: null,
    location: "Trutnovsko",
    city: "Trutnov",
    district: "Kryblice",
    rooms: "3+1",
    area: 102,
    landArea: 425,
    status: "rezervace",
    photos: [
      "https://www.rako-reality.cz/files/galleries/g790-001.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-002.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-003.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-004.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-005.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-006.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-007.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-008.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-009.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-010.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-011.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-012.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-013.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-014.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-015.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-016.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-017.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-018.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-019.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-020.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-021.jpg",
      "https://www.rako-reality.cz/files/galleries/g790-022.JPG"
    ],
    description: "Menší rodinný dům ve\u00a0velmi atraktivní lokalitě Kryblice, nedaleko centra Trutnova. Dvě nadzemní podlaží, zděná cihlová stavba, udržovaná zahrada 425\u00a0m² s\u00a0pergolou a\u00a0skleníkem. Provětrávaná fasáda NOVABRICK, plastová okna, funkční komín s\u00a0kamny na\u00a0dřevo. Možnost vestavby půdy — výrazné rozšíření obytné plochy. Optický internet.",
    params: {
      "Dispozice": "3+1",
      "Podlahová plocha": "102 m²",
      "Pozemek": "425 m²",
      "Vlastnictví": "osobní",
      "Konstrukce": "zděná",
      "Stav": "velmi dobrý",
      "Podlaží": "2",
      "Elektřina": "220V",
      "Voda": "veřejná",
      "Kanalizace": "veřejná",
      "Internet": "optický",
      "Vytápění": "dálkové + krb",
      "Rok rekonstrukce": "2004",
      "PENB": "G"
    },
    agent: {
      name: "Ing. Petr Kotek",
      phone: "777 043 010",
      email: "kotek.petr@rako-reality.cz"
    }
  },
  {
    id: "01RD2604",
    title: "Prodej rodinného domu ve\u00a0Starém Rokytníku",
    type: "dum",
    transaction: "prodej",
    price: 6990000,
    priceNote: null,
    location: "Trutnovsko",
    city: "Trutnov",
    district: "Starý Rokytník",
    rooms: "3+1",
    area: 275,
    landArea: 2237,
    status: "rezervace",
    photos: [
      "https://www.rako-reality.cz/files/galleries/g789-001.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-002.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-003.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-004.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-005.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-006.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-007.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-008.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-009.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-010.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-011.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-012.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-013.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-015.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-016.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-017.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-018.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-019.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-020.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-021.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-022.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-023.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-024.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-025.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-026.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-027.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-028.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-029.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-030.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-031-1-.jpg",
      "https://www.rako-reality.cz/files/galleries/g789-031-2-.jpg"
    ],
    description: "Rodinný dům / zemědělské stavení v\u00a0okrajové části Starý Rokytník. Komplex tří staveb — RD, stodola a\u00a0garáž s\u00a0dílnou. Přízemí dokončené (3+1), patro připravené k\u00a0dostavbě. Pozemek přes 2\u00a0200\u00a0m² + 6\u00a0400\u00a0m² pronájem. Tepelné čerpadlo, krb, plastová okna. Ideální pro rodinu hledající prostor a\u00a0klid poblíž města.",
    params: {
      "Dispozice": "3+1 (+ rozestav. patro)",
      "Podlahová plocha": "275 m²",
      "Pozemek": "2 237 m²",
      "Vlastnictví": "osobní",
      "Konstrukce": "zděná",
      "Stav": "dobrý",
      "Podlaží": "2",
      "Elektřina": "220/380V",
      "Voda": "studna",
      "Kanalizace": "žumpa",
      "Internet": "ano",
      "Vytápění": "tepelné čerpadlo + krb",
      "Garáž": "ano",
      "PENB": "G"
    },
    agent: {
      name: "Ing. Petr Kotek",
      phone: "777 043 010",
      email: "kotek.petr@rako-reality.cz"
    }
  },
  {
    id: "01RD2530",
    title: "Prodej rodinného domu ve\u00a0Vestci",
    type: "dum",
    transaction: "prodej",
    price: 7190000,
    priceNote: null,
    location: "Náchodsko",
    city: "Vestec",
    district: null,
    rooms: "5+kk",
    area: 158,
    landArea: 1747,
    status: "k-dispozici",
    photos: [
      "https://www.rako-reality.cz/files/galleries/g777-001.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-002.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-003.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-004.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-005.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-006.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-007.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-008.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-009.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-010.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-011.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-012.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-013.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-014.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-015.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-016.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-017.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-018.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-019.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-020.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-021.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-022.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-023.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-024.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-025.JPG",
      "https://www.rako-reality.cz/files/galleries/g777-026.JPG",
      "https://www.rako-reality.cz/files/galleries/g777-027.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-028.jpg",
      "https://www.rako-reality.cz/files/galleries/g777-029.jpg"
    ],
    description: "Dvoupodlažní rodinný dům 5+kk s\u00a0krásnou zahradou v\u00a0malebné obci Vestec u\u00a0Hořiček. Garáž s\u00a0dílnou, letní kuchyň, bazén, skleník. Terasa s\u00a0výhledem, krbová kamna. Ve\u00a0vynikajícím stavu — možnost okamžitého nastěhování. Klidná lokalita 7\u00a0km od\u00a0České Skalice. PENB\u00a0B.",
    params: {
      "Dispozice": "5+kk",
      "Podlahová plocha": "158 m²",
      "Pozemek": "1 747 m²",
      "Vlastnictví": "osobní",
      "Konstrukce": "zděná",
      "Stav": "výborný",
      "Podlaží": "2",
      "Elektřina": "230/400V",
      "Voda": "veřejná",
      "Kanalizace": "ČOV",
      "Vytápění": "kotel na pelety",
      "Garáž": "ano",
      "Oplocení": "ano",
      "PENB": "B"
    },
    agent: {
      name: "Ing. Petr Kotek",
      phone: "777 043 010",
      email: "kotek.petr@rako-reality.cz"
    }
  },
  {
    id: "01RD2525",
    title: "Prodej rodinného domu ve\u00a0Smiřicích",
    type: "dum",
    transaction: "prodej",
    price: 8450000,
    priceNote: null,
    location: "Královéhradecko",
    city: "Smiřice",
    district: null,
    rooms: "4+kk + 2+kk",
    area: 200,
    landArea: 802,
    status: "k-dispozici",
    photos: [
      "https://www.rako-reality.cz/files/galleries/g766-001.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-002.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-003.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-004.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-005.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-006.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-007.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-008.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-009.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-010.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-011.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-012.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-013.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-014.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-015.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-016.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-017.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-018.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-019.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-020.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-021.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-022.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-023.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-024.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-025.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-026.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-027.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-028.jpg",
      "https://www.rako-reality.cz/files/galleries/g766-029.JPG",
      "https://www.rako-reality.cz/files/galleries/g766-030.JPG"
    ],
    description: "Dvougenerační rodinný dům ve\u00a0Smiřicích — 10\u00a0km od\u00a0Hradce Králové. Přízemí 4+kk s\u00a0krbovými kamny, patro 2+kk. Zateplený, garáž součástí domu, krásná udržovaná zahrada 802\u00a0m². Výborná dopravní dostupnost — blízko D11 a\u00a0železnice. Ideální pro rodinu nebo investici.",
    params: {
      "Dispozice": "4+kk + 2+kk",
      "Podlahová plocha": "200 m²",
      "Pozemek": "802 m²",
      "Vlastnictví": "osobní",
      "Konstrukce": "dřevostavba (OKÁL)",
      "Stav": "velmi dobrý",
      "Podlaží": "3",
      "Elektřina": "220/380V",
      "Voda": "veřejná",
      "Plyn": "ano",
      "Kanalizace": "veřejná",
      "Vytápění": "plynový kotel + krb",
      "Garáž": "ano",
      "PENB": "G"
    },
    agent: {
      name: "Ing. Petr Kotek",
      phone: "777 043 010",
      email: "kotek.petr@rako-reality.cz"
    }
  },
  {
    id: "09RD50011",
    title: "Polosamota obklopená lesy — oáza klidu s\u00a0jezírkem a\u00a0saunou",
    type: "dum",
    transaction: "prodej",
    price: 5200000,
    priceNote: null,
    location: "Pelhřimovsko",
    city: "okolí Pelhřimova",
    district: null,
    rooms: "3+1",
    area: 120,
    landArea: 3500,
    status: "rezervace",
    photos: [
      "https://www.rako-reality.cz/files/galleries/g764-default-4.16.2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-default-3.11.1.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-default-1.16.1.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-default-1.6.1.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-default-3.10.1.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-default-1.15.1.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-default-4.14.1.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-default-2.3.1.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0666-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0641-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0651-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0652-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0672-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0674-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0656-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0695-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0698-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0735-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0737-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0738-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0731-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-1100.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-1101.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-1115.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-1105.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-1110.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0704-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0754-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0744-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0745-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0748-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0757-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0759-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0764-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-1123.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-1126.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-1122.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-1135.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-0715-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-1139.jpg",
      "https://www.rako-reality.cz/files/galleries/g764-IMG-1144.jpg"
    ],
    description: "Výjimečná polosamota obklopená lesy. Rodinný dům s\u00a0přírodním jezírkem, finskou saunou a\u00a0kouzelným výhledem. Absolutní soukromí a\u00a0klid pro milovníky přírody. Pozemek přes 3\u00a0500\u00a0m² v\u00a0zeleni. Ideální jako celoroční bydlení i\u00a0rekreační útočiště.",
    params: {
      "Dispozice": "3+1",
      "Podlahová plocha": "120 m²",
      "Pozemek": "3 500 m²",
      "Vlastnictví": "osobní",
      "Konstrukce": "zděná",
      "Stav": "dobrý",
      "Voda": "studna",
      "Kanalizace": "septik",
      "Vytápění": "lokální na tuhá paliva"
    },
    agent: {
      name: "Emil Kovář",
      phone: "777 270 603",
      email: "emil-pe@rako-reality.cz"
    }
  },
  {
    id: "01PR2601",
    title: "Pronájem bytu 2+1 v\u00a0Zámečnické ulici v\u00a0Trutnově",
    type: "byt",
    transaction: "pronajem",
    price: 11300,
    priceNote: "Kč / měsíc",
    location: "Trutnovsko",
    city: "Trutnov",
    district: "Zámečnická",
    rooms: "2+1",
    area: 55,
    landArea: null,
    status: "novinka",
    photos: [
      "https://www.rako-reality.cz/files/galleries/g792-1.jpg",
      "https://www.rako-reality.cz/files/galleries/g792-2.jpg",
      "https://www.rako-reality.cz/files/galleries/g792-3.jpg",
      "https://www.rako-reality.cz/files/galleries/g792-4.jpg",
      "https://www.rako-reality.cz/files/galleries/g792-5.jpg",
      "https://www.rako-reality.cz/files/galleries/g792-6.jpg",
      "https://www.rako-reality.cz/files/galleries/g792-7.jpg",
      "https://www.rako-reality.cz/files/galleries/g792-8.jpg",
      "https://www.rako-reality.cz/files/galleries/g792-9.jpg",
      "https://www.rako-reality.cz/files/galleries/g792-10.jpg",
      "https://www.rako-reality.cz/files/galleries/g792-11.jpg",
      "https://www.rako-reality.cz/files/galleries/g792-Snimek-obrazovky-2024-09-25-124011.jpg"
    ],
    description: "Nabízíme k\u00a0pronájmu byt 2+1 v\u00a0centru Trutnova, ulice Zámečnická. Byt je po\u00a0rekonstrukci, vybavený. Klidná lokace s\u00a0výbornou dostupností obchodů, služeb a\u00a0MHD. Nastěhování ihned. V\u00a0ceně zahrnut nájem + zálohy na\u00a0služby.",
    params: {
      "Dispozice": "2+1",
      "Podlahová plocha": "55 m²",
      "Vlastnictví": "osobní",
      "Stav": "po rekonstrukci",
      "Elektřina": "220V",
      "Voda": "veřejná",
      "Kanalizace": "veřejná",
      "Vytápění": "dálkové"
    },
    agent: {
      name: "Mgr. Martina Hendrychová",
      phone: "608 883 011",
      email: "hendrychova@rako-reality.cz"
    }
  },
  {
    id: "01SP2408",
    title: "Prodej stavebního pozemku v\u00a0Trutnově — Vysoká Stráň",
    type: "pozemek",
    transaction: "prodej",
    price: 1490,
    priceNote: "Kč / m²",
    location: "Trutnovsko",
    city: "Trutnov",
    district: "Vysoká Stráň",
    rooms: null,
    area: 1200,
    landArea: 1200,
    status: "sleva",
    photos: [
      "https://www.rako-reality.cz/files/galleries/g697-VYMERA.jpg",
      "https://www.rako-reality.cz/files/galleries/g697-DJI-0414.jpg",
      "https://www.rako-reality.cz/files/galleries/g697-SIRSI-VZTAHY.jpg",
      "https://www.rako-reality.cz/files/galleries/g697-DJI-0396.jpg",
      "https://www.rako-reality.cz/files/galleries/g697-DJI-0400.jpg",
      "https://www.rako-reality.cz/files/galleries/g697-DJI-0403.jpg",
      "https://www.rako-reality.cz/files/galleries/g697-DJI-0407.jpg",
      "https://www.rako-reality.cz/files/galleries/g697-DJI-0410.jpg",
      "https://www.rako-reality.cz/files/galleries/g697-DJI-0412.jpg",
      "https://www.rako-reality.cz/files/galleries/g697-DSC0672.jpg",
      "https://www.rako-reality.cz/files/galleries/g697-DSC0673.jpg",
      "https://www.rako-reality.cz/files/galleries/g697-DSC0675.jpg",
      "https://www.rako-reality.cz/files/galleries/g697-DSC0676.jpg",
      "https://www.rako-reality.cz/files/galleries/g697-DSC0677.jpg",
      "https://www.rako-reality.cz/files/galleries/g697-DSC0679.jpg"
    ],
    description: "Slunný stavební pozemek na\u00a0Vysoké Stráni v\u00a0Trutnově. Rovinatý terén s\u00a0krásným výhledem do\u00a0krajiny. Všechny inženýrské sítě na\u00a0hranici pozemku. Klidná rezidenční lokalita s\u00a0dobrou dostupností centra. SLEVA z\u00a0původní ceny!",
    params: {
      "Plocha pozemku": "1 200 m²",
      "Typ pozemku": "stavební",
      "Sítě": "elektřina, voda, plyn, kanalizace",
      "Příjezd": "asfaltová komunikace",
      "Svažitost": "rovinatý"
    },
    agent: {
      name: "Mgr. Miloš Vlášek",
      phone: "777 617 648",
      email: "vlasek@rako-reality.cz"
    }
  },
  {
    id: "01SP2316",
    title: "Prodej atraktivního pozemku v\u00a0Kuksu",
    type: "pozemek",
    transaction: "prodej",
    price: 1686,
    priceNote: "Kč / m²",
    location: "Trutnovsko",
    city: "Kuks",
    district: null,
    rooms: null,
    area: 800,
    landArea: 800,
    status: "novinka",
    photos: [
      "https://www.rako-reality.cz/files/galleries/g670-01SP2316f.jpg",
      "https://www.rako-reality.cz/files/galleries/g670-01SP2316g.jpg",
      "https://www.rako-reality.cz/files/galleries/g670-01SP2316i.JPG",
      "https://www.rako-reality.cz/files/galleries/g670-UP.jpg",
      "https://www.rako-reality.cz/files/galleries/g670-DSC0347.jpg",
      "https://www.rako-reality.cz/files/galleries/g670-01SP2316a.jpg",
      "https://www.rako-reality.cz/files/galleries/g670-01SP2316b.jpg",
      "https://www.rako-reality.cz/files/galleries/g670-01SP2316c.jpg",
      "https://www.rako-reality.cz/files/galleries/g670-01SP2316d.jpg",
      "https://www.rako-reality.cz/files/galleries/g670-01SP2316e.jpg"
    ],
    description: "Atraktivní pozemek v\u00a0blízkosti slavného barokního areálu Kuks. Výborná lokalita pro stavbu rodinného domu v\u00a0krásném prostředí Podkrkonoší. Sítě dostupné.",
    params: {
      "Plocha pozemku": "800 m²",
      "Typ pozemku": "stavební",
      "Příjezd": "zpevněná komunikace"
    },
    agent: {
      name: "Mgr. Miloš Vlášek",
      phone: "777 617 648",
      email: "vlasek@rako-reality.cz"
    }
  },
  {
    id: "09CT40004",
    title: "Zahrádkářská chata v\u00a0osadě Svatá Anna",
    type: "rekreacni",
    transaction: "prodej",
    price: 1100000,
    priceNote: null,
    location: "Pelhřimovsko",
    city: "Svatá Anna",
    district: null,
    rooms: "2+kk",
    area: 45,
    landArea: 400,
    status: "novinka",
    photos: [
      "https://www.rako-reality.cz/files/galleries/g721-101-0654.JPG",
      "https://www.rako-reality.cz/files/galleries/g721-101-0661.JPG",
      "https://www.rako-reality.cz/files/galleries/g721-101-0663.JPG",
      "https://www.rako-reality.cz/files/galleries/g721-101-0664.JPG",
      "https://www.rako-reality.cz/files/galleries/g721-101-0651.JPG",
      "https://www.rako-reality.cz/files/galleries/g721-101-0653.JPG",
      "https://www.rako-reality.cz/files/galleries/g721-101-0657.JPG",
      "https://www.rako-reality.cz/files/galleries/g721-101-0658.JPG",
      "https://www.rako-reality.cz/files/galleries/g721-101-0659.JPG",
      "https://www.rako-reality.cz/files/galleries/g721-101-0660.JPG"
    ],
    description: "Útulná zahrádkářská chata v\u00a0klidné osadě Svatá Anna. Ideální pro víkendový odpočinek, zahrádkaření a\u00a0relax v\u00a0přírodě. Pozemek 400\u00a0m² s\u00a0ovocnými stromy a\u00a0záhony.",
    params: {
      "Dispozice": "2+kk",
      "Podlahová plocha": "45 m²",
      "Pozemek": "400 m²",
      "Vlastnictví": "osobní",
      "Voda": "studna",
      "Elektřina": "220V"
    },
    agent: {
      name: "Emil Kovář",
      phone: "777 270 603",
      email: "emil-pe@rako-reality.cz"
    }
  },
  {
    id: "17PK017B",
    title: "Prodej bývalého hostince v\u00a0Domousnicích",
    type: "komercni",
    transaction: "prodej",
    price: 3990000,
    priceNote: null,
    location: "Jičínsko",
    city: "Domousnice",
    district: null,
    rooms: null,
    area: 350,
    landArea: 1200,
    status: "novinka",
    photos: [
      "https://www.rako-reality.cz/files/galleries/g610-16.jpg",
      "https://www.rako-reality.cz/files/galleries/g610-4.jpg",
      "https://www.rako-reality.cz/files/galleries/g610-5.jpg",
      "https://www.rako-reality.cz/files/galleries/g610-7.jpg",
      "https://www.rako-reality.cz/files/galleries/g610-8.jpg",
      "https://www.rako-reality.cz/files/galleries/g610-9.jpg",
      "https://www.rako-reality.cz/files/galleries/g610-10.jpg",
      "https://www.rako-reality.cz/files/galleries/g610-11.jpg",
      "https://www.rako-reality.cz/files/galleries/g610-12.jpg",
      "https://www.rako-reality.cz/files/galleries/g610-13.jpg",
      "https://www.rako-reality.cz/files/galleries/g610-19.jpg"
    ],
    description: "Bývalý hostinec s\u00a0velkým potenciálem — vhodný k\u00a0přestavbě na\u00a0rodinný dům, penzion nebo podnikání. Prostorný objekt 350\u00a0m² na\u00a0pozemku 1\u00a0200\u00a0m² v\u00a0obci Domousnice. Dobrá dopravní dostupnost.",
    params: {
      "Podlahová plocha": "350 m²",
      "Pozemek": "1 200 m²",
      "Konstrukce": "zděná",
      "Stav": "před rekonstrukcí"
    },
    agent: {
      name: "Ing. Michal Kovář",
      phone: "735 858 586",
      email: "michal-pe@rako-reality.cz"
    }
  },
  // ═══ SOLD PROPERTIES (30) ═══
  { id: "01RD2517", title: "Prodej rodinného domu po\u00a0kompletní rekonstrukci", type: "dum", transaction: "prodej", price: 15800000, priceNote: null, location: "Trutnovsko", city: "Svoboda nad Úpou", district: null, rooms: "5+1", area: 185, landArea: 620, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g756-001.jpg"], description: "", params: { "Dispozice": "5+1", "Podlahová plocha": "185 m²", "Pozemek": "620 m²", "Vlastnictví": "osobní", "Konstrukce": "zděná", "Stav": "po rekonstrukci", "Podlaží": "2", "Elektřina": "220/380V", "Voda": "veřejná", "Plyn": "ano", "Kanalizace": "veřejná", "Vytápění": "plynový kotel", "Garáž": "ano", "PENB": "C" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01BD2401", title: "Prodej bytu 3+kk s\u00a0terasou a\u00a0parkovacím místem", type: "byt", transaction: "prodej", price: 7196200, priceNote: null, location: "Trutnovsko", city: "Trutnov", district: "centrum", rooms: "3+kk", area: 72, landArea: null, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g731-DSC0194-HDR.jpg"], description: "", params: { "Dispozice": "3+kk", "Podlahová plocha": "72 m²", "Vlastnictví": "osobní", "Konstrukce": "monolitická", "Stav": "novostavba", "Podlaží": "3. NP z 5", "Terasa": "ano", "Parkování": "garážové stání", "Výtah": "ano", "Elektřina": "220V", "Voda": "veřejná", "Vytápění": "ústřední dálkové", "PENB": "B" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01BD2405", title: "Prodej bytu 3+kk s\u00a0balkonem a\u00a0parkovacím místem", type: "byt", transaction: "prodej", price: 6831000, priceNote: null, location: "Trutnovsko", city: "Trutnov", district: "centrum", rooms: "3+kk", area: 68, landArea: null, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g730-DSC0194-HDR.jpg"], description: "", params: { "Dispozice": "3+kk", "Podlahová plocha": "68 m²", "Vlastnictví": "osobní", "Konstrukce": "monolitická", "Stav": "novostavba", "Podlaží": "2. NP z 5", "Balkón": "ano", "Parkování": "garážové stání", "Výtah": "ano", "Elektřina": "220V", "Voda": "veřejná", "Vytápění": "ústřední dálkové", "PENB": "B" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01RD2527", title: "Prodej řadovky s\u00a0garáží na\u00a0Kryblici", type: "dum", transaction: "prodej", price: 6250000, priceNote: null, location: "Trutnovsko", city: "Trutnov", district: "Kryblice", rooms: "4+1", area: 125, landArea: 180, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g770-01RD2527.jpg"], description: "", params: { "Dispozice": "4+1", "Podlahová plocha": "125 m²", "Pozemek": "180 m²", "Vlastnictví": "osobní", "Konstrukce": "zděná", "Stav": "velmi dobrý", "Podlaží": "2", "Elektřina": "220/380V", "Voda": "veřejná", "Plyn": "ano", "Kanalizace": "veřejná", "Vytápění": "plynový kotel", "Garáž": "ano", "PENB": "D" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01RD2513", title: "Prodej rodinného domu se\u00a0zahradou v\u00a0Poříčí", type: "dum", transaction: "prodej", price: 6190000, priceNote: null, location: "Trutnovsko", city: "Trutnov", district: "Poříčí", rooms: "4+1", area: 135, landArea: 520, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g754-01.jpg"], description: "", params: { "Dispozice": "4+1", "Podlahová plocha": "135 m²", "Pozemek": "520 m²", "Vlastnictví": "osobní", "Konstrukce": "zděná", "Stav": "dobrý", "Podlaží": "2", "Elektřina": "220/380V", "Voda": "veřejná", "Plyn": "ano", "Kanalizace": "veřejná", "Vytápění": "plynový kotel", "Zahrada": "ano", "PENB": "E" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01BD2402", title: "Prodej bytu 2+kk s\u00a0terasou a\u00a0parkovacím místem", type: "byt", transaction: "prodej", price: 5699200, priceNote: null, location: "Trutnovsko", city: "Trutnov", district: "centrum", rooms: "2+kk", area: 52, landArea: null, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g732-DSC0101.jpg"], description: "", params: { "Dispozice": "2+kk", "Podlahová plocha": "52 m²", "Vlastnictví": "osobní", "Konstrukce": "monolitická", "Stav": "novostavba", "Podlaží": "4. NP z 5", "Terasa": "ano", "Parkování": "garážové stání", "Výtah": "ano", "Elektřina": "220V", "Voda": "veřejná", "Vytápění": "ústřední dálkové", "PENB": "B" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01BV2529", title: "Prodej bytu 3+1 po\u00a0kompletní rekonstrukci", type: "byt", transaction: "prodej", price: 4190000, priceNote: null, location: "Trutnovsko", city: "Trutnov", district: "Za Komínem", rooms: "3+1", area: 76, landArea: null, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g773-01BV2529.jpg"], description: "", params: { "Dispozice": "3+1", "Podlahová plocha": "76 m²", "Vlastnictví": "osobní", "Konstrukce": "panelová", "Stav": "po rekonstrukci", "Podlaží": "4. NP z 8", "Lodžie": "ano", "Sklep": "ano", "Výtah": "ano", "Elektřina": "220V", "Voda": "veřejná", "Vytápění": "ústřední dálkové", "PENB": "D" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01RD2528", title: "Prodej rodinného domu v\u00a0Markoušovicích", type: "dum", transaction: "prodej", price: 3950000, priceNote: null, location: "Trutnovsko", city: "Velké Svatoňovice", district: null, rooms: "3+1", area: 115, landArea: 480, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g774-01RD2528.jpg"], description: "", params: { "Dispozice": "3+1", "Podlahová plocha": "115 m²", "Pozemek": "480 m²", "Vlastnictví": "osobní", "Konstrukce": "zděná", "Stav": "dobrý", "Podlaží": "2", "Elektřina": "220V", "Voda": "veřejná", "Plyn": "ne", "Kanalizace": "septik", "Vytápění": "kotel na tuhá paliva", "PENB": "F" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01BV2526", title: "Prodej bytu 3+1 s\u00a0lodžií v\u00a0centru Trutnova", type: "byt", transaction: "prodej", price: 3890000, priceNote: null, location: "Trutnovsko", city: "Trutnov", district: "Šestidomí", rooms: "3+1", area: 78, landArea: null, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g768-01BV2526.jpg"], description: "", params: { "Dispozice": "3+1", "Podlahová plocha": "78 m²", "Vlastnictví": "osobní", "Konstrukce": "panelová", "Stav": "dobrý", "Podlaží": "6. NP z 8", "Lodžie": "ano", "Sklep": "ano", "Výtah": "ano", "Elektřina": "220V", "Voda": "veřejná", "Vytápění": "ústřední dálkové", "PENB": "E" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01BV2511", title: "Prodej bytu 3+1 v\u00a0centru Trutnova", type: "byt", transaction: "prodej", price: 3750000, priceNote: null, location: "Trutnovsko", city: "Trutnov", district: "centrum", rooms: "3+1", area: 74, landArea: null, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g751-01BV2511.jpg"], description: "", params: { "Dispozice": "3+1", "Podlahová plocha": "74 m²", "Vlastnictví": "osobní", "Konstrukce": "zděná", "Stav": "dobrý", "Podlaží": "2. NP z 4", "Sklep": "ano", "Výtah": "ne", "Elektřina": "220V", "Voda": "veřejná", "Vytápění": "etážové plynové", "PENB": "E" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01BV2506", title: "Prodej bytu 3+1 v\u00a0Trutnově (Tovární\u00a0ul.)", type: "byt", transaction: "prodej", price: 3690000, priceNote: null, location: "Trutnovsko", city: "Trutnov", district: "Tovární", rooms: "3+1", area: 72, landArea: null, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g743-DSC0931.jpg"], description: "", params: { "Dispozice": "3+1", "Podlahová plocha": "72 m²", "Vlastnictví": "osobní", "Konstrukce": "panelová", "Stav": "dobrý", "Podlaží": "3. NP z 8", "Lodžie": "ano", "Sklep": "ano", "Výtah": "ano", "Elektřina": "220V", "Voda": "veřejná", "Vytápění": "ústřední dálkové", "PENB": "D" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01BV2427", title: "Prodej bytu 3+1 v\u00a0Trutnově", type: "byt", transaction: "prodej", price: 3590000, priceNote: null, location: "Trutnovsko", city: "Trutnov", district: null, rooms: "3+1", area: 71, landArea: null, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g739-Snimek-obrazovky-2024-12-03-095903.jpg"], description: "", params: { "Dispozice": "3+1", "Podlahová plocha": "71 m²", "Vlastnictví": "osobní", "Konstrukce": "panelová", "Stav": "původní", "Podlaží": "5. NP z 8", "Lodžie": "ano", "Sklep": "ano", "Výtah": "ano", "Elektřina": "220V", "Voda": "veřejná", "Vytápění": "ústřední dálkové", "PENB": "E" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01RD2406", title: "Prodej RD se\u00a0dvěma velkými byty", type: "dum", transaction: "prodej", price: 3490000, priceNote: null, location: "Trutnovsko", city: "Rtyně v Podkrkonoší", district: null, rooms: "2× 3+1", area: 180, landArea: 350, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g693-01.jpg"], description: "", params: { "Dispozice": "2× 3+1", "Podlahová plocha": "180 m²", "Pozemek": "350 m²", "Vlastnictví": "osobní", "Konstrukce": "zděná", "Stav": "před rekonstrukcí", "Podlaží": "2", "Elektřina": "220/380V", "Voda": "veřejná", "Plyn": "ano", "Kanalizace": "veřejná", "Vytápění": "ústřední", "PENB": "G" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01BV2505", title: "Prodej bytu 2+1 na\u00a0Výsluní", type: "byt", transaction: "prodej", price: 3190000, priceNote: null, location: "Trutnovsko", city: "Trutnov", district: "Výsluní", rooms: "2+1", area: 56, landArea: null, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g744-1.jpg"], description: "", params: { "Dispozice": "2+1", "Podlahová plocha": "56 m²", "Vlastnictví": "osobní", "Konstrukce": "panelová", "Stav": "dobrý", "Podlaží": "2. NP z 4", "Balkón": "ano", "Sklep": "ano", "Výtah": "ne", "Elektřina": "220V", "Voda": "veřejná", "Vytápění": "ústřední dálkové", "PENB": "D" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01RD2412", title: "Prodej rodinného domu v\u00a0Bystrém", type: "dum", transaction: "prodej", price: 2980000, priceNote: null, location: "Trutnovsko", city: "Bystré nad Jizerou", district: null, rooms: "3+1", area: 110, landArea: 450, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g702-01RD2412.jpg"], description: "", params: { "Dispozice": "3+1", "Podlahová plocha": "110 m²", "Pozemek": "450 m²", "Vlastnictví": "osobní", "Konstrukce": "smíšená", "Stav": "dobrý", "Podlaží": "1", "Elektřina": "220V", "Voda": "vlastní studna", "Plyn": "ne", "Kanalizace": "septik", "Vytápění": "kotel na tuhá paliva", "PENB": "G" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01BV2422", title: "Prodej bytu 2+1 na\u00a0Kryblici", type: "byt", transaction: "prodej", price: 2790000, priceNote: null, location: "Trutnovsko", city: "Trutnov", district: "Kryblice", rooms: "2+1", area: 58, landArea: null, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g723-01BV2422.jpg"], description: "", params: { "Dispozice": "2+1", "Podlahová plocha": "58 m²", "Vlastnictví": "osobní", "Konstrukce": "panelová", "Stav": "dobrý", "Podlaží": "3. NP z 8", "Lodžie": "ano", "Sklep": "ano", "Výtah": "ano", "Elektřina": "220V", "Voda": "veřejná", "Vytápění": "ústřední dálkové", "PENB": "D" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01BV2504", title: "Prodej bytu 2+1 s\u00a0lodžií na\u00a0nábřeží", type: "byt", transaction: "prodej", price: 2750000, priceNote: null, location: "Trutnovsko", city: "Trutnov", district: "nábřeží", rooms: "2+1", area: 54, landArea: null, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g740-dsc0818.jpg"], description: "", params: { "Dispozice": "2+1", "Podlahová plocha": "54 m²", "Vlastnictví": "osobní", "Konstrukce": "panelová", "Stav": "dobrý", "Podlaží": "5. NP z 8", "Lodžie": "ano", "Sklep": "ano", "Výtah": "ano", "Elektřina": "220V", "Voda": "veřejná", "Vytápění": "ústřední dálkové", "PENB": "D" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01BV2509", title: "Prodej bytu 2+1 po\u00a0rekonstrukci v\u00a0Úpici", type: "byt", transaction: "prodej", price: 2490000, priceNote: null, location: "Trutnovsko", city: "Úpice", district: null, rooms: "2+1", area: 55, landArea: null, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g749-01BV2509.jpg"], description: "", params: { "Dispozice": "2+1", "Podlahová plocha": "55 m²", "Vlastnictví": "osobní", "Konstrukce": "panelová", "Stav": "po rekonstrukci", "Podlaží": "2. NP z 4", "Balkón": "ano", "Sklep": "ano", "Výtah": "ne", "Elektřina": "220V", "Voda": "veřejná", "Vytápění": "ústřední dálkové", "PENB": "D" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01RD2405", title: "Prodej domu na\u00a0trase Úpice\u00a0— Trutnov", type: "dum", transaction: "prodej", price: 2250000, priceNote: null, location: "Trutnovsko", city: "Úpice", district: null, rooms: "3+1", area: 95, landArea: 380, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g696-01RD2405.jpg"], description: "", params: { "Dispozice": "3+1", "Podlahová plocha": "95 m²", "Pozemek": "380 m²", "Vlastnictví": "osobní", "Konstrukce": "zděná", "Stav": "před rekonstrukcí", "Podlaží": "1", "Elektřina": "220V", "Voda": "veřejná", "Plyn": "ne", "Kanalizace": "septik", "Vytápění": "kotel na tuhá paliva", "PENB": "G" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01BV2508", title: "Prodej garsonky na\u00a0Kryblici", type: "byt", transaction: "prodej", price: 1990000, priceNote: null, location: "Trutnovsko", city: "Trutnov", district: "Kryblice", rooms: "1+kk", area: 28, landArea: null, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g745-01BV2508.jpg"], description: "", params: { "Dispozice": "1+kk", "Podlahová plocha": "28 m²", "Vlastnictví": "osobní", "Konstrukce": "panelová", "Stav": "dobrý", "Podlaží": "1. NP z 8", "Sklep": "ano", "Výtah": "ano", "Elektřina": "220V", "Voda": "veřejná", "Vytápění": "ústřední dálkové", "PENB": "D" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01BV2510", title: "Prodej bytu 2+1 v\u00a0Žacléři", type: "byt", transaction: "prodej", price: 1950000, priceNote: null, location: "Trutnovsko", city: "Žacléř", district: null, rooms: "2+1", area: 52, landArea: null, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g775-01BV2510.jpg"], description: "", params: { "Dispozice": "2+1", "Podlahová plocha": "52 m²", "Vlastnictví": "osobní", "Konstrukce": "panelová", "Stav": "dobrý", "Podlaží": "3. NP z 4", "Balkón": "ano", "Sklep": "ano", "Výtah": "ne", "Elektřina": "220V", "Voda": "veřejná", "Vytápění": "ústřední dálkové", "PENB": "E" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01BV2423", title: "Prodej bytu 2+1 v\u00a0Žacléři v\u00a0původním stavu", type: "byt", transaction: "prodej", price: 1790000, priceNote: null, location: "Trutnovsko", city: "Žacléř", district: null, rooms: "2+1", area: 54, landArea: null, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g734-DSC0235.jpg"], description: "", params: { "Dispozice": "2+1", "Podlahová plocha": "54 m²", "Vlastnictví": "osobní", "Konstrukce": "panelová", "Stav": "původní", "Podlaží": "4. NP z 4", "Balkón": "ne", "Sklep": "ano", "Výtah": "ne", "Elektřina": "220V", "Voda": "veřejná", "Vytápění": "ústřední dálkové", "PENB": "F" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01CH2310", title: "Prodej rekreačního objektu v\u00a0Novém Rokytníku", type: "rekreacni", transaction: "prodej", price: 1249000, priceNote: null, location: "Trutnovsko", city: "Trutnov", district: "Nový Rokytník", rooms: "2+kk", area: 45, landArea: 350, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g666-01CH2310.jpg"], description: "", params: { "Dispozice": "2+kk", "Podlahová plocha": "45 m²", "Pozemek": "350 m²", "Vlastnictví": "osobní", "Konstrukce": "zděná", "Stav": "dobrý", "Elektřina": "220V", "Voda": "vlastní studna", "Plyn": "ne", "Kanalizace": "septik", "Vytápění": "kamna na tuhá paliva", "PENB": "G" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01CT2413", title: "Prodej chaty v\u00a0chatové oblasti Střižlivák", type: "rekreacni", transaction: "prodej", price: 890000, priceNote: null, location: "Trutnovsko", city: "Žacléř", district: "Střižlivák", rooms: "2+kk", area: 42, landArea: 320, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g704-DSC1089-HDR.jpg"], description: "", params: { "Dispozice": "2+kk", "Podlahová plocha": "42 m²", "Pozemek": "320 m²", "Vlastnictví": "osobní", "Konstrukce": "dřevěná", "Stav": "dobrý", "Elektřina": "220V", "Voda": "vlastní studna", "Plyn": "ne", "Kanalizace": "septik", "Vytápění": "kamna na tuhá paliva", "PENB": "G" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01GA2532", title: "Prodej garáže v\u00a0Trutnově (Kryblice)", type: "garaz", transaction: "prodej", price: 645000, priceNote: null, location: "Trutnovsko", city: "Trutnov", district: "Kryblice", rooms: null, area: 20, landArea: null, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g782-dsc0602-hdr.jpg"], description: "", params: { "Podlahová plocha": "20 m²", "Vlastnictví": "osobní", "Konstrukce": "zděná", "Stav": "dobrý", "Elektřina": "220V", "Vrata": "plechová výklopná" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01GA2425", title: "Prodej garáže v\u00a0centru Trutnova", type: "garaz", transaction: "prodej", price: 590000, priceNote: null, location: "Trutnovsko", city: "Trutnov", district: "centrum", rooms: null, area: 18, landArea: null, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g737-DSC0411-HDR.jpg"], description: "", params: { "Podlahová plocha": "18 m²", "Vlastnictví": "osobní", "Konstrukce": "zděná", "Stav": "dobrý", "Elektřina": "220V", "Vrata": "plechová výklopná" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01ZA2307", title: "Prodej zahrady na\u00a0Volanově", type: "pozemek", transaction: "prodej", price: 449000, priceNote: null, location: "Trutnovsko", city: "Trutnov", district: "Volanová", rooms: null, area: null, landArea: 449, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g662-01ZA2307-Medium-.jpg"], description: "", params: { "Plocha pozemku": "449 m²", "Vlastnictví": "osobní", "Typ pozemku": "zahrada", "Voda": "ne", "Elektřina": "ne", "Přístup": "zpevněná cesta" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01PP2206", title: "Prodej zahrady v\u00a0Poříčí", type: "pozemek", transaction: "prodej", price: 345000, priceNote: null, location: "Trutnovsko", city: "Trutnov", district: "Poříčí", rooms: null, area: null, landArea: 345, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g644-01PP2206.jpg"], description: "", params: { "Plocha pozemku": "345 m²", "Vlastnictví": "osobní", "Typ pozemku": "zahrada", "Voda": "ne", "Elektřina": "ne", "Přístup": "zpevněná cesta" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01PL2516", title: "Prodej lesního pozemku", type: "pozemek", transaction: "prodej", price: 99000, priceNote: null, location: "Trutnovsko", city: "Velké Svatoňovice", district: null, rooms: null, area: null, landArea: 4200, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g757-KONTEXT.jpg"], description: "", params: { "Plocha pozemku": "4 200 m²", "Vlastnictví": "osobní", "Typ pozemku": "lesní pozemek", "Druh lesa": "smíšený", "Přístup": "lesní cesta" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } },
  { id: "01GA7025", title: "Prodej řadové garáže na\u00a0Vápence", type: "garaz", transaction: "prodej", price: 85000, priceNote: null, location: "Trutnovsko", city: "Trutnov", district: "Vápenka", rooms: null, area: 16, landArea: null, status: "prodano", photos: ["https://www.rako-reality.cz/files/galleries/465x362_g394-01GA7025-Medium-.JPG"], description: "", params: { "Podlahová plocha": "16 m²", "Vlastnictví": "osobní", "Konstrukce": "zděná", "Stav": "původní", "Elektřina": "220V", "Vrata": "plechová výklopná" }, agent: { name: "RAKO reality", phone: "777 009 933", email: "rako@rako-reality.cz" } }
];

/* ============================================================
   Image URL helpers — full-size vs thumbnail
   ============================================================ */
function getFullSizeUrl(url) {
  // Remove size prefix like "465x362_" or "315x245_" to get full resolution
  return url.replace(/\/\d+x\d+_/g, '/');
}

function getCardUrl(url) {
  // For cards, use 465x362 medium size (fast loading)
  if (url.includes('/465x362_')) return url;
  if (url.includes('/315x245_')) return url.replace('/315x245_', '/465x362_');
  if (url.includes('/155x121_')) return url.replace('/155x121_', '/465x362_');
  // If already full-size, add prefix
  return url.replace('/files/galleries/', '/files/galleries/465x362_');
}

/* ============================================================
   Price formatting
   ============================================================ */
function formatPrice(property) {
  if (property.priceNote === "Kč / měsíc") {
    return new Intl.NumberFormat('cs-CZ').format(property.price).replace(/\u00a0/g, '.') + ',- Kč / měsíc';
  }
  if (property.priceNote === "Kč / m²") {
    return new Intl.NumberFormat('cs-CZ').format(property.price).replace(/\u00a0/g, '.') + ',- Kč / m²';
  }
  if (property.price >= 1000) {
    return new Intl.NumberFormat('cs-CZ').format(property.price).replace(/\u00a0/g, '.') + ',- Kč';
  }
  return 'Cena na\u00a0dotaz';
}

/* ============================================================
   Status badge
   ============================================================ */
function getStatusBadge(status) {
  const map = {
    'novinka':      { label: 'Novinka',     cls: 'badge-new' },
    'k-dispozici':  { label: 'K\u00a0dispozici', cls: 'badge-available' },
    'rezervace':    { label: 'Rezervace',   cls: 'badge-reserved' },
    'sleva':        { label: 'Sleva',       cls: 'badge-sale' },
    'prodano':      { label: 'Prodáno',     cls: 'badge-sold' },
    'pronajato':    { label: 'Pronajato',   cls: 'badge-rented' }
  };
  return map[status] || { label: status, cls: 'badge-default' };
}

/* ============================================================
   Type labels
   ============================================================ */
function getTypeLabel(type) {
  const map = {
    'byt': 'Byty',
    'dum': 'Domy',
    'pozemek': 'Pozemky',
    'komercni': 'Komerční',
    'rekreacni': 'Rekreační',
    'garaz': 'Garáže'
  };
  return map[type] || type;
}

/* ============================================================
   Property Card HTML
   ============================================================ */
function renderPropertyCard(p) {
  const badge = getStatusBadge(p.status);
  const price = formatPrice(p);
  const photo = getCardUrl(p.photos[0] || 'img/placeholder.jpg');
  const areaText = p.area ? p.area + '\u00a0m²' : '';
  const roomsText = p.rooms || '';

  return `
    <a href="detail.html?id=${p.id}" class="property-card" data-type="${p.type}" data-transaction="${p.transaction}" data-location="${p.location}" data-status="${p.status}">
      <div class="property-card__image">
        <img src="${photo}" alt="${p.title}" loading="lazy" width="465" height="362">
        <span class="property-card__badge ${badge.cls}">${badge.label}</span>
        <span class="property-card__logo">
          <img src="img/logo.png" alt="RAKO" width="40" height="28">
        </span>
      </div>
      <div class="property-card__body">
        <div class="property-card__price">${price}</div>
        <h3 class="property-card__title">${p.title}</h3>
        <div class="property-card__meta">
          ${p.city ? `<span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> ${p.city}${p.district ? ', ' + p.district : ''}</span>` : ''}
          ${roomsText ? `<span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg> ${roomsText}</span>` : ''}
          ${areaText ? `<span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg> ${areaText}</span>` : ''}
        </div>
      </div>
    </a>
  `;
}

/* ============================================================
   Render property grid
   ============================================================ */
function renderPropertyGrid(containerId, properties) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (properties.length === 0) {
    container.innerHTML = '<div class="property-grid__empty">Žádné nemovitosti neodpovídají zvoleným filtrům.</div>';
    return;
  }
  container.innerHTML = properties.map(renderPropertyCard).join('');
}

/* ============================================================
   Filtering + Pagination (for nemovitosti.html)
   ============================================================ */
const PER_PAGE = 9;
let currentPage = 1;
let activeFilters = {
  type: 'all',
  transaction: 'all',
  location: 'all',
  sort: 'newest'
};

function getFilteredProperties() {
  let filtered = [...PROPERTIES];

  if (activeFilters.type !== 'all') {
    filtered = filtered.filter(p => p.type === activeFilters.type);
  }
  if (activeFilters.transaction !== 'all') {
    filtered = filtered.filter(p => p.transaction === activeFilters.transaction);
  }
  if (activeFilters.location !== 'all') {
    filtered = filtered.filter(p => p.location === activeFilters.location);
  }

  // Sort: active properties first, then sold
  filtered.sort((a, b) => {
    const aSold = a.status === 'prodano' ? 1 : 0;
    const bSold = b.status === 'prodano' ? 1 : 0;
    if (aSold !== bSold) return aSold - bSold;
    return 0; // keep relative order within group
  });

  // Secondary sort
  switch (activeFilters.sort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'area-desc':
      filtered.sort((a, b) => (b.area || 0) - (a.area || 0));
      break;
    default: // newest — active first, then sold
      break;
  }

  return filtered;
}

function filterProperties() {
  const filtered = getFilteredProperties();
  const totalPages = Math.ceil(filtered.length / PER_PAGE);

  // Clamp page
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  const start = (currentPage - 1) * PER_PAGE;
  const pageItems = filtered.slice(start, start + PER_PAGE);

  renderPropertyGrid('property-grid', pageItems);
  updateResultCount(filtered.length, start + 1, Math.min(start + PER_PAGE, filtered.length));
  renderPagination(totalPages);

  // Scroll to top of grid on page change (not on initial load)
  if (document.querySelector('.filter-bar') && currentPage > 0) {
    const grid = document.getElementById('property-grid');
    if (grid && grid.dataset.initialized) {
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (grid) grid.dataset.initialized = 'true';
  }
}

function updateResultCount(total, from, to) {
  const el = document.getElementById('result-count');
  if (!el) return;
  const word = total === 1 ? 'nemovitost' : (total >= 2 && total <= 4) ? 'nemovitosti' : 'nemovitostí';
  if (total > PER_PAGE) {
    el.textContent = `Zobrazeno ${from}–${to} z\u00a0${total} ${word}`;
  } else {
    el.textContent = `Nalezeno ${total} ${word}`;
  }
}

function renderPagination(totalPages) {
  const container = document.getElementById('pagination');
  if (!container) return;
  if (totalPages <= 1) { container.innerHTML = ''; return; }

  let html = '';
  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      html += `<span class="pagination__current">${i}</span> `;
    } else {
      html += `<button class="pagination__link" data-page="${i}">${i}</button> `;
    }
  }
  container.innerHTML = html;

  container.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentPage = parseInt(btn.dataset.page);
      filterProperties();
    });
  });
}

function initFilters() {
  // Type pills
  document.querySelectorAll('[data-filter-type]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter-type]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilters.type = btn.dataset.filterType;
      currentPage = 1;
      filterProperties();
    });
  });

  // Transaction toggle
  document.querySelectorAll('[data-filter-tx]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter-tx]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilters.transaction = btn.dataset.filterTx;
      currentPage = 1;
      filterProperties();
    });
  });

  // Location select
  const locSelect = document.getElementById('filter-location');
  if (locSelect) {
    locSelect.addEventListener('change', () => {
      activeFilters.location = locSelect.value;
      currentPage = 1;
      filterProperties();
    });
  }

  // Sort select
  const sortSelect = document.getElementById('filter-sort');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      activeFilters.sort = sortSelect.value;
      currentPage = 1;
      filterProperties();
    });
  }

  // Initial render
  filterProperties();
}

/* ============================================================
   Detail page rendering (detail.html)
   ============================================================ */
function renderDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const property = PROPERTIES.find(p => p.id === id);

  if (!property) {
    document.getElementById('detail-content').innerHTML = `
      <div class="detail-not-found">
        <h2>Nemovitost nenalezena</h2>
        <p>Omlouváme se, tato nemovitost již není v\u00a0nabídce.</p>
        <a href="nemovitosti.html" class="btn btn-primary">Zpět na\u00a0nabídku</a>
      </div>
    `;
    return;
  }

  // Page title + h1
  document.title = property.title + ' | RAKO reality';
  const titleEl = document.getElementById('detail-title');
  if (titleEl) titleEl.textContent = property.title;

  // Breadcrumb
  const breadcrumb = document.getElementById('detail-breadcrumb');
  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <a href="index.html">Úvod</a>
      <span>/</span>
      <a href="nemovitosti.html">Nemovitosti</a>
      <span>/</span>
      <span>${property.title}</span>
    `;
  }

  // Gallery — full-size for main, thumbnails for thumbs
  const fullPhotos = property.photos.map(getFullSizeUrl);
  const thumbPhotos = property.photos.map(src => src.includes('/315x245_') ? src : src.replace(/\/\d+x\d+_/, '/315x245_'));
  const gallery = document.getElementById('detail-gallery');
  if (gallery && property.photos.length) {
    gallery.innerHTML = `
      <div class="gallery-main" id="gallery-main">
        ${fullPhotos.map((src, i) => `<img src="${src}" alt="${property.title} — foto ${i + 1}" loading="${i === 0 ? 'eager' : 'lazy'}">`).join('')}
      </div>
      ${property.photos.length > 1 ? `
      <div class="gallery-thumbs">
        ${thumbPhotos.map((src, i) => `<button class="gallery-thumb ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Foto ${i + 1}"><img src="${src}" alt="${property.title} — foto ${i + 1}" loading="lazy"></button>`).join('')}
      </div>
      ` : ''}
    `;

    // Gallery navigation
    const mainGallery = document.getElementById('gallery-main');
    const thumbs = gallery.querySelectorAll('.gallery-thumb');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const idx = parseInt(thumb.dataset.index);
        const imgs = mainGallery.querySelectorAll('img');
        if (imgs[idx]) {
          imgs[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });

    // Lightbox on main image click — use full-size URLs
    mainGallery.addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG') {
        openLightbox(fullPhotos, Array.from(mainGallery.querySelectorAll('img')).indexOf(e.target));
      }
    });
  }

  // Quick specs
  const specs = document.getElementById('detail-specs');
  if (specs) {
    const badge = getStatusBadge(property.status);
    specs.innerHTML = `
      <span class="detail-specs__badge ${badge.cls}">${badge.label}</span>
      <span class="detail-specs__price">${formatPrice(property)}</span>
      ${property.rooms ? `<span class="detail-specs__item"><strong>${property.rooms}</strong></span>` : ''}
      ${property.area ? `<span class="detail-specs__item">${property.area}\u00a0m²</span>` : ''}
      <span class="detail-specs__item">${property.city}${property.district ? ', ' + property.district : ''}</span>
    `;
  }

  // Parameters table
  const paramsEl = document.getElementById('detail-params');
  if (paramsEl && property.params) {
    const rows = Object.entries(property.params).map(([key, val]) =>
      `<tr><td>${key}</td><td>${val}</td></tr>`
    ).join('');
    paramsEl.innerHTML = `
      <h3>Parametry nemovitosti</h3>
      <table class="params-table">${rows}</table>
    `;
  }

  // Description
  const descEl = document.getElementById('detail-description');
  if (descEl && property.description) {
    descEl.innerHTML = `
      <h3>Popis</h3>
      <div class="detail-description__text">${property.description}</div>
    `;
  }

  // Agent card
  const agentEl = document.getElementById('detail-agent');
  if (agentEl && property.agent) {
    agentEl.innerHTML = `
      <div class="agent-card">
        <div class="agent-card__avatar">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
        <div class="agent-card__info">
          <div class="agent-card__name">${property.agent.name}</div>
          <a href="tel:+420${property.agent.phone.replace(/\s/g, '')}" class="agent-card__phone">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            ${property.agent.phone}
          </a>
          <a href="mailto:${property.agent.email}" class="agent-card__email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
            ${property.agent.email}
          </a>
        </div>
        <a href="tel:+420${property.agent.phone.replace(/\s/g, '')}" class="btn btn-primary btn-block">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          Mám zájem o\u00a0nemovitost
        </a>
      </div>
    `;
  }

  // Similar properties
  const similarEl = document.getElementById('detail-similar');
  if (similarEl) {
    const similar = PROPERTIES
      .filter(p => p.id !== property.id && p.type === property.type && p.transaction === property.transaction)
      .slice(0, 3);
    if (similar.length) {
      similarEl.innerHTML = `
        <h3>Podobné nemovitosti</h3>
        <div class="property-grid property-grid--3">
          ${similar.map(renderPropertyCard).join('')}
        </div>
      `;
    }
  }
}

/* ============================================================
   Lightbox
   ============================================================ */
function openLightbox(photos, startIndex) {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Fotogalerie nemovitosti');
  let current = startIndex || 0;

  function render() {
    overlay.innerHTML = `
      <button class="lightbox__close" aria-label="Zavřít">&times;</button>
      <button class="lightbox__prev" aria-label="Předchozí">&#8249;</button>
      <img src="${photos[current]}" alt="Fotografie ${current + 1} z ${photos.length}" class="lightbox__img">
      <button class="lightbox__next" aria-label="Další">&#8250;</button>
      <div class="lightbox__counter">${current + 1} / ${photos.length}</div>
    `;
  }

  render();
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  overlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('lightbox__close') || e.target.classList.contains('lightbox')) {
      overlay.remove();
      document.body.style.overflow = '';
    }
    if (e.target.classList.contains('lightbox__next')) {
      current = (current + 1) % photos.length;
      render();
    }
    if (e.target.classList.contains('lightbox__prev')) {
      current = (current - 1 + photos.length) % photos.length;
      render();
    }
  });

  document.addEventListener('keydown', function handler(e) {
    if (e.key === 'Escape') { overlay.remove(); document.body.style.overflow = ''; document.removeEventListener('keydown', handler); }
    if (e.key === 'ArrowRight') { current = (current + 1) % photos.length; render(); }
    if (e.key === 'ArrowLeft') { current = (current - 1 + photos.length) % photos.length; render(); }
  });
}

/* ============================================================
   Featured properties (homepage)
   ============================================================ */
function renderFeaturedProperties(containerId, count) {
  const container = document.getElementById(containerId);
  if (!container) return;
  // Show newest active properties
  const sold = ['prodano', 'pronajato'];
  const featured = PROPERTIES
    .filter(p => !sold.includes(p.status))
    .slice(0, count || 6);
  container.innerHTML = featured.map(renderPropertyCard).join('');
}
