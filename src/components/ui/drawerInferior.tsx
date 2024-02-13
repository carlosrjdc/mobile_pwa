/** @format */

"use client";
import * as React from "react";

import LerQRCode from "@/components/global/atualizarValorQrCode";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScanBarcode } from "lucide-react";

export default function DrawerInferior({
  setOpen,
  open,
  children,
}: {
  setOpen: React.Dispatch<boolean>;
  open: boolean;
  children?: React.ReactNode;
}) {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild onClick={() => setOpen(true)}>
        <ScanBarcode size={50} className=" p-2" />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Ler QRCode</DrawerTitle>
            <DrawerDescription>Scannear QR Code.</DrawerDescription>
          </DrawerHeader>
          {children}
          <DrawerFooter>
            <DrawerClose asChild onClick={() => setOpen(false)}>
              <Button>Submit</Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
      <DrawerOverlay onClick={() => setOpen(false)} />
    </Drawer>
  );
}
