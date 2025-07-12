'use client';

import { useState } from 'react';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: replace with real auth logic
        console.log({ username, password });
    };

    return (
        <main className="min-h-screen flex items-center justify-center
                     bg-neutral-950 px-4">
            <form
                onSubmit={handleLogin}
                className="w-full max-w-sm space-y-5 rounded-xl border
                   border-white/10 bg-neutral-900/70 p-8
                   text-gray-200 shadow-lg backdrop-blur"
            >
                <h1 className="text-center text-2xl font-semibold">Sign in</h1>

                <div>
                    <label htmlFor="username" className="block text-sm mb-1">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="w-full rounded border border-white/20 bg-neutral-800
                       px-3 py-2 text-gray-100 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm mb-1">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full rounded border border-white/20 bg-neutral-800
                       px-3 py-2 text-gray-100 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full rounded bg-blue-600 py-2 font-medium
                     transition hover:bg-blue-700 focus:outline-none
                     focus:ring-2 focus:ring-blue-500"
                >
                    Sign in
                </button>
            </form>
        </main>
    );
}
