import { Heading } from "@chakra-ui/react";
import { string } from "prop-types";

export default function Header({ text }) {
  return (
    <Heading size={"lg"} textAlign={"center"}>
      {text}
    </Heading>
  );
}

Header.propTypes = {
  text: string,
};
