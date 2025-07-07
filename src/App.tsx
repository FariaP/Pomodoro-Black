import './style/theme.css'
import './style/global.css'
import { Heading } from './components/Heading'
import { TimerIcon } from 'lucide-react';

export function App() {
    return (
        <>

            <Heading>
                <button><TimerIcon /></button>
            </Heading>
            <form>
                <label id="email">Email</label>
                <input type="text" placeholder="Digite seu email" id="email" />
            </form>
        </>
    );
}
