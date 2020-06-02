import React, {Component} from 'react';

const InfoContext = React.createContext();
class InfoProvider extends Component{
    render() {
        return (
            <InfoContext.Provider> </InfoContext.Provider>

        );
    }
}

export default InfoProvider;
