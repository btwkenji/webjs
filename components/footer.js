import { Box } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box align="center" opacity={0.4} fontSize="sm">
            <a href="https://github.com/kenjitheman/webmanjs">
                <p>
                    source code
                </p>
            </a>
            <br />
            &copy; {new Date().getFullYear()} kenjitheman | all rights reserved
        </Box>
    );
};

export default Footer;
