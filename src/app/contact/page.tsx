import { TiMessageTyping } from "react-icons/ti";

export default function ContactPage() {
  return (
    <main className="w-full  m-0 py-20 grid grid-cols-2 gap-10">
      <section className="flex items-center justify-center flex-col gap-20 uppercase">
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
            className="lowercase"
            href="mailto:przemyslaw.przybylak2@gmail.com"
          >
            przemyslaw.przybylak2@gmail.com
          </a>
          <p>contact</p>
        </div>
      </section>
      <section className="w-1/2 ">form</section>
    </main>
  );
}
