"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Button from "../Button/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="md:flex flex-row w-full h-full items-end mt-[5px] md:mt-0">
      <section className="flex-1 flex justify-center self-center order-2">
        <Image
          src="/images/cvPhoto.png"
          alt="Zdjęcie autora"
          width={300}
          height={200}
          className="rounded-xl border-4 border-white/10 shadow-xl transition-all hover:border-white/20 backdrop-blur-lg"
        />
      </section>
      <section className="flex-1 self-center ">
        <h1 className="md:min-h-[200px] leading-tight text-[40px] md:text-[5vw] uppercase font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-muted)] bg-clip-text text-transparent">
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
        </h1>
        <p className="mt-6 md: md:text:1xl text-[15px]">
          Jestem początkującym frontend developerem z solidnymi podstawami w
          React i silnym naciskiem na dobre praktyki. Obecnie rozwijam swoje
          umiejętności w Next.js i TypeScript, budując projekty z wykorzystaniem
          Tailwind CSS, Styled Components, Redux (w tym Redux-Saga), obsługi API
          (Fetch, Axios) i zarządzania błędami. Tworzę aplikacje z naciskiem na
          jakość kodu, czytelność i doświadczenie użytkownika. Uczę się szybko,
          pracuję samodzielnie i jestem gotowy dołączyć do zespołu, by rozwijać
          się dalej w środowisku produkcyjnym.
        </p>
        <Button>
          <Link key="portfolio" href="/portfolio">
            Zobacz Projekty
          </Link>
        </Button>
      </section>
    </div>
  );
}
