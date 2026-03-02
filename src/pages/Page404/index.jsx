import Container from "../../components/Container";

function Page404() {
  return (
    <Container>
      <h2 className="pt-8 text-xl md:text-2xl font-bold text-center">Algo de errado não está certo!</h2>
      <div className="flex items-center justify-center flex-col">
        <span className="text-[150px] sm:text-[200px] md:text-[300px] text-red font-bold leading-none">404</span>
        <strong className="text-lg sm:text-xl md:text-2xl text-red font-bold text-center">Página não encontrada.</strong>
      </div>
    </Container>
  );
}

export default Page404;