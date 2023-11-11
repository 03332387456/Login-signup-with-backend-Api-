import "./Login.css";
import { useState } from "react";
import Buttons from "../Components/Buttons";
import Input from "../Components/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Login() {
  const [model, setModel] = useState<any>({});
  const navigate = useNavigate();
  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  const Login = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/Login", model);
      console.log(response.data);
    } catch (error) {
      navigate('/');
      console.error("Login failed:", error);
    }
  };

  const responses = () => {
    Login()
  };

  const goBack = () => {
    navigate('/')
  };

  return (
    <div className="container-fluid gbcolor">
      <div className="container">
        <h1 className="pt-5 bg-transparent fs-2">
          <b className="text-white ">Login Your Account</b>
        </h1>
        <hr className="w-25 mb-5 text-center custom-hr" />
      </div>
      <div className="container-fluid m-auto py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                width={450}
                src="https://static.vecteezy.com/system/resources/previews/023/377/386/original/3d-male-character-happy-working-on-a-laptop-png.png"
                className="img-fluid"
                alt="Responsive image"
              />
            </div>
            <div className="col-md-6 m-auto border rounded p-2 shadow ">
              <h1 className="login fs-3">Login</h1>

              <div className="">
                <Input
                  onChange={(e: any) => fillModel("userName", e.target.value)}
                  label="User Name"
                  type="text"
                />
              </div>
              <div className="">
                <Input
                  onChange={(e: any) => fillModel("Email", e.target.value)}
                  label="Email"
                  type="mail"
                />
              </div>
              <div>
                <Input
                  value={model.password}
                  onChange={(e: any) => fillModel("password", e.target.value)}
                  label="Password"
                  type="password"
                />
              </div>
              <Buttons onClick={responses} label="LOGIN" />
              <p className="p-3" onClick={goBack}>if you have'nt an account got to the <u><b className="text-white fs-5 p-2">Signup</b></u></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}