import './Portfolio.css';
import { PORTFOLIO_ITEMS } from './items';
import { PortfolioItem } from '../PortfolioItem/PortfolioItem';

interface Props {
    openPreview: (url: string) => void;
}

export const Portfolio = ({ openPreview }: Props) => {
    return (
        <div className="portfolio" id="portfolio">
            <h2>
                Portfolio
            </h2>
            {PORTFOLIO_ITEMS.map(item => (
                <PortfolioItem {...item} key={item.title} openPreview={openPreview} />
            ))}
        </div>
    );
};
