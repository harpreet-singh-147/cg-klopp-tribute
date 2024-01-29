import { useState } from 'react';
import './Accordion.scss';

const Accordion = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleActiveClass = id => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className='acc-container'>
      <div className='container-fluid' id='faq'>
        <h2 className='text-center fw-bold mb-5'>Klopp FAQs</h2>
        <div className='accordion' id='accordionExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className={`accordion-button collapsed ${
                  activeId === 'item1' ? 'active-acc-btn' : ''
                }`}
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                onClick={() => toggleActiveClass('item1')}
                aria-expanded={activeId === 'item1'}
                aria-controls='collapseOne'
              >
                What is Jurgen Klopp’s greatest coaching achievement?
              </button>
            </h2>
            <div
              id='collapseOne'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                Many consider Klopp’s greatest coaching achievement to be
                leading Liverpool FC to win the UEFA Champions League in 2019
                and the English Premier League title in 2020 after a 30-year
                drought.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className={`accordion-button collapsed ${
                  activeId === 'item2' ? 'active-acc-btn' : ''
                }`}
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'
                onClick={() => toggleActiveClass('item2')}
                aria-expanded={activeId === 'item2'}
                aria-controls='collapseTwo'
              >
                What is Jurgen Klopp’s managerial style?
              </button>
            </h2>
            <div
              id='collapseTwo'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                Klopp is known for his passionate and animated touchline
                presence. He maintains a close bond with his players, often
                described as a “player’s manager,” and emphasizes building
                strong relationships within the team.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className={`accordion-button collapsed ${
                  activeId === 'item3' ? 'active-acc-btn' : ''
                }`}
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
                onClick={() => toggleActiveClass('item3')}
                aria-expanded={activeId === 'item3'}
                aria-controls='collapseThree'
              >
                What is Jurgen Klopp’s coaching philosophy?
              </button>
            </h2>
            <div
              id='collapseThree'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                Klopp’s coaching philosophy emphasizes high-intensity football,
                teamwork, and attacking play. He places great importance on
                creating a positive and united team culture.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Accordion;
