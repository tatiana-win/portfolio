import './Header.css';
import { Menu } from '../Menu/Menu';
import { useEffect, useRef, useState } from 'react';
import cn from 'clsx';

const OFFSET = 20;

export const Header = () => {
    const [isScrolling, setIsScrolling] = useState(window.scrollY > OFFSET);
    const lastScrolling = useRef(window.scrollY > OFFSET);

    const updateScrolling = (value: number) => {
        const scrolling = value > OFFSET;
        if (scrolling !== lastScrolling.current) {
            setIsScrolling(scrolling);
            lastScrolling.current = scrolling;
        }
    }

    const handleScroll = () => {
        const lastKnownScrollPosition = window.scrollY;
        window.requestAnimationFrame(() => {
            updateScrolling(lastKnownScrollPosition);
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
      <header className={cn('header', {
          ['header__scrolling']: isScrolling
      })}>
          <Menu />
      </header>
    );
}
