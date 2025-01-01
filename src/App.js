import './App.css';

function App() {
  return (
    <div className="container-fluid h-dvh bg-slate-800">
      <header className="container-fluid flex flex-row text-1xl text-neutral-500 font-medium w-full h-1/6 justify-center">
        <div className="w-1/4 h-min flex flex-row justify-evenly self-end">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </header>

      <main className="container-fluid justify-center flex h-3/4">

       <div className="container-fluid bg-slate-800 flex flex-col w-full min-h-1/4 items-center justify-center gap-y-6">

        <p className="text-6xl text-gray-100">Hi, I'm Omar.</p>

        <p className="text-4xl text-gray-200">I'm a full-stack web developer.</p>
        <p className="text-1xl text-gray-500">(and a video game dev in my free time)</p>

        <div className="buttons container-fluid flex flex-col w-1/6 h-22 text-black items-center justify-between">
          <button class="bg-neutral-300 block w-full h-16 m-4 text-2xl text-center">GET MY RESUME</button>
          <button class="bg-neutral-300 block w-full h-16 m-4 text-2xl text-center">LEARN MORE</button>
        </div>
       </div>

      </main>
    </div>
  );
}

export default App;
