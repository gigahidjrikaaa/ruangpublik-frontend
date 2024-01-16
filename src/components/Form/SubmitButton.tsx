interface SubmitButtonProps {
  customClass?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export default function SubmitButton({
  customClass = "",
  children,
  disabled = false,
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`bg-blue-500 text-white font-bold text-center py-3 px-2 ${customClass}`}
    >
      {children}
    </button>
  );
}
