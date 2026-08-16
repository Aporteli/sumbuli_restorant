```jsx
useEffect(() => {
  // 1. აქ იწერება კოდი, რომელიც გინდა რომ შესრულდეს (Side Effect)
  console.log("კომპონენტი ჩაიტვირთა ან განახლდა");

  return () => {
    // 2. (არასავალდებულო) აქ იწერება კოდი, რომელიც ასუფთავებს ძველ ეფექტებს (Cleanup)
    // მაგალითად: ივენთების მოხსნა, ტაიმერების გათიშვა
  };
}, [/* 3. დამოკიდებულებების მასივი (Dependency Array) */]);

useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);
  
  // ვამატებთ ივენთს
  window.addEventListener("resize", handleResize);

  // როცა კომპონენტი დაიხურება, აუცილებლად ვშლით ივენთს, მეხსიერება რომ არ გადაიტვირთოს
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);


