import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full py-16 md:py-32 bg-gradient-to-r from-blue-500 to-green-500 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_#ffffff33,_transparent)]"></div>

      <div className="relative px-4 md:px-6 flex flex-col items-center text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 animate-fadeIn">
          Empowering Innovators of Tomorrow
        </h1>
        <p className="mx-auto max-w-[700px] text-lg sm:text-xl md:text-2xl mb-6 animate-fadeIn">
          KIIT E-Cell fosters a culture of innovation, providing aspiring entrepreneurs with resources, mentorship, and
          hands-on opportunities to turn ideas into impactful ventures.
        </p>
        <Link href={"/#form"} className={"pt-6"}>
          <Button
            className="px-8 py-4 bg-gradient-to-r from-white to-blue-100 text-blue-600 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            size="lg"
          >
            Join KIIT E-Cell
            <ArrowRight className="ml-2 h-5 w-5"/>
          </Button>
        </Link>

      </div>
    </section>
  );
}
