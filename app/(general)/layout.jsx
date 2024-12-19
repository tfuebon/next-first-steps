import { Navbar } from "../components";

export default function GeneralLayout({children}) {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col p-6">
                <span className="text-lg">Hola mundo</span>
                {children}
            </main>
        </>
    );
}