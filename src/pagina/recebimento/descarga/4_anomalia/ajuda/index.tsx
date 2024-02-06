import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import passo1 from "@/assets/passos/1.png";
import passo2 from "@/assets/passos/2.png";
import passo3 from "@/assets/passos/3.png";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { AlertCircle } from "lucide-react";
import Image from "next/image";

export default function AjudaDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <AlertCircle></AlertCircle>
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle>Guia para fotos.</SheetTitle>
          <SheetDescription>
            <Carousel className="h-full">
              <CarouselContent className="">
                <CarouselItem>
                    <Image src={passo1} alt="img2"/>
                </CarouselItem>
                <CarouselItem><Image src={passo2} alt="img2"/></CarouselItem>
                <CarouselItem><Image src={passo3} alt="img2"/></CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
