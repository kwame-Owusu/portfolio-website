import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box align="center" opacity={0.6} fontSize="initial" marginTop={'90px'} marginBottom={'20px'} color={"white"}>
      &copy; {new Date().getFullYear()} Kwame Owusu. made with ❤️
    </Box>
  )
}

export default Footer 