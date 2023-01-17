// @flow strict

export type CommandType = {|
	name: string,
	url: string,
	searchurl?: string,
|};

export type CommandNames = 'fb' | 'm' | 'mw' | 'wa' | 'waw' | 'gm' | 'sis' | 'col' | 'yt' | 'tv' | 'gh' | 'r' | 'l' | 'chai' | 'ig' | 'tw' | 'tr' | 'vs' | 'todo' |
	'c' | 'wf' | '$' | 'cal' | 'hs' | 'p' | 'n' | 'h' | 'pv' | 'gd' | 'wp' | 'wsj' | 'cnn' | 'wiki' | 'g' | 'DEFAULT' | 'ins' | 'ask' | 'dfc' | 'b' | 'mc' | 'cab';

export type CommandDataTableType = {|
	name: string,
	url: string,
	command: CommandNames
|};

export type ColumnDataTableType = {|
	data: string,
	title: string
|};

export const COMMANDS: { [CommandNames]: CommandType } = {
	fb: {
		name: "Facebook",
		url: "https://facebook.com/",
		searchurl: "https://www.facebook.com/search/top/?q="
	},
	m: {
		name: "Messenger Desktop App",
		url: "messenger://",
	},
	wa: {
		name: "WhatsApp Desktop App",
		url: "whatsapp://",
	},
	gm: {
		name: "Gmail",
		url: "https://mail.google.com/mail/u/0",
		searchurl: "https://mail.google.com/mail/u/0/#search/"
	},
	yt: {
		name: "YouTube",
		url: "https://youtube.com/",
		searchurl: "https://www.youtube.com/results?search_query="
	},
	tv: {
		name: "YouTube TV",
		url: "https://tv.youtube.com/",
	},
	gh: {
		name: "GitHub",
		url: "https://github.com/chaixinzhe2000",
		searchurl: "https://www.github.com/search?q="
	},
	r: {
		name: "Reddit",
		url: "https://reddit.com/",
		searchurl: "https://www.reddit.com/search?q="
	},
	l: {
		name: "Linkedin",
		url: "https://linkedin.com/",
	},
	ins: {
		name: "Instagram",
		url: "https://instagram.com/",
		searchurl: "https://instagram.com/"
	},
	tw: {
		name: "Twitter",
		url: "https://twitter.com/",
		searchurl: "https://twitter.com/search?q="
	},
	chai: {
		name: "Xinzhe Chai - Personal Website",
		url: "https://rithik.me/me",
	},
	g: {
		name: "Google",
		url: "https://google.com/",
		searchurl: "https://www.google.com/search?q="
	},
	wsj: {
		name: "Wall Street Journal",
		url: "https://www.wsj.com/"
	},
	cnn: {
		name: "CNN",
		url: "https://www.cnn.com/"
	},
	ask: {
		name: "ASK Dashboard | Brown University",
		url: "https://ask.brown.edu"
	},
	n: {
		name: "Netflix",
		url: "https://netflix.com/",
		searchurl: "https://www.netflix.com/search?q="
	},
	h: {
		name: "Hulu",
		url: "https://hulu.com/",
	},
	dfc: {
		name: "Meta for Developers",
		url: "https://developers.facebook.com/",
	},
	cal: {
		name: "Google Calendar",
		url: "https://calendar.google.com/calendar/r"
	},
	wiki: {
		name: "Wikipedia",
		url: "https://en.wikipedia.org",
		searchurl: "https://en.wikipedia.org/wiki/"
	},
	todo: {
		name: "Add to Todoist",
		url: "https://todoist.com/app/project/2243061548",
		searchurl: "https://todo.xchai.me/add?todo="
	},
	b: {
		name: "Team Blind",
		url: "https://www.teamblind.com/",
		searchurl: "https://www.teamblind.com/search/"
	},
	mc: {
		name: "Meta Careers | Personal Dashboard",
		url: "https://www.metacareers.com/profile/home",
	},
	cab: {
		name: "Courses @ Brown",
		url: "https://cab.brown.edu/",
	},
	DEFAULT: {
		name: "Default - Google Search",
		url: "https://google.com/",
		searchurl: "https://www.google.com/search?q="
	}
};


