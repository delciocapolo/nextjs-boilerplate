import LogoApp from "@src/components/atoms/logo";
import { ArrowLeft, ChevronRight, Facebook, Instagram, Linkedin, Rss } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
   return (
      <main className="space-y-14">
         <div className="container mx-auto min-h-[calc(100vh-110px)]">
            <section className="w-1/2 h-full mx-auto py-5 space-y-10">
               <article className="flex-center w-full">
                  <LogoApp size={"10vw"} />
               </article>
               <article className="space-y-10 text-center">
                  <div className="space-y-3">
                     <h5 className="text-primary text-headline-24">404</h5>
                     <h1 className="text-headline-56">Esta página não existe</h1>
                     <p className="font-semibold text-body-16 text-gray-500">Desculpe, não foi possível encontrar a página que procura.</p>
                  </div>
                  <ul className="divide-y divide divide-gray-200" role="list">
                     {
                        Array.from({ length: 3 }).map((_, i) => (
                           <li key={i} className="block pb-3" role="listitem">
                              <Link href={""} className="flex items-center min-h-22">
                                 <div className="flex-none w-18">
                                    <span className="rounded-sm flex-center size-11 ring ring-gray-300 bg-background">
                                       <Rss />
                                    </span>
                                 </div>
                                 <div className="flex-1 text-left">
                                    <h5 className="text-body-18 font-semibold">Documentação</h5>
                                    <p className="text-body-14 text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                 </div>
                                 <div className="flex-none w-8 flex-center">
                                    <ChevronRight size={20} className="text-gray-400" />
                                 </div>
                              </Link>
                           </li>
                        ))
                     }
                  </ul>
                  <div className="flex justify-center">
                     <Link href={"/"} className="flex-center gap-1 text-primary font-semibold">
                        <ArrowLeft size={18} />
                        Voltar para página inicial
                     </Link>
                  </div>
               </article>
            </section>
         </div>
         <footer className="w-full border-t border-gray-100 space-y-8 min-h-[110px] flex justify-center items-center flex-col">
            <div className="text-center">
               <p className="text-gray-400 text-body-16">
                  <b>&copy;</b> {" "}
                   Empresa, LDA. Todos os direitos reservados.
               </p>
            </div>
            <ul className="flex-center gap-5">
               {
                  [
                     { icon: <Instagram /> },
                     { icon: <Linkedin /> },
                     { icon: <Facebook /> },
                  ].map((item, index) => (
                     <li key={index} className="text-gray-400">
                        <Link href={""}>{item.icon}</Link>
                     </li>
                  ))
               }
            </ul>
         </footer>
      </main>
   );
}
