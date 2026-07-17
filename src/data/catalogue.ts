export const CATEGORIES = ["Prarthana", "Parking", "Ellam Stores"] as const;
export type Category = (typeof CATEGORIES)[number];

export type Listing = {
  /** Display name shown in the directory. */
  name: string;
  /** naamaa subdomain — the link target is naamaa.in/<slug>. Confirmed only for
   *  onboarded listings; otherwise a kebab-of-name placeholder to fill in later. */
  slug: string;
  /** Human-readable place, shown under the name. */
  location?: string;
  /** True once it is live on naamaa.in (its `slug` is confirmed). */
  onboarded?: boolean;
};

export type CatalogueEntry = Listing & { category: Category };

// Captured from live ellam.in before shutdown, grouped by service category.
// naamaa onboarding is phased: set a listing's real `slug` + `onboarded: true`
// as it goes live; until then `slug` is a kebab-of-name placeholder and the row
// shows "Coming soon". Parking had no listings.
export const catalogue: Record<Category, Listing[]> = {
  Prarthana: [
    { "name": "Thiruvambady Sree Krishna Temple", "slug": "thiruvambady-sree-krishna-temple", "location": "Thiruvambady, Thrissur" },
    { "name": "Sree Sankaramkulangara Temple", "slug": "sree-sankaramkulangara-temple", "location": "Kanattukara, Punkunnam, Thrissur" },
    { "name": "Mithranandapuram Sree Vamanamoorthy Temple", "slug": "sreevamanamoorthy-temple", "location": "Perumbillissery, Thrissur", "onboarded": true },
    { "name": "Sree Seetharamaswamy Temple", "slug": "sree-seetharamaswamy-temple", "location": "Pookunnam" },
    { "name": "Sreekanteswara Kshethram", "slug": "sreekanteswara-kshethram", "location": "Kozhikode" },
    { "name": "Paramekkavu Bhagavathy Temple", "slug": "paramekkavu-bhagavathy-temple", "location": "Thrissur" },
    { "name": "Cherumukk Sree Mahavishnu Temple", "slug": "cherumukk-sree-mahavishnu-temple", "location": "Cherumukk" },
    { "name": "Thirunayathode Sivanarayana Temple", "slug": "thirunayathode-sivanarayana-temple", "location": "Nedumbasery" },
    { "name": "Trikkur Mahadeva Temple", "slug": "trikkur-mahadeva-temple", "location": "Trikkur ,Thrissur" },
    { "name": "Thiruvullakkavu Sree Dharma Sastha Temple", "slug": "thiruvullakkavu-sree-dharma-sastha-temple", "location": "Thiruvullakkavu , Thrissur" },
    { "name": "Aalur Thiruthi Mahavishnu Kshetram", "slug": "aalur-thiruthi-mahavishnu-kshetram", "location": "Aalur, Thrissur" },
    { "name": "Alkkalmanna Sri Danwanthari Temple", "slug": "alkkalmanna-sri-danwanthari-temple", "location": "Angadipuram" },
    { "name": "Angadippuram Sree Manikkapuram Vishnu Temple", "slug": "angadippuram-sree-manikkapuram-vishnu-temple", "location": "Angadippuram" },
    { "name": "Koodalmanikyam Temple", "slug": "koodalmanikyam-temple", "location": "Irinjalakuda" },
    { "name": "Uliyannoor Mahadeva Temple", "slug": "uliyannoor-mahadeva-temple", "location": "Uliyanoor Aluva" },
    { "name": "Ponmala Siva Kshetram", "slug": "ponmala-siva-kshetram", "location": "Aalur, Thrissur" },
    { "name": "Aloorkkavu Bagavathi Temple", "slug": "aloorkkavu-bagavathi-temple", "location": "Aloor, Thrissur" },
    { "name": "Paingarappilly Sreekrishnapuram Kolamkulangarakkavu Temple", "slug": "paingarappilly-sreekrishnapuram-kolamkulangarakkavu-temple", "location": "Mulanthuruthy, Ernakulam" },
    { "name": "Sri Vaisravana (Kubera) Mahakshethram", "slug": "sri-vaisravana-kubera-mahakshethram", "location": "Cheriyaparappur" },
    { "name": "Sree Mahalakshmi Temple, Chevoor", "slug": "sreemahalakshmitemple", "location": "Chevoor", onboarded: true },
    { "name": "Avittathur Mahadeva Temple", "slug": "avittathur-mahadeva-temple", "location": "Avittathur , Irinjalakuda" },
    { "name": "Vettikkavu Bhagavathi Temple, Irumpanam", "slug": "vettikkavu-bhagavathi-temple-irumpanam", "location": "IRUMPANAM" },
    { "name": "Kotheth Sree Paradevar Siva Parvathy Temple", "slug": "kotheth-sree-paradevar-siva-parvathy-temple", "location": "Kadapakkada" },
    { "name": "Puthen Veettil Devi Temple", "slug": "puthen-veettil-devi-temple", "location": "Bharanikkavu" },
    { "name": "Ullannoor Sree Nagaraja Devi Temple", "slug": "ullannoor-sree-nagaraja-devi-temple", "location": "Injakkadu" },
    { "name": "Prana Mines", "slug": "prana-mines", "location": "Kakkanad" },
    { "name": "Kolathussery Sree Krishna Swamy Temple", "slug": "kolathussery-sree-krishna-swamy-temple", "location": "Eramalloor" },
    { "name": "Paravur Puthiyidam Mahadevar Temple", "slug": "paravur-puthiyidam-mahadevar-temple", "location": "Kottapuram, Paravur" },
    { "name": "Nadakkal Mayilode Kavumoola Sree Nagaraja Temple", "slug": "mylode-nagarajatemple", "location": "Nadakkal Rd Kalluvathukal po 691578", "onboarded": true },
    { "name": "Vinayaka Chathurthi Suryakalady Mana", "slug": "vinayaka-chathurthi-suryakalady-mana", "location": "Nattassery,Perumbaikad,Kerala 686006" },
    { "name": "Paravur Puttingal Devi Temple", "slug": "paravur-puttingal-devi-temple", "location": "Paravur P.O" },
    { "name": "Aazhimala Siva Kshethram", "slug": "aazhimala-siva-kshethram", "location": "Trivandrum" },
    { "name": "Adimali Sree Bhagavathy Vaishnava Mahadeva Kshethram", "slug": "adimali-sree-bhagavathy-vaishnava-mahadeva-kshethram", "location": "Adimali" },
    { "name": "Amaramkavu Devi Temple", "slug": "amaramkavu-devi-temple", "location": "Kolani, Idukki" },
    { "name": "Ananthancadu Sree Nagaraja Temple Trust", "slug": "ananthancadu", "location": "Trivandrum", "onboarded": true },
    { "name": "Bathery Mahaganapathi Kshetram - Ganapathivattom", "slug": "bathery-mahaganapathi-kshetram-ganapathivattom", "location": "Wayanad" },
    { "name": "Brahma Temple Thirunavaya (Tavanoor)", "slug": "brahma-temple-thirunavaya-tavanoor", "location": "Tavanoor" },
    { "name": "Chandrappillil Devi Temple", "slug": "chandrappillil-devi-temple", "location": "West Kodikkulam" },
    { "name": "Cheru Thirunavaya Temple", "slug": "cheru-thirunavaya-temple", "location": "Thavanoor" },
    { "name": "Edavetty Sree Krishna Swami Temple", "slug": "edavetty-temple", "location": "Edavetty", "onboarded": true },
    { "name": "Idanattu Indalayappa Swamy Temple", "slug": "idanattu-indalayappa-swamy-temple", "location": "Kurichy, Kottayam" },
    { "name": "Kanadi Kavu", "slug": "kanadi-kavu", "location": "Peringottukara" },
    { "name": "Kidangoor Sree Subrahmanya Swami Temple", "slug": "kidangoor-sree-subrahmanya-swami-temple", "location": "Kidangoor" },
    { "name": "Kolani Sree Krishna Swamy Temple", "slug": "kolani-sree-krishna-swamy-temple", "location": "Kolani, Idukki" },
    { "name": "Konchiravila Sree Bhagavathi Temple", "slug": "konchiravila-sree-bhagavathi-temple", "location": "Trivandrum" },
    { "name": "Koottumadom Sree Subramanya Swamy Temple", "slug": "koottumadom-sree-subramanya-swamy-temple", "location": "Rayamangalam, Perumbavoor" },
    { "name": "Kumaranaloor Devi Temple", "slug": "kumaranaloor-devi-temple", "location": "Kumaranaloor" },
    { "name": "Muthaliyar Madom Sree Mahadeva Temple Thodupuzha", "slug": "muthaliyar-madom-sree-mahadeva-temple-thodupuzha", "location": "Thodupuzha, Idukki" },
    { "name": "Paramelkavu Devi Kshethram", "slug": "paramelkavu-devi-kshethram", "location": "Munipara,  Idukki" },
    { "name": "Perumparamba Sree Mahadeva Temple", "slug": "perumparamba-sree-mahadeva-temple", "location": "Edappal" },
    { "name": "Sree Annapoorneswari Navagraha Bhadrakali Kshethram", "slug": "sree-annapoorneswari-navagraha-bhadrakali-kshethram", "location": "Thodupuzha" },
    { "name": "Sree Jagannath Temple", "slug": "sree-jagannath-temple", "location": "Thalassery" },
    { "name": "Sree Mahadevan Temple, Kanjiramattom, Thodupuzha", "slug": "sree-mahadevan-temple-kanjiramattom-thodupuzha", "location": "Thodupuzha K" },
    { "name": "Sree Purushamangalam Srikrishna Kshetram", "slug": "sree-purushamangalam-srikrishna-kshetram", "location": "Kakkad, Piravom" },
    { "name": "Sree Sundareswara Temple", "slug": "sree-sundareswara-temple", "location": "Talap , Kannur" },
    { "name": "Sudarsana Temple", "slug": "sudarsana-temple", "location": "Alathiyur" },
    { "name": "Sudharma Sooryodhaya Sabha Sree Subrahmanya Swamy Temple", "slug": "sudharma-sooryodhaya-sabha-sree-subrahmanya-swamy-temple", "location": "Sudharma Junction, Thevara" },
    { "name": "Suryakaladi Mahaganapathi Devasthanam", "slug": "suryakaladi", "location": "Kottayam", "onboarded": true },
    { "name": "Thattekkatt Sreekrishna Kshetram", "slug": "thattekkatt-sreekrishna-kshetram", "location": "Nettoor" },
    { "name": "Thiruvairanikulam Mahadeva Kshetram", "slug": "thiruvairanikulam-mahadeva-kshetram", "location": "Thiruvairanikulam" },
    { "name": "Thiruvumplavil Mahadeva Temple", "slug": "thiruvumplavil-mahadeva-temple", "location": "Anicadu, Muvattupuzha" },
    { "name": "Thrikkayil Mahavishnu Kshetram", "slug": "thrikkayil-mahavishnu-kshetram", "location": "Udumbanoor, Idukki" },
    { "name": "Uravappara Sree Subramania Swamy Temple", "slug": "uravappara-sree-subramania-swamy-temple", "location": "Olamattom, Thodupuzha" },
    { "name": "Varinjam Sree Mahadevar Temple", "slug": "varinjam-sree-mahadevar-temple", "location": "Varinjam,  Chathanoor" },
    { "name": "Venpalavattom Sree Bhagavathy Temple", "slug": "venpalavattom-sree-bhagavathy-temple", "location": "Trivandrum" },
  ],
  Parking: [],
  "Ellam Stores": [
    { "name": "IdDos Food Products", "slug": "iddos-food-products", "location": "Netoor, Ernakulam" },
    { "name": "Udaya Mess", "slug": "udaya-mess", "location": "Pullepady, Ernakulam" },
    { "name": "The Sweet Fairy", "slug": "the-sweet-fairy", "location": "Statue, Trivandrum" },
    { "name": "ഹോർട്ടികോർപ്പ് പാറ്റൂർ", "slug": "horticorp-pattoor", "location": "പാറ്റൂർ" },
    { "name": "Back To Roots", "slug": "back-to-roots", "location": "Mamangalam" },
    { "name": "Aadis Pathayapura", "slug": "aadis-pathayapura", "location": "Attingal, Trivandrum" },
    { "name": "Lakshmi Homely Meals", "slug": "lakshmi-homely-meals", "location": "Athani, Kakkand" },
    { "name": "Davi & Dani Mess", "slug": "davi-dani-mess", "location": "Pullepady" },
    { "name": "Yummy Pickle", "slug": "yummy-pickle", "location": "Sasthamcotta" },
    { "name": "Aroma Spices and Foods", "slug": "aroma-spices-and-foods", "location": "Thekkady" },
    { "name": "Lolu's Products", "slug": "lolus-products", "location": "Kalady" },
    { "name": "Haritham Total Greenery Solutions", "slug": "haritham-total-greenery-solutions", "location": "Edappally" },
    { "name": "Devoos Homemade Masala & Food Products", "slug": "devoos-homemade-masala-food-products", "location": "Thodupuzha" },
    { "name": "Alappadan's Taste Buds", "slug": "alappadans-taste-buds", "location": "Karunagappalli" },
    { "name": "Sri Lakshmi Homemade Spice & Pickles", "slug": "sri-lakshmi-homemade-spice-pickles", "location": "Palakkad" },
    { "name": "White Agro Foods", "slug": "white-agro-foods", "location": "Kottayam" },
    { "name": "Karthas Mess", "slug": "karthas-mess", "location": "Kakkanad" },
    { "name": "AK Revolt Accessories", "slug": "ak-revolt-accessories", "location": "Kochi" },
    { "name": "Bikky's Bowl", "slug": "bikkys-bowl", "location": "Kakkanad" },
    { "name": "Palm House Retreat", "slug": "palm-house-retreat", "location": "Mg road" },
    { "name": "CK Residency", "slug": "ck-residency", "location": "Pulleppady" },
    { "name": "Mamees Achar", "slug": "mamees-achar", "location": "Thiruvananthapuram" },
    { "name": "Surya Kaladi Guest House", "slug": "surya-kaladi-guest-house", "location": "Kottayam" },
  ],
};

// Flat view (category attached) used by the directory for search + display.
export const listings: CatalogueEntry[] = CATEGORIES.flatMap((category) =>
  catalogue[category].map((l) => ({ ...l, category })),
);
