import { Hero } from "@/components/hero";
import { Directory } from "@/components/directory";

const Home = () => (
  <>
    <Hero />

    {/* Directory + footer */}
    <section
      id="find"
      className="flex scroll-mt-10 justify-center px-6 pb-20 sm:px-10"
    >
      <div className="w-full max-w-2xl">
        <Directory />

        {/* Footer */}
        <div className="mt-16 flex items-center gap-2 border-t border-border pt-6 text-sm text-muted">
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
          />
          <span>Parinaamaa — the new home for Ellam temples &amp; services.</span>
        </div>
      </div>
    </section>
  </>
);

export default Home;
