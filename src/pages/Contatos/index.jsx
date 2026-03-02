import Container from "../../components/Container";

function Contatos() {
  return (
    <Container>
      <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8 text-center">Contatos</h2>
      <div className="flex justify-center items-center mt-8">
        <img 
          src="/abduction.gif" 
          alt="Abduction" 
          className="max-w-full w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-lg shadow-lg object-contain"
        />
      </div>
      <p className="text-center text-gray-600 mt-4 text-lg">Em breve informações de contato!</p>
    </Container>
  );
}

export default Contatos;
