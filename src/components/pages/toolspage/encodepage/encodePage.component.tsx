import { Link, useHref } from 'react-router-dom';
import { Card, Section } from '../../../containers';
import useEncodePage from './useEncodePage';
import { Button, NightModeToggle } from '../../../buttons';
import { FormTextArea } from '../../../inputs';
import FooterComponent from '../../../footer.component';
import HeaderComponent from '../../../header.component';
import useClipboard from '../../../../hooks/useClipboard.hook';

export default function EncodePage() {
  const { valueToEncode, encodedValue, decodeURL, isCopied, encodeValue, setValueToEncode, setIsCopied } =
    useEncodePage();
  const { copyToClipboard } = useClipboard();
  const encodePath = useHref('/tools/encode');

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-50 min-h-screen flex flex-col">
      <HeaderComponent ShowDescription={false} EnableLink={true} />
      <NightModeToggle />
      <Section className="flex flex-col flex-auto gap-4 py-10 px-4 fhd:px-10">
        <Section.Title>
          <Section.Title.Gradient>Encode Tool</Section.Title.Gradient>
        </Section.Title>
        <Section.Content className="flex flex-col gap-3 p-4 text-xl fhd:text-base">
          About this tool - a simple app that uses encoding method &quot;btoa&quot; with a mix of my custom character
          shifting algorithm.
          <a className="text-blue-500" href="https://developer.mozilla.org/en-US/docs/Web/API/Window/btoa">
            (see btoa)
          </a>
          How to use this tool:
          <ul className="list-inside list-disc flex flex-col gap-4">
            <li>
              In the <i>&quot;Message&quot;</i> Field, type in the message you want to encode
            </li>
            <li>
              Then click the <i>&quot;Encode my Message&quot;</i> button
            </li>
            <li>
              The encoded message will then be displayed on the <i>&quot;Encoded Message&quot;</i> Field
            </li>
            <li>
              This tool will also generate a <i>&quot;DECODE URL&quot;</i> that you can copy, and share
            </li>
            <li>
              You can click on <i>&quot;Go to URL&quot;</i> if you also want to see how to decode the encoded message
            </li>
            <li>
              TIP: you can also use the query string parameter <i>&quot;msg&quot;</i> in the URL{' '}
              <i>
                (example: {window.location.host + '/' + encodePath}?<b>msg</b>=your message here)
              </i>{' '}
              to prepopulate the Message field
            </li>
            <li>
              If you want to <b>Decode</b> a message go{' '}
              <Link to={'/tools/decode'} className="text-blue-500">
                Here
              </Link>
            </li>
          </ul>
        </Section.Content>
        <Section.Content className="fhd:p-8 text-xl fhd:text-base">
          <Card className="flex flex-col gap-5 p-6 fhd:p-8 bg-white dark:bg-gray-700">
            <FormTextArea
              name="txtMessage"
              label="Message:"
              defaultValue={valueToEncode}
              onChange={(evt) => setValueToEncode(evt.target.value)}
              placeholder="type in the message you want to encode here"
            ></FormTextArea>

            <div className="flex justify-center">
              <Button disabled={!!valueToEncode === false} onClick={encodeValue}>
                Encode my Message
              </Button>
            </div>

            <FormTextArea
              name="txtEncoded"
              label="Encoded Message:"
              value={encodedValue}
              placeholder="the encoded message will appear here"
              readOnly
            ></FormTextArea>

            {!!encodedValue === true && (
              <div className="flex flex-row flex-wrap items-center gap-1 p-1">
                DECODE URL: <code className="border border-gray-500 max-w-[80%] break-words p-1 m-1">{decodeURL}</code>
                <Button
                  className="bg-blue-700 text-white rounded-xl px-2 py-1"
                  onClick={() => copyToClipboard(decodeURL).then(() => setIsCopied(true))}
                >
                  {isCopied ? 'copied!' : 'copy URL'}
                </Button>
                <Link
                  className="bg-blue-700 text-white rounded-xl px-2 py-1"
                  to={{
                    pathname: '/tools/decode',
                    search: `?cipher=${encodedValue}`
                  }}
                >
                  Go to URL
                </Link>
              </div>
            )}
          </Card>
        </Section.Content>
      </Section>
      <FooterComponent />
    </div>
  );
}
