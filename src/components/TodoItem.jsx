import { DeleteIcon } from "@chakra-ui/icons";
import { Checkbox, Flex, IconButton, Spacer, Text } from "@chakra-ui/react";
import { string } from "prop-types";

export default function TodoItem({ text }) {
  return (
    <>
      <Flex align="center" py={"5px"} px={"120px"}>
        <Checkbox border={"#48BB78"} />
        <Text mx={10}>{text}</Text>
        <Spacer />
        <IconButton
          icon={<DeleteIcon />}
          color={"#D8999B"}
          variant={"outline"}
          border={"2px solid #D8999B"}
        />
      </Flex>
    </>
  );
}

TodoItem.propTypes = {
  text: string,
};
