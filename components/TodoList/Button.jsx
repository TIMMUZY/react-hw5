import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faComment } from "@fortawesome/free-solid-svg-icons";

const Btn = ({ item, setKey, status, data, setData }) => {
  const deleteCart = (id) => {
    setData(data.filter((item) => item.id != id));
  };

  return (
    <div className="todo-list-item-btns">
      {status === "cart" ? (
        <>
          <button
            onClick={() => {
              setKey("delete", item.id);
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button
            onClick={() => {
              deleteCart(item.id);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setKey("correct", item.id);
            }}
          >
            <FontAwesomeIcon icon={faComment} />
          
          </button>
          <button
            onClick={() => {
              setKey("completed", item.id);
            }}
          >
            <FontAwesomeIcon icon={faCheck} />
        
            {item.completed ? "+" : ""}
          </button>
          <button
            onClick={() => {
              setKey("deleted", item.id);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </>
      )}
    </div>
  );
};

export default Btn;
