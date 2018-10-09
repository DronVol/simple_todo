import React, { Component } from 'react';
import {withStyles} from "@material-ui/core/styles";
import Adder from "./taskAdder";

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

class Todo extends Component {

    constructor(props){

        super(props);

        this.state = {
            checked: []
        };

    };

    render(){
       return(
           <div className={"todo_wrapper"}>
               <div className={"todo_title"}>To-do app</div>
               <div className={"todo_body"}>
                   <Adder/>
                   <div className={"todo_item"}>Content</div>
                   <div className={"todo_item"}>Task 1</div>
                   <div className={"todo_item"}>Buy milk</div>
               </div>
           </div>
       )
    }
}

export default withStyles(styles)(Todo);
