import Wave from 'react-wavify';
import styled from '@emotion/styled'; 

const WaveContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: ${(props) => props.level + 'vh'};
  display: flex;
  transform: rotate(180deg);
`;

const wave = () => {
    return ( 
        <div>
      <WaveContainer level={90}>
        <Wave
          fill="#BCE7EB"
          paused={false}
          opacity="0.30"
          options={{
            height: 30,
            speed: 0.2,
          }}
        />
      </WaveContainer>
      <WaveContainer level={90}>
        <Wave
          fill="#BCE7EB"
          opacity="0.80"
          paused={false}
          options={{
            height: 80,
            speed: 0.3,
          }}
        />
      </WaveContainer>
      <WaveContainer level={90}>
        <Wave
          fill="#B0DFE5"
          paused={false}
          opacity="0.5"
          options={{
            height: 5,
            speed: 0.1,
          }}
        />
      </WaveContainer>
    </div>
     );
}
 
export default wave;