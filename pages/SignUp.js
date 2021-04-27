import Image from "next/image";
import Navbar from "../Components/Navbar";

function SignUp() {
  return (
    <>
      <Navbar
        text={"Already have an account?"}
        link={"Sign In"}
        componentRendered={"/SignIn"}
      />
      <section className="bg-gray-200 h-screen">
        {/* wrapper div */}
        <div className="flex justify-center">
          <form className="bg-white p-8 w-100 h-auto rounded-md z-20">
            <p className="text-gray-900 text-lg font-semibold">
              Get started for free
            </p>
            <p className="text-gray-500 text-sm">
              Millions of freelancers use Salarify to get paid
            </p>
            {/* email wrapper */}
            <div className="my-5">
              <label
                htmlFor="email"
                className="block text-xs text-gray-800 pb-1">
                Personal Email
              </label>
              <input
                className="border border-gray-200 rounded-sm h-8 w-96 text-xs pl-3"
                type="text"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            {/* names wrapper */}
            <div className="flex justify-between my-5">
              {/* firstname wrapper */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs text-gray-800 pb-1">
                  First Name
                </label>
                <input
                  className="border border-gray-200 rounded-sm h-8 w-44 text-xs pl-3"
                  type="text"
                  id="email"
                />
              </div>
              {/* lastname wrapper*/}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs text-gray-800 pb-1">
                  Last Name
                </label>
                <input
                  className="border border-gray-200 rounded-sm h-8 w-44 text-xs pl-3"
                  type="text"
                  id="email"
                />
              </div>
            </div>
            {/* password wrapper */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs text-gray-800 pb-1">
                Password
              </label>
              <input
                className="border border-gray-200 rounded-sm h-8 w-96 text-xs pl-3"
                type="password"
                id="password"
              />
              <p className="text-xs text-gray-500">
                Your password must be atleast 8 characters including a lowercase
                letter, an upper case, and a special character (e.g. !@#_&*)
              </p>
            </div>
            {/* country */}
            <div className="my-5">
              <label
                htmlFor="email"
                className="block text-xs text-gray-800 pb-1">
                Country
              </label>
              <input
                className="border border-gray-200 rounded-sm h-8 w-96 text-xs pl-3"
                type="text"
                id="country"
              />
            </div>
            {/* check box */}
            <div className="flex mb-5 items-center">
              <input type="checkbox" name="" id="" className="" />
              <p className="text-xs text-gray-800 pl-2">
                I've read and accept the Terms of Use and Privacy Policy
              </p>
            </div>
            {/* Get Started Button */}
            <button className="bg-purple-900 rounded-md h-9 w-96 text-white">
              Get Started
            </button>
          </form>

          {/* Tried to use the built-in Image component of Next to render the image but whenever i adjusted the height of the form, it affected the size of the image  */}
          {/* <Image
            className="rounded-lg z-0 transform translate-x-20 absolute "
            src="/signUp.png"
            width={320}
            height={400}
          /> */}
          <img
            src="signUp.png"
            alt=""
            className="h-98 w-80 transform translate-y-12 rounded-md -translate-x-16 z-0"
          />
        </div>
      </section>
    </>
  );
}

export default SignUp;
