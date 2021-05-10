import React,{useEffect,useState} from "react"
import Typography from "@material-ui/core/Typography"
import MenuAppBar from "./appBar" 
import { makeStyles } from '@material-ui/core/styles';
import Credentials from "./Credentials"
import firebase from "firebase"
import { useLocation,withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    
   heading: {
      marginTop: theme.spacing(3),
    },
    
  }));

const Home = (props) => {
    const classes = useStyles()
    const location = useLocation();
    const [credentialsData, setCredentialsData] = useState([])

  useEffect(() => {
    // if(props.location.state.accessToken!==null){
    //   console.log("got accesstoken "+props.location.state.accessToken)
    // }
    // console.log(location.state.detail)
    const ref = firebase.firestore().collection("unsignedVC")
    ref.onSnapshot((querySnapshot)=>{
      var items=[]
      querySnapshot.forEach((e)=>{
        items.push(e.data())
      })
      console.log(items)
      
      setCredentialsData(items)
    })
  }, [])

    return (
        <div>
            <MenuAppBar/>
            <Typography variant="h3" component="h2" className={classes.heading}>
                Credentials to be verified
</Typography>
{
  credentialsData.map((e)=><Credentials accessToken={location.state.detail} credsData={e}/>)
}


        </div>
    )
}

export default withRouter(Home)