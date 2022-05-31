import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import IntroPage from './Pages/SelfIntro';
import LatestWorks from './Pages/LatestWork';
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
        <AnimatePresence initial={true} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route path="/latestworks" component={() => <LatestWorks />} />
                <Route
                    path="/collections/backtodesert"
                    component={() => <BacktoDesertPage />}
                />
                <Route
                    path="/collections/sakurayuki"
                    component={() => <SakuraYukiPage />}
                />
                <Route
                    path="/collections/theweird"
                    component={() => <TheWeirdPage />}
                />
                <Route
                    path="/collections/japanstories"
                    component={() => <JapanStoriesPage />}
                />
                <Route
                    path="/collections"
                    component={() => <CollectionsLP />}
                />
                <Route
                    path="/landscape/xinjiang"
                    component={() => <XinjiangPage />}
                />
                <Route
                    path="/landscape/japan"
                    component={() => <JapanPage />}
                />
                <Route
                    path="/landscape/zhejiang"
                    component={() => <ZhejiangPage />}
                />
                <Route path="/landscape" component={() => <XinjiangPage />} />
                <Route path="/about" component={IntroPage} />
                <Route path="/test" component={ImgLoadingComp} />
                <Route path="/" component={HomePage} />
            </Switch>
        </AnimatePresence>
    );
};

export default PageRouter;
