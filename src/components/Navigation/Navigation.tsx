import './Navigation.css';
import { MouseEvent, useCallback, useMemo } from 'react';
import { HistoryItem } from '../../models/HistoryItem';
import cn from 'clsx';

interface Props {
    activeItem: HistoryItem;
    items: HistoryItem[];
    onChange: (value: HistoryItem) => void;
}

export const Navigation = ({ activeItem, items, onChange }: Props) => {
    const handleClick = useCallback((e: MouseEvent<HTMLLIElement>) => {
        // @ts-ignore
        onChange(items.find(item => item.company === e.target.id));
    }, [onChange]);

    const activeIndex = useMemo(() =>
            items.findIndex(item => item.company === activeItem.company),
        [activeItem]);

    return (
        <ul className="navigation">
            {items.map(item => (
                <li
                    className={cn('navigation-item', activeItem.company === item.company ? 'active' : '')}
                    key={item.company}
                    id={item.company}
                    onClick={handleClick}
                >
                    {item.company}
                </li>
            ))}
            <div className="navigation-slider" style={{ transform: `translateY(calc(0${activeIndex} * 46px))` }} />
        </ul>
    );
};
