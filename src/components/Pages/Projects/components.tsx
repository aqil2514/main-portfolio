import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProjectsList:React.FC<{projects:GenType.CardImage[]}> = ({projects}) => {
    return(
        <>
        {projects.map((project) => (
        <Card
          key={project.id}
          className="h-[480px] py-4 overflow-y-scroll no-scrollbar bg-slate-800 px-2 border-double border-8 border-sky-400"
        >
          <figure className="relative h-60 w-full overflow-hidden">
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              fill
              className="object-cover rounded-md duration-200 hover:scale-110"
            />
          </figure>
          <CardTitle className="text-white font-young-serif font-normal my-2">
            {project.name}
          </CardTitle>
          <CardDescription className="flex flex-wrap gap-2 mb-2">
            {project.group!.map((category, i) => (
              <Badge key={i}>{category}</Badge>
            ))}
          </CardDescription>
          <CardContent className="font-poppins text-white">
            {project.desc.id}
          </CardContent>
          <CardFooter className="flex gap-4">
            <Link href={`${project.ctaLink}`} target="_blank">
              <Button styleTemplate="yuhomyan" styleNumber={1}>
                {project.ctaText}
              </Button>
            </Link>
            {project.downloadLink && <Link href={`${project.downloadLink}`} download>
              <Button styleTemplate="yuhomyan" styleNumber={1}>
                {project.downloadText}
              </Button>
            </Link>}
            {project.repoLink && <Link href={`${project.repoLink}`}>
              <Button styleTemplate="yuhomyan" styleNumber={1}>
                {project.repoText}
              </Button>
            </Link>}
          </CardFooter>
        </Card>
      ))}
        </>
    )
}