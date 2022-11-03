import { ImBooks, ImBookmarks } from "react-icons/im";
import Image from "next/image";
import { coursesData } from "../../../utils/fakeData";
import { BsFillBookmarksFill } from "react-icons/bs";
export default function CourseDetail({ params }: { params: { slug: string } }) {
  const currentData = coursesData.find((c) => c.slug === params.slug)!;
  return (
    <>
      <div className="container mx-auto bg-white min-h-full p-5">
        {/* <h2 className="uppercase font-bold text-2xl bg-gray-100 p-3 rounded-md text-indigo-500 flex items-center gap-3">
          <ImBooks />
          {currentData.name}
        </h2> */}
        <div className="flex gap-10">
          <div className="max-w-96 flex justify-center p-5">
            <Image
              className="rounded-full"
              src={"/assets/baged.jpg"}
              alt={"Course baged"}
              width={512}
              height={512}
            />
          </div>
          <div className="w-full p-5">
            <h2 className="uppercase font-bold text-2xl bg-gray-100 p-3 rounded-md text-indigo-500 flex items-center gap-3 shadow-lg">
              <ImBooks />
              {currentData.name}
            </h2>
            <div>
              {/* <h3 className="text-cyan-600 p-5 font-semibold flex items-center gap-3">
                <BsFillBookmarksFill />
                Giới thiệu khóa học
              </h3> */}
              <section className="p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  quisquam alias autem. Nam sit temporibus reprehenderit
                  deserunt. Perspiciatis et enim, amet vero explicabo mollitia
                  quasi labore impedit, velit, commodi architecto.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                  reiciendis velit obcaecati, explicabo id nesciunt quae
                  cupiditate odit unde voluptatum, sapiente nihil totam
                  accusamus ab est temporibus blanditiis mollitia nemo.
                </p>
              </section>
            </div>
          </div>
        </div>
        <div className="w-full p-5">
          <h2 className="font-bold text-2xl bg-gray-100 p-3 rounded-md text-indigo-500 flex items-center gap-3 shadow-lg">
            <ImBookmarks />
            Giáo trình
          </h2>
          <div>
            <ul>
              {Array.from({ length: 10 }, (v, k) => k).map((k) => (
                <li key={`topic_${k}`} className="my-5">
                  <h3 className="border-b border-b-indigo-500  inline-block p-2">
                    Chương {k + 1}
                  </h3>
                  <p className="my-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Accusantium nisi in ducimus. Illum a tempore molestiae
                    expedita. Eos consequatur animi, natus minima veniam sed
                    cumque maiores, sint corrupti quae aliquam!
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
