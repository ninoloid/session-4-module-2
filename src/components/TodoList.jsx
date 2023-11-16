import { Box } from "@chakra-ui/react";
import TodoItem from "./TodoItem";
import { todos } from "../data/todos";
import AddTodo from "./AddTodo";
import Header from "./Header";

export default function TodoList() {
  const Todos = todos.map((todo, index) => (
    <TodoItem key={index} text={todo.text} />
  ));

  return (
    <Box bg={"#1A202C"} color={"white"} w={"800px"} margin={"auto"} py={"50px"}>
      <Header text="Chores ToDo List" />
      {Todos}
      <hr style={{ margin: "20px 0" }} />
      <Header text="Done : 0" />
      <AddTodo />
    </Box>
  );
}
