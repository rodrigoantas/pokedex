import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  background-color: #0E0E0E;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
`

export const Content = styled.div`
img {
  width: 800px;
}

@media (max-width: 900px){
  img {
    width: 500px;
  }
}

@media (max-width: 700px){
  img {
    width: 300px;
  }
}

@media (max-width: 500px){
  img {
    width: 200px;
  }
}
`
