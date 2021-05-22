import React from "react";
function Contact() {
  return (
    <div className="container mt-5 mx-0 p-0">
      <div className="row"></div>
      <div className="row mx-0">
        <div className="card mx-sm-5" style={{ maxWidth: "1000px" }}>
          <h1 className="card-head">Contact</h1>
          <form>
            <div className="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Name"
              ></input>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email"
              ></input>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
