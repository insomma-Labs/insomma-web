import Header from "@/components/header";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <>
      <Header />

      <Container className="w-full py-60 flex justify-center items-center">
        <main className="flex flex-col justify-center items-center gap-4 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/10295/10295958.png"
            alt="Under Construction Icon"
            className="size-44"
          />
          <h1 className="text-2xl font-bold font-inter-sans tracking-tighter">
            Page under construction. Please check back soon!
          </h1>
        </main>
      </Container>
    </>
  );
}
