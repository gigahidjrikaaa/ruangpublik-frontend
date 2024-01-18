interface Props {
  text?: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export default function SecondaryButton(props: Props) {
  if (!props.text && !props.iconLeft && !props.iconRight) {
    throw new Error("PrimaryButton must have either (or both) text or icon");
  }
  return (
    <button
      disabled={props.disabled}
      onClick={() => {
        if (props.disabled) return;
        props.onClick();
      }}
      className={`bg-white text-[#596780] outline outline-1 outline-[#90A3BF] flex gap-2 rounded-[4px] text-[13px] font-semibold font-jakarta px-4 py-[10px] transition duration-150 hover:outline-[#596780] hover:text-[#1A202C] active:bg-blue-100 disabled:outline-blue-100 disabled:opacity-90 disabled:cursor-not-allowed ${props.className} `}
    >
      {props.iconLeft}
      {props.text}
      {props.iconRight}
    </button>
  );
}
