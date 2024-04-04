import { useDashboard } from "@/hooks";

export const dashboard = () => {
  const { loading, user } = useDashboard();
  return (
    <div className="h-screen flex items-center justify-center py-52">
      {!loading && (
        <h1>
          You are successfully logged in! Welcome Mr {user?.username} with email
          of {user?.email}
        </h1>
      )}
    </div>
  );
};

export default dashboard;
