import React from "react";
import { Card, CardFooter, CardBody } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

export default function AnimeCard({ anime }: any) {
  const truncatedTitle =
    anime.title.length > 24 ? anime.title.slice(0, 20) + "..." : anime.title;
  return (
    <Link shallow href={`/info/${anime.id}`}>
      <Card isHoverable={true} isPressable className="border-none bg-none">
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl h-[230px] w-[270px]"
            src={anime.image}
            height={230}
            width={270}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <p className="text-tiny text-center">{truncatedTitle}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
