import Header from "@/components/header";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <>
      <Header />

      <Container className="w-full py-60 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/10295/10295958.png"
            alt=""
            className="size-44"
          />
          <h4 className="text-2xl font-bold font-inter-sans tracking-tighter">
            Pagina en construccion, vuelve pronto^^
          </h4>
        </div>
      </Container>
    </>
  );
}
