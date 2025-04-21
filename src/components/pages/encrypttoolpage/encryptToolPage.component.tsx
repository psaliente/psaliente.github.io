import { Section } from '../../containers';
import FooterComponent from '../../footer.component';
import HeaderComponent from '../../header.component';

export default function EncryptToolPage() {
  return (
    <div className="flex flex-col bg-gray-100">
      <HeaderComponent EnableLink={true} ShowDescription={false} />
      <Section className="p-10">
        <Section.Title>Encryption Tool</Section.Title>
        <Section.Content>
          <p>This will become the page dedicated for my encryption tool</p>
        </Section.Content>
      </Section>
      <FooterComponent />
    </div>
  );
}
