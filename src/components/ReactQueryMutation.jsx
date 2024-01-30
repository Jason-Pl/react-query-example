import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const ReactQueryMutation = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isSuccess, error, mutate } = useMutation({
    mutationFn: (newQuote) =>
      axios
        .patch(`https://httpbin.org/anything`, { comment: newQuote })
        .then(({ data }) => data),
    onSuccess: (newQuote) => {
      // ✅ update detail view directly
      queryClient.setQueryData(["sendQuote"], newQuote);

      queryClient.refetchQueries(["sendQuote"]);

      queryClient.invalidateQueries(["sendQuote"]);

      // refetch all queries:
      queryClient.refetchQueries();

      // refetch all stale queries:
      queryClient.refetchQueries({ stale: true });

      // refetch all active queries partially matching a query key:
      queryClient.refetchQueries(["sendQuote"], { active: true });

      // refetch all active queries exactly matching a query key:
      queryClient.refetchQueries(["sendQuote", 1], {
        active: true,
        exact: true,
      });
    },
    onError: () => {},
    onSettled: () => {},
  });

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>{`An error has occurred: ${error.message}`}</span>;

  return (
    <>
      <h2 className="font-bold text-center">Mutation</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          // ✅ mutation is invoked when the form is submitted
          mutate(new FormData(e.currentTarget).get("comment"));
        }}
        className="flex flex-col justify-center m-5"
      >
        <textarea
          placeholder="Your text..."
          className="border block mx-auto p-5"
          name="comment"
          rows={5}
          cols={100}
        />
        <button
          className="bg-blue-400 hover:bg-blue-500 font-semibold text-white border mx-auto px-3 py-2 mt-3 rounded"
          type="submit"
        >
          Comment
        </button>
      </form>
      {isSuccess && <span>{data.data}</span>}
    </>
  );
};

export default ReactQueryMutation;
