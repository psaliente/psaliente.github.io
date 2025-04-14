import { SECTIONS } from '../../../constants';
import {
  aics6SVG,
  apgSVG,
  azuredevopsSVG,
  expoSVG,
  githubSVG,
  jiraSVG,
  mongodbSVG,
  mssqlSVG,
  oracleSVG,
  postmanSVG,
  powerappSVG,
  powerautomateSVG,
  pscs6SVG,
  spSVG,
  viteSVG,
  vscodeSVG
} from '../../../assets/images';
import { Card, Section } from '../../containers';

export default function ProgTools() {
  const { TITLE, SUBTITLE } = SECTIONS.PROGTOOLS;

  return (
    <Section className="z-10 bg-white flex flex-col gap-8 px-10 py-12 shadow-lg">
      <Section.Title className="text-gray-500 font-thin break-words">
        <Section.Title.Gradient>{TITLE}</Section.Title.Gradient>
        {SUBTITLE}
      </Section.Title>
      <Section.Content className="flex flex-row flex-wrap p-4 hd:p-8 gap-6 justify-center">
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <img src={pscs6SVG} className="h-20" alt="Adobe Photoshop Logo" />
        </Card>
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <img src={aics6SVG} className="h-20" alt="Adobe Illustrator Logo" />
        </Card>
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <a href="https://apigee.com/">
            <img src={apgSVG} className="h-20" alt="apigee Logo" />
          </a>
        </Card>
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <a href="https://dev.azure.com/">
            <img src={azuredevopsSVG} className="h-20" alt="Azure DevOps Logo" />
          </a>
        </Card>
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <a href="https://expo.dev/">
            <img src={expoSVG} className="h-20" alt="Expo Logo" />
          </a>
        </Card>
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <a href="https://github.com/">
            <img src={githubSVG} className="h-20" alt="GitHub Logo" />
          </a>
        </Card>
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <a href="https://www.atlassian.com/software/jira">
            <img src={jiraSVG} className="h-20" alt="Jira Logo" />
          </a>
        </Card>
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <a href="https://www.mongodb.com">
            <img src={mongodbSVG} className="h-20" alt="MongoDB Logo" />
          </a>
        </Card>
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <a href="https://www.microsoft.com/en-us/sql-server">
            <img src={mssqlSVG} className="h-20" alt="MS SQL Logo" />
          </a>
        </Card>
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <a href="https://www.oracle.com/database/">
            <img src={oracleSVG} className="h-20" alt="Oracle RDBMS Logo" />
          </a>
        </Card>
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <a href="https://www.postman.com/">
            <img src={postmanSVG} className="h-20" alt="Postman Logo" />
          </a>
        </Card>
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <a href="https://make.powerapps.com/">
            <img src={powerappSVG} className="h-20" alt="Power Apps Logo" />
          </a>
        </Card>
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <a href="https://make.powerautomate.com/">
            <img src={powerautomateSVG} className="h-20" alt="Power Automate Logo" />
          </a>
        </Card>
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <a href="https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration">
            <img src={spSVG} className="h-20" alt="SharePoint Logo" />
          </a>
        </Card>
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <a href="https://vite.dev/">
            <img src={viteSVG} className="h-20" alt="Vite Logo" />
          </a>
        </Card>
        <Card className="content-center p-6 rounded-xl bg-slate-200">
          <a href="https://code.visualstudio.com/">
            <img src={vscodeSVG} className="h-20" alt="VS Code Logo" />
          </a>
        </Card>
      </Section.Content>
      <Section.Content className="text-2xl md:text-3xl font-[SourceCodePro] text-gray-500 text-center m-4">
        From designing svg images to writing my codes. From the front-end to the back-end. From development to
        deployment. I have been using these tools and platforms to help me become more productive with my work and
        deliver my projects on-time.
      </Section.Content>
    </Section>
  );
}
