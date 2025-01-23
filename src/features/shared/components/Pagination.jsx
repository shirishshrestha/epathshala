import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ nextClick, prevClick, pageNumber, lastPage }) => {
  return (
    <div className="flex gap-[1rem] items-center">
      <Button
        type="button"
        className="py-[10px] px-[15px] shadow-lg rounded-lg flex text-light items-center disabled:bg-gray-300 disabled:text-gray-400"
        onClick={prevClick}
        disabled={pageNumber === 1}
      >
        <ChevronLeft size="size-5" /> Prev
      </Button>
      <div>
        <span className=" font-semibold">{pageNumber}</span> / {lastPage}
      </div>
      <Button
        type="button"
        className=" py-[10px] px-[15px] shadow-lg rounded-lg flex text-light items-center disabled:bg-gray-300 disabled:text-gray-400"
        onClick={nextClick}
        disabled={pageNumber === lastPage}
      >
        Next <ChevronRight size="size-5" />
      </Button>
    </div>
  );
};

export default Pagination;
