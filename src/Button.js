function Button({btnName,onClick}){
  return(
    <button
    type="button"
    onClick={onClick}>
      {btnName}
    </button>
  )
}

export default Button;