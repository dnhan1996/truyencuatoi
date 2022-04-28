
import { Button, Checkbox, Container, FormControlLabel, FormGroup } from "@mui/material";
import { Link } from "react-router-dom";
import logoLogin from "../images/logoLogin.png"


export default function SignUp(props){

    return <>
        <div className="main">
            <div className="main-signIn"></div>
            <div className="main-left">
                <Container>
                <div className="logoLogin">
                            <img src={logoLogin} alt="#" />
                        </div>
                        <div className="contain">
                            <p>ĐĂNG KÝ NGAY</p>
                            <p>Hãy tạo tài khoản và tận hưởng những chương truyện hay nhất ngay sau khi đăng nhập vào hệ thống</p>
                        </div>
                        <div className="inputSignIn">
                            <input type="email" placeholder="Tên tài khoản"/><br></br>
                            <input type="password"   placeholder="Mật khẩu"/>
                        </div>
                        <div className="forgotPass">
                        <Button variant="contained" color="primary" className="btnLogin">
                        ĐĂNG KÝ
                        </Button>
                        </div>
                       
                        <p>Bạn đã có tài khoản rồi?<span><Link to="/sign-in" className="linkUp" style={{textDecoration:"none", paddingLeft:"5%"}}>Đăng nhập</Link></span></p>
                </Container>
        </div>

        </div>
    </>
}