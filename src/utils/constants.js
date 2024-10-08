import Tg from "../assets/sections/buy-cresh/Tg.svg";
import X from "../assets/sections/buy-cresh/X.svg";
import Owl from "../assets/sections/buy-cresh/Owl.svg";

export const NAV_ITEMS = [
    {
        id: 1,
        name: "About",
        href: "about",
    },
    /* TODO check route */
    {
        id: 2,
        name: "Tokenomics",
        href: "tokenomics",
    },
    {
        id: 3,
        name: "Roadmap",
        href: "roadmap",
    },
    {
        id: 4,
        name: "How to buy $CRESH",
        href: "how-to-buy-$cresh",
    }
];

export const LINK_ITEMS = [
    {
        id: 1,
        name: "Tg",
        href: "https://t.me/creshtrump",
        src: Tg,
    },
    {
        id: 2,
        name: "X",
        href: "https://x.com/CreshERC",
        src: X,
    },
    /* TODO добавить актуальную ссылку */
    {
        id: 3,
        name: "Owl",
        href: "",
        src: Owl,
    },
];

export const PHASES = [
    {
        id: 1,
        subtitle: 'PHASE ONE',
        title: 'Wumpa Fruit Harvest',
        content: [
            'Token Launch:\n' +
            'Drop the CRESH token like a TNT crate! Fair Launch, no funny business (except the memes',
            'Socials Live',
            'Marketing:\n' +
            'More hype than Aku Aku with an extra mask! Expect wild stunts across social media, from X to Twitter!',
            'Defeat Joe Biden (Papu Papu Boss)'
        ],
        style: {
            transform: 'rotate(-2.77deg)'
        }
    },
    {
        id: 2,
        subtitle: 'PHASE TWO',
        title: 'Wumpa Rush',
        content: [
            'High APY staking: The longer you stake, the bigger your yield—think of it as stockpiling masks before a' +
            ' boss fight.',
            'Partnerships with DEX Exchanges.',
            ' Mini-Game Development:\n' +
            'Time to launch the first CRESH mini-game, accessible right in Telegram!',
            '- 3,000 Holders',
            '- 5,000 Community Members'
        ],
        style: null
    },
    {
        id: 3,
        subtitle: 'PHASE THREE',
        title: 'Kamala Island Chaos',
        content: [
            '- Mini-Series Launch:Get ready for the CRESH mini-series! Tune in, laugh, and maybe even learn ' +
            'something in between meme-worthy episodes.',
            'CRESH Pump Fund:\n' +
            'The CRESH Fund, putting the community in charge of major decisions—whether it’s tokenomics or just ' +
            'pure meme madness.\n' +
            'Oh, and we’ve got a special fund for strategic pumps, because why not make things even wilder?',
            '- 15,000 Holders',
            '- 20,000 Community Members'
        ],
        style: null
    }
]


export const STEPS = [
    {
        id: 1,
        subtitle: 'STEP 1:',
        title: 'Set Up a Wallet',
        text: 'Just like Crash grabs a mask before running headfirst into danger, ' +
            'you\'ll need a crypto wallet to start your adventure.'
    },
    {
        id: 2,
        subtitle: 'STEP 2:',
        title: 'Load Up on ETH',
        text: "Grab some ETH! It’s the magic fuel you'll need to swap for CRESH—think of it as your spin-boost."
    },
    {
        id: 3,
        subtitle: 'STEP 3:',
        title: 'Go to UniSwap',
        text: "Time to enter UniSwap, a place more exciting than a bonus level! Get ready and swap ETH for $CRESH."
    },
    {
        id: 4,
        subtitle: 'STEP 4:',
        title: 'Connect Your Wallet',
        text: 'Carefully connect your wallet—like Crash choosing which level to conquer next. ' +
            'Avoid any TNT crates along the way!'
    },
    {
        id: 5,
        subtitle: 'STEP 5:',
        title: 'Swap ETH for CRESH',
        text: "Spin and swap ETH for $CRESH, and just like that, you’re in! Welcome to the world of memecoin chaos. " +
            "Hold on tight—it's going to be a wild ride!"
    }
]

