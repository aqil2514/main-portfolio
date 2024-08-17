import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { certificates } from "./misc";
import Image from "next/image";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function Certificate() {
  return (
    <div>
      <h1>Sertifikat</h1>
      <div className="flex justify-center px-2 gap-4">
        {certificates.map((certificate) => (
          <Card
            key={certificate.id}
            className="w-1/4 h-[480px] py-4 overflow-y-scroll no-scrollbar"
          >
            <CardTitle className="text-center">{certificate.name}</CardTitle>
            <CardDescription className="text-xs text-center mt-2">
              {certificate.imageCapt}
            </CardDescription>
            <CardContent>
              <figure className="flex flex-col gap-2 items-center justify-center">
                <Image
                  alt={certificate.imageAlt}
                  src={certificate.imageSrc}
                  width={320}
                  height={160}
                />
              </figure>
              <p className="font-sans text-base">{certificate.desc.id}</p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Link
                href={certificate.ctaLink ? certificate.ctaLink : "#"}
                target="_blank"
              >
                {certificate.ctaLink && <Button
                  styleTemplate="yuhomyan"
                  styleNumber={1}
                >
                  {certificate.ctaText}
                </Button>}
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
