if (CONDITION_1 && CONDITION_2)       // '&&' means 'AND'
{
  // body of 'IF':
  // this runs if CONDITION_1 is true AND CONDITION_2 is true
}

else
{
  // 'ELSE' body:
  // this runs if CONDITION_1 is false OR CONDITION_2 is false
}

if (today == "Friday" && moodLevel >= 100)
{
  goDancing();
}

if (raining == true || distanceMiles > 3)
{
  callUber();
}

if (!snowing)
{
  bravelyDonSomeShorts();
}

if (weather != "rainy")
{
  if (distanceToStadium < 3)
  {
    console.log("I think I’ll walk to the game.");
  }
  else
  {
    console.log("It’s a bit far, so maybe I’ll fly.");
  }
}
else
{
  console.log("Hey, I’m a duck! A little water is OK. I’ll swim.");
}
