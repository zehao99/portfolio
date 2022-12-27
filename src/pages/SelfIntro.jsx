import React, { useState } from 'react';
import Navbar from '../components/Common/Navbar/Navbar';
import Footer from '../components/Common/Footer';
import Intros from '../components/SelfIntroPage/Intros';
import { pageVariants } from '../utilities/AnimateParams';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectDetailModal from '../components/SelfIntroPage/ProjectDetails/ProjectDetailModal';
import useIsMobile from '../utilities/useIsMobile';
import IntroPC from '../components/SelfIntroPage/IntroNew/IntroPC';

const IntroPage = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [formKey, setFormKey] = useState('');
    const isMobile = useIsMobile();

    const handleDisplayModal = (formKey) => {
        setFormKey(formKey);
        setShowModal(true);
    };

    return (
        <motion.div
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            variants={pageVariants}
            className="App"
        >
            <AnimatePresence
                initial={false}
                mode={'wait'}
                onExitComplete={() => null}
            >
                {showModal ? (
                    <ProjectDetailModal
                        formKey={formKey}
                        onClose={() => setShowModal(false)}
                    />
                ) : null}
            </AnimatePresence>
            <header className="App-header">
                <Navbar />
            </header>
            <section className="App-body">
                {isMobile ? (
                    <Intros handleDisplayModal={handleDisplayModal} />
                ) : (
                    <IntroPC handleDisplayModal={handleDisplayModal} />
                )}

                <Footer />
            </section>
        </motion.div>
    );
};

export default IntroPage;
