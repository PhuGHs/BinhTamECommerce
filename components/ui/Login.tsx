import React, { useState } from "react";
import { useRef } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Login() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const emailRef_SignUp = useRef<HTMLInputElement>(null);
  const passwordRef_SignUp = useRef<HTMLInputElement>(null);
  const userNameRef_SignUp = useRef<HTMLInputElement>(null);
  const nameRef_SignUp = useRef<HTMLInputElement>(null);

  const handleJustifyClick = (value: string) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    //do something with this data
  };

  const handleSignUpSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailRef_SignUp.current?.value;
    const password = passwordRef_SignUp.current?.value;
    const username = userNameRef_SignUp.current?.value;
    const name = nameRef_SignUp.current?.value;

    //do something with register data
  };

  return (
    <MDBContainer
      className="p-3 d-flex flex-column w-25 bg-light"
      style={{ borderRadius: 8, marginTop: "7.5rem", marginBottom: "3rem" }}
    >
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            ĐĂNG NHẬP
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            ĐĂNG KÝ
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <form onSubmit={handleLoginSubmit}>
            <div className="text-center mb-3">
              <p>Đăng nhập bằng:</p>

              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "40%" }}
              >
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="lg" />
                </MDBBtn>
              </div>

              <p className="text-center mt-3">hoặc:</p>
            </div>

            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              ref={emailRef}
              id="form1"
              name="email"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              ref={passwordRef}
              id="form2"
              name="password"
              type="password"
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Nhớ tài khoản"
              />
              <a href="!#">Quên mật khẩu?</a>
            </div>

            <MDBBtn className="mb-4 w-100" type="submit">
              Đăng nhập
            </MDBBtn>
            <p className="text-center">
              Chưa có tài khoản? <a href="#!">Đăng ký</a>
            </p>
          </form>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab2"}>
          <form action="/api/post-createUser" method="POST">
            <div className="text-center mb-3">
              <p>Đăng ký với:</p>

              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "40%" }}
              >
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="lg" />
                </MDBBtn>
              </div>

              <p className="text-center mt-3">hoặc:</p>
            </div>

            <MDBInput
              wrapperClass="mb-4"
              label="Họ và tên"
              name="name"
              id="form1"
              type="text"
              ref={nameRef_SignUp}
            />
            <MDBInput
              name="username"
              wrapperClass="mb-4"
              label="Tên tài khoản"
              ref={userNameRef_SignUp}
              id="form1"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              name="email"
              label="Email"
              id="form1"
              type="email"
              ref={emailRef_SignUp}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              ref={passwordRef_SignUp}
              id="form1"
              name="password"
              type="password"
            />

            <div className="d-flex justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I have read and agree to the terms"
              />
            </div>

            <MDBBtn className="mb-4 w-100">Đăng ký</MDBBtn>
          </form>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default Login;
