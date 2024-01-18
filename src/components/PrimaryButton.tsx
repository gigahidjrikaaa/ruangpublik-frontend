interface Props {
  text?: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export default function PrimaryButton(props: Props) {
  if(!props.text && !props.iconLeft && !props.iconRight) {
    throw new Error("PrimaryButton must have either (or both) text or icon");
  }
  return(
    <button disabled={props.disabled} className={`bg-blue-500 flex gap-2 rounded-[4px] text-[13px] font-semibold font-jakarta px-2 py-[5px] transition duration-150 hover:bg-blue-600 active:bg-blue-700 disabled:opacity-40 ${props.className} `}>
      {props.iconLeft}
      {props.text}
      {props.iconRight}
    </button>
  );
}