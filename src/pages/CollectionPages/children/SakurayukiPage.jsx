import React from 'react';
import CollectionPage from '../CollectionPages';
const Info = {
    title: '桜 x 雪',
    description: (
        <>
            <p>2020.03.29, Tokyo.</p>
            <p>
                {' '}
                It has been 51 years since last time it snowed when cherry
                blossoms are at their peak.
            </p>
        </>
    ),
};

const Photos = [
    {
        id: 0,
        url: 'https://philipliart.files.wordpress.com/2020/04/img_4559_polarr.jpg',
        description: '',
    },
    {
        id: 1,
        url: 'https://philipliart.files.wordpress.com/2020/04/img_7860_polarr.jpg',
        description: '',
    },
    {
        id: 2,
        url: 'https://philipliart.files.wordpress.com/2020/04/img_3563_polarr.jpg',
        description: '',
    },
    {
        id: 3,
        url: 'https://philipliart.files.wordpress.com/2020/04/img_2142_polarr.jpg',
        description: '',
    },
    {
        id: 4,
        url: 'https://philipliart.files.wordpress.com/2020/04/img_8645_polarr.jpg',
        description: '',
    },
    {
        id: 5,
        url: 'https://philipliart.files.wordpress.com/2020/04/img_9817_polarr.jpg',
        description: '',
    },
    {
        id: 6,
        url: 'https://philipliart.files.wordpress.com/2020/04/img_5312.jpg',
        description: '',
    },
    {
        id: 7,
        url: 'https://philipliart.files.wordpress.com/2020/04/img_8447_polarr.jpg',
        description: '',
    },
    {
        id: 8,
        url: 'https://philipliart.files.wordpress.com/2020/04/img_9853_polarr.jpg',
        description: '',
    },
    {
        id: 9,
        url: 'https://philipliart.files.wordpress.com/2020/04/img_7189_polarr.jpg',
        description: '',
    },
    {
        id: 10,
        url: 'https://philipliart.files.wordpress.com/2020/04/img_3272_polarr.jpg',
        description: '',
    },
];

const SakuraYukiPage = () => {
    return (
        <CollectionPage
            title={Info.title}
            description={Info.description}
            Photos={Photos}
        />
    );
};

export default SakuraYukiPage;
