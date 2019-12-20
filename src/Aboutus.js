import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import lightGreen from '@material-ui/core/colors/lightGreen';
import doc from './doctor comp.png';
import healthcare from "./healthcare.png"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Aboutus extends Component {

    render() {
        return (
            <ScrollableAnchor id={'aboutus'}>
            <Paper square={true} style={{ backgroundColor: lightGreen[100], height: 650, overflowX:"hidden", overflowY:"hidden"}}>
                <Grid container >
                    <Grid item xs style={{ backgroundColor: lightGreen[200], height: 550, borderRadius:16, marginTop:45, marginRight:120, marginLeft:100}}>
                <Typography style={{ color: "white", fontSize: 25, fontWeight: 700, textAlign: "left", paddingTop:30, marginLeft:120 }}>
                    Dear patients,
                        </Typography>
                <Typography style={{ color: "white", fontSize: 25, fontWeight: 700, textAlign: "left", marginTop:15, marginLeft:120 }}>
                    welcome to our practice!
                            </Typography>

                <Typography style={{ color: "white", fontSize: 17, textAlign: "left", marginTop:60, marginLeft:90, marginRight:90, fontWeight:500 }}>
                    Our main goal is to find your individual therapy’s option 
                    with the help of our innovative, state-of-the-art technology.
                    </Typography>
                    <Typography style={{ color: "white", fontSize: 17, textAlign: "left", marginLeft:90, marginRight:90, fontWeight:500 }}>
                    We focus on the prevention and early diagnosis of disorders 
                    in respiratory, digestive and integumentary system.
 </Typography>
                <Typography style={{ color: "white", fontSize: 17, textAlign: "left", marginTop:30, marginRight:90, marginLeft:90, fontWeight:500 }}>
                    Your health matters! That’s why we only offer you high quality 
                    medical care. Our qualified medical AI-assistant Kai assists 
                    Dr. Miller in the diagnostic and decision making process and makes 
                    recommendations based on findings.
</Typography>
</Grid>
<Grid item xs>

<img src={healthcare} alt="healthcare" style={{ float: "right", marginTop: 10, height: 180, marginRight:150}} />
                <img src={doc} alt="doc" style={{ float: "right", marginTop: 110, height: 350, marginRight:150 }} />
                </Grid>
                </Grid>
            </Paper>
            </ScrollableAnchor>
        )
    }
}
