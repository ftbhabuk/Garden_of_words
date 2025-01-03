import ChatComponent from "./components/ChatComponent";
import GardenOfWords from "./components/GardenOfWords";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            {/* <h1 className="text-4xl font-bold mb-8">Welcome to Magic Spell</h1>
            <p className="text-xl mb-12 text-center max-w-2xl">
                Transform your writing with AI-powered suggestions and improvements.
                Start typing below to experience the magic. */}
                <GardenOfWords />
            {/* </p> */}
            
            {/* Import the ChatComponent here */}
            <div className="w-full max-w-4xl">
                {/* <ChatComponent /> */}
            </div>
        </div>
    );
}