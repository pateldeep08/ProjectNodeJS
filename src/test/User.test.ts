import * as mongoose from 'mongoose'
import chai, { expect } from "chai";
import { before } from "mocha";

import User from '../models/User';
//import User from '../models/metric';




//const should = chai.should();




    describe("Creation of a user", () => {

      const name = "pirre";
      const email = "p@gmail.com";
      const password = "azertyuio";
      
 
      it("After creation, values should be : name = pierre, email = p@gmail.com, password = azertyuio", done => {
        let user : any = new User(name, email, password);
        let result = user.getUser();
        expect(result.name).to.be.eql("pierre");
        expect(result.email).to.be.eql("p@gmail.com");
        expect(result.password).to.be.eql("azertyuio");
        done();

        describe("Save", () => {
          it("After Saving, values should be : name = pierre, email = p@gmail.com, password = azertyuio", done => {
            let user = new User(name, email, password);
            let db = User.saveOne(user);
            Promise.all([db]).then(() => {
              User.getOne(user.getId()).then((result: any) => {
                expect(result.name).to.be.eql("pierre");
                expect(result.email).to.be.eql("p@gmail.com")
                done();
              });
            });
      });



    })

  })

})