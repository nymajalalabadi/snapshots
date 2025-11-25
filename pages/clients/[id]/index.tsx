import { useRouter } from "next/router";

export default function SelectedClientPage() {
  const router = useRouter();
  const clientId = router.query.id;

  const loadProjectHandler = () => {
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'maxwell', clientprojectid: 'project1' }
    });
  };

  return (
    <div>
        <h1>Client Project</h1>
        <p>Your project of snapshots</p>
        <p>Client ID: {clientId}</p>
        <button onClick={loadProjectHandler}>Go to Project 1</button>
    </div>
  );
}