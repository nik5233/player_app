import React, { Component } from 'react'
import PlayerCard from './PlayerCard'
import './playerDesigns.css'
class PlayersList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            PlayersData: [],
            TeamData: [],
            searchValue: '',
            isSearch: true
        }
    }

    componentDidMount(){
        this.getList()
    }

    getList(){
        fetch('https://api.npoint.io/20c1afef1661881ddc9c')
            .then(response => response.json())
            .then(data => {
                this.setState({PlayersData: data.playerList, TeamData: data.teamsList})
            });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.SearchIntoList(event.target[0].value)
    }

    SearchIntoList(value){
        this.setState({
            searchValue: value !== "" && value,
            isSearch: value !== "" ? true : false
        })

        fetch('https://api.npoint.io/20c1afef1661881ddc9c')
            .then(response => response.json())
            .then(responseData => {
                this.setState({PlayersData: responseData.playerList.filter((data,id) => data.TName === value || data.PFName === value)})
            });
    }

    handleReset(event){
        document.getElementById("search-form").reset();
        this.setState({
            isSearch: false
        })
        this.getList()
    }

    render() {
        return (
            this.state.PlayersData ? <div className="main-container">
                PlayersList
                <form id="search-form" onSubmit={(e) => this.handleSubmit(e)} onReset={(e) => this.handleReset(e)}>
                    <label>Search:
                        <input type="text"/>
                    </label>
                    <button type="submit" >Submit</button>
                    <button type="reset" value="Reset" >clear</button>
                </form>
                {this.state.isSearch ? <p>Showing the total {this.state.PlayersData.length} result for  {this.state.searchValue}</p> : <>please Enter value</>}
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
