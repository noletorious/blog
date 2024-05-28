export default function Button({ props }) {
  // Write css here and apply it on the button

  const buttonStyles = {
    color: "white",
    backgroundColor: "blue",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <button style={buttonStyles} {...props}>
      Click me
    </button>
  );
}
