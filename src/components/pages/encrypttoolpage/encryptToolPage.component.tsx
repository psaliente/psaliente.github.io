import { Section } from '../../containers';
import FooterComponent from '../../footer.component';
import HeaderComponent from '../../header.component';

export default function EncryptToolPage() {
  return (
    <>
      <HeaderComponent />
      <Section className="p-10">
        <Section.Title>Encryption Tool</Section.Title>
        <Section.Content>
          <p>This will become the page dedicated for my encryption tool</p>
        </Section.Content>
      </Section>
      <FooterComponent />
    </>
  );
}
