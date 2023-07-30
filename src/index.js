const sopranosQuotes = [
    "I’m like King Midas in reverse, everything I touch turns to shit. - Tony Soprano",
    "You know, it wasn't long ago I remember you used to wait in the car. And as far as I'm concerned you should still be there. - Junior Soprano", 
    "Some people are so far behind in the race they actually think they’re leading. - Tony Soprano",
    "I get it. I get it. You broke your cherry. - Ralph Cifaretto",
    "A pint of blood costs more than a gallon of gold. - Tony Soprano",
    "This is a place of business, not a Jack LaLanne! - Tony Soprano",
    "You're not gonna believe this. He killed sixteen Czechoslovakians. The guy was an interior decorator. - Paulie Gualtieri",
    "I'll build a ramp up to your ass. Drive a Lionel up in there. - Ralph Cifaretto",
    "A wrong decision is better than indecision. - Tony Soprano",
    "You know, we always called each other good fellas. Like you said to, uh, somebody, :You're gonna like this guy. He's all right. He's a good fella. He's one of us.: You understand? We were good fellas. Wiseguys. - Henry Hill",
    "If you can quote the rules you can obey them - Tony Soprano",
    "As far back as I could remember, I always wanted to be a gangster. - Henry Hill",
    "A wrong decision is better than indecision - Tony Soprano",
    "You got any idea what my life would be worth if certain people found out I checked into a laughing academy? - Tony Soprano",
    "I’m like King Midas in reverse. Everything I touch turns to shit. - Tony Soprano"
  ];

  const funnyCommit = () => {
    const Squotes = sopranosQuotes[Math.floor(Math.random() * sopranosQuotes.length)];
    console.log(`\x1b[34m${Squotes}\x1b[89m`);
  }

  module.exports = {
    funnyCommit
  };