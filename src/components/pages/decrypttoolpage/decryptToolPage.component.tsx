import { Section } from '../../containers';
import FooterComponent from '../../footer.component';
import HeaderComponent from '../../header.component';

export default function DecryptToolPage() {
  return (
    <>
      <HeaderComponent EnableLink={true} ShowDescription={false} />
      <Section className="p-10">
        <Section.Title>Decryption Tool</Section.Title>
        <Section.Content>
          <p>This will become the page dedicated for my decryption tool</p>
        </Section.Content>
      </Section>
      <FooterComponent />
    </>
  );
}
