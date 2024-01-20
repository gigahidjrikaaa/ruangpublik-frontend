import Thread from "@/components/Thread";
import { useEffect, useState } from "react";
import CreateThreadModal from "@/components/CreateThreadModal";
import Layout from "@/components/Layout";
import axios from "axios";
import { toast } from "react-toastify";

interface Thread {
  createdAt: string;
  _id: string;
  parents: string[];
  title: string;
  content: string;
  poster: string;
  replies: string[];
  upvotes: string[];
  bookmarks: string[];
  downvotes: string[];
  __v: number;
}

export default function TersimpanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bookmarkedThreads, setBookmarkedThreads] = useState<Thread[]>([]);

  useEffect(() => {
    const loading = toast.loading("Loading...");
    setLoading(true);
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/threads")
      .then((res) => {
        toast.update(loading, {
          render: "Success",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });

        const allThreads = res.data.data;
        const bookmarked = allThreads.filter(
          (thread: { bookmarks: string | string[] }) =>
            thread.bookmarks.includes("65a86f38e93a6e74fa9c372a") //user id
        );

        setBookmarkedThreads(bookmarked);
      })
      .catch((err: unknown) => {
        if (err instanceof Error) {
          toast.update(loading, {
            render: err.message,
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        } else {
          toast.update(loading, {
            render: "Unknown error",
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {isModalOpen && (
        <CreateThreadModal
          onConfirm={() => {}}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
      <Layout>
        {!loading &&
          bookmarkedThreads.map((thread: Thread) => (
            <Thread
              key={thread._id}
              poster={thread.poster}
              title={thread.title}
              content={thread.content}
              createdAt={thread.createdAt}
            />
          ))}
      </Layout>
    </>
  );
}
