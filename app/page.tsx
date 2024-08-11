import Image from "next/image";
import { promises as fs } from "fs";

export default async function Page() {
  return (
    <main className="bg-main-color desktop:bg-[#ffff] desktop:grid-cols-2 desktop:rounded-[30px] grid max-w-[700px]">
      <Performance />
      <Summary />
    </main>
  );
}

// PERFORMANCE, grid 1 / 2//
const Performance = () => {
  return (
    <div className="desktop:py-[40px] desktop:px-[30px] desktop:rounded-[30px] text-wrap rounded-bl-[30px] rounded-br-[30px] bg-gradient-to-t from-gradients-royalblue to-gradients-slateblue px-[20px] py-[25px] text-center ">
      <h2 className="desktop:text-[24px] text-[18px] font-medium text-neutral-lightlavender">
        Your Result
      </h2>
      <p className="desktop:mt-[85px] desktop:text-[72px] desktop:before:w-[170px] desktop:before:h-[170px] desktop:font-bold relative z-10 mt-[65px] text-[56px] leading-[45px] text-[#ffff] content-none before:absolute before:left-[50%] before:top-[50%] before:z-[-1] before:block before:h-[150px] before:w-[150px] before:translate-x-[-50%] before:translate-y-[-60%] before:rounded-full before:bg-gradient-to-b before:from-gradients-circle-violetblue/100 before:to-gradients-circle-persianblue/0">
        76<span className="block text-[16px] text-[#c8c7ff]/50">of 100</span>
      </p>
      <p className="desktop:text-[32px] desktop:font-bold mt-[40px] text-[24px] text-[#ffff]">
        Great
      </p>
      <p className="desktop:mt-[17px] desktop:text-[18px] desktop:text-pretty mb-[10px] mt-[5px] text-[16px] text-neutral-lightlavender">
        Your performance exceed 65% of the people conducting the test here!
      </p>
    </div>
  );
};

type DataItem = {
  category: string;
  score: string;
};

type FetchedData = DataItem[];

// SUMMARY, grid 2 / 2//
const Summary = async () => {
  const res = await fs.readFile(process.cwd() + "/data/data.json", "utf8");
  const data: FetchedData = JSON.parse(res);
  // const res = await fetch("http://localhost:4000/data");
  // const data: FetchedData = await res.json();

  return (
    <div className="desktop:px-[35px] desktop:py-[40px] px-[25px] py-[30px] ">
      <h2 className="desktop:text-[24px] font-neutral-grayblue text-[18px] font-bold">
        Summary
      </h2>
      <div className="mt-[30px] flex flex-col gap-[15px]">
        {data
          ? data.map((el) => <Item el={el} key={el.category} />)
          : "error fetching"}
      </div>
      <a
        className="mt-[25px] block rounded-full bg-gradient-to-t from-neutral-grayblue to-neutral-grayblue p-[16px] text-center text-[#ffff] hover:bg-gradient-to-t hover:from-gradients-royalblue hover:to-gradients-slateblue"
        href="#"
      >
        Continue
      </a>
    </div>
  );
};

type ItemProps = {
  el: DataItem;
};

const Item = ({ el }: ItemProps) => {
  let bgcolor;
  let textcolor;
  if (el.category === "Reaction") {
    bgcolor = "bg-primary-lightred/[.05]";
    textcolor = "text-primary-lightred";
  }
  if (el.category === "Memory") {
    bgcolor = "bg-primary-orangeyellow/[.05]";
    textcolor = "text-primary-orangeyellow";
  }
  if (el.category === "Verbal") {
    bgcolor = "bg-primary-greenteal/[.05]";
    textcolor = "text-primary-greenteal";
  }
  if (el.category === "Visual") {
    bgcolor = "bg-primary-cobaltblue/[.05]";
    textcolor = "text-primary-cobaltblue";
  }

  return (
    <>
      <div
        className={`${bgcolor} flex place-content-between rounded-[10px] px-[12px] py-[15px]`}
      >
        <div className="flex gap-[15px]">
          <Image
            src={`/assets/images/icon-${el.category}.svg`}
            alt="summary icon"
            width={20}
            height={20}
          ></Image>
          <p className={textcolor}>{el.category}</p>
        </div>
        <p className="font-neutral-grayblue font-extrabold">
          {el.score}
          <span className="font-medium opacity-50"> / 100</span>
        </p>
      </div>
    </>
  );
};
