import Container from "../../components/Container";

function Projetos() {
  return (
    <Container>
      <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8 text-center">Projetos</h2>
      <div className="flex justify-center items-center mt-8">
        <img 
          src="/confused john travolta.gif" 
          alt="Confused John Travolta" 
          className="max-w-full w-64 md:w-96 lg:w-[500px] rounded-lg shadow-lg"
        />
      </div>
      <p className="text-center text-gray-600 mt-4 text-lg">Em breve novos projetos!</p>
    </Container>
  );
}

export default Projetos;
