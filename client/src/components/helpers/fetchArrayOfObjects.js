import { database } from '../../../firebaseconfig.js';

//replace x's 
// fetches an object from firebase, loops through the children objects, and then pushes the children objects to an array

const fetchX = () => {
  const ref = database.ref("X");
  const result = [];
  ref.once('value', snapshot => {
    snapshot.forEach(snapshot2 => {
      const xSnapshot = snapshot2.val();
      result.push(xSnapshot);
      this.setState({ x: result });
      console.log(this.state);
    })
  }
  )
};
