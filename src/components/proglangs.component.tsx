import { csharpSVG, cssSVG, html5SVG, jsSVG, sqlSVG, tsSVG } from '../assets/images';
import { SECTIONS } from '../constants';
import { Card, Section } from './containers';

export default function ProgLangs() {
  const { TITLE, SUBTITLE } = SECTIONS.PROGLANGS;

  return (
    <Section className="z-10 bg-white flex flex-col gap-8 px-10 py-12 shadow-lg">
      <Section.Title className="text-gray-500 font-thin">
        <Section.Title.Gradient>{TITLE}</Section.Title.Gradient>
        {SUBTITLE}
      </Section.Title>
      <Section.Content className="flex flex-row flex-wrap p-4 hd:p-8 gap-6 justify-center">
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <a href="https://learn.microsoft.com/en-us/dotnet/csharp/">
            <img src={csharpSVG} className="h-20" alt="C# Logo" />
          </a>
        </Card>
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <a href="https://www.w3.org/Style/CSS/Overview.en.html">
            <img src={cssSVG} className="h-20" alt="CSS Logo" />
          </a>
        </Card>
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <a href="https://www.javascript.com/">
            <img src={jsSVG} className="h-20" alt="JavaScript Logo" />
          </a>
        </Card>
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <a href="https://html.com/">
            <img src={html5SVG} className="h-20" alt="HTML5 Logo" />
          </a>
        </Card>
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <a href="https://www.iso.org/standard/76583.html">
            <img src={sqlSVG} className="h-20" alt="SQL Logo" />
          </a>
        </Card>
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <a href="https://www.typescriptlang.org/">
            <img src={tsSVG} className="h-20" alt="TypeScript Logo" />
          </a>
        </Card>
      </Section.Content>
    </Section>
  );
}
