interface SubmitButtonProps {
  customClass?: string;
  children: React.ReactNode;
}

export default function SubmitButton({ customClass = "", children }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={`bg-blue-500 text-white font-bold text-center py-3 px-2 ${customClass}`}
    >
      {children}
    </button>
  );
}
