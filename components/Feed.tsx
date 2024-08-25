import React, { useEffect, useState } from "react";
import FeedPosts from "./feed/FeedPosts";
import Modal from "react-modal";
import SignUp from "./feed/SignUp";
import CreatePost from "./feed/CreatePost";
import { useAccount } from "wagmi";
import { formatWalletAddress } from "@/helper/address.helper";
import { zeroAddress } from "viem";

Modal.setAppElement("#__next");

const Feed = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const { isConnected, address } = useAccount();

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!isConnected) {
        setUsername(localStorage.getItem("username") ?? "John");
      } else {
        setUsername(formatWalletAddress(address ?? zeroAddress));
      }
    }
  }, [address, isConnected]);

  return (
    <div className="mt-10">
      <div className="ml-6 sm:ml-1">
        <h1 className="text-[#C5C7CA] text-[28px]">Hello, {username}</h1>
        <p className="text-[#7F8084] text-[14px]">
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>
      </div>

      <div className="mb-10 justify-center p-5 sm:p-0">
        <CreatePost openModal={openModal} />
        <FeedPosts />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Sign up Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            padding: 0,
            backgroundColor: "transparent",
            border: "none",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        }}
      >
        <div className="max-w-md rounded-lg p-px bg-gradient-to-br from-[#969696] to-[#343434]">
          <SignUp closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
};

export default Feed;
