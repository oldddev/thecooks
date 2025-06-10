import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <section className="flex flex-row h-screen overflow-y-hidden">
      <Navbar />
      <header className="overflow-x-hidden">
        <input
          type="text"
          placeholder="Cook anything..."
          className="w-screen border-b-1 border-[#3a3a3a] h-[65px] p-5 outline-none text-white"
        />
        <section className="p-7">
          <h2 className="text-2xl">THE COOK</h2>
          <p className="text-[#707070]">No one can cook like me.</p>
        </section>
      </header>
    </section>
  );
}
