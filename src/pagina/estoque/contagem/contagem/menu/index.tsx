import { Flag, ListTodo, PlusCircle } from "lucide-react";

export default function MenuContagem() {
  return (
    <div className="relative py-2  flex gap-2 w-full justify-between px-8">
      <div>
        <ListTodo size={40} />
      </div>
      <div className="absolute inset-0 -top-8 flex justify-center ">
        <PlusCircle size={70} />
      </div>
      <div>
        <Flag size={40} />
      </div>
    </div>
  );
}
