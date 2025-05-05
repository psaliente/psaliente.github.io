import { Section } from '../../../containers';
import FooterComponent from '../../../footer.component';
import HeaderComponent from '../../../header.component';

export default function DecryptPage() {
  return (
    <div className="flex flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
      <HeaderComponent EnableLink={true} ShowDescription={false} />
      <Section className="p-10">
        <Section.Title>Decryption Tool</Section.Title>
        <Section.Content>
          <p>This will become the page dedicated for my decryption tool</p>
        </Section.Content>
      </Section>
      <FooterComponent />
    </div>
  );
}
