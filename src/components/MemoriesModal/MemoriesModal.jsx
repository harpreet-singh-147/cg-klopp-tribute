import { useState, useEffect, useRef } from 'react';
import { api } from '../../utils/api';
import { Modal } from 'bootstrap';

import './MemoriesModal.scss';

const MemoriesModal = ({
  showMemoriesModal,
  setShowMemoriesModal,
  comments,
  handleEdit,
  setComments,
}) => {
  const [alert, setAlert] = useState({ show: false, message: '' });

  const modalRef = useRef(null);
  const bsModal = useRef(null);

  useEffect(() => {
    bsModal.current = new Modal(modalRef.current);

    const handleModalHidden = () => {
      setShowMemoriesModal(false);
    };

    modalRef.current.addEventListener('hidden.bs.modal', handleModalHidden);

    if (showMemoriesModal && bsModal.current) {
      bsModal.current.show();
    } else {
      if (bsModal.current && !showMemoriesModal) {
        bsModal.current.hide();
      }
    }

    return () => {
      if (modalRef.current) {
        modalRef.current.removeEventListener(
          'hidden.bs.modal',
          handleModalHidden
        );
      }
      if (bsModal.current) {
        bsModal.current.dispose();
      }
    };
  }, [showMemoriesModal, setShowMemoriesModal]);

  const closeModal = () => {
    bsModal.current.hide();
  };

  const handleDelete = async id => {
    try {
      await api.delete(`/comment/${id}`);
      setAlert({ show: true, message: 'Comment successfully deleted.' });
      setComments(prevComments =>
        prevComments.filter(comment => comment._id !== id)
      );
      setTimeout(() => {
        setAlert({ show: false, message: '' });
      }, 2000);
    } catch (error) {
      console.error('Error deleting comment:', error);
      setAlert({ show: true, message: 'Error deleting comment.' });
    }
  };

  return (
    <>
      <div
        ref={modalRef}
        className='modal fade'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-fullscreen'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                Your favourite Klopp memories
              </h1>
              <button
                type='button'
                className='btn-close'
                aria-label='Close'
                onClick={closeModal}
              ></button>
            </div>
            <div className='modal-body modal-body-custom d-flex flex-wrap justify-content-center overflow-auto'>
              {comments.map(comment => (
                <div className='card card-custom m-2' key={comment._id}>
                  <div className='card-body'>
                    <h5 className='card-title'>{comment.name}</h5>
                    <p className='card-text'>{comment.comment}</p>
                    <button
                      className='btn btn-primary me-2'
                      onClick={() => handleEdit(comment, bsModal.current)}
                    >
                      Edit
                    </button>
                    <button
                      className='btn btn-danger'
                      onClick={() => handleDelete(comment._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className='modal-footer d-flex justify-content-center flex-column'>
              {alert.show ? (
                <div className='alert alert-success' role='alert'>
                  {alert.message}
                </div>
              ) : null}
              <button
                type='button'
                className='btn btn-secondary'
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemoriesModal;
