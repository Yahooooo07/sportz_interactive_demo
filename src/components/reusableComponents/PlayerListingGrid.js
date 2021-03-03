import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card } from "@material-ui/core";
import { Image } from "semantic-ui-react";

const useStyles = makeStyles(() => ({
  main: {
    display: "flex",
    boxShadow: "0px 10px 20px #c8cbcc",
    zIndex: "2",
    margin: "5px",
  },
  card: {
    flexWrap: "wrap",
    overflowWrap: "break-word",
  },
  playerImage: {
    width: "100%",
  },
}));

const PlayerListingGrid = ({
  playerId,
  playerName,
  skill,
  value,
  homeTeam,
  awayTeam,
  matchTime,
}) => {
  const [img] = useState(
    playerId && {
      img: require(`../../assets/player-images/${playerId}.jpg`),
    }
  );
  const classes = useStyles();

  // Create our number formatter.
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  var date = matchTime + " UTC";
  return (
    <Card className={classes.main}>
      <div>
        <Card className={classes.card}>
          {playerId && (
            <Image src={img.img.default} className={classes.playerImage} />
          )}
          <Typography style={{ fontWeight: "bold", margin: 10, fontSize: 12 }}>
            Name : {playerName}
          </Typography>
          <Typography style={{ fontWeight: "bold", margin: 10, fontSize: 12 }}>
            Position : {skill}
          </Typography>
          <Typography style={{ fontWeight: "bold", margin: 10, fontSize: 12 }}>
            Value : {formatter.format(value)}
          </Typography>
          <Typography style={{ fontWeight: "bold", margin: 10, fontSize: 12 }}>
            Upcoming Match : {homeTeam} vs. {awayTeam}
          </Typography>
          <Typography style={{ fontWeight: "bold", margin: 10, fontSize: 12 }}>
            Upcoming Match Time: <br />
            {new Date(date).toLocaleString()}
          </Typography>
        </Card>
      </div>
    </Card>
  );
};

export default PlayerListingGrid;
