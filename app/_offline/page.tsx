"use client"

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="text-center">
        <div className="mb-4 text-6xl">📡</div>
        <h1 className="text-3xl font-bold tracking-tight">You're Offline</h1>
        <p className="mt-2 text-muted-foreground">Please check your internet connection and try again.</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Retry
        </button>
      </div>
    </div>
  )
}
