import Head from "next/head";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";
import VoxelDogLoader from "../model_loader";

const LazyVoxelDog = dynamic(() => import("../model"), {
    ssr: false,
    loading: () => <VoxelDogLoader />
});

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="kenjitheman's homepage" />
                <meta name="author" content="kenjitheman" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" type="image/png" href="/android-chrome-512x512.png" />
                <link rel="icon" type="image/png" href="/android-chrome-192x192.png" />
                <link rel="icon" type="image/png" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" href="/favicon-16x16.png" />
                <meta property="og:site_name" content="kenjitheman" />
                <meta name="og:title" content="kenjitheman" />
                <meta property="og:type" content="website" />
                <title>kenjitheman</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW="container.xl" pt={14}>
                <LazyVoxelDog />

                <AnimatePresence initial={true} exitBeforeEnter={false} mode="wait">
                    {children}
                </AnimatePresence>

                <Footer />
            </Container>
        </Box>
    );
};

export default Main;
