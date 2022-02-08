import React from 'react';
import LandScapePage from './LandScapePages';

const Info = {
    title: 'Japan 日本',
    description: '',
};

const Photos = [
    {
        id: 0,
        url: 'https://philipliart.files.wordpress.com/2019/10/img_2043.jpg',
        description: '花火大会, 多摩川, 2019',
    },
    {
        id: 1,
        url: 'https://philipliart.files.wordpress.com/2019/10/img_5697.jpg',
        description: 'Kinkakuji, Kyoto, 2019',
    },
    {
        id: 2,
        url: 'https://philipliart.files.wordpress.com/2019/10/img_1049.jpg',
        description: 'Mt. Fuji, Lake Kawaguchiko, 2019',
    },
    {
        id: 3,
        url: 'https://philipliart.files.wordpress.com/2019/10/img_3872.jpg',
        description: 'Mt. Fuji, Lake Kawaguchiko, 2019',
    },
    {
        id: 4,
        url: 'https://philipliart.files.wordpress.com/2019/10/img_5324.jpg',
        description: 'Mt. Fuji, Lake Kawaguchiko, 2019',
    },
];

const JapanPage = () => {
    return <LandScapePage title={Info.title} Photos={Photos} />;
};

export default JapanPage;
