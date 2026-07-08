import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCreateWorkspace } from "../hooks/useWorkspaces";

function DashboardPage() {
  const navigate = useNavigate();

  const createWorkspaceMutation =
    useCreateWorkspace();

  const [name, setName] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!name.trim()) {
      alert(
        "Workspace name is required."
      );
      return;
    }

    try {
      await createWorkspaceMutation.mutateAsync(
        {
          name,
          description,
        }
      );

      navigate("/workspace");
    } catch (error) {
      console.error(error);
      alert(
        "Failed to create workspace."
      );
    }
  };

  return (
    <div className="max-w-xl">
      <h2 className="text-2xl font-bold mb-6">
        Dashboard
      </h2>

      <div className="rounded-lg border p-6">
        <h3 className="text-xl font-semibold mb-4">
          Create Workspace
        </h3>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label className="block mb-2 font-medium">
              Workspace Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full rounded border p-2"
              placeholder="Enter workspace name"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              className="w-full rounded border p-2"
              rows={4}
              placeholder="Enter workspace description"
            />
          </div>

          <button
            type="submit"
            disabled={
              createWorkspaceMutation.isPending
            }
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {createWorkspaceMutation.isPending
              ? "Creating..."
              : "Create Workspace"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default DashboardPage;