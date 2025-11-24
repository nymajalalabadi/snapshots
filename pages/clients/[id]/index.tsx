import { useRouter } from "next/router";

export default function SelectedClientPage() {
  const router = useRouter();
  const clientId = router.query.id;

  return (
    <div>
        <h1>Client Project</h1>
        <p>Your project of snapshots</p>
        <p>Client ID: {clientId}</p>
    </div>
  );
}