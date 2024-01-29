import { useState, useEffect } from 'react';
import { api } from '../../utils/api';
import MemoriesModal from '../MemoriesModal/MemoriesModal';
import EditMemory from '../EditMemory/EditMemory';

import Loading from '../Loading/Loading';
import './Memories.scss';

const Memories = () => {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
  });
  const [comments, setComments] = useState([]);
  const [showMemoriesModal, setShowMemoriesModal] = useState(false);
  const [showEditMemoryModal, setShowEditMemoryModal] = useState(false);
  const [editComment, setEditComment] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchComments = async () => {
    setIsLoading(true);
    try {
      const response = await api.get('/comments');
      setComments(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await api.post('/comment', formData);
      setComments(prev => [...prev, response.data]);
      setShowMemoriesModal(true);
      setFormData({ name: '', comment: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleEdit = (comment, modal) => {
    modal.hide();
    setEditComment(comment);
    setShowEditMemoryModal(true);
  };

  const handleCloseEdit = editModal => {
    editModal.hide();
    setShowMemoriesModal(true);
  };

  const handleModalClick = () => {
    setShowMemoriesModal(true);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <form className='form-container' onSubmit={handleSubmit} id='memories'>
        <h3 className='text-center fw-bold mb-4'>Share your memories</h3>
        <div className='container-fluid'>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Enter your name'
              id='name'
              name='name'
              required
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor='name'>Your Name</label>
          </div>

          <div className='form-floating mb-3'>
            <textarea
              className='form-control'
              placeholder='Leave a memory here'
              id='floatingTextarea'
              name='comment'
              style={{ height: '150px' }}
              required
              value={formData.comment}
              onChange={handleChange}
            ></textarea>
            <label htmlFor='floatingTextarea'>Leave a memory here</label>
          </div>

          <button type='submit' className='btn btn-primary me-2'>
            Submit
          </button>
          <button
            type='button'
            className='btn btn-primary'
            onClick={handleModalClick}
          >
            See all memories
          </button>
        </div>
      </form>
      <MemoriesModal
        showMemoriesModal={showMemoriesModal}
        setShowMemoriesModal={setShowMemoriesModal}
        handleEdit={handleEdit}
        comments={comments}
        setComments={setComments}
      />
      <EditMemory
        showEditMemoryModal={showEditMemoryModal}
        setShowEditMemoryModal={setShowEditMemoryModal}
        editComment={editComment}
        setEditComment={setEditComment}
        setComments={setComments}
        handleCloseEdit={handleCloseEdit}
      />
    </>
  );
};
export default Memories;
