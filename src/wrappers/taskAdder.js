import { connect } from 'react-redux';
import Adder from '../components/taskAdder';
import { addTask } from "../actions";

const mapStateToProps = ({getTask}) => {
    return { ...getTask };
};

const actionCreators = { addTask };

export default connect(mapStateToProps, actionCreators)(Adder);