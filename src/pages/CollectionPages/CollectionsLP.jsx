import React from 'react';
import { pageVariants } from '../../utilities/AnimateParams';
import styles from './CollectionPages.module.scss';
import { motion } from 'framer-motion';
import NavBar from '../../components/Common/Navbar/Navbar';
import Footer from '../../components/Common/Footer';
import Title from '../../components/CollectionPages/LandingPage/Title';
import PageSection from '../../components/CollectionPages/LandingPage/PageSection';

const CollectionsLP = () => {
    return (
        <motion.div
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            variants={pageVariants}
            className={styles.CollectionPage}
        >
            <div className={styles.CollectionNavbar}>
                <NavBar />
            </div>
            <div className={styles.LandingPage}>
                <Title />
                <PageSection
                    linkTo={'/collections/backtodesert'}
                    pageImgUrl={
                        'https://philipliart.files.wordpress.com/2018/11/2017082-10.jpg?w=450'
                    }
                    isLeft={true}
                    pageTitle={'Back to Desert'}
                />
                <PageSection
                    linkTo={'/collections/sakurayuki'}
                    pageImgUrl={
                        'https://philipliart.files.wordpress.com/2020/04/img_9817_polarr.jpg?w=450'
                    }
                    isLeft={false}
                    pageTitle={'桜 x 雪'}
                />
                <PageSection
                    linkTo={'/collections/theweird'}
                    pageImgUrl={
                        'https://philipliart.files.wordpress.com/2020/04/img_5462.jpg?w=450'
                    }
                    isLeft={true}
                    pageTitle={'The weird'}
                />
                <PageSection
                    linkTo={'/collections/japanstories'}
                    pageImgUrl={
                        'https://philipliart.files.wordpress.com/2022/02/lp_img01.png?w=450'
                    }
                    isLeft={false}
                    pageTitle={'Japan stories'}
                />
            </div>
            <Footer />
        </motion.div>
    );
};

export default CollectionsLP;
