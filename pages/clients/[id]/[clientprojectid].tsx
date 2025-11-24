import { useRouter } from 'next/router';

export default function SelectedClientProjectPage() {
  const router = useRouter();
  const clientId = router.query.id;
  const clientProjectId = router.query.clientprojectid;

  return (
    <div>
        <h1>Selected Client Project</h1>
        <p>Your project of snapshots</p>
        <p>Client ID: {clientId}</p>
        <p>Client Project ID: {clientProjectId}</p>
    </div>
  );
}