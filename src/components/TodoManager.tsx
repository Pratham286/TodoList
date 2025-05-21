// App.tsx or TodoManager.tsx
import React, { useState } from "react";
import Create from "./Create";
import Item from "./Item";
import { Box } from "@mui/material";

type Topic = {
  id: number;
  topic: string;
  description: string;
};

function TodoManager() {
  const [todoList, setTodoList] = useState<Topic[]>([]);
  function handleDelete(id: number) {
    setTodoList(prev => prev.filter(item => item.id !== id));
  }
  // function handleEdit(id: number) {
  //   setTodoList(prev => prev.filter(item => item.id !== id));
  // }
  return (
    <Box>
      <Create todoList={todoList} setTodoList={setTodoList} />
        <Box sx={{display: "flex"}}>
        {todoList.map((item) => (
            <Box
            key={item.id}
            sx={{padding: "20px"}}>
            <Item 
            topic = {item.topic} 
            description = {item.description} 
            onDelete={() => handleDelete(item.id)}
            />
            </Box>
        ))}
    </Box>
    </Box>
  );
}

export default TodoManager;
