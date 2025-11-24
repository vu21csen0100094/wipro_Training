const { expect } = require("chai");
const sinon = require("sinon");
const controller = require("../controllers/courses.controller");
const service = require("../services/courses.service");

describe("Courses Controller – UNIT TESTS", () => {
  afterEach(() => sinon.restore());

  it("should return course list", async () => {
    const fakeCourses = [{ id: 1, name: "JS" }];

    // Stub service
    sinon.stub(service, "getAll").resolves(fakeCourses);

    // Fake req/res
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    };

    await controller.getAll(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(fakeCourses)).to.be.true;
  });
});
