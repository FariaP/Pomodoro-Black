
import { CogIcon, HouseIcon, MoonIcon, SunIcon, TimerResetIcon } from 'lucide-react'
import styles from './style.module.css'
import { useEffect, useState } from 'react'

type AvailableThemes = 'dark' | 'light'

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark';
        return storageTheme;
    });

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />,
    };

    function handleThemes(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme
        });
    }

    useEffect(() => {
        console.log('cliquei')
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme]);

    return (
        <>
            <div className={styles.menu}>
                <a href="#" className={styles.menuLink} aria-label='Menu' title='Menu'>
                    <HouseIcon />
                </a>
                <a href="#" className={styles.menuLink} aria-label='Histórico' title='Histórico'>
                    <TimerResetIcon />
                </a>
                <a href="#" className={styles.menuLink} aria-label='Configuração' title='Configuração'>
                    <CogIcon />
                </a>
                <a href="#" className={styles.menuLink} aria-label='Tema' title='Tema' onClick={handleThemes}>
                    {nextThemeIcon[theme]}
                </a>
            </div>
        </>
    )
}