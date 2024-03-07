import JohnSmith from "../assets/JohnSmith.webp";
import EllinaWilliams from "../assets/EllinaWilliams.webp";
const Team = () => {
  return (
    <div className="flex flex-col py-8 px-2 gap-5 mt-14 bg-white md:p-8 rounded-md">
      <h2 className="text-gray-800 font-medium text-xl">Team</h2>
      <p className="text-slate-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minus
        quia laborum nemo a tempore deleniti nostrum debitis delectus maiores
        neque, laudantium explicabo architecto optio voluptate! Debitis quis
        quos qui.
      </p>
      <div className="flex flex-col md:flex-row gap-10   bg-sky-100 rounded-md p-5 items-center">
        <div className="flex flex-col items-center">
          <img src={JohnSmith} alt="" className=" w-24 h-24 rounded-lg" />
          <h3 className="font-semibold text-sm">John Smith</h3>{" "}
          <p className="text-xs text-gray-500">Designation here</p>
        </div>
        <p className="text-sm max-w-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
          voluptas natus deserunt, perspiciatis optio iusto ducimus, unde
          aliquam nemo quis recusandae blanditiis autem assumenda eum
          distinctio. Reprehenderit cupiditate dicta quo. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Rerum, voluptas natus deserunt,
          perspiciatis optio iusto ducimus.
        </p>
      </div>
      <div className="flex flex-col md:flex-row  gap-10   bg-sky-100 rounded-md p-5 items-center">
        <div className="flex flex-col items-center ">
          <img src={EllinaWilliams} alt="" className=" w-24 rounded-lg" />
          <h3 className="font-semibold text-sm">John Smith</h3>
          <p className="text-xs text-gray-500">Designation here</p>
        </div>
        <p className="text-sm max-w-lg lg:max-w-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
          voluptas natus deserunt, perspiciatis optio iusto ducimus, unde
          aliquam nemo quis recusandae blanditiis autem assumenda eum
          distinctio. Reprehenderit cupiditate dicta quo. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Rerum, voluptas natus deserunt,
          perspiciatis optio iusto ducimus.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10   bg-sky-100 rounded-md p-5 items-center">
        <div className="flex flex-col items-center ">
          <img src={JohnSmith} alt="" className=" w-24 h-24 rounded-lg" />
          <h3 className="font-semibold text-sm">John Smith</h3>{" "}
          <p className="text-xs text-gray-500">Designation here</p>
        </div>
        <p className="text-sm max-w-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
          voluptas natus deserunt, perspiciatis optio iusto ducimus, unde
          aliquam nemo quis recusandae blanditiis autem assumenda eum
          distinctio. Reprehenderit cupiditate dicta quo. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Rerum, voluptas natus deserunt,
          perspiciatis optio iusto ducimus.
        </p>
      </div>
    </div>
  );
};
export default Team;
