import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const useStyles = theme => ({
    card: {
      display: 'flex',
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 22,
    },
    pos: {
      marginBottom: 12,
    },
  });

class toDoListItem extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
         <Grid item xs={12} sm={12}>
           <Card className={classes.card} style={{padding:"1em"}} Button>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={11}>
                <Typography className={classes.title} color="textSecondary">
                      {this.props.name}
                </Typography>
                </Grid>
            <Grid item xs={12} sm={1}>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
            </Grid>
           </Grid>
           </Card>
         </Grid>
        </Grid>
        </Container>
    );
  }
}

export default withStyles(useStyles)(toDoListItem);