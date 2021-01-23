import { Box, Grid, makeStyles, Paper } from '@material-ui/core';
import Child from './Child.js';
import Child2 from './Child2.js';
import { Child3 } from './Child3.js';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      padding: theme.spacing(5),
    },
  },
}));

function Parent() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Paper color="text.primary" elevation={3}>
          <Grid container spacing={3}>
            <Grid item xs={3} >
                This is Parent
            </Grid>
            <Grid item xs={3} >
                <Child value="20"></Child>
            </Grid>
            <Grid item xs={4} >
                <Child2 value="20"></Child2>
            </Grid>
            <Grid item xs={2} >
                <Child3 value={30}></Child3>
            </Grid>
            
          </Grid>        
        </Paper>
      
      </div>
    );
  }
  
  export default Parent;
  