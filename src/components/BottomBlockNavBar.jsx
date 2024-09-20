const BottomBlock = ({style}) => {
  const options = [
    "Products",
    "Start selling",
    "Tools and apps",
    "Pricing",
    "Resources",
    "Pro Sellers",
    "GelatoConnect",
  ];

  return (
    <div className={` ${style}`}>
      {options.map((option, index) => (
        <div className="relative" key={index}>
          <select className="font-[550] bg-transparent border-none p-2 rounded">
            <option>{option}</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default BottomBlock;
