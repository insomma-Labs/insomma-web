import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function DedicatedServersPage() {
  return (
    <>
      <Header />

      <Container className="font-inter-sans tracking-tighter py-0">
        <div className="h-screen flex items-center justify-center">
          <div className="">
            <h1 className="text-4xl font-bold text-center mb-8">
              Coming Soon!
            </h1>
            <p className="max-w-xl text-balance text-lg text-muted-foreground text-center mb-12">
              We’re getting everything ready to offer you our Dedicated Servers
              very soon. Stay tuned!
            </p>
            <form className="flex flex-col md:flex-row justify-center items-center">
              <input
                className="w-full md:w-80  h-10 px-4 rounded-l-2xl border text-gray-800 dark:text-white border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700"
                type="email"
                placeholder="Enter your email address"
              />
              <Button
                variant="outline"
                className="h-10 rounded-r-2xl rounded-l-none bg-blue-600 text-secondary hover:bg-blue-700"
              >
                Notify me
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}
