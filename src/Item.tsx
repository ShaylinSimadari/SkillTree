import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import details from './details.json'

export const Item = ({n, i}: {n: string, i: number}) => {

  const c = ['#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c']

  const col = (num: number) =>
    c[8-num]

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const x = () => {
    return details.
  }

  return (
    <>
      <Button onClick={toggleExpanded}>
        <Typography pl={i} sx={{backgroundColor: col(i)}}>
          {n}
        </Typography>
      </Button>
      {expanded && (
        <Typography variant="body1">{details}</Typography>
      )}
    </>
  
  );
}