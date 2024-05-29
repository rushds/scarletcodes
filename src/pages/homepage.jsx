import {Box, Code} from "@chakra-ui/react";
import CodeEditor from "../components/editor";


export const HomePage = () => {
  console.log('homepage');
    return (
      <div>
        <Box
        minH="100vh" bg='#40376E' color='white.500' px={6} py={8}>
          <CodeEditor />
        </Box>
      </div>
    );
  };