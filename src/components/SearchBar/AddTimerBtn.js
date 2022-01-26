import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { fontFamily } from "@material-ui/system";

export default function AddTimerBtn(props) {
  const { createTimer } = props;
  const blackBtn = {
    backgroundColor: '#1a1a1a',
    margin: '40px',
    color: 'white',
    padding: '0.5rem 1.1rem 0.5rem 1.1rem',
    borderRadius: '7px',
    fontFamily: 'cursive',
    fontSize: '20px',
    cursor: 'pointer'
  };
  return (
    <>
      <button
        onClick={() => {
          createTimer();
        }}
        style={blackBtn}
      >Create a new one
        {/*<AddIcon style={{ color: "black" }} />*/}
      </button>
    </>
  );
}
