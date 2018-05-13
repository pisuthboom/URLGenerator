import React, { Component } from 'react';
import {Table} from 'reactstrap';
class History extends Component {
    
    render() {

        let histories = this.props.history;
        let notLogin = '';
        let historyFromRecents = [];
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
        }else{
            histories.map(history => {
                if(history.username==this.props.user){
                    historyFromRecents = [{
                        longlink : history.longlink,
                        shortlink : history.shortlink,
                        clicks: history.clicks
                    },...historyFromRecents];
                }
            });
        }
        let count = 0;
        return (
            <div className="container">
                {notLogin}
                <br/>
                <h6>History</h6>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Link</th>
                            <th>Short Link</th>
                            <th>Clicks (During shortening)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {historyFromRecents.map(historyFromRecent =>           
                            <tr>
                                <th scope="row">{++count}</th>
                                <td>{historyFromRecent.longlink}</td>
                                <td>{historyFromRecent.shortlink}</td>
                                <td>{historyFromRecent.clicks}</td>
                            </tr>
                    )}
                    </tbody>
                </Table>
                <br/><br/>
            </div>
        );
    }
}

export default History;
