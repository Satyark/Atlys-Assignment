import React, { useState } from 'react'
import FeedPosts from './feed/FeedPosts';
import Modal from 'react-modal';
import SignUp from './feed/SignUp';
import CreatePost from './feed/CreatePost';

Modal.setAppElement('#__next');

const Feed = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal=()=> {
      setModalIsOpen(true);
    }
  
    const closeModal=()=>{
      setModalIsOpen(false);
    }
  return (
    <div className='mt-20'>
        <div>
            <h1 className='text-[#C5C7CA] text-[28px]'>Hello, {localStorage? localStorage.getItem('username'): "John"}</h1>
            <p className='text-[#7F8084] text-[14px]'>How are you doing today? Would you like to share something with the community 🤗</p>
        </div>

        <div className='mb-10'>
            <CreatePost openModal={openModal}/>
            <FeedPosts/>
        </div>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            // marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            // padding: '20px',
            backgroundColor: '#27292D',
            color: '#fff',
            borderRadius: '8px',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
        }}
      >
        <SignUp closeModal={closeModal}/>
      </Modal>
    </div>
  )
}

export default Feed