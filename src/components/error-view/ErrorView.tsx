import type {
  QueryObserverResult,
  RefetchOptions,
} from "@tanstack/react-query";

interface IErrorView<TData = unknown, TError = Error> {
  refetch: (
    options?: RefetchOptions,
  ) => Promise<QueryObserverResult<TData, TError>>;
}

export const ErrorView = <TData = unknown, TError = Error>({
  refetch,
}: IErrorView<TData, TError>) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-8 bg-red-100 min-h-screen">
      <div className="text-red-600 font-semibold text-3xl">
        Something went wrong
      </div>
      <button
        type="button"
        onClick={() => refetch()}
        className="px-4 py-2 rounded bg-gray-950 text-white font-semibold mt-4 cursor-pointer"
      >
        Try Again
      </button>
    </div>
  );
};
