import React, { Component } from 'react';


class History extends Component {
    
    render() {

        let histories = this.props.history;
        let notLogin = '';
        if(!this.props.isLogin){
            notLogin = <div className="row">
                            <div >
                                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <br/>
                                    <h1>To view the history:</h1>
                                    <br/>
                                    <h3>Please Sign In first!!!</h3>
                                </div>
                            </div>
                            <br/><br/><br/>
                        </div>
        }
        return (
            <div className="container">
                {notLogin}
                {histories.map(history =>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <h3>{history.longlink}</h3>
                            <p className="lead mb-0">Short Url:  {history.shortlink}</p>
                            <p className="lead mb-0">Clicks:</p>
                            </div>
                        </div>
                        <br/><br/><br/>
                    </div>
                 )}
                <br/><br/>
            </div>
        );
    }
}

export default History;
