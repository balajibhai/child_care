interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
}

const Button = ({ label, onClick, disabled }: ButtonProps) => {
  return (
    <>
      <button onClick={onClick} disabled={disabled}>
        {label}
      </button>
    </>
  );
};

export default Button;
