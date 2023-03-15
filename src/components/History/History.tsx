import './History.css';
import { Navigation } from '../Navigation/Navigation';
import { useState } from 'react';
import { HISTORY_ITEMS } from '../Navigation/items';
export const History = () => {
    const [activeItem, setActiveItem] = useState(HISTORY_ITEMS[0]);
    return (
        <div id="experience">
            <h2>
                Where I worked
            </h2>
            <div className="history">
                <Navigation activeItem={activeItem} items={HISTORY_ITEMS} onChange={setActiveItem} />
                <div className="history-content">
                    <h3 className="history-title">
                        {activeItem.position}
                    </h3>
                    <p className="history-period">
                        {activeItem.period}
                    </p>
                    <ul className="history-duties">
                        {activeItem.duties.map(duty => (
                            <li className="history-duty" key={duty}>{duty}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
