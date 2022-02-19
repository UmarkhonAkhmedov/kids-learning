import styled from "styled-components";

function FilterMenu({menuItem}) {
  return (
    <Content className='filterMenu'>
      {menuItem.map((item) => {
        return (
          <div className="video">
              <iframe width="420" height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
              </iframe>
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