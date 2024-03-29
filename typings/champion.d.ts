type Champion = {
	version: string;
	id: string;
	key: string;
	name: string;
	title: string;
	lore: string;
	blurb: string;
	info: {
		attack: number;
		defense: number;
		magic: number;
		difficulty: number;
	};
	image: {
		full: string;
		sprite: string;
		group: string;
		x: number;
		y: number;
		w: number;
		h: number;
	};
	skins: {
		[x: string]: Skin;
	}
	tags: string[];
	partype: string;
	stats: {
		hp: number;
		hpperlevel: number;
		mp: number;
		mpperlevel: number;
		movespeed: number;
		armor: number;
		armorperlevel: number;
		spellblock: number;
		spellblockperlevel: number;
		attackrange: number;
		hpregen: number;
		hpregenperlevel: number;
		mpregen: number;
		mpregenperlevel: number;
		crit: number;
		critperlevel: number;
		attackdamage: number;
		attackdamageperlevel: number;
		attackspeedperlevel: number;
		attackspeed: number;
	},
	spells: {
		0: ChampionSpell,
		1: ChampionSpell,
		2: ChampionSpell,
		3: ChampionSpell,
	},
	passive: ChampionPassive;
};

export default Champion;


export type ChampionPreview = {
	version: string;
	id: string;
	name: string;
};


export type ChampionSpell = {
	id: string;
	name: string;
	description: string;
	image: {
		full: string;
		sprite: string;
	},
}

export type ChampionPassive = {
	name: string;
	description: string;
	image: {
		full: string;
		sprite: string;
	},
}

export type Skin = {
	id: string;
	num: number;
	name: string;
	chromas: boolean;
}