import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "../actions/players";
import { Grid, Typography } from "@material-ui/core";
import PlayerListingGrid from "../components/reusableComponents/PlayerListingGrid";
import { Image } from "semantic-ui-react";
import uefa from "../assets/player-images/uefa.jpg";
import logo from "../assets/player-images/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

const PlayersListing = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));

  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch]);

  return (
    <Grid style={{ backgroundColor: "#00004B" }}>
      {console.log(store.PlayerReducer.playerListings)}
      <Grid
        style={{
          borderBottom: "3px solid black",
          width: "100%",
          paddingTop: 20,
        }}
      />
      <Grid
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Image src={uefa} style={{ height: 50, width: 50, marginTop: 10 }} />
        <Typography
          variant="h4"
          style={{
            fontWeight: "bold",
            marginTop: 10,
            textAlign: "center",
            color: "white",
          }}
        >
          Top Players 2020-2021
        </Typography>
        <Image src={logo} style={{ height: 50, width: 50, marginTop: 10 }} />
      </Grid>
      <Grid
        style={{
          borderBottom: "3px solid black",
          width: "100%",
          paddingTop: 10,
        }}
      />

      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search for a Player or Team"
            inputProps={{ "aria-label": "search player or team" }}
          />
          <IconButton
            // type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>

      <Grid
        container
        spacing={5}
        style={{ padding: 20, width: "100%", margin: 0 }}
      >
        {store.PlayerReducer && store.PlayerReducer.playerListings.length !== 0
          ? store.PlayerReducer.playerListings
              .slice(0)
              .reverse()
              .map((item, index) => (
                <Grid item xs={2} key={index}>
                  <PlayerListingGrid
                    playerId={item.Id}
                    playerName={item.PFName}
                    skill={item.SkillDesc}
                    value={item.Value}
                    homeTeam={item.UpComingMatchesList[0].CCode}
                    awayTeam={item.UpComingMatchesList[0].VsCCode}
                    matchTime={item.UpComingMatchesList[0].MDate}
                  />
                </Grid>
              ))
          : null}
      </Grid>
    </Grid>
  );
};

export default PlayersListing;
