const quotes = [
	{
		text: "a chocolate sepia record that is important to me and no one else",
		source: "999",
		author: "siinamota",
		link: "https://vocaloidlyrics.fandom.com/wiki/999/siinamota",
	},

	{
		text: "in this universe its not a coincidence that i've met myself. oh, i know now why the waving flowers bloom",
		source: "one & only",
		author: "loona",
		link: "https://www.youtube.com/watch?v=lzH9_h-dnsE",
	},

	{
		text: "to me, you will be unique in all the world. and to you i shall be unique in all the world",
		source: "the little prince",
		author: "antoine de saint-exupery",
		link: "https://en.wikipedia.org/wiki/The_Little_Prince",
	},

	{
		text: "“I don't mind where we go. To me, anywhere is fine.” But this place is beautiful. Scary, but beautiful. To think that no one's been here but us-",
		source: "halo",
		author: "siinamota",
		link: "https://youtu.be/WchOJBb--PU",
	},

	{
		text: "when i choose to see the good side of things, im not being naive. it is strategic and necessary. it's how ive learned to survive through everything.",
		source: "everything everywhere all at once",
		author: "dir. the daniels",
		link: "https://en.wikipedia.org/wiki/Everything_Everywhere_All_at_Once",
	},

	{
		text: "It's hard to believe that it's over, isn't it? Funny how we get attached to the struggle.",
		source: "celeste",
		author: "",
		link: "https://store.steampowered.com/app/504230/Celeste/",
	},
	{
		text: "i'm sure that in time, in time, i'll forget all about myself and advance on. it's just, i... it doesn't seem like i'll be able to forget about you.",
		source: "there is someone i can't meet, even in a dream",
		author: "siinamota",
		link: "https://vocaloidlyrics.fandom.com/wiki/%E5%A4%A2%E3%81%A7%E3%82%82%E9%80%A2%E3%81%88%E3%81%AA%E3%81%84%E4%BA%BA%E3%81%8C%E3%81%84%E3%82%8B_(Yume_demo_Aenai_Hito_ga_Iru)",
	},

	{
		text: "i dont think this is trash. if you're going to throw it away, i'll take it. i made the decision to consider my feelings more. and you need to pick up things you feel are important",
		source: "mob psycho 100",
		author: "one",
		link: "https://en.wikipedia.org/wiki/Mob_Psycho_100",
	},

	{
		text: "Let's move straight ahead, no matter where we end up. Swaying, dozing off, no matter where we end up, we won't get to where we want to be.",
		source: "halo",
		author: "siinamota",
		link: "https://youtu.be/WchOJBb--PU",
	},

	{
		text: "Oh, the dream, the dream i had but i'm scared, i'm scared, i'm scared.",
		source: "young girl a",
		author: "siinamota",
		link: "https://youtu.be/AqI97zHMoQw",
	},
	{
		text: "i'm looking for meaning in life. i walk because i was born",
		source: "strobe light",
		author: "siinamota",
		link: "https://www.youtube.com/watch?v=7sKs7INaEoA",
	},

	{
		text: "Even though I like so much about you, I don't know anything about you.",
		source: "stoy.",
		author: "siinamota",
		link: "https://youtu.be/oJq3rbZkQ5g",
	},
];

// generate random number using the length of the array
// Math.floor round numbers up to convert them into integers
let random = Math.floor(Math.random() * quotes.length);

let randomQ = quotes[random]; //access an object in the array

let memoDiv = document.querySelector("#memo3 .innermemo");

memoDiv.innerHTML = "<p>" + randomQ.text + "</p>";

// if there's no author..
if (!randomQ.author) {
	memoDiv.innerHTML +=
		"<p class='source'>(<a href='" +
		randomQ.link +
		"' title='source link' target='_blank'>" +
		randomQ.source +
		"</a>) </p>";
} else {
	memoDiv.innerHTML +=
		"<p class='source'>(<a href='" +
		randomQ.link +
		"' title='source link' target='_blank'>" +
		randomQ.source +
		"</a> - " +
		randomQ.author +
		") </p>";
}
