
import { Button, Checkbox, Container, FormControlLabel, FormGroup } from "@mui/material";
import { Link } from "react-router-dom";
import logoLogin from "../images/logoLogin.png"


export default function SignIn(props){

    return <>
        <div className="main">
            <div className="main-signIn"></div>
            <div className="main-left">
                <Container>
                        <div className="main-center">
                            <div className="logoLogin">
                                <Link to="/index"><img src={logoLogin} alt="#" /></Link>
                            </div>
                            <p>Nếu chưa có tài khoản, vui lòng đăng ký tài khoản mới. Tài khoản ở truyencv không thể đăng nhập ở đây</p>
                            <div className="inputSignIn">
                                <input type="email" placeholder="Tên tài khoản" /><br></br>
                                <input type="password" placeholder="Mật khẩu" />
                            </div>
                            <div className="forgotPass">
                            <FormGroup className="formCheckbox">
                                <FormControlLabel className="checkPassword"control={<Checkbox defaultChecked />} label="Nhớ truy cập lần sau" />
                                <span>Quên mật khẩu</span>
                            </FormGroup>
                            <Button variant="contained" color="primary" className="btnLogin" >
                            ĐĂNG NHẬP
                            </Button>
                            </div>
                            <p><i>Hệ thống dừng cho phép đăng nhập thông qua Facebook, Google. Nếu bạn muốn tiếp tục sử dụng tài khoản đọc truyện cũ đã từng đăng nhập thông qua Facebook, Google hãy vào mục <a href="#" style={{color:"skyblue",textDecoration:"none"} }>Quên mật khẩu?</a> sau đó điền email tài khoản Facebook, Google của bạn để tạo mật khẩu</i> </p>
                            <p>Bạn chưa có tài khoản <span><Link to="/sign-up" className="linkUp" style={{textDecoration:"none"}}>Đăng ký</Link></span></p>
                        </div>
                </Container>
        </div>

        </div>
    </>
}