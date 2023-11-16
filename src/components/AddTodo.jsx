import { Button, Flex, Input, Text } from "@chakra-ui/react";

export default function AddTodo() {
  return (
    <Flex direction={"column"} py={"5px"} px={"120px"}>
      <Text my={"10px"} textAlign={"left"}>
        Add todo
      </Text>
      <Input my={"10px"} type="text"></Input>
      <Button my={"10px"} width={"100px"} bg={"#90CDF4"}>
        ADD TASK
      </Button>
    </Flex>
  );
}
