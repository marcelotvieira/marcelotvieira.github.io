import animateContext from './animateContext';
import UseAnimate from '../hooks/UseAnnimate';

const AnimateProvider = ({children}) => {

    const value = UseAnimate();

    return (
        <animateContext.Provider value={value} >
            { children }
        </animateContext.Provider>
    )
}

export default AnimateProvider;