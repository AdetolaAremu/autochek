import { useRouter } from "next/router";

interface PaginationControlsProps {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  pageSize,
  totalItems,
}) => {
  const router = useRouter();

  const totalPages = Math.ceil(totalItems / pageSize);

  const goToPage = (page: number) => {
    router.push({
      pathname: router.pathname,
      query: { page, pageSize },
    });
  };

  return (
    <div className="flex">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-gray-800 text-sm text-white px-4 py-2 mt-3 rounded-md flex justify-center mr-2"
      >
        Prev
      </button>
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-gray-800 text-sm text-white px-4 py-2 mt-3 rounded-md flex justify-center"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
