import React,{useEffect,useState} from "react"
import Typography from "@material-ui/core/Typography"
import MenuAppBar from "./appBar" 
import { makeStyles } from '@material-ui/core/styles';
import Credentials from "./Credentials"
import firebase from "firebase"
const useStyles = makeStyles((theme) => ({
    
   heading: {
      marginTop: theme.spacing(3),
    },
    
  }));

const Home = () => {
    const classes = useStyles()
    const [credentialsData, setCredentialsData] = useState([])

  useEffect(() => {
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
  credentialsData.map((e)=><Credentials credsData={e}/>)
}


        </div>
    )
}

export default Home;