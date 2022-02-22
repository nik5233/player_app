import React, { Component } from 'react'
import PlayerCard from './PlayerCard'
import './playerDesigns.css'
class PlayersList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            PlayersData: [],
            TeamData: []
        }
    }

    componentDidMount(){
        this.getList()
    }

    getList(){
        fetch('https://api.npoint.io/20c1afef1661881ddc9c')
            .then(response => response.json())
            .then(data => {
                // console.log(data.playerList)
                this.setState({PlayersData: data.playerList, TeamData: data.teamsList})
            });
    }

    // getPlayer(id){
    //     const player = this.state.PlayersData.playerlist.filter(data =>  id === data.TID)
    //     return player
    // }

    // getTeam(id){
    //     const player = this.state.PlayersData.teamlist.filter(data =>  id === data.TID)
    //     return player
    // }

    render() {
        return (
            this.state.PlayersData ? <div className="main-container">
                {/* {console.log("object",this.state.PlayersData)}
                {console.log(this.getPlayer("50139"))}
                {console.log(this.getTeam("50139"))} */}
                PlayersList
                <div className="grid-wrapper">
                    {this.state.PlayersData.map((data, id) => {
                        return <div key={data.Id}>
                            <PlayerCard data={data} />
                        </div>
                    })}
                </div>
            </div>: <div>
                No data
            </div>
        )
    }
}

export default PlayersList
