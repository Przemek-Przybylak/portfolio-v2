import Image from "next/image";

const technologies = [
  {
    name: "React",
    icon: "/images/React.png",
    description:
      "React => Tworzę komponenty interfejsu użytkownika, korzystając z hooków, Context API oraz Framer Motion.",
  },
  {
    name: "Next.js",
    icon: "/images/Next.js.png",
    description:
      "Next.js => Buduję aplikacje SSR i SPA z użyciem App Routera, layoutów, dynamicznych routingów i ISR.",
  },
  {
    name: "JavaScript",
    icon: "/images/JavaScript.png",
    description:
      "Javascript => Język podstawowy, którego używam do budowania interakcji, logiki aplikacji i manipulacji danymi.",
  },
  {
    name: "TypeScript",
    icon: "/images/TypeScript.png",
    description:
      "Typescript => Typuję komponenty, API, propsy i funkcje — ułatwia to utrzymanie większych projektów.",
  },
  {
    name: "Node.js",
    icon: "/images/Node.js.png",
    description:
      "Node.js => Używam do budowania backendu, obsługi API, autoryzacji i komunikacji z bazą danych.",
  },
  {
    name: "Redux",
    icon: "/images/Redux.png",
    description:
      "Redux => Stosuję do globalnego zarządzania stanem w większych aplikacjach Reactowych.",
  },
  {
    name: "Tailwind CSS",
    icon: "/images/Tailwind CSS.png",
    description:
      "Tailwind => Używam do szybkie stylowanie interfejsu z pomocą utility-first CSS.",
  },
  {
    name: "Styled Components",
    icon: "/images/Stylus.png",
    description:
      "Styled-Components => Styluję komponenty przy użyciu CSS-in-JS, z naciskiem na czystość kodu i reużywalność.",
  },
  {
    name: "Sass",
    icon: "/images/SASS.png",
    description:
      "SAAS => Używam głównie do stylowania komponentów w projektach legacy lub tam, gdzie Tailwind nie pasuje.",
  },
  {
    name: "Figma",
    icon: "/images/Figma.png",
    description:
      "Figma => Używam do idealnego odwzorowywania projektów graficznych w kodzie.",
  },
];

export default function TechPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Mój Stack Technologiczny</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="bg-[var(--color-light)] rounded-xl shadow p-4 text-center 
            hover:shadow-lg transition hover:scale-105"
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={64}
              height={64}
              className="mx-auto mb-2"
            />
            <h2 className="font-semibold text-lg">{tech.name}</h2>
            <p className="text-sm text-gray-600 mt-2">{tech.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
