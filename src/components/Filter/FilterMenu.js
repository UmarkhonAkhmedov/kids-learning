import react, { useState } from "react";
import styled from "styled-components";
import 'react-modal-video/scss/modal-video.scss';
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

function FilterMenu({menuItem}) {
  const [isOpen, setOpen] = useState(false)

  return (
    <Content className='filterMenu'>
      {menuItem.map((item) => {
        return (
          <div className="video">
            <ModalVideo id="video__content" channel='youtube' autoplay isOpen={isOpen} videoId={item.link} onClose={() => setOpen(false)} />
            <button key={item.id} className="btn-primary" onClick={()=> setOpen(true)}>
              <img className="video__img" src={`https://i1.ytimg.com/vi/${item.link}/hqdefault.jpg`}/>
              <p>{item.title}</p>
            </button>
          </div>
        )
      })}
    </Content>
  );
}

export default FilterMenu;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .video {
    border: 2px solid green;
    margin: 20px 0;
    height: 100%;
    max-width: 350px;
    width: 100%;
    background-color: #2F364B;
    color: white;

    .video__img {
      width: 100%;
    }
    button {
      display: block;
      color: white;
      background-color: transparent;
      text-align: left;
      border: none;
    }
    p {
      padding: 10px;
    }
  }
`