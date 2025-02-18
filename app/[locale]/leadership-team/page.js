import { teamMembers } from "@/data/teamMembers";
import TeamMemberCard from "../../components/TeamMemberCard";
import Image from "next/image";

function Leadership() {
  return (
    <div>
      <section className="relative flex min-h-[50vh] items-center bg-leadership-hero bg-cover bg-right-top md:min-h-[60vh] xl:min-h-[90vh]">
        <div className="hero-text-wrapper m-auto w-screen max-w-screen-2xl p-5">
          <h1 className="mb-4 text-4xl text-white md:text-6xl">Our Team</h1>
          <p className="text-xl text-white">The passionate people behind the scenes</p>
        </div>
      </section>
      <section className="px-5 py-10 md:py-14 lg:py-20">
        {/* <div className="leadership-intro mx-auto mb-5 max-w-screen-xl sm:flex">
          <div className="mb-5 text-3xl font-bold text-tsdarkgreen sm:basis-1/2">
            {" "}
            Lorem, ipsum dolor sit amet consectetur
          </div>
          <div className="sm:basis-1/2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            possimus labore mollitia ullam, maxime nostrum cum velit dicta
            commodi quos itaque deleniti sunt. Quisquam molestiae autem, fuga
            eaque eligendi dolorum?
          </div>
        </div> */}

        <div className="mx-auto mt-20 grid max-w-screen-xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="first-div flex h-[454px] w-full flex-col justify-around rounded-[56px] rounded-br-[0px] bg-tsyellow p-[10%]">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold text-white">Our Team</h1>
              <Image className="h-[100px] w-[60px] object-cover" width="200" height="300" alt="thomson-ci" src="/images/CI-icon.png" />
            </div>
            <p className="text-white">Our leadership team has a wealth of experience across various fields and passionate in areas of healthcare and quality assurance.</p>
          </div>
          {teamMembers.map((teamMember) => (
            <TeamMemberCard teamMember={teamMember} key={teamMember.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Leadership;
