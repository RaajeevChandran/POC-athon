import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide'
import Divider from '@material-ui/core/Divider';

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
    const [open, setOpen] = React.useState(false);

    const {username,aadhar_image,user_image,ip} = props.credsData
    const {unverified_vc,} = props.credsData
    const {holder,credentialSubject} = unverified_vc
    const {id} = holder
    const {data} = credentialSubject
    const {hasIDDocument} = data
    const {issueDate,issueType} = hasIDDocument


    const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });

    const AlertDialogSlide = (props) => {
      const handleClose = () => {
        setOpen(false);
      };
    
      return (
       
          
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">Confirmation to verify the credential</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
               {`Do you want to verify ${props.username}'s credential?.`}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained"  color="secondary">
                Deny
              </Button>
              <Button variant="contained" color="primary">
                Accept
              </Button>
            </DialogActions>
          </Dialog>
          
     
      );
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
          <Button onClick={()=>setOpen(!open)} variant="contained" color="primary">
            Verify
            {open ? <AlertDialogSlide username={username}/> : <div></div>}
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}


