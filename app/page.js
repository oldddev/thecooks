import Feed from "@/components/feed";
import Navbar from "@/components/navbar";
import Searchbar from "@/components/searchbar";

export default function Home() {
  return (
    <section className="flex flex-row h-screen overflow-y-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        <Searchbar />
        <Feed />
      </main>
    </section>
  );
}
