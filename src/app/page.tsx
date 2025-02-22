import SignIn from "@/components/Login";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <main className="flex flex-col w-full">
        <SignIn />
      </main>
    </div>
  );
}