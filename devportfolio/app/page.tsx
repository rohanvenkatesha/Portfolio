import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default async function Home() {
  
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
      <Hero />
      <Skills/>
      <Projects />
      <Footer/>
      </div>
    </main>
  )
}


