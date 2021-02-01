import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  -webkit-font-smoothing: antialiased !important;
  font-family: 'Inter';
  background: radial-gradient(at center bottom, rgb(27, 39, 53) 0%, rgb(9, 10, 50) 100%);
}

button {
  cursor: pointer;
}

body html #root {
  height: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}


.electric {
  background-color: #F3D23B;
}
.steel {
background-color: #5A8EA1;
}
.normal {
background-color: #9099A1;
}
.fighting {
background-color: #CE4069;
}
.flying {
background-color: #8FA8DD;
}
.poison {
background-color: #C183C1;
}
.ground {
background-color: #D97746;
}
.rock {
background-color: #C7B78B;
}
.bug {
background-color: #90C12C;
}
.ghost {
background-color: #5269AC;
}
.fairy {
background-color: #EC8FE6;
}
.fire {
background-color: #FF9C54;
}
.water {
background-color: #4D90D5;
}
.grass {
background-color: #63BB5B;
}
.psychic {
background-color: #F97176;
}
.ice {
background-color: #74CEC0;
}
.dark {
background-color: #5B5567;
}
.dragon {
background-color: #0A6DC4;
}


div.electric {
background-color: #F3D23B;

  &:hover {
    background-color: ${shade(0.4, '#F3D23B')}
  }
}
div.steel {
background-color: #5A8EA1;

  &:hover {
    background-color: ${shade(0.4, '#5A8EA1')}
  }
}
div.normal {
background-color: #9099A1;
  &:hover {
    background-color: ${shade(0.4, '#9099A1')}
  }
}
div.fighting {
background-color: #CE4069;
  &:hover {
    background-color: ${shade(0.4, '#CE4069')}
  }
}
div.flying {
background-color: #8FA8DD;
  &:hover {
    background-color: ${shade(0.4, '#8FA8DD')}
  }
}
div.poison {
background-color: #C183C1;
  &:hover {
    background-color: ${shade(0.4, '#C183C1')}
  }
}
div.ground {
background-color: #D97746;
  &:hover {
    background-color: ${shade(0.4, '#D97746')}
  }
}
div.rock {
background-color: #C7B78B;
  &:hover {
    background-color: ${shade(0.4, '#C7B78B')}
  }
}
div.bug {
background-color: #90C12C;
  &:hover {
    background-color: ${shade(0.4, '#90C12C')}
  }
}
div.ghost {
background-color: #5269AC;
  &:hover {
    background-color: ${shade(0.4, '#5269AC')}
  }
}
div.fairy {
background-color: #EC8FE6;
  &:hover {
    background-color: ${shade(0.4, '#EC8FE6')}
  }
}
div.fire {
background-color: #FF9C54;
  &:hover {
    background-color: ${shade(0.4, '#FF9C54')};
  }
}
div.water {
background-color: #4D90D5;
  &:hover {
    background-color: ${shade(0.4, '#4D90D5')}
  }
}
div.grass {
background-color: #63BB5B;
  &:hover {
    background-color: ${shade(0.4, '#63BB5B')}
  }
}
div.psychic {
background-color: #F97176;
  &:hover {
    background-color: ${shade(0.4, '#F97176')}
  }
}
div.ice {
background-color: #74CEC0;
  &:hover {
    background-color: ${shade(0.4, '#74CEC0')}
  }
}
div.dark {
background-color: #5B5567;
  &:hover {
    background-color: ${shade(0.4, '#5B5567')}
  }
}
div.dragon {
background-color: #0A6DC4;
  &:hover {
    background-color: ${shade(0.4, '#0A6DC4')}
  }
}
`;
