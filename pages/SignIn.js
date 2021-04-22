import Image from "next/image";
function SignIn() {
  return (
    <section className="flex justify-center">
      {/* wrapper - i created this so i can properly center the image and the form, its kinda like a hack */}

      <div className="flex w-auto transform -translate-x-10 ">
        <form className="flex-col items-center p-8 w-100 h-80 rounded-md bg-white z-50 transform translate-x-20 translate-y-16">
          <p className="text-gray-900 text-lg font-semibold">Hi there</p>
          <p className="text-gray-500 text-sm">Sign into your dashboard</p>

          {/* email */}
          <div className="my-5">
            <label htmlFor="email" className="block text-xs text-gray-800 pb-1">
              Personal email
            </label>
            <input
              className="border border-gray-200 rounded-sm h-8 w-96 text-xs pl-3"
              type="text"
              id="email"
              placeholder="name@example.com"
            />
          </div>

          {/* password */}
          <div className="my-5">
            <label
              htmlFor="password"
              className="block text-xs text-gray-800 pb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-200 rounded-sm h-8 w-96  text-xs pl-3"
            />
          </div>

          <div className="flex justify-between">
            <label className="text-gray-500 text-xs">
              Forgot your password?
            </label>
            <button className="bg-purple-800 text-white text-sm rounded-md h-9 w-28 ">
              Sign in
            </button>
          </div>
        </form>
        <Image
          className="rounded-lg z-40 absolute  "
          src="/signIn.png"
          width={350}
          height={450}
        />
      </div>
    </section>
  );
}
export default SignIn;
