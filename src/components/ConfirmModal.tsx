interface Props {
  message: string;
  additionalMessage?: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}

export default function ConfirmModal({
  message = "この内容で登録しますか？",
  additionalMessage = "※登録後は変更できません",
  onConfirm = () => {},
  onCancel = () => {},
  confirmText = "はい",
  cancelText = "いいえ",
}: Props) {
  return (
    <main className="w-screen h-screen fixed top-0 bg-black bg-opacity-70 grid place-items-center z-[100]">
      <div className="absolute w-full h-full z-[1]" onClick={() => onCancel()} />
      <section className="bg-white text-black p-5 rounded-[5px] relative z-[2]">
        <p className="text-center text-[18px] font-semibold">{message}</p>
        <p className="text-center text-sm text-neutral-600">
          {additionalMessage}
        </p>
        <div className="flex justify-center mt-8">
          <button
            className="w-20 h-10 bg-blue-500 text-white rounded-md font-semibold mr-4"
            onClick={() => onConfirm()}
          >
            {confirmText}
          </button>
          <button
            className="w-20 h-10 bg-neutral-400 text-neutral-800 rounded-md font-semibold"
            onClick={() => onCancel()}
          >
            {cancelText}
          </button>
        </div>
      </section>
    </main>
  );
}
