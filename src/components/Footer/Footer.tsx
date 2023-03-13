import './Footer.css';
import { FOOTER_ITEMS } from './items';

export const Footer = () => {
    return (
        <footer className="footer" >
            {FOOTER_ITEMS.map(item => (
                <a key={item.link} href={item.link} className="footer-link" target="blank" rel="noreferrer">
                    {item.icon}
                </a>
            ))}
        </footer>
    )
}
