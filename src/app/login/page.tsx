import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
// import { signIn } from "@/auth";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
        <main className="flex flex-col w-full">
            {/* <Navbar /> */}
            <Login />
        </main>
    </div>
  )
}

export default page;