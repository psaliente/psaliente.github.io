import { SECTIONS } from '../../../constants';
import { Card, Section } from '../../containers';

export default function ProgTools() {
  const { TITLE, SUBTITLE, ITEMS } = SECTIONS.PROGTOOLS;

  return (
    <Section className="z-10 bg-white dark:bg-gray-800 flex flex-col gap-8 px-10 py-12 shadow-lg dark:shadow-gray-600">
      <Section.Title className="text-gray-500 dark:text-gray-100 font-thin break-words">
        <Section.Title.Gradient>{TITLE}</Section.Title.Gradient>
        {SUBTITLE}
      </Section.Title>
      <Section.Content className="flex flex-row flex-wrap p-4 hd:p-8 gap-6 justify-center">
        {ITEMS.map(({ IMG_ALT, IMG_SRC, URL }) => (
          <Card key={IMG_ALT} className="content-center p-6 rounded-xl bg-slate-200 dark:bg-slate-700">
            <a href={URL}>
              <img src={IMG_SRC} className="h-20" alt={IMG_ALT} />
            </a>
          </Card>
        ))}
      </Section.Content>
      <Section.Content className="text-2xl md:text-3xl font-[SourceCodePro] text-gray-500 dark:text-gray-100 text-center m-4">
        From designing svg images to writing my codes. From the front-end to the back-end. From development to
        deployment. I have been using these tools and platforms to help me become more productive with my work and
        deliver my projects on-time.
      </Section.Content>
    </Section>
  );
}
