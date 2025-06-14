const mvs = [
	{
		title: "3年C組14番窪園チヨコの入閣 by siinamota",
		url: "https://www.youtube.com/watch?v=bS18DC9mJpo",
		img: "/music/!g/ads/class-3.png",
	},

	{
		title: "soul lady by yukika",
		url: "https://youtu.be/942NkXvAtAM",
		img: "/music/!g/ads/soul-lady2.png",
	},

	{
		title: "matryoshka by hachi",
		url: "https://www.youtube.com/watch?v=HOz-9FzIDf0",
		img: "/music/!g/ads/matry1.png",
	},

	{
		title: "nostalgia by drippin",
		url: "https://youtu.be/BdUCdh7ff9I",
		img: "/music/!g/ads/nostalgia.png",
	},

	{
		title: "obliviate by lovelyz",
		url: "https://youtu.be/9GUqqRzIZgw",
		img: "/music/!g/ads/obliviate.png",
	},

	{
		title: "catallena by orange caramel",
		url: "https://youtu.be/Med2XipHJJM",
		img: "/music/!g/ads/catallena.png",
	},

	{
		title: "soul lady by yukika",
		url: "https://youtu.be/942NkXvAtAM",
		img: "/music/!g/ads/soul-lady1.png",
	},

	{
		title: "iesu by abu-se-ken",
		url: "https://youtu.be/6W_EvN4rDvk",
		img: "/music/!g/ads/iesu.png",
	},

	{
		title: "atelier by parsley onuma",
		url: "https://youtu.be/juHEaW3-V9E",
		img: "/music/!g/ads/atelier.png",
	},

	{
		title: "kororon by eve",
		url: "https://youtu.be/Gw96jPDtoDQ?si=lWGQ2RBAZCSuWfpd",
		img: "/music/!g/ads/kororon.png",
	},

	{
		title: "young girl a by siinamota",
		url: "https://youtu.be/AqI97zHMoQw",
		img: "/music/!g/ads/girla.png",
	},

	{
		title: "villain by teniwoha",
		url: "https://youtu.be/p9FJXfGHtDA?si=4qSTjVKFrw-8v0m-",
		img: "/music/!g/ads/villain2.png",
	},

	{
		title: "russian roulette by red velvet",
		url: "https://youtu.be/QslJYDX3o8s",
		img: "/music/!g/ads/russian-roulette.png",
	},

	{
		title: "jogging by lucy",
		url: "https://youtu.be/dh684FWByO4?si=qqozvaS0PaXfvQUc",
		img: "/music/!g/ads/jogging.png",
	},

	{
		title: "magician by lexie liu",
		url: "https://youtu.be/d_Bu_sWxQoI",
		img: "/music/!g/ads/magician.png",
	},

	{
		title: "internet yamero by aiobahn feat. kotoko",
		url: "https://youtu.be/51GIxXFKbzk",
		img: "/music/!g/ads/yamero.png",
	},

	{
		title: "iyueni by parsley onuma",
		url: "https://youtu.be/44L09CWyrsU",
		img: "/music/!g/ads/iyueni.png",
	},

	{
		title: "icarus by artms",
		url: "https://www.youtube.com/watch?v=J-bEGflpV9k",
		img: "/music/!g/ads/icarus.png",
	},
];

console.log(mvs.length);
let randomAd = Math.floor(Math.random() * mvs.length);

const container = document.getElementById("mv");

container.innerHTML =
	'<a title="click to watch ' +
	mvs[randomAd].title +
	' right meow!" href="' +
	mvs[randomAd].url +
	'" target="_blank"><img src="' +
	mvs[randomAd].img +
	'" alt="' +
	mvs[randomAd].title +
	' ad screenshot">' +
	"</a>";
