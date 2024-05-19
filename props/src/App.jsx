import Student from './Student';

function App() {
  return(
    <>
      <Student name="Spongebob" age={30} isStudent={false}/>
      <Student name="Patrick" age={32} isStudent={false}/>
      <Student name="Squidward" age={35} isStudent={false}/>
    </>
  );

}

export default App
