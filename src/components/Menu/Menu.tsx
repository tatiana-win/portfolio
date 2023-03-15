import './Menu.css'
import { MENU_ITEMS } from './items';
import { MouseEvent, useCallback } from 'react';
export const Menu = () => {
    const handleClick = useCallback((id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
        }
    }, []);

    return (
        <ul className="menu">
            {MENU_ITEMS.map(item => (
                <li key={item.link}>
                    <a href={item.link} key={item.link} className="menu-link" onClick={handleClick(item.link)}>{item.name}</a>
                </li>
            ))}
        </ul>
    );
};
