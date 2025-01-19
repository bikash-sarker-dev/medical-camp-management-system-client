import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { CardHeader, Input } from "@material-tailwind/react";

const SearchDashboard = () => {
  return (
    <div>
      <CardHeader
        floated={false}
        shadow={false}
        className=" rounded-none  max-w-md  bg-camp-default"
      >
        <div className="w-full ">
          <Input
            label="Search Invoice"
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          />
        </div>
      </CardHeader>
    </div>
  );
};

export default SearchDashboard;
