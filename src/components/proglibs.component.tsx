import { angularSVG, apgSVG, bootstrapSVG, dotnetSVG, koSVG, nodeSVG, reactNativeSVG, reactSVG, tailwindSVG } from "../assets/images";
import { SECTIONS } from "../constants";
import { Card, Section } from "./containers";

export default function ProgLibraries() {
  const {TITLE, SUBTITLE} = SECTIONS.PROGLIBS;

    return <Section className="z-10 flex flex-col px-10 py-12 " >
        <Section.Title className="text-gray-500 font-thin">
            <Section.Title.Gradient>{TITLE}</Section.Title.Gradient>
            {SUBTITLE}
        </Section.Title>
        <Section.Content className="flex flex-row flex-wrap p-4 hd:p-8 gap-6 justify-center">
            <Card className="content-center p-6 rounded-xl bg-gray-50">
                <a href="https://dotnet.microsoft.com/en-us/">
                    <img src={dotnetSVG} className="h-20" alt=".Net Logo"/>
                </a>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-gray-50">
                <a href="https://angular.dev/">
                    <img src={angularSVG} className="h-20" alt="Angular Logo"/>
                </a>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-gray-50">
                <a href="https://getbootstrap.com/">
                    <img src={bootstrapSVG} className="h-20" alt="Bootstrap CSS Logo"/>
                </a>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-gray-50">
                <a href="https://knockoutjs.com/">
                    <img src={koSVG} className="h-20" alt="KnockOut JS Logo"/>
                </a>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-gray-50">
                <a href="https://nodejs.org/en">
                    <img src={nodeSVG} className="h-20" alt="NodeJS Logo"/>
                </a>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-gray-50">
                <a href="https://react.dev/">
                    <img src={reactSVG} className="h-20" alt="ReactJS Logo"/>
                </a>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-gray-50">
                <a href="https://reactnative.dev/">
                    <img src={reactNativeSVG} className="h-20" alt="React Native Logo"/>
                </a>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-gray-50">
                <a href="https://tailwindcss.com/">
                    <img src={tailwindSVG} className="h-20" alt="Tailwind CSS Logo"/>
                </a>
            </Card>
        </Section.Content>
    </Section>
}