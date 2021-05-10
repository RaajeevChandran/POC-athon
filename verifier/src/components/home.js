import React,{useEffect} from 'react';
import MenuAppBar from './appBar';
import AnimatedNumber from "animated-number-react";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from "react-router-dom"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import firebase from "firebase"
import { PieChart } from 'react-minimal-pie-chart';
import Votes from './votes';


const useStyles = makeStyles((theme) => ({
    form: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: 'fit-content',
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120,
    },
    formControlLabel: {
      marginTop: theme.spacing(1),
    },
  }));


const Home = () => {
    const [open, setOpen] = React.useState(false);
    const [countvotes,setcountvotes] = React.useState(0)
    const [items,setitems]=React.useState([])

  useEffect(() => {
    const ref = firebase.firestore().collection("vote")
      ref.onSnapshot((querySnapshot)=>{
        var items=[]
        querySnapshot.forEach((e)=>{
          items.push(e.data())
        })
        console.log(items)
        
      setitems(items)
      })
  }, [])

    const handleClickOpen = () => {
     setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };
   const formatValue = value => <h1>No.of votes received : {Number(value).toFixed(2)}</h1>;

    return (
        <div>
            <MenuAppBar/>
            <div style={{backgroundColor:"#0059a4",height:"100%",display:"grid",placeItems:"center",justifyItems:"center"}}>
                <div style={{backgroundColor:"white",margin:"10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"300px",borderRadius:"30px",width:"40%"}}>
                <AnimatedNumber
          value={items.length}
          formatValue={formatValue}
          duration={1000}
        />
        <h1>{`No.of Votes Counted : ${countvotes}`}</h1>
        <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
        <Button variant="contained" color="primary" onClick={()=>setcountvotes(items.length)}>Count Votes</Button>
        {countvotes===0 ? <Button variant="contained" color="primary" disabled>Voting Summary</Button> : <Button variant="contained" color="primary" onClick={handleClickOpen}>Voting Summary</Button>}
        <Dialog
        fullWidth={true}
        maxWidth={'md'}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">RESULTS</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText> */}
          <div style={{height:"60vh",display:"flex",flexDirection:"row"}}>
              <div style={{width:"50%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <img style={{width:"300px",height:"200px"}} src="https://d2ekxuuyaakxli.cloudfront.net/media/public/images/thomas-2016-04-08T01-12-49-483Z.jpg" alt=" "/>
              <h1>{electionSummary}</h1>
              </div>
              <div style={{width:"50%",display:"grid",placeItems:"center"}}>
              <PieChart
          style={{width:"300px",height:"300px"}}
          animate={true}
          animationDuration={500}
          labelPosition={22}
  data={candidateList}
/>
              </div>

          </div>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
        </div>


                </div>
                <h1 style={{color:"white"}}>Recorded votes</h1>
                {items.map((e)=><Votes votesData={e}/>)}

            </div>
        </div>
    );
}

export default Home;

