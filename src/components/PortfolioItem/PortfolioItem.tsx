import './PortfolioItem.css';
import { Item } from '../../models/Item';

export const PortfolioItem = ({ title, description, img, url }: Item) => {
    return (
        <div className="item">
            <div className="item-container">
                <img src={process.env.PUBLIC_URL + img} className="item-img" alt={title} />
            </div>

            <div className="item-content">
                <h3 className="item-title">{title}</h3>
                <p className="item-description">{description}</p>
                <button className="item-button">Preview</button>
            </div>
        </div>

    );
};