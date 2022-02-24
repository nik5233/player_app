import React, { Component } from 'react'
import UpcomingMatch from './UpcomingMatch'

class PlayerCard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {

    }

    dateConvert(type, date) {
        const UTCDate = new Date(`${date} UTC`)
        return type === "Date" ? `${UTCDate.toLocaleDateString()}` : type === "Time" ? `${UTCDate.toLocaleTimeString()}` : 'Match Delayed'
        // return `${UTCDate.toLocaleDateString()} ${UTCDate.toLocaleTimeString()}`
    }

    render() {
        // var randomColor = Math.floor(Math.random()*16777215).toString(14);
        // const color = "#" + randomColor

        var colors = ["0a210f", "14591d", "99aa38", "e1e289", "acd2ed", "002A32", "000000", "66101F", "F3DE8A", "EB9486", "966B9D", "F2B880", "EF476F", "FFD166", "06D6A0", "118AB2", "073B4C", "D62828", "757BC8", "774936", "F2542D", "0E9594", "3ADE60"]
        const color = "#" + colors[Math.floor(Math.random() * colors.length)];

        const player = this.props.data
        return (
            <div className="playerCard">
                <div className="card">
                    <div className="additional" style={{ backgroundColor: color }}>
                        <div className="user-card">
                            <div className="level center">
                                Skill {player.Skill}
                            </div>
                            <div className="points center">
                                {player.TotPts} Points
                            </div>
                            <img src={`/player_app/player-images/${player.Id}.jpg`} width="110" height="110" className="center image--cover" alt="" />
                        </div>
                        <div className="more-info">
                            <h1>{player.PFName}</h1>
                            <div className="coords">
                                <span>Team Name:  {player.TName}</span>
                            </div>
                            <div className="coords">
                                <span>Position: {player.SkillDesc}</span>
                            </div>
                            <div className="stats">
                                <div>
                                    <div className="title">UpComing Matches</div>
                                    <div className="value">{player.UpComingMatchesList.length}</div>
                                </div>
                                <div>
                                    <div className="title">Player Availabe</div>
                                    <div className="value">{player.AvbStatus === 1 ? "Yes" : "No"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="general">
                        <h1>{player.PDName}</h1>
                        <div>
                            {/* {divlayer.Trained} <br />
                            Match Atd: {player.MatchAtd} <br /> */}
                            <b>Value: ${player.Value}</b> <br />
                            <b>Skill: {player.SkillDesc}</b> <br />
                            <UpcomingMatch upcomingMatches={player.UpComingMatchesList} convert={this.dateConvert} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerCard
