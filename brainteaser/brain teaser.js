let brainTeaser=[` A doctor and a bus driver are both in love with the same woman, an attractive girl named Sarah. The bus driver had to go on 
a long bus trip that would last a week. Before he left, he gave Sarah seven apples. Why?
An apple a day keeps the doctor away!`,
`A woman shoots her husband. Then she holds him under water for over 5 minutes. Finally, she hangs him. But 5 minutes later they both
 go out together and enjoy a wonderful dinner together. How can this be? 
 The woman was a photographer. She shot a picture of her husband,developed it, and hung it up to dry.`,
`What is special about these words: job, polish, herb?
They are pronounced differently when the first letter is capitalized.`,
`I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost everybody. What am I?
Pencil lead`,
`A man stands on one side of a river, his dog on the other. The man calls his dog, who immediately crosses the river without getting wet and without using a bridge or a boat. How did the dog do it?
The river was frozen`,
`I cant be bought, but I can be stolen with a glance. I am worthless to one, but priceless to two. What am I?
Love`,
`Turn me on my side and I am everything. Cut me in half and I am nothing. What am I? 
The number 8`,
`No matter how little or how much you use me, you change me every month. What am I?
A calendar`,
`What has cities, but no houses; forests, but no trees; and water, but no fish?
A map`,
`A red house is made from red bricks. A blue house is made from blue bricks. A yellow house is made from yellow bricks. What is a green house made from? 
Glass`,
`There is a word in the English language in which the first two letters signify a male, the first three letters signify a female, the first four signify a great man, and the whole word, a great woman. What is the word?
Heroine`,
`In my hand I have two coins that are newly minted. Together, they total 30 cents. One isn’t a nickel. What are the coins? 
A quarter and a nickel`,
`What is harder to catch the faster you run?
Your breath`,
`You’re escaping a labyrinth and there are three exits. Exit A leads to an inferno. Exit B leads to an assassin. Exit C leads to a lion that hasn’t eaten in 3 years. Which exit do you pick? 
Exit C. If a lion hasn’t eaten in 3 years, it has definitely starved to death.`,
`What fastens two people yet touches only one?
A wedding ring`,
`What kind of running means walking?
Running out of gas`,
`What can be swallowed, but can also swallow you?
Pride`,
`They fill me up and you empty me, almost everyday; if you raise my arm, I work the opposite way. What am I?
A mailbox`,
`Which three letters can frighten a thief away?
ICU`,
`First I am dried, then I am wet. The longer I swim, the more taste you get. What am I? 
Tea`,
`Lovely and round, I shine with pale light, grown in the darkness, A lady's delight. What am I?
A pearl`,
`My voice is tender, my waist is slender and I'm often invited to play. Yet wherever I go I must take my bow or else I have nothing to say. What am I?
A violin`,
`I am a box that holds keys without locks, yet they can unlock your soul. What am I?
A piano`,
`I have a big mouth and I am also quite loud! I am NOT a gossip but I do get involved with everyone's dirty business. What am I?
A vacuum cleaner`,
`I have four wings, but cannot fly, I never laugh and never cry; On the same spot I'm always found, toiling away with little sound. What am I?
A windmill`,
` What can be stolen, mistaken, or altered, yet never leaves you your entire life?
Your identity`,
` Until I am measured, I am not known. Yet you miss me, when I have flown. What am I?
Time`,
`Some try to hide, some try to cheat, but time will show, we always will meet. Try as you might, to guess my name, I promise you'll know, when you do claim. Who am I?
Death`,
`Four cars come to a four way stop, all coming from a different direction. They can't decide who got there first, so they all go forward at the same time. They do not crash into each other, but all four cars go. How is this possible?
They all made right hand turns`,
`Take one out and scratch my head, I am now black but once was red. What am I?
A match`,
`I weaken all men for hours each day. I show you strange visions while you are away. I take you by night, by day take you back. None suffer to have me, but do from my lack. What am I?
Sleep`]
let start=document.getElementById("start");
 start.onclick =function () {
    arrayIndex=Math.floor(Math.random()*brainTeaser.length);
    start.innerHTML=brainTeaser[arrayIndex];

 }