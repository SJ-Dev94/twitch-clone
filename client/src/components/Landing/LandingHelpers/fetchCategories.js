import { database } from '../../../firebaseconfig.js';

export const fetchCategories = () => {
  const ref = database.ref("Categories");
  const result = [];
  ref.once('value', snapshot => {
    snapshot.forEach(streamSnapshot => {
      const streamListSnapshot = streamSnapshot.val();
      result.push(streamListSnapshot);

    });
  });
  return result;
  /*ref.on('value', snapshot => {
    const snap = snapshot.val();
    console.log(snap);
    return snap;
  });*/

}