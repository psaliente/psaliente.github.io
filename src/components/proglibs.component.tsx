import { angularSVG, apgSVG, bootstrapSVG, dotnetSVG, koSVG, nodeSVG, reactSVG, tailwindSVG } from "../assets/images";
import { Card, Section } from "./containers";

export default function ProgLibraries() {
    return <Section className="z-10 flex flex-col px-10 py-12 " >
        <Section.Title>Libraries and Frameworks</Section.Title>
        <Section.Content className="flex flex-row flex-wrap p-4 hd:p-8 gap-6 justify-center">
            <Card className="content-center p-6 rounded-xl bg-gray-50">
                <img src={dotnetSVG} className="h-20" alt=".Net Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-gray-50">
                <img src={angularSVG} className="h-20" alt="Angular Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-gray-50">
                <img src={bootstrapSVG} className="h-20" alt="Bootstrap CSS Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-gray-50">
                <img src={koSVG} className="h-20" alt="KnockOut JS Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-gray-50">
                <img src={nodeSVG} className="h-20" alt="KnockOut JS Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-gray-50">
                <img src={reactSVG} className="h-20" alt="ReactJS Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-gray-50">
                <img src={tailwindSVG} className="h-20" alt="Tailwind CSS Logo"/>
            </Card>
        </Section.Content>
    </Section>
}