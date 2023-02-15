import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AnimateProvider from './context/AnimateProvider';
import Header from './components/Header';
import './style/index.css';
import Skills from './pages/Skills';
import ContentDetail from './pages/ContentDetail';
import Content from './pages/Content';
import Contact from './pages/Contact';

const App = () => {
    const [isLightMode, setLightMode] = useState(false);

    return (
        <div className={ isLightMode ? 'container light' : 'container'} >
            <BrowserRouter>
            <AnimateProvider>
                <Header isLightMode={isLightMode} setLightMode={setLightMode} />
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/skills' component={Skills}/>
                            <Route exact path='/content/:id' component={ContentDetail}/>
                            <Route exact path='/content' component={Content}/>
                            <Route exact path='/contact' component={Contact}/>
                            </Switch>
                </AnimateProvider>
            </BrowserRouter>
        </div>
    );
};

export default App;