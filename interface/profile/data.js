/**
 * Course: COMP 426
 *
 * This file defines data of profile pages.
 */
/**
 * Represents a list of user profiles (based on instagram friends)
 */
const profileData = [{
    id: "marcus",
    age: "22",
    dob: "10-07-1997",
    gender: "male",
    like: ["female"],
    zodiac: "libra",
    matches: ["gemini", "sagittarius", "aries", "aquarius", "leo", "libra"],
    name: "Marcus Vela",
    img: "../../images/marcusv.jpg",
    bio: "I enjoy long walks on the beach and an occasional cool glass of fruit punch.",
    interests: "skiing, cooking, Netflix & Chill",
    insta: "https://instagram.com/marcusvofficial/",
}];
const matchData = [
    {   id: "marcus",
        age: "22",
        dob: "10-07-1997",
        gender: "male",
        like: ["female"],
        zodiac: "libra",
        matches: ["gemini", "sagittarius", "aries", "aquarius", "leo", "libra"],
        name: "Marcus Vela",
        img: "../../images/marcusv.jpg",
        bio: "I enjoy long walks on the beach and an occasional cool glass of fruit punch.",
        interests: "skiing, cooking, Netflix & Chill",
        insta: "https://instagram.com/marcusvofficial/",
    },
    {
    id: "brennora",
    age: "20",
    dob: "11-03-1999",
    gender: "female",
    like: ["male"],
    zodiac: "scorpio",
    matches: ["taurus", "scorpio", "cancer", "pisces", "virgo"],
    name: "Brennora Cameron",
    img: "../../images/brennora.jpg",
    bio: "I just wanna smoke, eat chicken wings, and listen to R&B",
    interests: "dancing, coding, zumba, music",
    insta: "https://www.instagram.com/xoxo_brennora/",
},
{
    id: "theda",
    age: "16",
    dob: "04-10-2003",
    gender: "female",
    like: ["female", "male"],
    zodiac: "aries",
    matches: ["taurus", "gemini", "sagittarius", "aries", "aquarius", "leo", "cancer", "libra"],
    name: "Theda Cameron",
    img: "../../images/theda.jpg",
    bio: "Handle me? Who gon handle me?",
    interests: "dancing, cooking, karate",
    insta: "https://www.instagram.com/thedachrisse/",
},
{
    id: "chigo",
    age: "23",
    dob: "08-05-1996",
    gender: "male",
    like: ["female"],
    zodiac: "leo",
    matches: ["gemini", "sagittarius", "aries", "aquarius", "libra"],
    name: "Chigo Montonui",
    img: "../../images/chigo.jpg",
    bio: "Find out for yourself...",
    interests: "dancing, video games, eating, shopping",
    insta: "https://www.instagram.com/chigo.m.o/",
},
{
    id: "sean",
    age: "22",
    dob: "01-26-1997",
    gender: "male",
    like: ["female"],
    zodiac: "aquarius",
    matches: ["gemini", "sagittarius", "aries", "leo", "libra"],
    name: "Sean King",
    img: "../../images/sean.jpg",
    bio: "If you a hot girl, I'm a city boy bih :)",
    interests: "Netflix & Chill, swimming, partying",
    insta: "https://www.instagram.com/sean_king4/",
},
{
    id: "ralph",
    age: "21",
    dob: "12-04-1998",
    gender: "male",
    like: ["female"],
    zodiac: "sagittarius",
    matches: ["gemini", "sagittarius", "aries", "leo", "libra", "aquarius"],
    name: "Ralph Bickley",
    img: "../../images/ralph.jpg",
    bio: "Spider Xan .. ykwtfgo",
    interests: "trapping, rapping, music",
    insta: "https://www.instagram.com/ralphdaplug/",
},
{
    id: "ange",
    age: "20",
    dob: "09-15-1999",
    gender: "female",
    like: ["male"],
    zodiac: "virgo",
    matches: ["taurus", "capricorn", "cancer", "pisces", "scorpio"],
    name: "Ange Barasabwa",
    img: "../../images/ange.jpg",
    bio: "fine lil bittie from Rwanda, whatchu know bout that?",
    interests: "dancing, laughing, spicy food",
    insta: "https://www.instagram.com/angepangee/",
},
{
    id: "zay",
    age: "22",
    dob: "03-18-1997",
    gender: "male",
    like: ["female"],
    zodiac: "pisces",
    matches: ["taurus", "capricorn", "cancer", "pisces", "scorpio", "virgo"],
    name: "Zay Whitley",
    img: "../../images/zay.jpg",
    bio: "A king living his best life",
    interests: "modeling, astrology, history",
    insta: "https://www.instagram.com/pharaoh_zayy_/",
},
{
    id: "jaylen",
    age: "21",
    dob: "12-22-1997",
    gender: "male",
    like: ["female"],
    zodiac: "capricorn",
    matches: ["taurus", "cancer", "pisces", "virgo"],
    name: "Jaylen Evans",
    img: "../../images/jaylen.png",
    bio: "I'm just ready to graduate",
    interests: "photography, singing, playing piano",
    insta: "https://www.instagram.com/jaylen.evans1/",
},
{
    id: "sakari",
    age: "21",
    dob: "04-09-1998",
    gender: "female",
    like: ["male"],
    zodiac: "aries",
    matches: ["taurus", "gemini", "sagittarius", "aries", "aquarius", "leo", "cancer", "libra"],
    name: "Sakari Singleton",
    img: "../../images/sakari.png",
    bio: "Good spirits only",
    interests: "modeling, traveling, writing",
    insta: "https://www.instagram.com/sakarimilan/",
},
{
    id: "mialique",
    age: "21",
    dob: "09-07-1998",
    gender: "female",
    like: ["male"],
    zodiac: "virgo",
    matches: ["taurus", "capricorn", "cancer", "pisces", "scorpio"],
    name: "Mialique Daniel",
    img: "../../images/mialique.png",
    bio: "Working for my throne",
    interests: "suduko, running, having fun",
    insta: "https://www.instagram.com/mialique.d/",
},
{
    id: "trey",
    age: "35",
    dob: "11-28-1984",
    gender: "male",
    like: ["female"],
    zodiac: "sagittarius",
    matches: ["gemini", "sagittarius", "aries", "leo", "libra", "aquarius"],
    name: "Trey Songz",
    img: "../../images/trey.png",
    bio: "TRIGGA",
    interests: "singing, partying, cooking",
    insta: "https://www.instagram.com/treysongz/",
},
{
    id: "zoe",
    age: "31",
    dob: "12-01-1988",
    gender: "female",
    like: ["male"],
    zodiac: "sagittarius",
    matches: ["gemini", "sagittarius", "aries", "leo", "libra", "aquarius"],
    name: "Zoe Kravitz",
    img: "../../images/zoe.png",
    bio: "Im here for a good time.",
    interests: "cooking, painting, drinking wine",
    insta: "https://www.instagram.com/zoeisabellakravitz/",
},

{
    id: "gaby",
    age: "20",
    dob: "07-25-1999",
    gender: "female",
    like: ["male"],
    zodiac: "leo",
    matches: ["gemini", "sagittarius", "aries", "aquarius", "libra"],
    name: "Gabrella Behailu",
    img: "../../images/gaby.JPG",
    bio: "HML if you have a cute dog",
    interests: "YouTube, Hanging with Friends, Photography",
    insta: "https://www.instagram.com/gabybehailu/",
},

{
    id: "joe",
    age: "30",
    dob: "08-19-1989",
    gender: "male",
    like: ["female"],
    zodiac: "leo",
    matches: ["gemini", "sagittarius", "aries", "aquarius", "libra"],
    name: "Joe Jonas",
    img: "../../images/joe.jpg",
    bio: "Always down for an adventure",
    interests: "Cooking, Hanging with Friends, Singing",
    insta: "https://www.instagram.com/joejonas/",
},

{
    id: "luis",
    age: "20",
    dob: "05-08-1999",
    gender: "male",
    like: ["female"],
    zodiac: "taurus",
    matches: ["taurus", "capricorn", "scorpio", "cancer", "virgo", "pisces"],
    name: "Luis Amaya-Villa",
    img: "../../images/luis.JPG",
    bio: "Put me onto to some new music",
    interests: "Soccer, Concerts, Movie Dates",
    insta: "https://www.instagram.com/lcav_17/",
},

{
    id: "sabrina",
    age: "20",
    dob: "05-11-1999",
    gender: "female",
    like: ["female", "male"],
    zodiac: "taurus",
    matches: ["taurus", "capricorn", "scorpio", "cancer", "virgo", "pisces"],
    name: "Sabrina Carpenter",
    img: "../../images/sabrina.JPG",
    bio: "Needs me a Suga Daddy",
    interests: "Travelling, Hiking, Beach Trips",
    insta: "https://www.instagram.com/sabrinacarpenter/",
},

{
    id: "austin",
    age: "27",
    dob: "05-20-1992",
    gender: "male",
    like: ["female"],
    zodiac: "taurus",
    matches: ["taurus", "capricorn", "scorpio", "cancer", "virgo", "pisces"],
    name: "Austin McBroom",
    img: "../../images/austin.jpeg",
    bio: "looking for a good time",
    interests: "Instagram, Basketball, Travel",
    insta: "https://www.instagram.com/sabrinacarpenter/",
},

{
    id: "jussie",
    age: "37",
    dob: "06-21-1982",
    gender: "male",
    like: ["female", "male"],
    zodiac: "gemini",
    matches: ["gemini", "sagittarius", "aries", "aquarius", "leo", "libra"],
    name: "Jusssie Smollett",
    img: "../../images/jussie.jpg",
    bio: "Here to meet friends",
    interests: "Singing, Drawing, Travelling",
    insta: "https://www.instagram.com/jussiesmollett/",
},

{
    id: "nia",
    age: "18",
    dob: "06-20-2001",
    gender: "female",
    like: ["male"],
    zodiac: "gemini",
    matches: ["gemini", "sagittarius", "aries", "aquarius", "leo", "libra"],
    name: "Nia Sioux",
    img: "../../images/nia.jpg",
    bio: "One day at a time",
    interests: "Dancing, Singing, Good Food",
    insta: "https://www.instagram.com/niasioux/",
},


{
    id: "tylar",
    age: "19",
    dob: "02-01-2000",
    gender: "female",
    like: ["male"],
    zodiac: "aquarius",
    matches: ["gemini", "sagittarius", "leo", "aquarius", "leo", "libra"],
    name: "Tylar Watson",
    img: "../../images/tylar.JPG",
    bio: "Here for a good time and long time",
    interests: "Read books, Concerts, Fashion",
    insta: "https://www.instagram.com/welcometoty/",
},

{
    id: "harry",
    age: "25",
    dob: "02-01-1994",
    gender: "male",
    like: ["female"],
    zodiac: "aquarius",
    matches: ["gemini", "sagittarius", "leo", "aquarius", "leo", "libra"],
    name: "Harry Styles",
    img: "../../images/harry.jpeg",
    bio: "Looking for a girl to bring home to mum",
    interests: "Scones & Tea, Concerts, Poetry",
    insta: "https://www.instagram.com/harrystyles/",
},

{
    id: "cristiano",
    age: "34",
    dob: "02-05-1994",
    gender: "male",
    like: ["female"],
    zodiac: "aquarius",
    matches: ["gemini", "sagittarius", "leo", "aquarius", "leo", "libra"],
    name: "Cristiano Ronaldo",
    img: "../../images/cristiano.jpeg",
    bio: "Let's go on an adevnture",
    interests: "Soccer, Family , God",
    insta: "https://www.instagram.com/cristiano/",
},


{
    id: "jaden",
    age: "21",
    dob: "07-08-1998",
    gender: "male",
    like: ["female"],
    zodiac: "cancer",
    matches: ["taurus", "capricorn", "scorpio", "aries","virgo", "pisces"],
    name: "Jaden Smith",
    img: "../../images/jaden.jpg",
    bio: "Authentically Me",
    interests: "Acting, Rap, Family",
    insta: "https://www.instagram.com/c.syresmith/",
},

{
    id: "selena",
    age: "27",
    dob: "07-22-1992",
    gender: "female",
    like: ["male"],
    zodiac: "cancer",
    matches: ["taurus", "capricorn", "scorpio", "aries","virgo", "pisces"],
    name: "Selena Gomez",
    img: "../../images/selena.jpg",
    bio: "She creates everything",
    interests: "hanging with friends, music, travelling",
    insta: "https://www.instagram.com/selenagomez/",
},

{
    id: "chuka",
    age: "21",
    dob: "07-28-1998",
    gender: "male",
    like: "[female]",
    zodiac: "leo",
    matches: ["gemini", "sagittarius", "aries", "aquarius", "libra"],
    name: "Chuka Akpom",
    img: "../../images/chuka.png",
    bio: "UNC | 1906 | 📍Pamplona 🇪🇸",
    interests: "netflix, talking, exploring, podcasts",
    insta: "https://www.instagram.com/chukaakpom/",
},

{
    id: "abbott",
    age: "21",
    dob: "06-24-1998",
    gender: "male",
    like: "[female]",
    zodiac: "cancer",
    matches: ["taurus", "capricorn", "scorpio", "aries","virgo", "pisces"],
    name: "Abbott Ndukwe",
    img: "../../images/abbott.png",
    bio: "🇳🇬 | ‘06",
    interests: "traveling, skiing, mountain climbing",
    insta: " https://www.instagram.com/_.abbott/",
},

{
    id: "xzavian",
    age: "21",
    dob: "04-23-1998",
    gender: "male",
    like: "[female]",
    zodiac: "taurus",
    matches: ["taurus", "capricorn", "scorpio", "cancer", "virgo", "pisces"],
    name: "Xzavian Carter",
    img: "../../images/xzavian.png",
    bio: "Love yourself or no one will!",
    interests: "music, reading, art, shoes, love...",
    insta: "https://www.instagram.com/xzaviancarter/",
},

{
    id: "jalen",
    age: "21",
    dob: "06-10-1998",
    gender: "male",
    like: "[female]",
    zodiac: "gemini",
    matches: ["gemini", "sagittarius", "aries", "aquarius", "leo", "libra"],
    name: "Jalen Heyward",
    img: "../../images/jalen.png",
    bio: "UNC'20 🐏| ΑΦΑ 🤙🏾❄️| CSS IV🔬|Producer/Engineer🎹",
    interests: "traveling, skiing, mountain climbing",
    insta: "https://www.instagram.com/jkeys_88/",
},

{
    id: "joshua",
    age: "20",
    dob: "08-24-1999",
    gender: "male",
    like: "[female]",
    zodiac: "virgo",
    matches: ["taurus", "capricorn", "cancer", "pisces", "scorpio"],
    name: "Joshua Payne",
    img: "../../images/joshua.png",
    bio: "UNC | ΑΦΑ ♠️",
    interests: "traveling, skiing, mountain climbing",
    insta: "https://www.instagram.com/joshuapayne/",
},

{
    id: "sam",
    age: "20",
    dob: "07-02-1999",
    gender: "male",
    like: "[female, male]",
    zodiac: "cancer",
    matches: ["taurus", "capricorn", "scorpio", "aries","virgo", "pisces"],
    name: "Sam Ndukwe",
    img: "../../images/sam.png",
    bio: "🇳🇬Working with a purpose 🙏🏽 #MMM",
    interests: "traveling, skiing, mountain climbing",
    insta: "https://www.instagram.com/sam.ndukwe/",
},

{
    id: "xavier",
    age: "20",
    dob: "05-22-1999",
    gender: "male",
    like: '[female, male]',
    zodiac: "gemini",
    matches: ["gemini", "sagittarius", "aries", "aquarius", "leo", "libra"],
    name: "null",
    img: "../../images/xavier.png",
    bio: "Find your balance. | UNC '21 | ΑΦΑ ❄️",
    interests: "traveling, skiing, mountain climbing",
    insta: "https://www.instagram.com/xnonez/",
},




















/*
{
    id: null,
    age: "20",
    dob: 00-00-1990,
    gender: male,
    like: [female, male],
    zodiac: gemini,
    matches: [gemini, sagittarius, aries, aquarius, leo, libra],
    name: "null",
    img: "../../images/galaxy.jpeg",
    bio: "null",
    interests: "null",
    insta: "https://www.instagram.com/null/",
},
{
    id: null,
    age: "20",
    dob: 00-00-1990,
    gender: male,
    like: [female, male],
    zodiac: cancer,
    matches: [taurus, capricorn, cancer, pisces, scorpio, virgo, aries],
    name: "null",
    img: "../../images/galaxy.jpeg",
    bio: "null",
    interests: "null",
    insta: "https://www.instagram.com/null/",
},
{
    id: null,
    age: "20",
    dob: 00-00-1990,
    gender: male,
    like: [female, male],
    zodiac: capricorn,
    matches: [taurus, cancer, pisces, virgo],
    name: "null",
    img: "../../images/galaxy.jpeg",
    bio: "null",
    interests: "null",
    insta: "https://www.instagram.com/null/",
},
{
    id: null,
    age: "20",
    dob: "00-00-1990",
    gender: "male",
    like: ["female", "male"],
    zodiac: "taurus",
    matches: ["taurus", "capricorn", "scorpio", "aries", "cancer", "pisces", "virgo"],
    name: "null",
    img: "../../images/galaxy.jpeg",
    bio: "null",
    interests: "null",
    insta: "https://www.instagram.com/null/",
},*/
];
