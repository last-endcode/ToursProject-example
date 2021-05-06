import React, { useState } from 'react';

function Tourism({ tourism, removeId }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <section>
      <div className='title'>
        <h1>visit our</h1>
        <div className='underline'></div>
      </div>

      {tourism.map((tours) => {
        const { id, name, image, info, price } = tours;
        return (
          <article key={id} className='tourism'>
            <img src={image} alt='' />
            <footer>
              <div className='info-tour'>
                <h4>{name}</h4>
                <p className='price'>$ {price}</p>
              </div>
              <p className='text-info'>
                {readMore ? info : `${info.substring(0, 200)}...`}

                <button
                  className='readMore'
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? 'showLess' : 'readMore'}
                </button>
              </p>
              <button className='remove-btn' onClick={() => removeId(id)}>
                remove list
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
}

export default Tourism;
