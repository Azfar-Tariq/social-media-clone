export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-white text-2xl">Profile</h1>
      <hr />
      <p className="text-4xl">Profile page</p>
      <span className="p-2 rounded-lg bg-emerald-400 text-black">
        {params.id}
      </span>
    </div>
  );
}
