interface TextareaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

const Textarea = ({ value, onChange, placeholder }: TextareaProps) => {
  return (
    <>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default Textarea;
