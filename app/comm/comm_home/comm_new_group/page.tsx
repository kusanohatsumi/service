import CreateGroup from '@/ui/communityItem/craete_group';

export default function comm_new_group() {
  return (
    <>
      <div className="flex">
        <div className=" px-4 py-4">✕</div>

        <div className=" mr-10 py-4">作成</div>
      </div>

      <CreateGroup></CreateGroup>
    </>
  );
}
