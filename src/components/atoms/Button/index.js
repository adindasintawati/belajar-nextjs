const Button = ({ color = "bg-blue-500", textButton = "Button", size }) => {
  return <button className={`h-10 px-6 font-semibold rounded-md ${color} ${size}`}>{textButton}</button>;
};

export default Button;
