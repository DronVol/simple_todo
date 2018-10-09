import React, { Component } from 'react';
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    popup : {
        top: -67,
        left: 0,
        width: "100%",
        height: "calc(100% + 70px)",
        zIndex: 9000,
        position: "absolute"
    },
    close : {
        width: 40,
        height: 40,
        position: "absolute",
        right: 0,
        top: 15,
        zIndex: 9999
    },
    closeIcon: {
        width: 40,
        height: 40,
        fill: "#fff"
    }, root: {
        display: 'flex',//
        '&$checked': {
            color: 0
        },
    },
    formControl: {
        //margin: theme.spacing.unit * 3,
        color: "white",
        height: "70px",
        width: "250px"
    },
    group_wrapper: {

    },
    group: {
        margin: "14px -37px",
        color: "white",
        display: "-webkit-box",
        //display: "inline",
        webkitBoxOrient: "vertical"
    },
    radio: {color: "red"}
});

class Adder extends Component {

    constructor(props){

        super(props);

        this.state = {
            checked: []
        };

    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            alert("Change!");
            this.props.addTask("hello world");
        }
    };

    render(){
        console.log(this.props.getTask.newTask);
        return(
            <div className={"task_adder_wrapper"}>
                <input className={"add_input"} type="text" onKeyPress={this.handleKeyPress}></input>
                <button className={"add_button"}>Add</button>
            </div>
        )
    }
}
""
export default withStyles(styles)(Adder);