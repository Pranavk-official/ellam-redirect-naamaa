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
};

export type CatalogueEntry = Listing & { category: Category };

// Generated from catalogue_updated.xlsx — every listing here is live on naamaa.in.
export const catalogue: Record<Category, Listing[]> = {
  Temple: [
    { "name": "Sree Sankaramkulangara Temple", "slug": "sreesankaramkulangaratemple", "location": "Kanattukara, Punkunnam, Thrissur", "onboarded": true },
    { "name": "Mithranandapuram Sree Vamanamoorthy Temple", "slug": "sreevamanamoorthy-temple", "location": "Perumbillissery, Thrissur", "onboarded": true },
    { "name": "Sree Seetharamaswamy Temple", "slug": "sreeseetharamaswamytemple", "location": "Pookunnam", "onboarded": true },
    { "name": "Cherumukk Sree Mahavishnu Temple", "slug": "cherumukksreemahavishnutemple", "location": "Cherumukk", "onboarded": true },
    { "name": "Thirunayathode Sivanarayana Temple", "slug": "thirunayathodesivanarayana", "location": "Nedumbasery", "onboarded": true },
    { "name": "Trikkur Mahadeva Temple", "slug": "trikkurmahadevatemple", "location": "Trikkur ,Thrissur", "onboarded": true },
    { "name": "Thiruvullakkavu Sree Dharma Sastha Temple", "slug": "sreedharmasasthatemple", "location": "Thiruvullakkavu , Thrissur", "onboarded": true },
    { "name": "Aalur Thiruthi Mahavishnu Kshetram", "slug": "aalurthiruthimahavishnu", "location": "Aalur, Thrissur", "onboarded": true },
    { "name": "Alkkalmanna Sri Danwanthari Temple", "slug": "alkkalmannasridanwanthari", "location": "Angadipuram", "onboarded": true },
    { "name": "Angadippuram Sree Manikkapuram Vishnu Temple", "slug": "angadippuramsreemanikkapuram", "location": "Angadippuram", "onboarded": true },
    { "name": "Aloorkkavu Bagavathi Temple", "slug": "aloorkkavubagavathitemple", "location": "Aloor, Thrissur", "onboarded": true },
    { "name": "Paingarappilly Sreekrishnapuram Kolamkulangarakkavu Temple", "slug": "paingarappillysreekrishnapuram", "location": "Mulanthuruthy, Ernakulam", "onboarded": true },
    { "name": "Sri Vaisravana (Kubera) Mahakshethram", "slug": "srivaisravanakubera", "location": "Cheriyaparappur", "onboarded": true },
    { "name": "Sree Mahalakshmi Temple, Chevoor", "slug": "sreemahalakshmitemple", "location": "Chevoor", "onboarded": true },
    { "name": "Avittathur Mahadeva Temple", "slug": "avittathurmahadevatemple", "location": "Avittathur , Irinjalakuda", "onboarded": true },
    { "name": "Ullannoor Sree Nagaraja Devi Temple", "slug": "ullannoorsreenagarajadevi", "location": "Injakkadu", "onboarded": true },
    { "name": "Nadakkal Mayilode Kavumoola Sree Nagaraja Temple", "slug": "mylode-nagarajatemple", "location": "Nadakkal Rd Kalluvathukal po 691578", "onboarded": true },
    { "name": "Paravur Puttingal Devi Temple", "slug": "paravurputtingaldevitemple", "location": "Paravur P.O", "onboarded": true },
    { "name": "Aazhimala Siva Kshethram", "slug": "aazhimalasivakshethram", "location": "Trivandrum", "onboarded": true },
    { "name": "Adimali Sree Bhagavathy Vaishnava Mahadeva Kshethram", "slug": "adimalisreebvmk", "location": "Adimali", "onboarded": true },
    { "name": "Amaramkavu Devi Temple", "slug": "amaramkavudevitemple", "location": "Kolani, Idukki", "onboarded": true },
    { "name": "Ananthancadu Sree Nagaraja Temple Trust", "slug": "ananthancadu", "location": "Trivandrum", "onboarded": true },
    { "name": "Brahma Temple Thirunavaya (Tavanoor)", "slug": "brahmatemplethavanur", "location": "Tavanoor", "onboarded": true },
    { "name": "Chandrappillil Devi Temple", "slug": "chandrappillildevitemple", "location": "West Kodikkulam", "onboarded": true },
    { "name": "Cheru Thirunavaya Temple", "slug": "cheruthirunavayatemple", "location": "Thavanoor", "onboarded": true },
    { "name": "Edavetty Sree Krishna Swami Temple", "slug": "edavetty-temple", "location": "Edavetty", "onboarded": true },
    { "name": "Idanattu Indalayappa Swamy Temple", "slug": "idanattuindalayappaswamytemple", "location": "Kurichy, Kottayam", "onboarded": true },
    { "name": "Kidangoor Sree Subrahmanya Swami Temple", "slug": "sreesubrahmanyaswamitemple", "location": "Kidangoor", "onboarded": true },
    { "name": "Kolani Sree Krishna Swamy Temple", "slug": "kolanisreekrishnaswamytemple", "location": "Kolani, Idukki", "onboarded": true },
    { "name": "Konchiravila Sree Bhagavathi Temple", "slug": "konchiravilasreebhagavathi", "location": "Trivandrum", "onboarded": true },
    { "name": "Koottumadom Sree Subramanya Swamy Temple", "slug": "koottumadomsreesubramanyaswami", "location": "Rayamangalam, Perumbavoor", "onboarded": true },
    { "name": "Kumaranaloor Devi Temple", "slug": "kumaranaloordevitemple", "location": "Kumaranaloor", "onboarded": true },
    { "name": "Muthaliyar Madom Sree Mahadeva Temple Thodupuzha", "slug": "muthaliarmadommahadevatemple", "location": "Thodupuzha, Idukki", "onboarded": true },
    { "name": "Paramelkavu Devi Kshethram", "slug": "paramelkavudevikshrethram", "location": "Munipara,  Idukki", "onboarded": true },
    { "name": "Perumparamba Sree Mahadeva Temple", "slug": "perumparambasreemahadeva", "location": "Edappal", "onboarded": true },
    { "name": "Sree Annapoorneswari Navagraha Bhadrakali Kshethram", "slug": "sreeannapoorneswarinavagraha", "location": "Thodupuzha", "onboarded": true },
    { "name": "Sree Mahadevan Temple, Kanjiramattom, Thodupuzha", "slug": "mahadevatemplekjm", "location": "Thodupuzha K", "onboarded": true },
    { "name": "Sree Purushamangalam Srikrishna Kshetram", "slug": "sreepurushamangalam", "location": "Kakkad, Piravom", "onboarded": true },
    { "name": "Sree Sundareswara Temple", "slug": "sreesundareswaratemple", "location": "Talap , Kannur", "onboarded": true },
    { "name": "Sudarsana Temple", "slug": "sudarsanatemple", "location": "Alathiyur", "onboarded": true },
    { "name": "Sudharma Sooryodhaya Sabha Sree Subrahmanya Swamy Temple", "slug": "sssabhathevara", "location": "Sudharma Junction, Thevara", "onboarded": true },
    { "name": "Suryakaladi Mahaganapathi Devasthanam", "slug": "suryakaladi", "location": "Kottayam", "onboarded": true },
    { "name": "Thattekkatt Sreekrishna Kshetram", "slug": "thattekkattsreekrishnatemple", "location": "Nettoor", "onboarded": true },
    { "name": "Thiruvumplavil Mahadeva Temple", "slug": "thiruvumplavilmahadevatemple", "location": "Anicadu, Muvattupuzha", "onboarded": true },
    { "name": "Thrikkayil Mahavishnu Kshetram", "slug": "thrikkayilmahavishnukshetram", "location": "Udumbanoor, Idukki", "onboarded": true },
    { "name": "Uravappara Sree Subramania Swamy Temple", "slug": "uravapparamalayalapazhani", "location": "Olamattom, Thodupuzha", "onboarded": true },
    { "name": "Varinjam Sree Mahadevar Temple", "slug": "varinjamsreemahadevartemple", "location": "Varinjam,  Chathanoor", "onboarded": true },
    { "name": "Venpalavattom Sree Bhagavathy Temple", "slug": "venpalavattomsreebhagavathy", "location": "Trivandrum", "onboarded": true },
  ],
  "Illams and Kudumbakshethrams": [
    { "name": "Umesh Vaidhyan Mudanthen Para", "slug": "umeshvaidhyanmudanthenpara", "location": "Abdurahman P, Palli Veettil, Mudanthen Para, Natakkal P.O., West Eleri, Kasaragod, Kerala \u2013 671533.", "onboarded": true },
  ],
};

// Flat view (category attached) used by the directory for search + display.
export const listings: CatalogueEntry[] = CATEGORIES.flatMap((category) =>
  catalogue[category].map((l) => ({ ...l, category })),
);
