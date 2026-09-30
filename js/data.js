/* =========================================================
   DATA WEBSITE — edit di sini saja
   Foto: taruh file di folder img/ sesuai path. Kalau file
   belum ada, otomatis tampil placeholder.
   ========================================================= */

const CONFIG = {
  wa: "6281991071786",
  usdRate: 16000, // kurs untuk harga USD airport transfer (Rp per $1)
  heroSlides: [
    { img: "img/hero/hero-1.jpg", label: "Foto hero: Sawah Tetebatu" },
    { img: "img/hero/hero-2.jpg", label: "Foto hero: Gili Nanggu" },
    { img: "img/hero/hero-3.jpg", label: "Foto hero: Air terjun Sendang Gile" }
  ]
};

/* ---------- PAKET TOUR (harga belum ada = "Rp XXX") ----------
   Detail tiap paket tampil di paket.html?id=<id>.
   CEK LAGI: durasi, jadwal, "termasuk" & "belum termasuk" masih draft. */
const INC_BOAT = { id:["Mobil AC + driver + bensin","Jemput & antar di hotel","Sewa perahu island hopping","Alat snorkeling (masker & fin)"],
                   en:["Air-conditioned car + driver + petrol","Hotel pickup & drop-off","Island-hopping boat","Snorkeling gear (mask & fins)"] };
const EXC_BOAT = { id:["Makan siang","Tiket masuk & retribusi pulau","Pengeluaran pribadi"],
                   en:["Lunch","Island entrance fees & levies","Personal expenses"] };
const INC_LAND = { id:["Mobil AC + driver + bensin","Jemput & antar di hotel","Parkir"],
                   en:["Air-conditioned car + driver + petrol","Hotel pickup & drop-off","Parking"] };
const EXC_LAND = { id:["Tiket masuk objek wisata","Guide lokal (jika diwajibkan di lokasi)","Makan siang","Pengeluaran pribadi"],
                   en:["Entrance tickets","Local guide (where required on site)","Lunch","Personal expenses"] };
const BRING_BOAT = { id:["Baju renang & baju ganti","Handuk","Sunblock & topi","Kacamata hitam","Kantong kedap air untuk HP"],
                     en:["Swimwear & a change of clothes","Towel","Sunscreen & hat","Sunglasses","Dry bag for your phone"] };
const BRING_FALL = { id:["Sandal/sepatu anti-selip","Baju ganti","Kantong kedap air untuk HP","Jas hujan tipis (musim hujan)"],
                     en:["Non-slip sandals or shoes","A change of clothes","Dry bag for your phone","Light raincoat (rainy season)"] };
const BRING_LAND = { id:["Topi & sunblock","Sepatu nyaman untuk jalan kaki","Kamera","Uang tunai secukupnya"],
                     en:["Hat & sunscreen","Comfortable walking shoes","Camera","Some cash"] };

const TOURS = [
  { id:"3-secret-gili", img:"img/tour/3-gili.jpg", name:{id:"Trip 3 Secret Gili", en:"3 Secret Gili Trip"},
    dest:["Gili Nanggu","Gili Tangkong","Gili Kedis"], price:"Rp XXX", badge:{id:"Island hopping", en:"Island hopping"},
    dur:{id:"Full day (± 9 jam)", en:"Full day (approx. 9 hours)"},
    tagline:{id:"Air sebening kaca, ikan warna-warni, dan pulau mungil yang serasa milik sendiri.",
             en:"Glass-clear water, colourful fish and tiny islands that feel like your own."},
    desc:{id:["Jauh dari keramaian Gili Trawangan, gugusan gili di Sekotong, Lombok Barat, masih terasa tenang dan alami. Trip ini membawa Anda island hopping ke tiga pulau favorit: Gili Nanggu, Gili Tangkong dan Gili Kedis.",
              "Snorkeling di antara terumbu karang Gili Nanggu, berjalan mengelilingi Gili Kedis yang bisa dikitari hanya dalam beberapa menit, lalu bersantai di pasir putih Gili Tangkong. Cocok untuk pasangan, keluarga, maupun rombongan teman."],
          en:["Far from the crowds of Gili Trawangan, the islands of Sekotong in West Lombok are still quiet and unspoilt. This trip takes you island hopping to three favourites: Gili Nanggu, Gili Tangkong and Gili Kedis.",
              "Snorkel over the coral of Gili Nanggu, walk all the way around tiny Gili Kedis in a few minutes, then relax on the white sand of Gili Tangkong. Perfect for couples, families and groups of friends."]},
    high:{id:["Snorkeling di terumbu karang Gili Nanggu","Gili Kedis, pulau mungil berpasir putih","Santai di bawah pohon kelapa Gili Tangkong","Perahu privat, jadwal fleksibel"],
          en:["Snorkelling on the reefs of Gili Nanggu","Gili Kedis, a tiny white-sand island","Relaxing under the palms of Gili Tangkong","Private boat, flexible schedule"]},
    plan:[["07.30",{id:"Jemput di hotel",en:"Hotel pickup"}],["09.00",{id:"Tiba di pelabuhan Sekotong, naik perahu",en:"Arrive at Sekotong harbour, board the boat"}],
          ["09.30",{id:"Snorkeling & santai di Gili Nanggu",en:"Snorkelling and free time on Gili Nanggu"}],["11.30",{id:"Singgah di Gili Kedis",en:"Stop at Gili Kedis"}],
          ["12.30",{id:"Makan siang & santai di Gili Tangkong",en:"Lunch and relaxing on Gili Tangkong"}],["15.00",{id:"Kembali ke pelabuhan",en:"Back to the harbour"}],
          ["17.00",{id:"Tiba kembali di hotel",en:"Back at your hotel"}]],
    inc:INC_BOAT, exc:EXC_BOAT, bring:BRING_BOAT },

  { id:"5-secret-gili", img:"img/tour/5-gili.jpg", name:{id:"Trip 5 Secret Gili", en:"5 Secret Gili Trip"},
    dest:["Gili Gede","Gili Rengit","Gili Layar","Gili Goleng","Gili Asahan"], price:"Rp XXX", badge:{id:"Island hopping", en:"Island hopping"},
    dur:{id:"Full day (± 10 jam)", en:"Full day (approx. 10 hours)"},
    tagline:{id:"Lima pulau tersembunyi dalam satu hari, untuk Anda yang ingin melihat lebih banyak.",
             en:"Five hidden islands in one day, for travellers who want to see more."},
    desc:{id:["Barat daya Lombok menyimpan puluhan gili kecil yang belum banyak dikunjungi. Dalam satu hari, Anda menjelajahi lima di antaranya: Gili Gede, Gili Rengit, Gili Layar, Gili Goleng dan Gili Asahan.",
              "Setiap pulau punya karakter sendiri, dari spot snorkeling berair jernih hingga pantai sepi yang pas untuk berenang dan berfoto. Trip ideal untuk pecinta laut yang ingin merasakan Lombok yang masih asli."],
          en:["South-west Lombok hides dozens of small islands that few visitors ever reach. In one day you explore five of them: Gili Gede, Gili Rengit, Gili Layar, Gili Goleng and Gili Asahan.",
              "Each island has its own character, from clear-water snorkelling spots to empty beaches made for swimming and photos. The ideal trip for ocean lovers who want to see Lombok as it still is."]},
    high:{id:["Lima pulau dalam satu trip","Snorkeling di beberapa spot berbeda","Pantai sepi, jauh dari keramaian","Gili Gede, pulau terbesar di kawasan Sekotong"],
          en:["Five islands in one trip","Snorkelling at several different spots","Quiet beaches, away from the crowds","Gili Gede, the largest island around Sekotong"]},
    plan:[["07.00",{id:"Jemput di hotel",en:"Hotel pickup"}],["08.30",{id:"Tiba di pelabuhan, naik perahu",en:"Arrive at the harbour, board the boat"}],
          ["09.00",{id:"Snorkeling di Gili Rengit & Gili Layar",en:"Snorkelling at Gili Rengit & Gili Layar"}],["11.30",{id:"Singgah di Gili Goleng",en:"Stop at Gili Goleng"}],
          ["12.30",{id:"Makan siang di Gili Gede",en:"Lunch on Gili Gede"}],["14.00",{id:"Santai & berenang di Gili Asahan",en:"Swimming and relaxing on Gili Asahan"}],
          ["15.30",{id:"Kembali ke pelabuhan",en:"Back to the harbour"}],["17.00",{id:"Tiba kembali di hotel",en:"Back at your hotel"}]],
    inc:INC_BOAT, exc:EXC_BOAT, bring:BRING_BOAT },

  { id:"gili-kondo", img:"img/tour/gili-kondo.jpg", name:{id:"Trip Gili Kondo", en:"Gili Kondo Trip"},
    dest:["Gili Kondo","Gili Bidara","Mangrove"], price:"Rp XXX", badge:{id:"Island hopping", en:"Island hopping"},
    dur:{id:"Full day (± 11 jam)", en:"Full day (approx. 11 hours)"},
    tagline:{id:"Sisi timur Lombok yang tenang: pasir putih, laut toska, dan hutan mangrove.",
             en:"Lombok's quiet east side: white sand, turquoise sea and mangrove forest."},
    desc:{id:["Gili Kondo di Lombok Timur terkenal dengan gradasi air toska dan pasir putihnya yang lembut. Suasananya jauh lebih sepi dibanding gili di sisi barat, cocok untuk Anda yang ingin benar-benar rileks.",
              "Setelah snorkeling di Gili Kondo, perjalanan berlanjut ke Gili Bidara dan kawasan mangrove yang teduh. Satu hari penuh untuk menikmati sisi Lombok yang jarang dilihat wisatawan."],
          en:["Gili Kondo in East Lombok is known for its turquoise gradients and soft white sand. It is far quieter than the islands in the west, perfect if you really want to unwind.",
              "After snorkelling at Gili Kondo, the trip continues to Gili Bidara and a shady mangrove area. A full day on a side of Lombok few visitors get to see."]},
    high:{id:["Air toska & pasir putih Gili Kondo","Snorkeling di laut yang tenang","Menyusuri kawasan mangrove","Suasana sepi, jauh dari keramaian"],
          en:["Turquoise water & white sand at Gili Kondo","Snorkelling in calm water","Exploring the mangroves","Peaceful, away from the crowds"]},
    plan:[["06.30",{id:"Jemput di hotel",en:"Hotel pickup"}],["09.00",{id:"Tiba di Lombok Timur, naik perahu",en:"Arrive in East Lombok, board the boat"}],
          ["09.30",{id:"Snorkeling & santai di Gili Kondo",en:"Snorkelling and free time on Gili Kondo"}],["12.00",{id:"Makan siang",en:"Lunch"}],
          ["13.00",{id:"Gili Bidara & kawasan mangrove",en:"Gili Bidara & the mangroves"}],["15.00",{id:"Kembali ke pelabuhan",en:"Back to the harbour"}],
          ["17.30",{id:"Tiba kembali di hotel",en:"Back at your hotel"}]],
    inc:INC_BOAT, exc:EXC_BOAT, bring:BRING_BOAT },

  { id:"pink-beach", img:"img/tour/pink-beach.jpg", name:{id:"Trip Pink Beach", en:"Pink Beach Trip"},
    dest:["Pink Beach 1, 2, 3","Snorkeling Teluk Petelu","Teluk Gambir","Gili Pasir"], price:"Rp XXX", badge:{id:"Snorkeling", en:"Snorkeling"},
    dur:{id:"Full day (± 10 jam)", en:"Full day (approx. 10 hours)"},
    tagline:{id:"Pasir berwarna merah muda, tebing hijau, dan snorkeling di teluk yang tenang.",
             en:"Pink-tinted sand, green cliffs and snorkelling in calm bays."},
    desc:{id:["Pink Beach di ujung tenggara Lombok mendapat warna merah mudanya dari serpihan karang merah yang bercampur dengan pasir putih. Dengan perahu, Anda singgah di beberapa pantai pink sekaligus: Pink Beach 1, 2 dan 3.",
              "Trip dilengkapi snorkeling di Teluk Petelu, singgah di Teluk Gambir, lalu berdiri di tengah laut di atas Gili Pasir, gundukan pasir yang muncul saat air surut. Salah satu trip paling fotogenik di Lombok."],
          en:["Pink Beach, on Lombok's far south-east tip, gets its colour from fragments of red coral mixed into the white sand. By boat you visit several pink beaches in one go: Pink Beach 1, 2 and 3.",
              "The trip includes snorkelling at Teluk Petelu, a stop at Teluk Gambir and a walk on Gili Pasir, a sandbar that appears at low tide. One of the most photogenic trips in Lombok."]},
    high:{id:["Tiga pantai pink dalam satu trip","Snorkeling di Teluk Petelu","Gili Pasir, pulau pasir di tengah laut","Pemandangan tebing & bukit hijau"],
          en:["Three pink beaches in one trip","Snorkelling at Teluk Petelu","Gili Pasir, a sandbar in the middle of the sea","Views of cliffs and green hills"]},
    plan:[["07.00",{id:"Jemput di hotel",en:"Hotel pickup"}],["09.30",{id:"Tiba di Jerowaru, naik perahu",en:"Arrive in Jerowaru, board the boat"}],
          ["10.00",{id:"Snorkeling di Teluk Petelu",en:"Snorkelling at Teluk Petelu"}],["11.00",{id:"Pink Beach 1, 2 & 3",en:"Pink Beach 1, 2 & 3"}],
          ["12.30",{id:"Makan siang",en:"Lunch"}],["13.30",{id:"Gili Pasir & Teluk Gambir",en:"Gili Pasir & Teluk Gambir"}],
          ["15.00",{id:"Kembali ke pelabuhan",en:"Back to the harbour"}],["17.30",{id:"Tiba kembali di hotel",en:"Back at your hotel"}]],
    inc:INC_BOAT, exc:EXC_BOAT, bring:BRING_BOAT },

  { id:"sendang-gile-tiu-kelep", img:"img/tour/tiu-kelep.jpg", name:{id:"Trip Sendang Gile & Tiu Kelep", en:"Sendang Gile & Tiu Kelep Trip"},
    dest:["Air terjun Sendang Gile","Air terjun Tiu Kelep"], price:"Rp XXX", badge:{id:"Air terjun", en:"Waterfall"},
    dur:{id:"Full day (± 9 jam)", en:"Full day (approx. 9 hours)"},
    tagline:{id:"Dua air terjun paling terkenal di kaki Gunung Rinjani, dalam satu perjalanan.",
             en:"The two most famous waterfalls at the foot of Mount Rinjani, in one trip."},
    desc:{id:["Di Desa Senaru, Lombok Utara, dua air terjun ikonik menunggu Anda. Sendang Gile bisa dicapai dengan menuruni anak tangga di tengah hutan, sementara Tiu Kelep yang lebih tinggi dan megah dicapai lewat trekking singkat menyusuri sungai.",
              "Rasakan segarnya percikan air pegunungan Rinjani, udara sejuk, dan hijaunya hutan tropis. Perjalanan melewati jalur pegunungan dengan pemandangan indah, cocok untuk Anda yang suka alam dan sedikit petualangan."],
          en:["In Senaru village, North Lombok, two iconic waterfalls are waiting. Sendang Gile is reached by walking down steps through the forest, while the taller, more dramatic Tiu Kelep is a short trek along the river.",
              "Feel the cool spray of Rinjani's mountain water, the fresh air and the green of the tropical forest. The drive follows scenic mountain roads, perfect if you love nature and a little adventure."]},
    high:{id:["Air terjun Sendang Gile di tengah hutan","Trekking ke Tiu Kelep yang megah","Udara sejuk di kaki Rinjani","Pemandangan jalur pegunungan"],
          en:["Sendang Gile waterfall in the forest","Trek to the dramatic Tiu Kelep","Cool air at the foot of Rinjani","Scenic mountain roads"]},
    plan:[["07.00",{id:"Jemput di hotel",en:"Hotel pickup"}],["09.30",{id:"Tiba di Senaru",en:"Arrive in Senaru"}],
          ["09.45",{id:"Jalan kaki ke Sendang Gile",en:"Walk to Sendang Gile"}],["10.30",{id:"Trekking ke Tiu Kelep, berenang & foto",en:"Trek to Tiu Kelep, swim and take photos"}],
          ["12.30",{id:"Makan siang di Senaru",en:"Lunch in Senaru"}],["13.30",{id:"Perjalanan pulang",en:"Drive back"}],
          ["16.00",{id:"Tiba kembali di hotel",en:"Back at your hotel"}]],
    inc:INC_LAND, exc:EXC_LAND, bring:BRING_FALL },

  { id:"benang-stokel-kelambu", img:"img/tour/benang-kelambu.jpg", name:{id:"Trip Benang Stokel & Benang Kelambu", en:"Benang Stokel & Benang Kelambu Trip"},
    dest:["Air terjun Benang Stokel","Air terjun Benang Kelambu"], price:"Rp XXX", badge:{id:"Air terjun", en:"Waterfall"},
    dur:{id:"± 7 jam", en:"Approx. 7 hours"},
    tagline:{id:"Air terjun bak tirai benang di tengah hutan Lombok Tengah.",
             en:"Waterfalls like curtains of thread in the forests of Central Lombok."},
    desc:{id:["Di lereng selatan Rinjani, Lombok Tengah, ada dua air terjun yang namanya sama unik dengan bentuknya. Benang Stokel mengalir kembar dari tebing hijau, sedangkan Benang Kelambu jatuh tipis menembus rimbun tanaman seperti kelambu.",
              "Jalur menuju air terjun melewati hutan dan kebun warga yang sejuk. Trip yang pas untuk setengah hingga satu hari, tanpa perlu perjalanan terlalu jauh dari Mataram atau Kuta."],
          en:["On Rinjani's southern slopes in Central Lombok, two waterfalls are as unusual as their names. Benang Stokel falls as twin streams from a green cliff, while Benang Kelambu drips through thick plants like a mosquito net (kelambu).",
              "The path runs through cool forest and village gardens. A great half-day to full-day trip without a long drive from Mataram or Kuta."]},
    high:{id:["Air terjun kembar Benang Stokel","Benang Kelambu yang mengalir seperti tirai","Jalur hutan yang sejuk","Tidak terlalu jauh dari Mataram & Kuta"],
          en:["The twin falls of Benang Stokel","Benang Kelambu, flowing like a curtain","Cool forest trail","Not far from Mataram & Kuta"]},
    plan:[["08.00",{id:"Jemput di hotel",en:"Hotel pickup"}],["09.30",{id:"Tiba di Aik Berik, Lombok Tengah",en:"Arrive in Aik Berik, Central Lombok"}],
          ["09.45",{id:"Jalan kaki ke Benang Stokel",en:"Walk to Benang Stokel"}],["11.00",{id:"Lanjut ke Benang Kelambu, berenang & foto",en:"Continue to Benang Kelambu, swim and take photos"}],
          ["12.30",{id:"Makan siang",en:"Lunch"}],["15.00",{id:"Tiba kembali di hotel",en:"Back at your hotel"}]],
    inc:INC_LAND, exc:EXC_LAND, bring:BRING_FALL },

  { id:"sawah-terasering", img:"img/tour/rice-terrace.jpg", name:{id:"Trip Sawah & Terasering", en:"Rice Field & Terrace Trip"},
    dest:["Rice field","Rice terrace"], price:"Rp XXX", badge:{id:"Alam", en:"Nature"},
    dur:{id:"± 6 jam", en:"Approx. 6 hours"},
    tagline:{id:"Hamparan hijau, udara pedesaan, dan kehidupan petani Lombok yang apa adanya.",
             en:"Green fields, country air and everyday farming life in Lombok."},
    desc:{id:["Nikmati sisi pedesaan Lombok yang damai. Berjalan di pematang sawah, melihat terasering yang bertingkat rapi, dan menyaksikan langsung aktivitas petani setempat.",
              "Trip santai ini cocok untuk keluarga, fotografer, atau siapa saja yang ingin rehat dari pantai. Driver kami akan membawa Anda ke spot sawah terbaik sesuai musim tanam."],
          en:["Enjoy the peaceful countryside of Lombok. Walk along the rice paddies, see neatly stepped terraces and watch local farmers at work.",
              "This relaxed trip suits families, photographers or anyone who wants a break from the beach. Our driver takes you to the best rice-field spots for the season."]},
    high:{id:["Jalan santai di pematang sawah","Terasering hijau bertingkat","Melihat aktivitas petani lokal","Spot foto pedesaan"],
          en:["Easy walks along the paddies","Green, stepped terraces","Watching local farmers at work","Countryside photo spots"]},
    plan:[["08.00",{id:"Jemput di hotel",en:"Hotel pickup"}],["09.30",{id:"Tiba di area persawahan",en:"Arrive at the rice fields"}],
          ["09.45",{id:"Jalan kaki di sawah & terasering",en:"Walk through the fields and terraces"}],["11.30",{id:"Makan siang kuliner lokal",en:"Lunch with local food"}],
          ["14.00",{id:"Tiba kembali di hotel",en:"Back at your hotel"}]],
    inc:INC_LAND, exc:EXC_LAND, bring:BRING_LAND },

  { id:"sasak-tour", img:"img/tour/sasak.jpg", name:{id:"Sasak Tour", en:"Sasak Tour"},
    dest:["Desa Sasak / rumah adat Sasak","Pantai Kuta","Pantai Tanjung Aan","Sunset di Bukit Merese"], price:"Rp XXX", badge:{id:"Budaya", en:"Culture"},
    dur:{id:"± 9 jam, sampai sunset", en:"Approx. 9 hours, until sunset"},
    tagline:{id:"Budaya Sasak, pantai selatan, dan sunset terbaik di Bukit Merese.",
             en:"Sasak culture, southern beaches and the best sunset at Merese Hill."},
    desc:{id:["Kenali suku Sasak, penduduk asli Lombok. Kunjungi desa adat dengan rumah beratap alang-alang, lihat proses menenun kain tradisional, dan dengarkan cerita tentang tradisi yang masih dijaga hingga kini.",
              "Setelah itu, nikmati pantai-pantai terbaik di selatan Lombok: Pantai Kuta dan Tanjung Aan yang berpasir putih. Hari ditutup dengan sunset dari atas Bukit Merese, salah satu pemandangan paling indah di Lombok."],
          en:["Meet the Sasak, Lombok's indigenous people. Visit a traditional village with thatched houses, watch hand weaving and hear about customs that are still kept today.",
              "Then enjoy the best beaches of South Lombok: Kuta and white-sand Tanjung Aan. The day ends with sunset from the top of Merese Hill, one of the finest views in Lombok."]},
    high:{id:["Desa adat & rumah tradisional Sasak","Melihat proses tenun tradisional","Pantai Kuta & Tanjung Aan","Sunset di Bukit Merese"],
          en:["Traditional Sasak village & houses","Watching traditional weaving","Kuta & Tanjung Aan beaches","Sunset at Merese Hill"]},
    plan:[["09.00",{id:"Jemput di hotel",en:"Hotel pickup"}],["10.00",{id:"Kunjungan desa adat Sasak",en:"Visit a traditional Sasak village"}],
          ["12.00",{id:"Pantai Kuta & makan siang",en:"Kuta Beach & lunch"}],["14.00",{id:"Pantai Tanjung Aan",en:"Tanjung Aan Beach"}],
          ["16.30",{id:"Sunset di Bukit Merese",en:"Sunset at Merese Hill"}],["18.30",{id:"Tiba kembali di hotel",en:"Back at your hotel"}]],
    inc:INC_LAND, exc:EXC_LAND, bring:BRING_LAND },

  { id:"tetebatu", img:"img/tour/tetebatu.jpg", name:{id:"Trip Tetebatu", en:"Tetebatu Trip"},
    dest:["Air terjun","Rice terrace"], price:"Rp XXX", badge:{id:"Alam", en:"Nature"},
    dur:{id:"Full day (± 9 jam)", en:"Full day (approx. 9 hours)"},
    tagline:{id:"Desa sejuk di kaki Rinjani dengan sawah terasering dan air terjun tersembunyi.",
             en:"A cool village at the foot of Rinjani with terraced rice fields and hidden waterfalls."},
    desc:{id:["Tetebatu di Lombok Timur adalah desa pegunungan yang dikelilingi sawah terasering dengan latar Gunung Rinjani. Udaranya sejuk, suasananya tenang, dan pemandangannya hijau sejauh mata memandang.",
              "Jelajahi pematang sawah, temukan air terjun di tengah hutan, dan rasakan kehidupan desa yang masih tradisional. Trip ini cocok untuk Anda yang ingin melihat Lombok dari sisi yang berbeda."],
          en:["Tetebatu in East Lombok is a mountain village surrounded by terraced rice fields with Mount Rinjani as a backdrop. The air is cool, the pace is slow and everything is green as far as you can see.",
              "Walk through the paddies, find waterfalls in the forest and experience traditional village life. A trip for anyone who wants to see a different side of Lombok."]},
    high:{id:["Sawah terasering berlatar Rinjani","Air terjun di tengah hutan","Udara sejuk pegunungan","Kehidupan desa tradisional"],
          en:["Rice terraces with Rinjani behind","Waterfalls in the forest","Cool mountain air","Traditional village life"]},
    plan:[["08.00",{id:"Jemput di hotel",en:"Hotel pickup"}],["10.00",{id:"Tiba di Tetebatu",en:"Arrive in Tetebatu"}],
          ["10.15",{id:"Jalan kaki di sawah terasering",en:"Walk through the rice terraces"}],["12.00",{id:"Makan siang dengan pemandangan sawah",en:"Lunch overlooking the fields"}],
          ["13.00",{id:"Trekking ke air terjun",en:"Trek to the waterfall"}],["15.00",{id:"Perjalanan pulang",en:"Drive back"}],
          ["17.00",{id:"Tiba kembali di hotel",en:"Back at your hotel"}]],
    inc:INC_LAND, exc:EXC_LAND, bring:BRING_LAND }
];

/* ---------- ARMADA (harga per hari, termasuk driver & bensin) ---------- */
const FLEET = [
  { img:"img/armada/avanza-all-new.webp", name:"Toyota Avanza All New", usd:50,   idr:800000 },
  { img:"img/armada/fortuner.webp",      name:"Toyota Fortuner",        usd:75,   idr:1200000 },
  { img:"img/armada/innova-reborn.webp", name:"Toyota Innova Reborn",   usd:81,   idr:1300000 },
  { img:"img/armada/hiace.webp",         name:"Toyota Hiace",           usd:125,  idr:2000000 },
  { img:"img/armada/alphard.webp",       name:"Toyota Alphard",         usd:219,  idr:3500000 }
];

/* ---------- AIRPORT TRANSFER (jemput di area kedatangan Bandara Internasional Lombok) ---------- */
const AIRPORT = [
  { to:"Kuta Lombok",              dur:{id:"± 25–30 menit", en:"approx. 25–30 min"}, idr:350000 },
  { to:"Mataram",                  dur:{id:"± 1 jam",       en:"approx. 1 hour"},    idr:450000 },
  { to:"Selong Belanak",           dur:{id:"± 1 jam",       en:"approx. 1 hour"},    idr:500000 },
  { to:"Senggigi",                 dur:{id:"± 1,5 jam",     en:"approx. 1.5 hours"}, idr:500000 },
  { to:"Pemenang / Tanjung",       dur:{id:"± 2 jam",       en:"approx. 2 hours"},   idr:500000 },
  { to:"Senaru",                   dur:{id:"± 3 jam",       en:"approx. 3 hours"},   idr:700000 },
  { to:"Tetebatu",                 dur:{id:"± 2 jam",       en:"approx. 2 hours"},   idr:750000 },
  { to:"Sembalun",                 dur:{id:"± 3 jam",       en:"approx. 3 hours"},   idr:750000 }
];


/* ---------- KENAPA PILIH KAMI ---------- */
const WHY = [
  { icon:"🧭", t:{id:"Driver Lokal Berpengalaman", en:"Experienced Local Driver"}, d:{id:"Hafal rute dan spot terbaik di Lombok.", en:"Knows the routes and best spots in Lombok."} },
  { icon:"⛽", t:{id:"Sudah Termasuk Bensin & Driver", en:"Driver & Petrol Included"}, d:{id:"Harga jelas, tanpa biaya tersembunyi.", en:"Clear pricing, no hidden costs."} },
  { icon:"🚐", t:{id:"Armada Lengkap", en:"Full Range of Cars"}, d:{id:"Dari Avanza, Innova, Fortuner, Hiace sampai Alphard.", en:"From Avanza, Innova, Fortuner and Hiace to Alphard."} },
  { icon:"🏨", t:{id:"Jemput di Hotel & Bandara", en:"Hotel & Airport Pickup"}, d:{id:"Dijemput dan diantar sampai tujuan.", en:"Picked up and dropped off where you need."} }
];

/* ---------- TESTIMONI (review asli Google Maps, rating 5.0 · 15 ulasan) ----------
   Teks bahasa asli dipertahankan; bahasa satunya terjemahan. */
const REVIEWS_URL = "https://www.google.com/maps/place/Lombok_hits_transport/@-8.5965043,116.2194226,17z/data=!4m8!3m7!1s0x2dcdb90eb4278c83:0x302300e261ddc58!8m2!3d-8.5965043!4d116.2194226!9m1!1b1!16s%2Fg%2F11ks1h_0yc";
const TESTI = [
  { name:"Annabel De Canck", text:{en:"Amazing driver, very kind and correct price!", id:"Driver luar biasa, sangat ramah dan harganya pas!"} },
  { name:"Nurul Agustini", text:{id:"Mobil bagus, bersih dan drivernya ramah, tidak pernah menolak destinasi yang diarahkan.", en:"Nice, clean car and a friendly driver who never refused any destination we asked for."} },
  { name:"Nur Alfatania", text:{id:"Pak super baik, nyaman dan sering ajak ngomong jadinya suasananya adem.", en:"Super kind driver, comfortable, and always up for a chat, so the trip felt relaxed."} },
  { name:"Lalumarwin Hadi", text:{id:"Perjalanan memuaskan, driver antusias membantu selama trip, terima kasih.", en:"A satisfying journey, the driver was eager to help throughout the trip. Thank you."} },
  { name:"L.M. Faris Firdaus", text:{id:"Mantap dan tepat waktu trip.", en:"Great, and right on time for the trip."} },
  { name:"Marius Morel", text:{en:"Best ride!", id:"Perjalanan terbaik!"} }
];

/* ---------- GALERI ---------- */
const GALLERY = [
  ["gallery-1","Gili Nanggu"], ["gallery-2","Pink Beach"], ["gallery-3","Air terjun Sendang Gile"], ["gallery-4","Gili Gede"],
  ["gallery-5","Sawah Tetebatu"], ["gallery-6","Air terjun Benang Stokel"], ["gallery-7","Gili Kondo"], ["gallery-8","Sawah terasering"]
].map(([n, label]) => ({ img:`img/gallery/${n}.jpg`, label }));

/* ---------- TEKS EN / ID ---------- */
const TEXT = {
  id:{
    nav_home:"Home", nav_tour:"Paket Tour", nav_fleet:"Sewa Mobil", nav_airport:"Airport Transfer", nav_about:"Tentang", nav_gallery:"Galeri", nav_contact:"Kontak",
    btn_book:"Pesan Sekarang", btn_book_wa:"Pesan via WhatsApp", btn_see_tour:"Lihat Paket Tour", btn_order:"Pesan", btn_detail:"Lihat Detail",
    td_about:"Tentang Trip", td_high:"Highlight", td_dest:"Destinasi", td_plan:"Contoh Jadwal", td_plan_note:"Jadwal bisa disesuaikan dengan keinginan Anda.",
    td_inc:"Sudah Termasuk", td_exc:"Belum Termasuk", td_bring:"Yang Perlu Dibawa", td_dur:"Durasi", td_pick:"Penjemputan", td_pick_v:"Jemput & antar di hotel Anda",
    td_book:"Pesan Trip Ini", td_ask:"Tanya Dulu via WhatsApp", td_other:"Paket Tour Lainnya", td_ask_msg:"Halo, saya mau tanya tentang ",
    air_all:"Lihat Tujuan & Harga",
    hero_sub:"Tour & Travel Lombok", hero_title:"Jelajahi Keindahan Lombok Bersama Kami",
    hero_desc:"Paket tour, sewa mobil plus driver dan bensin, serta antar-jemput bandara. Nyaman, aman, dan harga jelas.",
    why_title:"Kenapa Pilih Lombok Hits Transport?",
    tour_title:"Paket Tour Lombok", tour_desc:"Pilihan trip favorit ke pulau-pulau Gili, pantai, air terjun, dan desa adat Sasak.",
    fleet_title:"Sewa Mobil + Driver", fleet_desc:"Harga per hari sudah termasuk driver dan bensin.",
    price_start:"Mulai dari", per_day:"/ hari", per_trip:"Harga",
    air_title:"Antar-Jemput Bandara", air_desc:"Layanan transfer pulang-pergi Bandara Internasional Lombok ke hotel Anda.",
    air_routes:"Tujuan Airport Transfer", air_pickup:"Penjemputan di area kedatangan Bandara Internasional Lombok.",
    air_other:"Tujuan lain? Silakan hubungi kami.", air_other_btn:"Tanya via WhatsApp",
    about_title:"Tentang Kami", about_role:"Pemilik & Driver Lombok Hits Transport",
    about_p1:"Lombok Hits Transport dikelola oleh Lalu Erfan Fadli, melayani paket tour, sewa mobil plus driver, dan antar-jemput bandara di Lombok.",
    about_p2:"Bekerja sama dengan rekan-rekan rental terpercaya, kami siap melayani tamu perorangan, keluarga, hingga rombongan besar.",
    about_p3:"[Placeholder: pengalaman, bahasa yang dikuasai, dll.]",
    testi_title:"Apa Kata Tamu Kami", testi_count:"15 ulasan di Google", testi_more:"Lihat Semua Ulasan di Google", gallery_title:"Galeri",
    contact_title:"Hubungi Kami", contact_desc:"Tanyakan paket tour atau sewa mobil, kami siap membantu.",
    contact_addr:"Alamat", contact_hours:"Jam Layanan", contact_hours_v:"24 jam",
    footer_about:"Paket tour, sewa mobil + driver, dan antar-jemput bandara di Lombok.",
    footer_links:"Menu", footer_services:"Layanan", svc_tour:"Paket Tour", svc_rent:"Sewa Mobil + Driver", svc_airport:"Airport Transfer",
    msg_general:"Halo Lombok Hits Transport, saya mau tanya info tour / sewa mobil.",
    msg_airport:"Halo, saya mau pesan antar-jemput bandara. Tanggal: … Jumlah orang: … Hotel: …",
    msg_air_to:"Halo, saya mau pesan antar-jemput bandara ke ", msg_air_other:"Halo, saya mau tanya harga antar-jemput bandara ke tujuan: … Tanggal: … Jumlah orang: …",
    msg_tour:"Halo, saya mau pesan ", msg_car:"Halo, saya mau sewa ", msg_tail:". Tanggal: … Jumlah orang: …"
  },
  en:{
    nav_home:"Home", nav_tour:"Tour Packages", nav_fleet:"Car Rental", nav_airport:"Airport Transfer", nav_about:"About", nav_gallery:"Gallery", nav_contact:"Contact",
    btn_book:"Book Now", btn_book_wa:"Book via WhatsApp", btn_see_tour:"See Tour Packages", btn_order:"Book", btn_detail:"View Details",
    td_about:"About the Trip", td_high:"Highlights", td_dest:"Destinations", td_plan:"Sample Itinerary", td_plan_note:"The schedule can be adjusted to suit you.",
    td_inc:"Included", td_exc:"Not Included", td_bring:"What to Bring", td_dur:"Duration", td_pick:"Pickup", td_pick_v:"Pickup & drop-off at your hotel",
    td_book:"Book This Trip", td_ask:"Ask First via WhatsApp", td_other:"Other Tour Packages", td_ask_msg:"Hello, I have a question about the ",
    air_all:"See Destinations & Prices",
    hero_sub:"Lombok Tour & Travel", hero_title:"Explore the Beauty of Lombok With Us",
    hero_desc:"Tour packages, car rental with driver and petrol, and airport transfers. Comfortable, safe, and clear pricing.",
    why_title:"Why Choose Lombok Hits Transport?",
    tour_title:"Lombok Tour Packages", tour_desc:"Favourite trips to the Gili islands, beaches, waterfalls and traditional Sasak villages.",
    fleet_title:"Car Rental + Driver", fleet_desc:"Daily price includes driver and petrol.",
    price_start:"Starting from", per_day:"/ day", per_trip:"Price",
    air_title:"Airport Transfer", air_desc:"Return transfer between Lombok International Airport and your hotel.",
    air_routes:"Airport Transfer Destinations", air_pickup:"Pickup at the Lombok International Airport arrival area.",
    air_other:"Other destination? Please contact us.", air_other_btn:"Ask via WhatsApp",
    about_title:"About Us", about_role:"Owner & Driver, Lombok Hits Transport",
    about_p1:"Lombok Hits Transport is run by Lalu Erfan Fadli, offering tour packages, car rental with driver, and airport transfers in Lombok.",
    about_p2:"Working with trusted rental partners, we can serve solo travellers, families and large groups.",
    about_p3:"[Placeholder: experience, languages spoken, etc.]",
    testi_title:"What Our Guests Say", testi_count:"15 reviews on Google", testi_more:"See All Reviews on Google", gallery_title:"Gallery",
    contact_title:"Contact Us", contact_desc:"Ask us about tour packages or car rental, we're happy to help.",
    contact_addr:"Address", contact_hours:"Opening Hours", contact_hours_v:"24 hours",
    footer_about:"Tour packages, car rental with driver, and airport transfers in Lombok.",
    footer_links:"Menu", footer_services:"Services", svc_tour:"Tour Packages", svc_rent:"Car Rental + Driver", svc_airport:"Airport Transfer",
    msg_general:"Hello Lombok Hits Transport, I'd like to ask about a tour / car rental.",
    msg_airport:"Hello, I'd like to book an airport transfer. Date: … Guests: … Hotel: …",
    msg_air_to:"Hello, I'd like to book an airport transfer to ", msg_air_other:"Hello, I'd like a price for an airport transfer to: … Date: … Guests: …",
    msg_tour:"Hello, I'd like to book the ", msg_car:"Hello, I'd like to rent a ", msg_tail:". Date: … Guests: …"
  }
};
