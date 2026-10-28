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

// Published microsites on naamaa.in (business_entity, published = TRUE).
export const catalogue: Record<Category, Listing[]> = {
  Temple: [
    { "name": "Mithranandapuram Sree Vamanamoorthy Temple", "slug": "sreevamanamoorthy-temple", "location": "Perumbillissery, Thrissur", "onboarded": true, "ellam_slugs": "MithranandapuramVamanamoorthy" },
    { "name": "Aalur Thiruthi Mahavishnu Kshetram", "slug": "aalurthiruthimahavishnu", "location": "Aalur, Thrissur", "onboarded": true, "ellam_slugs": "AalurThiruthiMahavishnu" },
    { "name": "Aloorkkavu Bagavathi Temple", "slug": "aloorkkavubagavathitemple", "location": "Aloor, Thrissur", "onboarded": true, "ellam_slugs": "Aloorkkavubagavathi" },
    { "name": "Sree Mahalakshmi Temple, Chevoor", "slug": "sreemahalakshmitemple", "location": "Chevoor", "onboarded": true, "ellam_slugs": "SreeMahalakshmi" },
    { "name": "Nadakkal Mayilode Kavumoola Sree Nagaraja Temple", "slug": "mylode-nagarajatemple", "location": "Nadakkal Rd Kalluvathukal po 691578", "onboarded": true },
    { "name": "Paravur Puttingal Devi Temple", "slug": "puttingaldevi", "location": "Paravur P.O", "onboarded": true },
    { "name": "Ananthancadu Sree Nagaraja Temple Trust", "slug": "ananthancadu", "location": "Trivandrum", "onboarded": true, "ellam_slugs": "ananthancadu" },
    { "name": "Edavetty Sree Krishna Swami Temple", "slug": "edavetty-temple", "location": "Edavetty", "onboarded": true, "ellam_slugs": "edavettykrishnaswami" },
    { "name": "Kumaranaloor Devi Temple", "slug": "kumaranaloordevitemple", "location": "Kumaranaloor", "onboarded": true, "ellam_slugs": "kumaranallordevitemple" },
    { "name": "Perumparamba Sree Mahadeva Temple", "slug": "perumparambasreemahadeva", "location": "Edappal", "onboarded": true, "ellam_slugs": "perumparampamahadeva" },
    { "name": "Sree Annapoorneswari Navagraha Bhadrakali Kshethram", "slug": "sreeannapoorneswarinavagraha", "location": "Thodupuzha", "onboarded": true, "ellam_slugs": "sreeannapoorneswari" },
    { "name": "Sree Mahadevan Temple, Kanjiramattom, Thodupuzha", "slug": "mahadevatemplekjm", "location": "Thodupuzha K", "onboarded": true, "ellam_slugs": "kanjiramattomtemple" },
    { "name": "Suryakaladi Mahaganapathi Devasthanam", "slug": "suryakaladi", "location": "Kottayam", "onboarded": true, "ellam_slugs": "suryakaladi" },
    { "name": "Thiruvumplavil Mahadeva Temple", "slug": "thiruvumplavilmahadevatemple", "location": "Anicadu, Muvattupuzha", "onboarded": true, "ellam_slugs": "thiruvamplaviltemple" },
  ],
  "Illams and Kudumbakshethrams": [
    { "name": "Umesh Vaidhyan Mudanthen Para", "slug": "umeshvaidhyanmudanthenpara", "location": "Abdurahman P, Palli Veettil, Mudanthen Para, Natakkal P.O., West Eleri, Kasaragod, Kerala \u2013 671533.", "onboarded": true },
  ],
};

// Flat view (category attached) used by the directory for search + display.
export const listings: CatalogueEntry[] = CATEGORIES.flatMap((category) =>
  catalogue[category].map((l) => ({ ...l, category })),
);
