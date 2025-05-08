import { TiMessageTyping } from "react-icons/ti";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import Form from "./Form";

export default function ContactPage() {
  return (
    <main className="w-full  m-0 py-15 grid grid-cols-2 gap-10">
      <section className="flex items-center justify-start flex-col gap-20 uppercase">
        <div
          className="flex w-full justify-evenly flex-col gap-10
       text-2xl"
        >
          <h1>Chcesz porozmawiać o projekcie?</h1>
          <p className="inline-flex space-x-2">
            <span>Pozostańmy w kontakcie </span>
            <TiMessageTyping className="text-2xl " />
          </p>
        </div>
        <div className="w-full  m-0 grid grid-cols-2 grid-rows-2 gap-5">
          <p>Napisz</p>
          <p>Odwiedź</p>
          <a
            className="lowercase text-[var(--color-muted)] hover:text-gray-500"
            href="mailto:przemyslaw.przybylak2@gmail.com"
          >
            przemyslaw.przybylak2@gmail.com
          </a>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://github.com/Przemek-Przybylak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 hover:text-gray-800" />
            </a>
            <a
              href="https://www.linkedin.com/in/przemekprzybylak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6 text-blue-300 hover:text-blue-400" />
            </a>
            <a
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiVercel className="w-6 h-6 text-black hover:text-gray-800" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2 className="text-2xl">Formularz Kontaktowy</h2>
          <Form />
        </div>
      </section>
    </main>
  );
}
