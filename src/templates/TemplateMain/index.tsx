
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";

type TemplateMainProps = {
    children: React.ReactNode;
}

export function TemplateMain({ children }: TemplateMainProps) {
    return (
        <>
            <Container>
                <Logo />
            </ Container >
            <Container>
                <Menu />
            </ Container >

            {children}

            <Container>
                <Footer />
            </ Container >
        </>

    );
}
