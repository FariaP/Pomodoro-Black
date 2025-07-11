import './style/theme.css'
import './style/global.css'
import { Container } from './components/Container/index';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { TimeZen } from './components/TimeZen';
import { InputForm } from './components/InputForm';

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
                <form action="" className='form'>
                    <div className='formRow'>
                        <InputForm type='text' id='input' labelText='Task:' placeholder='Digite algo' />
                    </div>
                    <div className='formRow'>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='formRow'>
                        <p>Ciclos:</p>
                        <p>0 0 0 0 0 0 0 0 0 </p>
                    </div>
                    <div className='formRow'>
                        <button type='submit'>icon</button>
                    </div>
                </form>
            </ Container >
        </>

    );
}
