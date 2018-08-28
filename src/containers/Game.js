import { connect } from 'readt-redux';

import App from '../App';


const mapStateToProps = state => ({
  message:state.message,
});

const Game = connect ( 
  mapStateToProps,
)(App);

export default Game;