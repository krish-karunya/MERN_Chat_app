export const emojiList = [
    "👾",
    "⭐",
    "🌟",
    "🎉",
    "🎊",
    "🎈",
    "🎁",
    "🎂",
    "🎄",
    "🎃",
    "🎗",
    "🎟",
    "🎫",
    "🎖",
    "🏆",
    "🏅",
    "🥇",
    "🥈",
    "🥉",
    "⚽",
    "🏀",
    "🏈",
    "⚾",
    "🎾",
    "🏐",
    "🏉",
    "🎱",
    "🏓",
    "🏸",
    "🥅",
    "🏒",
    "🏑",
    "🏏",
    "⛳",
    "🏹",
    "🎣",
    "🥊",
    "🥋",
    "🎽",
    "⛸",
    "🥌",
    "🛷",
    "🎿",
    "⛷",
    "🏂",
    "🏋️",
    "🤼",
    "🤸",
    "🤺",
    "⛹️",
    "🤾",
    "🏌️",
    "🏇",
    "🧘",
];


const getRandomEmoji = () => {

    return emojiList[Math.floor(Math.random() * emojiList.length)]

}

export default getRandomEmoji