const localQuotes = [
  {
    text: 'It is a strange fate that we should suffer so much fear and doubt over so small a thing.',
    author: 'Boromir'
  },
  {
    text: 'The burned hand teaches best. After that, advice about fire goes to the heart.',
    author: 'Gandalf'
  },
  {
    text: 'There is nothing like looking, if you want to find something. You certainly usually find something, if you look, but it is not always quite the something you were after.',
    author: 'Thorin Oakenshield'
  },
  {
    text: 'Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be too eager to deal out death in judgment.',
    author: 'Gandalf'
  },
  {
    text: 'I don’t know half of you half as well as I should like, and I like less than half of you half as well as you deserve.',
    author: 'Bilbo Baggins'
  },
  {
    text: 'Faithless is he that says farewell when the road darkens.',
    author: 'Gimli'
  },
  {
    text: 'Even darkness must pass. A new day will come. And when the sun shines, it will shine out the clearer.',
    author: 'Samwise Gamgee'
  },
  {
    text: 'The world is full enough of hurts and mischance without wars to multiply them.',
    author: 'Éomer'
  },
  {
    text: 'The way is shut. It was made by those who are dead, and the dead keep it.',
    author: 'Aragorn'
  },
  {
    text: 'Home is behind, the world ahead, and there are many paths to tread through shadows to the edge of night, until the stars are all alight.',
    author: 'Bilbo Baggins'
  },
  {
    text: 'The wide world is all about you: you can fence yourselves in, but you cannot forever fence it out.',
    author: 'Gildor Inglorion'
  },
  {
    text: 'I wish the Ring had never come to me. I wish none of this had happened.',
    author: 'Frodo Baggins'
  },
  {
    text: 'Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be too eager to deal out death in judgment.',
    author: 'Gandalf'
  },
  {
    text: 'It is useless to meet revenge with revenge: it will heal nothing.',
    author: 'Frodo Baggins'
  },
  {
    text: 'He that breaks a thing to find out what it is has left the path of wisdom.',
    author: 'Gandalf'
  },
  {
    text: 'The burned hand teaches best. After that, advice about fire goes to the heart.',
    author: 'Gandalf'
  },
  {
    text: 'I would rather share one lifetime with you than face all the ages of this world alone.',
    author: 'Arwen Undómiel'
  },
  {
    text: 'I will not say, do not weep, for not all tears are an evil.',
    author: 'Gandalf'
  },
  {
    text: 'All that is gold does not glitter, Not all those who wander are lost.',
    author: 'Bilbo Baggins'
  },
  {
    text: 'Even the very wise cannot see all ends.',
    author: 'Gandalf'
  },
  {
    text: 'It’s a dangerous business, Frodo, going out your door. You step onto the road, and if you don’t keep your feet, there’s no knowing where you might be swept off to.',
    author: 'Bilbo Baggins'
  },
  {
    text: 'I do not love the bright sword for its sharpness, nor the arrow for its swiftness, nor the warrior for his glory. I love only that which they defend.',
    author: 'Faramir'
  },
  {
    text: 'The world is indeed full of peril, and in it there are many dark places; but still there is much that is fair, and though in all lands love is now mingled with grief, it grows perhaps the greater.',
    author: 'Haldir'
  },
  {
    text: 'Despair is only for those who see the end beyond all doubt. We do not.',
    author: 'Gandalf'
  },
  {
    text: 'I have passed through fire and deep water, since we parted. I have forgotten much that I thought I knew, and learned again much that I had forgotten.',
    author: 'Gandalf'
  },
  {
    text: 'All we have to decide is what to do with the time that is given us.',
    author: 'Gandalf'
  },
  {
    text: 'I will not say, do not weep, for not all tears are an evil.',
    author: 'Gandalf'
  },
  {
    text: 'Deeds will not be less valiant because they are unpraised.',
    author: 'Aragorn'
  },
  {
    text: 'Even the smallest person can change the course of the future.',
    author: 'Galadriel'
  },
  {
    text: "The journey doesn't end here.Death is just another path, one that we all must take.",
    author: 'Gandalf'
  },
  {
    text: 'Faithless is he that says farewell when the road darkens.',
    author: 'Gimli'
  },
  {
    text: 'A hunted man sometimes wearies of distrust and longs for friendship.',
    author: 'Aragorn'
  },
  {
    text: 'Even the smallest person can change the course of the future.',
    author: 'Galadriel'
  },
  {
    text: 'There is only one Lord of the Ring, only one who can bend it to his will. And he does not share power.',
    author: 'Gandalf'
  },
  {
    text: 'The world is full enough of hurts and mischance without wars to multiply them.',
    author: 'Éomer'
  },
  {
    text: 'Do not meddle in the affairs of wizards, for they are subtle and quick to anger.',
    author: 'Gildor Inglorion'
  },
  {
    text: 'I will take the Ring, though I do not know the way.',
    author: 'Frodo Baggins'
  },
  {
    text: 'It is not our part to master all the tides of the world, but to do what is in us for the succour of those years wherein we are set, uprooting the evil in the fields that we know, so that those who live after may have clean earth to till. What weather they shall have is not ours to rule.',
    author: 'Gandalf'
  },
  {
    text: 'I would rather share one lifetime with you than face all the ages of this world alone.',
    author: 'Arwen Undómiel'
  },
  {
    text: 'The wide world is all about you: you can fence yourselves in, but you cannot forever fence it out.',
    author: 'Gildor Inglorion'
  },
  {
    text: 'It is useless to meet revenge with revenge: it will heal nothing.',
    author: 'Frodo Baggins'
  },
  {
    text: 'The way is shut. It was made by those who are dead, and the dead keep it.',
    author: 'Aragorn'
  },
  {
    text: 'Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be too eager to deal out death in judgment.',
    author: 'Gandalf'
  },
  {
    text: 'Even darkness must pass. A new day will come. And when the sun shines, it will shine out the clearer.',
    author: 'Samwise Gamgee'
  },
  {
    text: 'Home is behind, the world ahead, and there are many paths to tread through shadows to the edge of night, until the stars are all alight.',
    author: 'Bilbo Baggins'
  },
  {
    text: 'He that breaks a thing to find out what it is has left the path of wisdom.',
    author: 'Gandalf'
  },
  {
    text: 'The praise of the praiseworthy is above all rewards.',
    author: 'Faramir'
  },
  {
    text: 'In sorrow we must go, but not in despair. Behold! we are not bound for ever to the circles of the world, and beyond them is more than memory.',
    author: 'Aragorn'
  },
  {
    text: 'Courage is found in unlikely places.',
    author: 'Gildor Inglorion'
  },
  {
    text: 'I don’t know half of you half as well as I should like, and I like less than half of you half as well as you deserve.',
    author: 'Bilbo Baggins'
  },
  {
    text: 'I wish the Ring had never come to me. I wish none of this had happened.',
    author: 'Frodo Baggins'
  },
  {
    text: 'Even the very wise cannot see all ends.',
    author: 'Gandalf'
  },
  {
    text: 'The world is indeed full of peril, and in it there are many dark places; but still there is much that is fair, and though in all lands love is now mingled with grief, it grows perhaps the greater.',
    author: 'Haldir'
  },
  {
    text: 'Deeds will not be less valiant because they are unpraised.',
    author: 'Aragorn'
  },
  {
    text: 'The power of the enemy is growing. Sauron will use his puppet Saruman to destroy the people of Rohan.',
    author: 'Gandalf'
  },
  {
    text: 'Despair is only for those who see the end beyond all doubt. We do not.',
    author: 'Gandalf'
  },
  {
    text: 'I have passed through fire and deep water, since we parted. I have forgotten much that I thought I knew, and learned again much that I had forgotten.',
    author: 'Gandalf'
  },
  {
    text: 'Do not be hasty, that is my motto.',
    author: 'Treebeard'
  },
  {
    text: 'I will not say, do not weep, for not all tears are an evil.',
    author: 'Gandalf'
  },
  {
    text: "Where there's life there's hope.",
    author: 'Samwise Gamgee'
  },
  {
    text: 'A day may come when the courage of men fails, when we forsake our friends and break all bonds of fellowship, but it is not this day.',
    author: 'Aragorn'
  },
  {
    text: 'I am Gandalf the White. And I come back to you now at the turn of the tide.',
    author: 'Gandalf'
  },
  {
    text: 'There is only one Lord of the Ring, only one who can bend it to his will. And he does not share power.',
    author: 'Gandalf'
  },
  {
    text: 'I will take the Ring, though I do not know the way.',
    author: 'Frodo Baggins'
  },
  {
    text: "The journey doesn't end here.Death is just another path, one that we all must take.",
    author: 'Gandalf'
  },
  {
    text: 'I cannot give you what you seek, but I will give you my friendship and goodwill.',
    author: 'Galadriel'
  },
  {
    text: 'It’s a dangerous business, Frodo, going out your door. You step onto the road, and if you don’t keep your feet, there’s no knowing where you might be swept off to.',
    author: 'Bilbo Baggins'
  },
  {
    text: 'The battle for Helm’s Deep is over. The battle for Middle-earth is about to begin.',
    author: 'Gandalf'
  },
  {
    text: 'You step into the Road, and if you don’t keep your feet, there is no knowing where you might be swept off to.',
    author: 'Bilbo Baggins'
  },
  {
    text: 'There is always hope.',
    author: 'Aragorn'
  },
  {
    text: 'Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be too eager to deal out death in judgment.',
    author: 'Gandalf'
  },
  {
    text: 'The burned hand teaches best. After that, advice about fire goes to the heart.',
    author: 'Gandalf'
  },
  {
    text: 'The board is set, the pieces are moving. We come to it at last, the great battle of our time.',
    author: 'Gandalf'
  },
  {
    text: 'I would rather share one lifetime with you than face all the ages of this world alone.',
    author: 'Arwen Undómiel'
  },
  {
    text: 'Not all those who wander are lost.',
    author: 'Bilbo Baggins'
  },
  {
    text: 'I do not love the bright sword for its sharpness, nor the arrow for its swiftness, nor the warrior for his glory. I love only that which they defend.',
    author: 'Faramir'
  },
  {
    text: 'The world is full enough of hurts and mischance without wars to multiply them.',
    author: 'Éomer'
  },
  {
    text: 'The enemy? His sense of duty was no less than yours, I deem. You wonder what his name is, where he came from. And if he was really evil at heart. What lies or threats led him on this long march from home? If he would not rather have stayed there in peace. War will make corpses of us all.',
    author: 'Faramir'
  },
  {
    text: 'All we have to decide is what to do with the time that is given us.',
    author: 'Gandalf'
  },
  {
    text: 'Even darkness must pass. A new day will come. And when the sun shines, it will shine out the clearer.',
    author: 'Samwise Gamgee'
  },
  {
    text: 'It is not the strength of the body that counts, but the strength of the spirit.',
    author: 'Gandalf'
  },
  {
    text: 'I don’t know half of you half as well as I should like, and I like less than half of you half as well as you deserve.',
    author: 'Bilbo Baggins'
  },
  {
    text: 'All that is gold does not glitter, not all those who wander are lost.',
    author: 'Bilbo Baggins'
  },
  {
    text: 'Many folk like to know beforehand what is to be set on the table; but those who have laboured to prepare the feast like to keep their secret; for wonder makes the words of praise louder.',
    author: 'Gandalf'
  },
  {
    text: 'The treacherous are ever distrustful.',
    author: 'Gollum'
  },
  {
    text: 'Do not be hasty, that is my motto.',
    author: 'Treebeard'
  },
  {
    text: 'I will not say: do not weep; for not all tears are an evil.',
    author: 'Gandalf'
  },
  {
    text: 'The burned hand teaches best. After that, advice about fire goes to the heart.',
    author: 'Gandalf'
  },
  {
    text: 'He that breaks a thing to find out what it is has left the path of wisdom.',
    author: 'Gandalf'
  },
  {
    text: 'I would rather share one lifetime with you than face all the ages of this world alone.',
    author: 'Arwen Undómiel'
  },
  {
    text: 'It’s the job that’s never started as takes longest to finish.',
    author: 'Samwise Gamgee'
  },
  {
    text: 'Even the smallest person can change the course of the future.',
    author: 'Galadriel'
  },
  {
    text: 'I wish it need not have happened in my time.',
    author: 'Frodo Baggins'
  },
  {
    text: 'Yet such is oft the course of deeds that move the wheels of the world: small hands do them because they must, while the eyes of the great are elsewhere.',
    author: 'Elrond'
  },
  {
    text: 'I will not bow down to this Ranger from the North!',
    author: 'Éomer'
  },
  {
    text: 'I have not much hope that Gollum can be cured before he dies, but there is a chance of it.',
    author: 'Gandalf'
  },
  {
    text: 'There is no curse in Elvish, Entish, or the tongues of Men for this treachery.',
    author: 'Treebeard'
  },
  {
    text: 'Yet dawn is ever the hope of men.',
    author: 'Legolas'
  },
  {
    text: 'May it be a light to you in dark places, when all other lights go out.',
    author: 'Galadriel'
  },
  {
    text: 'War must be, while we defend our lives against a destroyer who would devour all; but I do not love the bright sword for its sharpness, nor the arrow for its swiftness, nor the warrior for his glory. I love only that which they defend.',
    author: 'Faramir'
  },
];