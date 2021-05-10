import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';

import { SnackbarProvider, useSnackbar } from 'notistack';

import Divider from '@material-ui/core/Divider';
import firebase from "firebase/app"
// import { withStyles } from '@material-ui/core/styles';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  image:{
    width:'100px',
    height:'100px'
  }
}));

export default function Credentials(props) {
    const classes = useStyles();
    console.log("accesstoken - "+props.accessToken)
    // const [open, setOpen] = React.useState(false);
    const [verifying,setVerifying] = React.useState(false)
    const [response, setresponse] = React.useState({})
    const {username,aadhar_image,user_image,ip} = props.credsData
    const {unverified_vc,} = props.credsData
    // console.log("unverified vc is "+unverified_vc)
    const {holder,credentialSubject} = unverified_vc
    const {id} = holder
    const {data} = credentialSubject
    const {hasIDDocument} = data
    const {issueDate,issueType} = hasIDDocument
    




//       const styles = (theme) => ({
//       root: {
//     margin: 0,
//     padding: theme.spacing(2),
//   },
//   closeButton: {
//     position: 'absolute',
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500],
//   },
// });

//     const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

// const DialogContent = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//   },
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

// const CustomizedDialogs = () => {

//   useEffect(() => {
    
//   }, [])

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
      
//       <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
//         <DialogTitle id="customized-dialog-title" onClose={handleClose}>
//           Verifying Credential
//         </DialogTitle>
//         <DialogContent dividers>
//           { verifying ? <Typography gutterBottom>
//             {JSON.stringify(unverified_vc)}
//           </Typography> : ( <Typography gutterBottom>Signed</Typography>)}
         
//         </DialogContent>
//         <DialogActions>
//           {verifying ? <Button autoFocus onClick={handleClose} color="primary" disabled>
//             Save changes
//           </Button> : <Button autoFocus onClick={handleClose} color="primary">
//             Save changes
//           </Button>}
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }




    const signVC = async () => {
      // setOpen(!open)
      setVerifying(true)
      const raw = JSON.stringify({
        "unsignedCredential":unverified_vc
      })
      var myHeaders = new Headers();
myHeaders.append("Api-Key", "4b72e3fb03d3f6de8dd146b4034c9bac596f98d29d9ea6bc7c8b7d8ac7762b41");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${props.accessToken}`);
      
      // fetch("https://votefromhome.herokuapp.com/api/signVC", requestOptions)
      //   .then(response => response.text())
      //   .then(result =>{
      //     console.log("result is "+result)
      //     setverifyResponse(result)
      //     // firebase.firestore().collection("unsignedVC").doc(username).delete().then(()=>console.log("removed from unsigned")).catch(e=>console.log("failed to remove from unsigned"));
      //     // firebase.firestore().collection("signedVC").doc(username).set({"username":username,"aadhar_image":aadhar_image,"user_image":user_image,"signedVC":verifyResponse,"ip":ip,}).then(()=>console.log("added to signedvc")).catch((e)=>console.log("failed to add signedvc"));
      //     // firebase.firestore().collection("users").doc(username).set({"username":username,"isVerified":true}).then(()=>console.log("added to user")).catch((e)=>console.log("err in updating user"))
      //     setVerifying(false)
      //   })
      //   .catch(error => {
      //     console.log('error', error)});
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      };

        await fetch("https://cloud-wallet-api.prod.affinity-project.org/api/v1/wallet/sign-credential", requestOptions)
          .then(response => response.json())
          .then(async result =>{ 
          //   setresponse(result)
          const foo = result.signedCredential
          console.log("%O",result.signedCredential)
          console.log(foo)
          await firebase.firestore().collection("unsignedVC").doc(username).delete().then(()=>console.log("removed from unsigned")).catch(e=>console.log("failed to remove from unsigned"));
          await firebase.firestore().collection("signedVC").doc(username).set({"username":username,"aadhar_image":aadhar_image,"user_image":user_image,"signedVC":foo,"ip":ip,}).then(()=>console.log("added to signedvc")).catch((e)=>console.log("failed to add signedvc"));
          await firebase.firestore().collection("users").doc(username).set({"username":username,"isVerified":true}).then(()=>console.log("added to user")).catch((e)=>console.log("err in updating user"))
          console.log("setting setverify")
          setVerifying(false)
        })
          .catch(error => console.log('error', error));
    }

    

     


  return (
    <div className={classes.root}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>{username}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>{id}</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column} >
          <Typography className={classes.secondaryHeading}>{`IP ADDRESS   : ${ip}`}</Typography>
          <Typography className={classes.secondaryHeading}>{`ISSUE DATE   : ${issueDate}`}</Typography>
          <Typography className={classes.secondaryHeading}>{`ISSUE TYPE   : ${issueType}`}</Typography>
            
          </div>
          <div className={classes.column}>
            <img className={classes.image} src={aadhar_image} alt="" />
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              User Image
              <br />
              
            </Typography>
            <img className={classes.image} src={user_image} alt="" />

          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small">Reject</Button>
          <Button onClick={signVC} variant="contained" color="primary">
            Verify
            
          </Button>
        </AccordionActions>
      </Accordion>
      {/* {open ? <CustomizedDialogs/> : <div></div>} */}
    </div>
  );
}


