import { Container } from "../../components/Container";
import { FormMain } from "../../components/FormMain";
import { TimeZen } from "../../components/TimeZen";
import type { TaskStateModels } from "../../models/taskStateModels";
import { TemplateMain } from "../../templates/TemplateMain";

type HomeProps = {
    state: TaskStateModels;
    setState: React.Dispatch<React.SetStateAction<TaskStateModels>>;
};

export function Home(props: HomeProps) {
    console.log(props);
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
