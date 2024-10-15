import Button from "../components/Button";
import PersonCard from "../components/PersonCard";
import TextBox from "../components/TextBox";
import Timeline from "../components/Timeline";

const leaderList = [
  {
    name: "Benjamin Lim",
    title: "CEO",
    profilePic: "/images/placeholder-profile.jpeg",
  },
  {
    name: "Ivy Gan",
    title: "CFO",
    profilePic: "/images/placeholder-profile.jpeg",
  },
  {
    name: "Benjamin Lim",
    title: "CMO",
    profilePic: "/images/placeholder-profile.jpeg",
  },
];

function AboutUs() {
  return (
    <main>
      <section className="bg-about-hero relative min-h-[50vh] bg-cover bg-right md:min-h-[90vh]">
        <div className="hero-text-wrapper absolute top-[50%] translate-y-[-50%] p-5">
          <h1 className="mb-4 text-4xl text-white md:text-6xl">About Us</h1>
          <p className="text-xl text-white">Where Health Matters</p>
        </div>
      </section>

      <section className="timeline">
        <Timeline />
      </section>

      <section className="px-5 py-10 md:py-14 xl:py-20">
        <h1 className="mb-4 text-center text-2xl md:text-3xl">
          Mission & Vision
        </h1>

        <div className="mission-wrapper grid-col-1 m-auto grid max-w-[750px] gap-5 md:grid-cols-2">
          <TextBox
            title={"Mission"}
            subtitle={"Subtitle for Mission"}
            color={"yellow"}
            para={
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu"
            }
          />
          <TextBox
            title={"Vision"}
            subtitle={"Subtitle for Vision"}
            para={
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu"
            }
          />
        </div>
      </section>

      <section>
        <h1 className="mb-4 text-center text-2xl md:text-3xl">Our Leaders</h1>
        <p className="mb-5 px-5 text-center">
          We are led by a team of qualified experts, passionate about building a
          healthy society
        </p>
        <div className="leader-wrapper my-10 flex flex-wrap gap-6">
          {leaderList.map((leader) => (
            <PersonCard
              key={leader.title}
              name={leader.name}
              image={leader.profilePic}
              title={leader.title}
            />
          ))}
        </div>
        <div className="m-auto my-6 w-fit">
          <Button color={"yellow"} text={"Read More"} />
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
