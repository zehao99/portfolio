import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IntroPage from './pages/SelfIntro';
import XinjiangPage from './pages/LandscapePages/children/XinjiangPage';
import JapanPage from './pages/LandscapePages/children/JapanPage';
import ZhejiangPage from './pages/LandscapePages/children/ZhejiangPage';
import BacktoDesertPage from './pages/CollectionPages/children/BacktoDesertPage';
import SakuraYukiPage from './pages/CollectionPages/children/SakurayukiPage';
import TheWeirdPage from './pages/CollectionPages/children/TheWeirdPage';
import JapanStoriesPage from './pages/CollectionPages/children/JapanStoriesPage';
import ImgLoadingComp from './components/Common/LoadingComp/ImgLoadingComp';
import { AnimatePresence } from 'framer-motion';
import CollectionsLP from './pages/CollectionPages/CollectionsLP';
import LandScapeLP from './pages/LandscapePages/LandScapeLP';

const PageRouter = (props) => {
    const location = useLocation();

    return (
        <AnimatePresence initial={true} mode={'wait'}>
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/collections/backtodesert"
                    element={<BacktoDesertPage />}
                />
                <Route
                    path="/collections/sakurayuki"
                    element={<SakuraYukiPage />}
                />
                <Route
                    path="/collections/theweird"
                    element={<TheWeirdPage />}
                />
                <Route
                    path="/collections/japanstories"
                    element={<JapanStoriesPage />}
                />
                <Route path="/collections" element={<CollectionsLP />} />
                <Route path="/landscape" element={<LandScapeLP />} />
                <Route path="/landscape/xinjiang" element={<XinjiangPage />} />
                <Route path="/landscape/japan" element={<JapanPage />} />
                <Route path="/landscape/zhejiang" element={<ZhejiangPage />} />
                <Route path="/landscape" element={<XinjiangPage />} />
                <Route path="/about" element={<IntroPage />} />
                <Route path="/test" element={<ImgLoadingComp />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </AnimatePresence>
    );
};

export default PageRouter;
