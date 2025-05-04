"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-6 bg-red-50 text-[var(--color-warning)]">
      <h2>
        Błąd ładowania repozytoriów 😢, Sprawdź połączenie z siecią i spróbuj
        ponownie!
      </h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-red-100 rounded cursor-pointer"
      >
        Spróbuj ponownie
      </button>
    </div>
  );
}
