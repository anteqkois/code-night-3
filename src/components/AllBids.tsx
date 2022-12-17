import { UserIcon } from '@heroicons/react/24/outline';

const AllBids = () => {
  return (
    <main>
      <h2>Ostatnie przebicia:</h2>
      <div className="flex gap-4">
        <div className="flex w-fit p-4 my-4 flex-col justify-center items-center border border-primary-orange">
          <div className="flex gap-2">
            <UserIcon
              width={24}
              height={24}
            />
            <h4>adam123</h4>
          </div>
          <h3>2400(+100)$</h3>
          <h5>2022-12-17 03:34</h5>
        </div>
        <div className="flex w-fit p-4 my-4 flex-col justify-center items-center border border-primary-orange">
          <div className="flex gap-2">
            <UserIcon
              width={24}
              height={24}
            />
            <h4>adam123</h4>
          </div>
          <h3>2400(+100)$</h3>
          <h5>2022-12-17 03:34</h5>
        </div>
        <div className="flex w-fit p-4 my-4 flex-col justify-center items-center border border-primary-orange">
          <div className="flex gap-2">
            <UserIcon
              width={24}
              height={24}
            />
            <h4>adam123</h4>
          </div>
          <h3>2400(+100)$</h3>
          <h5>2022-12-17 03:34</h5>
        </div>
        <div className="flex w-fit p-4 my-4 flex-col justify-center items-center border border-primary-orange">
          <div className="flex gap-2">
            <UserIcon
              width={24}
              height={24}
            />
            <h4>adam123</h4>
          </div>
          <h3>2400(+100)$</h3>
          <h5>2022-12-17 03:34</h5>
        </div>
        <div className="flex w-fit p-4 my-4 flex-col justify-center items-center border border-primary-orange">
          <div className="flex gap-2">
            <UserIcon
              width={24}
              height={24}
            />
            <h4>adam123</h4>
          </div>
          <h3>2400(+100)$</h3>
          <h5>2022-12-17 03:34</h5>
        </div>
      </div>
    </main>
  );
};

export default AllBids;
