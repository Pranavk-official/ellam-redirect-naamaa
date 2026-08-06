export const CATEGORIES = ["Temple", "Illams and Kudumbakshethrams"] as const;
export type Category = (typeof CATEGORIES)[number];

export type Listing = {
  /** Display name shown in the directory. */
  name: string;
  /** naamaa subdomain — the link target is naamaa.in/<slug>. */
  slug: string;
  /** Human-readable place, shown under the name. */
  location?: string;
  /** True once it is live on naamaa.in (its `slug` is confirmed). */
  onboarded?: boolean;
  /**
   * Old ellam.in slug (`ellam.in/worship/<ellam_slugs>`), from the 09Apr2024
   * social-media sheet. Old links redirect to `naamaa.in/<slug>`.
   */
  ellam_slugs?: string;
};

export type CatalogueEntry = Listing & { category: Category };

// Generated from catalogue_updated.xlsx — every listing here is live on naamaa.in.
export const catalogue: Record<Category, Listing[]> = {
  Temple: [
    { "name": "Sree Sankaramkulangara Temple", "slug": "sreesankaramkulangaratemple", "location": "Kanattukara, Punkunnam, Thrissur", "onboarded": true, "ellam_slugs": "Sankaramkulangara" },
    { "name": "Mithranandapuram Sree Vamanamoorthy Temple", "slug": "sreevamanamoorthy-temple", "location": "Perumbillissery, Thrissur", "onboarded": true, "ellam_slugs": "MithranandapuramVamanamoorthy" },
    { "name": "Sree Seetharamaswamy Temple", "slug": "sreeseetharamaswamytemple", "location": "Pookunnam", "onboarded": true, "ellam_slugs": "SreeSeetharamaswamy" },
    { "name": "Cherumukk Sree Mahavishnu Temple", "slug": "cherumukksreemahavishnutemple", "location": "Cherumukk", "onboarded": true },
    { "name": "Thirunayathode Sivanarayana Temple", "slug": "thirunayathodesivanarayana", "location": "Nedumbasery", "onboarded": true, "ellam_slugs": "thirunayathodu" },
    { "name": "Trikkur Mahadeva Temple", "slug": "trikkurmahadevatemple", "location": "Trikkur ,Thrissur", "onboarded": true, "ellam_slugs": "ThrikkurMahadeva" },
    { "name": "Thiruvullakkavu Sree Dharma Sastha Temple", "slug": "sreedharmasasthatemple", "location": "Thiruvullakkavu , Thrissur", "onboarded": true, "ellam_slugs": "Thiruvullakkavu" },
    // { "name": "Aalur Thiruthi Mahavishnu Kshetram", "slug": "aalurthiruthimahavishnu", "location": "Aalur, Thrissur", "onboarded": true, "ellam_slugs": "AalurThiruthiMahavishnu" },
    { "name": "Alkkalmanna Sri Danwanthari Temple", "slug": "alkkalmannasridanwanthari", "location": "Angadipuram", "onboarded": true, "ellam_slugs": "Alkalmannasridanwanthari" },
    { "name": "Angadippuram Sree Manikkapuram Vishnu Temple", "slug": "angadippuramsreemanikkapuram", "location": "Angadippuram", "onboarded": true, "ellam_slugs": "Manikkapuramvishnutemple" },
    // { "name": "Aloorkkavu Bagavathi Temple", "slug": "aloorkkavubagavathitemple", "location": "Aloor, Thrissur", "onboarded": true, "ellam_slugs": "Aloorkkavubagavathi" },
    { "name": "Paingarappilly Sreekrishnapuram Kolamkulangarakkavu Temple", "slug": "paingarappillysreekrishnapuram", "location": "Mulanthuruthy, Ernakulam", "onboarded": true, "ellam_slugs": "Paingarappilly" },
    { "name": "Sri Vaisravana (Kubera) Mahakshethram", "slug": "srivaisravanakubera", "location": "Cheriyaparappur", "onboarded": true, "ellam_slugs": "Srivaisravanamahakshethram" },
    { "name": "Sree Mahalakshmi Temple, Chevoor", "slug": "sreemahalakshmitemple", "location": "Chevoor", "onboarded": true, "ellam_slugs": "SreeMahalakshmi" },
    { "name": "Avittathur Mahadeva Temple", "slug": "avittathurmahadevatemple", "location": "Avittathur , Irinjalakuda", "onboarded": true, "ellam_slugs": "avittathurmahadevatemple" },
    { "name": "Ullannoor Sree Nagaraja Devi Temple", "slug": "ullannoorsreenagarajadevi", "location": "Injakkadu", "onboarded": true, "ellam_slugs": "ULLANNOORSREENAGARAJADEVI" },
    { "name": "Nadakkal Mayilode Kavumoola Sree Nagaraja Temple", "slug": "mylode-nagarajatemple", "location": "Nadakkal Rd Kalluvathukal po 691578", "onboarded": true },
    { "name": "Paravur Puttingal Devi Temple", "slug": "paravurputtingaldevitemple", "location": "Paravur P.O", "onboarded": true },
    { "name": "Aazhimala Siva Kshethram", "slug": "aazhimalasivakshethram", "location": "Trivandrum", "onboarded": true, "ellam_slugs": "aazhimala" },
    { "name": "Adimali Sree Bhagavathy Vaishnava Mahadeva Kshethram", "slug": "adimalisreebvmk", "location": "Adimali", "onboarded": true, "ellam_slugs": "adimalibhadrakali" },
    { "name": "Amaramkavu Devi Temple", "slug": "amaramkavudevitemple", "location": "Kolani, Idukki", "onboarded": true, "ellam_slugs": "amaramkavudevitemple" },
    { "name": "Ananthancadu Sree Nagaraja Temple Trust", "slug": "ananthancadu", "location": "Trivandrum", "onboarded": true, "ellam_slugs": "ananthancadu" },
    { "name": "Brahma Temple Thirunavaya (Tavanoor)", "slug": "brahmatemplethavanur", "location": "Tavanoor", "onboarded": true, "ellam_slugs": "brahmatemple" },
    { "name": "Chandrappillil Devi Temple", "slug": "chandrappillildevitemple", "location": "West Kodikkulam", "onboarded": true, "ellam_slugs": "chandrappillildevitemple" },
    { "name": "Cheru Thirunavaya Temple", "slug": "cheruthirunavayatemple", "location": "Thavanoor", "onboarded": true, "ellam_slugs": "cheruthirunavaya" },
    { "name": "Edavetty Sree Krishna Swami Temple", "slug": "edavetty-temple", "location": "Edavetty", "onboarded": true, "ellam_slugs": "edavettykrishnaswami" },
    { "name": "Idanattu Indalayappa Swamy Temple", "slug": "idanattuindalayappaswamytemple", "location": "Kurichy, Kottayam", "onboarded": true, "ellam_slugs": "indalayappatemple" },
    { "name": "Kidangoor Sree Subrahmanya Swami Temple", "slug": "sreesubrahmanyaswamitemple", "location": "Kidangoor", "onboarded": true, "ellam_slugs": "kidangoorsubramanyatemple" },
    { "name": "Kolani Sree Krishna Swamy Temple", "slug": "kolanisreekrishnaswamytemple", "location": "Kolani, Idukki", "onboarded": true, "ellam_slugs": "kolanikrishnatemple" },
    { "name": "Konchiravila Sree Bhagavathi Temple", "slug": "konchiravilasreebhagavathi", "location": "Trivandrum", "onboarded": true, "ellam_slugs": "konchiraviladevitemple" },
    { "name": "Koottumadom Sree Subramanya Swamy Temple", "slug": "koottumadomsreesubramanyaswami", "location": "Rayamangalam, Perumbavoor", "onboarded": true, "ellam_slugs": "koottumadomsubramanyakshetram" },
    { "name": "Kumaranaloor Devi Temple", "slug": "kumaranaloordevitemple", "location": "Kumaranaloor", "onboarded": true, "ellam_slugs": "kumaranallordevitemple" },
    { "name": "Muthaliyar Madom Sree Mahadeva Temple Thodupuzha", "slug": "muthaliarmadommahadevatemple", "location": "Thodupuzha, Idukki", "onboarded": true, "ellam_slugs": "muthaliyarmadomtemple" },
    { "name": "Paramelkavu Devi Kshethram", "slug": "paramelkavudevikshrethram", "location": "Munipara,  Idukki", "onboarded": true, "ellam_slugs": "paramelkkavutemple" },
    { "name": "Perumparamba Sree Mahadeva Temple", "slug": "perumparambasreemahadeva", "location": "Edappal", "onboarded": true, "ellam_slugs": "perumparampamahadeva" },
    { "name": "Sree Annapoorneswari Navagraha Bhadrakali Kshethram", "slug": "sreeannapoorneswarinavagraha", "location": "Thodupuzha", "onboarded": true, "ellam_slugs": "sreeannapoorneswari" },
    { "name": "Sree Mahadevan Temple, Kanjiramattom, Thodupuzha", "slug": "mahadevatemplekjm", "location": "Thodupuzha K", "onboarded": true, "ellam_slugs": "kanjiramattomtemple" },
    { "name": "Sree Purushamangalam Srikrishna Kshetram", "slug": "sreepurushamangalam", "location": "Kakkad, Piravom", "onboarded": true, "ellam_slugs": "purushamangalam" },
    { "name": "Sree Sundareswara Temple", "slug": "sreesundareswaratemple", "location": "Talap , Kannur", "onboarded": true, "ellam_slugs": "sundareswaratemple" },
    { "name": "Sudarsana Temple", "slug": "sudarsanatemple", "location": "Alathiyur", "onboarded": true, "ellam_slugs": "sudarsanatemple" },
    { "name": "Sudharma Sooryodhaya Sabha Sree Subrahmanya Swamy Temple", "slug": "sssabhathevara", "location": "Sudharma Junction, Thevara", "onboarded": true, "ellam_slugs": "sudhamasuryodhayatemple" },
    { "name": "Suryakaladi Mahaganapathi Devasthanam", "slug": "suryakaladi", "location": "Kottayam", "onboarded": true, "ellam_slugs": "suryakaladi" },
    { "name": "Thattekkatt Sreekrishna Kshetram", "slug": "thattekkattsreekrishnatemple", "location": "Nettoor", "onboarded": true, "ellam_slugs": "thattekkattsreekrishna" },
    { "name": "Thiruvumplavil Mahadeva Temple", "slug": "thiruvumplavilmahadevatemple", "location": "Anicadu, Muvattupuzha", "onboarded": true, "ellam_slugs": "thiruvamplaviltemple" },
    { "name": "Thrikkayil Mahavishnu Kshetram", "slug": "thrikkayilmahavishnukshetram", "location": "Udumbanoor, Idukki", "onboarded": true, "ellam_slugs": "thrikkayiltemple" },
    { "name": "Uravappara Sree Subramania Swamy Temple", "slug": "uravapparamalayalapazhani", "location": "Olamattom, Thodupuzha", "onboarded": true, "ellam_slugs": "uravappara" },
    { "name": "Varinjam Sree Mahadevar Temple", "slug": "varinjamsreemahadevartemple", "location": "Varinjam,  Chathanoor", "onboarded": true, "ellam_slugs": "varinjammahadevar" },
    { "name": "Venpalavattom Sree Bhagavathy Temple", "slug": "venpalavattomsreebhagavathy", "location": "Trivandrum", "onboarded": true, "ellam_slugs": "venpalavattomtemple" },
  ],
  "Illams and Kudumbakshethrams": [
    { "name": "Umesh Vaidhyan Mudanthen Para", "slug": "umeshvaidhyanmudanthenpara", "location": "Abdurahman P, Palli Veettil, Mudanthen Para, Natakkal P.O., West Eleri, Kasaragod, Kerala \u2013 671533.", "onboarded": true },
  ],
};

// Flat view (category attached) used by the directory for search + display.
export const listings: CatalogueEntry[] = CATEGORIES.flatMap((category) =>
  catalogue[category].map((l) => ({ ...l, category })),
);
