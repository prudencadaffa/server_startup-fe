import React from "react";

export default function Login() {
  return (
    <div>
      <div>
        <div className="auth-page">
          <div className="h-screen flex justify-center items-center bg-green-400">
            <div
              className="hidden md:block bg-green-400 h-full auth-background rounded-tr-lg rounded-br-lg"
              // style={{
              //   backgroundImage: `url("/assets/images/sign-in-background.jpg")`,
              // }}
            />
            <div className="w-auto md:w-2/4 lg:w-2/3 flex justify-center items-center">
              <div className="w-full lg:w-1/2 px-10 lg:px-0">
                <h2 className="font-normal mb-6 text-3xl text-white">
                  Login Sekarang!
                </h2>
                <div className="mb-6">
                  <div className="mb-4">
                    <label className="font-normal text-lg text-white block mb-3">
                      Email Anda
                    </label>
                    <input
                      type="email"
                      className="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
                      placeholder="Write your email address here"
                      defaultValue="Masukkan email anda"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="mb-4">
                    <label className="font-normal text-lg text-white block mb-3">
                      Password
                    </label>
                    <input
                      type="password"
                      className="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
                      placeholder="Write your password here"
                      defaultValue="Password123456"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="mb-4">
                    <button className="block w-full bg-blue-600 hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full">
                      Login
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-white text-md">
                    Belum punya akun?
                    <a
                      href="/daftar"
                      className="no-underline text-orange-button"
                    >
                      Daftar
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
