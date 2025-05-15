import { Link } from 'react-router-dom';
import { Card, Section } from '../../../containers';
import useDecodePage from './useDecodePage';
import { FormTextArea } from '../../../inputs';
import { Button, NightModeToggle } from '../../../buttons';
import HeaderComponent from '../../../header.component';
import FooterComponent from '../../../footer.component';

export default function DecodePage() {
  const { valueToDecode, decodedValue, setValueToDecode, decodeValue } = useDecodePage();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-50 flex flex-col">
      <HeaderComponent ShowDescription={false} EnableLink={true} />
      <NightModeToggle />
      <Section className="flex flex-col gap-4 p-10">
        <Section.Title>
          <Section.Title.Gradient> Decode Tool</Section.Title.Gradient>
        </Section.Title>
        <Section.Content className="flex flex-col gap-3 p-4">
          About this tool - a simple app that uses decoding method &quot;atob&quot; with a mix of my custom character
          shifting algorithm, which means this can only decode data encoded by my encoding tool that utilizes the same
          algorithm.
          <a className="text-blue-500" href="https://developer.mozilla.org/en-US/docs/Web/API/Window/atob">
            (see atob)
          </a>
          How to use this tool:
          <ul className="list-inside list-disc">
            <li>
              In the <i>&quot;Encoded Message&quot;</i> Field, type in the message you want to decode
            </li>
            <li>
              Then click the <i>&quot;Decode hidden message&quot;</i> button
            </li>
            <li>
              The decoded message will then be displayed on the <i>&quot;Hidden Message&quot;</i> Field
            </li>
            <li>
              TIP: you can also use the query string parameter <i>&quot;cipher&quot;</i> in the URL{' '}
              <i>
                (example: psaliente.github.io/tools/decode?<b>cipher</b>=your message here)
              </i>{' '}
              to prepopulate the Message field
            </li>
            <li>
              If you want to <b>Encode</b> a message go{' '}
              <Link to={'/tools/encode'} className="text-blue-500">
                Here
              </Link>
            </li>
          </ul>
        </Section.Content>
        <Section.Content className="p-8">
          <Card className="flex flex-col gap-5 p-8 bg-white dark:bg-gray-700">
            <FormTextArea
              label="Encoded Message:"
              name="txtMessage"
              defaultValue={valueToDecode}
              onChange={(evt) => setValueToDecode(evt.target.value)}
              placeholder="type in or paste the encoded message you want to decode here"
            ></FormTextArea>

            <div className="flex justify-center">
              <Button disabled={!!valueToDecode === false} onClick={decodeValue}>
                Decode hidden message
              </Button>
            </div>

            <FormTextArea
              label="Hidden Message:"
              name="txtEncoded"
              value={decodedValue}
              placeholder="the hidden message will appear here"
              readOnly
            ></FormTextArea>
          </Card>
        </Section.Content>
      </Section>
      <FooterComponent />
    </div>
  );
}
