import { useState, useRef } from "react";

const Form = ({ data, setData }) => {
  const [text, setText] = useState("");
  const inputRef = useRef();



  const addTodo = () => {
    if (text.trim() !== "") {
        setData([
            {
                id: Math.random(),
                text: text.trim(),
                completed: false,
                deleted: false,
                important: false,
                correct: false,
            },
            ...data,
        ]);
      }

    setText("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  return (
    <div className="form">
      <input
        ref={inputRef}
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
      />

      <button onClick={addTodo}>add</button>
    </div>
  );
};

export default Form;


