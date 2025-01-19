import Carousel from "@/components/Carousel/Carousel";
import HoverCarousel from "@/components/HoverCarousel/HoverCarousel";
import RotateComponent from "@/components/RotateComponent/RotateComponent";
import ShowHideComponent from "@/components/ShowHideComponent/ShowHideComponent";
import * as motion from "motion/react-client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-screen">
      {/* Header */}
      <div className="m-8 flex">
        <div className="flex-grow">
          <Image src={"/logo.svg"} alt={""} width={70} height={75} />
        </div>
        <div className="space-x-10 flex">
          <div className="cursor-pointer hover:text-primary">About</div>
          <div className="cursor-pointer hover:text-primary">Experience</div>
          <div className="cursor-pointer hover:text-primary">Projects</div>
        </div>
      </div>

      {/* First Content */}
      <div className="flex justify-center mx-auto w-4/5 my-[150px]">
        <div className="w-1/2 space-y-8">
          <div className="text-9xl ">
            <p>Fauzan's</p>
            <p className="text-primary">Artifacts</p>
          </div>
          <div className="cursor-pointer py-4 px-8 text-2xl rounded-2xl border border-primary w-fit hover:bg-primary hover:text-secondary-200 ">
            See My Projects!
          </div>
        </div>
        <RotateComponent className="w-1/2 justify-items-center">
          <Image src={"/logo.svg"} width={350} height={375} alt={""} />
        </RotateComponent>
      </div>

      {/* First Content Didiver */}
      <div className="h-[100px] my-[100px] w-full max-w-full bg-primary text-secondary-200 relative overflow-x-hidden">
        <Carousel
          names={[
            "Web Development",
            "Mobile Development",
            "Backend Engineer",
            "Odoo Developer",
          ]}
        />
      </div>

      {/* Second Content */}
      <ShowHideComponent className="flex justify-center mx-auto w-4/5">
        <div className="w-2/3 space-y-8">
          <div className="text-6xl">
            <p>Hello I'm</p>
            <p className="text-primary">Fauzan Ramadhan</p>
          </div>
          <div className="text-neutral-300 text-xl	">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </div>
        </div>
        <div className="w-1/3 justify-items-center">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="cursor-pointer">
            <Image src={"/profile.svg"} width={300} height={400} alt={""} />
          </motion.div>
        </div>
      </ShowHideComponent>

      <div className="flex w-[95%] mx-auto border-t border-primary my-[100px]" />

      {/* Professional Experience */}
      <ShowHideComponent className="flex mx-auto w-[90%] h-fit">
        <div className="w-full space-y-10 h-fit">
          <div className="text-5xl w-full mx-auto">
            Professional <span className="text-primary">Experiences</span>
          </div>
          <div className="flex w-full mx-auto h-fit">
            {/* Scrollable Menu */}
            <div className="p-4 w-[20%] space-y-4 h-fit">
              {["Test", "Test 2", "Test 3", "Test 4"].map((name, index) => {
                return (
                  <div
                    className="flex items-center text-white border border-white justify-items-center hover:text-secondary-200 cursor-pointer w-full h-[70px] hover:bg-primary hover:border-primary rounded-2xl"
                    key={index}>
                    <div className="mx-auto">{name}</div>
                  </div>
                );
              })}
            </div>
            <div className="flex w-[80%] p-4 relative min-h-[700px]">
              <div className="w-full min-h-[700px] bg-primary absolute rounded-2xl -translate-x-2.5	-translate-y-2.5	" />
              <div className="w-full flex flex-col min-h-[700px] absolute rounded-2xl bg-secondary-100 p-8 space-y-4">
                <div className="flex w-full items-center space-x-4">
                  <div className="text-4xl">Oy! Indonesia</div>
                  <div className="rounded-full bg-white w-[10px] h-[10px]" />
                  <div className="text-2xl text-primary">Software engineer</div>
                </div>
                <div className="text-xl flex w-full items-center space-x-4 text-neutral-300">
                  February 2022 - Present
                </div>
                <div className="flex w-full mx-auto border-t border-white" />
                <div className="text-xl flex flex-grow w-full space-x-4 text-neutral-300">
                  - Develop and maintain dashboard of OY! Indonesia with ReactJs
                  and Typescript- Provide endpoint to consume by frontend with
                  JavaSpark- Testing service with unit testing and Postman. -
                  Collaborate with other developer using Github- Handle weekly
                  on-call to help partner to get solution of the issues that
                  they raised- Maintain database by optimizing query and
                  checking with Dbeaver- Maintain error by adding log using
                  Sentry and Kibana- Create component with Storybook.
                </div>
                <div className="flex space-x-2">
                  {["Next Js", "React Js", "Java"].map((name, index) => {
                    return (
                      <div
                        className="px-[20px] py-[5px] flex items-center text-white border border-white justify-items-center hover:text-secondary-200 cursor-pointer w-fit h-[30px] hover:bg-primary hover:border-primary rounded-2xl"
                        key={index}>
                        <div className="mx-auto">{name}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ShowHideComponent>

      <div className="flex w-[95%] mx-auto border-t border-primary my-[100px]" />

      {/* Project Artifacts */}
      <ShowHideComponent className="flex mx-auto w-[90%] h-fit">
        <div className="w-full space-y-10 h-fit">
          <div className="text-5xl w-full mx-auto">
            Project <span className="text-primary">Artifacts</span>
          </div>
          <div className="flex space-x-2 w-full max-w-full overflow-x-auto">
            {[
              "All Project",
              "Web Development",
              "Mobile Development",
              "Odoo Developmenet",
              "Game Developmenet",
              "Game Developmenet",
            ].map((name, index) => {
              return (
                <div
                  className="text-xl px-[20px] py-[5px] flex items-center text-white border border-white justify-items-center hover:text-secondary-200 cursor-pointer min-w-[260px] h-[70px] hover:bg-primary hover:border-primary rounded-2xl"
                  key={index}>
                  <div className="mx-auto">{name}</div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              "All Project",
              "Web Development",
              "Mobile Development",
              "Misc",
            ].map((name, index) => {
              return (
                <div
                  className="w-full h-[500px] rounded-xl p-4 bg-neutral-200 text-secondary-200"
                  key={index}>
                  {name}
                </div>
              );
            })}
          </div>
        </div>
      </ShowHideComponent>

      <div className="flex w-[95%] mx-auto border-t border-primary my-[100px]" />
    </div>
  );
}
