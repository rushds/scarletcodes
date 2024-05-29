import { useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import ProblemSelector from "./ProblemSelector";
import { PROBLEM_BOILERPLATE } from "../constants";
import Output from "./output";


const codeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [problem, setProblem] = useState("canYouVote");

  const onSelect = (problem) => {
    setProblem(problem);
    setValue(PROBLEM_BOILERPLATE[problem]);
  };
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <Box>
      <HStack mb={4}>
        <Box w="50%">
          <ProblemSelector problem={problem} onSelect={onSelect} />
          <Editor
            height="75vh"
            theme="vs-dark"
            language="java"
            defaultValue={PROBLEM_BOILERPLATE["canYouVote"]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
            options={{
              mouseWheelZoom: true,
            }}
          />
        </Box>
        <Output editorRef={editorRef}/>
      </HStack>
    </Box>
  );
};
export default codeEditor;
