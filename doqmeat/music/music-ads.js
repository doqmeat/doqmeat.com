function random_adlink() {
	var adimg = new Array();
	adimg[1] = '<a title="click to watch 3年C組14番窪園チヨコの入閣 by siinamota right meow!" href="https://www.youtube.com/watch?v=bS18DC9mJpo" target="_blank"><img src="/music/!g/ads/class-3.png"></a>';

	adimg[2] = '<a title="click to watch soul lady by yukika right meow!" href="https://youtu.be/942NkXvAtAM" target="_blank"><img src="/music/!g/ads/soul-lady2.png"></a>';

	adimg[3] = '<a title="click to watch matryoshka by hachi right meow!" href="https://www.youtube.com/watch?v=HOz-9FzIDf0" target="_blank"><img src="/music/!g/ads/matry1.png" alt="ad for matryoshka by hachi. click on img to go to youtube"></a>';

	adimg[4] = '<a title="click to watch nostalgia by drippin right meow!" href="https://youtu.be/BdUCdh7ff9I" target="_blank"><img src="/music/!g/ads/nostalgia.png"></a>';

	adimg[5] = '<a title="click to watch obliviate by lovelyz right meow!" href="https://youtu.be/9GUqqRzIZgw" target="_blank"><img src="/music/!g/ads/obliviate.png"></a>';

	adimg[6] = '<a title="click to watch catallena by orange caramel right meow!" href="https://youtu.be/Med2XipHJJM" target="_blank"><img src="/music/!g/ads/catallena.png"></a>';

	adimg[7] = '<a title="click to watch soul lady by yukika right meow!" href="https://youtu.be/942NkXvAtAM" target="_blank"><img src="/music/!g/ads/soul-lady1.png"></a>';

	adimg[8] = '<a title="click to watch iesu by abu-se-ken right meow!" href="https://youtu.be/6W_EvN4rDvk" target="_blank"><img src="/music/!g/ads/iesu.png"></a>';

	adimg[9] = '<a title="click to watch atelier by parsley onuma right meow!" href="https://youtu.be/juHEaW3-V9E" target="_blank"><img src="/music/!g/ads/atelier.png"></a>';

	adimg[10] = '<a title="click to watch kororon by eve right meow!" href="https://youtu.be/Gw96jPDtoDQ?si=lWGQ2RBAZCSuWfpd" target="_blank"><img src="/music/!g/ads/kororon.png"></a>';

	adimg[11] = '<a title="click to watch young girl a by siinamota right meow!" href="https://youtu.be/AqI97zHMoQw" target="_blank"><img src="/music/!g/ads/girla.png"></a>';

	adimg[12] = '<a title="click to watch villain by teniwoha right meow!" href="https://youtu.be/p9FJXfGHtDA?si=4qSTjVKFrw-8v0m-" target="_blank"><img src="/music/!g/ads/villain2.png"></a>';

	adimg[13] = '<a title="click to watch russian roulette by red velvet right meow!" href="https://youtu.be/QslJYDX3o8s" target="_blank"><img src="/music/!g/ads/russian-roulette.png"></a>';

	adimg[14] = '<a title="click to watch jogging by lucy right meow!" href="https://youtu.be/dh684FWByO4?si=qqozvaS0PaXfvQUc" target="_blank"><img src="/music/!g/ads/jogging.png"></a>';

	adimg[15] = '<a title="click to watch magician by lexie liu right meow!" href="https://youtu.be/d_Bu_sWxQoI" target="_blank"><img src="/music/!g/ads/magician.png"></a>';

	adimg[16] = '<a title="click to watch internet yamero by aiobahn feat. kotoko right meow!" href="https://youtu.be/51GIxXFKbzk" target="_blank"><img src="/music/!g/ads/yamero.png"></a>';

	adimg[17] = '<a title="click to watch iyueni by parsley onuma right meow!" href="https://youtu.be/44L09CWyrsU" target="_blank"><img src="/music/!g/ads/iyueni.png"></a>';

	var ry = Math.floor(Math.random() * adimg.length);
	if (ry === 0)
		ry = 1;
	document.getElementById("ad").innerHTML = (adimg[ry]);
}
random_adlink();
