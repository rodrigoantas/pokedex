import styled from 'styled-components';


export const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap; 
margin-top: 200px;
`


export const Card = styled.div`
  cursor: pointer;
  transition: 0.4s;
  width: 300px;
  height: 100px;
  margin: 0 20px;
  margin-bottom: 200px;
  border: none;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  img {
    width: 200px;
    height: 200px;
    position: absolute;
    bottom: 50px;
    z-index: 2;
  }
  section {
    width: 100%;
    display: flex;
    justify-content: center;


    h1 {
      text-transform: capitalize;
    }
   

    div {
      display: flex;
      flex-direction: column;
      span {
        border: 1px solid black;
        border-radius: 5px;
        padding: 3px;
        display: flex;
        justify-content: center;
        text-transform: capitalize;
        margin-bottom: 3px;
        font-weight: 600;
      }
      
    }
  }

  section:nth-child(2){
    padding: 0 10px; 
    
    display: flex;
    justify-content: space-between; 
    p {
        border: 1px solid currentColor;
        padding: 5px;
        height: fit-content;
        color: black;
        font-weight: 600;
        background-color: #F76855;
    }
  }

  &:hover {
    transform: scale(1.05);
    transition-duration: 200ms;
     img {
      transform: scale(1.15);
      transition-duration: 200ms;
    }
  }


`