import Logo from "../components/Logo";
import bannerForm from "../assets/images/banner-form.png";
import iconFacebook from "../assets/images/icon-facebook.png";
import { useState } from "react";

function SignInOrSignUp() {
  const [isSignInOrSignUp, setIsSignInOrSignUp] = useState("signin");

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-6">
      <div className="flex">
        <div>
          <img className="w-width-banner-login" src={bannerForm} alt="" />
        </div>
        <div className="flex items-center">
          <div className="flex flex-col w-width-form-login">
            <form className="flex flex-col items-center border">
              <div className="py-10">
                <Logo />
              </div>
              <div className="flex flex-col w-full px-10">
                {isSignInOrSignUp === "signin" && (
                  <input
                    type="text"
                    className="border rounded-md p-2 my-1 text-xs text-gray-700 outline-none"
                    placeholder="Số điện thoại, tên người dùng hoặc email"
                  />
                )}
                {isSignInOrSignUp === "signup" && (
                  <>
                    <input
                      type="text"
                      className="border rounded-md p-2 my-1 text-xs text-gray-700 outline-none"
                      placeholder="Số điện thoại di động hoặc email"
                    />
                    <input
                      type="text"
                      className="border rounded-md p-2 my-1 text-xs text-gray-700 outline-none"
                      placeholder="Tên đầy đủ"
                    />
                    <input
                      type="text"
                      className="border rounded-md p-2 my-1 text-xs text-gray-700 outline-none"
                      placeholder="Tên người dùng"
                    />
                  </>
                )}
                <input
                  type="password"
                  className="border rounded-md p-2 my-1 text-xs text-gray-700 outline-none"
                  placeholder="Mật khẩu"
                />
                <button className="border rounded-md p-2 my-1 mt-2 mb-6 text-xs font-bold text-white bg-blue-500 outline-none">
                  {isSignInOrSignUp === "signin" ? "Đăng nhập" : "Đăng ký"}
                </button>
              </div>
              {isSignInOrSignUp === "signin" && (
                <div className="w-full px-10">
                  <div className="flex justify-between items-center gap-4 text-xs font-bold text-gray-500 mb-4">
                    <div className="w-full h-1 border-t-2"></div>
                    HOẶC
                    <div className="w-full h-1 border-t-2"></div>
                  </div>
                  <div className="flex items-center justify-center gap-2 cursor-pointer mx-8">
                    <img className="w-4 h-4" src={iconFacebook} alt="" />
                    <button className="text-sm text-blue-700 font-bold">
                      Đăng nhập bằng Facebook
                    </button>
                  </div>
                  <div className="text-center text-xs my-5 text-gray-600">
                    <button className="px-2 py-1">Quên mật khẩu?</button>
                  </div>
                </div>
              )}
            </form>
            {isSignInOrSignUp === "signin" && (
              <div className="w-full h-14 border mt-6 flex items-center justify-center text-sm gap-1">
                Bạn chưa có tài khoản ư?{" "}
                <button
                  className="text-blue-500 font-bold"
                  onClick={() => setIsSignInOrSignUp("signup")}
                >
                  Đăng ký
                </button>
              </div>
            )}
            {isSignInOrSignUp === "signup" && (
              <div className="w-full h-14 border mt-6 flex items-center justify-center text-sm gap-1">
                Bạn đã có tài khoản?{" "}
                <button
                  className="text-blue-500 font-bold"
                  onClick={() => setIsSignInOrSignUp("signin")}
                >
                  Đăng nhập
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <span className="text-sm text-gray-500">© 2024 Instagram from Meta</span>
    </div>
  );
}

export default SignInOrSignUp;
