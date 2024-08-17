import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "./data";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function FullStackDeveloperProjects() {
  return (
    <div className="grid grid-cols-2 gap-4">
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
            <Link href={`${project.ctaLink}`}>
              <Button styleTemplate="yuhomyan" styleNumber={1}>
                {project.ctaText}
              </Button>
            </Link>
            <Link href={`${project.repoLink}`}>
              <Button styleTemplate="yuhomyan" styleNumber={1}>
                {project.repoText}
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
