import React, { Component } from 'react';

const StoreContext = React.createContext();

class StoreProvider extends Component {
    state = {
        page: 2,
        players: [
            { name: 'Joshua', unique: 'sdfasgas309u434' },
            { name: 'Jane', unique: 'sdfasgassdfjkds309u434' }],
        die: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    }

    componentDidMount() {
        const dice = this.state.die.map(el => {
            return { die: el, inventory: [] };
        });
        this.setState({ dice });
    }

    setPageHandler = (page) => {
        this.setState({ page: page });
    }

    addPlayerHandler = (name) => {
        let newPlayer = { name: name, unique: `${Math.random()}${Date.now()}` };
        let copyPlayers = [...this.state.players];
        copyPlayers = copyPlayers.map(el => {
            el = { ...el };
            return el;
        });
        copyPlayers.push(newPlayer);
        this.setState({ players: copyPlayers }, () => {
            console.log(this.state.players);
        });
    }

    deletePlayerHandler = (id) => {
        const filteredPlayers = this.state.players.filter(el => el.unique !== id);
        this.setState({ players: filteredPlayers });
    }



    render() {
        return (
            <StoreContext.Provider value={{
                ...this.state,
                setPageHandler: this.setPageHandler,
                addPlayerHandler: this.addPlayerHandler,
                deletePlayerHandler: this.deletePlayerHandler,


            }}>
                {this.props.children}
            </StoreContext.Provider>
        )
    }
}

const StoreConsumer = StoreContext.Consumer;

export { StoreProvider, StoreConsumer, StoreContext };