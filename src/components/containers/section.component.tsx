import { TextTitle } from "../labels"

export function Section(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
    const {children} = props;
    
    return <div {...props} >
        {children}
    </div>
}

export function SectionTitle({children}: React.PropsWithChildren) {
    return <TextTitle>{children}</TextTitle>
}

Section.Title = SectionTitle;

export function SectionContent(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
    const {children} = props;
    
    return <div {...props}>{children}</div>
}

Section.Content = SectionContent;