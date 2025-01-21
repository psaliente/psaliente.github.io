import { SECTIONS } from '../constants';
import { Card, Section } from './containers';

export default function ProgLangs() {
  const { TITLE, SUBTITLE, ITEMS } = SECTIONS.PROGLANGS;

  return (
    <Section className="z-10 bg-white flex flex-col gap-8 px-10 py-12 shadow-lg">
      <Section.Title className="text-gray-500 font-thin">
        <Section.Title.Gradient>{TITLE}</Section.Title.Gradient>
        {SUBTITLE}
      </Section.Title>
      <Section.Content className="flex flex-row flex-wrap p-4 hd:p-8 gap-6 justify-center">
        {ITEMS.map(({ IMG_ALT, IMG_SRC, URL }) => (
          <Card key={IMG_ALT} className="content-center p-6 rounded-xl bg-slate-200">
            <a href={URL}>
              <img src={IMG_SRC} className="h-20" alt={IMG_ALT} />
            </a>
          </Card>
        ))}
      </Section.Content>
    </Section>
  );
}
