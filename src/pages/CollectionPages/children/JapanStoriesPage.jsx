import React from 'react';
import CollectionPage from '../CollectionPages';
const Info = {
    title: 'Japan Stories',
    description: (
        <>
            <p>Life record in a foreign country.</p>
            <p>
                After 12 months here, this country still feels unfamiliar to me.
                (Thanks to COVID19 -_- )
            </p>
        </>
    ),
};
const Photos = [
    {
        id: 0,
        url: 'https://philipliart.files.wordpress.com/2019/10/img_4881.jpg',
        description: 'Glamorous Life, 2019, Japan',
    },
    {
        stories: 'The sofa that keeps me company throughout the quarantine.',
    },
    {
        id: 1,
        url: 'https://philipliart.files.wordpress.com/2020/04/img_5087.jpg',
        description: 'Sunny sofa, 2020, Tokyo',
    },
    {
        id: 2,
        url: 'https://philipliart.files.wordpress.com/2020/04/img_4934.jpg',
        description: 'Rainy sofa, 2020, Tokyo',
    },
    {
        id: 3,
        url: 'https://philipliart.files.wordpress.com/2020/04/img_8071_polarr.jpg',
        description: 'Snowy sofa, 2020, Tokyo',
    },
];
const JapanStoriesPage = () => {
    return (
        <CollectionPage
            title={Info.title}
            description={Info.description}
            Photos={Photos}
        />
    );
};

export default JapanStoriesPage;
