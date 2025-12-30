export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradiente de fondo principal */}
      

      {/* Orbes flotantes animadas */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />


      {/* Puntos decorativos */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-800 rounded-full opacity-40 animate-ping" />
      <div className="absolute top-40 right-20 w-2 h-2 bg-purple-800 rounded-full opacity-40 animate-ping" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-pink-800 rounded-full opacity-40 animate-ping" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-blue-800 rounded-full opacity-40 animate-ping" style={{ animationDelay: '1.5s' }} />
    </div>
  );
}
