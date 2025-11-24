import { useRouter } from 'next/router';

export default function PortfolioProjectPage() {
  const router = useRouter();
  const projectId = router.query.projectid;
  
  return (
    <div>
        <h1>Portfolio Project</h1>
        <p>Your project of snapshots</p>
        <p>Project ID: {projectId}</p>
    </div>
  );
}