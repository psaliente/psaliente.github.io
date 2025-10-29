import { SECTIONS } from '../../../constants';
import { Card, Section } from '../../containers';

export default function ProgLangs() {
  const { TITLE, SUBTITLE, ITEMS } = SECTIONS.PROGLANGS;

  return (
    <Section className="z-10 bg-white dark:bg-gray-800 flex flex-col gap-8 px-10 py-12 shadow-lg dark:shadow-gray-600 transition delay-300 duration-500">
      <Section.Title className="text-gray-500 dark:text-gray-100 transition delay-300 duration-500 font-thin break-words">
        <Section.Title.Gradient>{TITLE}</Section.Title.Gradient>
        {SUBTITLE}
      </Section.Title>
      <Section.Content className="flex flex-row flex-wrap p-4 hd:p-8 gap-6 justify-center">
        {ITEMS.map(({ IMG_ALT, IMG_SRC, URL }) => (
          <a key={IMG_ALT} href={URL} target="_blank" rel="noreferrer">
            <Card className="content-center p-6 rounded-xl bg-slate-200 dark:bg-slate-700 transition delay-300 duration-500 hover:scale-[1.1]">
              <img src={IMG_SRC} className="h-20" alt={IMG_ALT} />
            </Card>
          </a>
        ))}
      </Section.Content>
      <Section.Content className="text-2xl md:text-3xl font-[SourceCodePro] text-gray-500 dark:text-gray-100 transition delay-300 duration-500 text-center">
        Aside from the above that I am actively using on my recent projects, I also had knowledge and past experience in
        writing codes using:
        <ul className="list-disc list-inside flex flex-row flex-wrap gap-x-8 justify-center m-4">
          <li>YAML</li>
          <li>PowerFX</li>
          <li>CAML Query</li>
          <li>PHP</li>
          <li>JAVA</li>
          <li>Visual Basic 6</li>
          <li>Turbo C</li>
          <li>Batch</li>
        </ul>
      </Section.Content>
    </Section>
  );
}
