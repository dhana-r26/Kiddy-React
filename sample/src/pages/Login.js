import React from 'react'

const Login = () => {
  return (
    <div>
 <section class="container m-5 p-5">
        <div class="row">
<div class="col-lg-4 col-md-12 col-sm-12 pb-5">
<p class="h1"><b>My account</b></p>
</div>
<div class="col-lg-4 col-md-12 col-sm-12 pt-5">
<form>
            
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" required>User name or email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" required>Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
<div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
  </div>
<div class="mb-3">
      <a class="fs-6 text" href="#" role="button">Lost your password?</a><br/>
</div>
  <button type="submit" class="btn btn-dark form-submitbtn">Log In</button>

</form>
    </div>
    </div>
        </section>

    </div>
  )
    }
export default Login