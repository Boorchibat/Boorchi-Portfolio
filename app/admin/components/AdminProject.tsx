import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DeleteModal } from "./DeleteModal";
import { DeleteProject } from "@/lib/projects/DeleteProj";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/context/UserContext";
import { UpdateModal } from "./UpdateModal";
import axios from "axios";

export const AdminProject = ({ project }: { project: Project }) => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const { token } = useUser();
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const router = useRouter();
  const handleDelete = async () => {
    if (!token || !project._id) return;
    try {
      setDeleteError(null);
      await DeleteProject(project._id, token);
      setOpenDelete(false);
      router.push("/admin");
      router.refresh();
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setDeleteError(
          err.response?.data?.message || err.message || "Failed to delete item",
        );
      } else if (err instanceof Error) {
        setDeleteError(err.message);
      } else {
        setDeleteError("Failed to delete item");
      }
    }
  };
  return (
    <div className="w-[90%] h-auto bg-slate-800 rounded-lg p-5 flex justify-between items-center">
      <h1 className="text-xl text-white font-bold">{project.title}</h1>
      <div className="flex gap-x-5 items-center">
        <Button
          onClick={() => setOpenUpdate(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Edit
        </Button>
        <Button
          onClick={() => setOpenDelete(true)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </Button>
      </div>
      <DeleteModal
        open={openDelete}
        handleClose={() => setOpenDelete(false)}
        handleConfirm={handleDelete}
        error={deleteError}
      />
      <UpdateModal
        open={openUpdate}
        handleClose={() => setOpenUpdate(false)}
        project={project}
      />
    </div>
  );
};
