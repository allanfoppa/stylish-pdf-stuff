import { Link } from "react-router-dom";
import { PATHS } from "../enums/paths.enum";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

export default function NoMatch() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, gray.400, gray.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you&apos;re looking for does not seem to exist
      </Text>

      <Button
        colorScheme="gray"
        bgGradient="linear(to-r, gray.400, gray.500, gray.600)"
        color="white"
        variant="solid"
      >
        <Link to={PATHS.HOME}>Go to the home page</Link>
      </Button>
    </Box>
  );
}
