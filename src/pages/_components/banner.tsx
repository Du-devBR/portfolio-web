export function Banner() {
  return (
    <main className="flex gap-16 mt-40">
      <div className="text-foreground max-w-[591px] flex flex-col gap-6">
        <span className="text-3xl">Ola, seja bem vindo!</span>
        <h1 className="text-5xl">
          Eu sou <strong className="text-primary">Eduardo Ananias</strong>,
          ajudo você a tirar sua ideia do papel.
        </h1>
        <p className="text-base">
          Engenheiro Apaixonado por Desenvolvimento de Software, utilizando
          Tecnologias Inovadoras para Construir Aplicações com Qualidade.
        </p>
        <div></div>
      </div>
      <div className="w-full h-2 bg-red-300"></div>
    </main>
  );
}
