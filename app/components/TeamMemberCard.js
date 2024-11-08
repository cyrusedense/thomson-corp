import React from "react";
import Image from "next/image";

function TeamMemberCard({ teamMember }) {
  return (
    <div className="relative h-[454px] w-[336px] overflow-hidden rounded-[56px] rounded-br-[0px]">
      <Image
        className="h-full w-full object-cover"
        width="336"
        height="454"
        alt={teamMember.id}
        src={teamMember.imgUrl}
      />
      <div className="name-div absolute bottom-0 z-10 h-[20%] w-full rounded-tr-[56px] bg-tsdarkgreen text-white">
        <div className="mx-auto flex w-[70%] items-center justify-between">
          <div>
            <p>{teamMember.name}</p>
            <p>{teamMember.title}</p>
          </div>
          <Image
            className="inline-block h-[100px] w-[60px] object-cover"
            width="200"
            height="300"
            alt="thomson-ci"
            src="/images/CI-icon.png"
          />
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
