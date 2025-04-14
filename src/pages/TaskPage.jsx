import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6 ">
          <button
            onClick={() => navigate(-1)}
            className=" absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Title>DETALHES da tarefa local</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="space-y-4 text-center bg-slate-100 rounded-md shadow text-xl font-bold text-slate-600 whitespace-pre-wrap break-words ">
            {title}
          </h2>

          <p className="space-y-4 p-6 text-center bg-slate-100 rounded-md shadow mt-2 min-h-[250px] text-slate-600 whitespace-pre-wrap break-words overflow-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
