interface CommentDisplayProps {
  displayText: string;
}

const CommentDisplay = ({ displayText }: CommentDisplayProps) => {
  return (
    <div>
      <p className="comment-display">{displayText}</p>
    </div>
  );
};

export default CommentDisplay;
