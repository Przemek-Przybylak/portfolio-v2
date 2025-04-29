"use client";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <div className="flex flex-row w-full h-full items-end">
      <section className="flex-1 self-center">
        {/* Kontener nagłówka z gradientem i odpowiednim formatowaniem */}
        <h2 className="min-h-[180px] leading-tight text-[9vw] md:text-[70px] uppercase font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-muted)] bg-clip-text text-transparent">
          <span style={{ whiteSpace: "pre-line" }}>
            <Typewriter
              words={["Frontend\nDeveloper"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={120}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="mt-6 text-3">
          Jestem początkującym frontend developerem z solidnymi podstawami w
          React i silnym naciskiem na dobre praktyki. Obecnie rozwijam swoje
          umiejętności w Next.js i TypeScript, budując projekty z wykorzystaniem
          Tailwind CSS, Styled Components, Redux (w tym Redux-Saga), obsługi API
          (Fetch, Axios) i zarządzania błędami. Tworzę aplikacje z naciskiem na
          jakość kodu, czytelność i doświadczenie użytkownika. Uczę się szybko,
          pracuję samodzielnie i jestem gotowy dołączyć do zespołu, by rozwijać
          się dalej w środowisku produkcyjnym.
        </p>
        <button className="mt-4">Sprawdź moje projekty</button>
      </section>
      <section className="flex-1">
        <div>picture</div>
      </section>
    </div>
  );
}
