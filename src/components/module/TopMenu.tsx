import { topMenu } from "../../data/data";

function TopMenu() {
  return (
    <div className="lg:flex hidden items-center gap-8">
      {topMenu.map((item) => (
        <ul key={item.id}>
          <li className="text-sm cursor-pointer hover:text-[#EF5350] duration-150 font-medium text-gray-900">
            {item.title}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default TopMenu;
