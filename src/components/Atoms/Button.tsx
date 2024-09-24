interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  );
};

export default Button;
