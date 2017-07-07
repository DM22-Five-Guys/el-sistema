import React, { Component } from 'react';
import '../style.css';
import edit from '../../../../../img/pencil.png';

export default class RecentEdits extends Component {
    constructor(){
        super();
        this.state = {
            recentEdits: [
                {
                    type: 'Blog',
                    title: 'New Instruments',
                    date: 'yesterday'
                },
                {
                    type: 'Volunteer',
                    title: 'James Raven',
                    date: 'tomorrow'
                },
                {
                    type: 'Test',
                    title: 'Did it work?',
                    date: 'today'
                },
                {
                    type: 'Confirmed',
                    title: 'It worked!',
                    date: 'never'
                }
            ]
        }
    }
    render() {
        return (

            <div className='container'>
              <div className='recent-content-container' >
                <h1 className='container-fluid-changes'>Recent Content Changes</h1>
                <div className="table-container-recent">
                    <table className="recent-table">
                        <tr className='recent-header'>
                            <th className="recent-col-header">
                                Type
                            </th>
                            <th className="recent-col-header">
                                Date
                            </th>
                            <th className="recent-col-header">
                                Title
                            </th>
                            <th className="recent-col-header">
                                Edit
                            </th>
                        </tr>
                        {this.state.recentEdits.map((item)=>{
                            return(
                                <tr className="recent-edit-rows">
                                    <td>{item.type}</td>
                                    <td>{item.date}</td>
                                    <td>{item.title}</td>
                                    <td><img className="edit-logo" src={edit} alt=""></img></td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
              </div>
            </div>
        )
    }
}
