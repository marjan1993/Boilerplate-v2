import Enzyme from "enzyme";
import 'babel-polyfill';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// require("dotenv").config({ path: ".env.test" });
import DotEnv from "dotenv";
DotEnv.config({ path: ".env.test" });


Enzyme.configure({
   adapter: new Adapter()
});

