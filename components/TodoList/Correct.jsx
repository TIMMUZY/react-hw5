import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faXmark } from "@fortawesome/free-solid-svg-icons";

const Correct = ({ data, setData, setKey, item }) => {
  const [text, setText] = useState(item.text);
  const saveTodo = (id) => {
    if (text.trim().length > 0) {
      setData(
        data.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              text: text.trim(),
              correct: false,
            };
          } else {
            return item;
          }
        })
      );
    }
  };
  return (
    <div>
      <input
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          saveTodo(item.id);
        }}
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <button
        onClick={() => {
          setKey("correct", item.id);
        }}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};

export default Correct;
