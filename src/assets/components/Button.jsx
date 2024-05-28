export default function Button({ onClick, children }) {
  const buttonStyles = {
    color: "white",
    backgroundColor: "blue",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <button style={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
}
