import './Portfolio.css';
import { PORTFOLIO_ITEMS } from './items';
import { PortfolioItem } from '../PortfolioItem/PortfolioItem';
import { useCallback, useState } from 'react';
import { Preview } from '../Preview/Preview';

export const Portfolio = () => {
    const [isPreviewShown, setIsPreviewShown] = useState(false);
    const [previewUrl, setPreviewUrl] = useState('');

    const handleClose = useCallback(() => setIsPreviewShown(false), []);
    const openPreview = useCallback((url: string) => {
        setPreviewUrl(url);
        setIsPreviewShown(true);
    }, []);

    return (
        <div className="portfolio">
            <h2>
                Portfolio
            </h2>
            {PORTFOLIO_ITEMS.map(item => (
                <PortfolioItem {...item} key={item.title} openPreview={openPreview} />
            ))}

            {isPreviewShown && <Preview videoUrl={previewUrl} onClose={handleClose} />}
        </div>
    );
};
