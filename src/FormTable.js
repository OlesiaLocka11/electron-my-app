import React from "react";

const FormTable = () => {
  return (
    <div className="formLogin">
      <div className="square">LOGO</div>
      <h1 className="h3 mb-5 font-weight-normal mt-5 text-secondary" >LogIn</h1>
      <form className="formTable pt-4 pb-5"  >
        <h3 className="title-h3 mb-4 text-secondary">Title h3 Heading</h3>
        <p className="text-secondary" style={{fontSize: "14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div style={{paddingLeft: "17%", paddingRight: "17%"}}>
      <label for="inputEmail" className="sr-only">UserName</label>
      <input type="text" id="inputText" className="form-control mb-3 " placeholder="User Name" required autofocus/>
      <label for="inputPassword" className="sr-only">Password</label>
      <input type="password" id="inputPassword" className="form-control mb-3 " placeholder="Password" required/>
      <button className="button btn-lg btn-block" type="submit">Accedi</button>
      </div>
    </form>
    </div>

  );
};

export default FormTable;
