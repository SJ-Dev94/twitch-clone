//category object

sendCategoryObject = () => {
  const ref = database.ref("Categories");
  ref.set({
    wow: {
      id: 1982,
      sizes: "(max-width: 540px) and (orientation: portrait) 47vw,24vw",
      sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw",
      src: "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-136x181.jpg",
      srcLarge: "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-188x250.jpg",
      srcSet: "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-650x867.jpg 650w",
      srcSetLarge: "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-272x363.jpg 272w",
      tag: "MMORPG",
      thumbnailURL: "https://firebasestorage.googleapis.com/v0/b/twitchclone-229520.appspot.com/o/Category_Images%2FWorld%20of%20Warcraft.jpg?alt=media&token=4f622883-23e1-48e3-93c4-676726cc0284",
      title: "World of Warcraft"
    },
    dota2: {
      id: 1771,
      sizes: "(max-width: 540px) and (orientation: portrait) 47vw,24vw",
      sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw",
      src: "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-136x181.jpg",
      srcLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-285x380.jpg",
      srcset: "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-650x867.jpg 650w",
      srcsetLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-272x363.jpg 272w",
      tag: 'Moba',
      title: 'Dota 2'
    },
    StreetFighterV: {
      id: 1759,
      sizes: "(max-width: 540px) and (orientation: portrait) 47vw,24vw",
      sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw",
      src: "https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-136x181.jpg",
      srcLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-285x380.jpg",
      srcSet: "https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-650x867.jpg 650w",
      srcSetLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-272x363.jpg 272w",
      tag: 'Fighting',
      title: 'Street Fighter V'
    },
    cod4: {
      id: 1556,
      sizes: "(max-width: 540px) and (orientation: portrait) 47vw,24vw",
      sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw",
      src: "https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-136x181.jpg",
      srcLarge: "https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-285x380.jpg",
      srcSet: "https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-650x867.jpg 650w",
      srcSetLarge: "https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-272x363.jpg 272w",
      tag: 'FPS',
      title: 'Call of Duty: Modern Warfare'
    },
    ScienceTechnology: {
      id: 1437,
      sizes: "(max-width: 540px) and (orientation: portrait) 47vw,24vw",
      sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw",
      src: "https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-136x181.jpg",
      srcLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-285x380.jpg",
      srcSet: "https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-650x867.jpg 650w",
      srcSetLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-272x363.jpg 272w",
      tag: 'Science',
      title: 'Science & Technology'
    },
    csgo: {
      id: 1554,
      sizes: "(max-width: 540px) and (orientation: portrait) 47vw,24vw",
      sizesLarge: "(min-width: 700px) and (orientation: landscape) 1vw, 1vw",
      src: "https://static-cdn.jtvnw.net/ttv-boxart/./Counter-Strike:%20Global%20Offensive-136x181.jpg",
      srcLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-285x380.jpg",
      srcSet: "https://static-cdn.jtvnw.net/ttv-boxart/./Counter-Strike:%20Global%20Offensive-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/./Counter-Strike:%20Global%20Offensive-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/./Counter-Strike:%20Global%20Offensive-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/./Counter-Strike:%20Global%20Offensive-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/./Counter-Strike:%20Global%20Offensive-650x867.jpg 650w",
      srcSetLarge: "https://static-cdn.jtvnw.net/ttv-boxart/./Counter-Strike:%20Global%20Offensive-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/./Counter-Strike:%20Global%20Offensive-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/./Counter-Strike:%20Global%20Offensive-272x363.jpg 272w",
      tag: "Shooter",
      thumbnailURL: "https://firebasestorage.googleapis.com/v0/b/twitchclone-229520.appspot.com/o/Category_Images%2FCounter-Strike_%20Global%20Offensive.jpg?alt=media&token=fad46c7b-77ae-41df-9c7a-6649c80d3388",
      title: "Counter-Strike: Global Offensive"
    },
    lol: {
      id: 2378,
      sizes: "(max-width: 540px) and (orientation: portrait) 47vw,24vw",
      sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw",
      src: "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-136x181.jpg",
      srcLarge: "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg",
      srcSet: "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-650x867.jpg 650w",
      srcSetLarge: "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-272x363.jpg 272w",
      tag: "Moba",
      thumbnailURL: "https://firebasestorage.googleapis.com/v0/b/twitchclone-229520.appspot.com/o/Category_Images%2FLeague%20of%20Legends.jpg?alt=media&token=19a836e9-e17c-42cb-9bba-97fe33589ef5",
      title: "League of Legends",
    },
    osrs: {
      id: 3590,
      sizes: "(max-width: 540px) and (orientation: portrait) 47vw,24vw",
      sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw",
      src: "https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-136x181.jpg",
      srcLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-285x380.jpg",
      srcSet: "https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-650x867.jpg 650w",
      srcSetLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-272x363.jpg 272w",
      tag: "MMORPG",
      thumbnailURL: "https://firebasestorage.googleapis.com/,v0/b/twitchclone-229520.appspot.com/o/Category_Images%2FOld%20School%20RuneScape%20Category.jpg?alt=media&token=9e90e3c1-3e1a-4e24-9add-a4b45e0efdc1",
      title: "OldSchool Runescape",
    }
  })
};



osrs: {
  id: 3590,
    sizes: "(max-width: 540px) and (orientation: portrait) 47vw,24vw",
      sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw",
        src: "https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-136x181.jpg",
          srcLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-285x380.jpg",
            srcSet: "https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-650x867.jpg 650w",
              srcSetLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-272x363.jpg 272w",
                tag: "MMORPG",
                  thumbnailURL: "https://firebasestorage.googleapis.com/,v0/b/twitchclone-229520.appspot.com/o/Category_Images%2FOld%20School%20RuneScape%20Category.jpg?alt=media&token=9e90e3c1-3e1a-4e24-9add-a4b45e0efdc1",
                    title: "OldSchool Runescape",
}

const categoryObject = {
  wow: {
    id: 1982,
    sizes: "(max-width: 540px) and (orientation: portrait) 47vw,24vw",
    sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-136x181.jpg",
    srcLarge: "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-188x250.jpg",
    srcSet: "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-650x867.jpg 650w",
    srcSetLarge: "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-272x363.jpg 272w",
    tag: "MMORPG",
    thumbnailURL: "https://firebasestorage.googleapis.com/v0/b/twitchclone-229520.appspot.com/o/Category_Images%2FWorld%20of%20Warcraft.jpg?alt=media&token=4f622883-23e1-48e3-93c4-676726cc0284",
    title: "World of Warcraft"
  },
  dota2: {
    id: 1771,
    sizes: "(max-width: 540px) and (orientation: portrait) 47vw,24vw",
    sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-136x181.jpg",
    srcLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-285x380.jpg",
    srcset: "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-650x867.jpg 650w",
    srcsetLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-272x363.jpg 272w",
    tag: 'Moba',
    title: 'Dota 2'
  },
  StreetFighterV: {
    id: 1759,
    sizes: "(max-width: 540px) and (orientation: portrait) 47vw,24vw",
    sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-136x181.jpg",
    srcLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-285x380.jpg",
    srcSet: "https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-650x867.jpg 650w",
    srcSetLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-272x363.jpg 272w",
    tag: 'Fighting',
    title: 'Street Fighter V'
  },
  cod4: {
    id: 1556,
    sizes: "(max-width: 540px) and (orientation: portrait) 47vw,24vw",
    sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-136x181.jpg",
    srcLarge: "https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-285x380.jpg",
    srcSet: "https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-650x867.jpg 650w",
    srcSetLarge: "https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-272x363.jpg 272w",
    tag: 'FPS',
    title: 'Call of Duty: Modern Warfare'
  },
  ScienceTechnology: {
    id: 1437,
    sizes: "(max-width: 540px) and (orientation: portrait) 47vw,24vw",
    sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-136x181.jpg",
    srcLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-285x380.jpg",
    srcSet: "https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-650x867.jpg 650w",
    srcSetLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-272x363.jpg 272w",
    tag: 'Science',
    title: 'Science & Technology'
  }
}


/*dont lose this data for wow
id: 1982
sizes: "(max-width: 540px) and (orientation: portrait) 47vw,24vw"
sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw"
src: "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-136x181.jpg"
srcLarge: "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-188x250.jpg"
srcSet: "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-650x867.jpg 650w"
srcSetLarge: "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-272x363.jpg 272w"
tag: "MMORPG"
thumbnailURL: "https://firebasestorage.googleapis.com/v0/b/twitchclone-229520.appspot.com/o/Category_Images%2FWorld%20of%20Warcraft.jpg?alt=media&token=4f622883-23e1-48e3-93c4-676726cc0284"
title: "World of Warcraft" */

const wow = {
  id: 1982,
  sizes: "(max-width: 540px) and (orientation: portrait) 47vw,24vw",
  sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw",
  src: "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-136x181.jpg",
  srcLarge: "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-188x250.jpg",
  srcSet: "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-650x867.jpg 650w",
  srcSetLarge: "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-272x363.jpg 272w",
  tag: "MMORPG",
  thumbnailURL: "https://firebasestorage.googleapis.com/v0/b/twitchclone-229520.appspot.com/o/Category_Images%2FWorld%20of%20Warcraft.jpg?alt=media&token=4f622883-23e1-48e3-93c4-676726cc0284",
  title: "World of Warcraft"
}

//Dota 2 mobile info
/* 

<img class="tw-image" alt="Dota 2" sizes="(max-width: 540px) and (orientation: portrait) 47vw,24vw" srcset="https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-650x867.jpg 650w" src="https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-136x181.jpg">


-- sizes --
sizes="(max-width: 540px) and (orientation: portrait) 47vw,24vw"
-- src --
src="https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-136x181.jpg">
-- srcSet --
srcset="https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-650x867.jpg 650w"
*/

//Dota 2 large info
/*

<img class="tw-image" alt="Dota 2 cover image" src="https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-285x380.jpg">

-- sizesLarge --
sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw"
-- srcLarge --
srcLarge="https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-285x380.jpg"
-- srcSetLarge --
srcset="https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-272x363.jpg 272w"
*/

const dota2 = {
  id: 1771,
  sizes: "(max-width: 540px) and (orientation: portrait) 47vw,24vw",
  sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw",
  src: "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-136x181.jpg",
  srcLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-285x380.jpg",
  srcset: "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-650x867.jpg 650w",
  srcsetLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-272x363.jpg 272w",
  tag: 'Moba',
  title: 'Dota 2'
}
//SFV mobile info
/*

<img class="tw-image" alt="Street Fighter V" sizes="(max-width: 540px) and (orientation: portrait) 47vw,24vw" srcset="https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-650x867.jpg 650w" src="https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-136x181.jpg">

-- sizes --
  sizes="(max-width: 540px) and (orientation: portrait) 47vw,24vw"
-- src --
  src="https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-136x181.jpg"
-- srcSet --
  srcset="https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-650x867.jpg 650w"
*/

//SFV large info
/*

<img class="tw-image" alt="Street Fighter V cover image" src="https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-285x380.jpg">

-- sizesLarge --
  sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw"
-- srcLarge --
  srcLarge="https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-285x380.jpg"
-- srcSetLarge --
  srcset="https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-272x363.jpg 272w"
*/
const StreetFighterV = {
  id: 1759,
  sizes: "(max-width: 540px) and (orientation: portrait) 47vw,24vw",
  sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw",
  src: "https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-136x181.jpg",
  srcLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-285x380.jpg",
  srcSet: "https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-650x867.jpg 650w",
  srcSetLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-272x363.jpg 272w",
  tag: 'Fighting',
  title: 'Street Fighter V'
}

//Cod4 mobile info
/*
-- sizes --
  sizes="(max-width: 540px) and (orientation: portrait) 47vw,24vw"
-- src --
  src="https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-136x181.jpg"
-- srcSet --
  srcset="https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-650x867.jpg 650w" src="https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-136x181.jpg"
*/

//Cod4 large info
/*
https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-285x380.jpg
-- sizesLarge --

-- srcLarge --
src: "https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-285x380.jpg"
-- srcSetLarge --

*/

const cod4 = {
  id: 1556,
  sizes: "(max-width: 540px) and (orientation: portrait) 47vw,24vw",
  sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw",
  src: "https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-136x181.jpg",
  srcLarge: "https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-285x380.jpg",
  srcSet: "https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-650x867.jpg 650w",
  srcSetLarge: "https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-272x363.jpg 272w",
  tag: 'FPS',
  title: 'Call of Duty: Modern Warfare'
}

//ST mobile info
/*

<img class="tw-image" alt="Science &amp; Technology" sizes="(max-width: 540px) and (orientation: portrait) 47vw,24vw" srcset="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-650x867.jpg 650w" src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-136x181.jpg">

-- sizes --
  sizes="(max-width: 540px) and (orientation: portrait) 47vw,24vw"
-- src --
  src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-136x181.jpg"
-- srcSet --
  srcset="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-650x867.jpg 650w"
*/

//ST large info
/*

<img class="tw-image" alt="Science &amp; Technology cover image" src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-285x380.jpg">
-- sizesLarge --
  sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw"
-- srcLarge --
  src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-285x380.jpg"
-- srcSetLarge --
  srcset="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-272x363.jpg 272w"
*/

const ScienceTechnology = {
  id: 1437,
  sizes: "(max-width: 540px) and (orientation: portrait) 47vw,24vw",
  sizesLarge: "(min-width: 700px) and (orientation: landscape) 5vw, 5vw",
  src: "https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-136x181.jpg",
  srcLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-285x380.jpg",
  srcSet: "https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-650x867.jpg 650w",
  srcSetLarge: "https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Science%20&amp;%20Technology-272x363.jpg 272w",
  tag: 'FPS',
  title: 'Call of Duty: Modern Warfare'
}


sizesLarge = "(max-width: 540px) and (orientation: portrait) 47vw,24vw

  < img class="tw-image" alt = "Call of Duty: Modern Warfare" sizes = "(max-width: 540px) and (orientation: portrait) 47vw,24vw" srcset = "https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-272x363.jpg 272w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-429x572.jpg 429w,https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-650x867.jpg 650w" src = "https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-136x181.jpg" >

    "https://static-cdn.jtvnw.net/ttv-boxart/./Counter-Strike:%20Global%20Offensive-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/./Counter-Strike:%20Global%20Offensive-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/./Counter-Strike:%20Global%20Offensive-272x363.jpg 272w"

"https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-272x363.jpg 272w"

"https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape-272x363.jpg 272w"

"https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-136x181.jpg 136w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-52x69.jpg 52w,https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-272x363.jpg 272w"