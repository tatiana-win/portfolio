import './Portfolio.css';
import { PORTFOLIO_ITEMS } from './items';
import { PortfolioItem } from '../PortfolioItem/PortfolioItem';

export const Portfolio = () => {
    return (
        <div className="portfolio">
            <h2>
                Portfolio
            </h2>
            {PORTFOLIO_ITEMS.map(item => (
                <PortfolioItem {...item} key={item.title} />
            ))}
        </div>
    );
};
