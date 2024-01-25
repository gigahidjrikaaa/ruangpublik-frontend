import { toast } from "react-toastify";

interface ShareThread {
  isOpen: boolean;
  onClose: () => void;
  threadId: string;
}

export default function ShareThreadModal(props: ShareThread) {
  const shareLink = `${process.env.NEXT_PUBLIC_BASE_URL}/thread/${props.threadId}`;

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    toast.success("Link copied to clipboard");
  };

  return (
    <div className={`fixed z-10 inset-0 ${props.isOpen ? "" : "hidden"}`}>
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={props.onClose}></div>
      <div className="flex justify-center items-center h-screen ">
        <div className="absolute bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Bagikan Thread</h2>
          <p className="mb-4 text-neutral-900">
            Bagikan Thread ini ke Teman Anda! :
          </p>
          <input
            className="w-full border rounded-md p-2 mb-4"
            type="text"
            value={shareLink}
            readOnly
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={handleCopyToClipboard}>
            Copy to Clipboard
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
            onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
