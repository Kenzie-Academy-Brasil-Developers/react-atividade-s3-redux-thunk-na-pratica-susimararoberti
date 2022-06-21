import { Box, Container, List } from "./styles";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addCommentThunk } from "../../store/modules/user/thunks";

function Form() {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.name);
  const comments = useSelector((store) => store.user.comments);

  return (
    <Container>
      <h1>{user}</h1>
      <List>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </List>
      <Box>
        <input
          placeholder="Comment..."
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={() => dispatch(addCommentThunk(comment))}>
          New comment
        </button>
      </Box>
    </Container>
  );
}

export default Form;
