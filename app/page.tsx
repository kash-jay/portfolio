import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row-reverse items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl flex flex-col gap-14 xl:gap-10">
              <div className="text-xl">Aspiring Software Developer</div>
              <h1 className="h1">
                Hello, I&apos;m <br />
                <span className="text-accent ">Kashyapa Jayasekera</span>
              </h1>
              <p className="text-2xl max-w-[500px] text-white/80">
                A new grad with a BSc in Computer Science from{" "}
                <span className="text-[#8900e1]">New York University</span>{" "}
                seeking to put skills and knowledge to work at an impactful
                company.
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Link
                  href="https://drive.google.com/file/d/14YfP-coWeqOYER-qtHc7qUKnRGWCZISy/view?usp=sharing"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-"
                  >
                    <span>View CV</span>
                  </Button>
                </Link>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
                    items-center text-accent text-base hover:bg-accent hover:text-primary 
                    hover:transition-all duration-500"
                  />
                </div>
              </div>
            </span>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* <Stats /> */}
    </section>
  );
};

export default Home;
