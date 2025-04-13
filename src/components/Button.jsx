function Button(props) {
  return (
    <button className="bg-slate-400  text-white p-2 rounded-md" 
    {...props}
    >
      {props.children}
    </button>
  );
}
export default Button;

/*
function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="bg-slate-400  text-white p-2 rounded-md"
    />
  );
}
export default Button;
*/
