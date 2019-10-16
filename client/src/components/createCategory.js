import { database } from '../firebaseconfig.js';

//Run this once and delete the function call. This is just to create an object for each category in the database. 


export const createCategory = async () => {
  const ref = database.ref("Categories");
  const categories =
  {
    osrs: {
      title: 'OldSchool Runescape',
      tag: 'MMORPG',
      thumbnailURL: 'gs://twitchclone-229520.appspot.com/Category_Images/Old School RuneScape Category.jpg',
    },
    wow: {
      title: 'World of Warcraft',
      tag: 'MMORPG',
      thumbnailURL: 'gs://twitchclone-229520.appspot.com/Category_Images/World of Warcraft.jpg'
    },
    lol: {
      title: 'League of Legends',
      tag: 'Moba',
      thumbnailURL: 'gs://twitchclone-229520.appspot.com/Category_Images/League of Legends.jpg'
    },
    csgo: {
      title: 'Counter-Strike: Global Offensive',
      tag: 'Shooter',
      thumbnailURL: 'gs://twitchclone-229520.appspot.com/Category_Images/Counter-Strike_ Global Offensive.jpg'
    }
  }
  await ref.set(categories);

};

