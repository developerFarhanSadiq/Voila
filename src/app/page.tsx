import ChatInterface from "@/components/chat/chat-interface";

export default function Home() {
  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center cosmic-background">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background/80 backdrop-blur-sm"></div>
      <div className="absolute inset-0 -z-20 h-full w-full">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      <div className="w-full h-full sm:h-auto sm:max-w-4xl sm:mx-4">
        <ChatInterface />
      </div>
    </main>
  );
}
