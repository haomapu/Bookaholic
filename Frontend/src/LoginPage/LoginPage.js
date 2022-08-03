import './LoginPage.css';

function LoginPage() {
  return (
  <section>
    <div class="img-bg">
        <img src="./image.jpg" alt = "Picture"/>
    </div>
    <div class="icon">
        <img src="./BookStore.png" alt = "Logo"/>
    </div>
    <div class="content">
        <div class="form">
            <h2>Sign in</h2>
            <form action="">
                <div class="input">
                    <span>Username</span>
                    <input type="text" name=""/>
                </div>
                <div class="input">
                    <span>Password</span>
                    <input type="password" name=""/>
                </div>
                <div class="remember">
                    <label><input type="checkbox" name=""/> Remember username</label>
                </div>
                <div class="input">
                    <input type="submit" value="Login"/>
                </div>
                <div class="input">
                    <p><a href="/register">Sign up</a></p>
                </div>
                <div class="input">
                    <p><a href="/#">Forget password </a></p>
                </div>
            </form>
            <h3>Login With</h3>
            <ul class="icon">
                <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                <li><i class="fa fa-google" aria-hidden="true"></i></li>
                <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
            </ul>
            <div class='footer'>
                &copy;
                2022
                Bookaholic Inc
            </div>
        </div>
    </div>
  </section>
  );
}

export default LoginPage;
