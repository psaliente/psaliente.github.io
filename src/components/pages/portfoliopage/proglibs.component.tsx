import { SECTIONS } from '../../../constants';
import { Card, Section } from '../../containers';

export default function ProgLibraries() {
  const { TITLE, SUBTITLE, ITEMS } = SECTIONS.PROGLIBS;

  return (
    <Section className="z-10 flex flex-col gap-8 px-10 py-12 ">
      <Section.Title className="text-gray-500 dark:text-gray-100 font-thin break-words">
        <Section.Title.Gradient>{TITLE}</Section.Title.Gradient>
        {SUBTITLE}
      </Section.Title>
      <Section.Content className="flex flex-row flex-wrap p-4 hd:p-8 gap-6 justify-center">
        {ITEMS.map(({ IMG_ALT, IMG_SRC, URL }) => (
          <a key={IMG_ALT} href={URL} target="_blank" rel="noreferrer">
            <Card className="content-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 transition delay-300 duration-500 hover:scale-[1.1]">
              <img src={IMG_SRC} className="h-20" alt={IMG_ALT} />
            </Card>
          </a>
        ))}
      </Section.Content>
      <Section.Content className="text-2xl md:text-3xl font-[SourceCodePro] text-gray-500 dark:text-gray-100 text-center m-4">
        <p>
          Apart from these, I also keep myself updated by trying out new and other popular libraries and framework
          regardless if I may or may not be using them on current or future projects.
        </p>
        <br />
        <p>
          Whenever I am not busy with my current projects, I explore and refresh my programming skills and knowledge by
          following roadmaps in{' '}
          <a className="text-blue-600" href="https://roadmap.sh">
            ROADMAPS.SH
          </a>
        </p>
      </Section.Content>
    </Section>
  );
}
