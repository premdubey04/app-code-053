const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const appUrl = 'http://localhost:3000';

describe('GET /', () => {
  it('should return welcome message', (done) => {
    chai.request(appUrl)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello from rollno <rollno>!');
        done();
      });
  });
});
const app = require('../index');