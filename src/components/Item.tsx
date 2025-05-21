import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
// function Item({topic, description}: {topic: string, description: string}) {
//     return (
//         <div>
//             <h2>{topic}</h2>
//             <p>{description}</p>
//         </div>
//     );
type Props = {
    topic: string;
    description: string;
    onDelete: () => void;
}
function Item({ topic, description, onDelete}: Props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "5px",
        padding: "10px"
      }}
    >
      <CardActionArea
        sx={{
          "&:hover": {
            backgroundColor: "#fff",
            boxShadow: "none",
          },

        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {topic}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>

        <Button onClick={onDelete} sx={{margin: "2px"}} variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </CardActionArea>
    </Card>
  );
}

export default Item;
