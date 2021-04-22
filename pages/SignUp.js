import Image from "next/image";

function SignUp() {
  return (
    <section className="bg-gray-200 h-screen">
      {/* wrapper div */}
      <div className="flex justify-center">
        <form className="bg-white p-8 w-100 h-96 rounded-md z-0">
          <p className="text-gray-900 text-lg font-semibold">
            Get started for free
          </p>
          <p className="text-gray-500 text-sm">
            Millions of freelancers use Salarify to get paid
          </p>
          {/* email wrapper */}
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
          {/* names wrapper */}
          <div className="flex justify-between">
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
            <p className="text-xs text=gray-500">
              Your password must be atleast 8 characters including a lowercase letter, an upper case, and a special character (e.g. !@#_&*)
            </p>
          </div>
        </form>

        {/* <Image src="/signUp.png" width={350} heigth={400} /> */}
        <Image
          className="rounded-lg z-0 transform -translate-x-20 "
          src="/signUp.png"
          width={320}
          height={420}
        />
      </div>
    </section>
  );
}

export default SignUp;
