import { aics6SVG, apgSVG, expoSVG, githubSVG, jiraSVG, mongodbSVG, mssqlSVG, oracleSVG, postmanSVG, powerappSVG, powerautomateSVG, pscs6SVG, spSVG, viteSVG, vscodeSVG } from "../assets/images";
import { Card, Section } from "./containers";

export default function ProgTools() {
    return <Section className="z-10 bg-white flex flex-col px-10 py-12 shadow-lg">
        <Section.Title>Tools and Platforms</Section.Title>
        <Section.Content className="flex flex-row flex-wrap p-4 hd:p-8 gap-6 justify-center">
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <img src={pscs6SVG} className="h-20" alt="Adobe Photoshop Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <img src={aics6SVG} className="h-20" alt="Adobe Illustrator Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <a href="https://apigee.com/">
                    <img src={apgSVG} className="h-20" alt="apigee Logo"/>
                </a>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <img src={expoSVG} className="h-20" alt="Expo Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <img src={githubSVG} className="h-20" alt="GitHub Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <img src={jiraSVG} className="h-20" alt="Jira Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <img src={mongodbSVG} className="h-20" alt="MongoDB Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <img src={mssqlSVG} className="h-20" alt="MS SQL Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <img src={oracleSVG} className="h-20" alt="Oracle RDBMS Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <img src={postmanSVG} className="h-20" alt="Postman Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <img src={powerappSVG} className="h-20" alt="Power Apps Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <img src={powerautomateSVG} className="h-20" alt="Power Automate Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <img src={spSVG} className="h-20" alt="SharePoint Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <img src={viteSVG} className="h-20" alt="VS Code Logo"/>
            </Card>
            <Card className="content-center p-6 rounded-xl bg-slate-200">
                <img src={vscodeSVG} className="h-20" alt="VS Code Logo"/>
            </Card>
        </Section.Content>
    </Section>
}