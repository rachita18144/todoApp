import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTodo, getTodos} from '../actions';
import ToDoListItem from './toDoListItem';

const useStyles = theme => ({
    button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
 paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
});

class todoComponent extends React.Component {
   constructor(props) {
   super(props);
   this.state = {
      todoVal: "",  
      isRendered: false
    };
  }

  componentDidMount(){
      this.props.getTodos()
  }

  render() {
     const { classes } = this.props;
     var well={
        width: "55em",
        height: "100px",
        padding: "15px",
        boxShadow: "10px 10px 10px #9E9E9E"

    }
    return (
      <React.Fragment>
          <Paper className={classes.paper}>
          <Grid item xs={12} sm={12}>
          <div style={well}>
          <TextField
            label="Enter Item"
            fullWidth
            onBlur={e => {
                this.setState({todoVal: e.target.value });
            }}
          />
          </div>
        </Grid>
        </Paper>
        <Grid item xs={12} sm={12} align="center">
        <Button
          variant="contained"
          color="primary"
          onClick={()=>this.props.addTodo(this.state.todoVal)}
          className={classes.button}>Add</Button>
        </Grid>
        <Grid item xs={12}>
          {console.log("*1*1", this.props.todos)}
          {console.log(new Date().getSeconds())}
          {console.log(new Date().getMilliseconds())}
          {this.props.todos.todos && this.props.todos.todos.map(todo => {
              return <ToDoListItem key={todo.task} name={todo.task} />
          })}
        </Grid>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addTodo, getTodos}, dispatch)
}

const mapStateToProps = (state) => {
  console.log(state.todos)
  return {
    todos: state.todos
  }
}

todoComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(todoComponent)

export default withStyles(useStyles)(todoComponent);