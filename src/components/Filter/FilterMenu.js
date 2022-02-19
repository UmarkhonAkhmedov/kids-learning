import styled from "styled-components";

function FilterMenu({menuItem}) {
  return (
    <Content className='filterMenu'>
      {menuItem.map((item) => {
        return (
          <div className="video" key={item.id}>
            <iframe  src={`https://www.youtube.com/embed/${item.link}`} allowFullScreen></iframe>
            <p>{item.title}</p>
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
    border: 1px solid black;
    margin: 20px 0;
    max-width: 350px;
    width: 100%;
    background-color: #2F364B;
    color: white;
    iframe {
      height: 200px;
      width: 100%;
      border: none;
    }
    p {
      padding: 10px;
    }
  }
`