import { PROBLEM_BOILERPLATE } from "../constants";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

const problems = Object.entries(PROBLEM_BOILERPLATE);
const ACTIVE_COLOR = "blue.400";

const ProblemSelector = ({problem, onSelect}) => {
  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg">
        Problem:
      </Text>
      <Menu>
        <MenuButton as={Button} padding='10px'>{problem}</MenuButton>
        <MenuList>
          {problems.map(([prob, boilerplate]) => (
            <MenuItem key={prob}
            color={
              prob === problem ? "#89CE94" : ""
            }
            bg={
              prob === problem ? "gray.900" : "transparent"
            }
            _hover={{
              color: "ACTIVE_COLOR", bg: "gray.900"
            }}
            onClick={() => onSelect(prob)}
            >
              {prob}
              &nbsp;
              <Text as="span" color="gray.600" fontSize="sm">
                {prob}{" "}
              </Text>{" "}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default ProblemSelector;
