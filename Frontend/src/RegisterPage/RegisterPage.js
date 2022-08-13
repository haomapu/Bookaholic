import "./RegisterPage.css";
import axios from "axios";
import { useEffect, useState } from "react";

function RegisterPage() {
    function postAccount(test) {
        axios.post("http://localhost:8000/user", test);
    }

    const [account, setAccount] = useState("");

    useEffect(() => {
        const fetchAccount = async () => {
            const res = await axios.get("http://localhost:8000/user");
            setAccount(res.data);
        };
        fetchAccount();
    }, []);

    function onClickBtn() {
        var arr = document.getElementsByTagName("input");
        var Firstname = arr[0].value;
        var Lastname = arr[1].value;
        var Email = arr[2].value;
        var Username = arr[3].value;
        var Password = arr[4].value;
        var ConfirmPass = arr[5].value;

        var flag = 0;
        if (
            Firstname === "" ||
            Lastname === "" ||
            Email === "" ||
            Username === "" ||
            Password === "" ||
            ConfirmPass === ""
        ) {
            alert("It can't be blank!");
            flag = 1;
        }

        if (
            (Firstname.length > 30 ||
                Lastname.length > 30 ||
                Username.length > 30 ||
                Password.length > 30 ||
                ConfirmPass.length > 30) &&
            flag === 0
        ) {
            alert("Must not exceed 30 characters!");
            flag = 2;
        }
        if (Email.length > 40 && flag === 0)
        {
            alert("Email must not exceed 40 characters!");
            flag = 2;
        }

        account.map(check => {
            if (Username === check.username && flag === 0) {
                alert("Username already exists!");
                flag = 3;
            }
            return null;
        });

        if ((Password.length < 6 || Password.length > 30) && flag === 0) {
            alert("Not suitable for password!");
            flag = 4;
        }

        if (Password !== ConfirmPass && flag === 0) {
            alert("Entered the wrong password!");
            flag = 4;
        }

        if (flag === 0) {
            var test = {
                firstName: Firstname,
                lastName: Lastname,
                username: Username,
                password: Password,
                email: Email,
            };
            postAccount(test);
            console.log(test);
        }
        alert("Register successful!");
    }

    return (
        <section>
            <div className="img-bg">
                <img src="./image.jpg" alt="anh" />
            </div>
            <div className="icon">
                <img src="./BookStore.png" alt="Logo" />
            </div>
            <div className="contentRegister">
                <div className="form">
                    <h2> Sign up </h2>
                    <form action="">
                        <div className="input">
                            <span> First Name </span>
                            <input
                                type="text"
                                name=""
                                placeholder="Enter first name"
                            />
                        </div>
                        <div className="input">
                            <span> Last Name </span>
                            <input
                                type="text"
                                name=""
                                placeholder="Enter last name"
                            />
                        </div>
                        <div className="input">
                            <span> E-mail </span>
                            <input
                                type="text"
                                name=""
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="input">
                            <span> Username </span>
                            <input
                                type="text"
                                name=""
                                placeholder="Enter username 0 - 30 characters"
                            />
                        </div>
                        <div className="input">
                            <span> Password </span>
                            <input
                                type="currentpassword"
                                name=""
                                placeholder="Enter password 6 - 30 characters"
                            />
                        </div>
                        <div className="input">
                            <span> Confirm Password </span>
                            <input
                                type="currentpassword"
                                name=""
                                placeholder="Enter confirm password"
                            />
                        </div>
                        <div className="input">
                            <button type="submit" onClick={onClickBtn}>
                                {" "}
                                Register{" "}
                            </button>
                        </div>
                        <div className="input">
                            <p>
                                <a href="/login"> Sign in </a> If you have an
                                account
                            </p>
                        </div>
                    </form>
                    <div className="footer">&copy; 2022 Bookaholic Inc</div>
                </div>
            </div>
        </section>
    );
}

export default RegisterPage;
