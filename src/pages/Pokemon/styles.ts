import styled from 'styled-components'

interface StatsProps {
  base_stat: number;
}


export const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap; 
margin-top: 50px;
margin-bottom: 50px;
text-transform: capitalize;
`
export const Card = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px 10px;
width: 1024px;
border-radius: 10px;

@media (max-width: 1200px) {
  width: 800px;
}

@media (max-width: 900px) {
  width: 600px;
}

@media (max-width: 600px) {
  width: 450px;
}

@media (max-width: 500px) {
  width: 350px;
}
`
export const CardTitle = styled.div`
display: flex;
align-items: center;
margin-bottom: 30px;
 h1 { 
  margin-right: 10px;
 }
 p {
   font-size: 20px;
 }

 svg {
   margin-right: 10px;
   color: #F76855;
 }
`
export const CardTopSide = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
width: 100%;
margin-bottom: 20px;

.img-div {
  padding-left: 20px;
}

img {
  width: 400px;
  height: 400px;
  background-color: #F76855;
  border-radius: 15px;
  padding: 20px;

}

@media (max-width: 1200px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .img-div {
    padding: 0;
  }

  img {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 600px) {
  img {
    width: 200px;
    height: 200px;
  }
}
`
export const Info = styled.div`
background-color: white;
display: grid;
grid-template-columns: 1fr 1fr;
border-radius: 10px;
align-self: center;
justify-self: center;

width: 400px;
height: 100px;
height: fit-content;

padding: 10px;

p {
  margin: 10px 0;
}

@media (max-width: 600px) {
  width: 100%;
}



`

export const CardMidSide = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;

@media (max-width: 1200px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}


`
export const Types = styled.div`
display: flex;
flex-direction: column;
align-items: center;

span {
  border: 1px solid black;
  border-radius: 5px;
  padding: 3px 30px;
  display: flex;
  justify-content: center;
  text-transform: capitalize;
  margin-bottom: 3px;
  font-weight: 600;
  width: fit-content;
  height: fit-content;
}

> div {
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  }
`

export const Stats = styled.div`
width: 100%;
padding-left: 20px;

@media (max-width: 1200px) {
 padding: 0;

}

`

export const Stat = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 5px;
   width: 100%;
 `;

export const StatLabel = styled.div`
   color: #fff;
   font-weight: 600;
   font-size: 12px;
   margin-bottom: 2px;
   text-transform: capitalize;
 `;

export const StatBar = styled.div<StatsProps>`
   width: 100%;
   height: 4px;
   background: #ccc;
   border-radius: 5px;
   position: relative;
   &::before {
     content: ' ';
     background: blue;
     height: 4px;
     width: ${props => (props.base_stat ? (props.base_stat * 100) / 500 : 0)}%;
     position: absolute;
     border-radius: 5px;
   }
   &::after {
     content: '${props => props.base_stat}/500';
     position: absolute;
     right: 0;
     top: -15px;
     color: #fff;
     font-size: 11px;
   }
 `;



export const CardBottomSide = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 40px;
text-align: center;

svg {
  height: 200px;
}

> div {
  display: flex;
}
img {
  width: 200px;
  height: 200px;
  margin: 0px 15px;

  &:hover {
    transform: scale(1.15);
    transition-duration: 200ms;
  }
}

@media (max-width: 1200px) {
 img {
   width: 150px;
   height: 150px;
 }
 
}

@media (max-width: 900px) {
 img {
   width: 100px;
   height: 100px;
 }
 
}

@media (max-width: 500px) {
 img {
   width: 50px;
   height: 50px;
 }
 svg {
  height: auto;
}
 
}
`