import Select from '@/components/Select';
import Timer from '@/components/Timer';

export default function Home() {
  return (
    <div className="lg:w-1/3 flex flex-col gap-12 p-6 rounded-lg shadow-lg bg-base-300">

      <div className="w-full flex flex-row justify-between gap-4">
        <Select type="disciplina" />

        <Select type="tema" />
      </div>

      <Timer/>

    </div>
  );
}
