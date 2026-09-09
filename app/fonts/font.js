// fonts/font.js
import localFont from 'next/font/local';
import { Alex_Brush } from 'next/font/google';

export const alexBrush = Alex_Brush({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-alex-brush',
    display: 'swap',
});

export const futuraHeavy = localFont({
    src: [
        {
            path: '../../app/fonts/FuturaEF Light Regular.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../app/fonts/FuturaEF Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../app/fonts/futuraef-medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../app/fonts/FuturaEF Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../app/fonts/futuraef-heavy.otf',
            weight: '800',
            style: 'normal',
        },
    ],
    variable: '--font-futura',
    display: 'swap',
});
