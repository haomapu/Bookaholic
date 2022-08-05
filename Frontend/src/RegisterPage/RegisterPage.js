import "./RegisterPage.css";
import axios from "axios";
import { useEffect, useState } from "react";

function RegisterPage() {
    const [account, setAccount] = useState("");

    useEffect(() => {
        const fetchAccount = async () => {
            const res = await axios.get("http://localhost:5050/user");
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
            (Firstname.length > 16 ||
                Lastname.length > 16 ||
                Email.length > 16 ||
                Username.length > 16 ||
                Password.length > 16 ||
                ConfirmPass.length > 16) &&
            flag === 0
        ) {
            alert("Must not exceed 16 characters!");
            flag = 2;
        }

        account.map(check => {
            if (Username === check.username && flag === 0) {
                alert("Username already exists!");
                flag = 3;
            }
        });

        if (Password !== ConfirmPass && flag === 0) {
            alert("Entered the wrong password!");
            flag = 4;
        }

        if (flag === 0) {
            alert("Register successful!");
        }
    }

    return (
        <section>
            <div className="img-bg">
                <img src="./image.jpg" alt="Picture" />
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
                                placeholder="Enter username"
                            />
                        </div>
                        <div className="input">
                            <span> Password </span>
                            <input
                                type="currentpassword"
                                name=""
                                placeholder="Enter password"
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
