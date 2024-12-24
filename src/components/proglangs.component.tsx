import { csharpSVG, cssSVG, html5SVG, jsSVG, sqlSVG, tsSVG } from "../assets/images";
import { Card, Section } from "./containers";

export default function ProgLangs() {
    return <Section className="z-10 bg-white flex flex-col px-10 py-12 shadow-lg">
        <Section.Title>Languages</Section.Title>
        <Section.Content className="flex flex-row flex-wrap p-4 hd:p-8 gap-6 justify-center">
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <img src={csharpSVG} className="h-20" alt="C# Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <img src={cssSVG} className="h-20" alt="CSS Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <img src={jsSVG} className="h-20" alt="JavaScript Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <img src={html5SVG} className="h-20" alt="HTML5 Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <img src={sqlSVG} className="h-20" alt="SQL Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <img src={tsSVG} className="h-20" alt="TypeScript Logo"/>
            </Card>
        </Section.Content>
    </Section>
}