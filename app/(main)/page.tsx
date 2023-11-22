import HomeHero from '@/components/HomeHero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import HomeFeaures from '@/components/HomeFeaures';
import HomeQuote from '@/components/HomeQuote';
import HomeTestimonial from '@/components/HomeTestimonial';
import HomeClient from '@/components/HomeClient';
import HomeComponents from '@/components/HomeComponents';
import HomeGetInTouch from '@/components/HomeGetInTouch';

const features = [
    {
        id: 1,
        title: 'Feature 1',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem expedita totam incidunt ipsam magni error perspiciatis nam dolorum ipsa fugiat.',
    },
    {
        id: 2,
        title: 'Feature 2',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem expedita totam incidunt ipsam magni error perspiciatis nam dolorum ipsa fugiat.',
    },
    {
        id: 3,
        title: 'Feature 3',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem expedita totam incidunt ipsam magni error perspiciatis nam dolorum ipsa fugiat.',
    },
    {
        id: 4,
        title: 'Feature 4',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem expedita totam incidunt ipsam magni error perspiciatis nam dolorum ipsa fugiat.',
    },
    {
        id: 5,
        title: 'Feature 5',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem expedita totam incidunt ipsam magni error perspiciatis nam dolorum ipsa fugiat.',
    },
    {
        id: 6,
        title: 'Feature 6',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem expedita totam incidunt ipsam magni error perspiciatis nam dolorum ipsa fugiat.',
    },
];

export default function Home() {
    return (
        <main>
            <HomeHero />
            <HomeFeaures />
            <HomeQuote />
            <HomeClient />
            <HomeComponents />
            <HomeTestimonial />
            <HomeGetInTouch />
        </main>
    );
}
