const urlParams = new URLSearchParams(window.location.search);
const charParam = urlParams.get('karakter');


const json_data = { /* Karakter információji*/
    "Ahri": {
        "story": "Innately connected to the magic of the spirit realm, Ahri is a fox-like vastaya who can manipulate her prey's emotions and consume their essence—receiving flashes of their memory and insight from each soul she consumes. Once a powerful yet wayward predator, Ahri is now traveling the world in search of remnants of her ancestors while also trying to replace her stolen memories with ones of her own making.",
        "lane": "Lane: Mid Lane",
        "role": "Role: Mage/Assassin",
        "badmatchup1": "Kassadin",
        "badmatchup2": "Fizz",
        "badmatchup3": "Yasuo",
        "goodmatchup1": "Veigar",
        "goodmatchup2": "Katarina",
        "goodmatchup3": "Taliyah",
        "title": "Ahri, the Nine-Tailed Fox",
        "background": "../Main/background/AhriBackground.jpg",
        
        "passiveimage": "../Main/kepessegek/Ahri/passive.png",
        
        "Qimage": "../Main/kepessegek/Ahri/q.png",
        
        "Wimage": "../Main/kepessegek/Ahri/w.png",
    
        "Eimage": "../Main/kepessegek/Ahri/e.png",
        
        "Rimage": "../Main/kepessegek/Ahri/r.png",
        "video0": "../Main/kepessegek/Ahri/passive.webm",
        "video1": "../Main/kepessegek/Ahri/q.webm",
        "video2": "../Main/kepessegek/Ahri/w.webm",
        "video3": "../Main/kepessegek/Ahri/e.webm",
        "video4": "../Main/kepessegek/Ahri/r.webm"



    },
    "Veigar": {
        "story": "A master of dark sorcery with a boundless hunger for power, Veigar has spellbound entire armies and trapped them in his arcane lair. No longer caring to conquer Runeterra, he now serves a higher power—one that delights in the evil running through Veigar's veins.",
        "lane": "Lane: Mid Lane",
        "role": "Role: Mage",
        "badmatchup1": "Zed",
        "badmatchup2": "Fizz",
        "badmatchup3": "Kassadin",
        "goodmatchup1": "Ahri",
        "goodmatchup2": "Katarina",
        "goodmatchup3": "Taliyah",
        "title": "Veigar, the Tiny Master of Evil",
        "background": "../Main/background/VeigarBackground.jpg",
        "passiveimage": "../Main/kepessegek/Veigar/passive.png",
        "Qimage": "../Main/kepessegek/Veigar/q.png",
        "Wimage": "../Main/kepessegek/Veigar/w.png",
        "Eimage": "../Main/kepessegek/Veigar/e.png",
        "Rimage": "../Main/kepessegek/Veigar/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0002/ability_0002_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0002/ability_0002_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0002/ability_0002_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0002/ability_0002_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0002/ability_0002_R1.webm",

    },
    "Aurelion Sol": {
        "story": "Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his star-forging ways, Aurelion Sol will drag the very stars from the sky, if he must, in order to regain his freedom.",
        "lane": "Lane: Mid Lane",
        "role": "Role: Mage",
        "badmatchup1": "Zed",
        "badmatchup2": "Fizz",
        "badmatchup3": "Kassadin",
        "goodmatchup1": "Ahri",
        "goodmatchup2": "Katarina",
        "goodmatchup3": "Taliyah",
        "title": "Aurelion Sol, The Star Forger",
        "background": "../Main/background/AurelionSolBackground.jpg",
        "passiveimage": "../Main/kepessegek/AurelionSol/passive.png",
        "Qimage": "../Main/kepessegek/AurelionSol/q.png",
        "Wimage": "../Main/kepessegek/AurelionSol/w.png",
        "Eimage": "../Main/kepessegek/AurelionSol/e.png",
        "Rimage": "../Main/kepessegek/AurelionSol/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0054/ability_0054_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0054/ability_0054_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0054/ability_0054_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0054/ability_0054_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0054/ability_0054_R1.webm",

        
    },
    "Katarina": {
        "story": "Decisive in judgment and lethal in combat, Katarina is a Noxian assassin of the highest caliber. Eldest daughter to the legendary General Du Couteau, she made her talents known with swift kills against unsuspecting enemies. Her fiery ambition has driven her to pursue heavily-guarded targets, even at the risk of endangering her allies—but no matter the mission, Katarina will not hesitate to execute her duty amid a whirlwind of serrated daggers.",
        "lane": "Lane: Mid Lane",
        "role": "Role: Assassin",
        "badmatchup1": "Zed",
        "badmatchup2": "Fizz",
        "badmatchup3": "Kassadin",
        "goodmatchup1": "Ahri",
        "goodmatchup2": "Veigar",
        "goodmatchup3": "Taliyah",
        "title": "Katarina, the Sinister Blade",
        "background": "../Main/background/KatarinaBackground.jpg",
        "passiveimage": "../Main/kepessegek/Katarina/passive.png",
        "Qimage": "../Main/kepessegek/Katarina/q.png",
        "Wimage": "../Main/kepessegek/Katarina/w.png",
        "Eimage": "../Main/kepessegek/Katarina/e.png",
        "Rimage": "../Main/kepessegek/Katarina/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0059/ability_0059_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0059/ability_0059_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0059/ability_0059_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0059/ability_0059_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0059/ability_0059_R1.webm",
    },
    "Taliyah": {
        "story": "Taliyah is a nomadic mage from Shurima, torn between teenage wonder and adult responsibility. She has crossed nearly all of Valoran on a journey to learn the true nature of her growing powers, though more recently she has returned to protect her tribe. Some have mistaken her compassion for weakness and paid the ultimate price—for beneath Taliyah's youthful demeanor is a will strong enough to move mountains, and a spirit fierce enough to make the earth itself tremble.",
        "lane": "Lane: Mid Lane",
        "role": "Role: Mage",
        "badmatchup1": "Zed",
        "badmatchup2": "Fizz",
        "badmatchup3": "Kassadin",
        "goodmatchup1": "Ahri",
        "goodmatchup2": "Veigar",
        "goodmatchup3": "Katarina",
        "title": "Taliyah, the Stoneweaver",
        "background": "../Main/background/TaliyahBackground.jpg",
        "passiveimage": "../Main/kepessegek/Taliyah/passive.png",
        "Qimage": "../Main/kepessegek/Taliyah/q.png",
        "Wimage": "../Main/kepessegek/Taliyah/w.png",
        "Eimage": "../Main/kepessegek/Taliyah/e.png",
        "Rimage": "../Main/kepessegek/Taliyah/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0162/ability_0162_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0162/ability_0162_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0162/ability_0162_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0162/ability_0162_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0162/ability_0162_R1.webm",

    },
    "Aatrox": {
        "story": "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.",
        "lane": "Lane: Top Lane",
        "role": "Role: Fighter",
        "badmatchup1": "Darius",
        "badmatchup2": "Garen",
        "badmatchup3": "Jax",
        "goodmatchup1": "Teemo",
        "goodmatchup2": "Riven",
        "goodmatchup3": "Yasuo",
        "title": "Aatrox, the Darkin Blade",
        "background": "../Main/background/AatroxBackground.jpg",
        "passiveimage": "../Main/kepessegek/Aatrox/AatroxP.png",
        "Qimage": "../Main/kepessegek/Aatrox/AatroxQ.png",
        "Wimage": "../Main/kepessegek/Aatrox/AatroxW.png",
        "Eimage": "../Main/kepessegek/Aatrox/AatroxE.png",
        "Rimage": "../Main/kepessegek/Aatrox/AatroxR.png",
        "video0": "../Main/kepessegek/Aatrox/passive.webm",
        "video1": "../Main/kepessegek/Aatrox/q.webm",
        "video2": "../Main/kepessegek/Aatrox/w.webm",
        "video3": "../Main/kepessegek/AAtrox/e.webm",
        "video4": "../Main/kepessegek/Aatrox/r.webm",
    },
    "Kennen":{
        "story": "More than just the lightning-quick enforcer of Ionian balance, Kennen is the only yordle member of the Kinkou. Despite his small, furry stature, he is eager to take on any threat with a whirling storm of shuriken and boundless enthusiasm. Alongside his master Shen, Kennen patrols the spirit realm, employing devastating electrical energy to strike down his enemies.",
        "lane": "Lane: Top Lane",
        "role": "Role: Mage",
        "badmatchup1": "Darius",
        "badmatchup2": "Garen",
        "badmatchup3": "Jax",
        "goodmatchup1": "Teemo",
        "goodmatchup2": "Riven",
        "goodmatchup3": "Yasuo",
        "title": "Kennen, the Heart of the Tempest",
        "background": "../Main/background/KennenBackground.jpg",
        "passiveimage": "../Main/kepessegek/Kennen/passive.png",
        "Qimage": "../Main/kepessegek/Kennen/q.png",
        "Wimage": "../Main/kepessegek/Kennen/w.png",
        "Eimage": "../Main/kepessegek/Kennen/e.png",
        "Rimage": "../Main/kepessegek/Kennen/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_R1.webm",

    },
    "Ornn":{
        "story": "Ornn is the Freljordian spirit of forging and craftsmanship. He works in the solitude of a massive smithy, hammered out from the lava caverns beneath the volcano Hearth-Home. There he stokes bubbling cauldrons of molten rock to purify ores and fashion items of unsurpassed quality. When other deities—especially Volibear—walk the earth and meddle in mortal affairs, Ornn arises to put these impetuous beings back in their place, either with his trusty hammer or the fiery power of the mountains themselves.",
        "lane": "Lane: Top Lane",
        "role": "Role: Tank",
        "badmatchup1": "Darius",
        "badmatchup2": "Garen",
        "badmatchup3": "Jax",
        "goodmatchup1": "Teemo",
        "goodmatchup2": "Riven",
        "goodmatchup3": "Yasuo",
        "title": "Ornn, the Fire below the Mountain",
        "background": "../Main/background/OrnnBackground.jpg",
        "passiveimage": "../Main/kepessegek/Ornn/passive.png",
        "Qimage": "../Main/kepessegek/Ornn/q.png",
        "Wimage": "../Main/kepessegek/Ornn/w.png",
        "Eimage": "../Main/kepessegek/Ornn/e.png",
        "Rimage": "../Main/kepessegek/Ornn/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_R1.webm",

    },
    "Shen":{
        "story": "Among the secretive, Ionian warriors known as the Kinkou, Shen serves as their leader, the Eye of Twilight. He longs to remain free from the confusion of emotion, prejudice, and ego, and walks the unseen path of dispassionate judgment between the spirit realm and the physical world. Tasked with enforcing the equilibrium between them, Shen wields blades of steel and arcane energy against any who would threaten it.",
        "lane": "Lane: Top Lane",
        "role": "Role: Tank",
        "badmatchup1": "Darius",
        "badmatchup2": "Garen",
        "badmatchup3": "Jax",
        "goodmatchup1": "Teemo",
        "goodmatchup2": "Riven",
        "goodmatchup3": "Yasuo",
        "title": "Shen, the Eye of Twilight",
        "background": "../Main/background/ShenBackground.jpg",
        "passiveimage": "../Main/kepessegek/Shen/passive.png",
        "Qimage": "../Main/kepessegek/Shen/q.png",
        "Wimage": "../Main/kepessegek/Shen/w.png",
        "Eimage": "../Main/kepessegek/Shen/e.png",
        "Rimage": "../Main/kepessegek/Shen/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0098/ability_0098_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0098/ability_0098_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0098/ability_0098_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0098/ability_0098_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0098/ability_0098_R1.webm",
    },
    "Riven":{
        "story": "Once a swordmaster in the warhosts of Noxus, Riven is an expatriate in a land she previously tried to conquer. She rose through the ranks on the strength of her conviction and brutal efficiency, and was rewarded with a legendary runic blade and a warband of her own. However, on the Ionian front, Riven's faith in her homeland was tested and ultimately broken. Having severed all ties to the empire, she now seeks to find her place in a shattered world, even as rumors abound that Noxus itself has been reforged...",
        "lane": "Lane: Top Lane",
        "role": "Role: Fighter",
        "badmatchup1": "Darius",
        "badmatchup2": "Garen",
        "badmatchup3": "Jax",
        "goodmatchup1": "Teemo",
        "goodmatchup2": "Riven",
        "goodmatchup3": "Yasuo",
        "title": "Riven, the Exile",
        "background": ".../Main/background/RivenBackground.jpg",
        "passiveimage": "../Main/kepessegek/Riven/passive.png",
        "Qimage": "../Main/kepessegek/Riven/q.png",
        "Wimage": "../Main/kepessegek/Riven/w.png",
        "Eimage": "../Main/kepessegek/Riven/e.png",
        "Rimage": "../Main/kepessegek/Riven/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_R1.webm",

    },
    "NunuAndWillump":{
        "story": "Once upon a time, there was a boy who wanted to prove he was a hero by slaying a fearsome monster—only to discover that the beast, a lonely and magical yeti, merely needed a friend. Bound together by ancient power and a shared love of snowballs, Nunu and Willump now ramble wildly across the Freljord, breathing life into imagined adventures. They hope that somewhere out there, they will find Nunu's mother. If they can save her, maybe they will be heroes after all…",
        "lane": "Lane: Jungle",
        "role": "Role: Tank",
        "badmatchup1": "Lee Sin",
        "badmatchup2": "Elise",
        "badmatchup3": "Olaf",
        "goodmatchup1": "Master Yi",
        "goodmatchup2": "Amumu",
        "goodmatchup3": "Nunu & Willump",
        "title": "The boy and his yeti",
        "background": "../Main/background/NunuAndWillumpBackground.jpg",
        "passiveimage": "../Main/kepessegek/NunuAndWillump/passive.png",
        "Qimage": "../Main/kepessegek/NunuAndWillump/q.png",
        "Wimage": "../Main/kepessegek/NunuAndWillump/w.png",
        "Eimage": "../Main/kepessegek/NunuAndWillump/e.png",
        "Rimage": "../Main/kepessegek/NunuAndWillump/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0155/ability_0155_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0155/ability_0155_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0155/ability_0155_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0155/ability_0155_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0155/ability_0155_R1.webm",
    },
    "Elise":{
        "story": "Elise is a deadly predator who dwells in a shuttered, lightless palace, deep within the oldest city of Noxus. Once mortal, she was the mistress of a powerful house, but the bite of a vile demigod transformed her into something beautiful, yet utterly inhuman—a spider-like creature, drawing unsuspecting prey into her web. To maintain her eternal youth, Elise now prefers to feed upon the naive and the faithless, and there are few who can resist her seductions.",
        "lane": "Lane: Jungle",
        "role": "Role: Mage",
        "badmatchup1": "Lee Sin",
        "badmatchup2": "Elise",
        "badmatchup3": "Olaf",
        "goodmatchup1": "Master Yi",
        "goodmatchup2": "Amumu",
        "goodmatchup3": "Nunu & Willump",
        "title": "Elise, the Spider Queen",
        "background": "../Main/background/EliseBackground.jpg",
        "passiveimage": "../Main/kepessegek/Elise/passive.png",
        "Qimage": "../Main/kepessegek/Elise/q.png",
        "Wimage": "../Main/kepessegek/Elise/w.png",
        "Eimage": "../Main/kepessegek/Elise/e.png",
        "Rimage": "../Main/kepessegek/Elise/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0096/ability_0096_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0096/ability_0096_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0096/ability_0096_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0096/ability_0096_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0096/ability_0096_R1.webm",

    },
    "Kindred":{
        "story": "Separate, but never parted, Kindred represents the twin essences of death. Lamb’s bow offers a swift release from the mortal realm for those who accept their fate. Wolf hunts down those who run from their end, delivering violent finality within his crushing jaws. Though interpretations of Kindred’s nature vary across Runeterra, every mortal must choose the true face of their death.",
        "lane": "Lane: Jungle",
        "role": "Role: Marksman",
        "badmatchup1": "Lee Sin",
        "badmatchup2": "Elise",
        "badmatchup3": "Olaf",
        "goodmatchup1": "Master Yi",
        "goodmatchup2": "Amumu",
        "goodmatchup3": "Nunu & Willump",
        "title": "Kindred, the Eternal Hunters",
        "background": "../Main/background/KindredBackground.jpg",
        "passiveimage": "../Main/kepessegek/Kindred/passive.png",
        "Qimage": "../Main/kepessegek/Kindred/q.png",
        "Wimage": "../Main/kepessegek/Kindred/w.png",
        "Eimage": "../Main/kepessegek/Kindred/e.png",
        "Rimage": "../Main/kepessegek/Kindred/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0260/ability_0260_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0260/ability_0260_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0260/ability_0260_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0260/ability_0260_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0260/ability_0260_R1.webm",
    },
    "Hecarim":{
        "story": "Hecarim is a spectral fusion of man and beast, cursed to ride down the souls of the living for all eternity. When the Blessed Isles fell into shadow, this proud knight was undone by the destructive energies of the Ruination, along with all his cavalry and their mounts. Now, whenever the Black Mist reaches out across Runeterra, he leads their devastating charge, reveling in the slaughter and crushing foes beneath his armored hooves.",
        "lane": "Lane: Jungle",
        "role": "Role: Fighter",
        "badmatchup1": "Lee Sin",
        "badmatchup2": "Elise",
        "badmatchup3": "Olaf",
        "goodmatchup1": "Master Yi",
        "goodmatchup2": "Amumu",
        "goodmatchup3": "Nunu & Willump",
        "title": "Hecarim, the Shadow of War",
        "background": "../Main/background/HecarimBackground.jpg",
        "passiveimage": "../Main/kepessegek/Hecarim/passive.png",
        "Qimage": "../Main/kepessegek/Hecarim/q.png",
        "Wimage": "../Main/kepessegek/Hecarim/w.png",
        "Eimage": "../Main/kepessegek/Hecarim/e.png",
        "Rimage": "../Main/kepessegek/Hecarim/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0006/ability_0006_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0006/ability_0006_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0006/ability_0006_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0006/ability_0006_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0006/ability_0006_R1.webm",
    },
    "Master Yi":{
        "story": "Master Yi has tempered his body and sharpened his mind, so that thought and action have become almost as one. Though he chooses to enter into violence only as a last resort, the grace and speed of his blade ensures resolution is always swift. As the last living practitioner of the Ionian art of Wuju, Yi has devoted his life to continuing the legacy of his people—scrutinizing potential new disciples with the Seven Lenses of Insight to identify the most worthy among them.",
        "lane": "Lane: Jungle",
        "role": "Role: Assassin",
        "badmatchup1": "Lee Sin",
        "badmatchup2": "Elise",
        "badmatchup3": "Olaf",
        "goodmatchup1": "Master Yi",
        "goodmatchup2": "Amumu",
        "goodmatchup3": "Nunu & Willump",
        "title": "Master Yi, the Wuju Bladesman",
        "background": "../Main/background/MasterYiBackground.jpg",
        "passiveimage": "../Main/kepessegek/MasterYi/passive.png",
        "Qimage": "../Main/kepessegek/MasterYi/q.png",
        "Wimage": "../Main/kepessegek/MasterYi/w.png",
        "Eimage": "../Main/kepessegek/MasterYi/e.png",
        "Rimage": "../Main/kepessegek/MasterYi/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_R1.webm",

    },
    "Samira":{
        "story": "Samira stares death in the eye with unyielding confidence, seeking thrill wherever she goes. After her Shuriman home was destroyed as a child, Samira found her true calling in Noxus, where she built a reputation as a stylish daredevil taking on dangerous missions of the highest caliber. Wielding black-powder pistols and a custom-engineered blade, Samira thrives in life-or-death circumstances, eliminating any who stand in her way with flash and flair.",
        "lane": "Lane: Bot Lane",
        "role": "Role: Marksman",
        "badmatchup1": "Jhin",
        "badmatchup2": "Draven",
        "badmatchup3": "Caitlyn",
        "goodmatchup1": "Aphelios",
        "goodmatchup2": "Senna",
        "goodmatchup3": "Vayne",
        "title": "Samira, the Desert Rose", 
        "background": "../Main/background/SamiraBackground.jpg",
        "passiveimage": "../Main/kepessegek/Samira/passive.png",
        "Qimage": "../Main/kepessegek/Samira/q.png",
        "Wimage": "../Main/kepessegek/Samira/w.png",
        "Eimage": "../Main/kepessegek/Samira/e.png",
        "Rimage": "../Main/kepessegek/Samira/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0295/ability_0295_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0295/ability_0295_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0295/ability_0295_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0295/ability_0295_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0295/ability_0295_R1.webm",


    },
    "Lucian":{
        "story": "Lucian, a Sentinel of Light, is a grim hunter of undying spirits, pursuing them relentlessly and annihilating them with his twin relic pistols. After the wraith Thresh slew his wife, Lucian embarked on the path of vengeance—but even with her return to life, his rage is undiminished. Merciless and single-minded, Lucian will stop at nothing to protect the living from the long-dead horrors of the Black Mist.",
        "lane": "Lane: Bot Lane",
        "role": "Role: Marksman",
        "badmatchup1": "Jhin",
        "badmatchup2": "Draven",
        "badmatchup3": "Caitlyn",
        "goodmatchup1": "Aphelios",
        "goodmatchup2": "Senna",
        "goodmatchup3": "Vayne",
        "title": "Lucian, the Purifier",
        "background": "../Main/background/LucianBackground.jpg",
        "passiveimage": "../Main/kepessegek/Lucian/passive.png",
        "Qimage": "../Main/kepessegek/Lucian/q.png",
        "Wimage": "../Main/kepessegek/Lucian/w.png",
        "Eimage": "../Main/kepessegek/Lucian/e.png",
        "Rimage": "../Main/kepessegek/Lucian/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_R1.webm",
        
    },
    "Tristana":{
        "story": "Tristana is a boisterous young yordle who rides a massive cannon into battle. Always looking to \"shoot first and ask questions later,\" she remains ever eager to defend her home from any threat. Quick-tempered and impulsive, courage is the only thing greater than her height.",
        "lane": "Lane: Bot Lane",
        "role": "Role: Marksman",
        "badmatchup1": "Jhin",
        "badmatchup2": "Draven",
        "badmatchup3": "Caitlyn",
        "goodmatchup1": "Aphelios",
        "goodmatchup2": "Senna",
        "goodmatchup3": "Vayne",
        "title": "Tristana, the Yordle Gunner",
        "background": "../Main/background/TristanaBackground.jpg",
        "passiveimage": "../Main/kepessegek/Tristana/passive.png",
        "Qimage": "../Main/kepessegek/Tristana/q.png",
        "Wimage": "../Main/kepessegek/Tristana/w.png",
        "Eimage": "../Main/kepessegek/Tristana/e.png",
        "Rimage": "../Main/kepessegek/Tristana/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0180/ability_0180_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0180/ability_0180_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0180/ability_0180_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0180/ability_0180_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0180/ability_0180_R1.webm",
    },
    "Vayne":{
        "story": "Shauna Vayne is a deadly, remorseless monster hunter who has pledged her life to finding and killing the demon who murdered her family. Armed with her wrist-mounted crossbows and a heart full of vengeance, Vayne is only truly happy when she's slaying practitioners or creations of the dark arts. She believes that the only worthwhile heroes are those who rid the world of evil, no matter what means they must use to do so.",
        "lane": "Lane: Bot Lane",
        "role": "Role: Marksman",
        "badmatchup1": "Jhin",
        "badmatchup2": "Draven",
        "badmatchup3": "Caitlyn",
        "goodmatchup1": "Aphelios",
        "goodmatchup2": "Senna",
        "goodmatchup3": "Vayne",
        "title": "Vayne, the Night Hunter",
        "background": "../Main/background/VayneBackground.jpg",
        "passiveimage": "../Main/kepessegek/Vayne/passive.png",
        "Qimage": "../Main/kepessegek/Vayne/q.png",
        "Wimage": "../Main/kepessegek/Vayne/w.png",
        "Eimage": "../Main/kepessegek/Vayne/e.png",
        "Rimage": "../Main/kepessegek/Vayne/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0007/ability_0007_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0007/ability_0007_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0007/ability_0007_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0007/ability_0007_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0007/ability_0007_R1.webm",

    },
    "Kai'Sa":{
        "story": "Claimed by the Void when she was only a child, Kai'Sa managed to survive through sheer tenacity and strength of will. Her experiences have made her a deadly hunter and, to some, the harbinger of a future they would rather not live to see. Having entered into an uneasy symbiosis with a living Void carapace, the time will soon come when she must decide whether to forgive those mortals who would call her a monster, and defeat the coming darkness together… or simply to forget, as the Void consumes the world that left her behind.",
        "lane": "Lane: Bot Lane",
        "role": "Role: Marksman",
        "badmatchup1": "Jhin",
        "badmatchup2": "Draven",
        "badmatchup3": "Caitlyn",
        "goodmatchup1": "Aphelios",
        "goodmatchup2": "Senna",
        "goodmatchup3": "Vayne",
        "title": "Kai'Sa, Daughter of the Void",
        "background": "../Main/background/KaiSaBackground.jpg",
        "passiveimage": "../Main/kepessegek/KaiSa/passive.png",
        "Qimage": "../Main/kepessegek/KaiSa/q.png",
        "Wimage": "../Main/kepessegek/KaiSa/w.png",
        "Eimage": "../Main/kepessegek/KaiSa/e.png",
        "Rimage": "../Main/kepessegek/KaiSa/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0291/ability_0291_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0291/ability_0291_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0291/ability_0291_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0291/ability_0291_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0291/ability_0291_R1.webm",
    },
    "Rell":{
        "story": "Rell is a merciless, living weapon, who fights to protect her fellow Shurimans. She utilizes the power of metal to turn her foes' innate ferocity against them—with the help of her childhood friend, the giant lizard Aza, she hones her abilities to bind and manipulate the elements. Enemies who underestimate her will find themselves missing limbs… or worse.",
        "lane": "Lane: Support",
        "role": "Role: Tank",
        "badmatchup1": "Leona",
        "badmatchup2": "Nautilus",
        "badmatchup3": "Blitzcrank",
        "goodmatchup1": "Janna",
        "goodmatchup2": "Sona",
        "goodmatchup3": "Soraka",
        "title": "Rell, the Iron Maiden",
        "background": "../Main/background/RellBackground.jpg",
        "passiveimage": "../Main/kepessegek/Rell/passive.png",
        "Qimage": "../Main/kepessegek/Rell/q.png",
        "Wimage": "../Main/kepessegek/Rell/w.png",
        "Eimage": "../Main/kepessegek/Rell/e.png",
        "Rimage": "../Main/kepessegek/Rell/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0296/ability_0296_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0296/ability_0296_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0296/ability_0296_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0296/ability_0296_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0296/ability_0296_R1.webm",
    },
    "Thresh":{
        "story": "Sadistic and cunning, Thresh is an ambitious and restless spirit of the Shadow Isles. Once the custodian of countless arcane secrets, he was undone by a power greater than life or death, and now sustains himself by tormenting and breaking others with slow, excruciating inventiveness. His victims suffer far beyond their brief mortal coil as Thresh wreaks agony upon their souls, imprisoning them in his unholy lantern to torture for all eternity.",
        "lane": "Lane: Support",
        "role": "Role: Tank",
        "badmatchup1": "Leona",
        "badmatchup2": "Nautilus",
        "badmatchup3": "Blitzcrank",
        "goodmatchup1": "Janna",
        "goodmatchup2": "Sona",
        "goodmatchup3": "Soraka",
        "title": "Thresh, the Chain Warden",
        "background": "../Main/background/ThreshBackground.jpg",
        "passiveimage": "../Main/kepessegek/Thresh/passive.png",
        "Qimage": "../Main/kepessegek/Thresh/q.png",
        "Wimage": "../Main/kepessegek/Thresh/w.png",
        "Eimage": "../Main/kepessegek/Thresh/e.png",
        "Rimage": "../Main/kepessegek/Thresh/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_R1.webm",

    },
    "Pyke":{
        "story": "A renowned harpooner from the slaughter docks of Bilgewater, Pyke should have met his death in the belly of a gigantic jaull-fish… and yet, he returned. Now, stalking the dank alleys and backways of his former hometown, he uses his new supernatural gifts to bring a swift and gruesome end to those who make their fortune by exploiting others—and a city that prides itself on hunting monsters now finds a monster hunting them.",
        "lane": "Lane: Support",
        "role": "Role: Assassin",
        "badmatchup1": "Leona",
        "badmatchup2": "Nautilus",
        "badmatchup3": "Blitzcrank",
        "goodmatchup1": "Janna",
        "goodmatchup2": "Sona",
        "goodmatchup3": "Soraka",
        "title": "Pyke, the Bloodharbor Ripper",
        "background": "../Main/background/PykeBackground.jpg",
        "passiveimage": "../Main/kepessegek/Pyke/passive.png",
        "Qimage": "../Main/kepessegek/Pyke/q.png",
        "Wimage": "../Main/kepessegek/Pyke/w.png",
        "Eimage": "../Main/kepessegek/Pyke/e.png",
        "Rimage": "../Main/kepessegek/Pyke/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0292/ability_0292_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0292/ability_0292_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0292/ability_0292_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0292/ability_0292_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0292/ability_0292_R1.webm",
    },
    "Rakan":{
        "story": "Charismatic and dangerous, Rakan is an infamous vastayan troublemaker and the greatest battle-dancer in Lhotlan tribal history. To the humans of the Ionian highlands, his name has long been synonymous with wild festivals, uncontrollable parties, and anarchic music. Few would suspect this energetic, traveling showman is also partner to the rebel Xayah, and is dedicated to her cause.",
        "lane": "Lane: Support",
        "role": "Role: Mage",
        "badmatchup1": "Leona",
        "badmatchup2": "Nautilus",
        "badmatchup3": "Blitzcrank",
        "goodmatchup1": "Janna",
        "goodmatchup2": "Sona",
        "goodmatchup3": "Soraka",
        "title": "Rakan, the Charmer",
        "background": "../Main/background/RakanBackground.jpg",
        "passiveimage": "../Main/kepessegek/Rakan/passive.png",
        "Qimage": "../Main/kepessegek/Rakan/q.png",
        "Wimage": "../Main/kepessegek/Rakan/w.png",
        "Eimage": "../Main/kepessegek/Rakan/e.png",
        "Rimage": "../Main/kepessegek/Rakan/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0147/ability_0147_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0147/ability_0147_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0147/ability_0147_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0147/ability_0147_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0147/ability_0147_R1.webm",
    },
    "Nautlius":{
        "story": "A lonely legend as old as the first piers sunk in Bilgewater, the armored goliath known as Nautilus roams the dark waters off the coast of the Blue Flame Isles. Driven by a forgotten betrayal, he strikes without warning, swinging his enormous anchor to save the wretched, and drag the greedy to their doom. It is said he comes for those who forget to pay the “Bilgewater tithe”, pulling them down beneath the waves with him—an iron-clad reminder that none can escape the depths.",
        "lane": "Lane: Support",
        "role": "Role: Tank",
        "badmatchup1": "Leona",
        "badmatchup2": "Nautilus",
        "badmatchup3": "Blitzcrank",
        "goodmatchup1": "Janna",
        "goodmatchup2": "Sona",
        "goodmatchup3": "Soraka",
        "title": "Nautilus, the Titan of the Depths",
        "background": "../Main/background/NautilusBackground.jpg",
        "passiveimage": "../Main/kepessegek/Nautilus/passive.png",
        "Qimage": "../Main/kepessegek/Nautilus/q.png",
        "Wimage": "../Main/kepessegek/Nautilus/w.png",
        "Eimage": "../Main/kepessegek/Nautilus/e.png",
        "Rimage": "../Main/kepessegek/Nautilus/r.png",
        "video0": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_P1.webm",
        "video1": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_Q1.webm",
        "video2": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_W1.webm",
        "video3": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_E1.webm",
        "video4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_R1.webm",
    }

    
}
    
function updateHTML(data) {
    document.getElementById("storyszoveg").innerHTML = data.story;
    document.getElementById("lane").innerHTML = data.lane;
    document.getElementById("role").innerHTML = data.role;
    document.getElementById("badmatchup1").innerHTML = data.badmatchup1;
    document.getElementById("badmatchup2").innerHTML = data.badmatchup2;
    document.getElementById("badmatchup3").innerHTML = data.badmatchup3;
    document.getElementById("goodmatchup1").innerHTML = data.goodmatchup1;
    document.getElementById("goodmatchup2").innerHTML = data.goodmatchup2;
    document.getElementById("goodmatchup3").innerHTML = data.goodmatchup3;
    document.getElementById("title").innerHTML = data.title;

    document.getElementById("video0").src = data.video0;
    document.getElementById("video1").src = data.video1;
    document.getElementById("video2").src = data.video2;
    document.getElementById("video3").src = data.video3;
    document.getElementById("video4").src = data.video4;

    


    const backgroundElement = document.getElementById("background");
    backgroundElement.src = data.background;
    backgroundElement.alt = data.title;
    
    const passiveElement = document.getElementById("passiveimage");
    passiveElement.src = data.passiveimage;

    const QElement = document.getElementById("Qimage");
    QElement.src = data.Qimage;

    const WElement = document.getElementById("Wimage");
    WElement.src = data.Wimage;

    const EElement = document.getElementById("Eimage");
    EElement.src = data.Eimage;

    const RElement = document.getElementById("Rimage");
    RElement.src = data.Rimage;
}

document.addEventListener('DOMContentLoaded', function () {
    const championData = json_data[charParam || "Aatrox"];
    updateHTML(championData);

    for (let i = 0; i < 5; i++) {
        const videoId = "video" + i;
        const imageId = "image" + i;

        const imageElement = document.getElementById(imageId);
        if (imageElement) {
            imageElement.addEventListener("click", function () {
                playVideo(videoId);
            });
        }
    }
});

var video = document.getElementById("video1");
video.addEventListener("click", function () {
    video.play();
}
);


function isVideoSourceSupported(src) {
    const video = document.createElement('video');
    return video.canPlayType && video.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, '');
}

function playVideo(videoId) {
    for (let i = 0; i < 5; i++) {
        const currentVideoId = "video" + i;
        const videoElement = document.getElementById(currentVideoId);

        if (videoElement) {
            if (currentVideoId === videoId) {
                if (isVideoSourceSupported(videoElement.src)) {
                    videoElement.style.display = 'block';
                    videoElement.play();
                } else {
                    console.error('Video source is not supported');
                }
            } else {
                videoElement.style.display = 'none';
                videoElement.pause();
            }
        }
    }
}
