import type { Stamp } from './custom';
import { dev } from '$app/environment';

import watameSmug from '$lib/assets/watamesmug.jpg';
import hasukeProfilePic from '$lib/assets/hasuke-profile.jpg';
import saviProfilePic from '$lib/assets/savi-profile.jpg';
import moriProfilePic from '$lib/assets/morinohitos-profile.jpg';
import cyclicProfilePic from '$lib/assets/cyclic-redundancy-profile.png';
import erizuProfilePic from '$lib/assets/erizu-profile.jpg';
import juweiProfilePic from '$lib/assets/juwei-profile.jpg';
import ioeaProfile from '$lib/assets/ioea-profile.jpg';
import maruminProfile from '$lib/assets/marumin-profile.jpg';
import hynoriProfile from '$lib/assets/hynori-profile.png';
import asulNuiProfile from '$lib/assets/asulnui-profile.jpg';

/**
 * @file This file contains all the constants used in the application.
 */

// Stamp ralley partner stamp information.
// Each hash is the SHA1 hash of the stamp UUID token.
export const expectedStamps: Stamp[] = [
	{
		hash: '37d895725ad8aa8bba87a139710e909b46cb753e',
		id: 1,
		name: 'Hasuke はすけ 4C16',
		description: `
		Digital Artist & V-Tuber | 🇩🇪🇺🇸🇯🇵 |
| Graphic Art | Illustration | Gamedev | 
Certified Hololive Simp
Modell & Banner by me.`,
		externalURL: 'https://webapp.dokomi.de/explore/c/108511',
		imageURL: hasukeProfilePic
	},
	{
		id: 2,
		name: 'Kagura Nana @ IOEA',
		hash: '65f21aa01e5be625463340fdebf5eac8b636264f',
		description: `
		Natsume Eri, Eretto and Nana Kaguraaa
		`,
		externalURL: 'https://webapp.dokomi.de/explore/c/109092',
		imageURL: ioeaProfile
	},
	{
		id: 3,
		name: 'marumin',
		hash: '0cee71fe8e4834108709bbc3986517fc1bb82175',
		description: `
		♡ I'm Maru and I draw!! | DM for commission info || email: amarururun@gmail.com || 🍃🌿🍀rambles 
@marusleeps
 || https://marustore.storenvy.com
 `,
		externalURL: 'https://webapp.dokomi.de/explore/c/107001',
		imageURL: maruminProfile
	},
	{
		id: 4,
		name: 'hynori🌸 3G94',
		hash: '78d2cb5917a477bdaa73e743e2e71760b72f30c7',
		description: `
		phi 🌟 she/her 🌟 game art student 🌟 OC, DnD, FFXIV, genshin 🌟 I love alphinaud leveilleur 🌟 comms CLOSED 🌟 email hynorin*gmail*com GER&ENG OK! 日本語まだまだです
		`,
		externalURL: 'https://webapp.dokomi.de/explore/c/107044',
		imageURL: hynoriProfile
	},
	{
		id: 5,
		name: 'Mori @ 3M34',
		hash: '76a12efd6c61d78ecf46c820c4210ef9eaceda34',
		description: 'Artist into: Anime|VTubers|Games',
		externalURL: 'https://webapp.dokomi.de/explore/c/108058',
		imageURL: moriProfilePic
	},
	{
		id: 6,
		name: 'SAVI✿サビ M701',
		hash: '26f34a24468d310ae469fcde15fef83ed9d3297d',
		description: `
		I'm a pink ball who simps for cute girls.. and draws…sometimes (2434) 💓Eng/Рус/日本語/Ger OK💓 business: savi.chan.commissions@gmail(.)com📩info in carrd`,
		externalURL: 'https://webapp.dokomi.de/explore/c/107468',
		imageURL: saviProfilePic
	},

	{
		id: 7,
		name: 'CYCLIC★REDUNDANCY',
		hash: '547b3527f079fd616ccd420d242e06092efc2e1b',
		description: `
		Doujin 同人 Circle 🎨▪️Account manager 担当者：
@Ninamo_lcr
▪️Online stores 通販 ➡️ See pinned tweet 🛒📌▪️ES/EN/日本語👌`,
		externalURL: 'https://webapp.dokomi.de/explore/c/107091',
		imageURL: cyclicProfilePic
	},
	{
		id: 8,
		name: 'Erizu 3J19',
		hash: '31db5fff1842de328bf801624d6c6a7a368849e2',
		description: 'Freelance Illustrator | Live2d Artist/Rigger | Pixel Art Apprentice',
		externalURL: 'https://webapp.dokomi.de/explore/c/108335',
		imageURL: erizuProfilePic
	},
	{
		id: 9,
		name: 'juwei 🌷🌆',
		hash: 'be94be5fe0c93e5c74a6b62f500b66954eca9ed2',
		description: `
		【artist and tea connoisseur】commissions: http://vgen.co/juwei • stream: http://twitch.tv/juwei_ • support: http://ko-fi.com/juwei • alt: 
@jujujuwei
 ✨ h: 
@pnkkr4mune`,
		externalURL: 'https://webapp.dokomi.de/explore/c/107557',
		imageURL: juweiProfilePic
	},
	{
		id: 10,
		name: 'Asulnui',
		hash: '6fdfc8bfb68f0c3df42bf6d98064f2a7b058e4e5',
		description: `
		Robo doggo⚡🐾 Vtuber training arc. VArtist 🖊️ Art tag #Inuink 
ESP/ENG/日本語 OK!
`,
		externalURL: 'https://webapp.dokomi.de/explore/c/107086',
		imageURL: asulNuiProfile
	}
];

export const socketServerURL = dev
	? 'ws://localhost:4000/socket'
	: 'wss://api.hololivefanbooth.com/socket';
export const apiServerURL = dev
	? 'http://localhost:4000/api/json'
	: 'https://api.hololivefanbooth.com/api/json';

export const holomemGachaPool = [
	{
		id: 'UC060r4zABV18vcahAWR1n7w',
		name: 'Machina X Flayon Ch. HOLOSTARS-EN',
		english_name: 'Machina X Flayon',
		type: 'vtuber',
		org: 'Hololive',
		group: 'HOLOSTARS English -TEMPUS- Vanguard',
		photo:
			'https://yt3.ggpht.com/4_CFVqKaaM7_qrWwzIvVAhevS1i4fP4GfjPULgZXzFCIh9ga6jYeUq6ySqsBCh7u3q5tNj1Tcw=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'MachinaXFlayon',
		video_count: '202',
		subscriber_count: '114000',
		clip_count: 188,
		top_topics: ['membersonly', 'talk', 'drawing'],
		inactive: false,
		twitch: 'machinaxflayon'
	},
	{
		id: 'UC0TXe_LYZ4scaW2XMyi5_kw',
		name: 'AZKi Channel',
		english_name: 'AZKi',
		type: 'vtuber',
		org: 'Hololive',
		group: '0th Generation',
		photo:
			'https://yt3.ggpht.com/so69WMDlrSwil0013l7MLKIBLV--U_zjya2tG9_Sgij5NBm7raSvbZXUJiiAbQgrZosseqKDobM=s800-c-k-c0x00ffffff-no-nd-rj',
		twitter: 'AZKi_VDiVA',
		video_count: '363',
		subscriber_count: '822000',
		clip_count: 1455,
		top_topics: ['Original_Song', 'singing', 'Music_Cover'],
		inactive: false,
		twitch: null
	},
	{
		id: 'UC1CfXB_kRs3C-zaeTG3oGyg',
		name: 'HAACHAMA Ch 赤井はあと',
		english_name: 'Akai Haato',
		type: 'vtuber',
		org: 'Hololive',
		group: '1st Generation',
		photo:
			'https://yt3.ggpht.com/B2tq3IQAFxUe9W3MaMc0V62bmlTWCSoTuCk-Y-Ab8yXkZKdIswQhHABZhz2e4YM1-B_Kxen_7w=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'akaihaato',
		video_count: '1065',
		subscriber_count: '1420000',
		clip_count: 6477,
		top_topics: ['minecraft', 'singing', 'Cooking_Stream'],
		inactive: false,
		twitch: 'akaihaato_hololive'
	},
	{
		id: 'UC1DCedRgGHBdm81E1llLhOQ',
		name: 'Pekora Ch. 兎田ぺこら',
		english_name: 'Usada Pekora',
		type: 'vtuber',
		org: 'Hololive',
		group: '3rd Generation (Fantasy)',
		photo:
			'https://yt3.ggpht.com/ytc/AGIKgqP37U8cdmOVTEbm7mv2Oy_aVe-Gb9xLDt1CUm6eGQ=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'usadapekora',
		video_count: '1365',
		subscriber_count: '2250000',
		clip_count: 33076,
		top_topics: ['minecraft', 'Dragon_Quest', 'Mario_Kart'],
		inactive: false,
		twitch: 'usadapekora_hololive'
	},
	{
		id: 'UC1opHUrw8rvnsadT-iGp7Cg',
		name: 'Aqua Ch. 湊あくあ',
		english_name: 'Minato Aqua',
		type: 'vtuber',
		org: 'Hololive',
		group: '2nd Generation',
		photo:
			'https://yt3.ggpht.com/ytc/AGIKgqNV97JLVRQ6N1an2FmwZihnGiJedqakVaeqGWc-UA=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'minatoaqua',
		video_count: '523',
		subscriber_count: '1810000',
		clip_count: 11444,
		top_topics: ['minecraft', 'apex', 'singing'],
		inactive: false,
		twitch: 'minatoaquach_hololive'
	},
	{
		id: 'UC1suqwovbL1kzsoaZgFZLKg',
		name: 'Choco Ch. 癒月ちょこ',
		english_name: 'Yuzuki Choco',
		type: 'vtuber',
		org: 'Hololive',
		group: '2nd Generation',
		photo:
			'https://yt3.ggpht.com/ytc/AGIKgqNzfGVZwVhtn5qdTFii-gdpVSiEeJrPsGQMKcreDA=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'yuzukichococh',
		video_count: '659',
		subscriber_count: '982000',
		clip_count: 4292,
		top_topics: ['dbd', 'apex', 'Cooking_Stream'],
		inactive: false,
		twitch: null
	},
	{
		id: 'UC1uv2Oq6kNxgATlCiez59hw',
		name: 'Towa Ch. 常闇トワ',
		english_name: 'Tokoyami Towa',
		type: 'vtuber',
		org: 'Hololive',
		group: '4th Generation (holoForce)',
		photo:
			'https://yt3.ggpht.com/meRnxbRUm5yPSwq8Q5QpI5maFApm5QTGQV_LGblQFsoO0yAV4LI-nSZ70GYwMZ_tbfSa_O8MTCU=s800-c-k-c0x00ffffff-no-nd-rj',
		twitter: 'tokoyamitowa',
		video_count: '1030',
		subscriber_count: '1260000',
		clip_count: 11515,
		top_topics: ['apex', 'minecraft', 'talk'],
		inactive: false,
		twitch: 'tokoyamitowa_holo'
	},
	{
		id: 'UC2hx0xVkMoHGWijwr_lA01w',
		name: 'Axel Syrios Ch. HOLOSTARS-EN',
		english_name: 'Axel Syrios',
		type: 'vtuber',
		org: 'Hololive',
		group: 'HOLOSTARS English -TEMPUS- HQ',
		photo:
			'https://yt3.ggpht.com/R4NxwlGVKoR9spXGLAqVInfP-MML5mxdt1-kTOMlIrDWcq1gv2cOuxjoPYmf5RNd8Xqbz17r=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'axelsyrios',
		video_count: '333',
		subscriber_count: '209000',
		clip_count: 883,
		top_topics: ['apex', 'talk', 'membersonly'],
		inactive: false,
		twitch: 'axelsyrios_holostars_en'
	},
	{
		id: 'UC3n5uGu18FoCy23ggWWp8tA',
		name: 'Nanashi Mumei Ch. hololive-EN',
		english_name: 'Nanashi Mumei',
		type: 'vtuber',
		org: 'Hololive',
		group: 'English (CouncilRyS)',
		photo:
			'https://yt3.ggpht.com/owZmjfnG_SGVmfkl3eS7Lv47pGvIr2SrS36imh6O8i0H3Wy41fYKD26U7wnyRB627fXoq0aQ0Q=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'nanashimumei_en',
		video_count: '353',
		subscriber_count: '859000',
		clip_count: 8081,
		top_topics: ['singing', 'membersonly', 'minecraft'],
		inactive: false,
		twitch: null
	},
	{
		id: 'UC5CwaMl1eIgY8h02uZw7u8A',
		name: 'Suisei Channel',
		english_name: 'Hoshimachi Suisei',
		type: 'vtuber',
		org: 'Hololive',
		group: '0th Generation',
		photo:
			'https://yt3.ggpht.com/ytc/AGIKgqPRYV-Bg1-4gAtqVwo6tWtgPkTMtLm-STXRb31Rqg=s800-c-k-c0x00ffffff-no-rj-mo',
		twitter: 'suisei_hosimati',
		video_count: '668',
		subscriber_count: '1900000',
		clip_count: 12208,
		top_topics: ['singing', 'minecraft', 'talk'],
		inactive: false,
		twitch: null
	},
	{
		id: 'UC6eWCld0KwmyHFbAqK3V-Rw',
		name: 'Koyori ch. 博衣こより - holoX -',
		english_name: 'Hakui Koyori',
		type: 'vtuber',
		org: 'Hololive',
		group: '6th Generation -holoX-',
		photo:
			'https://yt3.ggpht.com/WO7ItKNmy6tW_NQ82g8c1y74CZSw6GsSdynsE5s2csuEok2fHRrAaGcBV3JJO-2BxEOXXA8lvw=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'hakuikoyori',
		video_count: '1065',
		subscriber_count: '921000',
		clip_count: 11639,
		top_topics: ['morning', 'minecraft', 'shorts'],
		inactive: false,
		twitch: 'hakuikoyori_hololive'
	},
	{
		id: 'UC6t3-_N8A6ME1JShZHHqOMw',
		name: 'Miyabi Ch. 花咲みやび',
		english_name: 'Hanasaki Miyabi',
		type: 'vtuber',
		org: 'Hololive',
		group: 'HOLOSTARS 1st Gen',
		photo:
			'https://yt3.ggpht.com/O6KhIGX91d99vduasQsqIQNvt1tC9DjDlTlLQr_k0aq0EtvgF4hM1YNAOmEOz9Vtqs1yyAkfkw=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'miyabihanasaki',
		video_count: '879',
		subscriber_count: '142000',
		clip_count: 664,
		top_topics: ['talk', 'membersonly', 'minecraft'],
		inactive: false,
		twitch: 'hanasakimiyabi_holostars'
	},
	{
		id: 'UC727SQYUvx5pDDGQpTICNWg',
		name: 'Anya Melfissa Ch. hololive-ID',
		english_name: 'Anya Melfissa',
		type: 'vtuber',
		org: 'Hololive',
		group: 'Indonesia 2nd Gen (holoro)',
		photo:
			'https://yt3.ggpht.com/58uF1apTqtovpieDrBCSF5pUeNU2MA6n34bdj2EBEVnySKm-VvEznGNt2puk4v4tAnA3AYh5JA=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'anyamelfissa',
		video_count: '636',
		subscriber_count: '628000',
		clip_count: 2653,
		top_topics: ['membersonly', 'Rust', 'talk'],
		inactive: false,
		twitch: null
	},
	{
		id: 'UC7fk0CB07ly8oSl0aqKkqFg',
		name: 'Nakiri Ayame Ch. 百鬼あやめ',
		english_name: 'Nakiri Ayame',
		type: 'vtuber',
		org: 'Hololive',
		group: '2nd Generation',
		photo:
			'https://yt3.ggpht.com/XDGhKwPZcT16Ppg2gQmLHEIYRhw9sY4rqG0HWbeCH68LHkhlVQrrFgxd5hWUuMb2nLfDOhu6=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'nakiriayame',
		video_count: '281',
		subscriber_count: '1410000',
		clip_count: 5787,
		top_topics: ['singing', 'talk', 'minecraft'],
		inactive: false,
		twitch: 'nakiriayame_hololive'
	},
	{
		id: 'UC7gxU6NXjKF1LrgOddPzgTw',
		name: 'Banzoin Hakka Ch. HOLOSTARS-EN',
		english_name: 'Banzoin Hakka',
		type: 'vtuber',
		org: 'Hololive',
		group: 'HOLOSTARS English -TEMPUS- Vanguard',
		photo:
			'https://yt3.ggpht.com/cgq7GevjPwVIuZcjDBvSF5JlnJJLo2RRpVHTWNF0lxLSGAsaScy1k931WGhJSg74lsCs7UbNlA=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'BanzoinHakka',
		video_count: '202',
		subscriber_count: '128000',
		clip_count: 361,
		top_topics: ['minecraft', 'talk', 'membersonly'],
		inactive: false,
		twitch: 'banzoinhakka'
	},
	{
		id: 'UC7MMNHR-kf9EN1rXiesMTMw',
		name: 'Magni Dezmond Ch. HOLOSTARS-EN',
		english_name: 'Magni Dezmond',
		type: 'vtuber',
		org: 'Hololive',
		group: 'HOLOSTARS English -TEMPUS- HQ',
		photo:
			'https://yt3.ggpht.com/8SFoIMf_6XTf0jyeLd6Txdl96BqSyGhb250P3qEh7E4ui8fLNxLXLiLf7phYVy0CIYx3as42=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'magnidezmond',
		video_count: '262',
		subscriber_count: '205000',
		clip_count: 1000,
		top_topics: ['membersonly', 'drawing', 'Sonic'],
		inactive: false,
		twitch: 'magnidezmond_holostars_en'
	},
	{
		id: 'UC8rcEBzJSleTkf_-agPM20g',
		name: 'IRyS Ch. hololive-EN',
		english_name: 'IRyS',
		type: 'vtuber',
		org: 'Hololive',
		group: 'English (CouncilRyS)',
		photo:
			'https://yt3.ggpht.com/oC30wBZ04ibFN7AQVHAjdUX-3nS-h4DDjJBYVlsKt0OF6t1CZwrgzWlr3rS6Q12kXrw3-mt9gg=s800-c-k-c0x00ffffff-no-nd-rj',
		twitter: 'irys_en',
		video_count: '360',
		subscriber_count: '933000',
		clip_count: 7248,
		top_topics: ['singing', 'membersonly', 'minecraft'],
		inactive: false,
		twitch: null
	},
	{
		id: 'UC9mf_ZVpouoILRY9NUIaK-w',
		name: 'Rikka ch.律可',
		english_name: 'Rikka',
		type: 'vtuber',
		org: 'Hololive',
		group: 'HOLOSTARS 1st Gen',
		photo:
			'https://yt3.ggpht.com/0MLL-S2KKu4PlhedunMhvg4VPJGm6Fpx2C4QV2PWJvkcG1eA6XqUYULUZGqBF2M4iNY7FxBt=s800-c-k-c0x00ffffff-no-nd-rj',
		twitter: 'rikkaroid',
		video_count: '783',
		subscriber_count: '231000',
		clip_count: 428,
		top_topics: ['singing', 'apex', 'talk'],
		inactive: false,
		twitch: 'rikka_holostars'
	},
	{
		id: 'UCa9Y57gfeY0Zro_noHRVrnw',
		name: 'Luna Ch. 姫森ルーナ',
		english_name: 'Himemori Luna',
		type: 'vtuber',
		org: 'Hololive',
		group: '4th Generation (holoForce)',
		photo:
			'https://yt3.ggpht.com/O7m_5HMY_O8yxR3Jhn9cEO1fLNL_GifMERExnAmfY7JrdTRsTjNijTcNYTPN97Llj3zGn8Susw=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'himemoriluna',
		video_count: '825',
		subscriber_count: '933000',
		clip_count: 7880,
		top_topics: ['membersonly', 'monhun', 'singing'],
		inactive: false,
		twitch: 'himemoriluna_hololive'
	},
	{
		id: 'UCANDOlYTJT7N5jlRC3zfzVA',
		name: 'Roberu Ch. 夕刻ロベル',
		english_name: 'Yukoku Roberu',
		type: 'vtuber',
		org: 'Hololive',
		group: 'HOLOSTARS 2nd Gen (SunTempo)',
		photo:
			'https://yt3.ggpht.com/yVTO0I6VAXBjBLBPvgLGlBlp1hganldhl6AY3PW_ZWOJ0sYwfLo1yc2Sqr5SMjXQf7Dm4U-2=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'yukokuroberu',
		video_count: '1466',
		subscriber_count: '301000',
		clip_count: 1861,
		top_topics: ['morning', 'talk', 'idolmaster'],
		inactive: false,
		twitch: 'yukokuroberu_holostars'
	},
	{
		id: 'UCAoy6rzhSf4ydcYjJw3WoVg',
		name: 'Airani Iofifteen Channel hololive-ID',
		english_name: 'Airani Iofifteen',
		type: 'vtuber',
		org: 'Hololive',
		group: 'Indonesia 1st Gen (AREA 15)',
		photo:
			'https://yt3.ggpht.com/bF91weVtAIL7Uhnr2HVwtCTLVKK5kVsn4FC_Ze3Gl8rkSsEjDwyey3AbQ1PDfJQ1Oeac5cePeg=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'airaniiofifteen',
		video_count: '782',
		subscriber_count: '706000',
		clip_count: 2173,
		top_topics: ['drawing', 'membersonly', 'talk'],
		inactive: false,
		twitch: null
	},
	{
		id: 'UCAWSyEs_Io8MtpY3m-zqILA',
		name: 'Nene Ch.桃鈴ねね',
		english_name: 'Momosuzu Nene',
		type: 'vtuber',
		org: 'Hololive',
		group: '5th Generation (holoFive)',
		photo:
			'https://yt3.ggpht.com/bMBMxmB1YVDVazU-8KbB6JZqUHn4YzmFiQRWwEUHCeqm5REPW7HHQChC5xE6e36aqqnXgK4a=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'momosuzunene',
		video_count: '779',
		subscriber_count: '1070000',
		clip_count: 11192,
		top_topics: ['minecraft', 'talk', 'singing'],
		inactive: false,
		twitch: 'momosuzunene_hololive'
	},
	{
		id: 'UCc88OV45ICgHbn3ZqLLb52w',
		name: 'Fuma Ch. 夜十神封魔 - UPROAR!! -',
		english_name: 'Yatogami Fuma',
		type: 'vtuber',
		org: 'Hololive',
		group: 'HOLOSTARS UPROAR!!',
		photo:
			'https://yt3.ggpht.com/V_j0IIwkYF4rglwASfZ9-4-Vn6q6raVF7RNQCB3lr3YNL4YVZq-RbFl0FnoNnnps3-sO-NuBcVs=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'yatogamifuma',
		video_count: '307',
		subscriber_count: '117000',
		clip_count: 182,
		top_topics: ['Splatoon', 'apex', 'talk'],
		inactive: false,
		twitch: null
	},
	{
		id: 'UCCzUftO8KOVkV4wQG1vkUvg',
		name: 'Marine Ch. 宝鐘マリン',
		english_name: 'Houshou Marine',
		type: 'vtuber',
		org: 'Hololive',
		group: '3rd Generation (Fantasy)',
		photo:
			'https://yt3.ggpht.com/Z2QpYUZ4-jKoFR7Ms330gRQzjI2gZ4CB_uVP6f39YysxUe1u8icrtE07ffpRxCtpu9U65MWNDA=s800-c-k-c0x00ffffff-no-nd-rj',
		twitter: 'houshoumarine',
		video_count: '1016',
		subscriber_count: '2430000',
		clip_count: 21693,
		top_topics: ['talk', 'shorts', 'singing'],
		inactive: false,
		twitch: null
	},
	{
		id: 'UCD8HOxPs4Xvsm8H0ZxXGiBw',
		name: 'Mel Channel 夜空メルチャンネル',
		english_name: 'Yozora Mel',
		type: 'vtuber',
		org: 'Hololive',
		group: '1st Generation',
		photo:
			'https://yt3.ggpht.com/I6f2LiL5tEL4ECQhPNJPvBkrf6WrKAS8nheCpTyyQSNKzCwBL2XJSGKxBMc6UNcUr1AR7hrjXw=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'yozoramel',
		video_count: '538',
		subscriber_count: '832000',
		clip_count: 2850,
		top_topics: ['membersonly', 'minecraft', 'morning'],
		inactive: false,
		twitch: null
	},
	{
		id: 'UCdfMHxjcCc2HSd9qFvfJgjg',
		name: 'Rio Ch. 水無世燐央 - UPROAR!! -',
		english_name: 'Minase Rio',
		type: 'vtuber',
		org: 'Hololive',
		group: 'HOLOSTARS UPROAR!!',
		photo:
			'https://yt3.ggpht.com/R0Hi-1llrejl1xy--CrjpK1dfd3ZK_21VIwABJmL9FQ7_JAA4hMC1pYOHzFWHtU2oZTFLn991FQ=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'minaserioch',
		video_count: '378',
		subscriber_count: '122000',
		clip_count: 229,
		top_topics: ['minecraft', 'singing', 'membersonly'],
		inactive: false,
		twitch: null
	},
	{
		id: 'UCdn5BQ06XqgXoAxIhbqw5Rg',
		name: 'フブキCh。白上フブキ',
		english_name: 'Shirakami Fubuki',
		type: 'vtuber',
		org: 'Hololive',
		group: '1st Generation',
		photo:
			'https://yt3.ggpht.com/ytc/AGIKgqOR_NzQfQ-w70LMrrtl9FfppVmIkxDaeDd-wxLzLw=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'shirakamifubuki',
		video_count: '2036',
		subscriber_count: '2150000',
		clip_count: 11461,
		top_topics: ['minecraft', 'apex', 'Pokemon'],
		inactive: false,
		twitch: 'shirakamifubuki_holo'
	},
	{
		id: 'UCDqI2jOz0weumE8s7paEk6g',
		name: 'Roboco Ch. - ロボ子',
		english_name: 'Roboco-san',
		type: 'vtuber',
		org: 'Hololive',
		group: '0th Generation',
		photo:
			'https://yt3.ggpht.com/ytc/AGIKgqOGep-9Pkw2EAzaMN16N-gnpuYkwu-_rEDILZPPLA=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'robocosan',
		video_count: '1310',
		subscriber_count: '926000',
		clip_count: 4091,
		top_topics: ['apex', 'minecraft', 'singing'],
		inactive: false,
		twitch: 'robocosan_hololive'
	},
	{
		id: 'UCDRWSO281bIHYVi-OV3iFYA',
		name: 'Noir Vesper Ch. HOLOSTARS-EN',
		english_name: 'Noir Vesper',
		type: 'vtuber',
		org: 'Hololive',
		group: 'HOLOSTARS English -TEMPUS- HQ',
		photo:
			'https://yt3.ggpht.com/AolvOgxW8xxRysV9MSBo3Yqs1SoL-bi1HK2A--lI1EZ5P1c2--LOkm-Fpn8ecJLHmaRm_Ts5GQ=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'noirvesper_en',
		video_count: '272',
		subscriber_count: '217000',
		clip_count: 833,
		top_topics: ['talk', 'membersonly', 'Project_Zomboid'],
		inactive: false,
		twitch: 'noirvesper_holostars_en'
	},
	{
		id: 'UCdyqAaZDKHXg4Ahi7VENThQ',
		name: 'Noel Ch. 白銀ノエル',
		english_name: 'Shirogane Noel',
		type: 'vtuber',
		org: 'Hololive',
		group: '3rd Generation (Fantasy)',
		photo:
			'https://yt3.ggpht.com/ytc/AGIKgqO8k8ACnczwsxEYAkzmtW--h3EfOWS2cHh0BnfSkA=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'shiroganenoel',
		video_count: '919',
		subscriber_count: '1680000',
		clip_count: 14536,
		top_topics: ['talk', 'zelda', 'singing'],
		inactive: false,
		twitch: 'shiroganenoel_hololive'
	},
	{
		id: 'UCENwRMx5Yh42zWpzURebzTw',
		name: 'Laplus ch. ラプラス・ダークネス - holoX -',
		english_name: 'La+ Darknesss',
		type: 'vtuber',
		org: 'Hololive',
		group: '6th Generation -holoX-',
		photo:
			'https://yt3.ggpht.com/roGS60A8a_lDbVakIg1JU3u3hbtjHSTilMGHMizuPKh7tuoY2nl46raxuW2f_83IKFGMjL6Z=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'LaplusDarknesss',
		video_count: '391',
		subscriber_count: '980000',
		clip_count: 6417,
		top_topics: ['shorts', 'membersonly', 'talk'],
		inactive: false,
		twitch: 'laplusdarknesss_hololive'
	},
	{
		id: 'UCEzsociuFqVwgZuMaZqaCsg',
		name: 'Kira Ch. 鏡見キラ',
		english_name: 'Kagami Kira',
		type: 'vtuber',
		org: 'Hololive',
		group: 'HOLOSTARS 1st Gen',
		photo:
			'https://yt3.ggpht.com/ytc/AMLnZu9CNXhF_CPokaUVmjsIMP-sf0QDPQb7-Zdk8gkx=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'kagamikirach',
		video_count: '95',
		subscriber_count: '77100',
		clip_count: 57,
		top_topics: ['apex', 'ringfit', 'talk'],
		inactive: true,
		twitch: null
	},
	{
		id: 'UCFKOVgVbGmX65RxO3EtH3iw',
		name: 'Lamy Ch. 雪花ラミィ',
		english_name: 'Yukihana Lamy',
		type: 'vtuber',
		org: 'Hololive',
		group: '5th Generation (holoFive)',
		photo:
			'https://yt3.ggpht.com/ytc/AGIKgqP6dJjaYvbEVUijEffFTudKdiL-URdhLxrZO4aXqA=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'yukihanalamy',
		video_count: '973',
		subscriber_count: '1130000',
		clip_count: 13029,
		top_topics: ['talk', 'minecraft', 'morning'],
		inactive: false,
		twitch: 'yukihanalamy_hololive'
	},
	{
		id: 'UCfrWoRGlawPQDQxxeIDRP0Q',
		name: 'hololive Indonesia',
		english_name: '',
		type: 'vtuber',
		org: 'Hololive',
		group: 'Official',
		photo:
			'https://yt3.ggpht.com/ytc/AGIKgqOz4TQxxYWtSuk95qUFknicNXIsn-jZF1utalgogw=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'hololive_id',
		video_count: '99',
		subscriber_count: '436000',
		clip_count: 242,
		top_topics: ['minecraft', 'Music_Cover', 'Outfit_Reveal'],
		inactive: false,
		twitch: null
	},
	{
		id: 'UCFTLzh12_nrtzqBPsTCqenA',
		name: 'アキロゼCh。Vtuber/ホロライブ所属',
		english_name: 'Aki Rosenthal',
		type: 'vtuber',
		org: 'Hololive',
		group: '1st Generation',
		photo:
			'https://yt3.ggpht.com/ytc/AGIKgqNea84tdUxzVUAiLzNzWCzOBmyhtsWA3kSzMrUT5A=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'akirosenthal',
		video_count: '858',
		subscriber_count: '778000',
		clip_count: 3039,
		top_topics: ['ark', 'Splatoon', 'monhun'],
		inactive: false,
		twitch: null
	},
	{
		id: 'UCGKgJ4MtJ1coi6tWJUfnsQA',
		name: 'Suzaku Ch. 薬師寺朱雀',
		english_name: 'Yakushiji Suzaku',
		type: 'vtuber',
		org: 'Hololive',
		group: 'HOLOSTARS 1st Gen',
		photo:
			'https://yt3.ggpht.com/ytc/AMLnZu_a75R9Gam4_hdwi8YLHLA3VLrJ1BMX7iT5ebk=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'YakushijiSuzaku',
		video_count: '0',
		subscriber_count: '10300',
		clip_count: null,
		top_topics: null,
		inactive: true,
		twitch: null
	},
	{
		id: 'UCgmPnx-EEeOrZSg5Tiw7ZRQ',
		name: 'Hakos Baelz Ch. hololive-EN',
		english_name: 'Hakos Baelz',
		type: 'vtuber',
		org: 'Hololive',
		group: 'English (CouncilRyS)',
		photo:
			'https://yt3.ggpht.com/SSZxkgjfV0O05zq1bBLOI0PszOCoxuPrANQ0Ysngsd0t81mnkwzEgIW2ypSIQJLn8swR14zLJQ=s800-c-k-c0x00ffffff-no-nd-rj',
		twitter: 'hakosbaelz',
		video_count: '517',
		subscriber_count: '734000',
		clip_count: 9519,
		top_topics: ['talk', 'minecraft', 'membersonly'],
		inactive: false,
		twitch: null
	},
	{
		id: 'UCGNI4MENvnsymYjKiZwv9eg',
		name: 'Temma Ch. 岸堂天真',
		english_name: 'Kishido Temma',
		type: 'vtuber',
		org: 'Hololive',
		group: 'HOLOSTARS 2nd Gen (SunTempo)',
		photo:
			'https://yt3.ggpht.com/ytc/AGIKgqNe9womeeRYw8SjLtqVS6Jk9vKEtfdBinvbKj5N=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'kishidotemma',
		video_count: '1096',
		subscriber_count: '135000',
		clip_count: 849,
		top_topics: ['Mario_Kart', 'apex', 'dbd'],
		inactive: false,
		twitch: 'kishidotemma_holostars'
	},
	{
		id: 'UCgNVXGlZIFK96XdEY20sVjg',
		name: 'Civia Ch.',
		english_name: 'Civia',
		type: 'vtuber',
		org: 'Hololive',
		group: 'CN 1st Generation',
		photo:
			'https://yt3.ggpht.com/ytc/AMLnZu-0LadfM-PpBLRXMscMU2RhhK70byRefdDwTD3I=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'Civia_Hololive',
		video_count: '0',
		subscriber_count: '54600',
		clip_count: 10,
		top_topics: ['Super_Mario'],
		inactive: true,
		twitch: null
	},
	{
		id: 'UCgRqGV1gBf2Esxh0Tz1vxzw',
		name: 'Uyu Ch. 羽継烏有 - UPROAR!! -',
		english_name: 'Utsugi Uyu',
		type: 'vtuber',
		org: 'Hololive',
		group: 'HOLOSTARS UPROAR!!',
		photo:
			'https://yt3.ggpht.com/IU7hPSrqpET8vB5HWKnueKfXnjLFG8OvUn3U_bnJn2l2OrIQy6JZPz5hTEqCInQZ-xZJXUwS=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'utsugiuyu',
		video_count: '286',
		subscriber_count: '85000',
		clip_count: 134,
		top_topics: ['apex', 'talk', 'dbd'],
		inactive: false,
		twitch: null
	},
	{
		id: 'UCGSOfFtVCTBfmGxHK5OD8ag',
		name: 'Ankimo Ch. あん肝チャンネル',
		english_name: 'Ankimo',
		type: 'vtuber',
		org: 'Hololive',
		group: 'Misc',
		photo:
			'https://yt3.ggpht.com/1Tq5YXJhE91OdA882yhib-vb6q4BTBKe4QP3SakTVIrEPqOnRbHTSlvOnokf74FZhcCGEVGFw6s=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'ankimoch',
		video_count: '1',
		subscriber_count: '37500',
		clip_count: 2,
		top_topics: null,
		inactive: false,
		twitch: null
	},
	{
		id: 'UCgZuwn-O7Szh9cAgHqJ6vjw',
		name: 'Aloe Ch.魔乃アロエ',
		english_name: 'Mano Aloe',
		type: 'vtuber',
		org: 'Hololive',
		group: '5th Generation (holoFive)',
		photo:
			'https://yt3.ggpht.com/ytc/AMLnZu_aQ3akSpFc9SVPcFMXATjdKZAcmy1aXtGq364A=s800-c-k-c0x00ffffff-no-rj',
		twitter: null,
		video_count: '0',
		subscriber_count: '233000',
		clip_count: 48,
		top_topics: ['Debut_Stream', 'announce'],
		inactive: true,
		twitch: null
	},
	{
		id: 'UChAnqc_AY5_I3Px5dig3X1Q',
		name: 'Korone Ch. 戌神ころね',
		english_name: 'Inugami Korone',
		type: 'vtuber',
		org: 'Hololive',
		group: 'GAMERS',
		photo:
			'https://yt3.ggpht.com/ytc/AGIKgqNgSV284BjxoFP7kRciFBHStJU9vcrrZXgZDN07jQ=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'inugamikorone',
		video_count: '822',
		subscriber_count: '1990000',
		clip_count: 13914,
		top_topics: ['membersonly', 'talk', 'Splatoon'],
		inactive: false,
		twitch: null
	},
	{
		id: 'UChgTyjG-pdNvxxhdsXfHQ5Q',
		name: 'Pavolia Reine Ch. hololive-ID',
		english_name: 'Pavolia Reine',
		type: 'vtuber',
		org: 'Hololive',
		group: 'Indonesia 2nd Gen (holoro)',
		photo:
			'https://yt3.ggpht.com/3Wp-qrvmEyR4I4CcqrzbERgqjZkKWpptZTV9veusoh9ZeIdBTx7WfUB3uT8bnMp5ApebFERHZ9I=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'pavoliareine',
		video_count: '990',
		subscriber_count: '758000',
		clip_count: 3996,
		top_topics: ['membersonly', 'talk', 'minecraft'],
		inactive: false,
		twitch: null
	},
	{
		id: 'UCHj_mh57PVMXhAUDphUQDFA',
		name: 'HAACHAMA DARKWEB CH',
		english_name: 'Akai Haato (Sub)',
		type: 'vtuber',
		org: 'Hololive',
		group: '1st Generation',
		photo:
			'https://yt3.ggpht.com/0aanUg5Kw0OhrZaslpEHEfRbR1Tv7n0gc-NsQHaztVp9eiOD2FcRBc4AliIPzvKWzSDOGQcqNmo=s800-c-k-c0x00ffffff-no-rj',
		twitter: null,
		video_count: '14',
		subscriber_count: '204000',
		clip_count: 4,
		top_topics: ['shorts'],
		inactive: false,
		twitch: null
	},
	{
		id: 'UC-hM6YJuNYVAmUWxeIr9FeA',
		name: 'Miko Ch. さくらみこ',
		english_name: 'Sakura Miko',
		type: 'vtuber',
		org: 'Hololive',
		group: '0th Generation',
		photo:
			'https://yt3.ggpht.com/c_e69ht1AS3XPXbs_wvXkjULw_mVcD4d9_ioYtd6bYh79EKujnwXF3_CnRz6IP0tP7YvPfCfow=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'sakuramiko35',
		video_count: '1140',
		subscriber_count: '1790000',
		clip_count: 33672,
		top_topics: ['minecraft', 'GTA', 'membersonly'],
		inactive: false,
		twitch: 'sakuramiko_hololive'
	},
	{
		id: 'UCHP4f7G2dWD4qib7BMatGAw',
		name: 'Gavis Bettel Ch. HOLOSTARS-EN',
		english_name: 'Gavis Bettel',
		type: 'vtuber',
		org: 'Hololive',
		group: 'HOLOSTARS English -TEMPUS- Vanguard',
		photo:
			'https://yt3.ggpht.com/KCOi00Trc1KOPpHdwlkQiktd4ejGi7meB7A5kaoTjitcTDo1A10b3c-68L0VfnIvKoEMj6yY=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'GavisBettel',
		video_count: '175',
		subscriber_count: '126000',
		clip_count: 375,
		top_topics: ['talk', 'membersonly', 'the_sims'],
		inactive: false,
		twitch: 'gavisbettel'
	},
	{
		id: 'UChSvpZYRPh0FvG4SJGSga3g',
		name: 'Shien Ch.影山シエン',
		english_name: 'Kageyama Shien',
		type: 'vtuber',
		org: 'Hololive',
		group: 'HOLOSTARS 3rd Gen (TriNero)',
		photo:
			'https://yt3.ggpht.com/N20GfJbuG8BBl9CexUek023y2DXQAYqgYoRRqsVGAYoS-gZsGuH7W1Il0y-8TnIul19rBPG78Jo=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'kageyamashien',
		video_count: '627',
		subscriber_count: '219000',
		clip_count: 483,
		top_topics: ['talk', 'Twisted_Wonderland', 'membersonly'],
		inactive: false,
		twitch: 'kageyamashien_holostars'
	},
	{
		id: 'UCHsx4Hqa-1ORjQTh9TYDhww',
		name: 'Takanashi Kiara Ch. hololive-EN',
		english_name: 'Takanashi Kiara',
		type: 'vtuber',
		org: 'Hololive',
		group: 'English -Myth-',
		photo:
			'https://yt3.ggpht.com/w7TKJYU7zmamFmf-WxfahCo_K7Bg2__Pk-CCBNnbewMG-77OZLqJO9MLvDAmH9nEkZH8OkWgSQ=s800-c-k-c0x00ffffff-no-nd-rj',
		twitter: 'takanashikiara',
		video_count: '881',
		subscriber_count: '1460000',
		clip_count: 13033,
		top_topics: ['membersonly', 'minecraft', 'talk'],
		inactive: false,
		twitch: null
	},
	{
		id: 'UCIBY1ollUsauvVi4hW4cumw',
		name: 'Chloe ch. 沙花叉クロヱ - holoX -',
		english_name: 'Sakamata Chloe',
		type: 'vtuber',
		org: 'Hololive',
		group: '6th Generation -holoX-',
		photo:
			'https://yt3.ggpht.com/_xNtPLKQcQxMTnOr4tAcGz0GEeESsi0bQX9mJEP3fx_50a8GUfUyOG1eyLIld2cCz6GvKABwpQ=s800-c-k-c0x00ffffff-no-rj',
		twitter: 'sakamatachloe',
		video_count: '386',
		subscriber_count: '1100000',
		clip_count: 8756,
		top_topics: ['singing', 'Superchat_Reading', 'membersonly'],
		inactive: false,
		twitch: null
	}
];
