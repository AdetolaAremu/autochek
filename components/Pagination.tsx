import { useRouter } from "next/router";

interface PaginationControlsProps {
  pageNumber: number;
  pageSize: number;
  total: number;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  pageNumber,
  pageSize,
  total,
}) => {
  const router = useRouter();

  const totalPages = Math.ceil(total / pageSize);

  const goToPage = (page_number: number) => {
    router.push({
      pathname: router.pathname,
      query: { page_number, pageSize },
    });
  };

  return (
    <div className="flex">
      <button
        onClick={() => goToPage(pageNumber - 1)}
        disabled={pageNumber === 1}
        className="bg-gray-800 text-sm text-white px-4 py-2 mt-3 rounded-md flex justify-center mr-2"
      >
        Prev
      </button>
      <button
        onClick={() => goToPage(pageNumber + 1)}
        disabled={pageNumber === totalPages}
        className="bg-gray-800 text-sm text-white px-4 py-2 mt-3 rounded-md flex justify-center"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
