import { TiMessageTyping } from "react-icons/ti";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { MdOutlinePhoneAndroid } from "react-icons/md";

export default function ContactPage() {
  return (
    <main className="w-full  m-0 py-15 flex gap-10">
      <section className="flex items-center justify-start flex-col gap-20 uppercase">
        <div
          className="flex w-full justify-evenly flex-col gap-10
       text-2xl"
        >
          <div className="inline-flex space-x-2">
            <h1>Chcesz porozmawiać o projekcie?</h1>
            <TiMessageTyping className="text-2xl " />
          </div>
        </div>
        <div className="w-full m-0 grid grid-flow-col grid-rows-2 auto-cols-max gap-5">
          <p>Napisz</p>
          <a
            className="lowercase text-[var(--color-muted)] hover:text-gray-500"
            href="mailto:przemyslaw.przybylak2@gmail.com"
          >
            przemyslaw.przybylak2@gmail.com
          </a>
          <p>Odwiedź</p>
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
          <p>Zadzoń</p>

          <a href="tel:+48519738092" target="_blank" rel="noopener noreferrer">
            <MdOutlinePhoneAndroid className="w-6 h-6 text-3xl text-[var(--color-accent)] hover:text-gray-800" />
          </a>
        </div>
      </section>
    </main>
  );
}
