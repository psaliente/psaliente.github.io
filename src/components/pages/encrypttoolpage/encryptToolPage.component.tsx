import { Section } from '../../containers';
import FooterComponent from '../../footer.component';
import HeaderComponent from '../../header.component';
import useEncryptionToolPage from './useEncryptionToolPage';

export default function EncryptToolPage() {
  const { setEncKey, setEncMsg, EncryptMessage, encResult, isLoading } = useEncryptionToolPage();

  return (
    <div className="flex flex-col bg-gray-100">
      <HeaderComponent EnableLink={true} ShowDescription={false} />
      <Section className="p-10">
        <Section.Title>Encryption Tool</Section.Title>
        <Section.Content className="flex flex-col">
          <label htmlFor="encKey">Encryption Key</label>
          <input type="text" name="encKey" onChange={(evt) => setEncKey(evt.target.value)}></input>
          <label htmlFor="encMsg">Message to be encrypted</label>
          <textarea name="encMsg" onChange={(evt) => setEncMsg(evt.target.value)}></textarea>
          <button className="bg-blue-500 px-4 py-3 text-white hover:bg-blue-400" onClick={() => EncryptMessage()}>
            Encrypt Message
          </button>
          <p>Encryption Result</p>
          <p className="border-gray-300">{isLoading ? 'encrypting your message' : encResult}</p>
        </Section.Content>
      </Section>
      <FooterComponent />
    </div>
  );
}
