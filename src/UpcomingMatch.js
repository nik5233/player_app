import React, { Component } from 'react'

class UpcomingMatch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>{this.props.upcomingMatches.map((data, id) => {
                return <div className="u_card" key={id}>
                <div className="card_title">
                    <span>Upcoming Match</span>
                </div>
                <div className="match_info">
                    <div className="team_name">
                        <div className="team1">
                            <span>{data.CCode}</span>
                        </div>
                        <div className="team2">
                            <span>{data.VsCCode}</span>
                        </div>
                    </div>
                    <div className="vs">
                        vs
                    </div>
                    <div className="date_time">
                        {this.props.convert('Date', data.MDate)} <br />
                        {this.props.convert('Time', data.MDate)}
                    </div>
                </div>
            </div>
            })}</>
        )
    }
}

export default UpcomingMatch
