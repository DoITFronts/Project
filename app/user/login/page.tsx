import Button from '@/components/ui/Button';
import Gnb from '@/components/layout/Gnb';

export default function Login() {
  return (
    <>
      <Gnb />
      <div className="flex pl-10 pt-10 gap-x-10">
        <div className="">
          <h2 className="font-bold">색칠된 버튼</h2>
          <Button color="filled" className="mb-2">
            생성하기
          </Button>
          <Button color="filled" className="mb-2" disabled>
            생성하기
          </Button>
          <Button size="lg" className="mb-2">
            생성하기
          </Button>
          <Button size="lg" disabled>
            생성하기
          </Button>
        </div>
        <div>
          <h2 className="font-bold">white 버튼</h2>
          <Button color="white" className="mb-2">
            생성하기
          </Button>
          <Button color="white" disabled className="mb-2">
            생성하기
          </Button>

          <Button size="lg" color="white" className="mb-2">
            생성하기
          </Button>
          <Button size="lg" color="white" disabled>
            생성하기
          </Button>
        </div>
      </div>
    </>
  );
}
