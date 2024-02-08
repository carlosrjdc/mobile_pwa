/** @format */
'use client'
import { Undo2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function MenuSuperior() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event:any) => {
      // Verifica se a tecla pressionada é a tecla "Esc"
      if (event.key === 'Escape') {
        router.back();
      }
    };

    // Adiciona o ouvinte de eventos quando o componente é montado
    window.addEventListener('keydown', handleKeyPress);

    // Remove o ouvinte de eventos quando o componente é desmontado
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [router]); // Adicione `router` à lista de dependências para garantir que o useEffect seja recriado quando `router` for alterado

  return (
    <div className='bg-primary flex justify-between px-2 py-2 items-center'>
      <Undo2 className='text-secondary' onClick={()=> router.back()} size={40} />
      <strong className='text-secondary'>MENU</strong>
    </div>
  );
}
