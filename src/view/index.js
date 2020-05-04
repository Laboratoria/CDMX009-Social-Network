import Home from './home.js';
import Newpost from './newpost.js';
import Profile from './profile.js';
import Login from './login.js';
import Register from './newuser.js';

const components = {
  home: Home,
  newpost: Newpost,
  profile: Profile,
  login: Login,
  newuser: Register,
};

//  animation
const logo = document.querySelectorAll('#logo path');
for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
export { components };
