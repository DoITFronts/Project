import Button from '@/components/ui/Button';

export default function Login() {
  return (
    <div>
      <Button color="filled">Filled버튼</Button>
      <Button size="lg">Filled버튼</Button>

      <Button color="white">White버튼</Button>
      <Button size="lg" color="white">
        White버튼
      </Button>

      <Button disabled="true">Filled버튼(Disalbed)</Button>
      <Button size="lg" disabled="true">
        Filled버튼(Disalbed)
      </Button>

      <Button disabled="true" color="white">
        White버튼(Disalbed)
      </Button>
      <Button size="lg">White버튼(Disalbed)</Button>
    </div>
  );
}
