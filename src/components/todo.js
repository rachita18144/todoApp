import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ToDoComponent from './todoComponent';

const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 880,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
 
});

class todo extends React.Component {
  
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
         <CssBaseline />
        <main className={classes.layout}>
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography component="h1" variant="h2" align="center">
                 todos
              </Typography>
              <ToDoComponent/>
            </Grid>
        </Grid>
        </Container>
        </main>
        </div>
    );
  }
}

export default withStyles(useStyles)(todo);