function Navbar({increment, decrement}) {
  return (
    <>
      <button onClick={decrement}>Prev</button>
      <button onClick={increment}>Next</button>
    </>
  );
}

export default Navbar;
