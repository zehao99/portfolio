import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import IntroPage from './Pages/SelfIntro';
import XinjiangPage from './Pages/LandscapePages/XinjiangPage';
import JapanPage from './Pages/LandscapePages/JapanPage';
import ZhejiangPage from './Pages/LandscapePages/ZhejiangPage';
import BacktoDesertPage from './Pages/CollectionPages/BacktoDesertPage';
import SakuraYukiPage from './Pages/CollectionPages/SakurayukiPage';
import TheWeirdPage from './Pages/CollectionPages/TheWeirdPage';
import JapanStoriesPage from './Pages/CollectionPages/JapanStoriesPage';
import ImgLoadingComp from './Comp/LoadingComp/ImgLoadingComp';
import { AnimatePresence } from 'framer-motion';
import CollectionsLP from './Pages/CollectionPages/CollectionsLP';

const PageRouter = (props) => {
    const location = useLocation();

    return (
        <AnimatePresence initial={true} mode={'wait'}>
            <Routes location={location} key={location.pathname}>
                <Route
                    path='/collections/backtodesert'
                    element={<BacktoDesertPage />}
                />
                <Route
                    path='/collections/sakurayuki'
                    element={<SakuraYukiPage />}
                />
                <Route
                    path='/collections/theweird'
                    element={<TheWeirdPage />}
                />
                <Route
                    path='/collections/japanstories'
                    element={<JapanStoriesPage />}
                />
                <Route
                    path='/collections'
                    element={<CollectionsLP />}
                />
                <Route
                    path='/landscape/xinjiang'
                    element={<XinjiangPage />}
                />
                <Route
                    path='/landscape/japan'
                    element={<JapanPage />}
                />
                <Route
                    path='/landscape/zhejiang'
                    element={<ZhejiangPage />}
                />
                <Route path='/landscape' element={<XinjiangPage />} />
                <Route path='/about' element={<IntroPage />} />
                <Route path='/test' element={<ImgLoadingComp />} />
                <Route path='/' element={<HomePage />} />
            </Routes>
        </AnimatePresence>
    );
};

export default PageRouter;
