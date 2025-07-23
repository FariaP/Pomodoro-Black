import { Container } from "../../components/Container";
import { FormMain } from "../../components/FormMain";
import { TimeZen } from "../../components/TimeZen";
import { TemplateMain } from "../../templates/TemplateMain";

export function Home() {
    return (
        <TemplateMain>
            <Container>
                <TimeZen />
            </ Container >
            <Container>
                <FormMain />
            </ Container >
        </TemplateMain>
    );
}
