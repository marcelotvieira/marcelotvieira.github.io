import javascript from '../images/javascript.png';
import typescript from '../images/typescript.png';
import csharp from '../images/csharp.png';
import react from '../images/react.png';
import node from '../images/nodejs.png';
import next from '../images/next.png';
import dotnet from '../images/dotnet.png';

const StackSlider = () => {
  const stacks = [
    javascript,
    typescript,
    csharp,
    react,
    node,
    next,
    dotnet
  ]
  return (
    <div className="home-stacks-container">

        {stacks.map((s) => (
          <div>
            <img className="slider-image" src={s} alt="" />
          </div>
        ))}

    </div>
  )

};

export default StackSlider;