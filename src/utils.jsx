import { Cocobase } from "cocobase";

// Initialize the client
const db = new Cocobase({
  apiKey: "t3Dh31rIUhy3NYPoW-3xeTEip2mavzsZkuUztPu3",
});

// update user detail

// db.updateUser({
//   fullName: "John Doe",
// },"email@gmail.com","password");

db.initAuth()
// init auth checks if user has been logged in before
export { db };
