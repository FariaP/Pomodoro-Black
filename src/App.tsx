import './style/theme.css'
import './style/global.css'
import { Container } from './components/Container/index';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { TimeZen } from './components/TimeZen';
import { InputForm } from './components/InputForm';
import { Cycles } from './components/Cycles';
import { ButtonForm } from './components/ButtonForm';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';

export function App() {
    return (
        <>
            <Container>
                <Logo />
            </ Container >

            <Container>
                <Menu />
            </ Container >
            <Container>
                <TimeZen />
            </ Container >
            <Container>
                <form className='form'>
                    <div className='formRow'>
                        <InputForm type='text' id='input' labelText='Task:' placeholder='Digite algo' />
                    </div>
                    <div className='formRow'>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='formRow'>
                        <Cycles />
                    </div>
                    <div className='formRow'>
                        <ButtonForm icon={<PlayCircleIcon />} color='green' />
                        {/* <ButtonForm icon={<StopCircleIcon />} color='red' /> */}
                    </div>
                    <div className='formRow'>
                        <Footer />
                    </div>
                </form>
            </ Container >
        </>

    );
}
