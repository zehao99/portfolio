import React from 'react';
import CollectionPage from '../CollectionPages';

const Info = {
    title: 'The weird',
    description: (
        <>
            <p>Weird but interesting stuff in life.</p>
            <p>&nbsp; : )))))</p>
        </>
    ),
};
const Photos = [
    {
        id: 0,
        url: 'https://philipliart.files.wordpress.com/2020/04/img_5462.jpg',
        description: 'Wind, 2020, Tokyo',
    },
    {
        id: 1,
        url: 'https://philipliart.files.wordpress.com/2018/10/f8485cf4-1c16-4734-af09-a2eae28de192.jpg',
        description: 'Silent Hill, 2018, Zhejiang',
    },
    {
        id: 2,
        url: 'https://philipliart.files.wordpress.com/2018/11/img_1441.jpg',
        description: 'Float, Xinjiang, 2018',
    },
    {
        id: 3,
        url: 'https://philipliart.files.wordpress.com/2019/10/img_4882.jpg',
        description: 'Untitled, 2019, Kyoto',
    },
    {
        id: 4,
        url: 'https://philipliart.files.wordpress.com/2020/04/img_5169.jpg',
        description: 'Twinkle Twinkle, 2020, Tokyo',
    },
];
const TheWeirdPage = () => {
    return (
        <CollectionPage
            title={Info.title}
            description={Info.description}
            Photos={Photos}
        />
    );
};

export default TheWeirdPage;
