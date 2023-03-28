import { Item } from '../../models/Item';

export const PORTFOLIO_ITEMS: Item[] = [
    {
        title: 'Search for tracks, artists and albums using Spotify API',
        description: 'Search for your favorite music, view info about albums and artists',
        img: '/spotify.png',
        url: '',
        videoUrl: '/spotify.mp4'
    },
    {
        title: 'Trading terminal',
        description: 'All trading data, charts, subscription at one place. You can adjust the interface for yor needs. Follow other users, and share your ideas and success with Pulse.',
        img: '/terminal.png',
        url: 'https://tinkoff.ru/terminal',
        videoUrl: '/terminal.mp4'
    },
    {
        title: 'Search for airline tickets',
        description: 'Search for the cheapest tickets, buy online, manage your booking and get the best support 24/7',
        img: '/travel.png',
        url: 'https://tinkoff.ru/travel',
        videoUrl: '/travel.mp4'
    },
    {
        title: 'Widget for events tickets',
        description: 'Lightweight widget for the easiest seat selection and buying tickets',
        img: '/widget.png',
        url: 'https://crocus-hall.ru/',
        videoUrl: '/widget.mp4'
    }
];
