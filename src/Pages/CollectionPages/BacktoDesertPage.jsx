import React from 'react';
import CollectionPage from './CollectionPages';

const Info = {
    title: 'Back to Desert',
    description: (
        <>
            <p>Human created and abandoned the desert.</p>
            <p> When people head back to the desert,</p>
            <p>what will they encounter?</p>
        </>
    ),
};

const Photos = [
    {
        id: 0,
        url: 'https://philipliart.files.wordpress.com/2018/11/2017078-4.jpg',
        description: '',
    },
    {
        id: 1,
        url: 'https://philipliart.files.wordpress.com/2018/11/2017079-5.jpg',
        description: '',
    },
    {
        id: 2,
        url: 'https://philipliart.files.wordpress.com/2018/11/2017070-3.jpg',
        description: '',
    },
    {
        id: 3,
        url: 'https://philipliart.files.wordpress.com/2018/11/2017082-10.jpg',
        description: '',
    },
    {
        id: 4,
        url: 'https://philipliart.files.wordpress.com/2018/11/2017083-1.jpg',
        description: '',
    },
    {
        id: 5,
        url: 'https://philipliart.files.wordpress.com/2018/11/2017076-2.jpg',
        description: '',
    },
    {
        id: 6,
        url: 'https://philipliart.files.wordpress.com/2018/11/2017081-7.jpg',
        description: '',
    },
    {
        id: 7,
        url: 'https://philipliart.files.wordpress.com/2018/11/2017084-9.jpg',
        description: '',
    },
    {
        id: 8,
        url: 'https://philipliart.files.wordpress.com/2018/11/2017077-6.jpg',
        description: '',
    },
];

const BacktoDesertPage = () => {
    return (
        <CollectionPage
            title={Info.title}
            description={Info.description}
            Photos={Photos}
        />
    );
};

export default BacktoDesertPage;
