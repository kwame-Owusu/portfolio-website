import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box align="center" opacity={0.6} fontSize="smaller" marginTop={'90px'} marginBottom={'20px'}>
      &copy; {new Date().getFullYear()} Kwame Owusu. made with ❤️
    </Box>
  )
}

export default Footer 