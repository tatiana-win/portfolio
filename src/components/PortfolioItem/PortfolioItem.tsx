import './PortfolioItem.css';
import { Item } from '../../models/Item';

interface Props extends Item {
    openPreview: (url: string) => void;
}

export const PortfolioItem = ({ title, description, img, url, openPreview, videoUrl }: Props) => {
    const handleClick = () => openPreview(videoUrl);
    return (
        <div className="item">
            <div className="item-container">
                <img src={process.env.PUBLIC_URL + img} className="item-img" alt={title} />
            </div>

            <div className="item-content">
                <h3 className="item-title">{title}</h3>
                <p className="item-description">{description}</p>
                <button className="item-button" onClick={handleClick}>Preview</button>
            </div>
        </div>

    );
};