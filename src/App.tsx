//Dependencies
import React, {Component} from 'react';
import {Provider} from 'react-redux';

//ReduxStore
import Store from './redux/reducers/RootReducer';

//Components
import AppContainer from "./components/AppContainer";

class App extends Component {
    render() {
        return (
            <div id="App">
                <Provider store={Store}>
                    <AppContainer/>
                </Provider>
            </div>
        );
    }
}

export default App;
