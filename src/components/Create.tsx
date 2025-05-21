import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

type Topic = {
  id: number;
  topic: string;
  description: string;
};

type Props = {
  todoList: Topic[];
  setTodoList: React.Dispatch<React.SetStateAction<Topic[]>>;
};

function Create({ todoList, setTodoList }: Props) {
  const [input, setInput] = useState(false);
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  function handleClick() {
    setInput(true);
  }

  function handleSubmit() {
    const newTopic: Topic = {
      id: Date.now(),
      topic,
      description,
    };
    setTodoList([...todoList, newTopic]);
    setTopic("");
    setDescription("");
    setInput(false);
  }
  function handleCancel() {
    setInput(false);
  }

  return (
    <div>
      {/* <button onClick={handleClick}>+</button> */}
      <Button onClick={handleClick} variant="contained" sx={{ margin: "1px" }}>
        Add New Item
      </Button>
      {input && (
        <div>
          {/* <input
            type="text"
            placeholder="Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          /> */}
          <div>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              sx={{ margin: "1px" }}
              type="text"
              value={topic}
              onChange={(e)=> setTopic(e.target.value)}
              />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              sx={{ margin: "1px" }}
              type="text"
              value={description}
              onChange={(e)=> setDescription(e.target.value)}
            />
            
          </div>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ margin: "1px" }}
          >
            Submit
          </Button>
          <Button
            onClick={handleCancel}
            variant="contained"
            sx={{ margin: "1px" }}
          >
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
}

export default Create;
