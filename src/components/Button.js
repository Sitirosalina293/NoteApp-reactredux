
const Button = ({ onClick, children }) => {
  return (
    <button className="fw-bold btnAdd py-2 px-3 my-4"
      onClick={onClick}
    >
      {children}
     </button>
  )
}

export default Button