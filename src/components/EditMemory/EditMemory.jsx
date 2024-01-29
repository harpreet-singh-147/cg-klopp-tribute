import { useState, useEffect, useRef } from 'react';
import { api } from '../../utils/api';
import { Modal } from 'bootstrap';

import './EditMemory.scss';

const EditMemory = ({
  showEditMemoryModal,
  setShowEditMemoryModal,
  editComment,
  setEditComment,
  setComments,
  handleCloseEdit,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    id: '',
  });
  const [alert, setAlert] = useState({ show: false, message: '' });
  const modalRefEdit = useRef(null);
  const bsModalEdit = useRef(null);

  useEffect(() => {
    if (editComment) {
      setFormData({
        name: editComment.name,
        comment: editComment.comment,
        id: editComment._id,
      });
    }
  }, [editComment]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    bsModalEdit.current = new Modal(modalRefEdit.current);

    const handleModalHidden = () => {
      setShowEditMemoryModal(false);
    };

    modalRefEdit.current.addEventListener('hidden.bs.modal', handleModalHidden);

    if (showEditMemoryModal && bsModalEdit.current) {
      bsModalEdit.current.show();
    } else {
      if (bsModalEdit.current && !showEditMemoryModal) {
        bsModalEdit.current.hide();
      }
    }

    return () => {
      if (modalRefEdit.current) {
        modalRefEdit.current.removeEventListener(
          'hidden.bs.modal',
          handleModalHidden
        );
      }
      if (bsModalEdit.current) {
        bsModalEdit.current.dispose();
      }
    };
  }, [showEditMemoryModal, setShowEditMemoryModal]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (
      formData.name === editComment.name &&
      formData.comment === editComment.comment
    ) {
      setAlert({ show: true, message: 'Change something.' });
      setTimeout(() => {
        setAlert({ show: false, message: '' });
      }, 2000);
      return;
    }

    try {
      const res = await api.put(`/comment/${formData.id}`, {
        name: formData.name,
        comment: formData.comment,
      });
      setEditComment(null);
      setComments(prevComments =>
        prevComments.map(comment =>
          comment._id === formData.id ? res.data : comment
        )
      );
      handleCloseEdit(bsModalEdit.current);
    } catch (error) {
      console.error('Error editing form:', error);
    }
  };

  return (
    <div
      ref={modalRefEdit}
      className='modal fade'
      tabIndex='-1'
      aria-labelledby='editModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-fullscreen'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='editModalLabel'>
              Edit Your favourite Klopp memories
            </h1>
            <button
              type='button'
              className='btn-close'
              aria-label='Close'
              onClick={() => handleCloseEdit(bsModalEdit.current)}
            ></button>
          </div>
          <div className='modal-body'>
            <form
              className='form-container'
              id='memories'
              onSubmit={handleSubmit}
            >
              <h3 className='text-center fw-bold mb-4'>Edit your memory</h3>
              <div className='container-fluid'>
                <div className='form-floating mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter your name'
                    id='nameEdit'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor='nameEdit'>Your Name</label>
                </div>

                <div className='form-floating mb-3'>
                  <textarea
                    className='form-control'
                    placeholder='Leave a memory here'
                    id='floatingTextareaEdit'
                    name='comment'
                    style={{ height: '150px' }}
                    value={formData.comment}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <label htmlFor='floatingTextareaEdit'>
                    Leave a memory here
                  </label>
                </div>

                <button type='submit' className='btn btn-primary me-2'>
                  Submit
                </button>
                {alert.show ? (
                  <div className='alert alert-danger' role='alert'>
                    {alert.message}
                  </div>
                ) : null}
              </div>
            </form>
          </div>
          <div className='modal-footer d-flex justify-content-center flex-column'>
            <button
              type='button'
              className='btn btn-secondary'
              onClick={() => handleCloseEdit(bsModalEdit.current)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditMemory;
