import React, { useEffect, useState } from 'react';
import Navbar from '../Comp/Navbar/Navbar';
import Footer from '../Comp/Footer';
import Intros from '../Comp/Intros';
import { pageVariants } from '../Utilities/AnimateParams';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectDetailModal from '../Comp/ProjectDetails/ProjectDetailModal';

const IntroPage = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [formKey, setFormKey] = useState('');

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
                exitBeforeEnter={true}
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
                <Intros handleDisplayModal={handleDisplayModal} />
                <Footer />
            </section>
        </motion.div>
    );
};

export default IntroPage;
