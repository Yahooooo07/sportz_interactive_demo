import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "../actions/players";
import {
  Grid,
  Typography,
  Paper,
  InputBase,
  makeStyles,
} from "@material-ui/core";
import PlayerListingGrid from "../components/reusableComponents/PlayerListingGrid";
import { Image } from "semantic-ui-react";
import uefa from "../assets/player-images/uefa.jpg";
import logo from "../assets/player-images/logo.png";
import Loader from "react-loader-spinner";

const PlayersListing = () => {
  const useStyles = makeStyles((theme) => ({
    mainGrid: {
      backgroundColor: "#00004B",
      minHeight: "100vh",
    },
    borderSections: {
      borderBottom: "3px solid black",
      width: "100%",
      paddingTop: 20,
    },
    flexGrid: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    mainText: {
      fontWeight: "bold",
      marginTop: 20,
      textAlign: "center",
      color: "white",
    },
    logo: {
      height: 50,
      width: 50,
      marginTop: 20,
    },
    searchBarGrid: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 25,
    },
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
      flexBasis: null,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    playerMap: {
      padding: 10,
      width: "100%",
      margin: 0,
    },
    loaderGrid: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      margin: 150,
    },
  }));

  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const classes = useStyles();
  const [playerSearch, setSearchedPlayer] = useState("");

  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch]);

  const onChange = (event) => {
    setSearchedPlayer(event.target.value);
  };

  return (
    <Grid className={classes.mainGrid}>
      {console.log(store.PlayerReducer.playerListings)}
      <Grid className={classes.borderSections} />
      <Grid className={classes.flexGrid}>
        <Image src={uefa} className={classes.logo} />
        <Typography variant="h4" className={classes.mainText}>
          Top Players 2020-2021
        </Typography>
        <Image src={logo} className={classes.logo} />
      </Grid>
      <Grid className={classes.borderSections} />

      <Grid className={classes.searchBarGrid}>
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search for a Player or Team"
            inputProps={{ "aria-label": "search player or team" }}
            onChange={onChange}
            defaultValue={playerSearch}
          />
        </Paper>
      </Grid>

      <Grid container spacing={10} className={classes.playerMap}>
        {store.PlayerReducer &&
        store.PlayerReducer.playerListings.length !== 0 ? (
          store.PlayerReducer.playerListings
            .filter(
              (player) =>
                player.PFName.toLowerCase().includes(
                  playerSearch.toLowerCase()
                ) ||
                player.TName.toLowerCase().includes(playerSearch.toLowerCase())
            )
            .slice(0)
            .reverse()
            .map((searchedPlayers) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={searchedPlayers.Id}
                >
                  <PlayerListingGrid
                    playerId={searchedPlayers.Id}
                    playerName={searchedPlayers.PFName}
                    skill={searchedPlayers.SkillDesc}
                    value={searchedPlayers.Value}
                    homeTeam={searchedPlayers.UpComingMatchesList[0].CCode}
                    awayTeam={searchedPlayers.UpComingMatchesList[0].VsCCode}
                    matchTime={searchedPlayers.UpComingMatchesList[0].MDate}
                  />
                </Grid>
              );
            })
        ) : (
          <Grid className={classes.loaderGrid}>
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={250}
              width={250}
            />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default PlayersListing;
