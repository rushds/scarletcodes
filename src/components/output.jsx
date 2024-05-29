import { Box, Button, Text } from "@chakra-ui/react";
import { executeCode } from "../api.js";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const Output = ({editorRef}) => {
  const toast = useToast();
const [output, setOutput] = useState("");
const [isLoading, setLoading] = useState(false);
const [isError, setIsError] = useState(false);
  const runCode = async () => {
    console.log("I did something");
    if(!editorRef.current) console.log("editorRef is not available");
    const code = editorRef.current.getValue();
    if(!code) return;
    try {
      setLoading(true);
      const {run: result} = await executeCode(code);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
      console.log(isError);
    } catch (error) {
      console.error(error);
      toast({
        title: "An error occurred.",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    finally{
      setLoading(false);
    }
  }
  return (
    <Box w='50%'>
      <Text mb={2} fontSize='lg'>
        Output
      </Text>
      <Button variant="outline" colorScheme="green" mb={4}
      isLoading={isLoading}
      onClick={runCode}>
        run code
      </Button>
      <Box
        height="75vh"
        p={2}
        color={isError ? "red.400" : ""}
        border="1px solid"
        borderRadius={3}
        borderColor={
          isError ? "red.400" : ""
        }
      >
      {output ? 
      output.map(
        (line, index) => (
          <Text key={index}>{line}</Text>
        )
      
      ) : "oh man"}
      </Box>
    </Box>
  );
};
export default Output;
