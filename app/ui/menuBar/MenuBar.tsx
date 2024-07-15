const MenuBar = () => {
  const menuItems = ["vector", "Illustrations", "Images", "Icons"];
  return (
    <>
      {/*Menu Container*/}
      <div className="flex flex-col items-center justify-center mb-24 space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:justify-end">
        {/*Menu Items*/}
        {menuItems.map((item, index) => (
          <div className="group">
            <a href="#">{item}</a>
            <div className="mx-2 mt-2 duration-500 border-b-2 border-black opacity-0 group-hover:opacity-100"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuBar;
