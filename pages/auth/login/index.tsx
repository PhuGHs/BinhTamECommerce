import React, { FormEventHandler } from "react";
import { useRef } from "react";
import { signIn } from "next-auth/react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function LoginPage() {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleLoginOnSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    console.log(email.current?.value);
    const result = await signIn("credentials", {
      email: email.current?.value,
      password: password.current?.value,
      redirect: true,
      callbackUrl: '/'
    });
    console.log(result);
  };
  return (
    <form onSubmit={handleLoginOnSubmit}>
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow>
          <MDBCol col="4" md="6">
            <MDBInput
              ref={email}
              wrapperClass="mb-4"
              label="Email"
              id="formControlLg1"
              type="email"
              size="lg"
            />
            <MDBInput
              ref={password}
              wrapperClass="mb-4"
              label="Password"
              id="formControlLg2"
              type="password"
              size="lg"
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn className="mb-4 w-100" size="lg" type="submit">
              Sign in
            </MDBBtn>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">OR</p>
            </div>

            <MDBBtn
              className="mb-4 w-100"
              size="lg"
              style={{ backgroundColor: "#3b5998" }}
            >
              <MDBIcon fab icon="facebook-f" className="mx-2" />
              Continue with facebook
            </MDBBtn>

            <MDBBtn
              className="mb-4 w-100"
              size="lg"
              style={{ backgroundColor: "#55acee" }}
            >
              <MDBIcon fab icon="twitter" className="mx-2" />
              Continue with twitter
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </form>
  );
}

export default LoginPage;
